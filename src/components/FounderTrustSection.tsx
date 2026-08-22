import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Sparkles, HeartHandshake } from 'lucide-react';

export default function FounderTrustSection() {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Founder Accountability Card */}
          <div className="lg:col-span-6 bg-[#F8F9FA] rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex items-center gap-4 border-b border-slate-200 pb-5">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-600 shrink-0 bg-slate-200">
                <Image
                  src="/images/contractor_truck.jpg"
                  alt="David Vance - Ozark Gutter Guard Co. Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0F172A] tracking-tight">
                  David Vance
                </h3>
                <span className="text-xs font-semibold text-[#1D4ED8] block">
                  Founder &amp; Lead Field Specialist • Bentonville Resident
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  Benton &amp; Washington County Local Operations
                </span>
              </div>
            </div>

            <blockquote className="text-sm sm:text-base text-slate-700 leading-relaxed italic font-normal">
              &quot;We live in Benton County, our kids go to school here in NWA, and I put our local reputation on every single installation. If your gutters just need a slope adjustment or seasonal cleanout instead of permanent micro-mesh, we will tell you straight. No $6,000 corporate franchise markups, and zero high-pressure salesmen in your living room.&quot;
            </blockquote>

            <div className="pt-2 flex items-center justify-between text-xs text-slate-600 font-medium border-t border-slate-200">
              <span className="font-semibold text-slate-900">Direct Local Dispatch:</span>
              <a href="tel:+14799292516" className="text-[#1D4ED8] font-bold hover:underline">
                (479) 929-2516
              </a>
            </div>
          </div>

          {/* Right Column: Clean Yard Promise */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#1D4ED8] uppercase tracking-wider block mb-1">
                Property Care Standard
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                Our Clean Yard &amp; Property Promise
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal leading-relaxed">
                We respect your home as if it were our own. Every installation crew follows our strict 3-point residential safety and cleanup protocol:
              </p>
            </div>

            <div className="space-y-4">
              
              <div className="bg-[#F8F9FA] rounded-xl border border-slate-200 p-4 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Triple Magnetic Sweep
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    We perform rolling magnetic sweeps across your driveway, lawn, and landscaping to guarantee 0 stray screws or fasteners for tires and pets.
                  </p>
                </div>
              </div>

              <div className="bg-[#F8F9FA] rounded-xl border border-slate-200 p-4 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Full AC &amp; Flowerbed Tarps
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Protective tarps cover your HVAC condensers, delicate plants, and outdoor patio furniture before any gutter flushing or extraction begins.
                  </p>
                </div>
              </div>

              <div className="bg-[#F8F9FA] rounded-xl border border-slate-200 p-4 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Daily 6:00 PM Clean Site Handover
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    All debris is bagged, hauled away in our service vehicles, and your property is left immaculate with a photo sign-off sent to your phone.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
