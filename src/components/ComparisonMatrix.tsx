import React from 'react';
import { Check, X } from 'lucide-react';

export default function ComparisonMatrix() {
  type SpecRow = { feature: string; ozark: string; franchise: string; diy: string };
  const specs: SpecRow[] = [
    {
      feature: "Material Composition",
      ozark: "316 Marine Stainless Steel + T6 Anodized Aluminum Frame",
      franchise: "PVC Plastic Base + 304 Standard Stainless Mesh",
      diy: "Molded Vinyl or Standard Stamped Aluminum",
    },
    {
      feature: "Aperture Filter Size",
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
    <section id="specs" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 space-y-2">
          <span className="text-xs font-bold text-[#1D4ED8] uppercase tracking-wider block">Product Breakdown</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            How Ozark Micro-Mesh Compares
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Direct comparison between our local 316 surgical micro-mesh, high-pressure national sales franchises, and hardware store DIY screens:
          </p>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="sm:hidden flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium mb-4 bg-slate-50 py-2 px-3 border border-slate-200 rounded-lg">
          <span>Swipe horizontally to see full comparison</span>
        </div>

        <div className="border border-slate-200 rounded-xl overflow-x-auto bg-white shadow-sm" style={{ WebkitOverflowScrolling: 'touch' }}>
          <table className="w-full min-w-[640px] text-left border-collapse text-xs sm:text-sm font-sans">
            <thead>
              <tr className="bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider">
                <th className="py-4 px-5 w-1/4">Specification</th>
                <th className="py-4 px-5 bg-[#1D4ED8] text-white border-x border-blue-700 w-1/3">
                  Ozark Gutter Guard (316 Mesh)
                </th>
                <th className="py-4 px-5 text-slate-300 w-1/4">
                  National Franchise
                  <span className="block text-[10px] font-normal normal-case text-slate-400">(Reverse Curve / Vinyl)</span>
                </th>
                <th className="py-4 px-5 text-slate-400 w-1/6">
                  Hardware Store DIY
                  <span className="block text-[10px] font-normal normal-case text-slate-500">(Slotted Plastic/Alum)</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800">
              {specs.map((spec, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-[#F8F9FA]/60" : "bg-white"}>
                  <td className="py-3.5 px-5 font-bold text-slate-900 text-xs">{spec.feature}</td>
                  <td className="py-3.5 px-5 bg-blue-50/50 border-x border-blue-100 font-bold text-[#0F172A]">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] shrink-0"></span>
                      <span>{spec.ozark}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-5 text-slate-600">{spec.franchise}</td>
                  <td className="py-3.5 px-5 text-slate-500">{spec.diy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 bg-[#F8F9FA] border border-slate-200 rounded-xl p-5 sm:p-6 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8] bg-blue-50 px-2.5 py-1 rounded-md inline-block">
            Why 50-Micron Surgical Stainless Steel?
          </span>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Unlike solid curved hoods where water sheets off during severe Ozark storms, or slotted vinyl that easily clogs with pine needles, our 50-micron surgical mesh blocks pine needles and oak tassels while allowing maximum water throughput into the trough.
          </p>
        </div>
      </div>
    </section>
  );
}