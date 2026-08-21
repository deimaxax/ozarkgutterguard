'use client';

import React, { useState } from 'react';
import { Calculator, CheckCircle2, ShieldCheck, ArrowRight, Phone, Check, Sparkles } from 'lucide-react';

interface GutterCleaningCalculatorProps {
  initialCity?: string;
}

export default function GutterCleaningCalculator({ initialCity = 'Bentonville' }: GutterCleaningCalculatorProps) {
  const [stories, setStories] = useState<'1-story' | '2-story' | '3-story'>('1-story');
  const [footage, setFootage] = useState<number>(150);
  const [trees, setTrees] = useState<'moderate' | 'heavy-pine' | 'heavy-oak'>('moderate');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Diagnostic price is standard $149 for single-story, with slight adjustment for multi-story rigging
  const cleanPrice = stories === '1-story' ? 149 : stories === '2-story' ? 189 : 249;
  
  // Guard price calculation for instant comparison ($18/ft baseline)
  const estimatedGuardPriceLow = Math.round(footage * 16.5);
  const estimatedGuardPriceHigh = Math.round(footage * 19.5);
  const monthlyPayment = Math.round(estimatedGuardPriceLow / 24);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim()) {
      setErrorMsg('Please enter your property address.');
      return;
    }
    setErrorMsg('');
    setStep(2);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit phone number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          address: `${address}, ${initialCity}, AR`,
          name: name || 'Gutter Cleaning Lead',
          phone,
          stories,
          serviceType: 'Gutter Cleaning + 21-Point Audit',
          estimatedCleanPrice: `$${cleanPrice}`,
          footage: `${footage} LF`,
          treeThreat: trees,
          source: '/gutter-cleaning'
        }),
      });
    } catch {
      // Graceful fallback
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-orange-500/80 shadow-xl overflow-hidden">
      {/* Top Header */}
      <div className="bg-slate-950 text-white p-5 border-b border-slate-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center font-black text-white text-sm">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white leading-tight">
                Interactive Cleanout &amp; Upgrade Calculator
              </h3>
              <p className="text-xs text-slate-400">
                Live pricing for {initialCity} &amp; all NWA properties
              </p>
            </div>
          </div>
          <span className="text-[11px] font-bold bg-emerald-950 border border-emerald-500/40 text-emerald-400 px-2.5 py-1 rounded-full">
            100% Fee Credited
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-black text-slate-900">Your Estimate is Confirmed!</h4>
            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              We texted your estimate confirmation for <strong>{address}</strong>. Our local technician will contact you shortly to confirm your preferred cleanout time.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-xs space-y-1 max-w-xs mx-auto">
              <div className="text-slate-500 font-semibold">Estimated Cleanout &amp; Audit:</div>
              <div className="text-2xl font-black text-orange-600">${cleanPrice} Flat</div>
              <div className="text-[11px] text-emerald-700 font-bold">★ 100% credited if you ever upgrade to guards</div>
            </div>
            <a
              href="tel:+14799292516"
              className="inline-flex items-center gap-2 bg-slate-950 text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-sm hover:bg-slate-800 transition"
            >
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              <span>Call Dispatch: (479) 929-2516</span>
            </a>
          </div>
        ) : step === 1 ? (
          <form onSubmit={handleNextStep} className="space-y-5">
            {/* 1. Stories Toggle */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                1. Home Height &amp; Stories
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['1-story', '2-story', '3-story'] as const).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setStories(s)}
                    className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all ${
                      stories === s
                        ? 'bg-orange-600 text-white border-orange-600 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {s === '1-story' ? '1 Story' : s === '2-story' ? '2 Story' : '3+ / Steep'}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Linear Footage Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <label className="font-bold text-slate-800 uppercase tracking-wider">
                  2. Approximate Linear Footage
                </label>
                <span className="font-black text-orange-600 font-mono text-sm">{footage} LF</span>
              </div>
              <input
                type="range"
                min="80"
                max="350"
                step="10"
                value={footage}
                onChange={(e) => setFootage(Number(e.target.value))}
                className="w-full accent-orange-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>80 LF (Small)</span>
                <span>150–200 LF (Typical NWA)</span>
                <span>350 LF (Estate)</span>
              </div>
            </div>

            {/* 3. Local Tree Debris Profile */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                3. Primary Tree Threat
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: 'moderate', label: 'Hardwoods / Leaves' },
                  { key: 'heavy-oak', label: 'Oak Catkins (Sludge)' },
                  { key: 'heavy-pine', label: 'Pine Needles (Pines)' },
                ].map((t) => (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => setTrees(t.key as any)}
                    className={`p-2 text-[11px] font-bold rounded-xl border text-center leading-tight transition-all ${
                      trees === t.key
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Pricing Breakdown Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2.5">
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Cleanout &amp; 21-Point Audit:</span>
                  <span className="text-[10px] text-slate-500">Includes downspout jet &amp; laser pitch check</span>
                </div>
                <div className="text-right">
                  <span className="text-xl font-black text-orange-600">${cleanPrice}</span>
                  <span className="text-[10px] text-emerald-700 font-bold block">100% credited</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs text-slate-600">
                <span>If upgraded to permanent 316 mesh:</span>
                <span className="font-bold text-slate-900">${estimatedGuardPriceLow} – ${estimatedGuardPriceHigh} <span className="text-[10px] text-slate-400 font-normal">(${monthlyPayment}/mo)</span></span>
              </div>
            </div>

            {/* Address Input */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-800 block">Property Street Address</label>
              <input
                type="text"
                placeholder="e.g. 1404 SW A St, Bentonville"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-orange-500"
              />
            </div>

            {errorMsg && <p className="text-xs text-red-600 font-semibold">{errorMsg}</p>}

            <button
              type="submit"
              className="w-full btn-contractor-green py-3 text-sm font-bold flex items-center justify-center gap-2 shadow-sm"
            >
              <span>See Written Breakdown &amp; Lock In $149 Rate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-3 text-xs space-y-1">
              <div className="font-bold text-orange-900">Property: {address}</div>
              <div className="text-slate-600">Cleanout Rate: <strong className="text-orange-700">${cleanPrice} Flat</strong> (100% Credited Toward Guards)</div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-800 block">Your Name</label>
              <input
                type="text"
                placeholder="First & Last Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-orange-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-800 block">Mobile Phone Number (For Instant SMS Confirmation)</label>
              <input
                type="tel"
                placeholder="(479) 555-0123"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-orange-500"
              />
            </div>

            {errorMsg && <p className="text-xs text-red-600 font-semibold">{errorMsg}</p>}

            <div className="space-y-2 pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-contractor-green py-3 text-sm font-bold flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Confirming...' : 'Get Instant Written Quote via SMS'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full text-xs text-slate-500 hover:text-slate-800 text-center py-1 font-semibold"
              >
                ← Back to edit property specs
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
