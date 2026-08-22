import React from 'react';
import { Star, MapPin, Check } from 'lucide-react';
import { REVIEWS_DATA } from '@/data/reviews';

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-3">
          <div>
            <div className="flex items-center gap-1.5 text-amber-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-bold text-slate-700 ml-1">5.0 Star Rating (187+ NWA Reviews)</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F1E36] tracking-tight">
              Verified Northwest Arkansas Reviews
            </h2>
          </div>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#D92626] hover:underline flex items-center gap-1 self-start md:self-auto"
          >
            <span>Read all 187+ Google reviews →</span>
          </a>
        </div>

        {/* 3 Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS_DATA.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-[#F8F9FA] border border-slate-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-4 shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-[#0F1E36] bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                    {item.savings}
                  </span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  &quot;{item.text}&quot;
                </p>
              </div>

              <div className="pt-3.5 border-t border-slate-200/80 flex justify-between items-center text-xs">
                <div>
                  <div className="font-bold text-[#0F1E36]">{item.name}</div>
                  <div className="text-slate-500 text-[11px] flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#D92626]" />
                    <span>{item.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#0F1E36] font-bold bg-white px-2 py-0.5 rounded border border-slate-200">
                  <span>✓ Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
