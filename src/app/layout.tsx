import type { Metadata } from 'next'
import { Inter, Mulish, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-mulish',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Muskelklinikken – Holistisk behandling. Forankret i vitenskap.',
  description:
    'Muskelklinikken er et kompetansesenter for helse og velvære i Oslo. Vi tilbyr fysioterapi, personlig trening, bedriftstrening og coaching.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="no" className={`${inter.variable} ${mulish.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}
