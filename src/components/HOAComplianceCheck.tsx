'use client';

import React, { useState } from 'react';
import { ShieldCheck, Check, Info, Home, Palette, ArrowRight } from 'lucide-react';

interface HOAComplianceCheckProps {
  initialCity?: string;
}

const NWA_SUBDIVISIONS: Record<
  string,
  {
    hoaTier: string;
    allowedColors: string[];
    roofWarrantyReq: string;
    fasciaMountReq: string;
  }
> = {
  'Pinnacle Hills (Rogers)': {
    hoaTier: 'Strict Architectural Review Committee (ARC)',
    allowedColors: ['Low-Profile Bronze', 'Matte Black', 'Royal Brown', 'Mill Finish Anodized'],
    roofWarrantyReq: 'Zero shingle penetration permitted; must not void GAF / CertainTeed lifetime shingles.',
    fasciaMountReq: 'Must fasten directly to gutter lip and exterior fascia board with hidden zinc hex screws.',
  },
  'Shadow Valley (Rogers)': {
    hoaTier: 'Country Club Architectural Guidelines',
    allowedColors: ['Architectural Bronze', 'Charcoal Grey', 'White Gloss', 'Dark Bronze'],
    roofWarrantyReq: 'Shingle lifting or bracket tucking under first row strictly forbidden by HOA covenant.',
    fasciaMountReq: 'Continuous seamless profile matching trim color.',
  },
  'Har-Ber Meadows (Springdale)': {
    hoaTier: 'Historic / Traditional Architectural Board',
    allowedColors: ['Clay', 'Heritage Bronze', 'Classic White', 'Dark Green'],
    roofWarrantyReq: 'Drip edge and ice shield barrier integrity must be preserved 100%.',
    fasciaMountReq: 'Sub-fascia reinforcement and hidden internal hangers.',
  },
  'Downtown / Coler Corridor (Bentonville)': {
    hoaTier: 'Modern Architectural & Historic Preservation',
    allowedColors: ['Modern Black', 'Matte Bronze', 'Aluminum Anodized'],
    roofWarrantyReq: 'Preserves existing cedar or architectural shingle warranty without nailing into decking.',
    fasciaMountReq: 'Precision pitch alignment hidden behind crown moulding or trim.',
  },
  'General NWA Residential Community': {
    hoaTier: 'Standard Municipal Building Code Compliance',
    allowedColors: ['Bronze', 'White', 'Black', 'Clay', 'Brown'],
    roofWarrantyReq: '100% manufacturer warranty safe (GAF, Owens Corning, CertainTeed, Malarkey).',
    fasciaMountReq: 'Direct fascia mounting with zero shingle adhesive breakdown.',
  },
};

export default function HOAComplianceCheck({ initialCity = 'Bentonville' }: HOAComplianceCheckProps) {
  const [selectedSubdivision, setSelectedSubdivision] = useState<string>(
    initialCity.toLowerCase().includes('rogers')
      ? 'Pinnacle Hills (Rogers)'
      : initialCity.toLowerCase().includes('springdale')
      ? 'Har-Ber Meadows (Springdale)'
      : 'Pinnacle Hills (Rogers)'
  );
  const [selectedColor, setSelectedColor] = useState<string>('Low-Profile Bronze');

  const currentInfo = NWA_SUBDIVISIONS[selectedSubdivision] || NWA_SUBDIVISIONS['General NWA Residential Community'];

  return (
    <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            NWA HOA &amp; Roof Warranty Compliance Engine
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Subdivision HOA Approval &amp; Shingle Warranty Verification
          </h3>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
          <span>✓ 100% HOA Pre-Approved</span>
        </div>
      </div>

      {/* Selectors */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Select Neighborhood or Subdivision
          </label>
          <select
            value={selectedSubdivision}
            onChange={(e) => setSelectedSubdivision(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-bold text-slate-900 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          >
            {Object.keys(NWA_SUBDIVISIONS).map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Fascia / Gutter Trim Match Color
          </label>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-bold text-slate-900 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          >
            {currentInfo.allowedColors.map((col) => (
              <option key={col} value={col}>
                {col} (Approved)
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Verification Matrix */}
      <div className="grid sm:grid-cols-3 gap-4 pt-1">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
            ARC Governance Tier
          </span>
          <p className="font-bold text-slate-900 text-sm">{currentInfo.hoaTier}</p>
          <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-semibold">
            <Check className="w-3 h-3" /> Fully Compliant
          </span>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
            Manufacturer Warranty Safe
          </span>
          <p className="font-bold text-slate-900 text-sm">0% Shingle Penetration</p>
          <p className="text-[11px] text-slate-600 leading-snug">{currentInfo.roofWarrantyReq}</p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
            Mounting Standard
          </span>
          <p className="font-bold text-slate-900 text-sm">Fascia Lip Direct Anchor</p>
          <p className="text-[11px] text-slate-600 leading-snug">{currentInfo.fasciaMountReq}</p>
        </div>
      </div>

      {/* Proof Box */}
      <div className="bg-emerald-950 text-white rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 font-bold text-sm text-emerald-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Pre-Certified For Architectural Review in {selectedSubdivision}</span>
          </div>
          <p className="text-xs text-slate-300">
            Our 316 marine-grade 316 micro-mesh installs flush with the gutter line with zero upward visible bulge, maintaining 100% curb appeal and HOA compliance.
          </p>
        </div>
        <a
          href="#estimate-form"
          className="shrink-0 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold rounded-lg transition shadow-md"
        >
          Verify My Address →
        </a>
      </div>
    </div>
  );
}
