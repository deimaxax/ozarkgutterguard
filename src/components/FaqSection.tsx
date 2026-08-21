'use client';

import React, { useState } from 'react';
import { ChevronDown, Phone, HelpCircle } from 'lucide-react';
import { FAQS_DATA } from '@/data/faqs';

interface FaqSectionProps {
  onOpenQuote?: () => void;
}

export default function FaqSection({ onOpenQuote }: FaqSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const phoneHref = "tel:+14799292516";
  const phoneDisplay = "(479) 929-2516";

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-100 text-slate-700 text-xs font-bold">
            <HelpCircle className="w-4 h-4 text-brand-green" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-brand-navy tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 font-normal">
            Straightforward answers about our 316 surgical mesh, roof shingle safety, warranty terms, and pricing.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden transition"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-100/70 transition"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-brand-green' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 font-normal">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Banner */}
        <div className="mt-12 p-6 rounded-lg bg-emerald-50 border border-emerald-200 text-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-base text-slate-900">
              Have a question about your specific roofline or steep slope?
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Talk directly with our local Bentonville technician team.
            </p>
          </div>
          <a
            href={phoneHref}
            className="btn-contractor-green px-5 py-2.5 text-xs font-bold shrink-0 flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call: {phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
