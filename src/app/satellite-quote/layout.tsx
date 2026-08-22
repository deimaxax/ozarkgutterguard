import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Instant Satellite Gutter Quote (90 Seconds) | Ozark Gutter Guard Co.',
  description: 'Get an accurate instant satellite quote for your Northwest Arkansas home. Medical-grade 316 marine-grade 316 stainless micro-mesh with 10-Year Transferable No-Clog Guarantee.',
  alternates: {
    canonical: 'https://ozarkgutterguard.com/satellite-quote',
  },
  openGraph: {
    title: 'Instant Satellite Gutter Quote | Ozark Gutter Guard Co.',
    description: 'Accurate instant satellite estimate for Northwest Arkansas homeowners. 0% financing & $250 off installation.',
    url: 'https://ozarkgutterguard.com/satellite-quote',
  },
};

export default function SatelliteQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
