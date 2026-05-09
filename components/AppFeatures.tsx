const features = [
  {
    tag: '구매',
    title: '이벤트별 꽃 구매',
    description: '생일, 기념일, 웨딩, 개업. 상황에 맞는 꽃을 바로 고르고 주문하세요.',
    bg: '#fff',
    tagColor: 'var(--muted)',
    border: true,
  },
  {
    tag: 'AI 조합',
    title: 'AI 추천으로 내가 원하는 꽃을 조합해요',
    description: '색상, 분위기, 예산까지 — 원하는 조건을 말하면 AI가 세상에 하나뿐인 나만의 꽃다발을 설계해드려요.',
    bg: '#fff',
    tagColor: '#0066cc',
    border: true,
    comingSoon: true,
    highlightAI: true,
  },
  {
    tag: 'AI 추천',
    title: 'AI로 꽃을 추천받아요',
    description: '상황, 감정, 받는 사람만 알려주세요. AI가 지금 이 순간 가장 어울리는 꽃을 콕 집어드려요.',
    bg: '#fff',
    tagColor: '#0066cc',
    border: true,
    comingSoon: true,
    highlightAI: true,
  },
  {
    tag: '가이드',
    title: '꽃을 소개해요',
    description: '어떤 꽃인지, 어떻게 관리하는지, 어떤 공간에 어울리는지. Bloom이 꽃 한 송이 한 송이를 자세히 소개해드려요.',
    bg: '#fff',
    tagColor: 'var(--muted)',
    border: true,
  },
  {
    tag: '인테리어 · 커뮤니티',
    title: '꽃으로 꾸미고, 자랑해요',
    description: '공간 분위기에 맞는 꽃을 추천받아 직접 꾸미고, 꾸민 공간을 다른 Bloom 유저들과 함께 공유해보세요.',
    bg: '#fff',
    tagColor: 'var(--muted)',
    border: true,
    wide: true,
  },
]

export default function AppFeatures() {
  return (
    <section id="features" style={{ background: '#FDF0F0', padding: '80px 24px' }}>
      <div style={{ maxWidth: '980px', margin: '0 auto' }}>
        <div style={{ marginBottom: '48px' }}>
          <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '12px' }}>
            앱 소개
          </p>
          <h2 style={{ fontSize: '40px', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.4px', color: 'var(--ink)' }}>
            Bloom으로 할 수 있는 것들
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          {features.map((f) => (
            <article
              key={f.title}
              style={{
                background: f.bg,
                border: f.border ? '1px solid var(--hairline)' : 'none',
                borderRadius: '18px',
                padding: '32px',
                gridColumn: f.wide ? 'span 2' : undefined,
                boxShadow: f.border ? '0 1px 4px rgba(0,0,0,0.06)' : '0 4px 20px rgba(0,0,0,0.12)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <p style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: f.tagColor,
                  margin: 0,
                }}>
                  {f.tag}
                </p>
                {f.comingSoon && (
                  <span style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    color: 'var(--muted)',
                    background: 'rgba(0,0,0,0.06)',
                    padding: '2px 8px',
                    borderRadius: '99px',
                    letterSpacing: '0.04em',
                  }}>
                    준비 중
                  </span>
                )}
              </div>
              <h3 style={{
                fontSize: '22px',
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: '-0.374px',
                color: 'var(--ink)',
                marginBottom: '12px',
              }}>
                {f.title}
              </h3>
              <p style={{
                fontSize: '15px',
                fontWeight: 400,
                lineHeight: 1.6,
                color: 'var(--muted)',
              }}>
                {f.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
