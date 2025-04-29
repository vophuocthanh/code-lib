import { authApi } from '@/core/service/auth.service'
import { clearLS, getAccessTokenFromLS, setAccessTokenToLS } from '@/core/utils/storage'
import { LoginResponse } from '@/model/interface/auth.interface'
import axios, { AxiosError, HttpStatusCode } from 'axios'
import { isEqual } from 'lodash'
import { redirect } from 'next/navigation'

const ECONNABORTED = 'ECONNABORTED'

type HttpErrorPayload = {
  msg: string
  [key: string]: any
}

type UnprocessableEntityErrorPayload = HttpErrorPayload & {
  errors: { [key: string]: string }
}

export class HttpError extends Error {
  status: number
  payload: HttpErrorPayload
  constructor(status: number, payload: HttpErrorPayload) {
    super(payload?.msg || 'Http Error')
    this.status = status
    this.payload = payload
  }
}

export class UnprocessableEntityError extends HttpError {
  status = HttpStatusCode.UnprocessableEntity
  payload: UnprocessableEntityErrorPayload
  constructor(payload: UnprocessableEntityErrorPayload) {
    super(HttpStatusCode.UnprocessableEntity, payload)
    this.payload = payload
  }
}

const isClient = typeof window !== 'undefined'

export const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

let isRefreshing = false
let failedQueue: Array<(token: string) => void> = []

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom(null as any)
    else prom(token as string)
  })
  failedQueue = []
}

httpClient.interceptors.request.use(
  (config) => {
    const baseUrl = config.baseURL === '' ? process.env.NEXT_PUBLIC_API_URL : config.baseURL
    config.baseURL = baseUrl

    if (isClient) {
      const accessToken = getAccessTokenFromLS()
      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`
      }
    }
    return config
  },
  (error) => Promise.reject(error)
)

httpClient.interceptors.response.use(
  (response) => {
    if (isClient) {
      const url = response.config.url ?? ''
      if (['/api/auth/login'].includes(url)) {
        const { access_token } = response.data as LoginResponse
        setAccessTokenToLS(access_token)
      } else if (isEqual(url, '/api/auth/logout')) {
        clearLS()
      }
    }
    return response
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as any

    if (isEqual(error.response?.status, HttpStatusCode.UnprocessableEntity)) {
      throw new UnprocessableEntityError(error.response?.data as UnprocessableEntityErrorPayload)
    }

    if (isEqual(error.response?.status, HttpStatusCode.Unauthorized) && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve) => {
          failedQueue.push((token) => {
            if (token) {
              originalRequest.headers['Authorization'] = `Bearer ${token}`
              resolve(httpClient(originalRequest))
            } else {
              resolve(Promise.reject(error))
            }
          })
        })
      }

      originalRequest._retry = true
      isRefreshing = true

      try {
        const { data: newToken } = await authApi.refreshToken()
        setAccessTokenToLS(newToken)
        originalRequest.headers['Authorization'] = `Bearer ${newToken}`
        processQueue(null, newToken)
        return httpClient(originalRequest)
      } catch (refreshError) {
        processQueue(refreshError, null)
        await authApi.logout()
        clearLS()
        if (isClient) {
          window.location.href = '/login'
        } else {
          redirect('/login')
        }
        return Promise.reject(refreshError)
      } finally {
        isRefreshing = false
      }
    }

    throw new HttpError(error.response?.status ?? 500, error.response?.data as HttpErrorPayload)
  }
)

httpClient.interceptors.response.use(undefined, async (error: AxiosError) => {
  const config = error.config as any
  if (!config || (isEqual(error.code, ECONNABORTED) && config._retryCount < 3)) {
    config._retryCount = (config._retryCount || 0) + 1
    await new Promise((resolve) => setTimeout(resolve, 1000 * config._retryCount))
    return httpClient(config)
  }
  return Promise.reject(error)
})
