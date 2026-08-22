'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Phone, 
  Star, 
  Check, 
  X, 
  ArrowRight, 
  MapPin, 
  Sparkles
} from 'lucide-react';
import SatelliteEstimator from '@/components/SatelliteEstimator';
import Footer from '@/components/Footer';

export default function QuoteLandingPage() {
  const phoneHref = "tel:+14799292516";
  const phoneDisplay = "(479) 929-2516";

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      
      {/* 1. Direct Contractor Header with Accreditations & Direct Dispatch */}
      <header className="bg-white border-b-2 border-slate-900 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 bg-white border-2 border-slate-900 rounded p-1 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Ozark Gutter Guard Co."
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="text-xl font-black text-slate-950 tracking-tight leading-none block font-heading uppercase">
                OZARK <span className="text-amber-600">GUTTER GUARD CO.</span>
              </span>
              <span className="text-xs text-slate-600 font-mono font-bold mt-1 block uppercase">
                Bentonville, AR • 316 Surgical Micro-Mesh
              </span>
            </div>
          </Link>

          {/* Center: Trust Badges */}
          <div className="hidden md:flex items-center gap-6 text-xs text-slate-700 font-mono font-bold border-x-2 border-slate-300 px-6 h-10">
            <div className="flex items-center gap-1.5">
              <span className="text-amber-600">●</span>
              <span>100% MADE IN USA</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-amber-600">●</span>
              <span>10-YR NO-CLOG GUARANTEE</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-amber-500">★★★★★</span>
              <span className="text-slate-900">5.0 RATED (187+ REVIEWS)</span>
            </div>
          </div>

          {/* Right: Phone CTA Button */}
          <div className="flex items-center gap-3">
            <a
              id="call-for-a-free-estimate"
              href={phoneHref}
              className="btn-contractor-navy py-2.5 px-4 text-xs sm:text-sm font-bold flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <div className="text-left font-mono">
                <span className="hidden sm:block text-[10px] text-slate-300 uppercase leading-none">Direct Dispatch</span>
                <span className="text-white font-black text-xs sm:text-sm leading-none">{phoneDisplay}</span>
              </div>
            </a>
          </div>

        </div>
      </header>

      {/* 2. Top Promotional Ticker */}
      <div className="bg-slate-900 text-white text-xs sm:text-sm py-2.5 px-4 font-mono font-bold text-center border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong>LIMITED TIME CONTRACTOR SPECIAL:</strong> $250 OFF Installation + 12 Months 0% APR + Free Laser Realignment!
          </span>
        </div>
      </div>

      <main className="flex-1">
        
        {/* 3. Hero & Multi-Step Quote Funnel */}
        <section className="bg-white py-10 sm:py-16 border-b-2 border-slate-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Side: Headline & 6 Key Benefit Bullets */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="space-y-3">
                  <div className="border border-slate-300 bg-slate-100 p-2 text-[11px] font-mono font-bold text-slate-900 inline-block uppercase">
                    Guaranteed Clog-Free Northwest Arkansas Gutter System
                  </div>

                  <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.08] font-heading uppercase">
                    Never clean gutters again.
                  </h1>

                  <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
                    Protect your property from foundation cracking, fascia rot, and basement flooding. 316 surgical marine-grade stainless steel micro-mesh eliminates gutter cleaning permanently.
                  </p>
                </div>

                {/* 6 Structured Contractor Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  
                  <div className="border-2 border-slate-300 p-3.5 bg-slate-50">
                    <span className="text-amber-600 font-mono font-bold text-xs uppercase block">01 // Zero Clog</span>
                    <h3 className="font-bold text-slate-950 text-sm mt-0.5 font-heading uppercase">50-Micron Mesh</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Deflects 100% of Loblolly pine needles, roof grit, and spring oak catkins.
                    </p>
                  </div>

                  <div className="border-2 border-slate-300 p-3.5 bg-slate-50">
                    <span className="text-amber-600 font-mono font-bold text-xs uppercase block">02 // Safe Mount</span>
                    <h3 className="font-bold text-slate-950 text-sm mt-0.5 font-heading uppercase">0% Shingle Contact</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Fascia mounted only, protecting 100% of your GAF/Owens Corning roof warranty.
                    </p>
                  </div>

                  <div className="border-2 border-slate-300 p-3.5 bg-slate-50">
                    <span className="text-amber-600 font-mono font-bold text-xs uppercase block">03 // Full Alignment</span>
                    <h3 className="font-bold text-slate-950 text-sm mt-0.5 font-heading uppercase">Laser Slope Tune-Up</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Re-aligns sagged gutters to precise 1/4&quot; per ft drainage pitch on every job.
                    </p>
                  </div>

                  <div className="border-2 border-slate-300 p-3.5 bg-slate-50">
                    <span className="text-amber-600 font-mono font-bold text-xs uppercase block">04 // High Capacity</span>
                    <h3 className="font-bold text-slate-950 text-sm mt-0.5 font-heading uppercase">150 In/Hr Flow</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Easily handles torrential Ozark thunderstorm downpours without overshooting.
                    </p>
                  </div>

                  <div className="border-2 border-slate-300 p-3.5 bg-slate-50">
                    <span className="text-amber-600 font-mono font-bold text-xs uppercase block">05 // Direct Pricing</span>
                    <h3 className="font-bold text-slate-950 text-sm mt-0.5 font-heading uppercase">$1,250 – $1,450 Flat</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Direct local contractor rates. Save $3,000+ compared to corporate franchises.
                    </p>
                  </div>

                  <div className="border-2 border-slate-300 p-3.5 bg-slate-50">
                    <span className="text-amber-600 font-mono font-bold text-xs uppercase block">06 // Written Guarantee</span>
                    <h3 className="font-bold text-slate-950 text-sm mt-0.5 font-heading uppercase">10-Year No-Clog</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Written 100% transferable guarantee backed by our local Northwest Arkansas crew.
                    </p>
                  </div>

                </div>

                {/* Jobsite Photo Proof */}
                <div className="border-2 border-slate-900 bg-slate-900 overflow-hidden">
                  <div className="relative h-52 sm:h-60 w-full bg-slate-800">
                    <Image
                      src="/images/contractor_truck.jpg"
                      alt="Ozark Gutter Guard Co. installation crew at Northwest Arkansas jobsite"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3 bg-slate-900 text-white flex items-center justify-between text-xs font-mono font-bold border-t-2 border-slate-800">
                    <span>LOCAL NWA CREW • LICENSED &amp; INSURED</span>
                    <span className="text-amber-400">1102 S WALTON BLVD, BENTONVILLE</span>
                  </div>
                </div>

              </div>

              {/* Right Side: Lead Capture & Quote Calculator */}
              <div id="hero__form" className="lg:col-span-5">
                <SatelliteEstimator />
              </div>

            </div>

          </div>
        </section>

        {/* 4. Limited Time Deals & Financing Section */}
        <section className="py-12 sm:py-16 bg-slate-50 border-b-2 border-slate-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-8 space-y-1">
              <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-wider block">Seasonal Offers</span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-slate-900 font-heading">
                Direct Contractor Specials &amp; Financing
              </h2>
              <p className="text-sm text-slate-700">
                Lock in seasonal Northwest Arkansas direct contractor rates with zero upfront payment:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Deal Card 1: $250 Off Armor Special */}
              <div className="bg-white border-2 border-slate-300 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className="inline-block bg-slate-900 text-amber-400 font-mono text-xs font-bold uppercase px-2.5 py-1">
                    Direct Discount
                  </span>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-slate-950 font-heading">
                    $250 Off Complete Gutter Protection
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    Includes full gutter hand cleanout, 1/4&quot; laser slope pitch realignment, zinc hidden rafter hanger installation, and surgical 316 micro-mesh.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between font-mono">
                  <span className="text-xs font-bold text-slate-700">CODE: NWA-ARMOR-250</span>
                  <a href="#hero__form" className="btn-contractor-amber px-4 py-2.5 text-xs font-bold">
                    Claim Discount →
                  </a>
                </div>
              </div>

              {/* Deal Card 2: Zero Down 0% Financing */}
              <div className="bg-slate-900 text-white p-6 sm:p-8 flex flex-col justify-between space-y-4 border-2 border-slate-900">
                <div className="space-y-3">
                  <span className="inline-block bg-amber-500 text-slate-950 font-mono font-black text-xs uppercase px-2.5 py-1">
                    0% APR Option
                  </span>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white font-heading">
                    Starting At $48 / Month (0% For 12 Months)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    Zero down payment required. Instant digital pre-approval with zero impact on your personal credit score.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between font-mono">
                  <span className="text-xs text-slate-400">No Prepayment Penalties</span>
                  <a href="#hero__form" className="btn-contractor-amber px-4 py-2.5 text-xs font-bold">
                    Check Pre-Approval →
                  </a>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 5. Direct Comparison Table */}
        <section className="py-12 sm:py-16 bg-white border-b-2 border-slate-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-8 space-y-1">
              <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-wider block">Head-To-Head</span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-slate-900 font-heading">
                Why Ozark 316 Mesh Beats National Franchises
              </h2>
              <p className="text-sm text-slate-700">
                See how Ozark surgical micro-mesh compares against reverse curve solid hoods and retail screen covers:
              </p>
            </div>

            <div className="border-2 border-slate-900 overflow-hidden bg-white">
              <table className="w-full text-left border-collapse text-xs sm:text-sm font-sans">
                <thead>
                  <tr className="bg-slate-900 text-white text-xs font-mono font-bold uppercase tracking-wider">
                    <th className="py-4 px-5 w-1/4">Key Requirement</th>
                    <th className="py-4 px-5 bg-amber-600 text-white border-x-2 border-slate-900 w-1/3">
                      Ozark Gutter Guard Co.
                    </th>
                    <th className="py-4 px-5 text-slate-300 w-1/4">Solid Curved Hoods</th>
                    <th className="py-4 px-5 text-slate-400 w-1/6">Retail DIY Plastic</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-800">
                  {[
                    { benefit: "Deflects 100% Pine Needles & Pollen", ozark: true, hood: false, screen: false },
                    { benefit: "Eliminates Foundation Overflows (150 in/hr)", ozark: true, hood: false, screen: false },
                    { benefit: "100% Shingle-Safe Fascia Mount", ozark: true, hood: false, screen: false },
                    { benefit: "Never Have to Clean Gutters Again", ozark: true, hood: false, screen: false },
                    { benefit: "Laser Slope Realignment Included", ozark: true, hood: false, screen: false },
                    { benefit: "10-Year Transferable Guarantee", ozark: true, hood: false, screen: false },
                    { benefit: "Direct Contractor Price ($1,250 – $1,650)", ozark: true, hood: false, screen: true }
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      <td className="py-3.5 px-5 font-bold text-slate-900 font-mono text-xs">{row.benefit}</td>
                      <td className="py-3.5 px-5 bg-amber-50/70 border-x-2 border-slate-900 font-bold text-slate-950">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-amber-600 shrink-0 stroke-[3]" />
                          <span>Included Standard</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-5 text-slate-600">
                        {row.hood ? (
                          <Check className="w-4 h-4 text-amber-600 stroke-[3]" />
                        ) : (
                          <X className="w-4 h-4 text-red-500 stroke-[2]" />
                        )}
                      </td>
                      <td className="py-3.5 px-5 text-slate-600">
                        {row.screen ? (
                          <Check className="w-4 h-4 text-amber-600 stroke-[3]" />
                        ) : (
                          <X className="w-4 h-4 text-red-500 stroke-[2]" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </section>

        {/* 6. Social Proof & Reviews */}
        <section className="py-12 sm:py-16 bg-slate-50 border-b-2 border-slate-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            <div className="max-w-2xl space-y-2">
              <div className="flex items-center gap-1 text-amber-500 font-mono">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
                <span className="text-xs font-bold text-slate-900 ml-1">5.0 RATED</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-slate-900 font-heading">
                Verified Northwest Arkansas Homeowners
              </h2>
              <p className="text-xs sm:text-sm text-slate-700">
                Over 187+ five-star verified installations across Bentonville, Bella Vista, Rogers, and Fayetteville.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              <div className="bg-white border-2 border-slate-300 p-6 space-y-3">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                  &quot;Saved over $3,800 compared to the LeafFilter corporate quote I was given. The satellite measurement was done within 15 minutes, and installation took exactly 3.5 hours. Not a single pine needle got through!&quot;
                </p>
                <div className="pt-3 border-t border-slate-200 text-xs font-mono">
                  <div className="font-bold text-slate-950 uppercase font-heading">David R.</div>
                  <div className="text-slate-600 text-[11px]">Bella Vista, AR</div>
                </div>
              </div>

              <div className="bg-white border-2 border-slate-300 p-6 space-y-3">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                  &quot;We live on a steep hillside surrounded by 50-foot Loblolly pines. Ozark Gutter Guard installed surgical stainless steel mesh in one afternoon. Two torrential storms later, gutters run crystal clear!&quot;
                </p>
                <div className="pt-3 border-t border-slate-200 text-xs font-mono">
                  <div className="font-bold text-slate-950 uppercase font-heading">Sarah M.</div>
                  <div className="text-slate-600 text-[11px]">Bentonville, AR</div>
                </div>
              </div>

              <div className="bg-white border-2 border-slate-300 p-6 space-y-3">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                  &quot;Our house under Mount Sequoyah oaks used to clog literally every 2 weeks in October. This stainless micro-mesh has been 100% clog free through all fall storms. Outstanding local company!&quot;
                </p>
                <div className="pt-3 border-t border-slate-200 text-xs font-mono">
                  <div className="font-bold text-slate-950 uppercase font-heading">Marcus L.</div>
                  <div className="text-slate-600 text-[11px]">Fayetteville, AR</div>
                </div>
              </div>

            </div>

            <div className="pt-4">
              <a
                href="#hero__form"
                className="btn-contractor-amber px-8 py-3.5 text-xs sm:text-sm font-black inline-flex items-center gap-2"
              >
                <span>Get Your Free Written Quote Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </section>

      </main>

      {/* 7. Clean Contractor Footer */}
      <Footer />
    </div>
  );
}
