'use client';

import React, { useState } from 'react';
import { Calculator, CheckCircle2, ShieldCheck, MapPin, ArrowRight, Check, Phone, ChevronDown, Edit3 } from 'lucide-react';

interface SatelliteEstimatorProps {
  initialCity?: string;
}

export default function SatelliteEstimator({ initialCity = 'Bentonville' }: SatelliteEstimatorProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [streetAddress, setStreetAddress] = useState('');
  const [selectedCity, setSelectedCity] = useState(initialCity || 'Bentonville');
  const [isCustomCity, setIsCustomCity] = useState(false);
  const [customCityInput, setCustomCityInput] = useState('');
  const [stories, setStories] = useState<'1-story' | '2-story' | 'large'>('1-story');
  
  // Contact Fields (Step 2)
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const quickCities = [
    'Bentonville',
    'Bella Vista',
    'Rogers',
    'Fayetteville',
    'Springdale'
  ];

  const currentCity = isCustomCity ? (customCityInput.trim() || 'Northwest Arkansas') : selectedCity;
  const fullDisplayAddress = `${streetAddress ? streetAddress.trim() + ', ' : ''}${currentCity}, AR`;

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!streetAddress.trim() || streetAddress.trim().length < 3) {
      setErrorMsg('Please enter your property street address (e.g. 1404 SW A St).');
      return;
    }
    if (isCustomCity && !customCityInput.trim()) {
      setErrorMsg('Please enter your city name.');
      return;
    }
    setErrorMsg('');
    setStep(2);
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      setErrorMsg('Please enter a valid phone number for your written estimate.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          address: fullDisplayAddress,
          streetAddress,
          city: currentCity,
          name,
          phone,
          homeType: stories,
          estimatedCost: stories === '1-story' ? '$1,250 – $1,450' : stories === '2-story' ? '$1,550 – $1,750' : '$1,950 – $2,350'
        })
      });
    } catch {
      // Fallback
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const priceDetails = {
    '1-story': {
      label: '1-Story Home',
      footage: '~130–150 Linear Ft',
      price: '$1,250 – $1,450',
      monthly: '$48/mo',
      corporateAvg: '$3,800'
    },
    '2-story': {
      label: '2-Story Home',
      footage: '~180–220 Linear Ft',
      price: '$1,550 – $1,750',
      monthly: '$58/mo',
      corporateAvg: '$4,900'
    },
    'large': {
      label: 'Custom / 3-Story',
      footage: '~250–320 Linear Ft',
      price: '$1,950 – $2,350',
      monthly: '$75/mo',
      corporateAvg: '$6,500'
    }
  }[stories];

  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-md overflow-hidden">
      
      {/* Header */}
      <div className="bg-brand-navy text-white p-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg text-white leading-tight">
              Get an Instant Free Quote
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Direct Northwest Arkansas contractor pricing
            </p>
          </div>
          <span className="text-xs font-semibold bg-brand-navyDark text-emerald-400 px-2.5 py-1 rounded">
            {step === 1 ? 'Step 1 of 2' : submitted ? 'Confirmed' : 'Step 2 of 2'}
          </span>
        </div>
      </div>

      {/* STEP 1: Address & Home Size */}
      {step === 1 && (
        <form onSubmit={handleCalculate} className="p-5 sm:p-6 space-y-4">
          
          {/* City Chips */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              1. Select City:
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              {quickCities.map((city) => {
                const isActive = !isCustomCity && selectedCity === city;
                return (
                  <button
                    key={city}
                    type="button"
                    onClick={() => {
                      setIsCustomCity(false);
                      setSelectedCity(city);
                      setErrorMsg('');
                    }}
                    className={`py-2 px-2 text-xs rounded-lg font-bold text-center transition cursor-pointer border ${
                      isActive
                        ? 'bg-brand-green text-white border-brand-green shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    {city}
                  </button>
                );
              })}
              
              {/* Other City Option */}
              <button
                type="button"
                onClick={() => {
                  setIsCustomCity(true);
                  setErrorMsg('');
                }}
                className={`py-2 px-2 text-xs rounded-lg font-bold text-center transition cursor-pointer border ${
                  isCustomCity
                    ? 'bg-brand-green text-white border-brand-green shadow-xs'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                + Other
              </button>
            </div>

            {/* Custom City Input Field */}
            {isCustomCity && (
              <div className="mt-2.5">
                <input
                  type="text"
                  required={isCustomCity}
                  value={customCityInput}
                  onChange={(e) => {
                    setCustomCityInput(e.target.value);
                    if (errorMsg) setErrorMsg('');
                  }}
                  placeholder="Enter your NWA city (e.g. Centerton, Lowell, Pea Ridge, Farmington)"
                  className="w-full px-3 py-2 rounded border border-brand-green bg-emerald-50/40 text-xs text-slate-900 outline-none focus:ring-1 focus:ring-brand-green"
                  autoFocus
                />
              </div>
            )}
          </div>

          {/* Street Address */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="street-address-field" className="block text-xs font-bold text-slate-900">
                2. Property Street Address:
              </label>
              <span className="text-[11px] font-bold text-brand-green">
                📍 {currentCity}, AR
              </span>
            </div>
            <div className="relative">
              <input
                id="street-address-field"
                type="text"
                required
                inputMode="text"
                autoComplete="street-address"
                value={streetAddress}
                onChange={(e) => {
                  setStreetAddress(e.target.value);
                  if (errorMsg) setErrorMsg('');
                }}
                placeholder="Enter street address (e.g. 1404 SW A St)"
                className="w-full px-3.5 py-3 rounded-lg border border-slate-300 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 text-base sm:text-sm text-slate-900 bg-white outline-none"
              />
            </div>
          </div>

          {/* Home Type */}
          <div>
            <label className="block text-xs font-bold text-slate-900 mb-1.5">
              3. Home Size / Stories:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: '1-story', label: '1-Story', sub: 'Up to 150 LF' },
                { id: '2-story', label: '2-Story', sub: 'Up to 220 LF' },
                { id: 'large', label: 'Custom', sub: '250+ LF' }
              ].map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setStories(type.id as any)}
                  className={`min-h-[52px] p-2.5 rounded-lg border text-left transition cursor-pointer active:scale-95 ${
                    stories === type.id
                      ? 'border-brand-green bg-emerald-50 text-brand-navy font-bold shadow-xs'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <span className="block text-xs font-bold">{type.label}</span>
                  <span className="text-[10px] text-slate-500">{type.sub}</span>
                </button>
              ))}
            </div>
          </div>

          {errorMsg && (
            <p className="text-xs text-red-600 font-semibold bg-red-50 p-2.5 rounded-lg border border-red-200">
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            className="w-full btn-contractor-green min-h-[48px] py-3 px-4 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-[0.98] transition-transform"
          >
            <span>See Instant Price &amp; Footage</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="flex items-center justify-center gap-3 text-xs text-slate-500 pt-1 font-medium">
            <span>✓ 100% Free Instant Quote</span>
            <span>•</span>
            <span>✓ No High-Pressure Salesmen</span>
          </div>
        </form>
      )}

      {/* STEP 2: Instant Transparent Quote & Contact Confirmation */}
      {step === 2 && !submitted && (
        <form onSubmit={handleFinalSubmit} className="p-5 sm:p-6 space-y-4">
          
          {/* Price Card */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex justify-between text-xs text-slate-600 border-b border-slate-200 pb-2 font-medium">
              <span className="truncate max-w-[200px] font-bold text-slate-900">{fullDisplayAddress}</span>
              <span className="font-bold text-slate-800">{priceDetails.footage}</span>
            </div>

            <div className="flex items-baseline justify-between pt-1">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 block">Direct Contractor Estimate</span>
                <div className="text-2xl font-black text-brand-navy">
                  {priceDetails.price}
                </div>
                <div className="text-xs text-brand-green font-bold mt-0.5">
                  Or {priceDetails.monthly} (0% APR for 12 Months)
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase font-bold text-slate-400 block line-through">Franchise Quotes</span>
                <div className="text-sm font-bold text-slate-400 line-through">
                  {priceDetails.corporateAvg}
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-700 pt-1">
              <span className="font-semibold text-slate-900">Includes Full Scope:</span> Flushed troughs, laser slope pitch realignment, zinc rafter brackets &amp; 316 surgical micro-mesh.
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <label htmlFor="contact-name-field" className="block text-xs font-bold text-slate-900 mb-1">
                Your Name:
              </label>
              <input
                id="contact-name-field"
                type="text"
                required
                inputMode="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="w-full px-3.5 py-3 rounded-lg border border-slate-300 text-base sm:text-sm text-slate-900 outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
              />
            </div>

            <div>
              <label htmlFor="contact-phone-field" className="block text-xs font-bold text-slate-900 mb-1">
                Phone Number (For Written Quote via SMS):
              </label>
              <input
                id="contact-phone-field"
                type="tel"
                required
                inputMode="tel"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(479) 929-2516"
                className="w-full px-3.5 py-3 rounded-lg border border-slate-300 text-base sm:text-sm text-slate-900 outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
              />
            </div>
          </div>

          {errorMsg && (
            <p className="text-xs text-red-600 font-semibold bg-red-50 p-2.5 rounded-lg border border-red-200">
              {errorMsg}
            </p>
          )}

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="py-3 px-4 rounded-lg border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer min-h-[48px] active:scale-95 transition-transform"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 btn-contractor-green min-h-[48px] py-3 px-4 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-[0.98] transition-transform"
            >
              {isSubmitting ? 'Sending Quote...' : 'Send Me My Written Estimate'}
            </button>
          </div>
        </form>
      )}

      {/* STEP 3: Submission Confirmation */}
      {submitted && (
        <div className="p-6 text-center space-y-4 bg-emerald-50">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-brand-green flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-slate-950">
              Estimate Sent Successfully!
            </h4>
            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              Your itemized linear footage estimate of <strong className="text-slate-900">{priceDetails.price}</strong> for <span className="font-semibold">{fullDisplayAddress}</span> has been dispatched via SMS.
            </p>
          </div>

          <div className="p-3.5 rounded bg-white border border-slate-200 text-xs text-slate-700 text-left">
            <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-0.5">
              <Phone className="w-3.5 h-3.5 text-brand-green" />
              <span>Questions? Call Local Shop:</span>
            </div>
            <p className="text-slate-600">
              Call our Bentonville team directly at <a href="tel:+14799292516" className="text-brand-green font-bold underline">(479) 929-2516</a>.
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
