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
    <section className="bg-white border-b border-slate-200 py-10 sm:py-14 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Gutter Guards & Gutter Cleaning Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Contractor Credential / Location */}
            <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-600 tracking-wide">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-bold uppercase tracking-wider border border-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Licensed &amp; Insured
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 font-medium">Bentonville &amp; {cityName}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.12]">
              {customH1 || `Northwest Arkansas Gutter Cleaning & Permanent Guards.`}
            </h1>

            {/* Dual Subtitle: Covers BOTH Guards & Cleaning */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {customSub || `Whether you need a fast $149 seasonal gutter cleanout or permanent stainless steel micro-mesh guards to never climb a ladder again — our local in-house crew has you covered.`}
            </p>

            {/* 2 Core Service Pillars Side-by-Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              
              {/* Option 1: Permanent Guards */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#183059] uppercase tracking-wider">Permanent Solution</span>
                  <span className="text-xs font-semibold text-slate-500">10-Yr Guarantee</span>
                </div>
                <h3 className="font-bold text-[#0F1E36] text-sm sm:text-base">
                  316 Stainless Gutter Guards
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Blocks 100% of pine needles and oak catkins. Fascia mounted (zero shingle contact).
                </p>
              </div>

              {/* Option 2: Fast Cleanout */}
              <div className="p-4 rounded-xl bg-red-50/50 border border-red-200/80 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#D92626] uppercase tracking-wider">Fast Service</span>
                  <span className="text-xs font-bold text-[#D92626]">$149 Flat Rate</span>
                </div>
                <h3 className="font-bold text-[#0F1E36] text-sm sm:text-base">
                  Full Gutter Cleanout &amp; Flush
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Hand debris clearing, downspout jetting, and 100% credited toward guards if you upgrade.
                </p>
              </div>

            </div>

            {/* Direct Phone Call Button & Quick Links */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={phoneHref}
                className="btn-contractor-primary min-h-[50px] px-6 py-3.5 text-base font-bold flex items-center justify-center gap-2.5 shadow-sm transition"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call Dispatch: {phoneDisplay}</span>
              </a>

              <Link
                href="/gutter-cleaning"
                className="btn-contractor-navy min-h-[50px] px-5 py-3.5 rounded-lg text-white text-sm font-bold flex items-center justify-center gap-2 transition shadow-sm"
              >
                <span>Book $149 Cleanout</span>
              </Link>
            </div>

            {/* Crew Image Card */}
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-2xs">
              <div className="relative h-40 sm:h-48 w-full bg-slate-100">
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

          {/* Right Column: INSTANT QUOTE FORM (Supports Both Guards & Cleanout) */}
          <div id="estimate-form" className="lg:col-span-5 lg:sticky lg:top-24 scroll-mt-20">
            <SatelliteEstimator initialCity={cityName} />
          </div>

        </div>

      </div>
    </section>
  );
}
