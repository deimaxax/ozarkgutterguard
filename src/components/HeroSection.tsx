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
            
            {/* Single Concise Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold">
              <span className="text-emerald-700 font-bold">✓ Lic. #039182</span>
              <span className="text-slate-400">•</span>
              <span>Bentonville, AR</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-600">Benton &amp; Washington Co.</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              {customH1 || `Northwest Arkansas Gutter Protection & Cleanouts.`}
            </h1>

            {/* Concise Subhead */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {customSub || `Permanent 316 stainless micro-mesh & $149 seasonal cleanouts. Direct owner pricing from our local Bentonville crew — zero salesmen games.`}
            </p>

            {/* 3 Quick Value Badges */}
            <div className="grid grid-cols-3 gap-2 py-1 text-center">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] font-bold text-slate-900 block">Direct Pricing</span>
                <span className="text-[10px] text-slate-500">No Salesmen</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] font-bold text-slate-900 block">316 Stainless</span>
                <span className="text-[10px] text-slate-500">Zero Clog</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] font-bold text-slate-900 block">Lifetime</span>
                <span className="text-[10px] text-slate-500">Warranty</span>
              </div>
            </div>

            {/* Direct Phone Call Button & Cleanout Link */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <a
                href={phoneHref}
                className="btn-contractor-primary min-h-[48px] px-5 py-3 text-sm sm:text-base font-bold flex items-center justify-center gap-2 shadow-xs transition"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call Local Office: {phoneDisplay}</span>
              </a>

              <Link
                href="/gutter-cleaning"
                className="btn-contractor-navy min-h-[48px] px-5 py-3 rounded-lg text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition shadow-xs"
              >
                <span>Book $149 Cleanout &rarr;</span>
              </Link>
            </div>

            {/* Local Crew Image Card (Desktop / Tablet) */}
            <div className="hidden sm:block rounded-xl overflow-hidden border border-slate-200 bg-white shadow-2xs">
              <div className="relative h-32 sm:h-40 w-full bg-slate-100">
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
