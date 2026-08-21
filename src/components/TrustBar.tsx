import React from 'react';

export default function TrustBar() {
  const specs = [
    { label: "ACCREDITATION", value: "AR Lic. #OGG-479-NWA", sub: "$2M Commercial Liability" },
    { label: "VERIFIED REVIEWS", value: "5.0 Google Score", sub: "187+ Verified NWA Homeowners" },
    { label: "ROOFLINE INTEGRITY", value: "0% Shingle Contact", sub: "Fascia Mounted / Warranty Safe" },
    { label: "METALLURGY", value: "316 Marine Stainless", sub: "440-Micron Hydrodynamic Weave" },
    { label: "GUARANTEE", value: "10-Yr Transferable", sub: "100% No-Clog Guarantee" }
  ];

  return (
    <section className="bg-iron-900 text-white border-y border-iron-800 py-4 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-iron-800">
          {specs.map((item, idx) => (
            <div key={idx} className="p-3 sm:px-4 sm:py-1">
              <span className="text-[10px] text-copper block font-bold uppercase tracking-wider">
                [{item.label}]
              </span>
              <span className="font-black text-sm text-white block mt-0.5 font-sans">
                {item.value}
              </span>
              <span className="text-[11px] text-iron-400 block mt-0.5">
                {item.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
