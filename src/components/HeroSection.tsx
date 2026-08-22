'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, CheckCircle2, MapPin, ShieldCheck, ArrowDown, Sparkles } from 'lucide-react';
import SatelliteEstimator from './SatelliteEstimator';

interface HeroSectionProps {
  cityName?: string;
  customH1?: string;
  customSub?: string;
}

export default function HeroSection({ cityName = 'Northwest Arkansas', customH1, customSub }: HeroSectionProps) {
  const phoneHref = "tel:+14799292516";
  const phoneDisplay = "(479) 929-2516";

  return (
    <section className="bg-white border-b border-slate-200 py-6 sm:py-12 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Fast Value Proposition */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.12]">
              {customH1 || `Northwest Arkansas Gutter Protection — Direct From The Installer.`}
            </h1>

            {/* Clear Subhead */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {customSub || `Eliminate gutter cleaning permanently with 316 marine-grade stainless micro-mesh. No high-pressure sales reps, no corporate markup.`}
            </p>

            {/* 3 Quick Value Badges */}
            <div className="grid grid-cols-3 gap-2 py-1 text-center">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] font-bold text-slate-900 block">316 Stainless</span>
                <span className="text-[10px] text-slate-500">Zero Clog Guarantee</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] font-bold text-slate-900 block">Direct Owner Rate</span>
                <span className="text-[10px] text-slate-500">Save 50%+ vs Franchise</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] font-bold text-slate-900 block">Lifetime Warranty</span>
                <span className="text-[10px] text-slate-500">100% Transferable</span>
              </div>
            </div>

            {/* Single Unified Primary CTA (Zero-Friction Funnel) */}
            <div className="space-y-2 pt-1">
              <a
                href="#estimate-form"
                className="w-full sm:w-auto btn-contractor-primary min-h-[52px] px-8 py-3.5 text-base font-bold inline-flex items-center justify-center gap-2 shadow-sm transition"
              >
                <span>Calculate My Exact Price Range ↓</span>
              </a>
              
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium pt-1">
                <span className="text-amber-500 font-bold">★★★★★</span>
                <span className="font-bold text-slate-700">4.9/5</span>
                <span>•</span>
                <span>180+ Local NWA Homeowners</span>
                <span>•</span>
                <span>Zero Pressure</span>
              </div>
            </div>

            {/* Local Crew Image Card (Desktop / Tablet) */}
            <div className="hidden sm:block rounded-xl overflow-hidden border border-slate-200 bg-white shadow-2xs">
              <div className="relative h-32 sm:h-36 w-full bg-slate-100">
                <Image
                  src="/images/contractor_truck.jpg"
                  alt="Ozark Gutter Guard service truck in Northwest Arkansas"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              <div className="p-2.5 bg-slate-950 text-white flex items-center justify-between text-xs">
                <span className="font-bold text-slate-200">Local NWA In-House Installation Crew</span>
                <span className="text-slate-400">Bentonville, Rogers, Fayetteville &amp; Bella Vista</span>
              </div>
            </div>

          </div>

          {/* Right Column: WARM LOCAL ESTIMATOR FORM */}
          <div id="estimate-form" className="lg:col-span-5 lg:sticky lg:top-24 scroll-mt-20">
            <SatelliteEstimator initialCity={cityName} />
          </div>

        </div>

      </div>
    </section>
  );
}
