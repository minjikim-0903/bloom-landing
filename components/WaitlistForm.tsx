'use client'

import { useState } from 'react'
import { ArrowRight, Loader } from 'lucide-react'
import SurveyModal from './SurveyModal'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [showSurvey, setShowSurvey] = useState(false)

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email.trim()) return

    setStatus('loading')
    setErrorMsg('')

    const res = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.trim() }),
    })

    if (!res.ok) {
      setStatus('error')
      setErrorMsg('신청 중 오류가 발생했어요. 다시 시도해주세요.')
      return
    }

    setStatus('success')
    setShowSurvey(true)
  }

  return (
    <>
      {showSurvey && (
        <SurveyModal email={email} onClose={() => setShowSurvey(false)} />
      )}

      {status === 'success' && !showSurvey ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <p style={{ fontSize: '18px', fontWeight: 700, color: '#2E2E2E' }}>신청이 완료됐어요! 🌸</p>
          <p style={{ fontSize: '14px', color: '#888' }}>출시되면 가장 먼저 알려드릴게요.</p>
        </div>
      ) : status !== 'success' ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-sm mx-auto">
          <input
            type="email"
            placeholder="이메일 주소"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3.5 rounded-xl text-[#2E2E2E] text-sm font-medium placeholder:text-[#aaa] outline-none focus:ring-2 focus:ring-white/50"
            style={{ background: '#ffffff' }}
          />
          {errorMsg && (
            <p className="text-white/90 text-xs text-center">{errorMsg}</p>
          )}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex items-center justify-center gap-2 font-semibold text-[var(--primary)] bg-white px-8 py-4 rounded-xl transition-all hover:bg-[var(--primary-light)] active:scale-95 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <>
                <Loader size={18} className="animate-spin" />
                신청 중...
              </>
            ) : (
              <>
                출시 알림 받기
                <ArrowRight size={18} strokeWidth={2} />
              </>
            )}
          </button>
        </form>
      ) : null}
    </>
  )
}
