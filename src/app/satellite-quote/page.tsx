'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Star, ShieldCheck, Check, ArrowLeft } from 'lucide-react';
import SatelliteEstimator from '@/components/SatelliteEstimator';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function QuoteLandingPage() {
  const phoneHref = "tel:+14799292516";
  const phoneDisplay = "(479) 929-2516";

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <TopBar />
      <Header />

      <main className="flex-1 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-600 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>

          {/* Clean Headline & Guarantee Banner */}
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h1 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Get Your Instant Satellite Gutter Quote
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Enter your address below. Our satellite software measures your roofline and calculates your exact direct contractor price in 90 seconds.
            </p>
          </div>

          {/* FRONT & CENTER FORM CARD */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden max-w-xl mx-auto">
            <SatelliteEstimator initialCity="Bentonville" />
          </div>

          {/* 3 Simple Contractor Promises Under Form */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto pt-2 text-xs text-slate-700">
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-semibold">Zero Sales Pressure</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-semibold">10-Year No-Clog Guarantee</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <Phone className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="font-semibold">Local Bentonville Shop</span>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
