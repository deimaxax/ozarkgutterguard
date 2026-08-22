'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, CheckCircle2, Phone, Star, ArrowRight, Clock, MapPin, Sparkles, AlertTriangle } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DirectMailPage() {
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const phoneHref = "tel:+14799292516";
  const phoneDisplay = "(479) 929-2516";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          address,
          service: 'Direct Mail $149 Cleanout Voucher & Audit',
        }),
      });
    } catch {
      // Proceed
    }
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <TopBar />
      <Header />

      <main className="flex-1 py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Direct Mail Voucher Card */}
          <div className="bg-white rounded-2xl border-2 border-dashed border-emerald-500 p-6 sm:p-10 shadow-lg relative overflow-hidden">
            
            <div className="absolute top-0 right-0 bg-brand-green text-white text-xs font-black uppercase px-6 py-1.5 rounded-bl-xl tracking-wider shadow-xs">
              Direct Mail Special Voucher
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-50 text-brand-green text-xs font-bold border border-emerald-200">
                <Sparkles className="w-4 h-4 text-brand-green" />
                <span>Priority Dispatch: Benton &amp; Washington Counties</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight leading-tight">
                $149 Diagnostic Cleanout &amp; 21-Point Roofline Audit
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Thank you for scanning your direct mail card. Present this voucher for a complete interior hand cleanout, high-velocity downspout jetting, laser slope realignment, and a 21-point video audit. <strong className="text-brand-navy">100% of your $149 fee is credited</strong> toward permanent 316 marine-grade 316 micro-mesh guards if you ever choose to install them.
              </p>
            </div>

            {/* Form Box */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-brand-green mx-auto" />
                  <h3 className="text-xl font-black text-brand-navy">Voucher Activated &amp; Dispatched!</h3>
                  <p className="text-sm text-slate-700">
                    We have received your address. A local dispatch technician will call or text <strong>{phone}</strong> within 15 minutes to confirm your same-week cleanout time.
                  </p>
                  <a
                    href={phoneHref}
                    className="inline-flex items-center gap-2 btn-contractor-green px-6 py-2.5 text-sm font-bold mt-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Direct: {phoneDisplay}</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Smith"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Phone (for dispatch)</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(479) 929-2516"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Street Address &amp; City</label>
                      <input
                        type="text"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="1404 SW A St, Bentonville"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto btn-contractor-green px-8 py-3 text-sm font-bold shadow-sm cursor-pointer"
                    >
                      {loading ? 'Activating...' : 'Claim $149 Voucher & Schedule →'}
                    </button>
                    <a
                      href={phoneHref}
                      className="text-xs text-slate-600 hover:text-brand-green font-bold flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-brand-green" />
                      <span>Or call shop directly: {phoneDisplay}</span>
                    </a>
                  </div>
                </form>
              )}
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 mt-6 border-t border-slate-100 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                <span>Full Interior Sludge &amp; Catkin Extraction</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                <span>Laser Slope &amp; Drainage Pitch Realignment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                <span>High-Velocity Underground Downspout Flush</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                <span>100% of $149 Credited Toward Permanent Guards</span>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
