import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function AdminPage() {
  const { data, error } = await supabase
    .from('waitlist')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <main style={{ minHeight: '100vh', background: '#f8f8f8', padding: '48px 24px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>

        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#1a1a1a', marginBottom: '4px' }}>
            🌸 Bloom 웨이트리스트
          </h1>
          <p style={{ fontSize: '14px', color: '#888' }}>
            총 {data?.length ?? 0}명 신청
          </p>
        </div>

        {error && (
          <p style={{ fontSize: '14px', color: '#e00', marginBottom: '16px' }}>
            오류: {error.message}
          </p>
        )}

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
              {data && data.length > 0 ? (
                data.map((row, i) => (
                  <tr key={row.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                    <td style={{ padding: '14px 20px', fontSize: '13px', color: '#aaa' }}>{i + 1}</td>
                    <td style={{ padding: '14px 20px', fontSize: '14px', color: '#1a1a1a' }}>{row.email}</td>
                    <td style={{ padding: '14px 20px', fontSize: '13px', color: '#888' }}>
                      {new Date(row.created_at).toLocaleString('ko-KR', {
                        year: 'numeric', month: '2-digit', day: '2-digit',
                        hour: '2-digit', minute: '2-digit',
                      })}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} style={{ padding: '40px', textAlign: 'center', fontSize: '14px', color: '#aaa' }}>
                    아직 신청자가 없어요
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </main>
  )
}
