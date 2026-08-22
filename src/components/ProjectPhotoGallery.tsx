'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  TAGGED_PROJECT_PHOTOS, 
  TaggedProjectPhoto, 
  getTaggedPhotosByCategory, 
  getTaggedPhotosByCity 
} from '@/data/taggedProjectPhotos';
import { 
  MapPin, 
  ShieldCheck, 
  Tag, 
  Maximize2, 
  X, 
  Zap, 
  Layers, 
  SlidersHorizontal, 
  Calendar,
  CheckCircle2
} from 'lucide-react';

interface ProjectGalleryProps {
  initialCity?: string;
  initialCategory?: string;
  title?: string;
  subtitle?: string;
}

export default function ProjectGalleryWithTags({
  initialCity,
  initialCategory = 'all',
  title = "Northwest Arkansas Real Jobsite Photos & Engineering Schematics",
  subtitle = "Documented project records with verifiable GPS coordinates, local tree threat profiles, flow rate lab data, and high-resolution photo proof."
}: ProjectGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [activePhoto, setActivePhoto] = useState<TaggedProjectPhoto | null>(null);

  // Extract all unique tags
  const allTags = ['all', ...Array.from(new Set(TAGGED_PROJECT_PHOTOS.flatMap(p => p.tags)))];

  // Filter photos based on category, city, and tag
  const filteredPhotos = TAGGED_PROJECT_PHOTOS.filter(photo => {
    const matchesCategory = selectedCategory === 'all' || photo.category === selectedCategory;
    const matchesTag = selectedTag === 'all' || photo.tags.includes(selectedTag);
    const matchesCity = !initialCity || initialCity === 'all' || photo.city.toLowerCase().includes(initialCity.toLowerCase());
    return matchesCategory && matchesTag && matchesCity;
  });

  return (
    <div className="space-y-8">
      {/* Gallery Header */}
      <div className="max-w-3xl space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold font-mono">
          <Tag className="w-3.5 h-3.5" />
          <span>E-E-A-T Verified Visual Evidence &amp; Geocoded Assets</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
          {title}
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed font-normal">
          {subtitle}
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4 text-xs font-bold">
        <span className="text-slate-400 uppercase tracking-wider mr-1 text-[10px] flex items-center gap-1">
          <SlidersHorizontal className="w-3 h-3" /> Filter By:
        </span>
        {[
          { key: 'all', label: 'All Photos & Schematics' },
          { key: 'case-study', label: 'Field Case Studies' },
          { key: 'technical', label: 'Technical & Flow Tests' },
          { key: 'installation', label: 'Residential Installs' },
          { key: 'before-after', label: 'Before & After' },
          { key: 'fleet', label: 'Service Trucks & Crew' },
        ].map(cat => (
          <button
            key={cat.key}
            onClick={() => {
              setSelectedCategory(cat.key);
              setSelectedTag('all');
            }}
            className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
              selectedCategory === cat.key
                ? 'bg-slate-950 text-white shadow-sm'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Popular Tags Horizontal Strip */}
      <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
        <span className="text-slate-400 font-semibold mr-1">Popular Tags:</span>
        {allTags.slice(0, 12).map(tag => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
              selectedTag === tag
                ? 'bg-orange-600 text-white font-bold'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            #{tag}
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map(photo => (
          <article
            key={photo.id}
            className="group bg-white rounded-2xl border-2 border-slate-200 hover:border-orange-500 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              {/* Image Container with Hover Zoom */}
              <div 
                onClick={() => setActivePhoto(photo)}
                className="relative h-56 sm:h-64 w-full bg-slate-950 overflow-hidden cursor-pointer"
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-700">
                    <Maximize2 className="w-3.5 h-3.5 text-orange-400" />
                    <span>Click to View Full Specs &amp; EXIF</span>
                  </span>
                </div>

                {/* Category Badge Over Image */}
                <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-xs text-orange-400 border border-slate-700 text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md">
                  {photo.category.replace('-', ' ')}
                </span>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-slate-500 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                    <span>{photo.neighborhood}, {photo.city}</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">{photo.dateTaken}</span>
                </div>

                <h3 className="font-black text-base text-slate-900 leading-snug group-hover:text-orange-600 transition-colors">
                  {photo.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                  {photo.caption}
                </p>

                {/* Specs Snippet Bar */}
                <div className="grid grid-cols-2 gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-[11px]">
                  {photo.specs.flowRateTested && (
                    <div>
                      <span className="text-slate-400 text-[9px] font-bold uppercase block">Flow Rate</span>
                      <span className="font-bold text-orange-600 font-mono">{photo.specs.flowRateTested}</span>
                    </div>
                  )}
                  {photo.specs.micronSize && (
                    <div>
                      <span className="text-slate-400 text-[9px] font-bold uppercase block">Filtration</span>
                      <span className="font-bold text-slate-900">{photo.specs.micronSize}</span>
                    </div>
                  )}
                </div>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {photo.tags.slice(0, 4).map(t => (
                    <span 
                      key={t}
                      onClick={() => setSelectedTag(t)}
                      className="px-2 py-0.5 rounded bg-slate-100 hover:bg-orange-50 hover:text-orange-600 text-slate-600 text-[10px] font-semibold cursor-pointer transition-colors"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px]">
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>{photo.verifiedBadge}</span>
              </span>
              <button 
                onClick={() => setActivePhoto(photo)}
                className="font-bold text-orange-600 hover:text-orange-700 cursor-pointer"
              >
                Inspect →
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox Modal with Full Geocoded Metadata & Specs */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block mb-1">
                  {activePhoto.verifiedBadge}
                </span>
                <h3 className="font-black text-xl sm:text-2xl text-slate-950">
                  {activePhoto.title}
                </h3>
              </div>
              <button
                onClick={() => setActivePhoto(null)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center cursor-pointer transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Full Resolution Image Box */}
              <div className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-200">
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  fill
                  className="object-contain"
                />
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {activePhoto.caption}
              </p>

              {/* Full EXIF & Engineering Spec Table */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Municipality</span>
                  <span className="font-bold text-slate-900">{activePhoto.city}, AR {activePhoto.zipCode}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Subdivision / Zone</span>
                  <span className="font-bold text-slate-900">{activePhoto.neighborhood}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Geo Coordinates</span>
                  <span className="font-mono font-bold text-orange-600">{activePhoto.geo.latitude}° N, {Math.abs(activePhoto.geo.longitude)}° W</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Throughput Capacity</span>
                  <span className="font-mono font-bold text-emerald-700">{activePhoto.specs.flowRateTested || '150 in/hr'}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Aperture Size</span>
                  <span className="font-bold text-slate-900">{activePhoto.specs.micronSize || '50-Micron Weave'}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Material Metallurgy</span>
                  <span className="font-bold text-slate-900">{activePhoto.specs.material || '316 Marine Stainless'}</span>
                </div>
              </div>

              {/* Tags In Modal */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 text-xs">
                <span className="text-slate-400 font-bold self-center mr-1">Indexed Tags:</span>
                {activePhoto.tags.map(t => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-semibold">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="p-4 sm:p-6 bg-slate-950 text-white rounded-b-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-slate-300">
                Want this exact 316 marine-grade 316 stainless specification on your property?
              </span>
              <a
                href="#estimate-form"
                onClick={() => setActivePhoto(null)}
                className="px-5 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-black text-xs shadow-md transition"
              >
                Get 90-Sec Satellite Quote →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
