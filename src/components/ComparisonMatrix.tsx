import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';

export default function ComparisonMatrix() {
  // Ozark Hydrological Specification Matrix — DO NOT revert micron values (spec from attachment)
  type SpecRow = { feature: string; ozark: string; franchise: string; diy: string };
  const specs: SpecRow[] = [
    {
      feature: "Material Composition",
      ozark: "316 Marine-Grade Stainless Steel + T6 Anodized Aluminum Frame",
      franchise: "PVC Plastic Base + 304 Standard Stainless Mesh",
      diy: "Molded Vinyl or Standard Stamped Aluminum",
    },
    {
      feature: "Aperture Micron Size",
      ozark: "50 Microns — Blocks 100% shingle grit & oak pollen",
      franchise: "~150–250 Microns — Allows fine catkins to pass",
      diy: ">1,000 Microns / Large Slits — Clogs internally",
    },
    {
      feature: "Water Throughput Capacity",
      ozark: "150 inches/hour — Handles any Ozark downpour",
      franchise: "40–60 inches/hour — Fails under NWA storms",
      diy: "Overshoots gutters during moderate rainfall",
    },
    {
      feature: "Shingle Warranty Impact",
      ozark: "0% Contact — Fascia & gutter lip mounted only",
      franchise: "Brackets slid under shingles — Voids GAF/OC warranty",
      diy: "Slid under shingles or clipped to edges",
    },
    {
      feature: "Ice Dam & Snow Load",
      ozark: "45 lbs/linear ft structural rigidity",
      franchise: "Warps and sags under frozen winter sleet",
      diy: "Snaps under freezing expansion cycles",
    },
    {
      feature: "Pre-Install Realignment",
      ozark: "Laser Slope Tune-Up & Full Cleanout Included",
      franchise: "Extra $500–$1,000 Surcharge",
      diy: "None — traps standing water",
    },
    {
      feature: "Investment (150–200 LF)",
      ozark: "$1,250 – $1,650 (Direct Contractor)",
      franchise: "$4,500 – $7,500 (Sales Commission Markup)",
      diy: "$350 – $600 (DIY Material Only)",
    },
    {
      feature: "No-Clog Guarantee",
      ozark: "10-Year 100% Transferable Written Guarantee",
      franchise: "Limited (Excludes exterior caking)",
      diy: "Zero Warranty",
    },
  ];

  return (
    <section id="specs" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-brand-navy tracking-tight">
            Ozark Hydrological Specification Matrix
          </h2>
          <p className="text-sm text-slate-600 mt-1 font-normal">
            Hard engineering specs — 50-micron aperture, 150 in/hr throughput, 45 lbs/LF ice load:
          </p>
        </div>

        <div className="border border-slate-200 rounded-lg overflow-x-auto bg-white shadow-xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-brand-navy text-white text-xs font-bold uppercase tracking-wider">
                <th className="py-3.5 px-4 w-1/4">Engineering Metric</th>
                <th className="py-3.5 px-4 bg-brand-navyDark text-emerald-400 border-x border-slate-800 w-1/3">
                  Ozark Gutter Guard — 316 Surgical Mesh
                </th>
                <th className="py-3.5 px-4 text-slate-300 w-1/4">
                  National Franchise
                  <span className="block text-[10px] font-normal normal-case tracking-normal text-slate-400">(Plastic / Reverse Curve)</span>
                </th>
                <th className="py-3.5 px-4 text-slate-400 w-1/6">
                  Hardware Store DIY
                  <span className="block text-[10px] font-normal normal-case tracking-normal text-slate-500">(Vinyl / Slotted Metal)</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800 font-medium">
              {specs.map((spec, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-slate-50/40" : "bg-white"}>
                  <td className="py-3 px-4 font-bold text-slate-900">{spec.feature}</td>
                  <td className="py-3 px-4 bg-emerald-50/40 border-x border-emerald-200 font-bold text-brand-navy">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-brand-green shrink-0" />
                      <span>{spec.ozark}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-slate-600">{spec.franchise}</td>
                  <td className="py-3 px-4 text-slate-500">{spec.diy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 bg-white border border-slate-200 rounded-lg p-5 sm:p-7 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-green bg-emerald-50 px-2.5 py-1 rounded inline-block">
            50-Micron Surgical Hydrodynamic Weave
          </span>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Unlike solid curved hoods that fail surface tension during Ozark flash downpours, or slotted vinyl that traps
            Bella Vista pine needles like a comb, our 50-micron surgical mesh blocks 100% of shingle grit and oak pollen
            while processing 150 in/hr of storm water — zero roof shingle contact, 45 lbs/linear ft ice load rating.
          </p>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-800 pt-1">
            <ShieldCheck className="w-4 h-4 text-brand-green" />
            <span>Zero Roof Shingle Contact — Preserves 100% of GAF, CertainTeed & Owens Corning Warranty</span>
          </div>
        </div>
      </div>
    </section>
  );
}