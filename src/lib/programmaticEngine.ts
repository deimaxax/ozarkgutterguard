import { LocalCaseStudy, getCaseStudiesForCity } from '@/data/caseStudies';
import { INSTALLATION_LOGS, InstallationLog } from '@/data/installationLogs';
import { StormRecord } from '@/components/StormDamageVerifier';

export interface LocalAuthorityVector {
  resolvedCity: string;
  resolvedCounty: string;
  postalCode: string;
  soilDynamics: string;
  dominantFloraThreat: string;
  treeType: 'pine' | 'oak' | 'maple' | 'sweetgum' | 'mixed';
  recommendedArmor: string;
  stormData: StormRecord;
  caseStudy: LocalCaseStudy;
  installationLogs: InstallationLog[];
  geo: { latitude: number; longitude: number };
  morphPattern: 0 | 1 | 2 | 3;
}

// 32-bit FNV-1a deterministic string hashing for absolute DOM layout entropy
export function fnv1aHash(str: string): number {
  let hash = 2166136261;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return Math.abs(hash);
}

const CITY_DATABASE: Record<
  string,
  {
    county: string;
    zip: string;
    tree: 'pine' | 'oak' | 'maple' | 'sweetgum' | 'mixed';
    floraThreat: string;
    soil: string;
    stormDate: string;
    hail: string;
    wind: string;
    geo: { latitude: number; longitude: number };
  }
> = {
  bentonville: {
    county: 'Benton County',
    zip: '72712',
    tree: 'oak',
    floraThreat: 'Post Oak & White Oak Spring Catkins (Dense asphalt-like organic paste)',
    soil: 'Expansive Benton County Vertisol clay prone to perimeter foundation shifting.',
    stormDate: 'May 26, 2024',
    hail: '2.00" Severe Core (Coler MTB / Downtown)',
    wind: '78 MPH Straight-Line Gusts',
    geo: { latitude: 36.3729, longitude: -94.2088 },
  },
  'bella-vista': {
    county: 'Benton County',
    zip: '72714',
    tree: 'pine',
    floraThreat: 'Shortleaf & Loblolly Pine Needles (3.5" piercing needles + Gloeocapsa magma algae)',
    soil: 'Cherty steep ridge soils with 9/12 to 12/12 hillside drainage washouts.',
    stormDate: 'May 26, 2024',
    hail: '1.75" Hail Swath (Loch Lomond / Scotsdale)',
    wind: '82 MPH Ridge Gusts',
    geo: { latitude: 36.4295, longitude: -94.2316 },
  },
  rogers: {
    county: 'Benton County',
    zip: '72758',
    tree: 'maple',
    floraThreat: 'Silver Maple Helicopters & Beaver Lake Humidity / Mold Spores',
    soil: 'Captina silt loam over dense clay pan causing slab pooling near garages.',
    stormDate: 'May 26, 2024',
    hail: '1.50" Hail Swath (Pinnacle Hills / Shadow Valley)',
    wind: '72 MPH Wind Surges',
    geo: { latitude: 36.3320, longitude: -94.1185 },
  },
  fayetteville: {
    county: 'Washington County',
    zip: '72701',
    tree: 'oak',
    floraThreat: 'Heritage White Oak & Sugar Maple Old-Growth Debris Weight',
    soil: 'Washington County limestone karst with sub-surface erosion channels.',
    stormDate: 'May 26, 2024',
    hail: '1.75" Swath (Mount Sequoyah / Wilson Park)',
    wind: '75 MPH Wind Swath',
    geo: { latitude: 36.0626, longitude: -94.1574 },
  },
  springdale: {
    county: 'Washington County',
    zip: '72764',
    tree: 'sweetgum',
    floraThreat: 'Pin Oak, River Birch Catkins & Abrasive Shingle Grit Sludge',
    soil: 'Alluvial valley silts prone to high water table foundation dampness.',
    stormDate: 'March 30, 2022',
    hail: '1.50" Flash Storm (Har-Ber Meadows Corridor)',
    wind: '80 MPH Thunderstorm Core',
    geo: { latitude: 36.1867, longitude: -94.1288 },
  },
  centerton: {
    county: 'Benton County',
    zip: '72719',
    tree: 'mixed',
    floraThreat: 'Young Oak Stands, River Birch & Subdivision Shingle Sand Grit',
    soil: 'Heavy clay subsoils pooling around modern slab-on-grade perimeters.',
    stormDate: 'May 26, 2024',
    hail: '1.75" Swath (Kimmel Rd Corridor)',
    wind: '74 MPH Wind Gusts',
    geo: { latitude: 36.3615, longitude: -94.2847 },
  },
  lowell: {
    county: 'Benton County',
    zip: '72745',
    tree: 'mixed',
    floraThreat: 'Commercial Corridor Oak Debris & Beaver Lake Fog Moisture',
    soil: 'Captina silt loam with moderate shrink-swell potential.',
    stormDate: 'May 26, 2024',
    hail: '1.50" Swath (Ward Nail Park Area)',
    wind: '70 MPH Gusts',
    geo: { latitude: 36.2556, longitude: -94.1308 },
  },
  'siloam-springs': {
    county: 'Benton County',
    zip: '72761',
    tree: 'sweetgum',
    floraThreat: 'Sweetgum Seed Pods & Sager Creek Valley Hardwoods',
    soil: 'Karst limestone valley soils requiring non-pooling downspout diversion.',
    stormDate: 'April 15, 2023',
    hail: '1.75" Swath (JBU Corridor)',
    wind: '75 MPH Gusts',
    geo: { latitude: 36.1881, longitude: -94.5405 },
  },
};

