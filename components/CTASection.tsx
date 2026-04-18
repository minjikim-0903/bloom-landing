import WaitlistForm from './WaitlistForm'

export default function CTASection() {
  return (
    <section
      id="cta"
      className="py-20 px-5"
      style={{ background: 'var(--primary)' }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Bloom, 곧 만나요
        </h2>
        <p className="text-white/80 text-lg mb-8 leading-relaxed">
          출시 알림을 신청하면 가장 먼저 알려드릴게요.
          <br />
          특별한 오픈 혜택도 준비하고 있어요.
        </p>
        <WaitlistForm />
      </div>
    </section>
  )
}
