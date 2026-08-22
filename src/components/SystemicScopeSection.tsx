import React from 'react';
import { Sparkles, ShieldCheck, Wrench } from 'lucide-react';

export default function SystemicScopeSection() {
  const steps = [
    {
      number: "1",
      title: "Full Cleanout & Laser Slope Tune-Up",
      detail: "We never install guards over dirty gutters. We hand-clean every foot of sludge, flush downspouts, and correct sagging low spots so rainwater drains perfectly.",
      highlight: "Pre-Installation Standard"
    },
    {
      number: "2",
      title: "Surgical Stainless Steel Armor",
      detail: "We fit medical-grade 316 stainless micro-mesh that stops fine pine needles and oak tassels dead in their tracks — while handling torrential Arkansas storms.",
      highlight: "Zero Debris Infiltration"
    },
    {
      number: "3",
      title: "100% Shingle-Safe Fascia Fastening",
      detail: "We screw directly into your gutter lip and fascia board. Zero brackets slide under your shingles, keeping your manufacturer roof warranty 100% intact.",
      highlight: "Roof Warranty Protected"
    }
  ];

  return (
    <section id="process" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <span className="text-xs font-bold text-[#D92626] uppercase tracking-wider block">
            Craftsmanship Standard
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0F1E36] tracking-tight">
            The 3-Step Installation Done Right
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Most gutter guards fail because they’re slapped over dirty, sagging gutters. Here’s how our local crew prepares and protects every single roofline:
          </p>
        </div>

        {/* 3 Steps Grid with Varied, Authentic Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F8F9FA] rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xs hover:border-slate-300 transition"
            >
              <div className="space-y-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#0F1E36] text-white font-black text-sm flex items-center justify-center shadow-xs">
                  {item.number}
                </div>
                <h3 className="font-bold text-lg sm:text-xl text-[#0F1E36] tracking-tight leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-bold text-[#183059]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D92626]"></span>
                <span>{item.highlight}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
