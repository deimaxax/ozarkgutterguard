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
      
      {/* Warm Personal Founder Header */}
      <div className="p-5 sm:p-6 pb-4 border-b border-slate-100 bg-[#FAF9F6]">
        <div className="flex items-center gap-3.5">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-300 shrink-0 shadow-xs">
            <Image
              src="/images/david_vance.jpg"
              alt="David Vance - Owner & Bentonville Resident"
              width={48}
              height={48}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-slate-900 text-sm sm:text-base">David Vance</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                Owner &amp; Local Installer
              </span>
            </div>
            <p className="text-xs text-slate-600 font-medium mt-0.5">
              Bentonville, AR • Direct Owner Pricing
            </p>
          </div>
        </div>

        <p className="text-xs text-slate-700 mt-3 italic bg-white p-2.5 rounded-lg border border-slate-200/80 leading-relaxed font-normal">
          &quot;Pick your town and home size below. I&apos;ll give you our exact installed price range right on your screen — zero salesmen visits, no games.&quot;
        </p>
      </div>

      {/* STEP 1: Address & Home Size */}
      {step === 1 && (
        <form onSubmit={handleCalculate} className="p-5 sm:p-6 space-y-5 bg-white">
          
          {/* Step 1: City Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
              1. Your Town / Neighborhood:
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
                    className={`py-2.5 px-2 text-xs font-bold text-center transition cursor-pointer rounded-lg border ${
                      isActive
                        ? 'bg-[#0F1E36] text-white border-[#0F1E36] shadow-xs'
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
                className={`py-2.5 px-2 text-xs font-bold text-center transition cursor-pointer rounded-lg border ${
                  isCustomCity
                    ? 'bg-[#0F1E36] text-white border-[#0F1E36] shadow-xs'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                }`}
              >
                + Other NWA
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
                  placeholder="Enter your town (e.g. Centerton, Cave Springs, Pea Ridge)"
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg bg-white text-xs text-slate-900 outline-none focus:border-[#0F1E36] font-medium"
                  autoFocus
                />
              </div>
            )}
          </div>

          {/* Step 2: Street Address */}
          <div>
            <label htmlFor="street-address-field" className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
              2. Street Address (for roofline footage):
            </label>
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
                placeholder={`e.g., 1404 SW A St, ${currentCity}`}
                className="w-full px-3.5 py-3 border border-slate-300 rounded-lg focus:border-[#0F1E36] text-base sm:text-sm text-slate-900 bg-white outline-none font-medium placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Step 3: House Stories / Footage Sizing */}
          <div>
            <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
              3. Home Size:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: '1-story', label: '1-Story', sub: 'Ranch (~140 ft)' },
                { id: '2-story', label: '2-Story', sub: 'Family (~200 ft)' },
                { id: 'large', label: 'Custom', sub: 'Multi-Level' }
              ].map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setStories(type.id as any)}
                  className={`min-h-[58px] p-2.5 border rounded-lg text-left transition cursor-pointer active:scale-95 ${
                    stories === type.id
                      ? 'border-[#0F1E36] bg-slate-100 text-[#0F1E36] font-bold ring-2 ring-[#0F1E36]/80'
                      : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-1 mb-0.5">
                    <Home className={`w-3.5 h-3.5 ${stories === type.id ? 'text-[#0F1E36]' : 'text-slate-400'}`} />
                    <span className="text-xs font-bold">{type.label}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 block leading-tight">{type.sub}</span>
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
            className="w-full btn-contractor-primary min-h-[52px] py-3.5 px-4 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition active:scale-[0.98] rounded-xl shadow-xs"
          >
            <span>See My Upfront Price Range →</span>
          </button>

          {/* Warm Reassurance & Direct Phone Option */}
          <div className="pt-2 border-t border-slate-100 space-y-2 text-center">
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 font-medium">
              <span>✓ 100% Free Local Estimate</span>
              <span className="text-slate-300">•</span>
              <span>✓ Zero Pressure</span>
              <span className="text-slate-300">•</span>
              <span>✓ Written Guarantee</span>
            </div>

            <p className="text-xs text-slate-600">
              Prefer to talk right now? <a href="tel:+14799292516" className="text-[#0F1E36] font-bold hover:underline">Call David: (479) 929-2516</a>
            </p>
          </div>
        </form>
      )}

      {/* STEP 2: Instant Transparent Quote & Contact Confirmation */}
      {step === 2 && !submitted && (
        <form onSubmit={handleFinalSubmit} className="p-6 sm:p-7 space-y-4 bg-white">
          
          {/* Price Card */}
          <div className="p-4 bg-[#FAF9F6] border border-slate-200 rounded-xl space-y-2">
            <div className="flex justify-between text-xs text-slate-700 border-b border-slate-200 pb-2">
              <span className="truncate max-w-[200px] font-bold text-slate-900">{fullDisplayAddress}</span>
              <span className="font-bold text-slate-900">{priceDetails.footage}</span>
            </div>

            <div className="flex items-baseline justify-between pt-1">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 block">Direct Local Owner Estimate</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0F1E36]">
                  {priceDetails.price}
                </div>
                <div className="text-xs text-[#D92626] font-bold mt-0.5">
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
              <strong className="text-slate-900">Included on Every Job:</strong> Full hand cleanout, slope tune-up, heavy-duty hidden hangers &amp; 316 marine-grade micro-mesh.
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <label htmlFor="contact-name-field" className="block text-xs font-bold text-slate-900 uppercase mb-1">
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
                className="w-full px-3.5 py-3 border border-slate-300 rounded-lg text-base sm:text-sm text-slate-900 outline-none focus:border-[#0F1E36]"
              />
            </div>

            <div>
              <label htmlFor="contact-phone-field" className="block text-xs font-bold text-slate-900 uppercase mb-1">
                Phone Number (where to text/send your written quote):
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
                className="w-full px-3.5 py-3 border border-slate-300 rounded-lg text-base sm:text-sm text-slate-900 outline-none focus:border-[#0F1E36]"
              />
            </div>
          </div>

          {errorMsg && (
            <p className="text-xs text-red-700 font-semibold bg-red-50 p-2.5 rounded-lg border border-red-200">
              {errorMsg}
            </p>
          )}

          <div className="flex gap-2 pt-1">
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
              className="flex-1 btn-contractor-primary min-h-[48px] py-3 px-4 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition active:scale-[0.98] rounded-lg shadow-xs"
            >
              {isSubmitting ? 'Sending Quote...' : 'Send Me the Written Estimate'}
            </button>
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
            <h4 className="text-lg font-bold text-slate-900">
              Estimate Sent Successfully!
            </h4>
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

