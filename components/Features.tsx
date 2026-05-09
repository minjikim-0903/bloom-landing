import { ShoppingBag, MapPin, Gift } from 'lucide-react'

const features = [
  {
    icon: ShoppingBag,
    title: '간편한 꽃 주문',
    description: '몇 번의 탭으로 꽃집에 바로 주문할 수 있어요. 복잡한 과정 없이 원하는 꽃을 빠르게.',
  },
  {
    icon: MapPin,
    title: '내 주변 꽃집',
    description: '위치 기반으로 가까운 꽃집을 탐색하세요. 내 동네 꽃집을 한눈에 확인할 수 있어요.',
  },
  {
    icon: Gift,
    title: '선물 맞춤 추천',
    description: '상황에 맞는 꽃다발을 추천해드려요. 생일, 기념일, 감사 인사까지 어떤 상황에도 딱 맞게.',
  },
]

export default function Features() {
  return (
    <section id="features" style={{ background: 'var(--canvas-parchment)', padding: '80px 24px' }}>
      <div style={{ maxWidth: '980px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '40px', fontWeight: 600, lineHeight: 1.10, color: 'var(--ink)', marginBottom: '12px' }}>
            주요 기능
          </h2>
          <p style={{ fontSize: '17px', fontWeight: 400, lineHeight: 1.47, letterSpacing: '-0.374px', color: 'var(--muted)' }}>
            꽃 주문의 모든 불편함을 없앴어요
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <article
                key={feature.title}
                style={{ background: 'var(--canvas)', border: '1px solid var(--hairline)', borderRadius: '18px', padding: '24px' }}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <Icon size={18} color="var(--ink)" strokeWidth={1.8} />
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 600, lineHeight: 1.24, letterSpacing: '-0.374px', color: 'var(--ink)', marginBottom: '8px' }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: '17px', fontWeight: 400, lineHeight: 1.47, letterSpacing: '-0.374px', color: 'var(--muted)' }}>
                  {feature.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
