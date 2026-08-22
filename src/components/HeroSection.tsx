'use client';

import React from 'react';
import Image from 'next/image';
import { Check, MapPin, Phone } from 'lucide-react';
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
          
          {/* Left Column: Authentic Local Contractor Message */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>Locally Owned &amp; Operated in {cityName}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.12]">
                {customH1 || `Stop Cleaning Your Gutters by Hand.`}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {customSub || `We install heavy-duty stainless steel gutter guards that keep out pine needles, oak tassels, and leaves for good. Save thousands compared to national sales companies with our direct local pricing.`}
              </p>
            </div>

            {/* 4 Straightforward Contractor Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Save Up to 65%</h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                    Direct local contractor pricing with zero sales commissions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Protects Roof Warranty</h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                    Fascia-mounted so we never lift or nail into your shingles.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Handles Heavy Downpours</h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                    Water flows straight through without overshooting your gutters.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">10-Year Guarantee</h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                    If they ever clog, we come out and clear them for free.
                  </p>
                </div>
              </div>
            </div>

            {/* Authentic Crew Photo */}
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              <div className="relative h-48 sm:h-60 w-full">
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
