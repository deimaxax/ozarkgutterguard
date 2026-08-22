'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, ArrowRight, Check, ShieldCheck, Wrench, Droplet, Ruler, CheckCircle2 } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import SatelliteEstimator from '@/components/SatelliteEstimator';
import GutterCleaningCalculator from '@/components/GutterCleaningCalculator';

export default function GutterCleaningPage() {
  const phoneHref = "tel:+14799292516";
  const phoneDisplay = "(479) 929-2516";

  // Service-Specific JSON-LD Schema (LocalBusiness + Service + hasOfferCatalog + areaServed)
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Gutter Cleaning & 21-Point Roof-to-Foundation Diagnostic Audit',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Ozark Gutter Guard Co.',
      telephone: '+1-479-929-2516',
      url: 'https://ozarkgutterguard.com',
      image: 'https://ozarkgutterguard.com/images/contractor_truck.jpg',
      priceRange: '$149 - $250',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bentonville',
        addressRegion: 'AR',
        postalCode: '72712',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 36.3729,
        longitude: -94.2088,
      },
      areaServed: [
        { '@type': 'City', name: 'Bentonville', sameAs: 'https://en.wikipedia.org/wiki/Bentonville,_Arkansas' },
        { '@type': 'City', name: 'Rogers', sameAs: 'https://en.wikipedia.org/wiki/Rogers,_Arkansas' },
        { '@type': 'Bella Vista', sameAs: 'https://en.wikipedia.org/wiki/Bella_Vista,_Arkansas' },
        { '@type': 'City', name: 'Fayetteville', sameAs: 'https://en.wikipedia.org/wiki/Fayetteville,_Arkansas' },
        { '@type': 'City', name: 'Springdale', sameAs: 'https://en.wikipedia.org/wiki/Springdale,_Arkansas' },
        { '@type': 'City', name: 'Centerton', sameAs: 'https://en.wikipedia.org/wiki/Centerton,_Arkansas' },
      ],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Gutter Cleaning & Inspection Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '$149 Diagnostic Cleanout & 21-Point Audit',
            description: 'Hand-clearing sludge, high-pressure downspout power jetting, laser slope leveling, and fascia rot inspection across Northwest Arkansas.',
          },
          price: '149.00',
          priceCurrency: 'USD',
        },
      ],
    },
  };

  const auditPoints = [
    { title: "Interior Sludge Depth & Classification", desc: "Hand-cleared and bagged — organic mat depth measured as overflow risk indicator." },
    { title: "High-Velocity Downspout Power-Flush", desc: "All downspouts jetted and ground discharge verified clear to street or basin." },
    { title: "Laser Digital Slope Reading", desc: "Every trough section measured — 1/4\" per ft standard. Failures documented with photos." },
    { title: "Hidden Hanger Pull-Test", desc: "Every spike and ferrule tested. Loose fasteners documented for zinc screw upgrade quote." },
    { title: "Corner Miter & End Cap Seal Audit", desc: "All seam joints probed for leak paths — water infiltration behind fascia detected early." },
    { title: "Fascia Board Moisture Probe", desc: "Hidden rot detected behind gutters before it spreads into rafter tails — the most expensive miss." },
    { title: "Downspout Discharge Distance Check", desc: "Ground discharge measured from foundation footing — 6 ft minimum standard for clay soil zones." },
    { title: "Overflow Stain Documentation", desc: "Foundation, siding, and soffit overflow evidence photographed and sent to your phone." },
    { title: "100% Guard Upgrade Credit", desc: "Full $149 fee credited toward permanent 316 surgical micro-mesh if you choose to upgrade." },
  ];

  const cityLinks = [
    { city: 'Bentonville', slug: 'gutter-cleaning-bentonville-ar', zip: '72712' },
    { city: 'Bella Vista', slug: 'gutter-cleaning-bella-vista-ar', zip: '72714' },
    { city: 'Rogers', slug: 'gutter-cleaning-rogers-ar', zip: '72756' },
    { city: 'Fayetteville', slug: 'gutter-cleaning-fayetteville-ar', zip: '72701' },
    { city: 'Springdale', slug: 'gutter-cleaning-springdale-ar', zip: '72762' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      {/* Service Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <TopBar />
      <Header />

      <main className="flex-1">
        
        {/* Clean Hero & Booking Section */}
        <section className="bg-white py-10 sm:py-16 border-b-2 border-slate-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Scope & Facts */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="space-y-3">
                  <div className="border border-slate-300 bg-slate-100 px-3 py-1 text-[11px] font-mono font-bold text-slate-900 inline-block uppercase">
                    Licensed &amp; Insured Northwest Arkansas Contractor (#OGG-479-NWA)
                  </div>

                  <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.08] font-heading uppercase">
                    $149 Diagnostic Cleanout &amp; 21-Point Audit
                  </h1>

                  <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
                    Complete interior sludge removal, downspout power-flush, laser slope pitch realignment, and photo leak audit across Bentonville, Bella Vista, Rogers, Fayetteville, and Springdale.
                  </p>
                </div>

                {/* 21-Point Audit scope with Sharp Contractor 2px Borders */}
                <div className="border-2 border-slate-300 bg-white divide-y-2 divide-slate-200">
                  {auditPoints.map((item, idx) => (
                    <div key={idx} className="p-3.5 sm:p-4 flex items-start gap-3">
                      <span className="text-amber-600 font-bold text-base leading-none mt-0.5">✓</span>
                      <div>
                        <strong className="text-slate-950 text-sm block font-heading uppercase font-bold">{item.title}</strong>
                        <span className="text-slate-600 text-xs">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* City-specific cleaning page links */}
                <div className="border-2 border-slate-300 bg-slate-50 p-4 space-y-2">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">Serving All NWA Municipalities:</div>
                  <div className="flex flex-wrap gap-2">
                    {cityLinks.map((c) => (
                      <Link key={c.slug} href={`/${c.slug}`} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-300 text-xs font-mono font-bold text-slate-900 hover:border-slate-900 transition-colors">
                        {c.city} <span className="text-amber-600 font-mono">{c.zip}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Direct Call Strip */}
                <div className="p-4 bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs border-2 border-slate-900 font-mono">
                  <div>
                    <span className="font-bold text-white block text-sm font-heading uppercase">Prefer to schedule over the phone?</span>
                    <span className="text-slate-300 text-xs">Direct Bentonville shop dispatch team.</span>
                  </div>
                  <a
                    href={phoneHref}
                    className="btn-contractor-amber px-5 py-2.5 text-xs font-black shrink-0 flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call: {phoneDisplay}</span>
                  </a>
                </div>

              </div>

              {/* Right Column: Interactive Schedule / Quote Form */}
              <div className="lg:col-span-5">
                <GutterCleaningCalculator initialCity="Bentonville" />
              </div>

            </div>

          </div>
        </section>

        {/* Risk inversion: cleaning cost math → guards ROI */}
        <section className="py-12 sm:py-16 bg-slate-950 text-white border-b-2 border-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 block">Financial Analysis</span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight uppercase font-heading">
                Why Regular Cleaning Costs 70% More Than Permanent Guards
              </h2>
            </div>
            <div className="overflow-x-auto border-2 border-slate-800">
              <table className="w-full text-left border-collapse text-xs sm:text-sm font-sans">
                <thead>
                  <tr className="border-b-2 border-slate-800 bg-slate-900 text-white font-mono uppercase text-xs">
                    <th className="py-3 px-4 font-bold text-slate-300">5-Year Scenario</th>
                    <th className="py-3 px-4 font-bold text-red-400 bg-red-950/40">Bi-Annual Cleanings</th>
                    <th className="py-3 px-4 font-bold text-amber-400 bg-amber-950/40">Ozark Gutter Guard (Once)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr>
                    <td className="py-3 px-4 text-white font-mono font-bold">Total Cash Outlay</td>
                    <td className="py-3 px-4 text-red-300 font-bold bg-red-950/20">$2,500 – $3,000 <span className="text-red-400 text-[10px] block font-normal">($250 × 2/yr + inflation)</span></td>
                    <td className="py-3 px-4 text-amber-300 font-bold bg-amber-950/20">$1,250 – $1,650 <span className="text-amber-400 text-[10px] block font-normal">One-time flat rate</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white font-mono font-bold">Ladder Visits to Your Roof</td>
                    <td className="py-3 px-4 text-slate-400 bg-red-950/20">10+ visits — denting gutter lips, scraping shingle drip edges</td>
                    <td className="py-3 px-4 text-slate-300 bg-amber-950/20 font-medium">Zero. Installed once. Never touched again.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white font-mono font-bold">Foundation Protection</td>
                    <td className="py-3 px-4 text-slate-400 bg-red-950/20">Intermittent — gutters clog between visits, pooling against clay foundation</td>
                    <td className="py-3 px-4 text-slate-300 bg-amber-950/20 font-medium">Continuous 24/7/365 overflow prevention (150 in/hr)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white font-mono font-bold">Retained Home Value</td>
                    <td className="py-3 px-4 text-slate-400 bg-red-950/20">$0 — cleaning creates no equity</td>
                    <td className="py-3 px-4 text-amber-300 font-bold bg-amber-950/20">10-Year Transferable Warranty adds appraisal value</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pt-2">
              <Link href="/quote" className="btn-contractor-amber px-7 py-3.5 text-xs sm:text-sm font-black inline-flex items-center gap-2">
                <span>Get Your Permanent Guard Price in 15 Minutes</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Upgrade Credit Banner */}
        <section className="py-12 bg-amber-50 border-b-2 border-amber-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
            <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wider block">
              100% Investment Guarantee
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-heading uppercase">
              100% of Your $149 Diagnostic Cleanout Is Credited Toward Permanent Guards
            </h2>
            <p className="text-sm text-slate-700 max-w-2xl mx-auto leading-relaxed">
              If you decide to install our 316 surgical stainless micro-mesh within 12 months, the entire $149 fee is deducted directly from your invoice.
            </p>
            <div className="pt-2">
              <Link
                href="/quote"
                className="btn-contractor-amber px-6 py-3.5 text-xs sm:text-sm font-black inline-flex items-center gap-2"
              >
                <span>Calculate Permanent Guard Pricing →</span>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
