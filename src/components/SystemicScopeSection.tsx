import React from 'react';
import { ShieldCheck, Ruler, Layers, ArrowRight, Check } from 'lucide-react';

export default function SystemicScopeSection() {
  const pillars = [
    {
      icon: Ruler,
      title: "Laser Slope Pitch & Rafter Fastening",
      detail: "We correct sagging low spots with laser levels and replace loose spike nails with heavy-duty zinc rafter screws to handle heavy Ozark snow and ice loads."
    },
    {
      icon: Layers,
      title: "316 Surgical Marine Micro-Mesh",
      detail: "440-micron surgical stainless steel mesh blocks 100% of pine needles, shingle grit, and oak tassels while siphoning up to 150 inches of rainfall per hour."
    },
    {
      icon: ShieldCheck,
      title: "100% Shingle-Safe Fascia Mounting",
      detail: "Secured directly to the gutter lip and fascia board. We never slide guards under roof shingles or risk voiding manufacturer roof warranties."
    }
  ];

  return (
    <section id="process" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-brand-navy tracking-tight">
            How The Ozark Micro-Mesh System Works
          </h2>
          <p className="text-sm text-slate-600 mt-1 font-normal">
            Most gutter guards fail because they are installed over unpitched, sagging troughs. Every installation includes full drainage re-engineering:
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 p-5 rounded-lg flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-brand-green border border-emerald-200 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2 font-normal">
                    {item.detail}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200 text-xs text-brand-green font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  <span>Included Standard on Every Job</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Financing Banner */}
        <div className="mt-8 p-5 sm:p-6 rounded-lg bg-brand-navy text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="space-y-0.5 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold">
              Financing Starting at <span className="text-emerald-400 font-black">$48/Month</span> (0% APR for 12 Months)
            </h3>
            <p className="text-xs text-slate-300 font-normal">
              No money down. Instant 60-second digital pre-approval with zero credit score impact.
            </p>
          </div>

          <a
            href="#estimate-section"
            className="btn-contractor-green px-5 py-2.5 text-xs font-bold shrink-0"
          >
            Check Your Rate
          </a>
        </div>

      </div>
    </section>
  );
}
