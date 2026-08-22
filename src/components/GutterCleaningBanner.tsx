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
          
          {/* Left Col: Info & 4 Micro-specs without green checkmarks */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#1D4ED8] uppercase tracking-wider block">
                Seasonal Maintenance Gateway
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                $149 Complete Gutter Cleanout &amp; Inspection
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Not ready for permanent guards yet? We provide complete hand debris removal, high-flow downspout flushing, slope checking, and a comprehensive condition report. <strong className="text-slate-900 font-bold">100% of your $149 fee is credited</strong> toward guards if you decide to install within 12 months.
              </p>
            </div>

            {/* 4 Micro-specs structured as clean editorial list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700 border-t border-slate-200 pt-6">
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">01</span>
                <strong className="text-slate-900 font-semibold block">Hand Debris Extraction</strong>
                <p className="text-xs text-slate-500">Bagged sludge &amp; pine needle removal without siding mess.</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">02</span>
                <strong className="text-slate-900 font-semibold block">Downspout Jet-Flush</strong>
                <p className="text-xs text-slate-500">High-flow water clearing to verified ground discharge.</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">03</span>
                <strong className="text-slate-900 font-semibold block">Slope &amp; Bracket Check</strong>
                <p className="text-xs text-slate-500">Laser pitch reading to ensure proper 1/4&quot; drainage drop.</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">04</span>
                <strong className="text-slate-900 font-semibold block">Roofline Leak Report</strong>
                <p className="text-xs text-slate-500">Fascia moisture probe and photo documentation to your phone.</p>
              </div>
            </div>
          </div>

          {/* Right Col: Price & Action */}
          <div className="lg:col-span-4 border border-slate-300 bg-[#F8F9FA] p-8 space-y-6 text-center">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Flat Rate Full Service
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
                $149
              </div>
              <span className="text-xs font-semibold text-[#1D4ED8] block pt-1">
                100% Fee Credited Toward Micro-Mesh
              </span>
            </div>

            <div className="space-y-3 pt-2">
              <Link
                href="/gutter-cleaning"
                className="w-full btn-contractor-primary py-3.5 px-4 text-sm font-bold flex items-center justify-center gap-2 transition"
              >
                <span>Book $149 Cleanout</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={phoneHref}
                className="w-full bg-white hover:bg-slate-50 text-slate-800 py-3 px-4 text-xs font-bold flex items-center justify-center gap-2 border border-slate-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#1D4ED8]" />
                <span>Call Dispatch: {phoneDisplay}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
