import { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import SatelliteEstimator from '@/components/SatelliteEstimator';
import { Hammer, CheckCircle2, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Seamless Gutters Northwest Arkansas | Custom 6-Inch | Ozark Gutter Guard Co.',
  description: 'Seamless gutters in Northwest Arkansas. Custom 6-inch aluminum extruded on-site in Bentonville, Rogers, Fayetteville, Bella Vista & Springdale. 10-Yr Guarantee.',
  alternates: {
    canonical: 'https://ozarkgutterguard.com/seamless-gutter-installation-nwa',
  },
  keywords: [
    'seamless gutters northwest arkansas',
    '6 inch seamless gutter replacement rogers ar',
    'seamless gutter installation near me',
    'seamless gutters bentonville ar',
    'custom aluminum gutters rogers',
    'gutter replacement fayetteville ar'
  ]
};

export default function SeamlessGuttersPage() {
  const phoneHref = "tel:+14799292516";
  const phoneDisplay = "(479) 929-2516";

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <TopBar />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-10 sm:py-16 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-50 border border-emerald-200 text-brand-green text-xs font-bold">
                  <Hammer className="w-4 h-4 text-brand-green" />
                  <span>Custom On-Site Continuous Extrusions</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black text-brand-navy tracking-tight leading-[1.12]">
                  Seamless Gutters Northwest Arkansas — Custom 6-Inch
                </h1>

                <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
                  Eliminate leaks with continuous on-site extruded seamless gutters. Engineered with 0.032&quot; thick heavy-gauge aluminum and secured with 1.5&quot; zinc-coated hidden screw brackets.
                </p>

                <div className="space-y-2 text-xs sm:text-sm text-slate-800 font-semibold pt-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                    <span>Heavy .032&quot; commercial aluminum never rusts or sags</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                    <span>Zero sectional seam leak points along entire roof run</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                    <span>Compatible with 316 marine-grade 316 stainless micro-mesh armor</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={phoneHref}
                    className="btn-contractor-green px-6 py-3 text-xs font-bold inline-flex items-center gap-2 shadow-xs"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Get Seamless Gutter Estimate: {phoneDisplay}</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <SatelliteEstimator initialCity="Bentonville" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
