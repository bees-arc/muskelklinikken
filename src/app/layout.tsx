import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
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
    <html lang="no" className={poppins.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://psno-patient-platform-fe.svc.pasientsky.no" />
        <link rel="dns-prefetch" href="https://psno-patient-platform-fe.svc.pasientsky.no" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var pref = saved || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
                  document.documentElement.setAttribute('data-theme', pref);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
