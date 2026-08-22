import React from 'react';
import Link from 'next/link';
import { Phone, Star } from 'lucide-react';

export default function TopBar() {
  const phoneHref = "tel:+14799292516";
  const phoneDisplay = "(479) 929-2516";

  return (
    <div className="bg-[#0F1E36] text-slate-300 text-xs py-1.5 px-4 border-b border-[#183059]">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-[11px] sm:text-xs">
        
        {/* Left: Star Rating & License */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1 text-slate-200 font-medium">
            <span className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span>5.0 Rating (187+ Reviews)</span>
          </div>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <span className="text-slate-300 hidden sm:inline">Northwest Arkansas</span>
        </div>

        {/* Right: Phone & License */}
        <div className="flex items-center gap-3">
          <span className="text-slate-400 hidden md:inline">AR Lic. #OGG-479-NWA</span>
          <span className="text-slate-600 hidden md:inline">•</span>
          <a
            href={phoneHref}
            className="text-red-400 hover:text-red-300 font-bold transition-colors inline-flex items-center gap-1"
          >
            <Phone className="w-3 h-3" />
            <span>{phoneDisplay}</span>
          </a>
        </div>

      </div>
    </div>
  );
}
