'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Check, Truck, MapPin, Wrench, DollarSign } from 'lucide-react';
import SatelliteEstimator from './SatelliteEstimator';

interface HeroSectionProps {
  cityName?: string;
  customH1?: string;
  customSub?: string;
}

export default function HeroSection({ cityName, customH1, customSub }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Value Proposition & Local Fleet Showcase Card */}
          <div className="lg:col-span-7 space-y-5">

            <h1 className="text-3xl sm:text-5xl font-black text-brand-navy tracking-tight leading-[1.12]">
              {customH1 || 'Never Clean Your Gutters Again.'}
            </h1>

            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
              {customSub || 'Direct contractor installation of 316 surgical stainless steel micro-mesh across Bentonville, Rogers, Fayetteville, and Springdale. Zero salesman markups, 100% shingle-safe, backed by our 10-Year No-Clog Guarantee.'}
            </p>

            {/* Real NWA Fleet Hero Showcase Image */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md group">
              <div className="relative h-60 sm:h-72 w-full">
                <Image
                  src="/images/contractor_truck.jpg"
                  alt="Ozark Gutter Guard Co. installation truck parked in Northwest Arkansas home driveway"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 text-white text-xs">
                <div className="flex items-center gap-2 bg-slate-950/85 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-slate-700 font-bold">
                  <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Bentonville Installation Fleet &amp; Crew</span>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-950/90 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-emerald-500/50 text-emerald-300 font-bold font-mono">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Bentonville, AR · (479) 929-2516</span>
                </div>
              </div>
            </div>

            {/* 4 Clean, Non-Repetitive Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-brand-green flex items-center justify-center shrink-0 border border-emerald-100">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div className="text-xs">
                  <span className="block font-bold text-brand-navy text-sm">316 Surgical Mesh</span>
                  <span className="text-slate-500">Blocks pine needles &amp; roof grit</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-brand-green flex items-center justify-center shrink-0 border border-emerald-100">
                  <Wrench className="w-4 h-4 text-brand-green" />
                </div>
                <div className="text-xs">
                  <span className="block font-bold text-brand-navy text-sm">Fascia Lip Mount</span>
                  <span className="text-slate-500">100% roof warranty safe</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-brand-green flex items-center justify-center shrink-0 border border-emerald-100">
                  <ShieldCheck className="w-4 h-4 text-brand-green" />
                </div>
                <div className="text-xs">
                  <span className="block font-bold text-brand-navy text-sm">10-Year Guarantee</span>
                  <span className="text-slate-500">Transferable no-clog warranty</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-brand-green flex items-center justify-center shrink-0 border border-emerald-100">
                  <DollarSign className="w-4 h-4 text-brand-green" />
                </div>
                <div className="text-xs">
                  <span className="block font-bold text-brand-navy text-sm">Direct Pricing</span>
                  <span className="text-slate-500">Save 50%+ vs franchise quotes</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Instant Estimate Form */}
          <div id="estimate-section" className="lg:col-span-5 lg:sticky lg:top-24">
            <SatelliteEstimator initialCity={cityName} />
          </div>

        </div>

      </div>
    </section>
  );
}
