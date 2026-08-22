import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import SchemaJsonLd from '@/components/SchemaJsonLd';

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
  description: 'Best gutter guards in Northwest Arkansas. Surgical 316 stainless micro mesh installers near you in Bentonville, Bella Vista, Rogers, Fayetteville & Springdale. Save $3,000+ vs LeafFilter.',
  keywords: [
    'gutter guards northwest arkansas',
    'bentonville gutter guards',
    'bella vista gutter protection',
    'rogers ar gutter guards',
    'fayetteville gutter guards',
    'springdale gutter guards',
    'pine needle gutter guard',
    'micro mesh gutter guard NWA',
    'leaffilter alternative arkansas',
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
    description: 'Get an accurate instant satellite quote in 90 seconds. 10-Year No-Clog Guarantee with surgical 316 stainless steel micro-mesh.',
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
    description: 'Direct contractor pricing on 316 surgical stainless steel micro-mesh gutter protection. 10-Year No-Clog Guarantee.',
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
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N2ZFPF8X');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X3N5LB8WFK"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-X3N5LB8WFK');`,
          }}
        />
        {/* End Google Analytics */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="geo.region" content="US-AR" />
        <meta name="geo.placename" content="Bentonville, Arkansas" />
        <meta name="geo.position" content="36.3729;-94.2088" />
        <meta name="ICBM" content="36.3729, -94.2088" />
        <SchemaJsonLd type="business" />
      </head>
      <body className="min-h-screen flex flex-col antialiased text-slate-900 bg-[#F8F9FA] font-sans selection:bg-amber-100 selection:text-amber-900 overflow-x-clip">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N2ZFPF8X"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
