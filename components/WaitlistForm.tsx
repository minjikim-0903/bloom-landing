'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Loader } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function WaitlistForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
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
      <div className="flex flex-col items-center gap-3 text-white">
        <CheckCircle size={40} strokeWidth={1.8} />
        <p className="text-xl font-bold">신청이 완료됐어요!</p>
        <p className="text-white/80 text-sm">출시되면 가장 먼저 알려드릴게요.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-sm mx-auto">
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full px-4 py-3.5 rounded-xl text-[#222222] text-sm font-medium placeholder:text-[#aaa] outline-none focus:ring-2 focus:ring-white/50"
      />
      <input
        type="tel"
        placeholder="전화번호 (010-0000-0000)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        className="w-full px-4 py-3.5 rounded-xl text-[#222222] text-sm font-medium placeholder:text-[#aaa] outline-none focus:ring-2 focus:ring-white/50"
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
  )
}
