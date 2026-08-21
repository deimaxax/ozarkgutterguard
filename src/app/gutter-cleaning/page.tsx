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
        { '@type': 'City', name: 'Bella Vista', sameAs: 'https://en.wikipedia.org/wiki/Bella_Vista,_Arkansas' },
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

  const localJobCases = [
    {
      location: 'Shadow Valley Country Club — Rogers, AR (72758)',
      technician: 'Cody & Tyler (Lead Techs)',
      problem: 'Heavy Silver Maple helicopter seed dams and decomposing sludge causing water to spill over front patio.',
      resolution: 'Cleared 45 lbs of compacted seed compost, high-pressure jet-flushed 4 downspouts, resealed leaking miter corner.',
    },
    {
      location: 'Lake Loch Lomond Hillside — Bella Vista, AR (72714)',
      technician: 'Austin & Marcus',
      problem: 'Year-round Loblolly pine needles packed into upper roof valleys, causing rear eave sag on 28-foot hillside drop.',
      resolution: 'Complete vacuum and hand extraction, upgraded 6 pulled spike hangers to zinc hidden screws, 100% credited toward micro-mesh.',
    },
    {
      location: 'Downtown Historic District — Bentonville, AR (72712)',
      technician: 'Cody S.',
      problem: 'Post Oak spring catkin paste cemented with roof grit, completely blocking downspout elbows.',
      resolution: 'High-velocity jetting cleared elbow obstruction; full laser slope realignment restored proper 1/4" drop toward street discharge.',
    },
  ];

  const localReviews = [
    {
      author: 'David Harrison',
      neighborhood: 'Shadow Valley, Rogers, AR',
      text: 'LeafFilter quoted me $6,400 for our two-story house. Cody came out for the $149 cleanout and showed me on camera why our corners were leaking. We credited the $149 toward their surgical micro-mesh and saved over $4,800. Best contractor in NWA.',
      rating: 5,
    },
    {
      author: 'Robert Keller',
      neighborhood: 'Lake Loch Lomond, Bella Vista, AR',
      text: 'We have 50-foot Loblolly pines on a steep hill. I was paying handymen $250 every few months with mediocre results. The Ozark team flushed every downspout to verified discharge and fixed our fascia slope in under 2 hours.',
      rating: 5,
    },
    {
      author: 'Marcus Thorne',
      neighborhood: 'Downtown Bentonville (Near Coler Preserve)',
      text: 'Spring oak tassels were turning into concrete in our gutters every April. The cleanout was thorough, no mess on our siding, and the 21-point report gave us total peace of mind before storm season.',
      rating: 5,
    },
  ];

