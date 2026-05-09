import WaitlistForm from './WaitlistForm'

const benefits = [
  '첫 주문 30% 할인 쿠폰 즉시 지급',
  '무료 배달 쿠폰 3매 제공',
  '오픈 VIP 얼리버드 멤버십',
]

export default function CTASection() {
  return (
    <section id="cta" style={{ background: 'var(--surface-black)', padding: '100px 24px' }}>
      <div style={{ maxWidth: '540px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '20px' }}>
          얼리버드 모집 중
        </p>

        <h2 style={{ fontSize: '40px', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.4px', color: 'var(--on-dark)', marginBottom: '16px' }}>
          가장 먼저
          <br />
          만나보세요
        </h2>

        <p style={{ fontSize: '17px', fontWeight: 400, lineHeight: 1.6, letterSpacing: '-0.374px', color: 'var(--body-muted)', marginBottom: '36px' }}>
          지금 신청하면 출시 소식을 가장 먼저 받고,
          <br />
          얼리버드 전용 혜택도 드려요.
        </p>

        <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '40px', listStyle: 'none', padding: 0 }}>
          {benefits.map((b) => (
            <li
              key={b}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '15px', color: 'rgba(255,255,255,0.75)' }}
            >
              <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'var(--primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {b}
            </li>
          ))}
        </ul>

        <WaitlistForm />
      </div>
    </section>
  )
}
