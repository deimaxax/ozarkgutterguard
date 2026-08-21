'use client';

import React from 'react';
import { Phone, Calculator } from 'lucide-react';

interface StickyMobileBarProps {
  onOpenQuote?: () => void;
}

export default function StickyMobileBar({ onOpenQuote }: StickyMobileBarProps) {
  const phoneHref = "tel:+14799292516";
  const phoneDisplay = "(479) 929-2516";

  return (
    <aside 
      aria-label="Quick Mobile Actions" 
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 pt-2.5 shadow-2xl safe-area-pb"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        {/* Direct Call Button */}
        <a
          href={phoneHref}
          id="mobile-sticky-call-btn"
          className="btn-contractor-navy min-h-[48px] py-3 px-3 text-center text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-transform"
          aria-label={`Call Ozark Gutter Guard at ${phoneDisplay}`}
        >
          <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Call (479) 929-2516</span>
        </a>

        {/* Free Quote Button */}
        <a
          href="#estimate-section"
          id="mobile-sticky-quote-btn"
          className="btn-contractor-green min-h-[48px] py-3 px-3 text-center text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-transform"
        >
          <Calculator className="w-4 h-4 shrink-0" />
          <span>Free Estimate</span>
        </a>
      </div>
    </aside>
  );
}
