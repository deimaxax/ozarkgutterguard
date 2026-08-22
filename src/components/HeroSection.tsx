'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Star, ShieldCheck, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';

interface HeroSectionProps {
  cityName?: string;
  customH1?: string;
  customSub?: string;
}

export default function HeroSection({ cityName = 'Northwest Arkansas', customH1, customSub }: HeroSectionProps) {
  const phoneHref = "tel:+14799292516";
  const phoneDisplay = "(479) 929-2516";

  return (
    <section className="bg-white border-b border-slate-200 py-12 sm:py-16 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Home Services Contractor Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Local Contractor Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>Locally Owned &amp; Operated in {cityName}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1]">
              {customH1 || `Never Clean Your Gutters Again.`}
            </h1>

            {/* Straightforward Subtitle */}
            <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
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

            {/* Call To Action Buttons for Home Services */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/satellite-quote"
                className="btn-contractor-primary min-h-[52px] px-7 py-3.5 text-base font-bold flex items-center justify-center gap-2 shadow-sm hover:bg-blue-700 transition"
              >
                <span>Get a Free Online Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a
                href={phoneHref}
                className="min-h-[52px] px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-base font-bold flex items-center justify-center gap-2.5 transition shadow-sm"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call: {phoneDisplay}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Real Contractor Truck & Workmanship Image */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-lg relative">
              <div className="relative h-72 sm:h-96 w-full bg-slate-100">
                <Image
                  src="/images/contractor_truck.jpg"
                  alt="Ozark Gutter Guard service truck in Northwest Arkansas"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="p-4 bg-slate-950 text-white space-y-1">
                <div className="font-bold text-sm flex items-center justify-between">
                  <span>Ozark Gutter Guard Co.</span>
                  <span className="text-emerald-400 text-xs font-semibold">● Local In-House Crew</span>
                </div>
                <p className="text-xs text-slate-400">
                  Shop: 1102 S Walton Blvd, Bentonville, AR • Serving All NWA
                </p>
              </div>
            </div>

            {/* Simple Quick Quote Link Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between gap-3 text-xs">
              <div>
                <strong className="text-slate-900 block font-bold text-sm">Need a Quick Ballpark Cost?</strong>
                <span className="text-slate-600">Takes 90 seconds online with satellite measuring.</span>
              </div>
              <Link
                href="/satellite-quote"
                className="px-4 py-2 bg-white border border-slate-300 text-slate-900 font-bold rounded-lg hover:border-slate-400 shrink-0 shadow-2xs"
              >
                Estimate →
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
