import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bloom — 꽃집 가지 않아도 괜찮아요',
  description:
    '기념일, 선물, 일상의 꽃까지. Bloom에서 간편하게 꽃을 주문하세요. AI 꽃 추천으로 어떤 꽃을 골라야 할지 고민하지 않아도 됩니다.',
  keywords: ['꽃 주문', '꽃 배달', '꽃집', '기념일 꽃', '꽃 선물', 'Bloom'],
  openGraph: {
    title: 'Bloom — 꽃집 가지 않아도 괜찮아요',
    description:
      '기념일, 선물, 일상의 꽃까지. Bloom에서 간편하게 꽃을 주문하세요.',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Bloom',
  applicationCategory: 'ShoppingApplication',
  description:
    '기념일, 선물, 일상의 꽃까지. Bloom에서 간편하게 꽃을 주문하세요.',
  operatingSystem: 'iOS, Android',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'KRW',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