export function resolveProgrammaticAuthority(slug: string, rawCity?: string): LocalAuthorityVector {
  const s = slug.toLowerCase();
  
  // 1. Detect City Key
  let cityKey = 'bentonville';
  if (s.includes('bella-vista') || s.includes('72714') || s.includes('72715') || s.includes('loch-lomond') || s.includes('scotsdale') || s.includes('holiday-island')) {
    cityKey = 'bella-vista';
  } else if (s.includes('rogers') || s.includes('72756') || s.includes('72757') || s.includes('72758') || s.includes('pinnacle') || s.includes('shadow-valley') || s.includes('beaver-lake')) {
    cityKey = 'rogers';
  } else if (s.includes('fayetteville') || s.includes('72701') || s.includes('72702') || s.includes('72703') || s.includes('72704') || s.includes('sequoyah') || s.includes('wilson-park')) {
    cityKey = 'fayetteville';
  } else if (s.includes('springdale') || s.includes('72762') || s.includes('72764') || s.includes('72765') || s.includes('72766') || s.includes('har-ber')) {
    cityKey = 'springdale';
  } else if (s.includes('centerton') || s.includes('72719')) {
    cityKey = 'centerton';
  } else if (s.includes('lowell') || s.includes('72745')) {
    cityKey = 'lowell';
  } else if (s.includes('siloam') || s.includes('72761')) {
    cityKey = 'siloam-springs';
  } else if (rawCity) {
    const rawKey = rawCity.toLowerCase().replace(/\s+/g, '-');
    if (CITY_DATABASE[rawKey]) cityKey = rawKey;
  }

  const baseData = CITY_DATABASE[cityKey] || CITY_DATABASE['bentonville'];
  const formattedCityName = cityKey
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  // 2. Resolve Case Studies & Installation Logs
  const cityCaseStudies = getCaseStudiesForCity(formattedCityName);
  const fallbackCaseStudies = getCaseStudiesForCity('Bentonville');
  const selectedCaseStudy = cityCaseStudies.length > 0 ? cityCaseStudies[0] : fallbackCaseStudies[0];

  const cityLogs = INSTALLATION_LOGS[cityKey] || INSTALLATION_LOGS['bentonville'] || [];

  // 3. Compute Deterministic Layout Morph Pattern (0, 1, 2, 3)
  const hash = fnv1aHash(slug);
  const morphPattern = (hash % 4) as 0 | 1 | 2 | 3;

  // 4. Synthesize Storm Data
  const stormData: StormRecord = {
    date: baseData.stormDate,
    hailSize: baseData.hail,
    windSpeed: baseData.wind,
    damageRisk: `Severe ${baseData.tree.toUpperCase()} Bio-Load & Downspout Hydro-Capacity Surcharge`,
    affectedNeighborhoods: [`${formattedCityName} Service Corridor`, `${baseData.county} Residential Sector`],
  };

  return {
    resolvedCity: formattedCityName,
    resolvedCounty: baseData.county,
    postalCode: baseData.zip,
    soilDynamics: baseData.soil,
    dominantFloraThreat: baseData.floraThreat,
    treeType: baseData.tree,
    recommendedArmor: '50-Micron 316 Marine Stainless Steel (150 in/hr Intake Certified)',
    stormData,
    caseStudy: selectedCaseStudy,
    installationLogs: cityLogs,
    geo: baseData.geo,
    morphPattern,
  };
}
