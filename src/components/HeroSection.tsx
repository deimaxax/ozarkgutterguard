'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Star, Phone, Check, MapPin } from 'lucide-react';
import SatelliteEstimator from './SatelliteEstimator';

interface HeroSectionProps {
  cityName?: string;
  customH1?: string;
  customSub?: string;
}

export default function HeroSection({ cityName = 'Northwest Arkansas', customH1, customSub }: HeroSectionProps) {
  return (
    <section className="bg-white border-b border-slate-200 py-10 sm:py-14 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>{cityName} Direct Contractor</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.12]">
                {customH1 || `Never Clean Your Gutters Again.`}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {customSub || `Commercial-grade 316 surgical stainless micro-mesh engineered for Ozark pine needles, oak catkins, and 150 in/hr downpours. Save up to 65% with direct local pricing and our written 10-Year Guarantee.`}
              </p>
            </div>

            {/* 4 Core Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Save Up to 65%</h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                    $16–$22/ft direct pricing vs $38–$50/ft franchise markups.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">0% Shingle Contact</h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                    Fascia-mounted system preserves 100% of your roof warranty.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">150 in/hr Rain Intake</h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                    Prevents storm overflow, foundation washouts, and fascia rot.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">10-Year Guarantee</h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                    Written no-clog warranty backed by our local Bentonville shop.
                  </p>
                </div>
              </div>
            </div>

            {/* Authentic Jobsite Photo */}
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm">
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
              <div className="p-3 bg-slate-900 text-white flex items-center justify-between text-xs">
                <span className="font-bold">In-House Local Crew • Fully Licensed &amp; Insured</span>
                <span className="text-slate-400">1102 S Walton Blvd, Bentonville</span>
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
