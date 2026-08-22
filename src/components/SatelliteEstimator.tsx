'use client';

import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, MapPin, Phone } from 'lucide-react';

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
    <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
      
      {/* Clean Unboxed Form Header */}
      <div className="p-5 sm:p-6 pb-2 border-b border-slate-100">
        <span className="text-[11px] font-bold text-[#1D4ED8] uppercase tracking-wider block mb-1">
          NO HOUSE VISIT REQUIRED • EXACT QUOTE IN 15 MINUTES
        </span>
        <h3 className="font-bold text-lg sm:text-xl text-[#0F172A] tracking-tight">
          Request Your Free Satellite Estimate
        </h3>
        <p className="text-xs text-slate-500 mt-1 font-normal">
          Direct Northwest Arkansas contractor pricing • Remote measurement &amp; sizing.
        </p>
      </div>

      {/* STEP 1: Address & Home Size */}
      {step === 1 && (
        <form onSubmit={handleCalculate} className="p-5 sm:p-6 space-y-5">
          
          {/* Step 1: City Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              1. Select City:
            </label>
            <div className="grid grid-cols-3 gap-2">
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
                    className={`py-2.5 px-2 text-xs font-bold text-center transition cursor-pointer border ${
                      isActive
                        ? 'bg-[#1D4ED8] text-white border-[#1E40AF]'
                        : 'bg-[#F8F9FA] hover:bg-slate-100 text-slate-700 border-slate-200'
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
                className={`py-2.5 px-2 text-xs font-bold text-center transition cursor-pointer border ${
                  isCustomCity
                    ? 'bg-[#1D4ED8] text-white border-[#1E40AF]'
                    : 'bg-[#F8F9FA] hover:bg-slate-100 text-slate-700 border-slate-200'
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
                  placeholder="Enter your NWA town (e.g. Centerton, Lowell, Pea Ridge, Farmington)"
                  className="w-full px-3.5 py-2.5 border border-blue-400 bg-blue-50/40 text-xs text-slate-900 outline-none focus:ring-1 focus:ring-blue-500 font-medium"
                  autoFocus
                />
              </div>
            )}
          </div>

          {/* Step 2: Street Address */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="street-address-field" className="block text-xs font-bold text-slate-900 uppercase tracking-wider">
                2. Property Street Address:
              </label>
              <span className="text-xs font-semibold text-[#1D4ED8]">
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
                placeholder="e.g., 1404 SW A St, Bentonville"
                className="w-full px-3.5 py-3 border border-slate-300 focus:border-[#1D4ED8] text-base sm:text-sm text-slate-900 bg-white outline-none font-medium placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Step 3: House Stories / Footage Sizing */}
          <div>
            <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
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
                  className={`min-h-[54px] p-2.5 border text-left transition cursor-pointer active:scale-95 ${
                    stories === type.id
                      ? 'border-[#1D4ED8] bg-blue-50 text-slate-950 font-bold ring-1 ring-[#1D4ED8]'
                      : 'border-slate-200 bg-[#F8F9FA] hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <span className="block text-xs font-bold text-slate-900">{type.label}</span>
                  <span className="text-[11px] text-slate-500 block mt-0.5">{type.sub}</span>
                </button>
              ))}
            </div>
          </div>

          {errorMsg && (
            <p className="text-xs text-red-700 font-semibold bg-red-50 p-2.5 border border-red-200">
              {errorMsg}
            </p>
          )}

          {/* Primary CTA Button */}
          <button
            type="submit"
            className="w-full btn-contractor-primary min-h-[50px] py-3.5 px-4 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition active:scale-[0.98]"
          >
            <span>Calculate My Exact Gutter Guard Cost →</span>
          </button>

          {/* Reassurance Footnote */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 pt-1 font-medium text-center">
            <span>100% Free Satellite Estimate</span>
            <span className="text-slate-300">•</span>
            <span>Zero High-Pressure Salesmen</span>
            <span className="text-slate-300">•</span>
            <span>Written 10-Yr Guarantee</span>
          </div>
        </form>
      )}

      {/* STEP 2: Instant Transparent Quote & Contact Confirmation */}
      {step === 2 && !submitted && (
        <form onSubmit={handleFinalSubmit} className="p-6 sm:p-7 space-y-4">
          
          {/* Price Card */}
          <div className="p-4 bg-[#F8F9FA] border border-slate-200 space-y-2">
            <div className="flex justify-between text-xs text-slate-700 border-b border-slate-200 pb-2">
              <span className="truncate max-w-[200px] font-bold text-slate-900">{fullDisplayAddress}</span>
              <span className="font-bold text-slate-900">{priceDetails.footage}</span>
            </div>

            <div className="flex items-baseline justify-between pt-1">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 block">Direct Contractor Estimate</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                  {priceDetails.price}
                </div>
                <div className="text-xs text-[#1D4ED8] font-bold mt-0.5">
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

            <div className="text-xs text-slate-700 pt-1 border-t border-slate-200">
              <span className="font-bold text-slate-900">Included Scope:</span> Full hand cleanout, laser slope realignment, heavy zinc brackets &amp; 316 surgical micro-mesh.
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <label htmlFor="contact-name-field" className="block text-xs font-bold text-slate-900 uppercase mb-1">
                Your Full Name:
              </label>
              <input
                id="contact-name-field"
                type="text"
                required
                inputMode="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. John Miller"
                className="w-full px-3.5 py-3 border border-slate-300 text-base sm:text-sm text-slate-900 outline-none focus:border-[#1D4ED8]"
              />
            </div>

            <div>
              <label htmlFor="contact-phone-field" className="block text-xs font-bold text-slate-900 uppercase mb-1">
                Phone Number (For Written Quote Confirmation):
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
                className="w-full px-3.5 py-3 border border-slate-300 text-base sm:text-sm text-slate-900 outline-none focus:border-[#1D4ED8]"
              />
            </div>
          </div>

          {errorMsg && (
            <p className="text-xs text-red-700 font-semibold bg-red-50 p-2.5 border border-red-200">
              {errorMsg}
            </p>
          )}

          <div className="flex gap-2 pt-1">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="py-3 px-4 border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer min-h-[48px] active:scale-95 transition"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 btn-contractor-primary min-h-[48px] py-3 px-4 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition active:scale-[0.98]"
            >
              {isSubmitting ? 'Sending Quote...' : 'Send Written Estimate'}
            </button>
          </div>
        </form>
      )}

      {/* STEP 3: Submission Confirmation */}
      {submitted && (
        <div className="p-6 text-center space-y-4 bg-blue-50/50">
          <div className="w-12 h-12 bg-slate-900 text-blue-400 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-slate-950">
              Estimate Sent Successfully
            </h4>
            <p className="text-xs text-slate-700 max-w-sm mx-auto leading-relaxed">
              Your itemized linear footage estimate of <strong className="text-slate-900 font-bold">{priceDetails.price}</strong> for <span className="font-semibold">{fullDisplayAddress}</span> has been dispatched.
            </p>
          </div>

          <div className="p-3.5 bg-white border border-slate-200 text-xs text-slate-700 text-left">
            <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-0.5">
              <Phone className="w-3.5 h-3.5 text-[#1D4ED8]" />
              <span>Questions? Call Local Shop:</span>
            </div>
            <p className="text-slate-600">
              Call our Bentonville crew directly at <a href="tel:+14799292516" className="text-slate-900 font-bold underline">(479) 929-2516</a>.
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
