'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Check, MapPin, Truck } from 'lucide-react';
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
          
          {/* Left Column: Value Proposition & Real Local Fleet Visual */}
          <div className="lg:col-span-7 space-y-5">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-50 border border-emerald-200 text-brand-green text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-brand-green" />
              <span>Northwest Arkansas Permanent Gutter Protection</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-brand-navy tracking-tight leading-[1.12]">
              {customH1 || 'Never Clean Your Gutters Again.'}
            </h1>

            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
              {customSub || 'Direct contractor installation of 316 surgical stainless steel micro-mesh across Bentonville, Bella Vista, Rogers, Fayetteville, and Springdale. Zero high-pressure salesmen, 100% shingle-safe, and backed by our 10-Year No-Clog Guarantee.'}
            </p>

            {/* Real NWA Fleet Hero Showcase Image */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md group">
              <div className="relative h-56 sm:h-72 w-full">
                <Image
                  src="/images/contractor_truck.jpg"
                  alt="Ozark Gutter Guard Co. installation truck parked in Bentonville, Arkansas home driveway"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 text-white text-xs">
                <div className="flex items-center gap-2 bg-slate-950/85 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-slate-700/80 font-bold">
                  <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Bentonville Installation Fleet &amp; Crew</span>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-950/90 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-emerald-500/50 text-emerald-300 font-bold font-mono">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Bentonville, AR · (479) 343-8585</span>
                </div>
              </div>
            </div>

            {/* Direct Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-slate-800 font-bold">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-brand-green flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>316 Surgical Marine Stainless Mesh</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-brand-green flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>100% Shingle-Safe Fascia Mount</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-brand-green flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Laser Slope &amp; Pitch Realignment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-brand-green flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>10-Year Transferable Guarantee</span>
              </div>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-3 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
              <div className="p-2.5 rounded bg-white border border-slate-200">
                <span className="block font-black text-brand-navy text-sm">50-Micron</span>
                <span className="text-[10px] text-slate-500 font-semibold">Surgical Mesh</span>
              </div>
              <div className="p-2.5 rounded bg-white border border-slate-200">
                <span className="block font-black text-brand-navy text-sm">150&quot;/Hr</span>
                <span className="text-[10px] text-slate-500 font-semibold">Rain Intake</span>
              </div>
              <div className="p-2.5 rounded bg-white border border-slate-200">
                <span className="block font-black text-brand-navy text-sm">10-Year</span>
                <span className="text-[10px] text-slate-500 font-semibold">No-Clog Warranty</span>
              </div>
              <div className="p-2.5 rounded bg-white border border-slate-200">
                <span className="block font-black text-brand-green text-sm">5.0 ★★★★★</span>
                <span className="text-[10px] text-slate-500 font-semibold">187+ NWA Reviews</span>
              </div>
            </div>

            {/* Trojan Horse Fast Wedge */}
            <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div>
                <span className="font-bold text-brand-navy block">Need an immediate cleanout first?</span>
                <span className="text-slate-600">Get our $149 Diagnostic Cleanout &amp; 21-Pt Audit — <strong className="text-brand-green">100% credited toward permanent guards</strong>.</span>
              </div>
              <a 
                href="/gutter-cleaning" 
                className="shrink-0 px-3.5 py-1.5 rounded-lg bg-brand-green text-white font-bold hover:bg-emerald-700 transition-colors shadow-xs"
              >
                Book $149 Cleanout →
              </a>
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
