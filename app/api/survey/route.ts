import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(request: Request) {
  const { email, answer } = await request.json()

  if (!answer) {
    return NextResponse.json({ error: '답변을 선택해주세요' }, { status: 400 })
  }

  const { error } = await supabase.from('survey').insert({ email, answer })

  if (error) {
    return NextResponse.json({ error: '저장 중 오류가 발생했어요' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
