import { Metadata } from 'next';
import Link from 'next/link';
import { 
  MapPin, 
  ShieldCheck, 
  FileText, 
  Search, 
  ChevronRight, 
  Compass, 
  Wrench, 
  Home, 
  BookOpen, 
  Sparkles, 
  Building,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import SchemaJsonLd from '@/components/SchemaJsonLd';
import { SEO_PAGES_DATA } from '@/data/seoPages/_index';
import { GUIDES_DATA } from '@/data/guides/_index';

export const metadata: Metadata = {
  title: 'Site Directory & Sitemap | Ozark Gutter Guard Co. NWA',
  description: 'Complete HTML sitemap and directory of Northwest Arkansas gutter protection, cleaning, installation, and repair services, city hubs, neighborhood guides, and ZIP code coverage.',
  alternates: { canonical: 'https://ozarkgutterguard.com/site-directory' },
  openGraph: {
    title: 'Site Directory & Sitemap | Ozark Gutter Guard Co. NWA',
    description: 'Complete index of Northwest Arkansas gutter protection, cleaning, installation, and repair services across Benton and Washington Counties.',
    url: 'https://ozarkgutterguard.com/site-directory',
    type: 'website',
  },
};

export default function SiteDirectoryPage() {
  // Filter indexed SEO pages (exclude noindex thin permutations)
  const indexedPages = SEO_PAGES_DATA.filter((p) => !p.noindex);

  // Group pages logically for intuitive navigation and crawlability
  const cityHubPages = indexedPages.filter((p) => p.slug.startsWith('gutter-guards-') && p.city && !p.slug.includes('727') && !p.slug.includes('pinnacle') && !p.slug.includes('coler') && !p.slug.includes('shadow') && !p.slug.includes('loch') && !p.slug.includes('mount') && !p.slug.includes('har-ber') && !p.slug.includes('wilson') && !p.slug.includes('scotsdale'));
  
  const cityServicesPages = indexedPages.filter((p) => 
    p.slug.startsWith('gutter-cleaning-') || 
    p.slug.startsWith('gutter-repair-') || 
    p.slug.startsWith('gutter-installation-') || 
    p.slug.startsWith('leaf-guard-installation-') ||
    p.slug.startsWith('fascia-soffit-repair-') ||
    p.slug.startsWith('micro-mesh-gutter-guards-') ||
    p.slug.startsWith('gutter-guard-cost-')
  );

  const neighborhoodPages = indexedPages.filter((p) => 
    p.slug.includes('pinnacle-hills') || 
    p.slug.includes('coler-mountain') || 
    p.slug.includes('shadow-valley') || 
    p.slug.includes('loch-lomond') || 
    p.slug.includes('mount-sequoyah') || 
    p.slug.includes('har-ber-meadows') || 
    p.slug.includes('wilson-park') || 
    p.slug.includes('scotsdale') ||
    p.slug.includes('slaughter-pen') ||
    p.slug.includes('downtown-square') ||
    p.slug.includes('prairie-creek') ||
    p.slug.includes('pleasant-grove') ||
    p.slug.includes('gulley-park') ||
    p.slug.includes('metfield') ||
    p.slug.includes('shiloh-district') ||
    p.slug.includes('mckissic-springs') ||
    p.slug.includes('the-creeks') ||
    p.slug.includes('ward-nail-park')
  );

  const zipCodePages = indexedPages.filter((p) => p.slug.match(/727\d{2}/));

  const commercialAndB2bPages = indexedPages.filter((p) => 
    p.slug.includes('hoa') || 
    p.slug.includes('commercial') || 
    p.slug.includes('property-management') || 
    p.slug.includes('referral')
  );

  const mainServicesList = [
    { title: 'Home Page & Overview', href: '/', desc: 'Medical-grade 316 surgical stainless micro-mesh gutter guards.' },
    { title: 'Instant 90-Sec Satellite Quote', href: '/satellite-quote', desc: 'GIS aerial measurements delivered via text in 15 minutes.' },
    { title: 'Press Room & Newsroom', href: '/press', desc: 'Official digital PR, severe storm announcements, and engineering releases.' },
    { title: 'Diagnostic Cleanout & 21-Pt Audit ($149)', href: '/gutter-cleaning', desc: 'Full interior sludge extraction, downspout flush, and slope audit.' },
    { title: 'Verified Customer Reviews (5.0 Stars)', href: '/reviews', desc: '180+ verified 5-star reviews across Benton & Washington Counties.' },
    { title: 'Before & After Field Photos & Job Logs', href: '/before-after-photos', desc: 'Real job site documentation, flow rate testing, and roof profiles.' },
    { title: 'Seamless Gutter Installation NWA', href: '/seamless-gutter-installation-nwa', desc: 'Custom on-site 6-inch aluminum extrusions.' },
    { title: 'Pine Needle Filtration Armor', href: '/pine-needle-gutter-protection', desc: '50-micron surgical mesh engineered for Bella Vista Loblolly pines.' },
    { title: 'Oak Tassel & Catkin Defense', href: '/oak-tassel-gutter-protection', desc: 'Blocks spring oak tassels and sweetgum seed balls.' },
    { title: 'Foundation Water Damage Prevention', href: '/foundation-water-damage-prevention', desc: 'Protecting Vertisol clay soil from perimeter saturation.' },
    { title: 'Micro-Mesh vs Screen Guards Comparison', href: '/micro-mesh-vs-screen-guards', desc: 'Lab comparison of micro-mesh vs plastic screens and helmets.' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <SchemaJsonLd type="business" />

      <TopBar />
      <Header />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="bg-slate-950 text-white py-12 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 text-xs font-bold">
              <Compass className="w-3.5 h-3.5" />
              <span>Full Site Directory &amp; Crawl Index</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Northwest Arkansas Site Directory
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Explore our complete index of local city hubs, neighborhood drainage guides, ZIP code coverage, technical homeowner research, and exterior drainage services across Benton County and Washington County.
            </p>
            <div className="pt-2 flex flex-wrap gap-3 text-xs font-bold text-slate-300">
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                {mainServicesList.length + indexedPages.length + GUIDES_DATA.length} Total Pages Indexed
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                {cityHubPages.length} City Hubs
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                {zipCodePages.length} ZIP Codes
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                {GUIDES_DATA.length} Homeowner Guides
              </span>
            </div>
          </div>
        </section>

        {/* Directory Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
          
          {/* SECTION 1: Core Services & Main Tools */}
          <section className="space-y-4">
            <div className="flex items-center gap-2.5 text-slate-900 border-b-2 border-orange-500 pb-2">
              <Home className="w-6 h-6 text-orange-600 shrink-0" />
              <h2 className="text-2xl font-black tracking-tight">
                Core Services &amp; Primary Pages
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mainServicesList.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="p-4 rounded-xl bg-white border border-slate-200 hover:border-orange-500 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <span className="font-bold text-slate-900 text-sm group-hover:text-orange-600 transition-colors flex items-center justify-between">
                      <span>{item.title}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform shrink-0" />
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* SECTION 2: City Gutter Guard Hubs */}
          <section className="space-y-4">
            <div className="flex items-center gap-2.5 text-slate-900 border-b-2 border-emerald-500 pb-2">
              <MapPin className="w-6 h-6 text-emerald-600 shrink-0" />
              <h2 className="text-2xl font-black tracking-tight">
                City Gutter Guard Hubs ({cityHubPages.length} Major Metros)
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {cityHubPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/${page.slug}`}
                  className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-sm transition-all group"
                >
                  <span className="font-bold text-slate-900 text-xs group-hover:text-emerald-700 block transition-colors">
                    {page.h1}
                  </span>
                  <span className="text-[11px] text-slate-500 block mt-1">
                    {page.badge}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* SECTION 3: City Specific Services (Installation, Cleaning, Repair, Cost) */}
          <section className="space-y-4">
            <div className="flex items-center gap-2.5 text-slate-900 border-b-2 border-blue-500 pb-2">
              <Wrench className="w-6 h-6 text-blue-600 shrink-0" />
              <h2 className="text-2xl font-black tracking-tight">
                City Specific Services (Installation, Cleaning, Repair &amp; Cost)
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {cityServicesPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/${page.slug}`}
                  className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-sm transition-all group"
                >
                  <span className="font-bold text-slate-900 text-xs group-hover:text-blue-700 block transition-colors">
                    {page.h1}
                  </span>
                  <span className="text-[11px] text-slate-500 block mt-1 line-clamp-1">
                    {page.badge}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* SECTION 4: Neighborhood & Local Area Focus Pages */}
          {neighborhoodPages.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center gap-2.5 text-slate-900 border-b-2 border-purple-500 pb-2">
                <Sparkles className="w-6 h-6 text-purple-600 shrink-0" />
                <h2 className="text-2xl font-black tracking-tight">
                  Neighborhood &amp; Specialized Local Area Focus Pages
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {neighborhoodPages.map((page) => (
                  <Link
                    key={page.slug}
                    href={`/${page.slug}`}
                    className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-purple-500 hover:shadow-sm transition-all group"
                  >
                    <span className="font-bold text-slate-900 text-xs group-hover:text-purple-700 block transition-colors">
                      {page.h1}
                    </span>
                    <span className="text-[11px] text-slate-500 block mt-1">
                      {page.badge}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* SECTION 5: ZIP Code Coverage Directory */}
          <section className="space-y-4">
            <div className="flex items-center gap-2.5 text-slate-900 border-b-2 border-amber-500 pb-2">
              <Compass className="w-6 h-6 text-amber-600 shrink-0" />
              <h2 className="text-2xl font-black tracking-tight">
                Northwest Arkansas ZIP Code Service Directory ({zipCodePages.length} Postal Zones)
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {zipCodePages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/${page.slug}`}
                  className="p-3 rounded-xl bg-white border border-slate-200 hover:border-amber-500 hover:shadow-xs transition-all group text-center"
                >
                  <span className="font-mono font-bold text-amber-600 text-sm block group-hover:text-amber-700">
                    {page.slug.match(/727\d{2}/)?.[0]}
                  </span>
                  <span className="text-slate-800 text-[11px] font-bold block mt-0.5 line-clamp-1">
                    {page.city}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* SECTION 6: Homeowner Guides & Research Library */}
          <section className="space-y-4">
            <div className="flex items-center justify-between border-b-2 border-emerald-600 pb-2">
              <div className="flex items-center gap-2.5 text-slate-900">
                <BookOpen className="w-6 h-6 text-emerald-600 shrink-0" />
                <h2 className="text-2xl font-black tracking-tight">
                  Homeowner Guides &amp; Research Library ({GUIDES_DATA.length} Articles)
                </h2>
              </div>
              <Link href="/guides" className="text-xs font-bold text-emerald-600 hover:underline flex items-center gap-1">
                <span>View Guides Index</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {GUIDES_DATA.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-sm transition-all group flex items-start gap-3"
                >
                  <span className="text-2xl shrink-0 mt-0.5">{guide.heroEmoji}</span>
                  <div>
                    <span className="font-bold text-slate-900 text-xs group-hover:text-emerald-600 block transition-colors leading-snug">
                      {guide.title}
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-1 font-mono">
                      {guide.readTime} • {guide.category}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* SECTION 7: Commercial, HOA & Specialty Pages */}
          {commercialAndB2bPages.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center gap-2.5 text-slate-900 border-b-2 border-slate-700 pb-2">
                <Building className="w-6 h-6 text-slate-700 shrink-0" />
                <h2 className="text-2xl font-black tracking-tight">
                  Commercial, HOA &amp; B2B Referral Network
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {commercialAndB2bPages.map((page) => (
                  <Link
                    key={page.slug}
                    href={`/${page.slug}`}
                    className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-slate-800 hover:shadow-sm transition-all group"
                  >
                    <span className="font-bold text-slate-900 text-xs group-hover:text-orange-600 block transition-colors">
                      {page.h1}
                    </span>
                    <span className="text-[11px] text-slate-500 block mt-1">
                      {page.badge}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* XML Sitemap Direct Link Box */}
          <section className="p-6 rounded-2xl bg-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-800">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                Machine-Readable Indexing
              </span>
              <h3 className="text-lg font-black text-white">
                Official XML Sitemap for Search Engine Crawlers
              </h3>
              <p className="text-xs text-slate-300">
                Our dynamic XML sitemap is automatically updated with lastmod timestamps for Googlebot, Bingbot, and Applebot.
              </p>
            </div>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shrink-0 transition-colors shadow-md"
            >
              <FileText className="w-4 h-4" />
              <span>View Raw XML Sitemap</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </section>

        </div>
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
