import { MetadataRoute } from 'next';
import { SEO_PAGES_DATA } from '@/data/seoPages/_index';
import { GUIDES_DATA } from '@/data/guides/_index';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ozarkgutterguard.com';
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/quote`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/satellite-quote`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/gutter-cleaning`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gutter-cleaning-inspection-nwa`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/before-after-photos`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/site-directory`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/seamless-gutter-installation-nwa`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/micro-mesh-vs-screen-guards`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/pine-needle-gutter-protection`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/oak-tassel-gutter-protection`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/foundation-water-damage-prevention`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
  ];

  const dynamicRoutes: MetadataRoute.Sitemap = SEO_PAGES_DATA
    .filter((page) => !page.noindex)
    .map((page) => {
      let priority = 0.8;
      if (page.cluster === 'location') priority = 0.9;
      if (page.cluster === 'comparison') priority = 0.85;
      if (page.cluster === 'cost') priority = 0.85;

      return {
        url: `${baseUrl}/${page.slug}`,
        lastModified,
        changeFrequency: 'weekly',
        priority,
      };
    });

  const guideRoutes: MetadataRoute.Sitemap = GUIDES_DATA.map((g) => ({
    url: `${baseUrl}/guides/${g.slug}`,
    lastModified: new Date(g.publishDate),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...dynamicRoutes, ...guideRoutes];
}
