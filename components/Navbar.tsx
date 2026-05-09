export default function Navbar() {
  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'var(--surface-black)', height: '44px', display: 'flex', alignItems: 'center' }}>
      <nav style={{ width: '100%', maxWidth: '980px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ color: 'var(--on-dark)', fontSize: '12px', fontWeight: 600, letterSpacing: '-0.12px' }}>
          Bloom
        </span>
        <a
          href="#cta"
          style={{ background: 'var(--primary)', color: 'var(--on-primary)', borderRadius: '9999px', padding: '8px 18px', fontSize: '12px', fontWeight: 400, letterSpacing: '-0.12px', textDecoration: 'none', display: 'inline-block' }}
        >
          출시 알림 받기
        </a>
      </nav>
    </header>
  )
}
