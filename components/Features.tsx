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
    <section className="py-20 px-5 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-3">
            주요 기능
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">
            꽃 주문의 모든 불편함을 없앴어요
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <article
                key={feature.title}
                className="text-center p-8 rounded-2xl bg-[var(--surface)] transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-[var(--primary-light)] flex items-center justify-center mx-auto mb-5">
                  <Icon size={24} color="var(--primary)" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
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
