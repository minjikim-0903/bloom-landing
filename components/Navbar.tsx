export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[var(--border)]">
      <nav className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/favicon.svg" alt="Bloom 로고" width={28} height={28} />
          <span className="text-xl font-bold text-[var(--text-primary)]">Bloom</span>
        </div>
        <a
          href="#cta"
          className="text-sm font-semibold text-white bg-[var(--primary)] px-4 py-2 rounded-xl transition-all hover:bg-[var(--primary-dark)] active:scale-95"
        >
          출시 알림 받기
        </a>
      </nav>
    </header>
  )
}
