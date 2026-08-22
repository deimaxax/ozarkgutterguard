'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Check, ShieldCheck, ArrowLeft, CheckCircle2 } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GutterCleaningCalculator from '@/components/GutterCleaningCalculator';

export default function GutterCleaningPage() {
  const phoneHref = "tel:+14799292516";
  const phoneDisplay = "(479) 929-2516";

  const auditPoints = [
    { title: "Complete Hand Sludge Extraction", desc: "Bagged and hauled away with zero lawn or flowerbed mess." },
    { title: "High-Velocity Downspout Power-Flush", desc: "All downspouts cleared to ensure free water discharge." },
    { title: "Laser Slope & Sagging Inspection", desc: "Every gutter pitch checked so standing water is eliminated." },
    { title: "Hidden Hanger & Bracket Pull-Test", desc: "Loose spikes and brackets secured or flagged for repair." },
    { title: "Corner Miter & Seam Leak Check", desc: "Detects hidden water infiltration behind your fascia boards." },
    { title: "Photo Report Sent to Your Phone", desc: "Clear before & after photos delivered directly to your phone." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <TopBar />
      <Header />

      <main className="flex-1 py-6 sm:py-10 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-600 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>

          {/* Quick Header */}
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider">
              <span>$149 Flat Rate • 100% Credited Toward Guards</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Book Your $149 Gutter Cleanout &amp; Inspection
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Enter your address below to lock in your $149 flat-rate cleanout. 100% of this fee is credited toward gutter guards if you upgrade within 12 months.
            </p>
          </div>

          {/* 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Form Column */}
            <div id="book" className="lg:col-span-5 lg:order-2">
              <GutterCleaningCalculator initialCity="Bentonville" />
            </div>

            {/* Scope & Audit Details Column */}
            <div className="lg:col-span-7 lg:order-1 space-y-6">
              
              {/* 6 Audit Points Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
                <h3 className="font-bold text-base text-slate-900">
                  What&apos;s Included in Your $149 Cleanout:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                  {auditPoints.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-slate-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 font-bold border border-slate-200">
                        ✓
                      </div>
                      <div>
                        <strong className="text-slate-900 block font-bold">{item.title}</strong>
                        <span className="text-slate-500 leading-snug">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Dispatch Phone Box */}
              <div className="bg-[#0F1E36] text-white rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
                <div>
                  <strong className="block font-bold text-sm">Need Same-Day Emergency Service?</strong>
                  <span className="text-xs text-slate-300">Call our Bentonville shop directly for immediate scheduling.</span>
                </div>
                <a
                  href={phoneHref}
                  className="btn-contractor-primary px-5 py-2.5 text-xs font-bold flex items-center gap-2 shrink-0 shadow-xs"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>Call: {phoneDisplay}</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
