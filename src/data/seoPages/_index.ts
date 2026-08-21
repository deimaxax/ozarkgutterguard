// Norint prideti naują SEO puslapį:
// - Miesto gutter guards puslapis → core-pages.ts
// - Naujų miestų gutter cleaning/repair/installation → service-city.ts arba traffic-horse.ts
// - Naujų rajonų puslapis (Pinnacle Hills tipo) → neighborhoods.ts
// - HOA / sezoniniai / brand-vs → deep-authority.ts
// - Comparison/cost/problem su giliu turiniu → paversk į guides/_index.ts

import { NWA_ZIP_CODES } from '../zipCodes';
import type { SeoPageData } from './_types';
import { CORE_PAGES } from './core-pages';
import { SERVICE_CITY_PAGES } from './service-city';
import { TRAFFIC_HORSE_PAGES } from './traffic-horse';
import { NEIGHBORHOOD_PAGES } from './neighborhoods';
import { MISSING_PAGES } from './missing-pages';
import { DEEP_AUTHORITY_PAGES } from './deep-authority';
import { EXTENDED_QUERIES } from './extended-queries';

export type { SeoPageData };

// Guide slugs that have been converted to full guides — exclude from seoPages to avoid duplicate URLs
const GUIDE_SLUGS_PROMOTED = new Set([
  'is-leaffilter-overpriced',
  'are-there-any-gutter-guards-that-actually-work',
  'what-is-the-average-cost-to-have-gutter-guards-installed',
  'do-you-still-have-to-clean-gutters-if-you-have-gutter-guards',
]);

const ZIP_CODE_PAGES: SeoPageData[] = NWA_ZIP_CODES.map((z) => ({
  slug: z.slug,
  cluster: 'location',
  city: z.city,
  noindex: false,
  metaTitle: z.metaTitle,
  metaDescription: z.metaDescription,
  badge: `${z.zip} ${z.city} Postal Service Area`,
  h1: z.h1,
  subheadline: z.subheadline,
  painPointTitle: `ZIP Code ${z.zip} (${z.city}) Drainage Diagnostics & Tree Threats`,
  painPoints: [
    { title: `Dominant Canopy Threat: ${z.treeThreat.split('.')[0]}`, description: z.treeThreat },
    { title: 'Soil Dynamics & Foundation Risk', description: `${z.soilProfile} Gutter overflow rapidly saturates perimeters during ${z.annualRainfall}.` },
    { title: `Roofline Dynamics (${z.avgRoofPitch})`, description: `Concentrated storm runoff in ${z.zip} requires surgical capillary micro-mesh that never overshoots or clogs.` },
  ],
  localContext: {
    heading: `${z.city} AR (${z.zip}) Local Drainage & Ground-Truth Analysis`,
    content: `${z.localDetails} Our local installation crews provide same-week satellite sizing and full surgical micro-mesh installation across key ${z.city} neighborhoods including ${z.neighborhoods.join(', ')}. Backed by our written 10-Year Transferable No-Clog Guarantee.`,
  },
  geoCoordinates: { latitude: z.latitude, longitude: z.longitude },
}));

export const SEO_PAGES_DATA: SeoPageData[] = [
  ...MISSING_PAGES.map(p => ({ ...p, noindex: false })),
  ...DEEP_AUTHORITY_PAGES.map(p => ({ ...p, noindex: false })),
  ...TRAFFIC_HORSE_PAGES.map(p => ({ ...p, noindex: false })),
  ...NEIGHBORHOOD_PAGES.map(p => ({ ...p, noindex: false })),
  ...ZIP_CODE_PAGES,
  ...SERVICE_CITY_PAGES.map(p => ({ ...p, noindex: false })),
  ...CORE_PAGES.map(p => ({ ...p, noindex: false })),
  ...EXTENDED_QUERIES
    .filter(q => !GUIDE_SLUGS_PROMOTED.has(q.slug))
    .map(q => ({
      slug: q.slug,
      cluster: q.cluster,
      city: q.city,
      metaTitle: q.metaTitle,
      metaDescription: q.metaDescription,
      badge: q.badge,
      h1: q.h1,
      subheadline: q.subheadline,
      painPointTitle: q.cluster === 'location'
        ? `${q.city || 'Local'} Exterior Drainage Risks`
        : 'Key Critical Factors & Market Analysis',
      painPoints: [
        { title: q.painPoint1[0], description: q.painPoint1[1] },
        { title: q.painPoint2[0], description: q.painPoint2[1] },
        { title: q.painPoint3[0], description: q.painPoint3[1] },
      ],
      noindex: true, // thin template pages — protected from domain quality dilution
      localContext: { heading: q.contextHeading, content: q.contextContent },
      geoCoordinates: q.geo,
    })),
];

export function getSeoPage(slug: string): SeoPageData | undefined {
  return SEO_PAGES_DATA.find((page) => page.slug === slug);
}
