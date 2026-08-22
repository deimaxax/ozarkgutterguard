import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export default function GutterCleaningBanner() {
  const phoneHref = "tel:+14799292516";
  const phoneDisplay = "(479) 929-2516";

  return (
    <section className="bg-white border-b border-slate-200 py-12 sm:py-16 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Col: Info & 4 Simple Steps */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#1D4ED8] uppercase tracking-wider block">
                Seasonal Gutter Maintenance
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                $149 Complete Gutter Cleaning &amp; Inspection
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Not ready for permanent gutter guards yet? We provide complete hand debris removal, downspout flushing, and a roofline condition check. <strong className="text-slate-900 font-bold">100% of your $149 fee is credited</strong> toward guards if you decide to install within 12 months.
              </p>
            </div>

            {/* 4 Simple Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700 border-t border-slate-200 pt-6">
              <div className="space-y-1">
                <strong className="text-slate-900 font-semibold block">1. Hand Debris Removal</strong>
                <p className="text-xs text-slate-500">All sludge and leaves bagged and hauled away with zero lawn mess.</p>
              </div>
              <div className="space-y-1">
                <strong className="text-slate-900 font-semibold block">2. Downspout Water Flush</strong>
                <p className="text-xs text-slate-500">High-flow water clearing to make sure downspouts drain freely.</p>
              </div>
              <div className="space-y-1">
                <strong className="text-slate-900 font-semibold block">3. Pitch &amp; Hanger Check</strong>
                <p className="text-xs text-slate-500">We check for low spots, loose brackets, and sagging corners.</p>
              </div>
              <div className="space-y-1">
                <strong className="text-slate-900 font-semibold block">4. Photo Report to Your Phone</strong>
                <p className="text-xs text-slate-500">Clear photos of your gutters and roofline sent directly to your phone.</p>
              </div>
            </div>
          </div>

          {/* Right Col: Price Card */}
          <div className="lg:col-span-4 rounded-2xl border border-slate-200 bg-[#F8F9FA] p-8 space-y-6 text-center shadow-xs">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Flat Rate Cleanout
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
                $149
              </div>
              <span className="text-xs font-semibold text-emerald-700 block">
                100% Fee Credited Toward Guards
              </span>
            </div>

            <div className="space-y-3">
              <Link
                href="/gutter-cleaning"
                className="w-full btn-contractor-primary py-3.5 px-4 text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition"
              >
                <span>Book $149 Cleanout</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a
                href={phoneHref}
                className="block text-xs font-bold text-slate-600 hover:text-slate-900 transition"
              >
                Or Call Dispatch: {phoneDisplay}
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
