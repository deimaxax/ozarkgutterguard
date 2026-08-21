import React from 'react';
import Image from 'next/image';
import { MapPin, CheckCircle2 } from 'lucide-react';

export default function BeforeAfterGallery() {
  const projects = [
    {
      title: "Bella Vista Pine Needle Remediation",
      location: "Bella Vista, AR • Lake Loch Lomond",
      before: "4 inches of decomposing pine needles rotting inside trough, causing overflow behind fascia.",
      after: "316 surgical micro-mesh with laser pitch correction. 100% clog-free through all seasons."
    },
    {
      title: "Bentonville Oak Catkin Sludge Cleanout",
      location: "Bentonville, AR • Coler Mountain Area",
      before: "Spring pollen formed thick sludge completely sealing off downspout drop outlets.",
      after: "Flushed clean, reinforced with zinc rafter screws & surgical micro-mesh installed."
    }
  ];

  return (
    <section id="evidence" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-brand-navy tracking-tight">
            Real Northwest Arkansas Before &amp; After
          </h2>
          <p className="text-sm text-slate-600 mt-1 font-normal">
            Physical field documentation from residential installations across Benton and Washington counties:
          </p>
        </div>

        {/* Split Screen Image Banner */}
        <div className="mb-6 rounded-lg overflow-hidden border border-slate-200 shadow-xs bg-slate-900">
          <div className="relative h-60 sm:h-80 w-full">
            <Image
              src="/images/gutter_before_after.jpg"
              alt="Split screen comparison: Clogged pine needles vs 316 surgical micro-mesh in Bella Vista, AR"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-3.5 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-semibold">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Bella Vista Jobsite: Loblolly Pine Needle Canopy</span>
            </div>
            <div className="flex gap-4">
              <span className="text-red-400">◄ Before: Heavy Pine Dam</span>
              <span className="text-emerald-400">► After: 316 Stainless Mesh Armor</span>
            </div>
          </div>
        </div>

        {/* Project Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((item, idx) => (
            <div
              key={idx}
              className="border border-slate-200 bg-slate-50 p-4 rounded-lg space-y-2.5"
            >
              <div className="flex justify-between items-baseline border-b border-slate-200 pb-1.5">
                <h3 className="font-bold text-slate-950 text-sm">{item.title}</h3>
                <span className="text-slate-500 text-[11px] font-medium">{item.location}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="bg-red-50/70 border border-red-100 p-2 rounded text-slate-800">
                  <strong className="text-red-700 block mb-0.5 font-bold uppercase text-[10px]">Before:</strong>
                  {item.before}
                </div>
                <div className="bg-emerald-50/70 border border-emerald-100 p-2 rounded text-slate-800">
                  <strong className="text-brand-green block mb-0.5 font-bold uppercase text-[10px]">After:</strong>
                  {item.after}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
