import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Clock, Phone, ArrowLeft, ShieldCheck, CheckCircle2, MapPin } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import { GUIDES_DATA, getGuide } from '@/data/guides/_index';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return GUIDES_DATA.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return { title: 'Not Found' };
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: `https://ozarkgutterguard.com/guides/${guide.slug}` },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url: `https://ozarkgutterguard.com/guides/${guide.slug}`,
      type: 'article',
      publishedTime: guide.publishDate,
    },
  };
}

const categoryLabels: Record<string, string> = {
  foundation: 'Foundation & Water Damage',
  trees: 'NWA Tree Threats',
  weather: 'Ozark Weather & Drainage',
  'diy-warning': 'DIY Safety',
  homeowner: 'Homeowner Guide',
};

function renderInline(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, index) =>
    index % 2 === 1 ? <strong key={index} className="font-bold text-slate-900">{part}</strong> : part
  );
}

// Convert \n\n to paragraphs, list items, and **text** to bold
function renderBody(body: string) {
  return body.split('\n\n').map((para, i) => {
    const lines = para.split('\n').filter(Boolean);
    const isBulleted = lines.length > 0 && lines.every((line) => /^-\s/.test(line));
    const isNumbered = lines.length > 0 && lines.every((line) => /^\d+[.)]\s/.test(line));

    if (isBulleted || isNumbered) {
      const ListTag = isBulleted ? 'ul' : 'ol';
      return (
        <ListTag key={i} className={`${isBulleted ? 'list-disc' : 'list-decimal'} pl-6 text-slate-700 leading-relaxed mb-4 space-y-2 text-base sm:text-lg`}>
          {lines.map((line, lineIdx) => (
            <li key={lineIdx}>{renderInline(line.replace(/^(-|\d+[.)])\s/, ''))}</li>
          ))}
        </ListTag>
      );
    }

    return (
      <p key={i} className="text-slate-700 leading-relaxed mb-4 text-base sm:text-lg">
        {renderInline(para)}
      </p>
    );
  });
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const related = GUIDES_DATA.filter((g) => guide.relatedSlugs.includes(g.slug));

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: guide.sections.slice(0, 4).map((s) => ({
      '@type': 'Question',
      name: s.heading,
      acceptedAnswer: {
        '@type': 'Answer',
        text: s.body.replace(/\*\*/g, '').replace(/\n\n/g, ' '),
      },
    })),
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.metaDescription,
    datePublished: guide.publishDate,
    author: {
      '@type': 'Person',
      name: 'Ozark Gutter Guard Specialist',
      jobTitle: 'Field Installation & Drainage Lead',
      worksFor: {
        '@type': 'LocalBusiness',
        name: 'Ozark Gutter Guard Co.',
        telephone: '+1-479-929-2516',
        areaServed: ['Bentonville, AR', 'Rogers, AR', 'Fayetteville, AR', 'Springdale, AR', 'Bella Vista, AR'],
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ozark Gutter Guard Co.',
      logo: { '@type': 'ImageObject', url: 'https://ozarkgutterguard.com/logo.png' },
    },
    mainEntityOfPage: `https://ozarkgutterguard.com/guides/${guide.slug}`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ozarkgutterguard.com' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://ozarkgutterguard.com/guides' },
      { '@type': 'ListItem', position: 3, name: guide.title, item: `https://ozarkgutterguard.com/guides/${guide.slug}` },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <TopBar />
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="bg-slate-100 border-b border-slate-200 py-2.5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-xs font-semibold text-slate-500 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-orange-600 transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-slate-800 line-clamp-1">{guide.title}</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-slate-50 border-b border-slate-200 py-10 sm:py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/guides" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-orange-600 mb-6 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to all guides
            </Link>
            <div className="space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-3xl">{guide.heroEmoji}</span>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-orange-50 text-orange-700 border border-orange-200">
                  {categoryLabels[guide.category]}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400 font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  {guide.readTime}
                </span>
                <span className="text-xs text-slate-400">{new Date(guide.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>

              <h1 className="speakable text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                {guide.title}
              </h1>

              {/* Author & Local Trust Badge */}
              <div className="flex items-center gap-3 pt-2 pb-1 border-y border-slate-200/80 my-3">
                <div className="w-9 h-9 rounded-full bg-orange-600 text-white font-black text-sm flex items-center justify-center shadow-sm">
                  OG
                </div>
                <div className="text-xs">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <span>Ozark Gutter Guard Installation Team</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-600 inline" />
                  </div>
                  <div className="text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-orange-500" />
                    <span>Serving Bentonville, Rogers, Fayetteville, Springdale & Bella Vista</span>
                  </div>
                </div>
              </div>

              <p className="speakable text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {guide.intro}
              </p>
            </div>
          </div>
        </section>

        {/* Article body */}
        <article className="py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {guide.sections.map((section, i) => (
              <section key={i} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight border-l-4 border-orange-500 pl-4">
                  {section.heading}
                </h2>
                <div>{renderBody(section.body)}</div>
              </section>
            ))}
          </div>
        </article>

        {/* Direct Local Phone & Free Satellite Estimate Banner */}
        <section className="py-8 bg-orange-50 border-y border-orange-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-orange-800 font-black text-sm">
                <CheckCircle2 className="w-4 h-4 text-orange-600" />
                <span>Got Questions About Your NWA Roofline?</span>
              </div>
              <p className="text-xs text-slate-700 mt-0.5">
                Talk directly with our local crew. No high-pressure sales rep, just honest local pricing.
              </p>
            </div>
            <a
              href="tel:+14799292516"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-xl font-black text-sm whitespace-nowrap shadow-sm transition-transform active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>(479) 929-2516</span>
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-slate-950 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h2 className="text-2xl font-black">{guide.ctaText}</h2>
            <p className="text-sm text-slate-300">15-minute satellite quote. No in-home sales rep. Written 10-Year Guarantee.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                href="/satellite-quote"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-black text-sm"
              >
                <span>Get Free Satellite Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+14799292516"
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-bold text-sm border border-slate-700"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>(479) 929-2516</span>
              </a>
            </div>
          </div>
        </section>

        {/* Related service pages */}
        {related.length > 0 && (
          <section className="py-10 bg-slate-50 border-t border-slate-200">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-sm font-black uppercase tracking-wider text-slate-500 mb-4">More Guides</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {related.map((g) => (
                  <Link
                    key={g.slug}
                    href={`/guides/${g.slug}`}
                    className="group bg-white border border-slate-200 rounded-xl p-4 hover:border-orange-500 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{g.heroEmoji}</span>
                      <div>
                        <div className="font-bold text-slate-900 text-sm group-hover:text-orange-600 transition-colors line-clamp-2">{g.title}</div>
                        <div className="text-xs text-slate-400 mt-1">{g.readTime}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
