import React from 'react';
import { MunicipalPermitInfo, getMunicipalPermitInfo } from '@/data/municipalPermits';
import { Building2, ShieldCheck, FileCheck, Phone, ExternalLink, Scale, MapPin } from 'lucide-react';

interface MunicipalPermitSectionProps {
  cityName: string;
}

export default function MunicipalPermitSection({ cityName }: MunicipalPermitSectionProps) {
  const permitInfo: MunicipalPermitInfo = getMunicipalPermitInfo(cityName);

  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold mb-3">
            <Scale className="w-3.5 h-3.5 text-orange-600" />
            <span>Local Municipal Code &amp; Regulatory Compliance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            {permitInfo.city}, AR Building Department &amp; Drainage Compliance
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-normal leading-relaxed">
            All gutter guard, cleanout, and seamless gutter installations performed by Ozark Gutter Guard Co. adhere strictly to {permitInfo.county} and City of {permitInfo.city} stormwater management standards and residential roof drainage building codes.
          </p>
        </div>

        {/* Regulatory Matrix */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Municipal Authority & Permit Rules */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-black text-slate-900 text-base">Jurisdiction &amp; Department</h3>
                <span className="text-xs text-slate-500">{permitInfo.buildingDeptName}</span>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div>
                <strong className="text-slate-900 block font-bold mb-0.5">Adopted Residential Building Code:</strong>
                <span className="font-mono text-slate-600">{permitInfo.drainageCodeStandard}</span>
              </div>

              <div>
                <strong className="text-slate-900 block font-bold mb-0.5">Permit Requirements for Gutter Guards:</strong>
                <p className="text-slate-600 leading-relaxed font-normal">{permitInfo.permitRequirement}</p>
              </div>

              <div>
                <strong className="text-slate-900 block font-bold mb-0.5">Contractor Licensing &amp; Liability:</strong>
                <p className="text-emerald-700 font-semibold">{permitInfo.contractorLicenseRequired}</p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-1.5 text-slate-600">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{permitInfo.departmentAddress}</span>
                </div>
                <a
                  href={permitInfo.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-orange-600 font-bold hover:underline"
                >
                  <span>Municipal Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Stormwater & Soil Mechanics */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-black text-slate-900 text-base">Stormwater Policy &amp; Soil Dynamics</h3>
                <span className="text-xs text-slate-500">{permitInfo.county} Soil &amp; Water Conservation</span>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div>
                <strong className="text-slate-900 block font-bold mb-0.5">Residential Stormwater Discharge Policy:</strong>
                <p className="text-slate-600 leading-relaxed font-normal">{permitInfo.stormwaterPolicy}</p>
              </div>

              <div>
                <strong className="text-slate-900 block font-bold mb-0.5">Local Soil Mechanics &amp; Foundation Risks:</strong>
                <p className="text-slate-600 leading-relaxed font-normal">{permitInfo.soilConditionSummary}</p>
              </div>

              <div>
                <strong className="text-slate-900 block font-bold mb-0.5">Catchment &amp; Watershed Considerations:</strong>
                <p className="text-slate-600 leading-relaxed font-normal">{permitInfo.floodPlainNotes}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Contractor Compliance Banner */}
        <div className="bg-slate-950 text-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <span className="font-bold text-white text-sm block">100% Code &amp; HOA Compliant Installation</span>
              <span className="text-slate-400">Zero roof shingle penetration protects 100% of CertainTeed, GAF, and Owens Corning shingle warranties.</span>
            </div>
          </div>
          <div className="text-slate-300 font-mono text-[11px] shrink-0">
            AR Lic. #OGG-479-NWA • $2M Liability
          </div>
        </div>

      </div>
    </section>
  );
}
