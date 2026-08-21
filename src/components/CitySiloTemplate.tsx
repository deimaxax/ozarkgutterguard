'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  ArrowRight, 
  Check, 
  Star, 
  TreePine, 
  AlertTriangle, 
  Home, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Satellite 
} from 'lucide-react';
import TopBar from './TopBar';
import Header from './Header';
import Footer from './Footer';
import StickyMobileBar from './StickyMobileBar';
import QuoteModal from './QuoteModal';
import ComparisonMatrix from './ComparisonMatrix';
import FaqSection from './FaqSection';
import SchemaJsonLd from './SchemaJsonLd';
import SatelliteEstimator from './SatelliteEstimator';
import { CityData } from '@/data/cities';
import { INSTALLATION_LOGS } from '@/data/installationLogs';
import { FAQS_DATA } from '@/data/faqs';

interface CitySiloTemplateProps {
  city: CityData;
}

export default function CitySiloTemplate({ city }: CitySiloTemplateProps) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const cityKey = city.cityName.toLowerCase().replace(/\s+/g, '-');
  const installationLogs = INSTALLATION_LOGS[cityKey] ?? INSTALLATION_LOGS[city.cityName.toLowerCase()] ?? [];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* City-specific schema with FAQ rich snippets for Google local pack */}
      <SchemaJsonLd
        type="service"
        slug={city.slug}
        title={city.title}
        description={city.metaDescription}
        cityName={city.cityName}
        wikiUrl={city.wikiUrl}
        postalCodes={city.postalCodes}
        geo={city.geo}
        faqs={FAQS_DATA.slice(0, 5)}
      />

      <TopBar />
      <Header onOpenQuote={() => setQuoteModalOpen(true)} />

      <main className="flex-1">
        {/* HERO SECTION FOR CITY */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/80 border-b border-slate-200 py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-xs text-slate-500 font-bold">
              <Link href="/" className="hover:text-brand-green transition-colors">Home</Link>
              <span>/</span>
              <span className="text-brand-green">{city.cityName} Gutter Guards</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-white border border-slate-200 shadow-xs rounded-full px-4 py-1.5 text-xs font-bold text-slate-800">
                  <MapPin className="w-4 h-4 text-brand-green" />
                  <span className="text-brand-navy">{city.cityState} Dedicated Installation</span>
                </div>

                {/* H1 Hierarchy Rule #1 */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-brand-navy leading-tight">
                  {city.h1}
                </h1>

                <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
                  Medical-grade 316 surgical stainless steel micro-mesh custom fitted for {city.cityName} rooflines. No $6,000 corporate franchise markups, and zero high-pressure salesmen.
                </p>

                {/* Local Neighborhoods Served Bar */}
                <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 space-y-2.5 shadow-2xs">
                  <div className="text-xs font-black uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Serving Key {city.cityName} Neighborhoods:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-slate-700">
                    {city.landmarks.map((lm, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0"></span>
                        <span>{lm}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href="#estimate-section"
                    className="w-full sm:w-auto btn-cta-pulse bg-brand-green hover:bg-brand-greenHover text-white px-8 py-4 rounded-xl font-black text-sm shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <Satellite className="w-4 h-4" />
                    <span>Get {city.cityName} Satellite Quote</span>
                  </a>

                  <a
                    href="tel:+14799292516"
                    className="btn-industrial-outline px-5 py-3 text-xs uppercase tracking-wider font-bold shrink-0"
                  >
                    <Phone className="w-4 h-4 text-brand-green" />
                    <span>Call (479) 929-2516</span>
                  </a>
                </div>
              </div>

              {/* Right Side Instant Estimator */}
              <div id="estimate-section" className="lg:col-span-5">
                <SatelliteEstimator initialCity={city.cityName} />
              </div>
            </div>
          </div>
        </section>

        {/* LOCAL PROBLEM SECTION: H2 Rule #1 */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-black uppercase tracking-wider text-red-700 bg-red-50 px-3 py-1 rounded-full border border-red-200 inline-block mb-3">
                Localized Canopy &amp; Weather Analysis
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-navy tracking-tight">
                {city.h2Problem}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
                Local tree canopy profile in {city.cityName}: <strong className="text-slate-900 font-bold">{city.treeProfile}</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {city.painPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 hover:bg-white rounded-2xl p-6 sm:p-7 border-2 border-slate-200 shadow-2xs hover:shadow-contractor transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-orange-100 text-brand-green flex items-center justify-center font-bold mb-4">
                      <AlertTriangle className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-2">
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {point.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-3.5 border-t border-slate-200 text-xs font-bold text-brand-green flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Solved by 50-micron 316 surgical mesh</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 15-MIN SATELLITE SIZING SECTION: H2 Rule #2 & H3 Rule #3 */}
        <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-black uppercase tracking-wider text-brand-green bg-orange-50 px-3 py-1 rounded-full border border-orange-200 inline-block">
                  Zero In-Home Pressure
                </span>
                
                {/* H2 Satellite Sizing */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-navy tracking-tight">
                  {city.h2Satellite}
                </h2>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  You don&apos;t have to sacrifice your evening or listen to a 3-hour sales pitch from national franchise salesmen in your living room. We pull high-resolution GIS satellite maps of your {city.cityName} property, measure your roof perimeter down to the exact foot, and send your fixed-price quote straight to your phone.
                </p>

                {/* H3 Guarantee Hierarchy */}
                <div className="bg-white rounded-2xl p-6 sm:p-7 border-2 border-emerald-500 shadow-sm space-y-3">
                  <div className="flex items-center gap-2 text-emerald-800 font-extrabold">
                    <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
                    <h3 className="text-xl font-black text-slate-900">
                      {city.h3Guarantee}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    If your gutters ever clog while protected by our micro-mesh system on your {city.cityName} residence, our local crew will clean and service it 100% free of charge. The warranty transfers seamlessly if you sell your property.
                  </p>
                </div>
              </div>

              {/* Local Customer Review Card */}
              <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border-2 border-slate-200 shadow-contractor relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                    Verified {city.cityName} Review
                  </span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  &quot;{city.localReview.review}&quot;
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-black text-slate-900">{city.localReview.author}</div>
                    <div className="text-slate-500 font-medium">{city.localReview.neighborhood}</div>
                  </div>
                  <span className="text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    5.0 Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NWA LOCAL AUTHORITY BLOCK — NOAA data + per-city tree/zip grid proves geographic ground-truth */}
        <section className="py-12 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-black uppercase tracking-wider text-orange-400 block">Ozark Ground-Truth Operations — {city.cityName}, AR</span>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Why {city.cityName} Rooflines Demand Surgical-Grade Protection
              </h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
              Benton &amp; Washington County average <strong className="text-white">47.5 inches of rainfall per year</strong> — 25% above the national average — with flash events routinely exceeding 2 inches per hour during Ozark tornado season (March–May). One inch of rain on a 2,000 sq. ft. roof generates over 1,200 gallons. Standard retail guards overflow in minutes. Our 50-micron 316 stainless mesh is rated for 150 in/hr — the only technology engineered to match actual NWA storm intensity.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-xs">
              {([
                { city: 'Bentonville', threat: 'Post Oak & Sweetgum Catkins — concrete sludge', zip: '72712–72716' },
                { city: 'Bella Vista', threat: 'Loblolly & Shortleaf Pine Needles — pierce slotted screens', zip: '72714–72715' },
                { city: 'Rogers', threat: 'Silver Maple Helicopters + Beaver Lake mold', zip: '72756–72758' },
                { city: 'Fayetteville', threat: 'Old-Growth Sugar Maple & White Oak debris', zip: '72701–72704' },
                { city: 'Springdale', threat: 'Pin Oak, River Birch & agricultural grit', zip: '72762–72766' },
              ] as const).map((z) => (
                <div key={z.city} className={`rounded-xl p-3 space-y-1 border ${
                  z.city === city.cityName
                    ? 'bg-orange-950/60 border-orange-600'
                    : 'bg-slate-800/70 border-slate-700'
                }`}>
                  <span className="font-black text-white block">{z.city}</span>
                  <span className="text-slate-400 block leading-tight">{z.threat}</span>
                  <span className="text-orange-400 font-mono text-[10px] block">{z.zip}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-slate-800 pt-5 grid sm:grid-cols-3 gap-5 text-xs">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Benton County Coverage</span>
                <span className="text-white font-bold block">Primary Service Area</span>
                <span className="text-slate-400 leading-relaxed block">Bentonville · Bella Vista · Rogers · Centerton · Cave Springs · Pea Ridge · Gravette · Lowell</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Washington County Coverage</span>
                <span className="text-white font-bold block">Secondary Service Area</span>
                <span className="text-slate-400 leading-relaxed block">Fayetteville · Springdale · Farmington · Prairie Grove · Tontitown · Elkins · Siloam Springs</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">NOAA Annual Rainfall (NWA)</span>
                <span className="text-white font-black text-3xl block">47.5&quot;</span>
                <span className="text-slate-400 block">Per Year · Peak March–May · Flash Storms 2+ in/hr</span>
                <span className="text-orange-400 font-bold block mt-1">Our mesh rated: 150 in/hr</span>
              </div>
            </div>
          </div>
        </section>



        {/* FIELD INSTALLATION LOGS — E-E-A-T proof of physical presence in {city.cityName} */}
        {installationLogs.length > 0 && (
          <section className="py-14 bg-white border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <div className="max-w-2xl">
                <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">Recent Field Installation Reports</span>
                <h2 className="text-2xl sm:text-3xl font-black text-brand-navy tracking-tight">
                  {city.cityName} Installation Logs &amp; Engineering Reports
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  Documented field data from recent {city.cityName} installations — proof of physical operational presence and engineering expertise.
                </p>
              </div>
              <div className="space-y-5">
                {installationLogs.map((log) => (
                  <div key={log.id} className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider block mb-1">Install Log #{log.id.toUpperCase()}</span>
                        <h3 className="font-black text-slate-900 text-base sm:text-lg">{log.location}</h3>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold">✓ Verified Install</span>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-4 text-sm">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Roof Profile</span>
                        <p className="text-slate-700 font-medium leading-snug">{log.roofProfile}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 block">Problem Identified</span>
                        <p className="text-slate-700 leading-snug">{log.problem}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block">Execution</span>
                        <p className="text-slate-700 leading-snug">{log.execution}</p>
                      </div>
                    </div>
                    {log.flowRateTested && (
                      <div className="flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-xl px-4 py-2.5 text-sm">
                        <span className="font-bold text-orange-900">Flow Rate Tested:</span>
                        <span className="text-orange-800 font-mono">{log.flowRateTested}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* COMPARISON MATRIX */}
        <ComparisonMatrix />

        {/* FAQ ACCORDION */}
        <FaqSection onOpenQuote={() => setQuoteModalOpen(true)} />

        {/* INTERNAL LINKING LOOP (Serving All Northwest Arkansas) */}
        <section className="py-16 bg-brand-navyDark text-white border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-amber-400 mb-1">
                  Cross-County NWA Network
                </div>
                <h3 className="text-xl sm:text-2xl font-black">
                  Serving All of Northwest Arkansas
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Explore other city silos and neighboring communities near {city.cityName}:
                </p>
              </div>

              <Link
                href="/satellite-quote"
                className="btn-cta-pulse bg-brand-green hover:bg-brand-greenHover text-white px-7 py-3.5 rounded-xl font-black text-xs sm:text-sm flex items-center gap-2 shrink-0 shadow-sm"
              >
                <span>Instant Satellite Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Adjacent City Links Loop */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {city.adjacentCities.map((adj) => (
                <Link
                  key={adj.slug}
                  href={`/${adj.slug}`}
                  className="p-4 bg-slate-900/90 hover:bg-slate-800 rounded-xl border border-slate-800 hover:border-brand-green transition-all text-xs group flex flex-col justify-between"
                >
                  <div className="font-black text-white group-hover:text-amber-400 flex items-center justify-between">
                    <span>{adj.name} AR</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Gutter Protection
                  </div>
                </Link>
              ))}

              <Link
                href="/pine-needle-gutter-protection"
                className="p-4 bg-emerald-950/60 hover:bg-emerald-900/60 rounded-xl border border-emerald-800 text-xs group flex flex-col justify-between"
              >
                <div className="font-black text-emerald-300 flex items-center justify-between">
                  <span>Pine Needle Armor</span>
                  <TreePine className="w-4 h-4" />
                </div>
                <div className="text-[11px] text-emerald-400/80 mt-1">
                  Bella Vista &amp; Ridge Mesh
                </div>
              </Link>

              <Link
                href="/gutter-cleaning"
                className="p-4 bg-slate-900/90 hover:bg-slate-800 rounded-xl border border-slate-800 text-xs group flex flex-col justify-between"
              >
                <div className="font-black text-amber-400 flex items-center justify-between">
                  <span>Pro Cleanout &amp; Audit</span>
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  21-Point Drainage Diagnostic
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileBar onOpenQuote={() => setQuoteModalOpen(true)} />
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        cityName={city.cityName}
      />
    </div>
  );
}
