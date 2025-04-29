import { httpClient } from '@/core/service/http-client'
import type { Account, LoginResponse, RegisterReponse } from '@/model/interface/auth.interface'

const API_LOGIN_URL = '/auth/login'
const API_REGISTER_URL = '/auth/register'
const API_LOGOUT_URL = '/auth/logout'
const API_REFRESH_TOKEN_URL = '/auth/refresh-token'
export const authApi = {
  login(params: Account): Promise<LoginResponse> {
    return httpClient.post(API_LOGIN_URL, params)
  },
  register(params: Account): Promise<RegisterReponse> {
    return httpClient.post(API_REGISTER_URL, params)
  },
  logout() {
    return httpClient.post(API_LOGOUT_URL)
  },
  refreshToken() {
    return httpClient.post(API_REFRESH_TOKEN_URL)
  }
}