// 21-Point Audit reframes $99 cleaning as a diagnostic, not commodity scooping
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
      {/* 1% Authority Service Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <TopBar />
      <Header />

      <main className="flex-1">
        
        {/* Clean Hero & Booking Section */}
        <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50/50 py-10 sm:py-16 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Scope & Facts */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-50 border border-emerald-200 text-brand-green text-xs font-bold">
                    <ShieldCheck className="w-4 h-4 text-brand-green" />
                    <span>Licensed &amp; Insured Northwest Arkansas Contractor</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl font-black text-brand-navy tracking-tight leading-[1.12]">
                    $149 Diagnostic Cleanout &amp; 21-Point Audit
                  </h1>

                  <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
                    Complete interior sludge removal, downspout power-flush, laser slope pitch realignment, and photo leak audit across Bentonville, Bella Vista, Rogers, Fayetteville, and Springdale.
                  </p>
                </div>

                {/* 21-Point Audit scope */}
                <div className="border border-slate-200 rounded-lg bg-white divide-y divide-slate-100 shadow-xs">
                  {auditPoints.map((item, idx) => (
                    <div key={idx} className="p-3.5 sm:p-4 flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <div>
                        <strong className="text-slate-900 text-sm block font-bold">{item.title}</strong>
                        <span className="text-slate-600 text-xs">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* City-specific cleaning page links — Traffic Horse internal linking */}
                <div className="border border-slate-200 rounded-lg bg-slate-50 p-4 space-y-2">
                  <div className="text-xs font-black uppercase tracking-wider text-slate-500">Serving All NWA Cities:</div>
                  <div className="flex flex-wrap gap-2">
                    {cityLinks.map((c) => (
                      <Link key={c.slug} href={`/${c.slug}`} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-800 hover:border-brand-green hover:text-brand-green transition-colors">
                        {c.city} <span className="text-slate-400 font-mono">{c.zip}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Direct Call Strip */}
                <div className="p-4 rounded-lg bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="font-bold text-white block text-sm">Prefer to schedule over the phone?</span>
                    <span className="text-slate-300">Local Northwest Arkansas dispatch team.</span>
                  </div>
                  <a
                    href={phoneHref}
                    className="btn-contractor-green px-5 py-2.5 text-xs font-bold shrink-0 flex items-center gap-2"
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
        <section className="py-14 bg-slate-950 text-white border-b border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="text-center space-y-2">
              <span className="text-xs font-black uppercase tracking-wider text-orange-400 block">The Real Math</span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                Why Regular Cleaning Costs 70% More Than Permanent Guards
              </h2>
            </div>
            <div className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-3 px-4 font-bold text-slate-300 bg-slate-900/80">5-Year Scenario</th>
                    <th className="py-3 px-4 font-bold text-red-400 bg-red-950/30">Bi-Annual Cleanings</th>
                    <th className="py-3 px-4 font-bold text-emerald-400 bg-emerald-950/30">Ozark Gutter Guard (Once)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr>
                    <td className="py-3 px-4 text-slate-300 font-semibold">Total Cash Outlay</td>
                    <td className="py-3 px-4 text-red-300 font-bold bg-red-950/10">$2,500 – $3,000 <span className="text-red-500 text-[10px] block font-normal">($250 × 2/yr + inflation)</span></td>
                    <td className="py-3 px-4 text-emerald-300 font-bold bg-emerald-950/10">$1,250 – $1,650 <span className="text-emerald-500 text-[10px] block font-normal">One-time or $48/mo</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-slate-300 font-semibold">Ladder Visits to Your Roof</td>
                    <td className="py-3 px-4 text-slate-400 bg-red-950/10">10+ contractor visits — denting gutter lips, scraping shingle drip edges</td>
                    <td className="py-3 px-4 text-slate-300 bg-emerald-950/10 font-medium">Zero. Installed once. Never touched again.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-slate-300 font-semibold">Foundation Protection</td>
                    <td className="py-3 px-4 text-slate-400 bg-red-950/10">Intermittent — gutters clog between visits, pooling against clay foundation</td>
                    <td className="py-3 px-4 text-slate-300 bg-emerald-950/10 font-medium">Continuous 24/7/365 overflow prevention</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-slate-300 font-semibold">Retained Home Value</td>
                    <td className="py-3 px-4 text-slate-400 bg-red-950/10">$0 — cleaning creates no equity</td>
                    <td className="py-3 px-4 text-emerald-300 font-bold bg-emerald-950/10">10-Year Transferable Warranty adds verifiable appraisal value</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-center pt-2">
              <Link href="/quote" className="btn-contractor-green px-7 py-3.5 text-xs font-bold inline-flex items-center gap-2 shadow-sm">
                <span>Get Your Permanent Guard Price in 15 Minutes</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Geo-Tagged Job Proof & Mini Case Studies (1% Authority Model) */}
        <section className="py-14 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                Verified NWA Field Proof
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Recent Northwest Arkansas Job Reports
              </h2>
              <p className="text-sm text-slate-600">
                Real jobs completed across Bentonville, Rogers, and Bella Vista — documented with technician notes and problem diagnosis.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {localJobCases.map((job, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3 shadow-2xs hover:border-slate-300 transition">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900 font-mono text-[11px]">{job.location.split('—')[0]}</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold font-mono">✓ Verified Job</span>
                  </div>
                  <div className="text-xs text-orange-600 font-semibold">{job.location.split('—')[1]}</div>
                  <div className="text-xs space-y-1.5 pt-1">
                    <div>
                      <strong className="text-slate-800 block font-bold">Tech:</strong>
                      <span className="text-slate-600">{job.technician}</span>
                    </div>
                    <div>
                      <strong className="text-red-600 block font-bold">Problem Found:</strong>
                      <span className="text-slate-600 leading-relaxed">{job.problem}</span>
                    </div>
                    <div>
                      <strong className="text-emerald-700 block font-bold">Resolution:</strong>
                      <span className="text-slate-600 leading-relaxed">{job.resolution}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* On-Page Customer Reviews with Technician & Neighborhood Relevance */}
        <section className="py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Local Neighborhood Trust
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                What Your NWA Neighbors Say About Our Cleanouts
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {localReviews.map((rev, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs space-y-3 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      ))}
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed italic">
                      &quot;{rev.text}&quot;
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100">
                    <strong className="text-xs font-bold text-slate-900 block">{rev.author}</strong>
                    <span className="text-[11px] text-slate-400 block">{rev.neighborhood}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Review velocity CTA — drives Google Map Pack ranking */}
        <section className="py-12 bg-amber-50 border-b border-amber-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-amber-400 fill-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
            <h2 className="text-2xl font-black text-slate-900">Happy With Your Cleanout?</h2>
            <p className="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
              Leave us a Google review mentioning your city and what we did — <strong>gutter cleaning</strong>, <strong>gutter guards</strong>, or <strong>fascia repair</strong>. It takes 60 seconds and directly helps us serve your neighbors faster.
            </p>
            <a
              href="https://g.page/r/ozarkgutterguard/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-bold text-sm border border-slate-700"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              <span>Leave a Google Review</span>
            </a>
            <p className="text-xs text-slate-400">After clicking, mention: your city name + the service we performed. This helps us rank for your neighbors&apos; searches.</p>
          </div>
        </section>

        {/* Upgrade Credit Banner */}
        <section className="py-12 bg-emerald-50 border-b border-emerald-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
            <h2 className="text-2xl font-black text-brand-navy">
              100% of Your $149 Diagnostic Cleanout Is Credited Toward Permanent Guards
            </h2>
            <p className="text-sm text-slate-700 max-w-2xl mx-auto leading-relaxed">
              If you decide to install our 316 surgical stainless micro-mesh, the entire $149 fee is deducted directly from your quote.
            </p>
            <div className="pt-2">
              <Link
                href="/quote"
                className="btn-contractor-green px-6 py-3 text-xs font-bold inline-flex items-center gap-2 shadow-xs"
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
