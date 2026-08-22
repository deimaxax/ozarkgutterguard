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
  const stainlessMeshLimitInHr = 150;
  const vinylSlottedLimitInHr = 45;
  const plasticHelmetLimitInHr = 60;

  const isMeshPassing = stormIntensity <= stainlessMeshLimitInHr;
  const isVinylFailing = stormIntensity > vinylSlottedLimitInHr;
  const isHelmetFailing = stormIntensity > plasticHelmetLimitInHr;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 text-slate-900 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-1.5">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            Ozark Storm Hydrology Simulator
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
            Flash Downpour Throughput &amp; Overflow Analysis ({initialCity})
          </h3>
        </div>
        <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg text-xs font-bold text-emerald-800">
          <span>✓ 150 in/hr 316 Mesh Certified</span>
        </div>
      </div>

      {/* Sliders and Selectors */}
      <div className="grid sm:grid-cols-3 gap-5">
        {/* Roof Footprint */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-700">
            <label htmlFor={roofSizeId}>Roof Footprint</label>
            <span className="font-mono text-blue-700">{roofSqFt.toLocaleString()} sq ft</span>
          </div>
          <input
            id={roofSizeId}
            type="range"
            min="1200"
            max="5000"
            step="100"
            value={roofSqFt}
            onChange={(e) => setRoofSqFt(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>1,200 sq ft</span>
            <span>3,000 sq ft</span>
            <span>5,000 sq ft</span>
          </div>
        </div>

        {/* Storm Intensity */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-700">
            <label htmlFor={stormRateId}>Rainfall Deluge</label>
            <span className="font-mono text-blue-700">{stormIntensity.toFixed(1)} in/hr</span>
          </div>
          <input
            id={stormRateId}
            type="range"
            min="1.0"
            max="4.5"
            step="0.5"
            value={stormIntensity}
            onChange={(e) => setStormIntensity(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>Moderate (1.0&quot;)</span>
            <span>Severe Storm (2.5&quot;)</span>
            <span>Cloudburst (4.5&quot;)</span>
          </div>
        </div>

        {/* Existing Gutter Spec */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
            Existing Trough Size
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setGutterSize('5inch')}
              className={`py-2 px-3 rounded-xl border text-xs font-bold transition ${
                gutterSize === '5inch'
                  ? 'bg-slate-900 border-slate-900 text-white'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              5&quot; Standard K-Style
            </button>
            <button
              type="button"
              onClick={() => setGutterSize('6inch')}
              className={`py-2 px-3 rounded-xl border text-xs font-bold transition ${
                gutterSize === '6inch'
                  ? 'bg-slate-900 border-slate-900 text-white'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              6&quot; Seamless Max
            </button>
          </div>
        </div>
      </div>

      {/* Hydraulic Calculation Output */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
            <Droplets className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-500 block">Total Roofline Storm Runoff</span>
            <span className="text-2xl font-black text-slate-950">
              {gpmRunoff.toLocaleString()} GPM{' '}
              <span className="text-xs font-normal text-slate-500">
                ({gphRunoff.toLocaleString()} Gallons / Hour)
              </span>
            </span>
          </div>
        </div>

        <div className="text-right">
          <span className="text-xs text-slate-500 block">Current Trough Capacity</span>
          <span className="text-sm font-bold text-slate-900">
            {currentGutterCapacity} GPM Max Limit
          </span>
        </div>
      </div>

      {/* 3-Way Guard Comparison Under Simulated Load */}
      <div className="grid md:grid-cols-3 gap-4">
        {/* marine-grade 316 micro-mesh */}
        <div className="bg-slate-50 border-2 border-emerald-600/50 rounded-xl p-4 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-emerald-800 uppercase">316 marine-grade 316 micro-mesh</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <span className="text-lg font-black text-slate-950 block">100% Water Capture</span>
          <p className="text-xs text-slate-600 leading-relaxed">
            Surface tension capillary action draws 150 in/hr rain into gutter channel with zero overshoot.
          </p>
        </div>

        {/* Plastic Reverse Helmet */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-700 uppercase">Reverse Curve Solid Helmet</span>
            {isHelmetFailing ? (
              <XCircle className="w-4 h-4 text-red-500" />
            ) : (
              <CheckCircle2 className="w-4 h-4 text-amber-500" />
            )}
          </div>
          <span className="text-lg font-black text-slate-950 block">
            {isHelmetFailing ? 'High Overflow Risk' : 'Marginal Flow'}
          </span>
          <p className="text-xs text-slate-600 leading-relaxed">
            High volume rainwater breaks surface tension and sheets right over the curved edge onto foundation.
          </p>
        </div>

        {/* Slotted Vinyl Screen */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-700 uppercase">Perforated Vinyl/Plastic Screen</span>
            {isVinylFailing ? (
              <XCircle className="w-4 h-4 text-red-500" />
            ) : (
              <CheckCircle2 className="w-4 h-4 text-amber-500" />
            )}
          </div>
          <span className="text-lg font-black text-slate-950 block">
            {isVinylFailing ? 'Critical Damming' : 'Partial Flow'}
          </span>
          <p className="text-xs text-slate-600 leading-relaxed">
            Shingle grit and oak pollen lodge in slots, reducing active drainage area by up to 70%.
          </p>
        </div>
      </div>

      {/* Quote Callout */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-100">
        <p className="text-xs text-slate-600">
          Want our engineering team to calculate your exact roofline pitch and valley runoff?
        </p>
        <a
          href="/satellite-quote"
          className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition shadow-sm shrink-0 flex items-center gap-1.5"
        >
          <span>Get Free 15-Minute Satellite Sizing</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
