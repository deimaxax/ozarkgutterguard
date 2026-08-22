import React from 'react';
import { ShieldCheck, Ruler, Layers, Check } from 'lucide-react';

export default function SystemicScopeSection() {
  const pillars = [
    {
      icon: Ruler,
      title: "1. Pitch Correction & Realignment",
      detail: "We check and fix low spots, re-align slope for proper drainage, and reinforce gutters to the fascia with heavy-duty screws to handle heavy Ozark rain and winter ice."
    },
    {
      icon: Layers,
      title: "2. 316 Surgical Stainless Micro-Mesh",
      detail: "Ultra-fine surgical stainless steel mesh keeps out pine needles, oak tassels, and roof shingle granules while easily handling heavy Northwest Arkansas downpours."
    },
    {
      icon: ShieldCheck,
      title: "3. Fascia Mounting (Protects Shingles)",
      detail: "Mounted directly to the gutter lip and fascia board. We never slide guards under shingles, protecting your roof manufacturer warranty 100%."
    }
  ];

  return (
    <section id="process" className="py-14 sm:py-18 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">Our Process</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            How The Ozark Micro-Mesh System Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal leading-relaxed">
            Most gutter guards fail because they are installed over dirty, unpitched, sagging gutters. Every installation includes full realignment and cleaning standard:
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 p-6 rounded-xl flex flex-col justify-between space-y-4 shadow-xs"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white text-emerald-700 border border-slate-200 flex items-center justify-center mb-4 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5 font-normal">
                    {item.detail}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 text-xs text-emerald-700 font-semibold flex items-center gap-1.5">
                  <Check className="w-4 h-4" />
                  <span>Included on Every Job</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Financing Banner */}
        <div className="mt-10 p-6 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold">
              Affordable Monthly Financing Available
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-normal">
              Plans starting around $48/month with 0% APR options. Easy pre-qualification with no credit score impact.
            </p>
          </div>

          <a
            href="#estimate-section"
            className="bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold shrink-0 transition-colors"
          >
            Get Free Estimate
          </a>
        </div>

      </div>
    </section>
  );
}
