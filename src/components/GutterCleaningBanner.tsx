import React from 'react';
import Link from 'next/link';
import { Sparkles, CheckCircle2, ArrowRight, Phone, ShieldCheck, Wrench } from 'lucide-react';

export default function GutterCleaningBanner() {
  const phoneHref = "tel:+14799292516";
  const phoneDisplay = "(479) 929-2516";

  return (
    <section className="bg-slate-900 text-white py-12 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-950 via-brand-navy to-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-10 shadow-lg">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Info & Offer */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
                <Wrench className="w-3.5 h-3.5" />
                <span>Need Cleaning First? • 100% Fee Credited To Guards</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
                $149 Diagnostic Cleanout &amp; 21-Point Roofline Audit
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                Not ready for permanent guards yet? We provide complete hand debris removal, high-velocity downspout flushing, laser pitch correction, and a 21-point video audit of your fascia and roof deck. <strong className="text-emerald-400">100% of your $149 fee is credited</strong> if you ever choose to install guards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-200 pt-1 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Full Interior Sludge &amp; Catkin Extraction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Laser Slope &amp; Drainage Pitch Realignment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>High-Velocity Underground Jet Flush</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>21-Point HD Video Roofline &amp; Fascia Inspection</span>
                </div>
              </div>
            </div>

            {/* Right Col: Price Box & Actions */}
            <div className="lg:col-span-4 bg-slate-900/90 rounded-xl border border-slate-800 p-6 text-center space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Flat Diagnostic Rate</span>
                <div className="text-4xl font-black text-white mt-1">
                  $149 <span className="text-xs font-normal text-slate-400 font-sans">/ full visit</span>
                </div>
                <span className="text-[11px] text-emerald-400 font-medium block mt-1">
                  ★ 100% Credited Toward Guards
                </span>
              </div>

              <div className="space-y-2.5 pt-2">
                <Link
                  href="/gutter-cleaning"
                  className="w-full btn-contractor-green py-3 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Book $149 Cleanout &amp; Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={phoneHref}
                  className="w-full btn-contractor-navy py-2.5 text-xs font-bold flex items-center justify-center gap-2 border border-slate-700 hover:border-emerald-400"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Call Dispatch: {phoneDisplay}</span>
                </a>
              </div>

              <div className="text-[10px] text-slate-500 flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                <span>Same-Week Dispatch in Benton &amp; Washington Counties</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
