import { NextResponse } from 'next/server'

import HttpStatusCode from '@/core/constant/status-http'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // TODO: Implement actual authentication logic here
    // For now, return a mock response
    return NextResponse.json(
      {
        message: 'Login successful',
        user: {
          id: '1',
          email: body.email,
          name: 'Test User'
        }
      },
      { status: HttpStatusCode.Ok }
    )
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ message: 'Invalid request' }, { status: HttpStatusCode.BadRequest })
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Phương thức GET không được hỗ trợ cho đăng nhập' },
    { status: HttpStatusCode.MethodNotAllowed }
  )
}
