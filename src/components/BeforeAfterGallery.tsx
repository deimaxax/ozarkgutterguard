import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, CheckCircle2, ArrowRight, Tag, Camera, ShieldCheck } from 'lucide-react';
import { TAGGED_PROJECT_PHOTOS } from '@/data/taggedProjectPhotos';

export default function BeforeAfterGallery() {
  const featuredPhotos = TAGGED_PROJECT_PHOTOS.slice(0, 4);

  return (
    <section id="evidence" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold font-mono mb-2">
              <Camera className="w-3.5 h-3.5" />
              <span>Real NWA Jobsite Evidence &amp; Geocoded Logs</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-brand-navy tracking-tight">
              Real Northwest Arkansas Before &amp; After
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 font-normal">
              Physical field documentation and diagnostic flow testing from recent residential installations across Benton and Washington counties:
            </p>
          </div>

          <Link
            href="/before-after-photos"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-orange-600 font-bold text-xs transition shadow-xs self-start md:self-auto"
          >
            <span>View All {TAGGED_PROJECT_PHOTOS.length} Verified Photos &amp; Logs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Split Screen Image Banner */}
        <div className="rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md bg-slate-900">
          <div className="relative h-64 sm:h-96 w-full">
            <Image
              src="/images/gutter_before_after.jpg"
              alt="Split screen comparison: Clogged pine needles vs 316 surgical micro-mesh in Bella Vista, AR"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4 bg-slate-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-semibold border-t border-slate-800">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Bella Vista Jobsite: Loblolly Pine Needle Canopy (Lake Loch Lomond Shoreline)</span>
            </div>
            <div className="flex gap-4 font-mono text-[11px]">
              <span className="text-red-400">◄ BEFORE: 4" Compacted Pine Needle Dam</span>
              <span className="text-emerald-400">► AFTER: 50-Micron 316 Mesh Armor</span>
            </div>
          </div>
        </div>

        {/* Project Case Studies 4-Grid with Tags */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="border border-slate-200 bg-slate-50 hover:bg-white p-4 rounded-xl space-y-3 hover:shadow-md hover:border-orange-500 transition flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="relative h-36 w-full rounded-lg overflow-hidden bg-slate-900">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-slate-950/80 text-orange-400 text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded">
                    {photo.city}
                  </span>
                </div>

                <div className="flex justify-between items-baseline pt-1">
                  <h3 className="font-bold text-slate-950 text-xs line-clamp-1">{photo.title}</h3>
                </div>

                <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
                  {photo.caption}
                </p>

                <div className="flex flex-wrap gap-1 pt-1">
                  {photo.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-600 text-[9px] font-semibold">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-[10px]">
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Verified Install</span>
                </span>
                <span className="text-orange-600 font-mono font-bold">{photo.specs.flowRateTested || '150 in/hr'}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
