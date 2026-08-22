import React from 'react';

export default function ComparisonMatrix() {
  type SpecRow = { feature: string; ozark: string; franchise: string; diy: string };
  const specs: SpecRow[] = [
    {
      feature: "Screen Material",
      ozark: "Marine-Grade 316 Stainless Steel Mesh + Aluminum Frame",
      franchise: "Plastic Frame + Standard 304 Steel Mesh",
      diy: "Molded Vinyl or Thin Stamped Aluminum",
    },
    {
      feature: "What It Keeps Out",
      ozark: "Blocks 100% of pine needles, oak tassels, seeds & shingle grit",
      franchise: "Allows fine oak tassels and small debris to pass through",
      diy: "Clogs easily with needles and small twigs",
    },
    {
      feature: "Heavy Rain Performance",
      ozark: "Water flows directly in without overshooting or spilling",
      franchise: "Water can sheet off and spill over in heavy storms",
      diy: "Easily overflows during moderate rainfall",
    },
    {
      feature: "Roof Warranty Safe",
      ozark: "100% Safe — Fastened to gutters & fascia (zero shingle contact)",
      franchise: "Slid under shingles — May void your roof warranty",
      diy: "Clipped under shingles or bent over edges",
    },
    {
      feature: "Gutter Realignment",
      ozark: "Full hand-cleanout & slope tune-up included on every job",
      franchise: "Often charges an extra $500–$1,000 for gutter repairs",
      diy: "None — Installed over existing un-sloped gutters",
    },
    {
      feature: "Typical Home Cost (150–200 ft)",
      ozark: "$1,250 – $1,650 (Direct local contractor pricing)",
      franchise: "$4,500 – $7,500 (Sales commissions & franchise fees)",
      diy: "$350 – $600 (Materials only + your own weekend labor)",
    },
    {
      feature: "Warranty",
      ozark: "10-Year Written No-Clog Guarantee",
      franchise: "Limited corporate warranty with fine-print exclusions",
      diy: "No warranty against clogging",
    },
  ];

  return (
    <section id="specs" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 space-y-2">
          <span className="text-xs font-bold text-[#D92626] uppercase tracking-wider block">
            Honest Comparison
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F1E36] tracking-tight">
            How We Compare to Other Options
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            See how our local stainless steel micro-mesh stacks up against expensive national sales franchises and DIY hardware store screens:
          </p>
        </div>

        {/* Mobile Comparison Cards (Optimized for phones) */}
        <div className="md:hidden space-y-4">
          {specs.map((spec, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 pb-2">
                {spec.feature}
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-1">
                <span className="text-[11px] font-black text-[#0F1E36] uppercase tracking-wider block">
                  Ozark Gutter Guard
                </span>
                <p className="text-xs font-bold text-[#0F1E36]">
                  {spec.ozark}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                <div className="p-2 bg-slate-50/50 rounded border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">Franchises</span>
                  <span className="text-[11px] text-slate-600">{spec.franchise}</span>
                </div>
                <div className="p-2 bg-slate-50/50 rounded border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">Hardware DIY</span>
                  <span className="text-[11px] text-slate-500">{spec.diy}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop & Tablet Table */}
        <div className="hidden md:block border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm font-sans">
            <thead>
              <tr className="bg-[#0F1E36] text-white text-xs font-semibold uppercase tracking-wider">
                <th className="py-4 px-5 w-1/4">Feature</th>
                <th className="py-4 px-5 bg-[#183059] text-white border-x border-[#243B53] w-1/3">
                  Ozark Gutter Guard
                </th>
                <th className="py-4 px-5 text-slate-300 w-1/4">
                  National Brand Franchises
                </th>
                <th className="py-4 px-5 text-slate-400 w-1/6">
                  Hardware Store DIY
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800">
              {specs.map((spec, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-[#F8F9FA]/60" : "bg-white"}>
                  <td className="py-3.5 px-5 font-bold text-[#0F1E36] text-xs">{spec.feature}</td>
                  <td className="py-3.5 px-5 bg-slate-100/70 border-x border-slate-200 font-bold text-[#0F1E36]">
                    {spec.ozark}
                  </td>
                  <td className="py-3.5 px-5 text-slate-600">{spec.franchise}</td>
                  <td className="py-3.5 px-5 text-slate-500">{spec.diy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}