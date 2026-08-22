import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight, Check } from 'lucide-react';
import { TAGGED_PROJECT_PHOTOS } from '@/data/taggedProjectPhotos';

export default function BeforeAfterGallery() {
  const featuredPhotos = TAGGED_PROJECT_PHOTOS.slice(0, 4);

  return (
    <section id="evidence" className="py-14 sm:py-20 bg-[#F8F9FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold text-[#1D4ED8] uppercase tracking-wider block">Field Documentation</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Real Northwest Arkansas Installations
            </h2>
            <p className="text-base text-slate-600 font-normal leading-relaxed">
              Before and after photographic evidence from recent installations and cleanouts across Benton and Washington counties:
            </p>
          </div>

          <Link
            href="/before-after-photos"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-lg transition self-start md:self-auto shadow-sm"
          >
            <span>View All Photos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Split Screen Image Banner */}
        <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-sm">
          <div className="relative h-64 sm:h-96 w-full bg-slate-100">
            <Image
              src="/images/gutter_before_after.jpg"
              alt="Split screen comparison: Clogged pine needles vs 316 surgical micro-mesh in Bella Vista, AR"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-medium">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#1D4ED8]" />
              <span>Bella Vista Job: Loblolly Pine Needle Heavy Canopy</span>
            </div>
            <div className="flex gap-4 text-xs font-semibold">
              <span className="text-rose-400">BEFORE: Clogged Sagging Gutter</span>
              <span className="text-blue-400">AFTER: 50-Micron 316 Mesh</span>
            </div>
          </div>
        </div>

        {/* Project Case Studies 4-Grid with Editorial Styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="border border-slate-200 bg-white p-4 rounded-xl space-y-3 flex flex-col justify-between shadow-xs hover:border-slate-300 transition"
            >
              <div className="space-y-2">
                <div className="relative h-36 w-full border border-slate-100 rounded-lg overflow-hidden bg-slate-100">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-slate-900 text-white text-[10px] font-semibold uppercase px-2 py-0.5 rounded">
                    {photo.city}
                  </span>
                </div>

                <div className="flex justify-between items-baseline pt-1">
                  <h3 className="font-bold text-slate-900 text-xs line-clamp-1">{photo.title}</h3>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {photo.caption}
                </p>

                <div className="flex flex-wrap gap-1 pt-1">
                  {photo.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-1.5 py-0.5 bg-[#F8F9FA] border border-slate-200 text-slate-600 text-[10px] font-medium rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-medium">
                <span className="text-[#1D4ED8] flex items-center gap-1 font-semibold">
                  <span>✓ Verified Install</span>
                </span>
                <span className="text-slate-500">{photo.specs.flowRateTested || '150 in/hr'}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
