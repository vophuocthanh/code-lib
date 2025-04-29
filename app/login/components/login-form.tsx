'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import classNames from 'classnames'

export default function LoginForm() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const handleLogin = async () => {
    if (!email || !password) {
      setMessage('Vui lòng nhập đầy đủ thông tin')
      return
    }

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      const { message } = await response.json()
      setMessage(message)
    } catch {
      setMessage('Đã xảy ra lỗi khi gọi API')
    }
  }

  return (
    <div className='flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4'>
      <div className='flex w-full max-w-md flex-col gap-6 rounded-lg bg-white p-8 shadow-2xl'>
        <h1 className='text-center text-3xl font-bold text-gray-800'>Đăng nhập</h1>

        <div className='space-y-4'>
          <Input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            className='w-full border-gray-300 transition-all focus:border-indigo-500 focus:ring-indigo-500'
          />
          <Input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Mật khẩu'
            className='w-full border-gray-300 transition-all focus:border-indigo-500 focus:ring-indigo-500'
          />
        </div>

        <Button
          onClick={handleLogin}
          className='w-full bg-indigo-600 py-2 text-lg font-semibold text-white transition-colors duration-200 hover:bg-indigo-700'
        >
          Đăng nhập
        </Button>
        {message && (
          <p
            className={classNames('text-center text-green-500', {
              'text-red-500': message.includes('Email hoặc mật khẩu không đúng')
            })}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  )
}
