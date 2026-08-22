import { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import SatelliteEstimator from '@/components/SatelliteEstimator';
import { ShieldAlert, CheckCircle2, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Prevent Foundation Damage Overflowing Gutters | Ozark Gutter Guard Co.',
  description: 'Protect your Northwest Arkansas home foundation from $20,000 erosion and structural shifting caused by overflowing clogged gutters. 10-Yr Guarantee.',
  alternates: {
    canonical: 'https://ozarkgutterguard.com/foundation-water-damage-prevention',
  },
  keywords: [
    'prevent foundation damage overflowing gutters',
    'how to protect house foundation from rain',
    'gutter overflow foundation damage arkansas',
    'foundation water pooling springdale',
    'clay soil gutter protection nwa'
  ]
};

export default function FoundationProtectionPage() {
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-50 border border-red-200 text-red-700 text-xs font-bold">
                  <ShieldAlert className="w-4 h-4 text-red-600" />
                  <span>Protecting Against $20,000 Foundation Repairs</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black text-brand-navy tracking-tight leading-[1.12]">
                  Prevent Foundation Damage from Overflowing Gutters
                </h1>

                <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
                  Northwest Arkansas sits on expansive clay soil. When clogged gutters overflow during intense storms, thousands of gallons of water saturate the foundation perimeter, leading to slab movement, basement leaks, and cracked drywall.
                </p>

                <div className="space-y-2 text-xs sm:text-sm text-slate-800 font-semibold pt-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                    <span>Channels 150+ inches of rain per hour safely away from footings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                    <span>Eliminates perimeter pooling, soil erosion, and basement flooding</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <SatelliteEstimator initialCity="Bentonville" />
              </div>
            </div>
          </div>
        </section>

        {/* Foundation Risk Breakdown */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-black text-brand-navy">
                The True Cost of Gutter Failure
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                A $1,250 – $1,650 investment in 316 marine-grade 316 micro-mesh protects against catastrophic structural damage.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">
              <div className="p-5 bg-red-50 rounded-lg border border-red-200">
                <div className="text-xl sm:text-2xl font-black text-red-600">$15,000 – $25,000</div>
                <div className="text-xs font-bold text-slate-900 mt-1">Foundation Piering &amp; Leveling</div>
                <p className="text-xs text-slate-600 mt-2">Caused by water saturated clay soil shifting under the slab footing.</p>
              </div>

              <div className="p-5 bg-amber-50 rounded-lg border border-amber-200">
                <div className="text-xl sm:text-2xl font-black text-amber-700">$3,500 – $7,000</div>
                <div className="text-xs font-bold text-slate-900 mt-1">Fascia &amp; Roof Deck Wood Rot</div>
                <p className="text-xs text-slate-600 mt-2">Caused by backed-up water overflowing behind the gutter trough.</p>
              </div>

              <div className="p-5 bg-emerald-50 rounded-lg border border-emerald-300">
                <div className="text-xl sm:text-2xl font-black text-brand-green">$1,250 – $1,650</div>
                <div className="text-xs font-bold text-slate-900 mt-1">Ozark Permanent Gutter Armor</div>
                <p className="text-xs text-emerald-800 font-medium mt-2">10-Year Guaranteed complete foundation water defense.</p>
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
