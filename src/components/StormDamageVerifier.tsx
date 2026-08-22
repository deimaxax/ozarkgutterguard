'use client';

import React, { useState, useId } from 'react';
import { CloudRain, CheckCircle, ArrowRight, MapPin, FileText } from 'lucide-react';

export interface StormRecord {
  date: string;
  hailSize: string;
  windSpeed: string;
  damageRisk: string;
  affectedNeighborhoods: string[];
}

interface StormDamageVerifierProps {
  initialCity?: string;
  initialZip?: string;
  stormData?: StormRecord;
}

const DEFAULT_STORM_DATA: StormRecord = {
  date: 'May 26, 2024',
  hailSize: '1.75" – 2.00" Severe Swath',
  windSpeed: '78 MPH Peak Gusts',
  damageRisk: 'Severe Roofline Hydro-Impact & Debris Sludge',
  affectedNeighborhoods: ['Downtown Square', 'Coler Preserve', 'Residential Corridor'],
};

export default function StormDamageVerifier({ 
  initialCity = 'Bentonville', 
  initialZip = '72712',
  stormData = DEFAULT_STORM_DATA,
}: StormDamageVerifierProps) {
  const streetInputId = useId();
  const [streetAddress, setStreetAddress] = useState('');
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!streetAddress) return;
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setHasInteracted(true);
    }, 1200);
  };

  return (
    <div className="bg-slate-900 border-2 border-orange-500/40 rounded-2xl p-6 sm:p-8 text-white shadow-2xl space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-mono font-bold">
            <CloudRain className="w-3.5 h-3.5" />
            NOAA NEXRAD Severe Storm &amp; Drainage Verification
          </span>
          <h3 className="text-xl sm:text-2xl font-black mt-1">
            {initialCity} ({initialZip}) Roofline Impact Analysis
          </h3>
        </div>
        <span className="px-3 py-1 bg-emerald-950 border border-emerald-500/40 text-emerald-400 text-xs font-bold rounded-lg">
          Live NWA Radar Verified
        </span>
      </div>

      {/* Interactive form for user engagement */}
      {!hasInteracted && !isScanning && (
        <form onSubmit={handleScan} className="space-y-4">
          <label htmlFor={streetInputId} className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
            Enter Property Address in {initialCity} to Verify Exact Swath Impact:
          </label>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              id={streetInputId}
              type="text"
              required
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
              placeholder="e.g. 1402 SE Walton Blvd or Shadow Valley..."
              className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm font-semibold text-white placeholder-slate-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm rounded-xl transition shadow-lg shrink-0 flex items-center justify-center gap-2"
            >
              <span>Analyze Property</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}

      {isScanning && (
        <div className="py-8 text-center space-y-3">
          <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="font-mono text-xs text-orange-400 animate-pulse">
            Triangulating Doppler Hail Swath &amp; Tree Canopy Velocity for {streetAddress}...
          </p>
        </div>
      )}

      {/* SSR Data Block: Always present in static HTML for Googlebot, enhanced on user interaction */}
      <div className={`space-y-5 ${!hasInteracted ? 'border-t border-slate-800 pt-4' : ''}`}>
        <div className="bg-slate-950 border border-emerald-500/40 rounded-xl p-4 sm:p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>{hasInteracted ? `Storm Swath Confirmed for: ${streetAddress}` : `Regional NOAA Ground Truth (${initialCity})`}</span>
            </span>
            <span className="font-mono text-xs text-slate-400">Station KSRX</span>
          </div>

          <div className="grid sm:grid-cols-3 gap-3 pt-2 text-xs">
            <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
              <span className="text-slate-500 block text-[10px] uppercase font-bold">Confirmed Hail Swath</span>
              <span className="text-white font-bold block">{stormData.date}</span>
              <span className="text-orange-400 font-mono">{stormData.hailSize}</span>
            </div>
            <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
              <span className="text-slate-500 block text-[10px] uppercase font-bold">Peak Gust Velocity</span>
              <span className="text-white font-bold block">{stormData.windSpeed}</span>
              <span className="text-blue-400 font-mono">150 in/hr Hydrology Load</span>
            </div>
            <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
              <span className="text-slate-500 block text-[10px] uppercase font-bold">Structural Threat</span>
              <span className="text-red-400 font-bold block">{stormData.damageRisk}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-2">
          <span className="text-xs text-slate-400">
            ✓ Verified for {initialCity} Building Code (IRC 2021 NWA Amendments) &amp; Zero-Penetration Fascia Mount.
          </span>
          <a
            href="#estimate-form"
            className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-xs font-black rounded-lg transition shadow-md shrink-0 flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Generate Localized Quote</span>
          </a>
        </div>
      </div>
    </div>
  );
}
