import React from 'react';

export default function SystemicScopeSection() {
  const steps = [
    {
      number: "1",
      title: "Clean & Re-Slope Your Gutters",
      detail: "Before installing guards, we hand-clean all debris, flush your downspouts, and fix any sagging spots with heavy-duty hidden hangers so water drains properly."
    },
    {
      number: "2",
      title: "Fit Stainless Steel Micro-Mesh",
      detail: "We install heavy-duty stainless steel mesh that blocks tiny oak tassels, pine needles, and roof grit while letting torrential rain flow straight into the trough."
    },
    {
      number: "3",
      title: "Secure Fascia Mount (Zero Shingle Contact)",
      detail: "We screw directly to the gutter lip and fascia board. We never slide brackets under your shingles, keeping your roof manufacturer warranty 100% safe."
    }
  ];

  return (
    <section id="process" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <span className="text-xs font-bold text-[#1D4ED8] uppercase tracking-wider block">
            Our Installation Process
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            How We Protect Your Home
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Most gutter guards fail because they are installed over dirty, sagging gutters. Every Ozark installation includes complete gutter tune-up and cleaning standard:
          </p>
        </div>

        {/* 3 Clean Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F8F9FA] rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between space-y-5 shadow-xs"
            >
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold text-sm flex items-center justify-center">
                  {item.number}
                </div>
                <h3 className="font-bold text-lg text-[#0F172A] tracking-tight leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 text-xs font-semibold text-[#1D4ED8]">
                Included on Every Job
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
