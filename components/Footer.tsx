export default function Footer() {
  return (
    <footer className="py-8 px-5 bg-white border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-base font-bold text-[var(--primary)]">🌸 Bloom</span>
        <p className="text-sm text-[var(--text-secondary)]">
          © 2025 Bloom. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
