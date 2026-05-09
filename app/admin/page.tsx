import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function AdminPage() {
  const [{ data: waitlist }, { data: survey }] = await Promise.all([
    supabase.from('waitlist').select('*').order('created_at', { ascending: false }),
    supabase.from('survey').select('*').order('created_at', { ascending: false }),
  ])

  const surveyStats: Record<string, number> = {}
  survey?.forEach((r) => {
    surveyStats[r.answer] = (surveyStats[r.answer] ?? 0) + 1
  })

  return (
    <main style={{ minHeight: '100vh', background: '#f8f8f8', padding: '48px 24px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>

        <div>
          <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#1a1a1a', marginBottom: '4px' }}>🌸 Bloom Admin</h1>
        </div>

        {/* 웨이트리스트 */}
        <div>
          <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a', marginBottom: '12px' }}>
            출시 알림 신청 <span style={{ color: '#F48FB1' }}>{waitlist?.length ?? 0}명</span>
          </h2>
          <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eee', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#fafafa', borderBottom: '1px solid #eee' }}>
                  <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: '#555' }}>#</th>
                  <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: '#555' }}>이메일</th>
                  <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: '#555' }}>신청일시</th>
                </tr>
              </thead>
              <tbody>
                {waitlist && waitlist.length > 0 ? waitlist.map((row, i) => (
                  <tr key={row.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                    <td style={{ padding: '14px 20px', fontSize: '13px', color: '#aaa' }}>{i + 1}</td>
                    <td style={{ padding: '14px 20px', fontSize: '14px', color: '#1a1a1a' }}>{row.email}</td>
                    <td style={{ padding: '14px 20px', fontSize: '13px', color: '#888' }}>
                      {new Date(row.created_at).toLocaleString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })}
                    </td>
                  </tr>
                )) : (
                  <tr><td colSpan={3} style={{ padding: '32px', textAlign: 'center', fontSize: '14px', color: '#aaa' }}>아직 신청자가 없어요</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* 설문 결과 */}
        <div>
          <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a', marginBottom: '12px' }}>
            설문 결과 <span style={{ color: '#F48FB1' }}>{survey?.length ?? 0}명 응답</span>
          </h2>
          <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eee', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {Object.keys(surveyStats).length > 0 ? (
              Object.entries(surveyStats)
                .sort((a, b) => b[1] - a[1])
                .map(([answer, count]) => {
                  const total = survey?.length ?? 1
                  const pct = Math.round((count / total) * 100)
                  return (
                    <div key={answer}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ fontSize: '14px', color: '#2E2E2E' }}>{answer}</span>
                        <span style={{ fontSize: '13px', color: '#888' }}>{count}명 ({pct}%)</span>
                      </div>
                      <div style={{ background: '#f5f5f5', borderRadius: '999px', height: '6px', overflow: 'hidden' }}>
                        <div style={{ background: '#F48FB1', width: `${pct}%`, height: '100%', borderRadius: '999px', transition: 'width 0.3s' }} />
                      </div>
                    </div>
                  )
                })
            ) : (
              <p style={{ fontSize: '14px', color: '#aaa', textAlign: 'center', padding: '16px 0' }}>아직 응답이 없어요</p>
            )}
          </div>
        </div>

      </div>
    </main>
  )
}
