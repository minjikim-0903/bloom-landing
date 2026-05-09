'use client'

import { useState } from 'react'
import { CheckCircle, Loader } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function WaitlistForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) return

    setStatus('loading')
    setErrorMsg('')

    const { error } = await supabase.from('waitlist').insert({
      name: name.trim(),
      phone: phone.trim(),
    })

    if (error) {
      setStatus('error')
      setErrorMsg('신청 중 오류가 발생했어요. 다시 시도해주세요.')
      return
    }

    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
        <CheckCircle size={36} strokeWidth={1.5} color="var(--primary)" />
        <p style={{ fontSize: '17px', fontWeight: 400, letterSpacing: '-0.374px', color: 'var(--ink)' }}>신청이 완료됐어요!</p>
        <p style={{ fontSize: '14px', letterSpacing: '-0.224px', color: 'var(--muted)' }}>출시되면 가장 먼저 알려드릴게요.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', maxWidth: '360px', margin: '0 auto' }}>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{
          height: '44px',
          padding: '0 20px',
          borderRadius: '9999px',
          border: '1px solid var(--hairline)',
          fontSize: '17px',
          letterSpacing: '-0.374px',
          color: 'var(--ink)',
          background: 'var(--canvas)',
          outline: 'none',
          width: '100%',
          boxSizing: 'border-box',
        }}
        onFocus={(e) => (e.target.style.borderColor = 'var(--ink)')}
        onBlur={(e) => (e.target.style.borderColor = 'var(--hairline)')}
      />
      <input
        type="tel"
        placeholder="전화번호 (010-0000-0000)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        style={{
          height: '44px',
          padding: '0 20px',
          borderRadius: '9999px',
          border: '1px solid var(--hairline)',
          fontSize: '17px',
          letterSpacing: '-0.374px',
          color: 'var(--ink)',
          background: 'var(--canvas)',
          outline: 'none',
          width: '100%',
          boxSizing: 'border-box',
        }}
        onFocus={(e) => (e.target.style.borderColor = 'var(--ink)')}
        onBlur={(e) => (e.target.style.borderColor = 'var(--hairline)')}
      />
      {errorMsg && (
        <p style={{ fontSize: '13px', color: '#c13515', textAlign: 'center' }}>{errorMsg}</p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        style={{
          height: '44px',
          borderRadius: '9999px',
          border: 'none',
          background: 'var(--primary)',
          color: 'var(--on-primary)',
          fontSize: '17px',
          fontWeight: 400,
          letterSpacing: '-0.374px',
          cursor: status === 'loading' ? 'not-allowed' : 'pointer',
          opacity: status === 'loading' ? 0.5 : 1,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          width: '100%',
        }}
        onMouseDown={(e) => { if (status !== 'loading') (e.currentTarget as HTMLButtonElement).style.transform = 'scale(0.95)' }}
        onMouseUp={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)' }}
      >
        {status === 'loading' ? (
          <>
            <Loader size={16} className="animate-spin" />
            신청 중...
          </>
        ) : (
          '출시 알림 받기'
        )}
      </button>
    </form>
  )
}
