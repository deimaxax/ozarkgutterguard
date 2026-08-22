'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Check, Star, ArrowRight, MapPin, Phone } from 'lucide-react';
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
    <section className="bg-white border-b border-slate-200 py-10 sm:py-16 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Value Proposition & Hero Visual */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top clean badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>{cityName ? `${cityName}, AR` : 'Northwest Arkansas'} • Licensed &amp; Insured</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>5.0 Star Rated (187+ NWA Reviews)</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-slate-900">
              {customH1 || (
                <>
                  Never Clean Gutters Again.{' '}
                  <span className="text-emerald-700">
                    316 Surgical Micro-Mesh.
                  </span>
                </>
              )}
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              {customSub || 'Direct local contractor installation across Bentonville, Bella Vista, Rogers, Fayetteville, and Springdale. 100% shingle-safe fascia mount, zero high-pressure sales reps, and backed by our written 10-Year No-Clog Guarantee.'}
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 p-2.5 rounded-lg">
                <Check className="w-4 h-4 text-emerald-700 shrink-0 stroke-[2.5]" />
                <span>316 Marine Stainless Steel (50-Micron)</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 p-2.5 rounded-lg">
                <Check className="w-4 h-4 text-emerald-700 shrink-0 stroke-[2.5]" />
                <span>0% Shingle Contact (Protects Warranty)</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 p-2.5 rounded-lg">
                <Check className="w-4 h-4 text-emerald-700 shrink-0 stroke-[2.5]" />
                <span>Slope Realignment &amp; Cleanout Included</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 p-2.5 rounded-lg">
                <Check className="w-4 h-4 text-emerald-700 shrink-0 stroke-[2.5]" />
                <span>Direct Contractor Rates ($1,250–$1,450)</span>
              </div>
            </div>

            {/* Hero Main Truck Showcase Image */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md group">
              <div className="relative h-64 sm:h-80 w-full bg-slate-100">
                <Image
                  src="/images/contractor_truck.jpg"
                  alt="Ozark Gutter Guard service truck on residential jobsite in Bentonville, Arkansas"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              <div className="p-3.5 bg-slate-900/95 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-medium">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-semibold">Local NWA In-House Crew • Fully Outfitted Service Trucks</span>
                </div>
                <span className="text-emerald-400 font-bold">1102 S Walton Blvd, Bentonville</span>
              </div>
            </div>

            {/* Quick Gutter Cleaning Banner */}
            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div>
                <span className="font-bold text-slate-900 block text-sm">Need a seasonal cleanout first?</span>
                <span className="text-slate-600">Book our $149 Complete Cleanout &amp; Inspection — <strong className="text-emerald-700">100% credited toward guards</strong>.</span>
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
          <div id="estimate-section" className="lg:col-span-5 lg:sticky lg:top-24">
            <SatelliteEstimator initialCity={cityName} />
          </div>

        </div>

      </div>
    </section>
  );
}
