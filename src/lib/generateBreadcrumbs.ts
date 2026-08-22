export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(
  slug: string,
  cityName: string,
  parentHubSlug?: string,
  pageBadge?: string
) {
  const baseUrl = 'https://ozarkgutterguard.com';

  const itemList: Array<{
    '@type': string;
    position: number;
    name: string;
    item: string;
  }> = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: baseUrl,
    },
  ];

  if (parentHubSlug && parentHubSlug !== slug) {
    itemList.push({
      '@type': 'ListItem',
      position: 2,
      name: `${cityName} Gutter Guard Installation Hub`,
      item: `${baseUrl}/${parentHubSlug}`,
    });
    itemList.push({
      '@type': 'ListItem',
      position: 3,
      name: pageBadge || slug.replace(/-/g, ' '),
      item: `${baseUrl}/${slug}`,
    });
  } else {
    itemList.push({
      '@type': 'ListItem',
      position: 2,
      name: `${cityName} Gutter Guard Installation Hub`,
      item: `${baseUrl}/${slug}`,
    });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: itemList,
  };
}
