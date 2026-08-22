import React from 'react';
import { LocalCaseStudy } from '@/data/caseStudies';
import { ShieldCheck, MapPin, Wrench, CheckCircle2, Zap, DollarSign, Award } from 'lucide-react';

interface LocalCaseStudyCardProps {
  caseStudy: LocalCaseStudy;
}

export default function LocalCaseStudyCard({ caseStudy }: LocalCaseStudyCardProps) {
  return (
    <article className="bg-white border-2 border-slate-200 hover:border-orange-500 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all space-y-5">
      {/* Card Header */}
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-[10px] font-mono font-bold uppercase tracking-wider">
              Field Case Study #{caseStudy.id.toUpperCase()}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
              ✓ Verified Installation
            </span>
          </div>
          <h3 className="font-black text-slate-950 text-lg sm:text-xl">
            {caseStudy.homeType} — {caseStudy.neighborhood}
          </h3>
          <div className="flex items-center gap-1 text-xs text-slate-500 font-medium mt-1">
            <MapPin className="w-3.5 h-3.5 text-orange-600 shrink-0" />
            <span>{caseStudy.streetName}, {caseStudy.city}, AR {caseStudy.zipCode}</span>
          </div>
        </div>

        <div className="text-right">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Completed</span>
          <span className="text-xs font-mono font-bold text-slate-700">{caseStudy.completedDate}</span>
          <span className="text-[11px] text-emerald-700 font-bold block mt-0.5">Homeowner: {caseStudy.homeownerInitials}</span>
        </div>
      </div>

      {/* Engineering Specs Matrix Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs">
        <div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Linear Footage</span>
          <span className="font-bold text-slate-900">{caseStudy.linearFeet} Linear Ft</span>
        </div>
        <div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Roofline Pitch</span>
          <span className="font-bold text-slate-900">{caseStudy.pitch}</span>
        </div>
        <div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Flow Rate Tested</span>
          <span className="font-bold text-orange-600 font-mono">{caseStudy.intakeRateTested}</span>
        </div>
        <div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Verified Savings</span>
          <span className="font-bold text-emerald-700">{caseStudy.verifiedSavings}</span>
        </div>
      </div>

      {/* Problem & Solution Breakdown */}
      <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm">
        <div className="bg-red-50/60 border border-red-100 rounded-xl p-4 space-y-1.5">
          <div className="flex items-center gap-1.5 text-red-800 font-bold text-xs uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-red-600"></span>
            <span>Pre-Existing Drainage Failure</span>
          </div>
          <p className="text-slate-700 leading-relaxed font-normal">
            {caseStudy.problem}
          </p>
          <div className="pt-2 text-[11px] text-red-900 font-medium">
            <strong>Canopy Threat:</strong> {caseStudy.treeThreat}
          </div>
        </div>

        <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-4 space-y-1.5">
          <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-xs uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>Engineering Solution Executed</span>
          </div>
          <p className="text-slate-700 leading-relaxed font-normal">
            {caseStudy.solutionExecuted}
          </p>
          <div className="pt-2 text-[11px] text-emerald-900 font-medium">
            <strong>Material:</strong> {caseStudy.materialUsed}
          </div>
        </div>
      </div>

      {/* Compliance & Key Feature Footer */}
      <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-700">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="font-semibold">{caseStudy.keyFeature}</span>
        </div>
        <div className="flex items-center gap-2 text-slate-500 font-mono text-[11px]">
          <Award className="w-3.5 h-3.5 text-orange-600 shrink-0" />
          <span>{caseStudy.hoaCompliance}</span>
        </div>
      </div>

      <div className="bg-slate-100/70 px-3.5 py-2 rounded-lg text-[11px] text-slate-600 font-medium">
        📋 <strong>Permit &amp; Municipal Code Notes:</strong> {caseStudy.permitOrCodeNotes}
      </div>
    </article>
  );
}
