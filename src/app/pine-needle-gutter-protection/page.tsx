import { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import SatelliteEstimator from '@/components/SatelliteEstimator';
import ComparisonMatrix from '@/components/ComparisonMatrix';
import FaqSection from '@/components/FaqSection';
import { TreePine, CheckCircle2, AlertOctagon, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Gutter Guards for Pine Needles | 50-Micron Mesh | Ozark Gutter Guard Co.',
  description: 'Stop Loblolly pine needles from clogging your gutters. 50-micron surgical stainless steel micro-mesh engineered for Bella Vista & Ozark pine canopies.',
  alternates: {
    canonical: 'https://ozarkgutterguard.com/pine-needle-gutter-protection',
  },
  keywords: [
    'best gutter guards for pine needles',
    'how to stop pine needles in gutters',
    'pine needle gutter guard',
    'loblolly pine gutter protection',
    'bella vista pine needle screen',
    'micro mesh for pine needles arkansas'
  ]
};

export default function PineNeedlePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <TopBar />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-white py-10 sm:py-16 border-b-2 border-slate-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="border border-slate-300 bg-slate-100 px-3 py-1 text-[11px] font-mono font-bold text-slate-900 inline-block uppercase">
                  Engineered For Loblolly &amp; Shortleaf Pine Needles (Bella Vista Focus)
                </div>

                <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.08] font-heading uppercase">
                  Best Gutter Guards for Pine Needles in Arkansas
                </h1>

                <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
                  Standard slotted screens and reverse-curve hoods fail completely against pine needles. Our 50-micron medical-grade surgical stainless micro-mesh creates an impenetrable barrier that pine needles cannot penetrate.
                </p>

                <div className="space-y-2 text-xs sm:text-sm text-slate-800 font-mono font-bold pt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Blocks 100% of fine needles, oak tassels, and seed pods</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Self-shedding breeze design eliminates dangerous ladder climbs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Backed by our written 10-Year No-Clog Guarantee</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="tel:+14799292516"
                    className="btn-contractor-amber px-6 py-3.5 text-xs sm:text-sm font-black inline-flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Speak with Pine Specialist: (479) 929-2516</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <SatelliteEstimator initialCity="Bella Vista" />
              </div>
            </div>
          </div>
        </section>

        {/* Why Plastic Fails vs Pines */}
        <section className="py-12 sm:py-16 bg-slate-50 border-b-2 border-slate-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8 space-y-1">
              <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-wider block">Physical Failure Mechanics</span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-slate-900 font-heading">
                Why Traditional Gutter Covers Act Like Pine Needle Combs
              </h2>
              <p className="text-sm text-slate-700 mt-1">
                Pine needles are straight and rigid. When they hit slotted vinyl or curved leaf guards, they poke through vertically, creating a mesh dam that traps dirt, water, and debris.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-slate-300 p-6 space-y-3">
                <div className="flex items-center gap-2 text-red-700 font-bold font-heading uppercase text-base">
                  <AlertOctagon className="w-5 h-5 text-red-600" />
                  <span>Plastic / Slotted / Reverse Hoods</span>
                </div>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-2 font-mono">
                  <li>✗ Needles penetrate slot openings and lodge vertically</li>
                  <li>✗ Water overshoots during heavy downpours</li>
                  <li>✗ Debris forms moist peat moss inside, rotting the roof deck</li>
                  <li>✗ Requires manual cleaning 4-6 times every year</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-slate-900 p-6 space-y-3">
                <div className="flex items-center gap-2 text-slate-950 font-bold font-heading uppercase text-base">
                  <span className="text-amber-600 font-bold text-xl">✓</span>
                  <span>Ozark 316 Surgical Stainless Micro-Mesh</span>
                </div>
                <ul className="text-xs sm:text-sm text-slate-800 space-y-2 font-mono font-bold">
                  <li>✓ 50-micron aperture: Pine needles rest flat on top and blow away in the wind</li>
                  <li>✓ Handles up to 150 inches of torrential rainfall per hour</li>
                  <li>✓ 100% rustproof marine-grade 316 stainless steel</li>
                  <li>✓ 10-Year No-Clog Guarantee &amp; zero ladder maintenance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ComparisonMatrix />
        <FaqSection />
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
