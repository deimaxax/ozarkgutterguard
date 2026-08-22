'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2, ArrowRight, MapPin, Phone, Home, ShieldCheck, HeartHandshake } from 'lucide-react';

interface SatelliteEstimatorProps {
  initialCity?: string;
}

export default function SatelliteEstimator({ initialCity = 'Bentonville' }: SatelliteEstimatorProps) {
  const sanitizeInitialCity = (city?: string) => {
    if (!city) return 'Bentonville';
    const quickMatch = ['Bentonville', 'Bella Vista', 'Rogers', 'Fayetteville', 'Springdale'].find(
      c => c.toLowerCase() === city.toLowerCase()
    );
    if (quickMatch) return quickMatch;
    if (city.toLowerCase().includes('commercial') || city.toLowerCase().includes('hoa') || city.length > 25) {
      return 'Bentonville';
    }
    return city;
  };

  const [step, setStep] = useState<1 | 2>(1);
  const [streetAddress, setStreetAddress] = useState('');
  const [selectedCity, setSelectedCity] = useState(sanitizeInitialCity(initialCity));
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
      label: '1-Story Ranch Home',
      footage: '~130–150 Linear Ft',
      price: '$1,250 – $1,450',
      monthly: '$48/mo',
      corporateAvg: '$3,800'
    },
    '2-story': {
      label: '2-Story Family Home',
      footage: '~180–220 Linear Ft',
      price: '$1,550 – $1,750',
      monthly: '$58/mo',
      corporateAvg: '$4,900'
    },
    'large': {
      label: 'Custom / Multi-Story',
      footage: '~250–320 Linear Ft',
      price: '$1,950 – $2,350',
      monthly: '$75/mo',
      corporateAvg: '$6,500'
    }
  }[stories];

  return (
    <div className="bg-white border-2 border-slate-200/90 rounded-2xl shadow-sm overflow-hidden">
      
      {/* Clean Contractor Header with Social Proof */}
      <div className="p-3.5 sm:p-4 border-b border-slate-100 bg-[#FAF9F6]">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-300 shrink-0 shadow-2xs">
              <Image
                src="/images/david_vance.jpg"
                alt="David Vance"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="min-w-0">
              <div className="font-bold text-slate-950 text-sm leading-snug truncate">
                David Vance
              </div>
              <div className="text-[11px] text-slate-500 font-medium leading-tight truncate">
                Owner &amp; Lead Installer
              </div>
            </div>
          </div>

          <div className="text-right shrink-0 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-end gap-1 text-amber-500 text-xs leading-none">
              <span>★</span>
              <span className="text-slate-900 font-bold text-xs">4.9</span>
            </div>
            <span className="text-[10px] text-slate-500 font-medium block mt-0.5">187 Reviews</span>
          </div>
        </div>
      </div>

      {/* STEP 1: Zero-Friction Micro-Commitment (Town + Home Size ONLY) */}
      {step === 1 && (
        <form onSubmit={handleCalculate} className="p-4 sm:p-5 space-y-4 bg-white">
          
          {/* Step 1: City Selection */}
          <div>
            <label className="block text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1.5">
              1. Select Your Town / Area:
            </label>
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
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
                    className={`py-2 px-1 text-[11px] sm:text-xs font-bold text-center transition cursor-pointer rounded-lg border ${
                      isActive
                        ? 'bg-[#0F1E36] text-white border-[#0F1E36] shadow-2xs'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
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
                className={`py-2 px-1 text-[11px] sm:text-xs font-bold text-center transition cursor-pointer rounded-lg border ${
                  isCustomCity
                    ? 'bg-[#0F1E36] text-white border-[#0F1E36] shadow-2xs'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                }`}
              >
                + Other NWA
              </button>
            </div>

            {/* Custom City Input Field */}
            {isCustomCity && (
              <div className="mt-2">
                <input
                  type="text"
                  required={isCustomCity}
                  value={customCityInput}
                  onChange={(e) => {
                    setCustomCityInput(e.target.value);
                    if (errorMsg) setErrorMsg('');
                  }}
                  placeholder="Enter your town (e.g. Centerton, Pea Ridge)"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white text-xs text-slate-900 outline-none focus:border-[#0F1E36] font-medium"
                  autoFocus
                />
              </div>
            )}
          </div>

          {/* Step 2: House Stories / Footage Sizing */}
          <div>
            <label className="block text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1.5">
              2. Approximate Home Size:
            </label>
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
              {[
                { id: '1-story', title: '1-Story', desc: 'Ranch (~140 ft)' },
                { id: '2-story', title: '2-Story', desc: 'Family (~200 ft)' },
                { id: 'large', title: '3-Story+', desc: 'Estate (250+ ft)' }
              ].map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setStories(type.id as any)}
                  className={`py-2.5 px-1 border rounded-lg text-center transition cursor-pointer active:scale-95 flex flex-col items-center justify-center min-h-[60px] ${
                    stories === type.id
                      ? 'border-[#0F1E36] bg-[#0F1E36]/5 text-[#0F1E36] font-bold ring-2 ring-[#0F1E36]'
                      : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-center gap-1">
                    <Home className={`w-3.5 h-3.5 shrink-0 ${stories === type.id ? 'text-[#0F1E36]' : 'text-slate-500'}`} />
                    <span className="text-xs font-bold whitespace-nowrap">{type.title}</span>
                  </div>
                  <span className="text-[10px] text-slate-700 font-semibold block leading-tight mt-0.5 whitespace-nowrap">
                    {type.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {errorMsg && (
            <p className="text-xs text-red-700 font-semibold bg-red-50 p-2.5 rounded-lg border border-red-200">
              {errorMsg}
            </p>
          )}

          {/* Primary CTA Button */}
          <button
            type="submit"
            className="w-full btn-contractor-primary min-h-[50px] py-3 px-4 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition active:scale-[0.98] rounded-xl shadow-xs"
          >
            <span>See My Instant Price Range →</span>
          </button>

          {/* Reassurance */}
          <div className="pt-0.5 text-center">
            <span className="text-[11px] text-slate-600 font-medium">
              ✓ 100% Free Instant Price • Zero Salesmen Visits
            </span>
          </div>
        </form>
      )}

      {/* STEP 2: Instant Transparent Quote & Contact Confirmation */}
      {step === 2 && !submitted && (
        <form onSubmit={handleFinalSubmit} className="p-4 sm:p-5 space-y-4 bg-white">
          
          {/* Price Card */}
          <div className="p-3.5 sm:p-4 bg-[#FAF9F6] border border-slate-200 rounded-xl space-y-2">
            <div className="flex justify-between text-xs text-slate-800 border-b border-slate-200 pb-2">
              <span className="truncate max-w-[200px] font-bold text-slate-900">{currentCity}, AR</span>
              <span className="font-bold text-slate-900">{priceDetails.footage}</span>
            </div>

            <div className="flex items-baseline justify-between pt-1">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-700 block">Direct Local Owner Estimate</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0F1E36]">
                  {priceDetails.price}
                </div>
                <div className="text-xs text-[#D92626] font-bold mt-0.5">
                  Or {priceDetails.monthly} (0% APR for 12 Months)
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase font-bold text-slate-600 block line-through">Franchise Quotes</span>
                <div className="text-sm font-bold text-slate-600 line-through">
                  {priceDetails.corporateAvg}
                </div>
              </div>
            </div>

            <div className="text-[11px] sm:text-xs text-slate-700 pt-1 border-t border-slate-200">
              <strong className="text-slate-900">Included:</strong> Hand cleanout, slope tune-up, 316 marine stainless micro-mesh &amp; Lifetime Material Warranty + 10-Yr No-Clog Guarantee.
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <label htmlFor="street-address-field" className="block text-[11px] font-bold text-slate-900 uppercase mb-1">
                Property Street Address:
              </label>
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
                placeholder={`e.g. 1404 SW A St, ${currentCity}`}
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-base sm:text-sm text-slate-900 outline-none focus:border-[#0F1E36] bg-white font-medium placeholder:text-slate-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="contact-name-field" className="block text-[11px] font-bold text-slate-900 uppercase mb-1">
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
                  placeholder="e.g. John Miller"
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-base sm:text-sm text-slate-900 outline-none focus:border-[#0F1E36] bg-white font-medium placeholder:text-slate-400"
                />
              </div>

              <div>
                <label htmlFor="contact-phone-field" className="block text-[11px] font-bold text-slate-900 uppercase mb-1">
                  Mobile Phone:
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
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-base sm:text-sm text-slate-900 outline-none focus:border-[#0F1E36] bg-white font-medium placeholder:text-slate-400"
                />
              </div>
            </div>
          </div>

          {errorMsg && (
            <p className="text-xs text-red-700 font-semibold bg-red-50 p-2.5 rounded-lg border border-red-200">
              {errorMsg}
            </p>
          )}

          <div className="space-y-2 pt-1">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="py-3 px-4 border border-slate-300 rounded-lg text-xs font-bold text-slate-900 hover:bg-slate-50 cursor-pointer min-h-[48px] active:scale-95 transition"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 btn-contractor-primary min-h-[48px] py-3 px-4 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition active:scale-[0.98] rounded-lg shadow-xs text-center"
              >
                {isSubmitting ? 'Sending Quote...' : 'Lock in estimate & get aerial measurement via SMS →'}
              </button>
            </div>

            <p className="text-[11px] text-slate-500 text-center font-medium">
              ✓ No sales calls. David will text your exact aerial roofline measurement and locked estimate.
            </p>
          </div>
        </form>
      )}

      {/* STEP 3: Submission Confirmation */}
      {submitted && (
        <div className="p-6 text-center space-y-4 bg-[#FAF9F6]">
          <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6 text-red-400" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900">
              Estimate Sent Successfully!
            </h3>
            <p className="text-xs text-slate-700 max-w-sm mx-auto leading-relaxed">
              Your itemized estimate of <strong className="text-slate-900 font-bold">{priceDetails.price}</strong> for <span className="font-semibold">{fullDisplayAddress}</span> has been sent.
            </p>
          </div>

          <div className="p-3.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-700 text-left space-y-1">
            <div className="font-bold text-slate-900 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#D92626]" />
              <span>Questions for David?</span>
            </div>
            <p className="text-slate-600">
              Call our Bentonville shop directly at <a href="tel:+14799292516" className="text-slate-900 font-bold underline">(479) 929-2516</a>.
            </p>
          </div>
        </div>
      )}

    </div>
  );
}

