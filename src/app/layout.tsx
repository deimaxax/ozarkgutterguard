import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import SchemaJsonLd from '@/components/SchemaJsonLd';
import AnalyticsDeferred from '@/components/AnalyticsDeferred';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  preload: true,
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  preload: false,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#1B2A4A' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://ozarkgutterguard.com'),
  title: {
    default: 'Best Gutter Guards Northwest Arkansas | Micro Mesh Installers Near Me | Ozark Gutter Guard Co.',
    template: '%s | Ozark Gutter Guard Co.'
  },
  description: 'Northwest Arkansas gutter protection specialists. Marine-grade 316 stainless steel micro-mesh installers serving Bentonville, Bella Vista, Rogers, Fayetteville & Springdale. 10-Year No-Clog Guarantee.',
  keywords: [
    'gutter guards northwest arkansas',
    'bentonville gutter guards',
    'bella vista gutter protection',
    'rogers ar gutter guards',
    'fayetteville gutter guards',
    'springdale gutter guards',
    'pine needle gutter guard',
    'micro mesh gutter guard NWA',
    'gutter cleaning bentonville'
  ],
  authors: [{ name: 'Ozark Gutter Guard Co.', url: 'https://ozarkgutterguard.com' }],
  creator: 'Ozark Gutter Guard Co.',
  publisher: 'Ozark Gutter Guard Co.',
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ozark Gutter Guard Co. | Northwest Arkansas Gutter Protection',
    description: 'Get an accurate instant price range in 30 seconds. 10-Year No-Clog Guarantee with marine-grade 316 stainless steel micro-mesh.',
    url: 'https://ozarkgutterguard.com',
    siteName: 'Ozark Gutter Guard Co.',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/contractor_truck.jpg',
        width: 1200,
        height: 630,
        alt: 'Ozark Gutter Guard Co. installation crew in Northwest Arkansas',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ozark Gutter Guard Co. | Northwest Arkansas Gutter Protection',
    description: 'Direct contractor pricing on 316 marine-grade 316 stainless steel micro-mesh gutter protection. 10-Year No-Clog Guarantee.',
    images: ['/images/contractor_truck.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '192x192', type: 'image/png' },
      { url: '/logo.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  verification: {
    google: 'google655e15d671ec8394',
  },
  manifest: '/manifest.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${plusJakartaSans.variable} ${inter.variable}`}>
      <head>
        <meta name="geo.region" content="US-AR" />
        <meta name="geo.placename" content="Bentonville, Arkansas" />
        <meta name="geo.position" content="36.3729;-94.2088" />
        <meta name="ICBM" content="36.3729, -94.2088" />
        <SchemaJsonLd type="business" />
      </head>
      <body className="min-h-screen flex flex-col antialiased text-slate-900 bg-[#F8F9FA] font-sans selection:bg-amber-100 selection:text-amber-900 overflow-x-clip">
        <AnalyticsDeferred />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N2ZFPF8X"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
