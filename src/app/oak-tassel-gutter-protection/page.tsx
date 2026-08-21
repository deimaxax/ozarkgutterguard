import { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import SatelliteEstimator from '@/components/SatelliteEstimator';
import { TreeDeciduous, CheckCircle2, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Oak Tassel & Spring Catkin Gutter Protection | Ozark Gutter Guard',
  description: 'Stop spring oak tassels (catkins) from turning your gutters into concrete sludge in Bentonville, Fayetteville & Coler Preserve. 10-Yr Guarantee.',
  keywords: [
    'oak tassels clogging gutters',
    'gutter guards for oak trees arkansas',
    'oak catkin gutter filter',
    'spring pollen sludge in gutters'
  ]
};

export default function OakTasselsPage() {
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold">
                  <TreeDeciduous className="w-4 h-4 text-amber-600" />
                  <span>Northwest Arkansas Spring Debris Defense</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black text-brand-navy tracking-tight leading-[1.12]">
                  Stop Oak Tassels &amp; Catkins from Cementing Your Gutters
                </h1>

                <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
                  Every April and May across Bentonville, Fayetteville, and Coler Preserve, millions of oak catkins drop. When combined with spring rains, they create a dense, waterproof sludge that chokes downspouts.
                </p>

                <div className="space-y-2 text-xs sm:text-sm text-slate-800 font-semibold pt-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                    <span>440-micron micro-mesh allows 100% of rainwater through while shedding oak tassels</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                    <span>Natural wind airflow blows dry catkins off the roofline effortlessly</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="tel:+14799292516"
                    className="btn-contractor-green px-6 py-3 text-xs font-bold inline-flex items-center gap-2 shadow-xs"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Speak with Technician: (479) 929-2516</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <SatelliteEstimator initialCity="Bentonville" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-black text-brand-navy">
              Hydrodynamic Surface Tension: The Science Behind It
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Our 316 stainless steel micro-mesh pulls high-velocity water directly into your gutter trough while keeping fluffy oak catkins and pollen buds on the surface to be dried and swept away by local Ozark breezes.
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
