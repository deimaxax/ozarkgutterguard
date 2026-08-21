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
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 p-2.5 shadow-lg safe-area-pb">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2">
        {/* Direct Call Button */}
        <a
          href={phoneHref}
          id="mobile-sticky-call-btn"
          className="btn-contractor-navy py-3 px-3 text-center text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs"
          aria-label={`Call Ozark Gutter Guard at ${phoneDisplay}`}
        >
          <Phone className="w-4 h-4 text-emerald-400" />
          <span>Call Shop</span>
        </a>

        {/* Free Quote Button */}
        <a
          href="#estimate-section"
          id="mobile-sticky-quote-btn"
          className="btn-contractor-green py-3 px-3 text-center text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs"
        >
          <Calculator className="w-4 h-4" />
          <span>Free Estimate</span>
        </a>
      </div>
    </div>
  );
}
