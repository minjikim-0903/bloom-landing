import { Flower2, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-5 pt-24 pb-20 bg-white relative overflow-hidden">
      {/* 배경 그라디언트 */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, #FF6B9D 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* 배지 */}
        <div className="inline-flex items-center gap-2 bg-[var(--primary-light)] text-[var(--primary)] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <Flower2 size={14} strokeWidth={2} />
          <span>곧 출시됩니다</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] leading-tight tracking-tight mb-5">
          꽃집 가지 않아도
          <br />
          <span className="text-[var(--primary)]">괜찮아요</span>
        </h1>

        <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed mb-8 max-w-md mx-auto">
          Bloom에서 꽃을 주문하세요.
          <br />
          기념일, 선물, 일상의 꽃까지.
        </p>

        <a
          href="#cta"
          className="inline-flex items-center gap-2 text-white font-semibold text-base bg-[var(--primary)] px-8 py-4 rounded-xl shadow-lg transition-all hover:bg-[var(--primary-dark)] hover:shadow-xl active:scale-95"
        >
          출시 알림 받기
          <ArrowRight size={18} strokeWidth={2} />
        </a>
      </div>
    </section>
  )
}
