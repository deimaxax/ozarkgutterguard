import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { CITIES_DATA } from '@/data/cities';

export default function CitySilosSection() {
  const cities = Object.values(CITIES_DATA);

  return (
    <section id="locations" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-brand-navy tracking-tight">
            Northwest Arkansas Service Coverage
          </h2>
          <p className="text-sm text-slate-600 mt-1 font-normal">
            Local crews dispatched daily across Benton and Washington counties:
          </p>
        </div>

        {/* City Silo Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/${city.slug}`}
              className="bg-slate-50 border border-slate-200 p-3.5 rounded-lg hover:border-brand-green hover:bg-emerald-50/30 transition text-center group flex flex-col justify-between"
            >
              <div>
                <MapPin className="w-4 h-4 text-brand-green mx-auto mb-1.5" />
                <span className="font-bold text-slate-900 text-xs sm:text-sm block group-hover:text-brand-green transition-colors">
                  {city.cityName}
                </span>
                <span className="text-[10px] text-slate-500 font-medium block mt-0.5">
                  10-Yr Guarantee
                </span>
              </div>

              <div className="mt-2 pt-2 border-t border-slate-200/60 text-[10px] font-bold text-brand-green flex items-center justify-center gap-1">
                <span>View Info →</span>
              </div>
            </Link>
          ))}

          {/* Specialty Foliage Card: Pine Needle Protection */}
          <Link
            href="/pine-needle-gutter-guards"
            className="bg-brand-navy text-white p-3.5 rounded-lg hover:bg-brand-navyDark transition text-center group flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold text-amber-400 block uppercase">Specialty</span>
              <span className="font-bold text-white text-xs sm:text-sm block mt-0.5 group-hover:text-emerald-400 transition-colors">
                Pine Shield
              </span>
              <span className="text-[10px] text-slate-300 block mt-0.5">
                Bella Vista Pines
              </span>
            </div>

            <div className="mt-2 pt-2 border-t border-slate-700 text-[10px] font-bold text-emerald-400 flex items-center justify-center gap-1">
              <span>View Specs →</span>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
