import React from 'react';
import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';

export default function TopBar() {
  const phoneHref = "tel:+14799292516";
  const phoneDisplay = "(479) 929-2516";

  return (
    <div className="bg-[#0F1E36] text-slate-300 text-xs py-1.5 px-4 border-b border-[#183059]">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-[11px] sm:text-xs">
        
        {/* Left: Local Location & License */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-white flex items-center gap-1 text-[11px]">
            <MapPin className="w-3 h-3 text-red-400 shrink-0" />
            <span>Bentonville, AR</span>
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-300 text-[11px]">Lic. #039182</span>
        </div>

        {/* Right: Phone */}
        <div className="flex items-center gap-2">
          <a
            href={phoneHref}
            className="text-red-400 hover:text-red-300 font-bold transition-colors inline-flex items-center gap-1 text-xs"
          >
            <Phone className="w-3 h-3" />
            <span>{phoneDisplay}</span>
          </a>
        </div>

      </div>
    </div>
  );
}
