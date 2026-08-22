import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '$149 Diagnostic Cleanout & 21-Point Audit | Ozark Gutter Guard Co.',
  description: 'Professional gutter cleaning, downspout jetting, and 21-point roof-to-foundation audit in Northwest Arkansas. 100% credited toward permanent micro-mesh guards.',
  alternates: {
    canonical: 'https://ozarkgutterguard.com/gutter-cleaning',
  },
  openGraph: {
    title: '$149 Diagnostic Cleanout & 21-Point Audit | Northwest Arkansas',
    description: 'Full interior cleanout, high-velocity downspout flush, and laser slope realignment across Bentonville, Bella Vista, Rogers, and Fayetteville. 100% fee credited toward guards.',
    url: 'https://ozarkgutterguard.com/gutter-cleaning',
  },
};

export default function GutterCleaningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
