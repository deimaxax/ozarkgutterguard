'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2, ArrowRight, Phone, Home, ShieldCheck } from 'lucide-react';

interface GutterCleaningCalculatorProps {
  initialCity?: string;
}

export default function GutterCleaningCalculator({ initialCity = 'Bentonville' }: GutterCleaningCalculatorProps) {
  const [stories, setStories] = useState<'1-story' | '2-story' | '3-story'>('1-story');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const cleanPrice = stories === '1-story' ? 149 : stories === '2-story' ? 189 : 249;

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim()) {
      setErrorMsg('Please enter your property address in Northwest Arkansas.');
      return;
    }
    if (!phone || phone.length < 10) {
      setErrorMsg('Please enter a valid phone number so our local dispatch can confirm your slot.');
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
          serviceType: 'Gutter Cleaning + 21-Point Inspection',
          estimatedCleanPrice: `$${cleanPrice}`,
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
    <div className="bg-white border-2 border-slate-200/90 rounded-2xl shadow-sm overflow-hidden text-slate-900">
      
      {/* Clean Contractor Header with Social Proof */}
      <div className="p-4 sm:p-5 border-b border-slate-100 bg-[#FAF9F6]">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-slate-300 shrink-0 shadow-xs">
              <Image
                src="/images/david_vance.jpg"
                alt="David Vance - Owner & Lead Installer"
                width={44}
                height={44}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 text-sm">David Vance</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-200/70 px-1.5 py-0.5 rounded">
                  Owner &amp; Installer
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Bentonville, AR</p>
            </div>
          </div>

          <div className="text-right shrink-0">
            <div className="flex items-center justify-end gap-1 text-amber-500 text-xs">
              <span>★★★★★</span>
              <span className="text-slate-900 font-bold text-xs ml-0.5">4.9</span>
            </div>
            <span className="text-[10px] text-slate-500 font-medium block">180+ Local Reviews</span>
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        {submitted ? (
          <div className="text-center py-4 space-y-4 bg-[#FAF9F6] p-4 rounded-xl">
            <div className="w-12 h-12 rounded-full bg-[#0F1E36] text-white flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6 text-red-400" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Request Received!</h4>
            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              We received your cleanout request for <strong className="text-slate-900">{address}</strong>. We will text or call you shortly to confirm the arrival time.
            </p>
            <div className="bg-white border border-slate-200 rounded-xl p-3.5 text-xs space-y-1 max-w-xs mx-auto">
              <div className="text-slate-500 font-semibold">Flat Rate Cleanout:</div>
              <div className="text-2xl font-black text-slate-900">${cleanPrice}</div>
              <div className="text-[11px] text-slate-600">Pay after completion • 100% credited toward guards</div>
            </div>
            <a
              href="tel:+14799292516"
              className="inline-flex items-center gap-2 btn-contractor-navy px-5 py-2.5 rounded-xl font-bold text-xs shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-red-400" />
              <span>Questions? Call (479) 929-2516</span>
            </a>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            
            {/* 1. Stories Toggle */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                1. Select Home Size
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: '1-story', label: '1-Story Ranch', price: '$149' },
                  { id: '2-story', label: '2-Story Family', price: '$189' },
                  { id: '3-story', label: '3+ / Steep', price: '$249' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setStories(s.id as any)}
                    className={`py-2.5 px-2 text-left rounded-lg border transition cursor-pointer ${
                      stories === s.id
                        ? 'bg-[#0F1E36] text-white border-[#0F1E36] shadow-xs'
                        : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-1 mb-0.5">
                      <Home className={`w-3.5 h-3.5 ${stories === s.id ? 'text-white' : 'text-slate-400'}`} />
                      <span className="text-xs font-bold truncate">{s.label}</span>
                    </div>
                    <span className={`text-xs font-bold block ${stories === s.id ? 'text-red-300' : 'text-red-600'}`}>
                      {s.price} Flat
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Property Address */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                2. Property Street Address
              </label>
              <input
                type="text"
                required
                placeholder={`e.g. 1404 SW A St, ${initialCity}`}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 outline-none focus:border-[#0F1E36] bg-white font-medium"
              />
            </div>

            {/* 3. Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                  3. Your Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. John Miller"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 outline-none focus:border-[#0F1E36] bg-white font-medium"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                  4. Mobile Phone
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(479) 929-2516"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 outline-none focus:border-[#0F1E36] bg-white font-medium"
                />
              </div>
            </div>

            {errorMsg && (
              <p className="text-xs text-red-700 font-semibold bg-red-50 p-2.5 rounded-lg border border-red-200">
                {errorMsg}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-contractor-primary min-h-[50px] py-3 text-sm font-bold flex items-center justify-center gap-2 shadow-xs cursor-pointer transition active:scale-[0.98] rounded-xl"
            >
              <span>{isSubmitting ? 'Sending Request...' : 'Schedule My Cleanout →'}</span>
            </button>

            {/* Reassurance Footer */}
            <div className="pt-2 border-t border-slate-100 space-y-1 text-center text-xs text-slate-500">
              <p>✓ Pay after completion • 100% credited toward guards</p>
              <p>Prefer to call? <a href="tel:+14799292516" className="text-slate-900 font-bold hover:underline">(479) 929-2516</a></p>
            </div>

          </form>
        )}
      </div>
    </div>
  );
}

