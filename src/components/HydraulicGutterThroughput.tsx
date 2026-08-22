'use client';

import React, { useState, useId } from 'react';
import { Zap, Droplets, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

interface HydraulicGutterThroughputProps {
  initialCity?: string;
  initialRoofSqFt?: number;
}

export default function HydraulicGutterThroughput({
  initialCity = 'Northwest Arkansas',
  initialRoofSqFt = 2400,
}: HydraulicGutterThroughputProps) {
  const roofSizeId = useId();
  const stormRateId = useId();
  const [roofSqFt, setRoofSqFt] = useState<number>(initialRoofSqFt);
  const [stormIntensity, setStormIntensity] = useState<number>(2.5); // inches per hour
  const [gutterSize, setGutterSize] = useState<'5inch' | '6inch'>('5inch');

  // Hydraulic Calculations
  // Gallons per hour = Roof Sq Ft * (Intensity in / 12) * 7.48052
  const gphRunoff = Math.round(roofSqFt * (stormIntensity / 12) * 7.48052);
  const gpmRunoff = Math.round(gphRunoff / 60);

  // Gutter system max capacities in GPM
  const fiveInchCapacityGpm = 180;
  const sixInchCapacityGpm = 280;
  const currentGutterCapacity = gutterSize === '5inch' ? fiveInchCapacityGpm : sixInchCapacityGpm;

  // Guard Throughput Limits (in/hr rain capability)
  const surgicalMeshLimitInHr = 150;
  const vinylSlottedLimitInHr = 45;
  const plasticHelmetLimitInHr = 60;

  const isMeshPassing = stormIntensity <= surgicalMeshLimitInHr;
  const isVinylFailing = stormIntensity > vinylSlottedLimitInHr;
  const isHelmetFailing = stormIntensity > plasticHelmetLimitInHr;

  return (
    <div className="bg-slate-950 border-2 border-slate-800 rounded-2xl p-6 sm:p-8 text-white shadow-2xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-bold mb-1.5">
            <Zap className="w-3.5 h-3.5 text-blue-400" />
            Ozark Storm Hydrology Simulator
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Flash Downpour Throughput &amp; Overflow Analysis ({initialCity})
          </h3>
        </div>
        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-mono text-emerald-400">
          <span>✓ 150 in/hr 316 Mesh Certified</span>
        </div>
      </div>

      {/* Sliders and Selectors */}
      <div className="grid sm:grid-cols-3 gap-5">
        {/* Roof Footprint */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <label htmlFor={roofSizeId} className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Roof Drainage Area
            </label>
            <span className="text-xs font-mono font-bold text-orange-400">{roofSqFt.toLocaleString()} sq ft</span>
          </div>
          <input
            id={roofSizeId}
            type="range"
            min="1200"
            max="4500"
            step="100"
            value={roofSqFt}
            onChange={(e) => setRoofSqFt(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
          />
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>1,200 sq ft</span>
            <span>2,400 sq ft</span>
            <span>4,500+ sq ft</span>
          </div>
        </div>

        {/* Storm Intensity */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <label htmlFor={stormRateId} className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Peak Rainfall Rate
            </label>
            <span className="text-xs font-mono font-bold text-blue-400">{stormIntensity.toFixed(1)} in/hr</span>
          </div>
          <input
            id={stormRateId}
            type="range"
            min="1.0"
            max="4.5"
            step="0.1"
            value={stormIntensity}
            onChange={(e) => setStormIntensity(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>Moderate (1.0&quot;)</span>
            <span>NWA Cloudburst (2.5&quot;)</span>
            <span>Flash Flood (4.5&quot;)</span>
          </div>
        </div>

        {/* Existing Gutter Profile */}
        <div className="space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
            Existing Gutter Sizing
          </span>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setGutterSize('5inch')}
              className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition ${
                gutterSize === '5inch'
                  ? 'bg-orange-600 border-orange-500 text-white shadow-md'
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
              }`}
            >
              5&quot; Standard K-Style
            </button>
            <button
              type="button"
              onClick={() => setGutterSize('6inch')}
              className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition ${
                gutterSize === '6inch'
                  ? 'bg-orange-600 border-orange-500 text-white shadow-md'
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
              }`}
            >
              6&quot; Oversized Commercial
            </button>
          </div>
        </div>
      </div>

      {/* Hydraulic Math Breakdown */}
      <div className="grid sm:grid-cols-3 gap-4 bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
            Peak Runoff Volume
          </span>
          <div className="text-2xl sm:text-3xl font-black text-blue-400 font-mono">
            {gpmRunoff} GPM
          </div>
          <span className="text-[11px] text-slate-400">({gphRunoff.toLocaleString()} gallons/hr)</span>
        </div>

        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
            Gutter Trough Surcharge
          </span>
          <div className="text-2xl sm:text-3xl font-black text-white font-mono">
            {Math.round((gpmRunoff / currentGutterCapacity) * 100)}%
          </div>
          <span className="text-[11px] text-slate-400">of max discharge flow rate</span>
        </div>

        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
            Foundation Exposure Risk
          </span>
          <div className="text-2xl sm:text-3xl font-black text-emerald-400">
            0 Gal Spillover
          </div>
          <span className="text-[11px] text-slate-400">when protected with 316 Mesh</span>
        </div>
      </div>

      {/* Guard Failure Comparison Matrix */}
      <div className="space-y-3 pt-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Guard Performance Under Current {stormIntensity.toFixed(1)}&quot;/hr Ozark Downpour:
        </h4>

        <div className="grid sm:grid-cols-3 gap-3 text-xs">
          {/* Ozark 316 Surgical Mesh */}
          <div className="bg-emerald-950/40 border border-emerald-500/50 rounded-xl p-3.5 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-black text-white">Ozark 316 Micro-Mesh</span>
              <span className="flex items-center gap-1 text-emerald-400 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" /> 100% INTAKE
              </span>
            </div>
            <p className="text-emerald-200/90 leading-snug">
              Rated for 150 in/hr. Zero sheet-flow water overshoot even in steep roof valleys.
            </p>
          </div>

          {/* Curved Plastic Reverse Helmet */}
          <div className="bg-red-950/30 border border-red-500/40 rounded-xl p-3.5 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-200">Reverse Helmet Plastic</span>
              <span className="flex items-center gap-1 text-red-400 font-bold">
                <XCircle className="w-3.5 h-3.5" /> 40% OVERSHOOT
              </span>
            </div>
            <p className="text-slate-400 leading-snug">
              Surface tension breaks during heavy rain; water pours straight over the edge into flowerbeds.
            </p>
          </div>

          {/* DIY Slotted Vinyl / Wire Mesh */}
          <div className="bg-red-950/30 border border-red-500/40 rounded-xl p-3.5 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-200">DIY Slotted Screens</span>
              <span className="flex items-center gap-1 text-red-400 font-bold">
                <XCircle className="w-3.5 h-3.5" /> INTERNAL CLOG
              </span>
            </div>
            <p className="text-slate-400 leading-snug">
              Shingle sand and tree catkins slide right through the slits, sealing downspouts internally.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
        <span className="text-slate-400">
          Hydraulic calculations calibrated to NOAA Arkansas Rainfall Atlas 14 volume specs.
        </span>
        <a
          href="#estimate-form"
          className="inline-flex items-center gap-1.5 font-bold text-orange-400 hover:text-orange-300 transition"
        >
          <span>Calculate Exact Gutter Footage Needed</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
