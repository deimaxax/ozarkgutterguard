import { GuidePost } from '@/data/guides/_types';

export function generateGuideSchema(guide: GuidePost) {
  const baseUrl = 'https://ozarkgutterguard.com';
  const guideUrl = `${baseUrl}/guides/${guide.slug}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        '@id': `${guideUrl}#article`,
        isPartOf: { '@id': `${baseUrl}/#website` },
        headline: guide.title,
        description: guide.metaDescription,
        url: guideUrl,
        datePublished: `${guide.publishDate}T08:00:00-05:00`,
        dateModified: `2026-08-22T09:00:00-05:00`,
        image: `${baseUrl}/images/hero-roof.svg`,
        author: {
          '@type': 'Person',
          name: 'Ozark Forensic Drainage & Building Envelope Team',
          jobTitle: 'Lead Structural Gutter & Drainage Specialist',
        },
        publisher: {
          '@type': 'HomeAndConstructionBusiness',
          '@id': `${baseUrl}/#contractor`,
          name: 'Ozark Gutter Guard Co.',
          url: baseUrl,
          logo: `${baseUrl}/logo.svg`,
          telephone: '+1-479-929-2516',
          priceRange: '$$',
          sameAs: [
            'https://nextdoor.com/page/ozark-gutter-guard-fayetteville-ar',
            'https://www.youtube.com/@OzarkGutterGuard',
            'https://www.facebook.com/OzarkGutterGuard',
            'https://x.com/OzarkGutterGuar',
            'https://www.linkedin.com/company/ozark-gutter-guard/',
            'https://www.merchantcircle.com/ozark-gutter-guard-fayetteville-ar',
            'https://www.manta.com/c/m1hft21/ozark-gutter-guard',
            'https://www.pinterest.com/ozarkgutterguard/',
            'https://ezlocal.com/ar/bentonville/gutter-cleaning-service/0919817979',
            'https://www.instagram.com/ozarkgutterguard/',
            'https://www.thumbtack.com/ar/bentonville/pro/ozark-gutter-guards/service/588283928151015428',
            'https://yelp.com/biz/ozark-gutter-guard-fayetteville',
            'https://www.houzz.com/professionals/roofing-and-gutters/ozark-gutter-guard-pfvwus-pf~2052376562',
          ],
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Bentonville',
            addressRegion: 'AR',
            postalCode: '72712',
            addressCountry: 'US',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 36.3729,
            longitude: -94.2088,
          },
          areaServed: [
            {
              '@type': 'City',
              name: 'Bentonville',
              sameAs: 'https://www.wikidata.org/wiki/Q793540',
            },
            {
              '@type': 'City',
              name: 'Rogers',
              sameAs: 'https://www.wikidata.org/wiki/Q793554',
            },
            {
              '@type': 'City',
              name: 'Bella Vista',
              sameAs: 'https://www.wikidata.org/wiki/Q793550',
            },
            {
              '@type': 'City',
              name: 'Fayetteville',
              sameAs: 'https://www.wikidata.org/wiki/Q793529',
            },
            {
              '@type': 'AdministrativeArea',
              name: 'Benton County',
              sameAs: 'https://www.wikidata.org/wiki/Q488667',
            },
          ],
        },
        about: [
          {
            '@type': 'Place',
            name: 'Ozark Mountains',
            sameAs: 'https://www.wikidata.org/wiki/Q1139151',
          },
          {
            '@type': 'Thing',
            name: 'Stormwater Drainage Management',
            sameAs: 'https://www.wikidata.org/wiki/Q1570081',
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${guideUrl}#breadcrumbs`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: baseUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Technical Guides & Engineering Reports',
            item: `${baseUrl}/guides`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: guide.title,
            item: guideUrl,
          },
        ],
      },
    ],
  };
}
