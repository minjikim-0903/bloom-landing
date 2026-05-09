const moments = [
  '이사한 집, 뭔가 허전한데 꾸미고 싶어',
  '웨딩 촬영 부케 직접 만들어보고 싶어',
  '오픈하는 우리 가게, 내가 꾸미고 싶어',
  '기념일인데 꽃만 사기엔 뭔가 아쉬워',
]

export default function PainPoints() {
  return (
    <section style={{ background: 'var(--surface-tile-1)', padding: '80px 24px' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '32px' }}>
          이런 날 있지 않아요?
        </p>

        <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', listStyle: 'none', padding: 0, margin: '0 0 48px 0' }}>
          {moments.map((m) => (
            <li
              key={m}
              style={{
                fontSize: '28px',
                fontWeight: 400,
                lineHeight: 1.3,
                color: 'rgba(255,255,255,0.4)',
                textDecoration: 'line-through',
                textDecorationColor: 'rgba(255,255,255,0.2)',
                textDecorationThickness: '1.5px',
              }}
            >
              {m}
            </li>
          ))}
        </ul>

        <p style={{ fontSize: '28px', fontWeight: 600, lineHeight: 1.3, color: 'var(--on-dark)', letterSpacing: '-0.28px' }}>
          Bloom이 해결해드려요.
        </p>
      </div>
    </section>
  )
}
