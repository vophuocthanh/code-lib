import HttpStatusCode from '@/core/constant/status-http'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (email === 'user@example.com' && password === 'password123') {
      return NextResponse.json({ message: 'Đăng nhập thành công', user: { email } }, { status: HttpStatusCode.Ok })
    } else {
      return NextResponse.json({ message: 'Email hoặc mật khẩu không đúng' }, { status: HttpStatusCode.Unauthorized })
    }
  } catch (error) {
    return NextResponse.json(
      { message: 'Có lỗi xảy ra', error: String(error) },
      { status: HttpStatusCode.InternalServerError }
    )
  }
}

export async function GET(request: NextRequest) {
  return NextResponse.json(
    { message: 'Phương thức GET không được hỗ trợ cho đăng nhập' },
    { status: HttpStatusCode.MethodNotAllowed }
  )
}
