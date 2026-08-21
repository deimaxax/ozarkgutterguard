export interface SeoPageData {
  slug: string;
  cluster: 'location' | 'comparison' | 'problem' | 'cost' | 'service';
  city?: string;
  noindex?: boolean; // true = thin page, exclude from Google index to protect domain quality
  metaTitle: string;
  metaDescription: string;
  badge: string;
  h1: string;
  subheadline: string;
  painPointTitle: string;
  painPoints: {
    title: string;
    description: string;
  }[];
  localContext: {
    heading: string;
    content: string;
  };
  geoCoordinates?: {
    latitude: number;
    longitude: number;
  };
}

// Internal type for programmatic EXTENDED_QUERIES — not exported
export interface QueryDef {
  slug: string;
  cluster: 'location' | 'comparison' | 'problem' | 'cost' | 'service';
  city?: string;
  badge: string;
  h1: string;
  subheadline: string;
  metaTitle: string;
  metaDescription: string;
  painPoint1: [string, string];
  painPoint2: [string, string];
  painPoint3: [string, string];
  contextHeading: string;
  contextContent: string;
  geo?: { latitude: number; longitude: number };
}
