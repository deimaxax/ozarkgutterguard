'use client';

import React, { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
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
    <section className="py-14 sm:py-20 bg-[#F8F9FA] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-2">
          <span className="text-xs font-bold text-[#1D4ED8] uppercase tracking-wider block">
            Clear Homeowner Answers
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600 font-normal leading-relaxed">
            Straightforward answers about our 316 surgical mesh, roof shingle safety, warranty terms, and direct contractor pricing.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden transition shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#1D4ED8]' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-normal">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-[#0F172A] text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block">
              Direct Technical Line
            </span>
            <h3 className="font-bold text-lg sm:text-xl text-white tracking-tight">
              Have a question about your specific roofline or steep pitch?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Talk directly with our local Bentonville technician team.
            </p>
          </div>
          <a
            href={phoneHref}
            className="btn-contractor-primary px-6 py-3 text-xs sm:text-sm font-bold shrink-0 flex items-center gap-2 shadow-sm"
          >
            <Phone className="w-4 h-4" />
            <span>Call: {phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
