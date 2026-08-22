import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, ShieldCheck } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import SchemaJsonLd from '@/components/SchemaJsonLd';

export const metadata: Metadata = {
  title: 'Terms of Service | Ozark Gutter Guard Co.',
  description: 'Terms of Service for Ozark Gutter Guard Co. Read our contracting terms, satellite estimating scope, and service agreements.',
  alternates: { canonical: 'https://ozarkgutterguard.com/terms' },
  openGraph: {
    title: 'Terms of Service | Ozark Gutter Guard Co.',
    description: 'Contracting terms and service agreements for Ozark Gutter Guard Co. in Northwest Arkansas.',
    url: 'https://ozarkgutterguard.com/terms',
    type: 'website',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <SchemaJsonLd type="business" title="Terms of Service - Ozark Gutter Guard Co." description="Terms of Service and contracting guidelines for Ozark Gutter Guard Co." />

      <TopBar />
      <Header />

      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="border-b border-slate-200 pb-6 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
              <FileText className="w-3.5 h-3.5" />
              <span>Contracting Terms &amp; Agreement</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Terms of Service
            </h1>
            <p className="text-sm text-slate-500">
              Effective Date: August 2026 • Ozark Gutter Guard Co. (AR Lic. #039182)
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-6 text-sm text-slate-700 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-black text-slate-900">1. Scope of Services</h2>
              <p>
                Ozark Gutter Guard Co. provides professional gutter protection installation, seamless gutter fabrication, gutter cleanouts, fascia board repair, and drainage consulting across Benton and Washington Counties, Arkansas.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-black text-slate-900">2. Satellite Estimates &amp; On-Site Verification</h2>
              <p>
                Satellite and online linear footage quotes are generated using calibrated aerial imagery. While 95%+ accurate, final contract pricing is confirmed prior to installation upon physical pre-work inspection of gutter pitch, fascia condition, and hidden structural decay.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-black text-slate-900">3. Licensure &amp; Insurance</h2>
              <p>
                All installation work is performed under Arkansas State Contractor License #039182. Ozark Gutter Guard Co. maintains comprehensive $2,000,000 commercial general liability insurance and workers' compensation coverage protecting property owners.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-black text-slate-900">4. Payment Terms</h2>
              <p>
                Payment is due upon completion and homeowner walkthrough of installed systems. We accept major credit cards, checks, cash, and authorized home improvement financing.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-black text-slate-900">5. Governing Law</h2>
              <p>
                These terms are governed by and construed in accordance with the laws of the State of Arkansas. Any disputes arising shall be resolved within the jurisdiction of Benton County, Arkansas courts.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-black text-slate-900">6. Contact Information</h2>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs">
                <p><strong>Ozark Gutter Guard Co.</strong></p>
                <p>Bentonville, AR 72712</p>
                <p>Email: <a href="mailto:estimates@ozarkgutterguard.com" className="text-orange-600 hover:underline">estimates@ozarkgutterguard.com</a></p>
                <p>Phone: <a href="tel:+14799292516" className="text-orange-600 hover:underline">(479) 929-2516</a></p>
              </div>
            </section>
          </div>

        </div>
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
