import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Bloom — 꽃집 직접 찾지 않아도 괜찮아요'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #FFF5F8 0%, #FFE4EE 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* 꽃 아이콘 SVG */}
        <svg width="80" height="80" viewBox="0 0 32 32" style={{ marginBottom: '24px' }}>
          <rect width="32" height="32" rx="8" fill="#FFF5F8"/>
          <ellipse cx="16" cy="9.5" rx="3" ry="5" fill="#F48FB1"/>
          <ellipse cx="16" cy="9.5" rx="3" ry="5" fill="#F9AFC5" transform="rotate(60,16,16)"/>
          <ellipse cx="16" cy="9.5" rx="3" ry="5" fill="#F48FB1" transform="rotate(120,16,16)"/>
          <ellipse cx="16" cy="9.5" rx="3" ry="5" fill="#F9AFC5" transform="rotate(180,16,16)"/>
          <ellipse cx="16" cy="9.5" rx="3" ry="5" fill="#F48FB1" transform="rotate(240,16,16)"/>
          <ellipse cx="16" cy="9.5" rx="3" ry="5" fill="#F9AFC5" transform="rotate(300,16,16)"/>
          <circle cx="16" cy="16" r="4" fill="#FFE4EE"/>
          <circle cx="16" cy="16" r="2" fill="#F48FB1"/>
        </svg>

        {/* 로고 텍스트 */}
        <div style={{ fontSize: '64px', fontWeight: 700, color: '#1d1d1f', letterSpacing: '-2px', marginBottom: '16px' }}>
          Bloom
        </div>

        {/* 슬로건 */}
        <div style={{ fontSize: '28px', fontWeight: 400, color: '#555', letterSpacing: '-0.5px' }}>
          꽃집 직접 찾지 않아도 괜찮아요
        </div>
      </div>
    ),
    { ...size }
  )
}
