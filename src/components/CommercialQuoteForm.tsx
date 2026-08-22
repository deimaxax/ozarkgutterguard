'use client';

import React, { useState } from 'react';
import { Building2, Phone, CheckCircle2, ShieldCheck, ArrowRight, FileText } from 'lucide-react';

interface CommercialQuoteFormProps {
  initialCity?: string;
}

export default function CommercialQuoteForm({ initialCity = 'Northwest Arkansas' }: CommercialQuoteFormProps) {
  const [companyName, setCompanyName] = useState('');
  const [propertyType, setPropertyType] = useState('HOA / Multi-Family');
  const [buildingCount, setBuildingCount] = useState('2-5 Buildings');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const phoneHref = "tel:+14799292516";
  const phoneDisplay = "(479) 929-2516";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      setErrorMsg('Please enter a valid phone number for your commercial bid.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          address: `Commercial Property in ${initialCity}`,
          name: `${name} (${companyName || 'Commercial Inquiry'})`,
          phone,
          homeType: `Commercial: ${propertyType} (${buildingCount})`,
          estimatedCost: 'Custom Commercial Bid Request',
          notes: `Email: ${email} | Scope: ${notes}`
        })
      });
    } catch {
      // Fallback
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-white border-2 border-slate-900 rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="p-5 sm:p-6 bg-[#0F1E36] text-white border-b border-slate-800">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider">
            Commercial &amp; HOA Bid Request
          </span>
          <span className="text-[10px] bg-slate-800 text-emerald-400 font-bold px-2 py-0.5 rounded border border-slate-700">
            NET-30 Available
          </span>
        </div>
        <h3 className="font-black text-lg sm:text-xl text-white tracking-tight mt-1">
          Request Commercial Proposal
        </h3>
        <p className="text-xs text-slate-300 mt-1 font-normal">
          Multi-building volume rates &amp; custom scopes across Benton &amp; Washington Counties.
        </p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#0F1E36] uppercase tracking-wider mb-1">
                Property / HOA Name:
              </label>
              <input
                type="text"
                required
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="e.g. Pinnacle Hills HOA / Oakbrook Apts"
                className="w-full px-3 py-2.5 border border-slate-300 text-xs text-slate-900 rounded-lg outline-none focus:border-[#0F1E36]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0F1E36] uppercase tracking-wider mb-1">
                Property Type:
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full px-3 py-2.5 border border-slate-300 text-xs text-slate-900 rounded-lg outline-none focus:border-[#0F1E36] bg-white"
              >
                <option value="HOA / Multi-Family">HOA Subdivision / Condos</option>
                <option value="Apartment Complex">Apartment Complex</option>
                <option value="Commercial / Office">Commercial Office Park</option>
                <option value="Retail / Plaza">Retail Plaza / Strip Mall</option>
                <option value="Industrial / Warehouse">Warehouse / Industrial</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#0F1E36] uppercase tracking-wider mb-1">
                Number of Buildings:
              </label>
              <select
                value={buildingCount}
                onChange={(e) => setBuildingCount(e.target.value)}
                className="w-full px-3 py-2.5 border border-slate-300 text-xs text-slate-900 rounded-lg outline-none focus:border-[#0F1E36] bg-white"
              >
                <option value="1 Large Commercial Building">1 Large Commercial Building</option>
                <option value="2-5 Buildings">2 – 5 Buildings</option>
                <option value="6-15 Buildings">6 – 15 Buildings</option>
                <option value="16+ Buildings / Campus">16+ Buildings / Large Campus</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0F1E36] uppercase tracking-wider mb-1">
                Contact Person Name:
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Sarah Jenkins (Property Mgr)"
                className="w-full px-3 py-2.5 border border-slate-300 text-xs text-slate-900 rounded-lg outline-none focus:border-[#0F1E36]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#0F1E36] uppercase tracking-wider mb-1">
                Phone Number:
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (errorMsg) setErrorMsg('');
                }}
                placeholder="(479) 929-2516"
                className="w-full px-3 py-2.5 border border-slate-300 text-xs text-slate-900 rounded-lg outline-none focus:border-[#0F1E36]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0F1E36] uppercase tracking-wider mb-1">
                Email Address:
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="manager@propertygroup.com"
                className="w-full px-3 py-2.5 border border-slate-300 text-xs text-slate-900 rounded-lg outline-none focus:border-[#0F1E36]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0F1E36] uppercase tracking-wider mb-1">
              Project Notes / Scope (Optional):
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Annual cleanout before spring board meeting, need COI and W-9"
              className="w-full px-3 py-2 border border-slate-300 text-xs text-slate-900 rounded-lg outline-none focus:border-[#0F1E36] resize-none"
            />
          </div>

          {errorMsg && (
            <p className="text-xs text-red-700 font-semibold bg-red-50 p-2.5 rounded-lg border border-red-200">
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-contractor-primary min-h-[48px] py-3 px-4 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition shadow-sm"
          >
            <span>{isSubmitting ? 'Submitting Bid Request...' : 'Submit Commercial RFP / Bid Request →'}</span>
          </button>

          <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>$2M Insurance &amp; W-9 Ready</span>
            </span>
            <a href={phoneHref} className="text-[#0F1E36] font-bold hover:underline">
              Or Call: {phoneDisplay}
            </a>
          </div>
        </form>
      ) : (
        <div className="p-8 text-center space-y-4 bg-slate-50">
          <div className="w-12 h-12 bg-[#0F1E36] text-white rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6 text-emerald-400" />
          </div>
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-[#0F1E36]">
              Commercial Request Received
            </h4>
            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-[#0F1E36]">{name}</strong>. Our commercial project estimator will review the specs for <strong className="text-[#0F1E36]">{companyName}</strong> and follow up within 1 business day.
            </p>
          </div>
          <div className="p-3.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-700 text-left">
            <div className="font-bold text-[#0F1E36] flex items-center gap-1.5 mb-0.5">
              <Phone className="w-3.5 h-3.5 text-[#D92626]" />
              <span>Need Immediate Dispatch or COI?</span>
            </div>
            <p className="text-slate-600">
              Call our commercial desk directly at <a href={phoneHref} className="text-[#0F1E36] font-bold underline">{phoneDisplay}</a>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
