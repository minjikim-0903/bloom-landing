import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { password } = await request.json()

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: '비밀번호가 틀렸어요' }, { status: 401 })
  }

  const res = NextResponse.json({ success: true })
  res.cookies.set('admin_token', process.env.ADMIN_PASSWORD!, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  })
  return res
}
