export default function Footer() {
  return (
    <footer style={{ background: 'var(--canvas-parchment)', padding: '48px 24px' }}>
      <div style={{ maxWidth: '980px', margin: '0 auto', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink-muted-80)', letterSpacing: '-0.12px' }}>Bloom</span>
        <p style={{ fontSize: '12px', fontWeight: 400, letterSpacing: '-0.12px', color: 'var(--muted)' }}>
          © 2026 Bloom. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
