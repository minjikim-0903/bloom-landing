'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(false)

    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push('/admin')
    } else {
      setError(true)
      setLoading(false)
    }
  }

  return (
    <main style={{ minHeight: '100vh', background: '#f8f8f8', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ background: '#fff', borderRadius: '16px', padding: '40px', width: '100%', maxWidth: '360px', border: '1px solid #eee' }}>
        <h1 style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>🌸 Bloom Admin</h1>
        <p style={{ fontSize: '14px', color: '#888', marginBottom: '28px' }}>비밀번호를 입력해주세요</p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ height: '44px', padding: '0 16px', borderRadius: '10px', border: `1px solid ${error ? '#f87171' : '#e5e7eb'}`, fontSize: '14px', outline: 'none', width: '100%', boxSizing: 'border-box' }}
          />
          {error && (
            <p style={{ fontSize: '13px', color: '#e00', textAlign: 'center' }}>비밀번호가 틀렸어요</p>
          )}
          <button
            type="submit"
            disabled={loading}
            style={{ height: '44px', background: '#F48FB1', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '14px', fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.6 : 1 }}
          >
            {loading ? '확인 중...' : '입장하기'}
          </button>
        </form>
      </div>
    </main>
  )
}
