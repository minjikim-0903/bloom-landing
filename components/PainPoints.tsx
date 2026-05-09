import { MapPin, Sparkles, Wand2, ArrowRight } from 'lucide-react'

const painPoints = [
  {
    icon: MapPin,
    problemTitle: '근처 꽃집 찾기 너무 어려워요',
    problem: '꽃집이 어디 있는지도 모르고, 꽃시장은 너무 멀고 낯설게 느껴져요.',
    solution: '집에서 바로 주문',
    solutionDetail: '앱 하나로 꽃다발을 간편하게 주문하세요.',
    comingSoon: false,
  },
  {
    icon: Sparkles,
    problemTitle: '어떤 꽃을 골라야 할지 몰라요',
    problem: '받는 사람 취향이나 상황에 맞는 꽃이 뭔지, 꽃말도 알기 어려워요.',
    solution: 'AI 꽃 추천',
    solutionDetail: '상황에 딱 맞는 꽃을 AI가 골라드려요.',
    comingSoon: true,
  },
  {
    icon: Wand2,
    problemTitle: '꽃다발 구성이 어려워요',
    problem: '어떤 꽃을 몇 송이나, 어떻게 조합해야 예쁜지 감이 안 잡혀요.',
    solution: 'AI 스타일링 추천',
    solutionDetail: '꽃다발 스타일링도 AI가 함께 제안해드려요.',
    comingSoon: true,
  },
]

export default function PainPoints() {
  return (
    <section className="py-20 px-5 bg-[var(--surface)]">
      <div className="max-w-4xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-3">
            이런 고민 해본적 있으세요?
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">
            Bloom을 사용해보세요
          </p>
        </div>


        {/* Pain point rows */}
        <div className="flex flex-col gap-3">
          {painPoints.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.problemTitle}
                className="grid grid-cols-1 sm:grid-cols-[1fr_80px_1fr] items-stretch gap-0 sm:gap-3"
              >
                {/* Problem card */}
                <div className="bg-white rounded-t-2xl sm:rounded-2xl px-6 py-5 border border-gray-100 card-shadow flex flex-col justify-center gap-1">
                  <h3 className="text-base font-bold text-[var(--text-primary)] leading-snug">
                    {item.problemTitle}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {item.problem}
                  </p>
                </div>

                {/* Connector */}
                <div className="hidden sm:flex items-center justify-center">
                  <ArrowRight size={15} className="text-[var(--primary)]" />
                </div>

                {/* Solution card */}
                <div className="bg-white rounded-b-2xl sm:rounded-2xl px-6 py-5 card-shadow border border-t-0 border-gray-100 sm:border sm:border-[var(--primary)]/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[var(--primary-light)] flex items-center justify-center flex-shrink-0">
                    <Icon size={17} color="var(--primary)" strokeWidth={1.8} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-bold text-[var(--text-primary)] leading-snug">
                        {item.solution}
                      </h3>
                      {item.comingSoon && (
                        <span className="text-xs font-medium bg-[var(--surface)] text-[var(--text-secondary)] px-2 py-0.5 rounded-full">
                          준비 중
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {item.solutionDetail}
                    </p>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
