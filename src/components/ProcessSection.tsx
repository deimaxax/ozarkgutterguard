'use client';

import React from 'react';
import { Satellite, FileText, CheckCircle2 } from 'lucide-react';

interface ProcessSectionProps {
  cityName?: string;
}

export default function ProcessSection({ cityName }: ProcessSectionProps) {
  const steps = [
    {
      num: "01",
      icon: Satellite,
      timing: "90 Seconds",
      title: "GIS Aerial Measurement",
      description: "Satellite imagery measures your exact roofline linear footage and pitch without scheduling an invasive in-person sales appointment."
    },
    {
      num: "02",
      icon: FileText,
      timing: "15 Minutes",
      title: "Itemized Written Estimate",
      description: "A guaranteed written quote is sent directly to your phone via SMS with transparent contractor rates and zero sales pressure."
    },
    {
      num: "03",
      icon: CheckCircle2,
      timing: "Same-Week Install",
      title: "Direct Contractor Installation",
      description: "Our in-house crew flushes troughs, re-pitches slopes, installs zinc rafter hangers, and secures 316 surgical micro-mesh."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-4xl font-black text-brand-navy tracking-tight">
            {cityName ? `How We Protect ${cityName} Homes` : 'How Direct Contractor Installation Works'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
            Zero 3-hour sales presentations, zero closing gimmicks, and zero subcontracted day labor:
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 p-6 rounded-lg shadow-xs flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-full bg-brand-navy text-white text-sm font-black flex items-center justify-center">
                      {step.num}
                    </span>
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                      ⏱ {step.timing}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs font-bold text-brand-green flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>100% Guaranteed</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
