import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function SystemicScopeSection() {
  const pillars = [
    {
      title: "1. Pitch Correction & Realignment",
      detail: "We check and fix low spots, re-align slope for proper 1/4\" per foot drainage drop, and reinforce gutters to the fascia board with heavy-duty hidden screws to handle heavy Ozark rain and winter ice."
    },
    {
      title: "2. 316 Surgical Stainless Micro-Mesh",
      detail: "Ultra-fine 50-micron medical-grade stainless steel mesh blocks 100% of pine needles, oak tassels, and roof shingle granules while easily handling up to 150 inches of rainfall per hour."
    },
    {
      title: "3. Fascia Mounting (Protects Shingles)",
      detail: "Mounted directly to the gutter lip and fascia board with zero shingle contact. We never slide brackets under your shingles, protecting your manufacturer roof warranty 100%."
    }
  ];

  return (
    <section id="process" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <span className="text-xs font-bold text-[#1D4ED8] uppercase tracking-wider block">
            Craftsmanship Standard
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            How The Ozark Micro-Mesh System Works
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Most gutter guards fail because they are installed over dirty, unpitched, sagging gutters. Every Ozark installation includes complete laser slope tune-up and hand cleanout standard:
          </p>
        </div>

        {/* 3 Pillars Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F8F9FA] rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between space-y-5 shadow-sm hover:border-slate-300 transition"
            >
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Pillar 0{idx + 1}
                </span>
                <h3 className="font-bold text-lg sm:text-xl text-[#0F172A] tracking-tight leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 text-xs font-semibold text-[#1D4ED8] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]"></span>
                <span>Included on Every Job</span>
              </div>
            </div>
          ))}
        </div>

        {/* Financing Banner */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#0F172A] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block">
              Flexible Monthly Terms
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Affordable Monthly Financing Available
            </h3>
            <p className="text-sm text-slate-300 font-normal">
              Plans starting around $48/month with 0% APR options for 12 months. Easy digital pre-qualification.
            </p>
          </div>

          <a
            href="#estimate-section"
            className="btn-contractor-primary px-6 py-3.5 text-sm font-bold shrink-0 transition flex items-center gap-2 shadow-sm"
          >
            <span>Get Free Estimate</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
