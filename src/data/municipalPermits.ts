export interface MunicipalPermitInfo {
  city: string;
  county: string;
  buildingDeptName: string;
  departmentAddress: string;
  phone: string;
  websiteUrl: string;
  drainageCodeStandard: string;
  permitRequirement: string;
  stormwaterPolicy: string;
  soilConditionSummary: string;
  floodPlainNotes: string;
  contractorLicenseRequired: string;
}

export const MUNICIPAL_PERMITS_DATA: Record<string, MunicipalPermitInfo> = {
  "bentonville": {
    city: "Bentonville",
    county: "Benton County",
    buildingDeptName: "City of Bentonville Community Development Department (Building Inspections)",
    departmentAddress: "305 SW A Street, Bentonville, AR 72712",
    phone: "(479) 271-3160",
    websiteUrl: "https://www.bentonvillear.com/156/Community-Development",
    drainageCodeStandard: "2021 International Residential Code (IRC) Section R903 & Bentonville Stormwater Ordinance 2011-85",
    permitRequirement: "Gutter guard retrofit and maintenance do not require a separate municipal building permit when attached to existing gutters/fascia without structural roof modifications. Seamless full replacement requires compliance with Arkansas State Fire Prevention Code roof drainage standards.",
    stormwaterPolicy: "Requires residential roof runoff to be directed away from adjoining properties and public rights-of-way, maintaining a minimum 5-foot setback from foundation walls to prevent perimeter soil erosion.",
    soilConditionSummary: "Benton County Cherty Silt Loam over expansive clay subsoil with high shrink-swell potential. Uncontrolled gutter discharge triggers foundation settlement.",
    floodPlainNotes: "Properties within Little Sugar Creek, Town Branch, and Osage Creek drainage basins require enhanced stormwater dispersion away from building perimeters.",
    contractorLicenseRequired: "Arkansas Contractors Licensing Board (ACLB) Specialty License & City of Bentonville Business Registration."
  },
  "bella-vista": {
    city: "Bella Vista",
    county: "Benton County",
    buildingDeptName: "City of Bella Vista Community Development & POA Architectural Control Committee (ACC)",
    departmentAddress: "616 W Lancashire Blvd, Bella Vista, AR 72715",
    phone: "(479) 268-4980",
    websiteUrl: "https://bellavistaar.gov/government/departments/community_development/",
    drainageCodeStandard: "2021 IRC Section R903, Bella Vista Code of Ordinances Chapter 107 & Bella Vista POA ACC Rules",
    permitRequirement: "Fascia-mounted micro-mesh gutter guards are pre-approved under Bella Vista POA ACC rules when utilizing low-profile matching finishes (0% shingle contact). Seamless gutter installation adheres to POA height and setback guidelines.",
    stormwaterPolicy: "Strict hillside drainage rules enforce positive slope routing on 8/12 to 12/12 hillside lots to prevent bluff erosion, slope slumping, and damage to downstream properties.",
    soilConditionSummary: "Thin rocky Clarksville cherty silt loam over fractured Karst limestone. Hillside runoff rapidly carves deep drainage trenches and undermines retaining walls if gutters overflow.",
    floodPlainNotes: "Lake Loch Lomond, Lake Windsor, Lake Norwood, and Sugar Creek watershed properties must prevent rapid hillside sedimentation.",
    contractorLicenseRequired: "ACLB Specialty License, City of Bella Vista Contractor License & $2,000,000 General Liability Insurance."
  },
  "rogers": {
    city: "Rogers",
    county: "Benton County",
    buildingDeptName: "City of Rogers Department of Risk Reduction & Code Enforcement",
    departmentAddress: "301 W Chestnut Street, Rogers, AR 72756",
    phone: "(479) 621-1100",
    websiteUrl: "https://www.rogersar.gov/224/Risk-Reduction-Code-Enforcement",
    drainageCodeStandard: "2021 Arkansas Residential Building Code (R903.4 Roof Drainage) & City of Rogers Stormwater Management Ordinance",
    permitRequirement: "Maintenance and retrofit installations of marine-grade micro-mesh guards on existing residential gutters require no permit. Gutter replacement adheres to Rogers drainage discharge setback requirements.",
    stormwaterPolicy: "Mandates that all roof drainage conductors discharge at least 5 feet away from residential building foundations and prevent surface runoff overload into municipal storm sewers.",
    soilConditionSummary: "Captina and Tonti silt loam with fragipan sublayers that trap perched water tables near foundations during Beaver Lake heavy spring rains.",
    floodPlainNotes: "Properties bordering Beaver Lake, Prairie Creek, and Osage Creek basins require high-capacity flow systems rated to handle 2.5+ in/hr storm bursts.",
    contractorLicenseRequired: "State of Arkansas Residential Specialty Contractor License & Rogers Municipal Business License."
  },
  "fayetteville": {
    city: "Fayetteville",
    county: "Washington County",
    buildingDeptName: "City of Fayetteville Development Services (Building Safety Division)",
    departmentAddress: "125 W Mountain Street, Fayetteville, AR 72701",
    phone: "(479) 575-8238",
    websiteUrl: "https://www.fayetteville-ar.gov/517/Building-Safety",
    drainageCodeStandard: "2021 IRC Section R903, Fayetteville Unified Development Code (UDC) Chapter 169 & Historic District Commission Guidelines",
    permitRequirement: "Gutter guard installation that preserves existing roof shingles without penetrations is classified as exempt maintenance. Installations in Historic Districts (Wilson Park, Washington-Willow) must maintain architectural integrity from street level.",
    stormwaterPolicy: "City of Fayetteville Stormwater BMP Manual enforces non-erosive discharge velocities and discourages direct downspout connection into sanitary lines.",
    soilConditionSummary: "Enders-Steprock complex on steep hillside overlooks (Mount Sequoyah, Mount Kessler) featuring expansive clay soils with slip-plane foundation hazards under saturated conditions.",
    floodPlainNotes: "West Fork White River and Scull Creek watersheds experience rapid flash rise during spring convective storms.",
    contractorLicenseRequired: "Arkansas Contractors Licensing Board License & City of Fayetteville Contractor Registration."
  },
  "springdale": {
    city: "Springdale",
    county: "Washington & Benton Counties",
    buildingDeptName: "City of Springdale Building Inspection Department",
    departmentAddress: "201 Spring Street, Springdale, AR 72764",
    phone: "(479) 750-8154",
    websiteUrl: "https://www.springdalear.gov/152/Building-Inspection",
    drainageCodeStandard: "2021 Arkansas Residential Code Section R903 & Springdale Code of Ordinances Chapter 114 (Drainage & Stormwater)",
    permitRequirement: "Gutter guard retrofit systems attached to existing fascia are exempt from separate building permits. Complete seamless gutter installations must conform to residential roof drainage code.",
    stormwaterPolicy: "Requires roof runoff to be conveyed to approved drainage easements or absorption zones without discharging across public sidewalks or causing nuisance pooling on adjoining properties.",
    soilConditionSummary: "Taloka and Parsons silt loam underlain by heavy Vertisol clay subsoils with severe shrink-swell characteristics that cause slab foundation cracking if gutters overflow.",
    floodPlainNotes: "Spring Creek and Lake Springdale catchment zones demand high-throughput drainage to prevent surface flooding during 2+ in/hr downpours.",
    contractorLicenseRequired: "Arkansas State Licensing Board Registration & City of Springdale Trade License."
  },
  "centerton": {
    city: "Centerton",
    county: "Benton County",
    buildingDeptName: "City of Centerton Building Department & Planning Commission",
    departmentAddress: "290 Main Street, Centerton, AR 72719",
    phone: "(479) 795-2750",
    websiteUrl: "https://centertonar.us/building-department/",
    drainageCodeStandard: "2021 IRC Section R903 & Centerton Municipal Drainage Ordinance 2017-12",
    permitRequirement: "Retrofit micro-mesh installations are exempt. New construction gutter installations must comply with city residential stormwater management standards.",
    stormwaterPolicy: "Subdivision regulations mandate positive perimeter grading and downspout discharge extensions directed away from property lines and residential foundations.",
    soilConditionSummary: "Expansive Benton County red clay subsoil subject to heavy expansion during wet spring months and contraction during hot summer droughts.",
    floodPlainNotes: "McKissic Creek watershed subdivisions require enhanced downspout discharge management to prevent perimeter foundation soil erosion.",
    contractorLicenseRequired: "Arkansas State License & City of Centerton Business Permit."
  },
  "cave-springs": {
    city: "Cave Springs",
    county: "Benton County",
    buildingDeptName: "City of Cave Springs Planning & Building Inspection",
    departmentAddress: "134 N Main Street, Cave Springs, AR 72718",
    phone: "(479) 248-1040",
    websiteUrl: "https://cavespringsar.gov/",
    drainageCodeStandard: "2021 IRC & Cave Springs Stormwater Protection Guidelines",
    permitRequirement: "Standard retrofit micro-mesh installs require no permit when installed on existing guttering. Full gutter replacements adhere to Arkansas residential building code.",
    stormwaterPolicy: "Strict karst terrain stormwater runoff regulations require residential drainage to be non-erosive to preserve local spring ecosystems and aquifer zones.",
    soilConditionSummary: "Alluvial soils over karst limestone formations. Runoff management is critical to prevent sinkhole development and foundation destabilization.",
    floodPlainNotes: "Osage Creek and Healing Springs drainage corridors require high-capacity flow handling.",
    contractorLicenseRequired: "Arkansas State Specialty Contractor License & Local Registration."
  },
  "lowell": {
    city: "Lowell",
    county: "Benton County",
    buildingDeptName: "City of Lowell Building Inspection & Code Enforcement",
    departmentAddress: "216 N Lincoln Street, Lowell, AR 72745",
    phone: "(479) 770-5822",
    websiteUrl: "https://www.lowellarkansas.gov/building-inspections/",
    drainageCodeStandard: "2021 Arkansas Residential Code Section R903 & Lowell Stormwater Management Policy",
    permitRequirement: "Gutter guard retrofit systems do not require a permit. All work performed complies with state safety and building codes.",
    stormwaterPolicy: "Roof runoff must be diverted away from building foundations and property lines.",
    soilConditionSummary: "Silt loam over heavy clay requiring positive slope maintenance.",
    floodPlainNotes: "Hickory Creek and Muddy Fork watersheds.",
    contractorLicenseRequired: "Arkansas Specialty Contractor License & Lowell Municipal License."
  }
};

export function getMunicipalPermitInfo(city: string): MunicipalPermitInfo {
  const key = city.toLowerCase().replace(/\s+/g, '-');
  return MUNICIPAL_PERMITS_DATA[key] || MUNICIPAL_PERMITS_DATA['bentonville'];
}
