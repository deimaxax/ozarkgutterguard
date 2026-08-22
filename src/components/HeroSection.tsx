'use client';

import React from 'react';
import Image from 'next/image';
import { Check, MapPin, ShieldCheck, Star } from 'lucide-react';
import SatelliteEstimator from './SatelliteEstimator';

interface HeroSectionProps {
  cityName?: string;
  customH1?: string;
  customSub?: string;
}

export default function HeroSection({ cityName = 'Northwest Arkansas', customH1, customSub }: HeroSectionProps) {
  return (
    <section className="bg-white border-b border-slate-200 py-10 sm:py-16 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Authentic Human Contractor Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>{cityName} Direct Contractor</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.12]">
                {customH1 || `Tired of Climbing Dangerous Ladders to Clean Gutters?`}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {customSub || `We install permanent stainless steel micro-mesh guards across Northwest Arkansas that keep out pine needles, oak tassels, and heavy leaves for good. Get an exact price in 90 seconds — with zero sales pressure and no stranger sitting on your couch.`}
              </p>
            </div>

            {/* 3 Human Trust Points */}
            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    Direct Local Pricing (Save Up to 65%)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed font-normal">
                    Fair, transparent contractor rates ($16–$22/ft) without the $4,500+ corporate franchise sales markup.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    100% Shingle-Safe Installation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed font-normal">
                    We fasten directly to your gutter and fascia board — never prying under your shingles or voiding roof warranties.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    Written 10-Year No-Clog Guarantee
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed font-normal">
                    If your gutters ever overflow or clog, our local Bentonville crew comes out and fixes it for free.
                  </p>
                </div>
              </div>
            </div>

            {/* Authentic Jobsite Photo */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              <div className="relative h-48 sm:h-64 w-full">
                <Image
                  src="/images/contractor_truck.jpg"
                  alt="Ozark Gutter Guard service truck in Northwest Arkansas"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              <div className="p-3.5 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                <span className="font-bold">In-House Local Crew • Fully Licensed &amp; Insured</span>
                <span className="text-slate-400">Shop: 1102 S Walton Blvd, Bentonville, AR</span>
              </div>
            </div>

          </div>

          {/* Right Column: Instant Satellite Quote Form */}
          <div id="estimate-form" className="lg:col-span-5 lg:sticky lg:top-24">
            <SatelliteEstimator initialCity={cityName} />
          </div>

        </div>

      </div>
    </section>
  );
}
