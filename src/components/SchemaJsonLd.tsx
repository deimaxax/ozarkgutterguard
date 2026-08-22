import React from 'react';

interface SchemaJsonLdProps {
  type?: 'business' | 'service';
  city?: string;
  cityName?: string;
  wikiUrl?: string;
  slug?: string;
  title?: string;
  description?: string;
  postalCodes?: string[];
  geo?: {
    latitude: number;
    longitude: number;
  };
  faqs?: {
    question: string;
    answer: string;
  }[];
  googleMapsCidUrl?: string; // e.g. "https://maps.google.com/?cid=YOUR_CID_NUMBER"
  reviewsData?: {
    ratingValue: string;
    reviewCount: string;
  };
  seasonalEvent?: { name: string; startDate: string; endDate: string; description: string };
}

export default function SchemaJsonLd({
  cityName,
  city,
  wikiUrl,
  slug,
  title,
  description,
  postalCodes,
  geo,
  faqs,
  googleMapsCidUrl,
  reviewsData,
  seasonalEvent,
}: SchemaJsonLdProps) {
  const resolvedCityName = cityName || city;
  const primaryPhone = '+1-479-929-2516';
  const siteUrl = 'https://ozarkgutterguard.com';
  const pageUrl = slug ? `${siteUrl}/${slug}` : siteUrl;

  const sameAsProfiles = [
    "https://nextdoor.com/page/ozark-gutter-guard-fayetteville-ar",
    "https://www.youtube.com/@OzarkGutterGuard",
    "https://www.facebook.com/OzarkGutterGuard",
    "https://x.com/OzarkGutterGuar",
    "https://www.linkedin.com/company/ozark-gutter-guard/",
    "https://www.merchantcircle.com/ozark-gutter-guard-fayetteville-ar",
    "https://www.manta.com/c/m1hft21/ozark-gutter-guard",
    "https://www.pinterest.com/ozarkgutterguard/",
    "https://ezlocal.com/ar/bentonville/gutter-cleaning-service/0919817979",
    "https://www.instagram.com/ozarkgutterguard/",
    "https://www.thumbtack.com/ar/bentonville/pro/ozark-gutter-guards/service/588283928151015428",
    "https://yelp.com/biz/ozark-gutter-guard-fayetteville",
    "https://www.houzz.com/professionals/roofing-and-gutters/ozark-gutter-guard-pfvwus-pf~2052376562"
  ];

  if (googleMapsCidUrl && !sameAsProfiles.includes(googleMapsCidUrl)) {
    sameAsProfiles.push(googleMapsCidUrl);
  }

  // 1. Single Authoritative Organization / SAB Contractor Entity Node
  const organizationNode: Record<string, any> = {
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteUrl}/#organization`,
    "name": "Ozark Gutter Guard Co.",
    "alternateName": ["Ozark Gutter Protection", "Ozark Gutter Guards NWA"],
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "image": `${siteUrl}/images/contractor_truck.jpg`,
    "telephone": primaryPhone,
    "email": "estimates@ozarkgutterguard.com",
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card, Check, Financing",
    "sameAs": sameAsProfiles,
    ...(googleMapsCidUrl ? { "hasMap": googleMapsCidUrl } : {}),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bentonville",
      "addressRegion": "AR",
      "postalCode": "72712",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.3729,
      "longitude": -94.2088
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Benton County",
        "sameAs": "https://en.wikipedia.org/wiki/Benton_County,_Arkansas"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Washington County",
        "sameAs": "https://en.wikipedia.org/wiki/Washington_County,_Arkansas"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Northwest Arkansas",
        "sameAs": "https://en.wikipedia.org/wiki/Northwest_Arkansas"
      }
    ],
    "knowsAbout": [
      {
        "@type": "Thing",
        "name": "Rain gutter",
        "sameAs": "https://en.wikipedia.org/wiki/Rain_gutter"
      },
      {
        "@type": "Thing",
        "name": "Stainless steel",
        "sameAs": "https://en.wikipedia.org/wiki/Stainless_steel"
      },
      {
        "@type": "Thing",
        "name": "Vertisol (Clay Soil Drainage)",
        "sameAs": "https://en.wikipedia.org/wiki/Vertisol"
      },
      {
        "@type": "Thing",
        "name": "Waterproofing & Foundation Repair Prevention",
        "sameAs": "https://en.wikipedia.org/wiki/Waterproofing"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "07:00",
        "closes": "19:00"
      }
    ]
  };

  // Only inject AggregateRating when verified external review data exists (No fabricated review penalties)
  if (reviewsData && Number(reviewsData.reviewCount) > 0) {
    organizationNode.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": reviewsData.ratingValue,
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": reviewsData.reviewCount,
      "reviewCount": reviewsData.reviewCount
    };
  }

  const graphNodes: any[] = [
    organizationNode,
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": siteUrl,
      "name": "Ozark Gutter Guard Co.",
      "publisher": { "@id": `${siteUrl}/#organization` }
    }
  ];

  // 2. WebPage & Service Node (Hierarchical SAB Architecture, No Fake Branch Doorway Pages)
  if (slug) {
    graphNodes.push({
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      "url": pageUrl,
      "name": title || "Ozark Gutter Guard Co.",
      "description": description || "Marine-grade 316 stainless steel micro-mesh gutter protection in Northwest Arkansas.",
      "isPartOf": { "@id": `${siteUrl}/#website` },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": siteUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": resolvedCityName ? `Gutter Guards in ${resolvedCityName}` : (title || "Services"),
            "item": pageUrl
          }
        ]
      }
    });

    if (resolvedCityName) {
      const cityTarget: Record<string, any> = {
        "@type": "City",
        "name": resolvedCityName,
        "sameAs": wikiUrl || `https://en.wikipedia.org/wiki/${encodeURIComponent(resolvedCityName)},_Arkansas`,
        ...(geo ? {
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": geo.latitude,
            "longitude": geo.longitude
          }
        } : {})
      };

      graphNodes.push({
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        "name": `Marine-Grade 316 Stainless Micro-Mesh Gutter Guard Installation in ${resolvedCityName}, AR`,
        "serviceType": "Gutter Protection & Foundation Defense",
        "provider": { "@id": `${siteUrl}/#organization` },
        "areaServed": cityTarget,
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "1250",
          "highPrice": "2350",
          "priceCurrency": "USD",
          "offerCount": "3",
          "availability": "https://schema.org/InStock",
          "url": pageUrl
        }
      });
    }

    if (seasonalEvent) {
      graphNodes.push({
        "@type": "Event",
        "@id": `${pageUrl}/#event`,
        "name": seasonalEvent.name,
        "startDate": seasonalEvent.startDate,
        "endDate": seasonalEvent.endDate,
        "description": seasonalEvent.description,
        "location": {
          "@type": "Place",
          "name": "Northwest Arkansas Service Territory",
          "address": { "@type": "PostalAddress", "addressRegion": "AR", "addressCountry": "US" }
        },
        "organizer": { "@id": `${siteUrl}/#organization` },
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
      });
    }
  }

  // 3. FAQ Schema Node
  if (faqs && faqs.length > 0) {
    graphNodes.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}/#faq`,
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": graphNodes
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
