'use client';

import React from 'react';
import { ShieldCheck, Check, Star, ArrowRight, Wrench, Sparkles } from 'lucide-react';
import SatelliteEstimator from './SatelliteEstimator';

interface HeroSectionProps {
  cityName?: string;
  customH1?: string;
  customSub?: string;
}

export default function HeroSection({ cityName, customH1, customSub }: HeroSectionProps) {
  const phoneHref = "tel:+14799292516";
  const phoneDisplay = "(479) 929-2516";

  return (
    <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 py-10 sm:py-16 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top clean badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>{cityName ? `${cityName}, AR` : 'Northwest Arkansas'} • Licensed &amp; Insured Contractor</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>5.0 Star Rated (187+ Reviews)</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-slate-900">
              {customH1 || (
                <>
                  Stop Cleaning Your Gutters.{' '}
                  <span className="text-emerald-700">
                    Surgical Grade Micro-Mesh Guards.
                  </span>
                </>
              )}
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              {customSub || 'Direct contractor installation of 316 marine-grade stainless steel micro-mesh across Bentonville, Bella Vista, Rogers, Fayetteville, and Springdale. No sales commissions, 100% shingle-safe fascia mounting, and backed by our written 10-Year No-Clog Guarantee.'}
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2.5 bg-white border border-slate-200 p-2.5 rounded-lg shadow-xs">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>316 Marine Stainless Steel (50-Micron)</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white border border-slate-200 p-2.5 rounded-lg shadow-xs">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>Mounted to Fascia (Preserves Shingle Warranty)</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white border border-slate-200 p-2.5 rounded-lg shadow-xs">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>Includes Full Pitch Alignment &amp; Cleanout</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white border border-slate-200 p-2.5 rounded-lg shadow-xs">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>Direct Local Pricing ($1,250–$1,450 avg)</span>
              </div>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-2 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-xs">
              <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-xs">
                <span className="block font-bold text-slate-900 text-base">50-Micron</span>
                <span className="text-[11px] text-slate-500">Fine Pine &amp; Oak Weave</span>
              </div>
              <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-xs">
                <span className="block font-bold text-slate-900 text-base">150 in/hr</span>
                <span className="text-[11px] text-slate-500">Rainfall Capacity</span>
              </div>
              <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-xs">
                <span className="block font-bold text-slate-900 text-base">10-Year</span>
                <span className="text-[11px] text-slate-500">Written Guarantee</span>
              </div>
              <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-xs">
                <span className="block font-bold text-slate-900 text-base">100%</span>
                <span className="text-[11px] text-slate-500">Local Crew / No Middlemen</span>
              </div>
            </div>

            {/* Gutter Cleaning callout */}
            <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div>
                <span className="font-bold text-slate-900 block text-sm">Need a gutter cleaning first?</span>
                <span className="text-slate-600">Book our $149 Complete Cleanout &amp; Inspection — <strong className="text-emerald-700">100% credited toward guards</strong> if you install later.</span>
              </div>
              <a 
                href="/gutter-cleaning" 
                className="shrink-0 px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold transition shadow-xs inline-flex items-center gap-1.5"
              >
                <span>Book $149 Cleanout</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Instant Estimate Form */}
          <div id="estimate-section" className="lg:col-span-5">
            <SatelliteEstimator initialCity={cityName} />
          </div>

        </div>

      </div>
    </section>
  );
}
