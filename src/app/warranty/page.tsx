import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, ArrowRight, Phone, Award, HelpCircle, FileCheck } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import SchemaJsonLd from '@/components/SchemaJsonLd';

export const metadata: Metadata = {
  title: 'Lifetime Transferable Warranty | Ozark Gutter Guard Co.',
  description: 'Learn about our 100% No-Clog Lifetime Transferable Warranty on Marine-Grade 316 Stainless Steel Micro-Mesh Gutter Guards in Northwest Arkansas.',
  alternates: { canonical: 'https://ozarkgutterguard.com/warranty' },
  openGraph: {
    title: 'Lifetime Transferable Warranty | Ozark Gutter Guard Co.',
    description: '100% Clog-Free Lifetime Transferable Warranty. If your gutters ever clog, we clean them for free or refund your installation.',
    url: 'https://ozarkgutterguard.com/warranty',
    type: 'website',
  },
};

export default function WarrantyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <SchemaJsonLd type="business" title="Lifetime Transferable Warranty - Ozark Gutter Guard Co." description="100% Clog-Free Transferable Lifetime Warranty on 316 Stainless Micro-Mesh Gutter Protection." />

      <TopBar />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[#0F1E36] text-white py-14 sm:py-20 border-b border-[#183059]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>100% Clog-Free Guarantee</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto">
              Lifetime Transferable No-Clog Warranty
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
              If your gutters ever clog or overflow due to debris entering our micro-mesh system, we will clean and clear them at zero cost to you.
            </p>
          </div>
        </section>

        {/* 3 Core Guarantees */}
        <section className="py-12 bg-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-black">
                  1
                </div>
                <h3 className="text-base font-black text-slate-900">Zero Clog Guarantee</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our 316 surgical stainless steel mesh blocks all oak tassels, pine needles, shingle grit, and seeds from ever settling inside the gutter trough.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-black">
                  2
                </div>
                <h3 className="text-base font-black text-slate-900">100% Transferable</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Selling your home? The full remaining warranty transfers to the next homeowner with no transfer fees, adding documented resale appraisal value.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-black">
                  3
                </div>
                <h3 className="text-base font-black text-slate-900">Corrosion &amp; Rust Proof</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Marine-Grade 316 alloy resists acidic pine sap, bird droppings, and UV degradation. Guaranteed never to rust, melt, warp, or crack.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Terms */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900">
                What Is Covered Under Our Lifetime Warranty
              </h2>
              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Gutter Interior Clogs:</strong>
                    <p className="text-slate-600">Guaranteed prevention of interior debris accumulation causing gutter overflows.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Structural Material Integrity:</strong>
                    <p className="text-slate-600">Anodized aluminum frames and 316 stainless mesh guaranteed against rust, warping, and separation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Installation Workmanship:</strong>
                    <p className="text-slate-600">All fastening brackets and fascia pitch alignments executed by AR licensed technicians.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Transfer Process */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
              <h3 className="text-base font-black text-slate-900">How to Transfer the Warranty to a New Buyer</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                When selling your property in Benton or Washington County, simply provide your original installation invoice number to the buyer. They can notify our local team at <a href="mailto:info@ozarkgutterguard.com" className="text-[#D92626] font-semibold underline">info@ozarkgutterguard.com</a> to register the new property owner record for free.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <ShieldCheck className="w-10 h-10 text-emerald-600 mx-auto" />
            <h2 className="text-2xl font-black text-slate-900">Get Guaranteed Lifetime Protection Today</h2>
            <p className="text-sm text-slate-600">Get your satellite quote in 15 minutes. 100% No-Clog Guarantee included on every installation.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link href="/satellite-quote" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-black text-sm">
                <span>Get Free Satellite Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+14799292516" className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 px-6 py-3 rounded-xl font-bold text-sm border border-slate-200">
                <Phone className="w-4 h-4 text-orange-600" />
                <span>(479) 929-2516</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
