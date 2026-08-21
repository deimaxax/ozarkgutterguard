import React from 'react';
import { Star, MapPin, CheckCircle2 } from 'lucide-react';
import { REVIEWS_DATA } from '@/data/reviews';

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div>
            <div className="flex items-center gap-1 text-amber-400 mb-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-bold text-slate-700 ml-1">5.0 Star Rated (187+ NWA Reviews)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-brand-navy tracking-tight">
              Verified Northwest Arkansas Reviews
            </h2>
          </div>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-brand-green hover:underline flex items-center gap-1 self-start md:self-auto"
          >
            <span>Read all 187+ reviews on Google Maps →</span>
          </a>
        </div>

        {/* 3 Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {REVIEWS_DATA.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 p-5 rounded-lg flex flex-col justify-between space-y-3 shadow-xs"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-brand-green bg-emerald-50 px-2 py-0.5 rounded">
                    {item.savings}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  &quot;{item.text}&quot;
                </p>
              </div>

              <div className="pt-2.5 border-t border-slate-100 flex justify-between items-center text-xs">
                <div>
                  <div className="font-bold text-slate-900">{item.name}</div>
                  <div className="text-slate-500 text-[11px] flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5 text-slate-400" />
                    <span>{item.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-brand-green font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
