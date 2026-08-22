import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { TAGGED_PROJECT_PHOTOS } from '@/data/taggedProjectPhotos';

export default function BeforeAfterGallery() {
  const featuredPhotos = TAGGED_PROJECT_PHOTOS.slice(0, 4);

  return (
    <section id="evidence" className="py-14 sm:py-20 bg-[#F8F9FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold text-[#1D4ED8] uppercase tracking-wider block">
              Recent Work
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Real Installations in Northwest Arkansas
            </h2>
            <p className="text-base text-slate-600 font-normal leading-relaxed">
              Photos from recent gutter guard installations and cleanouts across Benton and Washington counties:
            </p>
          </div>

          <Link
            href="/before-after-photos"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-lg transition self-start md:self-auto shadow-xs"
          >
            <span>View All Photos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Split Screen Image Banner */}
        <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-xs">
          <div className="relative h-64 sm:h-96 w-full bg-slate-100">
            <Image
              src="/images/gutter_before_after.jpg"
              alt="Clogged gutters vs stainless steel micro-mesh in Bella Vista, AR"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-medium">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#1D4ED8]" />
              <span>Bella Vista Job: Heavy Pine Needle Protection</span>
            </div>
            <div className="flex gap-4 text-xs font-semibold">
              <span className="text-rose-400">BEFORE: Clogged &amp; Sagging</span>
              <span className="text-blue-400">AFTER: Clean &amp; Guarded</span>
            </div>
          </div>
        </div>

        {/* 4 Job Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xs"
            >
              <div className="relative h-44 w-full bg-slate-100">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute top-2.5 left-2.5 bg-slate-900/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                  {photo.city}, AR
                </div>
              </div>

              <div className="p-4 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm leading-snug line-clamp-2">
                  {photo.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 font-normal">
                  {photo.caption}
                </p>
              </div>

              <div className="px-4 pb-3.5 pt-1 text-[11px] font-semibold text-emerald-700">
                ✓ Verified Local Installation
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
