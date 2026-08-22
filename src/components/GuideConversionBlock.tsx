'use client';

import React from 'react';
import { Phone, ShieldCheck, ArrowRight, Calculator, Sparkles, CheckCircle2 } from 'lucide-react';

interface GuideConversionBlockProps {
  guideTitle: string;
  ctaText?: string;
}

export default function GuideConversionBlock({
  guideTitle,
  ctaText = 'Get a Direct 15-Minute Satellite Quote & Save $3,000+',
}: GuideConversionBlockProps) {
  const phoneHref = 'tel:+14799292516';
  const phoneDisplay = '(479) 929-2516';

  const handleCallClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'emergency_call_click', {
        event_category: 'Lead',
        event_label: guideTitle,
        value: 1,
      });
    }
  };

  const handleQuoteClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'guide_quote_click', {
        event_category: 'Engagement',
        event_label: guideTitle,
      });
    }
  };

  return (
    <div className="my-10 space-y-4">
      {/* 1. Homeowner Translation Bridge Callout Box */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-8 border-2 border-emerald-500/40 shadow-xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Homeowner Practical Summary &amp; Financial Impact</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
          What This Technical Analysis Means for Your Home &amp; Budget
        </h3>

        <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300 pt-1">
          <div className="flex items-start gap-2 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              <strong>Direct Contractor Savings:</strong> Pay $16–$22/ft for 316 316 stainless mesh vs $38–$50/ft national franchise pricing.
            </span>
          </div>
          <div className="flex items-start gap-2 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              <strong>Zero Shingle Contact:</strong> Preserves 100% of your GAF Timberline &amp; CertainTeed manufacturer warranties.
            </span>
          </div>
        </div>

        {/* Dual Conversion Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-slate-800">
          <a
            href="/satellite-quote"
            onClick={handleQuoteClick}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-black text-sm flex items-center justify-center gap-2 transition shadow-lg shrink-0"
          >
            <Calculator className="w-4 h-4" />
            <span>{ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={phoneHref}
            onClick={handleCallClick}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center gap-2 transition border border-slate-700 shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-orange-400" />
            <span>Speak with a Local Technician: {phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
