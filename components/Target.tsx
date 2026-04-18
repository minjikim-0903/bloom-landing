import { Heart, Star, Leaf } from 'lucide-react'

const targets = [
  {
    icon: Heart,
    title: '기념일을 챙기고 싶은 분',
    description: '연인, 부모님, 소중한 사람의 기념일을 꽃으로 더 특별하게 만들고 싶은 분.',
  },
  {
    icon: Star,
    title: '소중한 사람에게 선물하고 싶은 분',
    description: '감사 인사, 축하, 위로 — 마음을 담은 꽃 선물을 고민 없이 보내고 싶은 분.',
  },
  {
    icon: Leaf,
    title: '일상에 꽃을 들이고 싶은 분',
    description: '집 한 켠에 작은 꽃 하나로 일상을 더 따뜻하고 아름답게 채우고 싶은 분.',
  },
]

export default function Target() {
  return (
    <section className="py-20 px-5 bg-[var(--surface)]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-3">
            이런 분들을 위해 만들었어요
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">
            꽃이 필요한 모든 순간, Bloom이 함께할게요
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {targets.map((target) => {
            const Icon = target.icon
            return (
              <article
                key={target.title}
                className="bg-white rounded-2xl p-7 card-shadow transition-all hover:-translate-y-1 hover:shadow-xl text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-[var(--primary-light)] flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} color="var(--primary)" strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">
                  {target.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {target.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
