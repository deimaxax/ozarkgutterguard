import { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import SatelliteEstimator from '@/components/SatelliteEstimator';
import { Layers, CheckCircle2, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Micro-Mesh vs Screen Gutter Guards | Arkansas Durability Review',
  description: 'Technical comparison between surgical stainless micro-mesh and standard plastic/perforated screen guards. Why micro-mesh lasts 20+ years in Ozark climates.',
  keywords: [
    'micro mesh vs screen gutter guards',
    'best gutter guard material',
    'perforated aluminum vs stainless mesh',
    'vinyl gutter screen failure'
  ]
};

export default function MicroMeshVsScreensPage() {
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
                  <Layers className="w-4 h-4 text-brand-green" />
                  <span>Material Science &amp; Hydrodynamics</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black text-brand-navy tracking-tight leading-[1.12]">
                  Micro-Mesh vs. Screen Guards: What Actually Works?
                </h1>

                <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
                  Most hardware store screens and perforated covers fail in Arkansas within 1 to 2 seasons because our oak tassels, pine needles, and roof grit slip through large openings and turn into cement-like sludge.
                </p>
              </div>

              <div className="lg:col-span-5">
                <SatelliteEstimator initialCity="Bentonville" />
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Material Comparison */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Screen Guards Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 sm:p-6 space-y-4">
                <div className="flex items-center gap-2 text-red-600 font-bold text-base sm:text-lg">
                  <XCircle className="w-5 h-5" />
                  <span>Standard Slotted / Plastic Screens</span>
                </div>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span><strong>Pore Size:</strong> 2mm – 5mm (Allows pine needles, oak tassels, and roof gravel straight inside).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span><strong>Durability:</strong> Vinyl warps and cracks under 100°F Ozark summer UV rays.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span><strong>Lifespan:</strong> 2 to 4 years before requiring complete removal and replacement.</span>
                  </li>
                </ul>
              </div>

              {/* Micro-Mesh Box */}
              <div className="bg-emerald-50/60 border border-emerald-300 rounded-lg p-5 sm:p-6 space-y-4 shadow-xs">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-base sm:text-lg">
                  <CheckCircle2 className="w-5 h-5 text-brand-green" />
                  <span>316 Surgical Stainless Micro-Mesh</span>
                </div>
                <ul className="text-xs sm:text-sm text-slate-800 space-y-3 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green font-bold">✓</span>
                    <span><strong>Pore Size:</strong> 440 Microns (Blocks 100% of pine needles, oak pollen, and shingle grit).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green font-bold">✓</span>
                    <span><strong>Durability:</strong> Marine-grade surgical steel will never rust, warp, or sag.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green font-bold">✓</span>
                    <span><strong>Lifespan:</strong> 20+ years backed by our written 10-Year Transferable Guarantee.</span>
                  </li>
                </ul>
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
