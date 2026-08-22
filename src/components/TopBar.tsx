import React from 'react';
import Link from 'next/link';
import { Phone, Star, Shield, MapPin } from 'lucide-react';

export default function TopBar() {
  const phoneHref = "tel:+14799292516";
  const phoneDisplay = "(479) 929-2516";

  return (
    <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
        
        {/* Left: Star Rating & Location */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-medium text-white">
            <span className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="text-xs font-semibold">5.0 Star Rated (187+ NWA Reviews)</span>
          </div>

          <span className="hidden md:inline text-slate-600">•</span>

          <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>Serving Bentonville, Rogers, Bella Vista &amp; Fayetteville</span>
          </span>
        </div>

        {/* Right: Cleanout offer & Direct Phone */}
        <div className="flex items-center gap-3 text-xs">
          <Link 
            href="/gutter-cleaning" 
            className="hidden sm:inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
          >
            <span>Need cleaning? $149 Cleanout &amp; Audit</span>
          </Link>
          <span className="hidden sm:inline text-slate-600">•</span>
          <a
            href={phoneHref}
            className="text-white hover:text-emerald-400 font-bold transition-colors inline-flex items-center gap-1"
          >
            <Phone className="w-3 h-3 text-emerald-400" />
            <span>Call: {phoneDisplay}</span>
          </a>
        </div>

      </div>
    </div>
  );
}
