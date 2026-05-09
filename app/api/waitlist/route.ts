import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(request: Request) {
  const { email } = await request.json()

  if (!email) {
    return NextResponse.json({ error: '이메일을 입력해주세요.' }, { status: 400 })
  }

  const { error: dbError } = await supabase.from('waitlist').insert({ email })

  if (dbError) {
    return NextResponse.json({ error: '신청 중 오류가 발생했어요.' }, { status: 500 })
  }

  await resend.emails.send({
    from: 'Bloom <hello@bloomday.co.kr>',
    replyTo: 'smile.bloom@gmail.com',
    to: email,
    subject: '🌸 Bloom 출시 알림 신청이 완료됐어요',
    html: `
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:#FFF5F8;font-family:system-ui,-apple-system,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:48px 24px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:480px;background:#ffffff;border-radius:16px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background:#FFF5F8;padding:40px 40px 32px;text-align:center;">
              <p style="margin:0 0 12px;font-size:32px;">🌸</p>
              <p style="margin:0;font-size:22px;font-weight:700;color:#2E2E2E;letter-spacing:-0.3px;">Bloom</p>
            </td>
          </tr>

          <!-- Hook -->
          <tr>
            <td style="background:#FFE8F0;padding:24px 40px;text-align:center;">
              <p style="margin:0;font-size:15px;font-weight:600;color:#E06A8C;letter-spacing:-0.2px;">
                "다음 기념일엔 꽃집 검색 말고, Bloom 여세요."
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;color:#2E2E2E;">
              <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#2E2E2E;">
                안녕하세요!<br/>
                Bloom 출시 알림을 신청해주셔서 감사해요.
              </p>
              <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#4B4B4B;">
                앱이 출시되는 날, 가장 먼저 소식을 전해드릴게요.<br/>
                특별한 오픈 혜택도 준비하고 있으니 기대해주세요 🌷
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px 40px;border-top:1px solid #F9C8D9;">
              <p style="margin:0 0 8px;font-size:13px;color:#7A6670;">— Bloom</p>
              <p style="margin:0;font-size:11px;color:#bbb;line-height:1.6;">
                본 메일은 Bloom 출시 알림을 신청하신 분께 발송됩니다.<br/>
                수신을 원하지 않으시면 <a href="mailto:smile.bloom@gmail.com" style="color:#F48FB1;">smile.bloom@gmail.com</a>으로 알려주세요.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
  })

  return NextResponse.json({ success: true })
}
