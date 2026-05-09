const photos = [
  {
    label: '거실 인테리어',
    sub: '작은 화병 하나로',
    gradient: 'linear-gradient(145deg, #e8d5c4 0%, #c9a882 100%)',
  },
  {
    label: '웨딩 촬영 부케',
    sub: '직접 만든 셀프 부케',
    gradient: 'linear-gradient(145deg, #f0e8e0 0%, #d4b8a0 100%)',
  },
  {
    label: '카페 개업',
    sub: '분위기까지 직접 연출',
    gradient: 'linear-gradient(145deg, #c8d8c0 0%, #90b085 100%)',
  },
  {
    label: '생일 파티 테이블',
    sub: '꽃으로 완성한 분위기',
    gradient: 'linear-gradient(145deg, #f0d8e0 0%, #d4909a 100%)',
  },
  {
    label: '침실 꾸미기',
    sub: '잠들기 전 향기로',
    gradient: 'linear-gradient(145deg, #e0d4f0 0%, #a890c8 100%)',
  },
  {
    label: '사무실 책상',
    sub: '하루를 바꾸는 작은 꽃',
    gradient: 'linear-gradient(145deg, #d4e4f0 0%, #8eb0cc 100%)',
  },
]

export default function Gallery() {
  return (
    <section style={{ background: 'var(--canvas-parchment)', padding: '80px 24px' }}>
      <div style={{ maxWidth: '980px', margin: '0 auto' }}>
        <div style={{ marginBottom: '48px' }}>
          <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '12px' }}>
            인스피레이션
          </p>
          <h2 style={{ fontSize: '40px', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.4px', color: 'var(--ink)' }}>
            꽃으로 꾸민 공간들
          </h2>
          <p style={{ fontSize: '17px', fontWeight: 400, lineHeight: 1.5, color: 'var(--muted)', marginTop: '12px' }}>
            Bloom 유저들이 직접 꾸민 공간이에요. 당신의 공간도 함께해요.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
          {photos.map((p) => (
            <article
              key={p.label}
              style={{
                background: p.gradient,
                borderRadius: '14px',
                aspectRatio: '4/5',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)',
                padding: '20px 16px 16px',
              }}>
                <p style={{ fontSize: '13px', fontWeight: 600, color: '#fff', lineHeight: 1.3, marginBottom: '2px' }}>
                  {p.label}
                </p>
                <p style={{ fontSize: '11px', fontWeight: 400, color: 'rgba(255,255,255,0.7)' }}>
                  {p.sub}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
