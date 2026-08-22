import React from 'react';
import { MunicipalPermitInfo, getMunicipalPermitInfo } from '@/data/municipalPermits';
import { Building2, FileCheck } from 'lucide-react';

interface MunicipalPermitSectionProps {
  cityName: string;
}

export default function MunicipalPermitSection({ cityName }: MunicipalPermitSectionProps) {
  const permitInfo: MunicipalPermitInfo = getMunicipalPermitInfo(cityName);

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-bold text-[#1D4ED8] uppercase tracking-wider block">Building Code &amp; Regulations</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            {permitInfo.city}, AR Building &amp; Drainage Compliance
          </h2>
          <p className="text-base text-slate-600 font-normal leading-relaxed">
            All gutter guard, cleanout, and seamless gutter installations performed by Ozark Gutter Guard Co. adhere strictly to {permitInfo.county} and City of {permitInfo.city} residential drainage codes.
          </p>
        </div>

        {/* Regulatory Matrix */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Municipal Authority & Permit Rules */}
          <div className="bg-[#F8F9FA] p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4 shadow-xs">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-3.5">
              <div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Local Building Authority</h3>
                <span className="text-xs text-slate-500 font-medium">{permitInfo.buildingDeptName}</span>
              </div>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
              <div>
                <strong className="text-slate-900 block font-semibold mb-0.5">Adopted Code Standard:</strong>
                <span className="text-slate-600 font-medium">{permitInfo.drainageCodeStandard}</span>
              </div>

              <div>
                <strong className="text-slate-900 block font-semibold mb-0.5">Permit Requirements:</strong>
                <p className="text-slate-600 leading-relaxed font-normal">{permitInfo.permitRequirement}</p>
              </div>

              <div>
                <strong className="text-slate-900 block font-semibold mb-0.5">Contractor Licensing:</strong>
                <p className="text-[#1D4ED8] font-semibold">{permitInfo.contractorLicenseRequired}</p>
              </div>
            </div>
          </div>

          {/* Stormwater & Soil Mechanics */}
          <div className="bg-[#F8F9FA] p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4 shadow-xs">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-3.5">
              <div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Drainage &amp; Soil Protection</h3>
                <span className="text-xs text-slate-500 font-medium">{permitInfo.county} Guidelines</span>
              </div>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
              <div>
                <strong className="text-slate-900 block font-semibold mb-0.5">Stormwater Discharge Policy:</strong>
                <p className="text-slate-600 leading-relaxed font-normal">{permitInfo.stormwaterPolicy}</p>
              </div>

              <div>
                <strong className="text-slate-900 block font-semibold mb-0.5">Foundation Protection:</strong>
                <p className="text-slate-600 leading-relaxed font-normal">{permitInfo.soilConditionSummary}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
