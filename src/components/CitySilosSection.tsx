import React from 'react';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { CITIES_DATA } from '@/data/cities';

export default function CitySilosSection() {
  const cities = Object.values(CITIES_DATA);

  return (
    <section id="locations" className="py-14 sm:py-20 bg-[#F8F9FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 space-y-2">
          <span className="text-xs font-bold text-[#1D4ED8] uppercase tracking-wider block">Local NWA Hubs</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Northwest Arkansas Service Coverage
          </h2>
          <p className="text-base text-slate-600 font-normal leading-relaxed">
            Local in-house installation crews dispatched daily across Benton and Washington counties:
          </p>
        </div>

        {/* City Silo Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/${city.slug}`}
              className="bg-white border border-slate-200 rounded-xl p-4 hover:border-blue-600 hover:shadow-sm transition text-center group flex flex-col justify-between"
            >
              <div>
                <MapPin className="w-4 h-4 text-[#1D4ED8] mx-auto mb-1.5" />
                <span className="font-bold text-slate-900 text-sm block group-hover:text-[#1D4ED8] transition-colors">
                  {city.cityName}
                </span>
                <span className="text-[11px] text-slate-500 font-medium block mt-1">
                  10-Yr Guarantee
                </span>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100 text-xs font-semibold text-[#1D4ED8] flex items-center justify-center gap-1">
                <span>View Hub →</span>
              </div>
            </Link>
          ))}

          {/* Specialty Foliage Card: Pine Needle Protection */}
          <Link
            href="/pine-needle-gutter-protection"
            className="bg-slate-900 text-white rounded-xl p-4 hover:bg-slate-800 transition text-center group flex flex-col justify-between border border-slate-800 shadow-sm"
          >
            <div>
              <span className="text-[10px] font-bold text-blue-400 block uppercase tracking-wider">Specialty</span>
              <span className="font-bold text-white text-sm block mt-0.5 group-hover:text-blue-400 transition-colors">
                Pine Shield
              </span>
              <span className="text-[11px] text-slate-400 block mt-1">
                Bella Vista Pines
              </span>
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-800 text-xs font-semibold text-blue-400 flex items-center justify-center gap-1">
              <span>View Specs →</span>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
