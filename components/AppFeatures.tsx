const features = [
  {
    tag: '구매',
    title: '이벤트별 꽃 구매',
    description: '생일, 기념일, 웨딩, 개업. 상황에 맞는 꽃을 바로 고르고 주문하세요. 가까운 꽃집에서 픽업하거나 배달로 받을 수 있어요.',
    bg: 'var(--canvas-parchment)',
    tagColor: 'var(--muted)',
  },
  {
    tag: '인테리어',
    title: '우리 집 꾸미기',
    description: '공간 분위기에 맞는 꽃을 추천받고 직접 꾸며보세요. 거실, 침실, 테이블 위 어디든 꽃 하나로 달라져요.',
    bg: 'var(--surface-tile-1)',
    tagColor: 'rgba(255,255,255,0.35)',
    dark: true,
  },
  {
    tag: '커뮤니티',
    title: '꾸민 공간 자랑하기',
    description: '내가 꽃으로 꾸민 공간을 공유하고, 다른 사람들의 인테리어에서 영감을 받아보세요. 오늘의집처럼, 꽃으로.',
    bg: 'var(--canvas)',
    tagColor: 'var(--muted)',
    border: true,
  },
  {
    tag: '가이드',
    title: '꽃을 소개해요',
    description: '어떤 꽃인지, 어떻게 관리하는지, 어떤 공간에 어울리는지. Bloom이 꽃 한 송이 한 송이를 자세히 소개해드려요.',
    bg: 'var(--surface-tile-2)',
    tagColor: 'rgba(255,255,255,0.35)',
    dark: true,
  },
]

export default function AppFeatures() {
  return (
    <section id="features" style={{ background: 'var(--canvas)', padding: '80px 24px' }}>
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
              }}
            >
              <p style={{
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: f.tagColor,
                marginBottom: '16px',
              }}>
                {f.tag}
              </p>
              <h3 style={{
                fontSize: '22px',
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: '-0.374px',
                color: f.dark ? 'var(--on-dark)' : 'var(--ink)',
                marginBottom: '12px',
              }}>
                {f.title}
              </h3>
              <p style={{
                fontSize: '15px',
                fontWeight: 400,
                lineHeight: 1.6,
                color: f.dark ? 'rgba(255,255,255,0.5)' : 'var(--muted)',
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
