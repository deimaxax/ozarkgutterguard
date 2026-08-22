'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Star, Phone, Check, MapPin, Award, CheckCircle2 } from 'lucide-react';
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
    <section className="bg-white border-b border-slate-200 py-8 sm:py-14 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-slate-100 text-xs sm:text-sm text-slate-600 font-medium">
          <div className="flex items-center gap-2">
            <span className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </span>
            <span className="font-bold text-slate-900">5.0 Star Rated Local Contractor</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="hidden sm:inline text-slate-600">Over 1,400+ NWA Homes Protected</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="flex items-center gap-1 text-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              AR Lic #039182
            </span>
            <span className="flex items-center gap-1 text-slate-700">
              <Award className="w-4 h-4 text-blue-600" />
              BBB A+ Accredited
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Clear Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>Direct Local Crew • {cityName}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.12]">
                {customH1 || `Permanent Gutter Protection in ${cityName}, AR`}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {customSub || `50-micron surgical 316 stainless steel micro-mesh engineered for Ozark oak catkins, pine needles, and 150 in/hr downpours. Direct local contractor pricing with zero sales pressure.`}
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
                    $16–$22/ft direct contractor pricing vs $38–$50/ft national franchise markups.
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
                    Fascia-mounted system preserves 100% of GAF &amp; CertainTeed roof warranties.
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
                    Tested flow capacity prevents torrential storm overshoot and foundation washouts.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">10-Year Written Guarantee</h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                    Fully transferable no-clog warranty backed by our permanent Bentonville shop.
                  </p>
                </div>
              </div>
            </div>

            {/* Authentic Jobsite Proof Photo */}
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              <div className="relative h-48 sm:h-64 w-full">
                <Image
                  src="/images/contractor_truck.jpg"
                  alt="Ozark Gutter Guard installation truck and certified crew in Northwest Arkansas"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              <div className="p-3 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-xs">
                <span className="font-bold">Ozark Gutter Guard Co. • Certified Local In-House Installation Crew</span>
                <span className="text-slate-400">1102 S Walton Blvd, Bentonville, AR</span>
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
