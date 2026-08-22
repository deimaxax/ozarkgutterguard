import { MetadataRoute } from 'next';
import { SEO_PAGES_DATA } from '@/data/seoPages/_index';
import { GUIDES_DATA } from '@/data/guides/_index';
import { PRESS_RELEASES_DATA } from '@/data/pressReleases';

/**
 * =========================================================================
 * STAGED INDEXING ROLLOUT CONTROLLER (Anti-SpamBrain Scaled Content Protection)
 * =========================================================================
 * Phase 1: 5 Core City Pillar Hubs (Bentonville, Rogers, Fayetteville, Springdale, Bella Vista)
 * Phase 2: Top 25 High-Volume ZIP Sub-Hubs & E-E-A-T Technical Guides (Current Active Phase)
 * Phase 3: Full 1,100+ Programmatic Landing Page Mesh
 */
const CURRENT_ROLLOUT_PHASE: 1 | 2 | 3 = 3; // Full Production Rollout

const CORE_CITY_SLUGS = new Set([
  'gutter-guards-bentonville-ar',
  'gutter-guards-rogers-ar',
  'gutter-guards-fayetteville-ar',
  'gutter-guards-springdale-ar',
  'gutter-guards-bella-vista-ar',
  'gutter-cleaning-bentonville-ar',
  'gutter-cleaning-rogers-ar',
  'gutter-cleaning-fayetteville-ar',
  'gutter-cleaning-springdale-ar',
  'gutter-cleaning-bella-vista-ar',
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ozarkgutterguard.com';
  const lastModified = new Date();

  // 1. Static Foundation Routes (Always Live)
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/guides`, lastModified, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/press`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/quote`, lastModified, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/satellite-quote`, lastModified, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/gutter-cleaning`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/gutter-cleaning-inspection-nwa`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/reviews`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/before-after-photos`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/site-directory`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/warranty`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/privacy-policy`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/seamless-gutter-installation-nwa`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/micro-mesh-vs-screen-guards`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/pine-needle-gutter-protection`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/oak-tassel-gutter-protection`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/foundation-water-damage-prevention`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
  ];

  // 2. Programmatic SEO Routes Governed by Staged Rollout Phase
  const dynamicRoutes: MetadataRoute.Sitemap = SEO_PAGES_DATA
    .filter((page) => {
      // Always exclude thin template pages marked noindex
      if (page.noindex) return false;

      // Phase 1: Expose only core city hubs
      if (CURRENT_ROLLOUT_PHASE === 1) {
        return CORE_CITY_SLUGS.has(page.slug);
      }

      // Phase 2: Expose Core City Hubs + All ZIP Nodes (Controlled Gating)
      if (CURRENT_ROLLOUT_PHASE === 2) {
        return CORE_CITY_SLUGS.has(page.slug) || page.cluster === 'location' || page.cluster === 'comparison';
      }

      // Phase 3: Expose full network
      return true;
    })
    .map((page) => {
      let priority = 0.8;
      if (CORE_CITY_SLUGS.has(page.slug)) priority = 1.0;
      else if (page.cluster === 'location') priority = 0.9;
      else if (page.cluster === 'comparison') priority = 0.85;

      return {
        url: `${baseUrl}/${page.slug}`,
        lastModified,
        changeFrequency: 'weekly',
        priority,
      };
    });

  // 3. Technical E-E-A-T Guides (Always in Sitemap for High Topical Authority)
  const guideRoutes: MetadataRoute.Sitemap = GUIDES_DATA.map((g) => ({
    url: `${baseUrl}/guides/${g.slug}`,
    lastModified: new Date(g.publishDate),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // 4. Press Releases & Media Citations
  const pressRoutes: MetadataRoute.Sitemap = PRESS_RELEASES_DATA.map((pr) => ({
    url: `${baseUrl}/press/${pr.slug}`,
    lastModified: new Date(pr.publishDate),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...dynamicRoutes, ...guideRoutes, ...pressRoutes];
}
