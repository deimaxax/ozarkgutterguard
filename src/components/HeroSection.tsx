'use client';

import React from 'react';
import { ShieldCheck, Check, Star, Zap, Droplets, ArrowRight } from 'lucide-react';
import SatelliteEstimator from './SatelliteEstimator';

interface HeroSectionProps {
  cityName?: string;
  customH1?: string;
  customSub?: string;
}

export default function HeroSection({ cityName, customH1, customSub }: HeroSectionProps) {
  const phoneHref = "tel:+14799292516";
  const phoneDisplay = "(479) 929-2516";

  return (
    <section className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border-b border-slate-800 py-10 sm:py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-bold shadow-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{cityName ? `${cityName}, AR` : 'Northwest Arkansas'} · 100% GAF Shingle-Safe Armor</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-950/70 border border-orange-500/40 text-orange-400 text-xs font-mono font-bold">
                <Zap className="w-3.5 h-3.5 text-orange-400" />
                <span>150 in/hr Flow Rated</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-white">
              {customH1 || (
                <>
                  Never Clean Your Gutters Again.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                    Lifetime 316 Armor.
                  </span>
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              {customSub || 'Direct contractor installation of medical-grade 316 surgical stainless steel micro-mesh across Bentonville, Bella Vista, Rogers, Fayetteville, and Springdale. Zero high-pressure salesmen, 100% shingle-safe fascia mount, and backed by our written 10-Year Transferable No-Clog Guarantee.'}
            </p>

            {/* Direct Engineering Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-slate-200 font-bold">
              <div className="flex items-center gap-2.5 bg-slate-900/80 border border-slate-800/80 p-2.5 rounded-xl">
                <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/50 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>316 Marine Stainless Steel (50-Micron)</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/80 border border-slate-800/80 p-2.5 rounded-xl">
                <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/50 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>0% Shingle Contact (Preserves Warranty)</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/80 border border-slate-800/80 p-2.5 rounded-xl">
                <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/50 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Laser Slope &amp; Pitch Realignment</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/80 border border-slate-800/80 p-2.5 rounded-xl">
                <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/50 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Direct Contractor Rates ($1,250–$1,450)</span>
              </div>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-2 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                <span className="block font-black text-orange-400 text-base">50-Micron</span>
                <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Surgical Weave</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                <span className="block font-black text-blue-400 text-base">150 in/hr</span>
                <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Rain Intake</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                <span className="block font-black text-white text-base">10-Year</span>
                <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">No-Clog Warranty</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                <span className="block font-black text-amber-400 text-base">5.0 ★★★★★</span>
                <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">187+ NWA Reviews</span>
              </div>
            </div>

            {/* Fast Cleanout Credit Callout */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-orange-500/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div>
                <span className="font-bold text-white block">Need an immediate seasonal cleanout first?</span>
                <span className="text-slate-300">Book our $149 Diagnostic Cleanout &amp; 21-Pt Inspection — <strong className="text-emerald-400">100% credited toward permanent guards</strong>.</span>
              </div>
              <a 
                href="/gutter-cleaning" 
                className="shrink-0 px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-bold transition shadow-md inline-flex items-center gap-1"
              >
                <span>Book Cleanout</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Clean Instant Estimate Form */}
          <div id="estimate-section" className="lg:col-span-5">
            <SatelliteEstimator initialCity={cityName} />
          </div>

        </div>

      </div>
    </section>
  );
}
