import type { Metadata, Viewport } from 'next'
import { Mulish, Chakra_Petch, Playfair_Display } from 'next/font/google'
import './globals.css'

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-mulish',
  display: 'swap',
  preload: true,
})

const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-chakra',
  display: 'swap',
  preload: true,
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
})

export const viewport: Viewport = {
  themeColor: '#0a0f12',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Muskelklinikken – Holistisk behandling. Forankret i vitenskap.',
  description:
    'Muskelklinikken er et kompetansesenter for helse og velvære i Oslo. Vi tilbyr fysioterapi, personlig trening, bedriftstrening og coaching.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="no" className={`${mulish.variable} ${chakraPetch.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://psno-patient-platform-fe.svc.pasientsky.no" />
        <link rel="dns-prefetch" href="https://psno-patient-platform-fe.svc.pasientsky.no" />
      </head>
      <body>{children}</body>
    </html>
  )
}
