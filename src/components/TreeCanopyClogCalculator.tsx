'use client';

import React, { useState, useId } from 'react';
import { TreePine, AlertTriangle, ShieldCheck, Droplets, ArrowRight } from 'lucide-react';

interface TreeCanopyProps {
  initialCity?: string;
  initialTreeType?: 'pine' | 'oak' | 'maple' | 'sweetgum' | 'mixed';
}

export default function TreeCanopyClogCalculator({
  initialCity = 'Bentonville',
  initialTreeType = 'mixed',
}: TreeCanopyProps) {
  const treeSelectId = useId();
  const canopyDensityId = useId();
  const roofPitchId = useId();
  const [treeType, setTreeType] = useState<'pine' | 'oak' | 'maple' | 'sweetgum' | 'mixed'>(
    initialTreeType === 'mixed' ? 'oak' : initialTreeType
  );
  const [canopyDensity, setCanopyDensity] = useState<number>(75); // percentage
  const [roofPitch, setRoofPitch] = useState<'standard' | 'steep' | 'extreme'>('standard');

  // Bio-load debris calculations specific to NWA Ozark flora
  const getDebrisProfile = () => {
    switch (treeType) {
      case 'pine':
        return {
          name: 'Shortleaf & Loblolly Pine Needles',
          riskLevel: 'Severe Internal Piercing Risk',
          riskScore: 94,
          annualSludgeLbs: Math.round(180 * (canopyDensity / 100)),
          clogFrequencyDays: 35,
          failureMode: '3.5-inch needles weave into dense interlocking mesh filters inside standard slotted guards, trapping fine silt.',
          recommendedArmor: '50-Micron 316 Marine Grade 316 stainless Weave (Zero Needle Penetration)',
        };
      case 'oak':
        return {
          name: 'Post Oak & White Oak Spring Catkins (Tassels)',
          riskLevel: 'Extreme Cementitious Sludge Risk',
          riskScore: 91,
          annualSludgeLbs: Math.round(145 * (canopyDensity / 100)),
          clogFrequencyDays: 45,
          failureMode: 'Spring pollen catkins combine with roof grit to create a heavy asphalt-like sludge that seals downspout throats.',
          recommendedArmor: 'Self-Shedding Smooth Fascia-Mount Micro-Mesh with Zero Gutter Lip Lip-Over',
        };
      case 'sweetgum':
        return {
          name: 'Sweetgum Spiked Seed Balls & Twigs',
          riskLevel: 'Downspout Throat Blockage',
          riskScore: 86,
          annualSludgeLbs: Math.round(130 * (canopyDensity / 100)),
          clogFrequencyDays: 60,
          failureMode: 'Hard spherical seed pods lodge firmly in downspout drop outlets, causing rapid 2-story valley overflow.',
          recommendedArmor: 'Continuous T6 Anodized Substructure with 150 in/hr Flow Hydraulic Intake',
        };
      case 'maple':
        return {
          name: 'Silver Maple Helicopters & Broadleaf Foliage',
          riskLevel: 'Surface Matting & Damp Mold',
          riskScore: 82,
          annualSludgeLbs: Math.round(120 * (canopyDensity / 100)),
          clogFrequencyDays: 70,
          failureMode: 'Flat wet leaves plaster over standard curved plastic helmets, causing total rain runoff overshoot.',
          recommendedArmor: 'Laser-Leveled Capillary Micro-Mesh with Valley Splash Diverters',
        };
      default:
        return {
          name: 'Mixed Ozark Hardwood & Hard Pine Canopy',
          riskLevel: 'Year-Round Multi-Species Threat',
          riskScore: 88,
          annualSludgeLbs: Math.round(155 * (canopyDensity / 100)),
          clogFrequencyDays: 40,
          failureMode: 'Alternating cycles of spring pollen catkins, summer seed pods, and autumn leaf blanket over open gutters.',
          recommendedArmor: 'Multi-Season 316 Stainless Micro-Mesh Armor on T6 Extruded Chassis',
        };
    }
  };

  const profile = getDebrisProfile();

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 text-slate-900 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <TreePine className="w-3.5 h-3.5 text-emerald-700" />
            Northwest Arkansas Canopy Bio-Load Simulator
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-950 mt-2">
            Calculate Tree Sludge Weight on {initialCity} Rooflines
          </h3>
        </div>
        <div className="text-right">
          <span className="text-xs text-slate-500 block">Regional Botanical Data</span>
          <span className="text-xs font-bold text-slate-700">Ozark Hardwood Spec</span>
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="grid sm:grid-cols-3 gap-4">
        {/* Tree Selector */}
        <div className="space-y-1.5">
          <label htmlFor={treeSelectId} className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Dominant Tree Canopy
          </label>
          <select
            id={treeSelectId}
            value={treeType}
            onChange={(e) => setTreeType(e.target.value as any)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-blue-600 focus:outline-none"
          >
            <option value="pine">Pine Needles (Shortleaf / Loblolly)</option>
            <option value="oak">Oak Catkins &amp; Acorns (Post / White)</option>
            <option value="sweetgum">Sweetgum Seed Balls &amp; Twigs</option>
            <option value="maple">Maple Helicopters &amp; Broadleaves</option>
            <option value="mixed">Mixed Hardwood &amp; Pine Stand</option>
          </select>
        </div>

        {/* Canopy Density Slider */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <label htmlFor={canopyDensityId} className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Canopy Overhang
            </label>
            <span className="text-xs font-mono font-bold text-blue-700">{canopyDensity}% Density</span>
          </div>
          <input
            id={canopyDensityId}
            type="range"
            min="20"
            max="100"
            step="5"
            value={canopyDensity}
            onChange={(e) => setCanopyDensity(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>Light (20%)</span>
            <span>Moderate (50%)</span>
            <span>Heavy Forest (100%)</span>
          </div>
        </div>

        {/* Roof Pitch */}
        <div className="space-y-1.5">
          <label htmlFor={roofPitchId} className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Roof Pitch &amp; Velocity
          </label>
          <select
            id={roofPitchId}
            value={roofPitch}
            onChange={(e) => setRoofPitch(e.target.value as any)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-blue-600 focus:outline-none"
          >
            <option value="standard">Standard Pitch (4/12 to 6/12)</option>
            <option value="steep">Steep Architectural (7/12 to 9/12)</option>
            <option value="extreme">Extreme Hillside (10/12 to 12/12+)</option>
          </select>
        </div>
      </div>

      {/* Dynamic Results Grid */}
      <div className="grid md:grid-cols-3 gap-4 pt-2">
        {/* Risk Score */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
            Clog Vulnerability Index
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-slate-950">{profile.riskScore}/100</span>
            <span className="text-xs font-bold text-amber-700 uppercase">Severe Bio-Load</span>
          </div>
          <p className="text-xs text-slate-600 leading-snug">
            Without marine-grade 316 micro-mesh, gutters will clog approximately every{' '}
            <strong className="text-slate-900">{profile.clogFrequencyDays} days</strong> during active dropping cycles.
          </p>
        </div>

        {/* Annual Weight */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
            Annual Trough Bio-Weight
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-slate-950">{profile.annualSludgeLbs} lbs</span>
            <span className="text-xs font-bold text-slate-500">/ 150 LF roofline</span>
          </div>
          <p className="text-xs text-slate-600 leading-snug">
            Saturated wet sludge weight pulling on cedar fascia boards, causing bracket pull-out and rot.
          </p>
        </div>

        {/* Failure Mode Warning */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
          <div className="flex items-center gap-1.5 text-amber-800 text-[11px] font-bold uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            <span>Observed Failure Mode</span>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed font-medium">
            {profile.failureMode}
          </p>
        </div>
      </div>

      {/* Recommended Solution Banner */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Prescribed Engineering Armor</span>
          </div>
          <p className="text-sm font-bold text-slate-900">
            {profile.recommendedArmor}
          </p>
        </div>
        <a
          href="/satellite-quote"
          className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition shadow-sm shrink-0 flex items-center gap-1.5"
        >
          <span>Calculate Remote Quote</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
