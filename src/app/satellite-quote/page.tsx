'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Phone, 
  ShieldCheck, 
  Star, 
  Check, 
  X, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Lock, 
  MapPin, 
  Sparkles, 
  Percent, 
  DollarSign, 
  Calendar 
} from 'lucide-react';
import SatelliteEstimator from '@/components/SatelliteEstimator';

export default function QuoteLandingPage() {
  const phoneHref = "tel:+14799292516";
  const phoneDisplay = "(479) 929-2516";

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      
      {/* 1. LeafGuard Style Header with Accreditations & Direct Call */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 bg-white border border-slate-200 rounded-lg p-1.5 flex items-center justify-center shadow-xs">
              <Image
                src="/logo.png"
                alt="Ozark Gutter Guard Co."
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="text-xl font-black text-brand-navy tracking-tight leading-none block">
                OZARK <span className="text-brand-green">GUTTER GUARD CO.</span>
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Northwest Arkansas Direct Gutter Armor
              </span>
            </div>
          </Link>

          {/* Center: Trust Badges (LeafGuard style) */}
          <div className="hidden md:flex items-center gap-6 text-xs text-slate-600 font-semibold border-x border-slate-200 px-6 h-10">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-full bg-emerald-50 text-brand-green flex items-center justify-center font-bold text-[10px]">
                USA
              </div>
              <span>Made in USA</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-green" />
              <span>10-Yr Guarantee</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-slate-900">5.0 BBB Rating</span>
            </div>
          </div>

          {/* Right: Phone CTA Button */}
          <div className="flex items-center gap-3">
            <a
              id="call-for-a-free-estimate"
              href={phoneHref}
              className="btn-contractor-navy py-2.5 px-4 text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs"
            >
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <div className="text-left">
                <span className="hidden sm:block text-[10px] text-slate-300 uppercase leading-none">Call For Free Quote</span>
                <span className="text-white font-black text-xs sm:text-sm leading-none">{phoneDisplay}</span>
              </div>
            </a>
          </div>

        </div>
      </header>

      {/* 2. Top Promotional Ticker (LeafGuard Style) */}
      <div className="bg-brand-navy text-white text-xs sm:text-sm py-2.5 px-4 font-bold text-center border-b border-brand-navyDark">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong>LIMITED TIME SPECIAL:</strong> $250 OFF Installation + 12 Months 0% APR + Free Laser Realignment!
          </span>
        </div>
      </div>

      <main className="flex-1">
        
        {/* 3. Hero & Multi-Step Quote Funnel (Direct LeafGuard Format) */}
        <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50/50 py-10 sm:py-16 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Side: Headline & 6 Key Benefit Bullets */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-50 border border-emerald-200 text-brand-green text-xs font-bold">
                    <ShieldCheck className="w-4 h-4 text-brand-green" />
                    <span>Guaranteed Clog-Free Northwest Arkansas Gutter System</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl font-black text-brand-navy tracking-tight leading-[1.12]">
                    Give up gutter cleaning for good.™
                  </h1>

                  <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
                    Protect your home from foundation cracking, soffit wood rot, and basement moisture. Surgical 316 marine-grade stainless steel micro-mesh eliminates gutter cleanouts forever.
                  </p>
                </div>

                {/* 6 LeafGuard-Style Checkmark Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  
                  <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <div className="w-7 h-7 rounded-full bg-emerald-100 text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">No Clogging</h3>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        440-micron surgical mesh deflects 100% of pine needles, shingle grit, and oak tassels.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <div className="w-7 h-7 rounded-full bg-emerald-100 text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">No Cleaning</h3>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Self-shedding breeze action eliminates dangerous ladder cleaning permanently.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <div className="w-7 h-7 rounded-full bg-emerald-100 text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">No Leaking</h3>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Commercial marine polyurethane corner sealing eliminates fascia rot and corner drips.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <div className="w-7 h-7 rounded-full bg-emerald-100 text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">No Water Damage</h3>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Processes 150+ in/hr rainfall, directing high-velocity water safely away from foundation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <div className="w-7 h-7 rounded-full bg-emerald-100 text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">100% Shingle-Safe</h3>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Fascia and gutter lip mount with 0% shingle contact, preserving all roof warranties.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                    <div className="w-7 h-7 rounded-full bg-emerald-100 text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">10-Year Guarantee</h3>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Written transferable guarantee backed by our local Northwest Arkansas crew.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Jobsite Photo Proof */}
                <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-xs">
                  <div className="relative h-52 sm:h-60 w-full">
                    <Image
                      src="/images/contractor_truck.jpg"
                      alt="Ozark Gutter Guard Co. installation crew at Northwest Arkansas jobsite"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3 bg-brand-navyDark text-white flex items-center justify-between text-xs">
                    <span>Local NWA Crew • Fully Licensed &amp; Insured</span>
                    <span className="text-emerald-400 font-bold">1102 S Walton Blvd, Bentonville</span>
                  </div>
                </div>

              </div>

              {/* Right Side: Lead Capture & Quote Calculator */}
              <div id="hero__form" className="lg:col-span-5">
                <SatelliteEstimator />
              </div>

            </div>

          </div>
        </section>

        {/* 4. Limited Time Deals & Financing Section (LeafGuard Style) */}
        <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-brand-navy tracking-tight">
                Our Latest Deals &amp; Financing Offers
              </h2>
              <p className="text-sm text-slate-600">
                Get a free, no-obligation written quote today to lock in seasonal contractor pricing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Deal Card 1: $250 Off Armor Special */}
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/40 border border-emerald-200 p-6 sm:p-8 rounded-lg flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className="inline-block bg-brand-green text-white text-[11px] font-black uppercase px-2.5 py-1 rounded">
                    Direct Contractor Discount
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 leading-tight">
                    $250 Off Complete Gutter Protection
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Includes full gutter sludge vacuuming, 1/4&quot; laser slope pitch realignment, zinc hidden rafter hanger installation, and surgical 316 micro-mesh.
                  </p>
                </div>

                <div className="pt-4 border-t border-emerald-200 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">Code: NWA-ARMOR-250</span>
                  <a href="#hero__form" className="btn-contractor-green px-4 py-2 text-xs font-bold">
                    Claim Discount →
                  </a>
                </div>
              </div>

              {/* Deal Card 2: Zero Down 0% Financing */}
              <div className="bg-brand-navy text-white p-6 sm:p-8 rounded-lg flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className="inline-block bg-amber-400 text-brand-navy font-black text-[11px] uppercase px-2.5 py-1 rounded">
                    0% APR Financing
                  </span>
                  <h3 className="text-2xl font-black text-white leading-tight">
                    As Low As $48 / Month (0% for 12 Months)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Zero down payment required. Instant 60-second digital pre-approval with zero impact on your credit score.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300">No Prepayment Penalties</span>
                  <a href="#hero__form" className="bg-white text-brand-navy hover:bg-slate-100 px-4 py-2 text-xs font-bold rounded">
                    Check Pre-Approval →
                  </a>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 5. Direct Comparison Table (LeafGuard Style) */}
        <section className="py-14 sm:py-16 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-brand-navy tracking-tight">
                Unrivaled Protection For Your Northwest Arkansas Home
              </h2>
              <p className="text-sm text-slate-600">
                See how Ozark 316 surgical micro-mesh compares against solid hoods and retail screen covers:
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-xs">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-brand-navy text-white text-xs font-bold uppercase tracking-wider">
                    <th className="py-4 px-5 w-1/4">Key Benefit</th>
                    <th className="py-4 px-5 bg-brand-navyDark text-emerald-400 border-x border-slate-800 w-1/3">
                      Ozark Gutter Guard Co.
                    </th>
                    <th className="py-4 px-5 text-slate-300 w-1/4">Solid Curved Hoods / Helmets</th>
                    <th className="py-4 px-5 text-slate-400 w-1/6">Retail Screens &amp; Plastic</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-800 font-medium">
                  {[
                    { benefit: "Deflects 100% Pine Needles & Pollen", ozark: true, hood: false, screen: false },
                    { benefit: "Eliminates Foundation Overflows", ozark: true, hood: false, screen: false },
                    { benefit: "100% Shingle-Safe Fascia Mount", ozark: true, hood: false, screen: false },
                    { benefit: "Never Have to Clean Gutters Again", ozark: true, hood: false, screen: false },
                    { benefit: "Laser Slope Realignment Included", ozark: true, hood: false, screen: false },
                    { benefit: "10-Year Transferable Guarantee", ozark: true, hood: false, screen: false },
                    { benefit: "Direct Contractor Price ($1,250 – $1,650)", ozark: true, hood: false, screen: true }
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}>
                      <td className="py-3.5 px-5 font-bold text-slate-900">{row.benefit}</td>
                      <td className="py-3.5 px-5 bg-emerald-50/40 border-x border-emerald-200 font-bold text-brand-green">
                        <div className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-brand-green shrink-0 stroke-[3]" />
                          <span>Included</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-5 text-slate-500">
                        {row.hood ? (
                          <Check className="w-5 h-5 text-emerald-600 stroke-[2]" />
                        ) : (
                          <X className="w-5 h-5 text-red-500 stroke-[2]" />
                        )}
                      </td>
                      <td className="py-3.5 px-5 text-slate-500">
                        {row.screen ? (
                          <Check className="w-5 h-5 text-emerald-600 stroke-[2]" />
                        ) : (
                          <X className="w-5 h-5 text-red-500 stroke-[2]" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </section>

        {/* 6. Social Proof & Google Reviews */}
        <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            
            <div className="max-w-2xl mx-auto space-y-2">
              <div className="flex items-center justify-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-brand-navy">
                Verified Northwest Arkansas Homeowners
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Over 187+ five-star verified installations across Bentonville, Bella Vista, Rogers, and Fayetteville.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-lg space-y-3">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  &quot;Saved over $3,800 compared to the LeafFilter corporate quote I was given. The satellite measurement was done within 15 minutes, and installation took exactly 3.5 hours. Not a single pine needle got through!&quot;
                </p>
                <div className="pt-2 border-t border-slate-200 text-xs">
                  <div className="font-bold text-slate-900">David R.</div>
                  <div className="text-slate-500">Bella Vista, AR</div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-5 rounded-lg space-y-3">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  &quot;We live on a steep hillside surrounded by 50-foot Loblolly pines. Ozark Gutter Guard installed surgical stainless steel mesh in one afternoon. Two torrential storms later, gutters run crystal clear!&quot;
                </p>
                <div className="pt-2 border-t border-slate-200 text-xs">
                  <div className="font-bold text-slate-900">Sarah M.</div>
                  <div className="text-slate-500">Bentonville, AR</div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-5 rounded-lg space-y-3">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  &quot;Our house under Mount Sequoyah oaks used to clog literally every 2 weeks in October. This stainless micro-mesh has been 100% clog free through all fall storms. Outstanding local company!&quot;
                </p>
                <div className="pt-2 border-t border-slate-200 text-xs">
                  <div className="font-bold text-slate-900">Marcus L.</div>
                  <div className="text-slate-500">Fayetteville, AR</div>
                </div>
              </div>

            </div>

            <div className="pt-4">
              <a
                href="#hero__form"
                className="btn-contractor-green px-8 py-3.5 text-sm font-bold inline-flex items-center gap-2"
              >
                <span>Get Your Free Written Quote Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </section>

      </main>

      {/* 7. Clean Contractor Footer */}
      <footer className="bg-brand-navyDark text-slate-400 py-10 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="space-y-1">
            <div className="font-bold text-white text-sm">
              Ozark Gutter Guard Co. • Bentonville, AR
            </div>
            <div>
              1102 S Walton Blvd, Bentonville, AR 72712 | Direct Dispatch: <a href={phoneHref} className="text-white underline font-bold">{phoneDisplay}</a>
            </div>
            <div className="text-slate-500">
              AR Lic. #OGG-479-NWA • $2,000,000 Commercial General Liability
            </div>
          </div>

          <div className="text-slate-500 text-[11px]">
            © {new Date().getFullYear()} Ozark Gutter Guard Co. All Rights Reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
