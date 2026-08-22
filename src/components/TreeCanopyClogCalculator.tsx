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
          recommendedArmor: '50-Micron 316 Marine Grade Surgical Weave (Zero Needle Penetration)',
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
          riskScore: 89,
          annualSludgeLbs: Math.round(160 * (canopyDensity / 100)),
          clogFrequencyDays: 40,
          failureMode: 'Alternating spring catkin paste, summer seed pods, and fall pine needle penetration guarantee continuous clogging.',
          recommendedArmor: 'Full 5-Stage Restoration + 316 Surgical Steel Micro-Mesh Armor',
        };
    }
  };

  const profile = getDebrisProfile();
  const pitchMultiplier = roofPitch === 'extreme' ? 1.4 : roofPitch === 'steep' ? 1.2 : 1.0;
  const estimatedGallonsPerStorm = Math.round(1250 * pitchMultiplier);

  return (
    <div className="bg-slate-900 border-2 border-slate-700/80 rounded-2xl p-6 sm:p-8 text-white shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold mb-1.5">
            <TreePine className="w-3.5 h-3.5" />
            NWA Tree Canopy Bio-Load Diagnostic
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            {initialCity} Tree Debris &amp; Gutter Clog Risk Matrix
          </h3>
        </div>
        <div className="flex items-center gap-2 bg-slate-800/90 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300">
          <Droplets className="w-3.5 h-3.5 text-blue-400" />
          <span>47.5&quot; Annual Rainfall Zone</span>
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="grid sm:grid-cols-3 gap-4">
        {/* Tree Selector */}
        <div className="space-y-1.5">
          <label htmlFor={treeSelectId} className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Dominant Tree Canopy
          </label>
          <select
            id={treeSelectId}
            value={treeType}
            onChange={(e) => setTreeType(e.target.value as any)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2.5 text-sm font-semibold text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
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
            <label htmlFor={canopyDensityId} className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Canopy Overhang
            </label>
            <span className="text-xs font-mono font-bold text-orange-400">{canopyDensity}% Density</span>
          </div>
          <input
            id={canopyDensityId}
            type="range"
            min="20"
            max="100"
            step="5"
            value={canopyDensity}
            onChange={(e) => setCanopyDensity(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
          />
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>Light (20%)</span>
            <span>Moderate (50%)</span>
            <span>Heavy Forest (100%)</span>
          </div>
        </div>

        {/* Roof Pitch */}
        <div className="space-y-1.5">
          <label htmlFor={roofPitchId} className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Roof Pitch &amp; Velocity
          </label>
          <select
            id={roofPitchId}
            value={roofPitch}
            onChange={(e) => setRoofPitch(e.target.value as any)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2.5 text-sm font-semibold text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
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
        <div className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-4 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
            Clog Vulnerability Index
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-orange-400">{profile.riskScore}/100</span>
            <span className="text-xs font-bold text-red-400 uppercase">Critical</span>
          </div>
          <p className="text-xs text-slate-300 leading-snug">
            Without surgical micro-mesh, gutters will clog approximately every{' '}
            <strong className="text-white">{profile.clogFrequencyDays} days</strong> during active dropping cycles.
          </p>
        </div>

        {/* Annual Bio-Load */}
        <div className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-4 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
            Estimated Annual Bio-Load
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">~{profile.annualSludgeLbs} lbs</span>
            <span className="text-xs text-slate-400 font-mono">wet sludge/yr</span>
          </div>
          <p className="text-xs text-slate-300 leading-snug">
            Trapped weight stresses gutter fascia brackets, causing sagging and water pooling against the foundation.
          </p>
        </div>

        {/* Runoff Volume per Torrential Rain */}
        <div className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-4 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
            1-Inch Storm Water Volume
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-blue-400">{estimatedGallonsPerStorm.toLocaleString()}</span>
            <span className="text-xs text-slate-400 font-mono">gallons</span>
          </div>
          <p className="text-xs text-slate-300 leading-snug">
            Concentrated storm runoff generated by a 2,000 sq. ft. roof during a typical Ozark thunderstorm.
          </p>
        </div>
      </div>

      {/* Engineering Diagnostic Callout */}
      <div className="bg-slate-950 border border-orange-500/40 rounded-xl p-4 sm:p-5 space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider">
          <AlertTriangle className="w-4 h-4 text-orange-500 shrink-0" />
          <span>Physical Failure Mode Detected: {profile.name}</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {profile.failureMode}
        </p>
        <div className="pt-2 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Recommended Defense: {profile.recommendedArmor}</span>
          </div>
          <a
            href="#estimate-form"
            className="inline-flex items-center gap-1 font-bold text-orange-400 hover:text-orange-300 transition"
          >
            <span>Lock In Free Local Sizing Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
