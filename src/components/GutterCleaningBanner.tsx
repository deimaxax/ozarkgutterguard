import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';

export default function GutterCleaningBanner() {
  const phoneHref = "tel:+14799292516";
  const phoneDisplay = "(479) 929-2516";

  return (
    <section className="bg-[#F8F9FA] border-b border-slate-200 py-10 sm:py-16 text-[#0F1E36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Col: Offer details */}
            <div className="lg:col-span-8 space-y-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#0F1E36] text-xs font-bold uppercase tracking-wider">
                  <span>Fast Seasonal Service</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F1E36] tracking-tight">
                  Not Ready for Guards? Get a $149 Full Cleanout
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  We'll hand-clean all debris, flush your downspouts, and send before/after photos straight to your phone. <strong className="text-[#0F1E36] font-bold">100% of your $149 fee is credited toward gutter guards</strong> if you decide to install within 12 months.
                </p>
              </div>

              {/* 4 Simple Checkpoints */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#0F1E36] pt-2">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D92626] shrink-0" />
                  <span>Hand debris removal (no lawn mess)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D92626] shrink-0" />
                  <span>High-flow downspout water flush</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D92626] shrink-0" />
                  <span>Gutter slope &amp; bracket inspection</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D92626] shrink-0" />
                  <span>Condition report sent to your phone</span>
                </div>
              </div>
            </div>

            {/* Right Col: Price Card */}
            <div className="lg:col-span-4 rounded-xl border border-slate-200 bg-[#F8F9FA] p-6 space-y-4 text-center">
              <div className="space-y-0.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Flat Rate Special
                </span>
                <div className="text-4xl sm:text-5xl font-black text-[#0F1E36] tracking-tight">
                  $149
                </div>
                <span className="text-xs font-bold text-[#D92626] block pt-0.5">
                  100% Credited Toward Guards
                </span>
              </div>

              <div className="space-y-2 pt-1">
                <Link
                  href="/gutter-cleaning"
                  className="w-full btn-contractor-primary min-h-[46px] py-3 px-4 text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition"
                >
                  <span>Book $149 Cleanout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <a
                  href={phoneHref}
                  className="block text-xs font-bold text-slate-600 hover:text-slate-900 transition py-1"
                >
                  Or Call: {phoneDisplay}
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
