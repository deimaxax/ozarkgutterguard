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
  // seasonal: inject Event schema with start/end dates for spring/fall pages
  seasonalEvent?: { name: string; startDate: string; endDate: string; description: string };
}

export default function SchemaJsonLd({
  cityName,
  wikiUrl,
  slug,
  title,
  description,
  postalCodes,
  geo,
  faqs,
  seasonalEvent,
}: SchemaJsonLdProps) {
  const primaryPhone = '+1-479-929-2516';
  const siteUrl = 'https://ozarkgutterguard.com';

  const graphNodes: any[] = [
    {
      "@type": "RoofingContractor",
      "@id": `${siteUrl}/#organization`,
      "name": "Ozark Gutter Guard Co.",
      "alternateName": "Ozark Gutter Protection Northwest Arkansas",
      "url": siteUrl,
      "logo": `${siteUrl}/logo.svg`,
      "image": `${siteUrl}/hero-roof.svg`,
      "telephone": primaryPhone,
      "email": "estimates@ozarkgutterguard.com",
      "sameAs": [
        "https://facebook.com/OzarkGutterGuard"
      ],
      "priceRange": "$$",
      "currenciesAccepted": "USD",
      "paymentAccepted": "Cash, Credit Card, Check, Financing",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1102 S Walton Blvd",
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
          "@type": "City",
          "name": "Bentonville",
          "sameAs": "https://en.wikipedia.org/wiki/Bentonville,_Arkansas"
        },
        {
          "@type": "City",
          "name": "Bella Vista",
          "sameAs": "https://en.wikipedia.org/wiki/Bella_Vista,_Arkansas"
        },
        {
          "@type": "City",
          "name": "Rogers",
          "sameAs": "https://en.wikipedia.org/wiki/Rogers,_Arkansas"
        },
        {
          "@type": "City",
          "name": "Fayetteville",
          "sameAs": "https://en.wikipedia.org/wiki/Fayetteville,_Arkansas"
        },
        {
          "@type": "City",
          "name": "Springdale",
          "sameAs": "https://en.wikipedia.org/wiki/Springdale,_Arkansas"
        },
        {
          "@type": "City",
          "name": "Centerton",
          "sameAs": "https://en.wikipedia.org/wiki/Centerton,_Arkansas"
        },
        {
          "@type": "City",
          "name": "Cave Springs",
          "sameAs": "https://en.wikipedia.org/wiki/Cave_Springs,_Arkansas"
        },
        {
          "@type": "City",
          "name": "Lowell",
          "sameAs": "https://en.wikipedia.org/wiki/Lowell,_Arkansas"
        },
        {
          "@type": "City",
          "name": "Pea Ridge",
          "sameAs": "https://en.wikipedia.org/wiki/Pea_Ridge,_Arkansas"
        },
        {
          "@type": "City",
          "name": "Tontitown",
          "sameAs": "https://en.wikipedia.org/wiki/Tontitown,_Arkansas"
        },
        {
          "@type": "City",
          "name": "Farmington",
          "sameAs": "https://en.wikipedia.org/wiki/Farmington,_Arkansas"
        },
        {
          "@type": "City",
          "name": "Siloam Springs",
          "sameAs": "https://en.wikipedia.org/wiki/Siloam_Springs,_Arkansas"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Northwest Arkansas",
          "sameAs": "https://en.wikipedia.org/wiki/Northwest_Arkansas"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Gutter Protection & Drainage Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "316 Surgical Stainless Micro-Mesh Gutter Guard Installation",
              "description": "Marine-grade 316 stainless steel micro-mesh gutter protection with 10-Year Transferable No-Clog Guarantee."
            },
            "price": "1250.00",
            "priceCurrency": "USD"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Diagnostic Gutter Cleanout & 21-Point Roofline Audit",
              "description": "Full hand cleanout, high-velocity downspout flush, laser slope realignment, and 21-point video audit. 100% credited toward guards."
            },
            "price": "149.00",
            "priceCurrency": "USD"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "PVC Composite Fascia & Rafter Tail Rot Repair",
              "description": "Replacement of damaged wooden fascia boards with lifetime rot-proof PVC composite before gutter realignment."
            },
            "price": "350.00",
            "priceCurrency": "USD"
          }
        ]
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "07:00",
          "closes": "19:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "187",
        "reviewCount": "187"
      },
      "knowsAbout": [
        "Stainless Steel Micro-Mesh Gutter Guards",
        "Pine Needle Gutter Protection",
        "Oak Tassel Catkin Filtration",
        "Gutter Cleaning & Slope Tune-Ups",
        "Seamless Gutter Installation",
        "Foundation Water Damage Prevention",
        "Beaver Lake Moisture & Mildew Defense",
        "Expansive Vertisol Clay Soil Drainage"
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 36.2500,
          "longitude": -94.1800
        },
        "geoRadius": "80000"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "xPath": ["/html/head/title", "/html/head/meta[@name='description']/@content"]
      }
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": siteUrl,
      "name": "Ozark Gutter Guard Co.",
      "publisher": {
        "@id": `${siteUrl}/#organization`
      }
    }
  ];

  // City-specific LocalBusiness entity — captures local Knowledge Graph for each city slug
  if (cityName && slug && geo) {
    const cityPostalAreas = postalCodes && postalCodes.length > 0
      ? postalCodes.map(code => ({
          "@type": "PostalAddress",
          "addressLocality": cityName,
          "addressRegion": "AR",
          "postalCode": code
        }))
      : [{ "@type": "PostalAddress", "addressLocality": cityName, "addressRegion": "AR" }];

    graphNodes.push({
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/${slug}#localbusiness`,
      "name": `Ozark Gutter Guard Co. - ${cityName}`,
      "url": `${siteUrl}/${slug}`,
      "telephone": primaryPhone,
      "priceRange": "$1,250 - $2,350",
      "areaServed": cityPostalAreas,
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": String(geo.latitude),
        "longitude": String(geo.longitude)
      },
      "parentOrganization": { "@id": `${siteUrl}/#organization` },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "187",
        "reviewCount": "187"
      }
    });
  }

  if (slug) {
    const pageUrl = `${siteUrl}/${slug}`;
    // Event schema for seasonal pages — surfaces in Google for spring/fall demand queries
    if (seasonalEvent) {
      graphNodes.push({
        "@type": "Event",
        "@id": `${pageUrl}/#event`,
        "name": seasonalEvent.name,
        "startDate": seasonalEvent.startDate,
        "endDate": seasonalEvent.endDate,
        "description": seasonalEvent.description,
        "location": { "@type": "Place", "name": "Northwest Arkansas", "address": { "@type": "PostalAddress", "addressRegion": "AR", "addressCountry": "US" } },
        "organizer": { "@id": `${siteUrl}/#organization` },
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
      });
    }

    graphNodes.push({
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      "url": pageUrl,
      "name": title || "Ozark Gutter Guard Co.",
      "description": description || "Medical-grade stainless steel micro-mesh gutter protection in Northwest Arkansas.",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", ".speakable"]
      },
      "isPartOf": {
        "@id": `${siteUrl}/#website`
      },
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
            "name": cityName ? `Gutter Guards in ${cityName}` : (title || "Service"),
            "item": pageUrl
          }
        ]
      }
    });

    if (cityName) {
      const postalAreaServed = postalCodes && postalCodes.length > 0
        ? postalCodes.map(code => ({
            "@type": "PostalAddress",
            "addressLocality": cityName,
            "addressRegion": "AR",
            "postalCode": code
          }))
        : [{
            "@type": "City",
            "name": cityName,
            "sameAs": wikiUrl || `https://en.wikipedia.org/wiki/${cityName},_Arkansas`,
            ...(geo ? {
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": geo.latitude,
                "longitude": geo.longitude
              }
            } : {})
          }];

      graphNodes.push({
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        "name": `Surgical 316 Micro-Mesh Gutter Guard Installation in ${cityName}, AR`,
        "serviceType": "Gutter Protection & Cleanout",
        "provider": {
          "@id": `${siteUrl}/#organization`
        },
        "areaServed": postalAreaServed,
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
  }

  if (faqs && faqs.length > 0) {
    graphNodes.push({
      "@type": "FAQPage",
      "@id": `${siteUrl}/${slug || ''}#faq`,
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

