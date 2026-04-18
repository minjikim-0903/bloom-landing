import { MapPin, Search, Sparkles, Wand2 } from 'lucide-react'

const painPoints = [
  {
    icon: MapPin,
    problem: '꽃시장 가기 귀찮아',
    solution: '집에서 바로 주문',
    solutionDetail: '앱 하나로 꽃다발을 간편하게 주문하세요.',
    comingSoon: false,
  },
  {
    icon: Search,
    problem: '근처 꽃집 찾기 어려워',
    solution: '내 주변 꽃집 한눈에',
    solutionDetail: '위치 기반으로 가까운 꽃집을 바로 확인하세요.',
    comingSoon: false,
  },
  {
    icon: Sparkles,
    problem: '기념일에 어떤 꽃이 맞는지 모르겠어',
    solution: 'AI 꽃 추천',
    solutionDetail: '상황에 딱 맞는 꽃을 AI가 골라드려요.',
    comingSoon: true,
  },
  {
    icon: Wand2,
    problem: '꽃 구성 어떻게 해야 할지 모르겠어',
    solution: 'AI 스타일링 추천',
    solutionDetail: '꽃다발 스타일링도 AI가 함께 제안해드려요.',
    comingSoon: true,
  },
]

export default function PainPoints() {
  return (
    <section className="py-20 px-5 bg-[var(--surface)]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-3">
            이런 불편함, 공감되시나요?
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">
            Bloom이 모두 해결해드려요
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {painPoints.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.problem}
                className="bg-white rounded-2xl p-6 card-shadow transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[var(--primary-light)] flex items-center justify-center flex-shrink-0">
                    <Icon size={20} color="var(--primary)" strokeWidth={1.8} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[var(--text-secondary)] line-through mb-1">
                      {item.problem}
                    </p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-bold text-[var(--text-primary)]">
                        {item.solution}
                      </h3>
                      {item.comingSoon && (
                        <span className="text-xs font-medium bg-[var(--surface)] text-[var(--text-secondary)] px-2 py-0.5 rounded-full">
                          준비 중
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mt-1 leading-relaxed">
                      {item.solutionDetail}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
