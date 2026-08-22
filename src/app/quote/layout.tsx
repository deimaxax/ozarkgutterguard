import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Instant Free Gutter Quote | Ozark Gutter Guard Co.',
  description: 'Get an accurate instant satellite quote for your Northwest Arkansas home in 90 seconds. 316 surgical stainless micro-mesh with 10-Year No-Clog Guarantee.',
  alternates: {
    canonical: 'https://ozarkgutterguard.com/quote',
  },
  openGraph: {
    title: 'Instant Free Gutter Quote | Ozark Gutter Guard Co.',
    description: 'Get an accurate instant satellite estimate for your Northwest Arkansas home. $250 off installation + 0% APR financing.',
    url: 'https://ozarkgutterguard.com/quote',
  },
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
