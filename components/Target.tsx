import { Heart, Star, Leaf } from 'lucide-react'

const targets = [
  {
    icon: Heart,
    title: '기념일을 잊지 않고 싶은 분',
    description: '연인, 부모님, 친구의 특별한 날. 미리 준비하지 않아도 당일에 바로 주문할 수 있어요.',
  },
  {
    icon: Star,
    title: '마음을 꽃으로 전하고 싶은 분',
    description: '고맙다, 수고했다, 잘 될 거야 — 말보다 꽃이 더 잘 전달될 때가 있어요.',
  },
  {
    icon: Leaf,
    title: '일상에 작은 꽃을 두고 싶은 분',
    description: '거창하지 않아도 돼요. 책상 위에 작은 꽃병 하나가 하루를 바꿔줄 수 있어요.',
  },
]

export default function Target() {
  return (
    <section style={{ background: 'var(--canvas)', padding: '80px 24px' }}>
      <div style={{ maxWidth: '980px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '40px', fontWeight: 600, lineHeight: 1.10, color: 'var(--ink)', marginBottom: '12px' }}>
            꽃이 필요한 순간은 늘 있어요
          </h2>
          <p style={{ fontSize: '17px', fontWeight: 400, lineHeight: 1.47, letterSpacing: '-0.374px', color: 'var(--muted)' }}>
            Bloom은 그 순간마다 함께하려고 만들었어요
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {targets.map((target) => {
            const Icon = target.icon
            return (
              <article
                key={target.title}
                style={{ background: 'var(--canvas-parchment)', borderRadius: '18px', padding: '24px' }}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <Icon size={18} color="var(--ink)" strokeWidth={1.8} />
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 600, lineHeight: 1.24, letterSpacing: '-0.374px', color: 'var(--ink)', marginBottom: '8px' }}>
                  {target.title}
                </h3>
                <p style={{ fontSize: '17px', fontWeight: 400, lineHeight: 1.47, letterSpacing: '-0.374px', color: 'var(--muted)' }}>
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
