export default function Hero() {
  return (
    <section style={{ background: 'var(--canvas)', paddingTop: '120px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '20px' }}>
          꽃으로 공간을 꾸미다
        </p>

        <h1 style={{ fontSize: '56px', fontWeight: 600, lineHeight: 1.07, letterSpacing: '-0.28px', color: 'var(--ink)', marginBottom: '24px' }}>
          우리 집에도,
          <br />
          <span style={{ color: 'var(--primary)' }}>특별한 날에도</span>
        </h1>

        <p style={{ fontSize: '21px', fontWeight: 400, lineHeight: 1.5, letterSpacing: '-0.374px', color: 'var(--ink)', opacity: 0.6, marginBottom: '36px' }}>
          거실 한 켠, 웨딩 촬영 부케, 오픈하는 가게까지.
          <br />
          꽃을 주문하고 직접 꾸며보세요.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#cta"
            style={{ background: 'var(--primary)', color: 'var(--on-primary)', borderRadius: '9999px', padding: '12px 24px', fontSize: '17px', fontWeight: 400, textDecoration: 'none', letterSpacing: '-0.374px', display: 'inline-block' }}
          >
            출시 알림 받기
          </a>
          <a
            href="#features"
            style={{ background: 'transparent', color: 'var(--primary)', border: '1px solid var(--primary)', borderRadius: '9999px', padding: '12px 24px', fontSize: '17px', fontWeight: 400, textDecoration: 'none', letterSpacing: '-0.374px', display: 'inline-block' }}
          >
            더 알아보기
          </a>
        </div>
      </div>
    </section>
  )
}
