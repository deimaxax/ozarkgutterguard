'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, CheckCircle2, MapPin, ShieldCheck, ArrowDown } from 'lucide-react';
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
    <section className="bg-white border-b border-slate-200 py-10 sm:py-14 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Home Services Contractor Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Local Contractor Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>Locally Owned &amp; Operated in {cityName}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.12]">
              {customH1 || `Never Clean Your Gutters Again.`}
            </h1>

            {/* Straightforward Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {customSub || `We install heavy-duty stainless steel gutter guards that keep out pine needles, oak tassels, and leaves for good. Save thousands compared to national sales companies with our direct local pricing.`}
            </p>

            {/* 3 Clear Homeowner Benefits */}
            <ul className="space-y-2.5 text-sm sm:text-base text-slate-800 font-medium pt-1">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span><strong>Save Up to 65%</strong> — Direct contractor rates with zero sales commissions</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span><strong>100% Roof Warranty Safe</strong> — Mounted to fascia, zero shingle contact</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span><strong>10-Year Written Guarantee</strong> — If they ever clog, we clean them for free</span>
              </li>
            </ul>

            {/* Direct Phone Call Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={phoneHref}
                className="btn-contractor-primary min-h-[50px] px-6 py-3.5 text-base font-bold flex items-center justify-center gap-2.5 shadow-sm transition"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Dispatch: {phoneDisplay}</span>
              </a>

              <a
                href="#estimate-form"
                className="sm:hidden min-h-[48px] px-5 py-3 rounded-lg bg-slate-100 border border-slate-300 text-slate-900 text-sm font-bold flex items-center justify-center gap-2"
              >
                <span>Calculate Cost Online Below</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Crew Image Card */}
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-2xs">
              <div className="relative h-44 sm:h-52 w-full bg-slate-100">
                <Image
                  src="/images/contractor_truck.jpg"
                  alt="Ozark Gutter Guard service truck in Northwest Arkansas"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              <div className="p-3 bg-slate-950 text-white flex items-center justify-between text-xs">
                <span className="font-bold">In-House Local Crew • Fully Licensed &amp; Insured</span>
                <span className="text-slate-400">1102 S Walton Blvd, Bentonville</span>
              </div>
            </div>

          </div>

          {/* Right Column: INSTANT SATELLITE QUOTE FORM (Immediate data entry, zero wasted time) */}
          <div id="estimate-form" className="lg:col-span-5 lg:sticky lg:top-24 scroll-mt-20">
            <SatelliteEstimator initialCity={cityName} />
          </div>

        </div>

      </div>
    </section>
  );
}
