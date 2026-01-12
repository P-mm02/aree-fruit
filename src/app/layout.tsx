// src/app/layout.tsx
import type { Metadata, Viewport } from 'next'
import '../styles/globals.css'

const SITE_NAME_TH = 'สวนแม่อารี'
const SITE_NAME_EN = "Aree's Fruit"
const SITE_NAME = `${SITE_NAME_TH} | ${SITE_NAME_EN}`

const SITE_DESCRIPTION =
  'ผลไม้คุณภาพดี วิตามินสูง รสชาติดี ส่งตรงจากสวน สดใหม่ คัดเกรด พร้อมจัดส่งทั่วไทย'

/**
 * Set your real domain in .env:
 * NEXT_PUBLIC_SITE_URL=https://your-domain.com
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, '') ||
  'http://localhost:3000'

const OG_IMAGE = '/preview/preview-aree.jpg' // ✅ your file in /public/preview/

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME_TH}`,
  },
  description: SITE_DESCRIPTION,

  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME_EN }],
  generator: 'Next.js',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    locale: 'th_TH',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#06110b',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
