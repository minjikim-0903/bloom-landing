export default function Footer() {
  return (
    <footer className="py-8 px-5 bg-white border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <img src="/favicon.svg" alt="Bloom 로고" width={24} height={24} />
          <span className="text-base font-bold text-[var(--text-primary)]">Bloom</span>
        </div>
        <p className="text-sm text-[var(--text-secondary)]">
          © 2026 Bloom. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
