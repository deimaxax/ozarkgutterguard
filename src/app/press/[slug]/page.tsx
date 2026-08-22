import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, MapPin, ArrowLeft, Mail, Phone, Building2, ShieldCheck, Share2, CheckCircle2 } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import SchemaJsonLd from '@/components/SchemaJsonLd';
import { PRESS_RELEASES_DATA, getPressRelease } from '@/data/pressReleases';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRESS_RELEASES_DATA.map((pr) => ({
    slug: pr.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pr = getPressRelease(slug);

  if (!pr) {
    return { title: 'Press Release Not Found | Ozark Gutter Guard Co.' };
  }

  const pageUrl = `https://ozarkgutterguard.com/press/${pr.slug}`;

  return {
    title: pr.metaTitle,
    description: pr.metaDescription,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: pr.metaTitle,
      description: pr.metaDescription,
      url: pageUrl,
      type: 'article',
      siteName: 'Ozark Gutter Guard Co. Newsroom',
    },
  };
}

export default async function PressReleaseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const pr = getPressRelease(slug);

  if (!pr) {
    notFound();
  }

  const pageUrl = `https://ozarkgutterguard.com/press/${pr.slug}`;

  const newsArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: pr.title,
    description: pr.summary,
    datePublished: '2026-01-14T08:00:00-06:00',
    dateModified: '2026-01-14T08:00:00-06:00',
    mainEntityOfPage: pageUrl,
    author: {
      '@type': 'Organization',
      name: 'Ozark Gutter Guard Co. Media Desk',
      url: 'https://ozarkgutterguard.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ozark Gutter Guard Co.',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ozarkgutterguard.com/logo.svg',
      },
    },
    image: 'https://ozarkgutterguard.com/hero-roof.svg',
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleSchema) }}
      />

      <TopBar />
      <Header />

      <main className="flex-1 py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Breadcrumbs */}
          <nav className="text-xs text-slate-500 flex items-center gap-2 font-medium">
            <Link href="/" className="hover:text-slate-900">Home</Link>
            <span>/</span>
            <Link href="/press" className="hover:text-slate-900">Newsroom</Link>
            <span>/</span>
            <span className="text-slate-900 font-bold truncate max-w-xs">{pr.title}</span>
          </nav>

          {/* Press Release Container */}
          <article className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-12 shadow-sm space-y-8">
            
            {/* Header Metadata */}
            <div className="space-y-4 border-b border-slate-100 pb-6">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 font-bold uppercase tracking-wider text-[10px]">
                  FOR IMMEDIATE RELEASE — {pr.category}
                </span>
                <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{pr.publishDate}</span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                {pr.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed italic border-l-4 border-orange-500 pl-4">
                {pr.headline}
              </p>
            </div>

            {/* Key Takeaways Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
              <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Executive Summary &amp; Key Findings</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {pr.keyTakeaways.map((takeaway, idx) => (
                  <div key={idx} className="flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span className="leading-snug">{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Body Paragraphs */}
            <div className="space-y-5 text-slate-800 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                <strong className="text-slate-950 font-black">{pr.location} — {pr.publishDate} — </strong>
                {pr.bodyParagraphs[0]}
              </p>

              {pr.bodyParagraphs.slice(1).map((p, idx) => (
                <p key={idx} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* About Company Boilerplate */}
            <div className="bg-slate-950 text-white rounded-2xl p-6 sm:p-8 space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-orange-400">
                About Ozark Gutter Guard Co.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {pr.aboutCompany}
              </p>
              <div className="pt-2 text-xs text-slate-400">
                For more information or to request high-resolution project photography, visit <Link href="https://ozarkgutterguard.com" className="text-orange-400 underline font-bold">ozarkgutterguard.com</Link>.
              </div>
            </div>

            {/* Media Contact Information Box */}
            <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50 space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">
                Media &amp; Public Relations Contact
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-xs text-slate-700">
                <div>
                  <span className="font-bold text-slate-900 block">{pr.mediaContact.name}</span>
                  <span className="text-slate-500">{pr.mediaContact.title}</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-orange-600" />
                    <span>{pr.mediaContact.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-orange-600" />
                    <span>{pr.mediaContact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-orange-600" />
                    <span>{pr.mediaContact.officeAddress}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Back to newsroom */}
            <div className="pt-4 flex items-center justify-between border-t border-slate-100 text-xs">
              <Link
                href="/press"
                className="inline-flex items-center gap-1.5 font-bold text-orange-600 hover:text-orange-700"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Newsroom</span>
              </Link>
              <span className="text-slate-400 font-mono">ID: {pr.id.toUpperCase()}</span>
            </div>

          </article>

        </div>
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
