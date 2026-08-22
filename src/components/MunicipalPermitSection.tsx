import React from 'react';
import { MunicipalPermitInfo, getMunicipalPermitInfo } from '@/data/municipalPermits';
import { Building2, ShieldCheck, FileCheck, Phone, ExternalLink, Scale, MapPin } from 'lucide-react';

interface MunicipalPermitSectionProps {
  cityName: string;
}

export default function MunicipalPermitSection({ cityName }: MunicipalPermitSectionProps) {
  const permitInfo: MunicipalPermitInfo = getMunicipalPermitInfo(cityName);

  return (
    <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">Code &amp; Standards</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {permitInfo.city}, AR Building &amp; Drainage Compliance
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal leading-relaxed">
            All gutter guard, cleanout, and seamless gutter installations performed by Ozark Gutter Guard Co. adhere strictly to {permitInfo.county} and City of {permitInfo.city} residential drainage codes.
          </p>
        </div>

        {/* Regulatory Matrix */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Municipal Authority & Permit Rules */}
          <div className="bg-slate-50 p-6 sm:p-7 rounded-xl border border-slate-200 space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
              <div className="w-9 h-9 rounded-lg bg-white text-slate-700 border border-slate-200 flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Local Building Authority</h3>
                <span className="text-xs text-slate-500">{permitInfo.buildingDeptName}</span>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div>
                <strong className="text-slate-900 block font-semibold mb-0.5">Adopted Code Standard:</strong>
                <span className="text-slate-600">{permitInfo.drainageCodeStandard}</span>
              </div>

              <div>
                <strong className="text-slate-900 block font-semibold mb-0.5">Permit Requirements:</strong>
                <p className="text-slate-600 leading-relaxed font-normal">{permitInfo.permitRequirement}</p>
              </div>

              <div>
                <strong className="text-slate-900 block font-semibold mb-0.5">Contractor Licensing:</strong>
                <p className="text-emerald-800 font-semibold">{permitInfo.contractorLicenseRequired}</p>
              </div>
            </div>
          </div>

          {/* Stormwater & Soil Mechanics */}
          <div className="bg-slate-50 p-6 sm:p-7 rounded-xl border border-slate-200 space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
              <div className="w-9 h-9 rounded-lg bg-white text-slate-700 border border-slate-200 flex items-center justify-center font-bold">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Drainage &amp; Soil Protection</h3>
                <span className="text-xs text-slate-500">{permitInfo.county} Soil &amp; Water Guidelines</span>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
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
