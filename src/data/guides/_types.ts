export interface GuideSection {
  heading: string;
  body: string; // supports \n\n paragraphs and **bold** markdown
}

export interface GuidePost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: 'foundation' | 'trees' | 'weather' | 'diy-warning' | 'homeowner';
  readTime: string;
  publishDate: string; // YYYY-MM-DD
  heroEmoji: string;
  intro: string;
  sections: GuideSection[];
  ctaText: string;
  relatedSlugs: string[]; // slugs from seoPages or other guides
}
