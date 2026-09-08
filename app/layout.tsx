import type { Metadata } from 'next'
import { Source_Serif_4, Archivo } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import JsonLd from '@/components/seo/JsonLd'
import { site } from '@/content/site'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-source-serif',
  display: 'swap',
})

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-archivo',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    template: '%s | SHRADDHA GROUP',
    default: 'SHRADDHA GROUP — Civil Contractors in Hyderabad & Rangareddy',
  },
  description:
    'Residential, commercial and iconic high-rise civil construction across Hyderabad and Rangareddy district. Turnkey building, RCC structural framework, and written milestone delivery.',
  keywords: [...site.keywords],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: '/',
  },
  other: {
    'geo.region': site.geo.region,
    'geo.placename': site.geo.placename,
    'geo.position': `${site.geo.latitude};${site.geo.longitude}`,
    'ICBM': `${site.geo.latitude}, ${site.geo.longitude}`,
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: site.url,
    siteName: site.name,
    title: 'SHRADDHA GROUP — Civil Contractors in Hyderabad & Rangareddy',
    description:
      'Residential, commercial and iconic high-rise civil construction across Hyderabad and Rangareddy district. Turnkey building, RCC structural framework, and written milestone delivery.',
    images: [{ url: '/Photos/FullLogo_Transparent_NoBuffer.png', width: 1280, height: 419, alt: 'SHRADDHA GROUP — Civil Contractors' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SHRADDHA GROUP — Civil Contractors in Hyderabad & Rangareddy',
    description:
      'Residential, commercial and iconic high-rise civil construction across Hyderabad and Rangareddy district.',
    images: ['/Photos/FullLogo_Transparent_NoBuffer.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${sourceSerif4.variable} ${archivo.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <JsonLd />
        {/* Skip to content */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Header />

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
