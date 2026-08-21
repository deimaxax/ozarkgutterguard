import React from 'react';
import Link from 'next/link';
import { Phone, Star, ShieldCheck } from 'lucide-react';

export default function TopBar() {
  const phoneHref = "tel:+14799292516";
  const phoneDisplay = "(479) 929-2516";

  return (
    <div className="bg-brand-navyDark text-slate-300 text-xs py-2 px-3 sm:px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center sm:justify-between items-center gap-2">
        
        {/* Left: Star Rating & Cleanout Offer */}
        <div className="flex items-center gap-2.5 text-slate-300">
          <div className="flex items-center gap-1.5 font-semibold text-white">
            <span className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="text-[11px] sm:text-xs">5.0 Star Rated (187+ Reviews)</span>
          </div>

          <span className="hidden md:inline text-slate-600">•</span>

          <Link 
            href="/gutter-cleaning" 
            className="hidden md:inline-flex items-center gap-1.5 text-emerald-400 hover:text-white font-bold transition-colors"
          >
            <span>🧹 $149 Diagnostic Cleanout &amp; 21-Pt Audit</span>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-1.5 py-0.2 rounded font-semibold">100% Credited</span>
          </Link>
        </div>

        {/* Right: Shop Location & Phone */}
        <div className="flex items-center gap-2 sm:gap-3 text-xs">
          <span className="hidden lg:inline text-slate-400">
            1102 S Walton Blvd, Bentonville
          </span>
          <span className="hidden lg:inline text-slate-600">•</span>
          <a
            href={phoneHref}
            className="text-white hover:text-emerald-400 font-bold transition-colors py-1 px-1.5 rounded active:text-emerald-300"
          >
            Direct: {phoneDisplay}
          </a>
        </div>

      </div>
    </div>
  );
}
