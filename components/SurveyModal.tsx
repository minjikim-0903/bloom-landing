'use client'

import { useState } from 'react'

const OPTIONS = [
  '기념일·생일 등 특별한 날',
  '소중한 사람에게 선물할 때',
  '집이나 공간을 꾸미고 싶을 때',
  '기분 전환이 필요할 때',
  '기타',
]

interface Props {
  email: string
  onClose: () => void
}

export default function SurveyModal({ email, onClose }: Props) {
  const [selected, setSelected] = useState('')
  const [custom, setCustom] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    const answer = selected === '기타' ? custom.trim() : selected
    if (!answer) return

    setLoading(true)
    await fetch('/api/survey', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, answer }),
    })
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <div
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div style={{ background: '#fff', borderRadius: '20px', padding: '36px', width: '100%', maxWidth: '440px', position: 'relative' }}>

        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '16px', right: '20px', background: 'none', border: 'none', fontSize: '20px', color: '#aaa', cursor: 'pointer' }}
        >×</button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <p style={{ fontSize: '28px', marginBottom: '12px' }}>🌸</p>
            <p style={{ fontSize: '17px', fontWeight: 600, color: '#2E2E2E', marginBottom: '8px' }}>소중한 답변 감사해요!</p>
            <p style={{ fontSize: '14px', color: '#888', marginBottom: '24px' }}>출시되면 가장 먼저 알려드릴게요.</p>
            <button
              onClick={onClose}
              style={{ background: '#F48FB1', color: '#fff', border: 'none', borderRadius: '10px', padding: '12px 28px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}
            >
              닫기
            </button>
          </div>
        ) : (
          <>
            <p style={{ fontSize: '13px', color: '#F48FB1', fontWeight: 600, marginBottom: '8px' }}>작은 설문조사도 부탁드려요! 🌷</p>
            <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#2E2E2E', marginBottom: '20px', lineHeight: 1.4 }}>
              꽃은 주로 어떤 때 구매하세요?
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
              {OPTIONS.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setSelected(opt)}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '10px',
                    border: `1.5px solid ${selected === opt ? '#F48FB1' : '#eee'}`,
                    background: selected === opt ? '#FFF5F8' : '#fff',
                    color: selected === opt ? '#E06A8C' : '#2E2E2E',
                    fontSize: '14px',
                    fontWeight: selected === opt ? 600 : 400,
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>

            {selected === '기타' && (
              <input
                type="text"
                placeholder="직접 입력해주세요"
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                style={{ width: '100%', height: '44px', padding: '0 16px', borderRadius: '10px', border: '1.5px solid #F48FB1', fontSize: '14px', outline: 'none', boxSizing: 'border-box', marginBottom: '12px' }}
              />
            )}

            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={onClose}
                style={{ flex: 1, height: '44px', background: '#f5f5f5', border: 'none', borderRadius: '10px', fontSize: '14px', color: '#888', cursor: 'pointer' }}
              >
                건너뛰기
              </button>
              <button
                onClick={handleSubmit}
                disabled={!selected || (selected === '기타' && !custom.trim()) || loading}
                style={{ flex: 2, height: '44px', background: '#F48FB1', border: 'none', borderRadius: '10px', fontSize: '14px', fontWeight: 600, color: '#fff', cursor: 'pointer', opacity: (!selected || (selected === '기타' && !custom.trim())) ? 0.5 : 1 }}
              >
                {loading ? '제출 중...' : '제출하기'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
