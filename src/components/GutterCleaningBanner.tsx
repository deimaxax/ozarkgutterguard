import React from 'react';
import Link from 'next/link';
import { Sparkles, CheckCircle2, ArrowRight, Phone, ShieldCheck, Wrench } from 'lucide-react';

export default function GutterCleaningBanner() {
  const phoneHref = "tel:+14799292516";
  const phoneDisplay = "(479) 929-2516";

  return (
    <section className="bg-slate-50 text-slate-900 py-12 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Info & Offer */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
                <Wrench className="w-3.5 h-3.5 text-emerald-700" />
                <span>Need Cleaning First? • 100% Fee Credited To Guards</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
                $149 Complete Gutter Cleanout &amp; Inspection
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Not ready for permanent guards yet? We provide complete hand debris removal, downspout flushing, slope checking, and a comprehensive inspection of your gutters, fascia, and roofline. <strong className="text-slate-900">100% of your $149 fee is credited</strong> toward guards if you decide to install within 12 months.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700 pt-1 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Full Hand Debris &amp; Pine Needle Removal</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Downspout High-Flow Flush</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Slope, Pitch &amp; Bracket Check</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Detailed Roofline Condition Report</span>
                </div>
              </div>
            </div>

            {/* Right Col: Price Box & Actions */}
            <div className="lg:col-span-4 bg-slate-50 rounded-xl border border-slate-200 p-6 text-center space-y-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">Flat Rate Cleanout</span>
                <div className="text-4xl font-extrabold text-slate-900 mt-1">
                  $149 <span className="text-xs font-normal text-slate-500">/ visit</span>
                </div>
                <span className="text-xs text-emerald-700 font-semibold block mt-1">
                  ✓ 100% Credited Toward Guards
                </span>
              </div>

              <div className="space-y-2.5 pt-2">
                <Link
                  href="/gutter-cleaning"
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-3 px-4 rounded-lg text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <span>Book $149 Cleanout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={phoneHref}
                  className="w-full bg-white hover:bg-slate-100 text-slate-800 py-2.5 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 border border-slate-300 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-600" />
                  <span>Call: {phoneDisplay}</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
