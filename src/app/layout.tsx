import type { Metadata } from 'next'
import { Bebas_Neue, Lora } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.syghan.com'),

  title: {
    default: 'Syghan — Writer',
    template: '%s | Syghan',
  },

  description:
    'Syghan is an upcoming writer from Mumbai whose stories blend real-life experiences with imagination, exploring desire, passion, vulnerability, and complicated choices.',

  openGraph: {
    title: 'Syghan — Writer',
    description:
      'Discover Twisted Desires, a collection of stories inspired by real-life experiences and imagination, exploring desire, passion, vulnerability, and complicated choices.',
    siteName: 'Syghan',
    images: [
      {
        url: '/images/twisted-desires-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Twisted Desires by Syghan',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Syghan — Writer',
    description:
      'Discover Twisted Desires, a collection of stories inspired by real-life experiences and imagination.',
    images: ['/images/twisted-desires-cover.jpg'],
  },

  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  )
}