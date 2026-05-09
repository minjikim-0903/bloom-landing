import { ShoppingBag, MapPin, Sparkles, Wand2 } from 'lucide-react'

const solutions = [
  {
    icon: ShoppingBag,
    title: '앱에서 바로 주문',
    description: '가고 싶은 꽃집을 골라 바로 주문하세요. 픽업 또는 배달로 받을 수 있어요.',
    surface: 'var(--signature-peach)',
    comingSoon: false,
  },
  {
    icon: MapPin,
    title: '주변 꽃집 한눈에',
    description: '위치 기반으로 가까운 꽃집을 찾아드려요. 영업 시간, 메뉴까지 바로 확인하세요.',
    surface: 'var(--signature-mint)',
    comingSoon: false,
  },
  {
    icon: Sparkles,
    title: 'AI 꽃 추천',
    description: '상황과 예산만 입력하면 AI가 딱 맞는 꽃을 골라드려요.',
    surface: 'var(--signature-yellow)',
    comingSoon: true,
  },
  {
    icon: Wand2,
    title: 'AI 스타일링 제안',
    description: '색감, 분위기, 받는 사람 취향에 맞는 꽃다발 스타일을 제안해드려요.',
    surface: 'var(--signature-cream)',
    comingSoon: true,
  },
]

export default function Solutions() {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p
            className="mb-4"
            style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em', color: 'var(--muted)', textTransform: 'uppercase' }}
          >
            Bloom이 해결하는 방법
          </p>
          <h2
            className="text-[var(--ink)]"
            style={{ fontSize: '32px', fontWeight: 400, lineHeight: 1.2 }}
          >
            꽃 주문, 처음부터 다시 만들었어요
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {solutions.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="rounded-[10px] p-7"
                style={{ background: item.surface }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-10 h-10 rounded-[8px] flex items-center justify-center"
                    style={{ background: 'rgba(0,0,0,0.08)' }}
                  >
                    <Icon size={18} color="#181d26" strokeWidth={1.8} />
                  </div>
                  {item.comingSoon && (
                    <span
                      className="px-2.5 py-1 rounded-full"
                      style={{
                        fontSize: '11px',
                        fontWeight: 500,
                        background: 'rgba(0,0,0,0.08)',
                        color: 'var(--muted)',
                      }}
                    >
                      준비 중
                    </span>
                  )}
                </div>
                <h3
                  className="text-[var(--ink)] mb-2"
                  style={{ fontSize: '18px', fontWeight: 500, lineHeight: 1.4 }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--body-color)', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
