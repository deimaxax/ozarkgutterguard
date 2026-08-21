import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '$149 Direct Mail Cleanout & 21-Point Audit Voucher | Ozark Gutter Guard Co.',
  description: 'Redeem your Northwest Arkansas direct mail voucher for a $149 Diagnostic Cleanout & 21-Point Roofline Audit. 100% credited toward permanent guards.',
  alternates: {
    canonical: '/direct-mail',
  },
};

export default function DirectMailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
