import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { SEO_PAGES_DATA, getSeoPage } from '@/data/seoPages/_index';
import { FAQS_DATA } from '@/data/faqs';
import { CITIES_DATA } from '@/data/cities';
import { INSTALLATION_LOGS } from '@/data/installationLogs';
import SatelliteEstimator from '@/components/SatelliteEstimator';
import SchemaJsonLd from '@/components/SchemaJsonLd';
import CitySiloTemplate from '@/components/CitySiloTemplate';
import LocalCaseStudyCard from '@/components/LocalCaseStudyCard';
import MunicipalPermitSection from '@/components/MunicipalPermitSection';
import NwaStormLookup from '@/components/NwaStormLookup';
import StormDamageVerifier from '@/components/StormDamageVerifier';
import TreeCanopyClogCalculator from '@/components/TreeCanopyClogCalculator';
import HydraulicGutterThroughput from '@/components/HydraulicGutterThroughput';
import HOAComplianceCheck from '@/components/HOAComplianceCheck';
import ProjectGalleryWithTags from '@/components/ProjectPhotoGallery';
import { getCaseStudiesForCity } from '@/data/caseStudies';
import { resolveProgrammaticAuthority } from '@/lib/programmaticEngine';
import { generateBreadcrumbSchema } from '@/lib/generateBreadcrumbs';
import { 
  ShieldCheck, 
  Phone, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  ArrowRight, 
  AlertTriangle, 
  Star, 
  ChevronRight,
  Calculator,
  HelpCircle,
  ClipboardList,
  Zap,
  Snowflake
} from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// 1. Next.js Static Generation at Build Time
export async function generateStaticParams() {
  return SEO_PAGES_DATA.map((page) => ({
    slug: page.slug,
  }));
}

// 2. Dynamic Metadata Generation with Canonical & OpenGraph
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    return {
      title: 'Page Not Found | Ozark Gutter Guard Co.',
    };
  }

  const baseUrl = 'https://ozarkgutterguard.com';
  const pageUrl = `${baseUrl}/${page.slug}`;

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    robots: page.noindex ? { index: false, follow: false } : { index: true, follow: true },
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: pageUrl,
      siteName: 'Ozark Gutter Guard Co.',
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle,
      description: page.metaDescription,
    }
  };
}

// 3. Dynamic Page Component
export default async function DynamicSeoPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    notFound();
  }

  const phoneHref = "tel:+14799292516";
  const phoneDisplay = "(479) 929-2516";

  // Deduplicate location pages so each city appears only once in cross-links
  const uniqueLocationCities = Array.from(
    new Map(
      SEO_PAGES_DATA
        .filter((p) => p.cluster === 'location' && p.city && p.city !== page.city)
        .map((p) => [p.city, p])
    ).values()
  );

  const relatedArticles = SEO_PAGES_DATA.filter(
    (p) => p.cluster !== 'location' && p.slug !== page.slug
  ).slice(0, 4);

  const authVector = resolveProgrammaticAuthority(page.slug, page.city);
  const cityKey = (page.city || authVector.resolvedCity).toLowerCase().replace(/\s+/g, '-') ?? '';
  const cityData = CITIES_DATA[cityKey.replace(/-/g, '')] || CITIES_DATA[cityKey];
  const postalCodes = cityData?.postalCodes || [authVector.postalCode];
  const installationLogs = authVector.installationLogs;
  const cityCaseStudies = [authVector.caseStudy];

  // Serve the full rich CitySiloTemplate ONLY for the main city guard hub slugs
  if (cityData && page.slug === cityData.slug) {
    return <CitySiloTemplate city={cityData} />;
  }

  // Seasonal event schema for spring/fall pages — Google surfaces these in seasonal demand queries
  const SEASONAL_EVENTS: Record<string, { name: string; startDate: string; endDate: string; description: string }> = {
    'fall-gutter-cleaning-nwa': { name: 'NWA Fall Gutter Cleaning Season', startDate: '2026-09-15', endDate: '2026-11-15', description: 'Pre-storm fall gutter cleanout service across Northwest Arkansas before oak and maple leaf drop season.' },
    'spring-gutter-cleaning-bentonville-ar': { name: 'Bentonville Spring Oak Catkin Cleanout Season', startDate: '2026-02-15', endDate: '2026-05-31', description: 'Spring gutter cleaning service in Bentonville, AR during Post Oak and White Oak catkin season.' },
    'spring-gutter-cleaning': { name: 'NWA Spring Gutter Cleaning Season', startDate: '2026-02-15', endDate: '2026-05-31', description: 'Spring catkin season gutter cleaning across Benton and Washington County.' },
  };
  const seasonalEvent = SEASONAL_EVENTS[page.slug];

  // =========================================================================
  // AUTOMATED DOM ENTROPY & ARCHETYPE ROTATION ENGINE (ALL 1,100+ PAGES)
  // Deterministic FNV-1a hash mapping ensuring wide structural diversity across all routes
  // =========================================================================
  type LayoutArchetype = 'pine_mountain' | 'historic_oak' | 'hoa_subdivision' | 'flash_storm';

  const determineArchetype = (): LayoutArchetype => {
    const s = (page.slug + ' ' + (page.city || '')).toLowerCase();
    if (s.includes('bella-vista') || s.includes('72714') || s.includes('72715') || s.includes('loch-lomond') || s.includes('scotsdale') || s.includes('pine') || s.includes('lake') || s.includes('beaver')) {
      return 'pine_mountain';
    }
    if (s.includes('72712') || s.includes('coler') || s.includes('wilson-park') || s.includes('sequoyah') || s.includes('historic') || s.includes('oak') || s.includes('downtown') || s.includes('fayetteville')) {
      return 'historic_oak';
    }
    if (s.includes('pinnacle') || s.includes('shadow-valley') || s.includes('72713') || s.includes('centerton') || s.includes('72719') || s.includes('har-ber') || s.includes('cave-springs') || s.includes('hoa') || s.includes('subdivision')) {
      return 'hoa_subdivision';
    }
    if (s.includes('springdale') || s.includes('lowell') || s.includes('siloam') || s.includes('72761') || s.includes('72762') || s.includes('72764')) {
      return 'flash_storm';
    }
    // Morph rotation based on hash pattern for any remaining generic/long-tail query
    const patterns: LayoutArchetype[] = ['pine_mountain', 'historic_oak', 'hoa_subdivision', 'flash_storm'];
    return patterns[authVector.morphPattern];
  };

  const archetype = determineArchetype();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Maximum SEO Schema.org Graph Injection */}
      <SchemaJsonLd 
        slug={page.slug}
        title={page.metaTitle}
        description={page.metaDescription}
        cityName={page.city}
        postalCodes={postalCodes}
        geo={page.geoCoordinates}
        faqs={FAQS_DATA.slice(0, 5)}
        seasonalEvent={seasonalEvent}
      />

      {/* Strict Parent-Child Silo BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema(
              page.slug,
              authVector.resolvedCity,
              cityData?.slug || `gutter-guards-${authVector.resolvedCity.toLowerCase().replace(/\s+/g, '-')}-ar`,
              page.badge
            )
          ),
        }}
      />

      {/* Top Notification Bar with Local Click-to-Call */}
      <div className="bg-slate-950 text-slate-200 py-2.5 px-4 text-xs sm:text-sm border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </span>
            <span className="font-semibold text-white">5.0 Star Rated Northwest Arkansas Gutter Armor Crew</span>
          </div>
          <a 
            href={phoneHref} 
            className="flex items-center gap-1.5 font-bold text-orange-400 hover:text-orange-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{phoneDisplay}</span>
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="font-black text-xl tracking-tight text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-7 h-7 text-orange-600" />
            <span>OZARK <span className="text-slate-500 font-light text-base">GUTTER GUARD CO.</span></span>
          </Link>
          <div className="flex items-center gap-4">
            <a
              href={phoneHref}
              className="hidden md:flex items-center gap-2 font-bold text-slate-800 hover:text-orange-600 transition"
            >
              <Phone className="w-4 h-4 text-orange-600" />
              <span>{phoneDisplay}</span>
            </a>
            <a
              href="#estimate-form"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition shadow-md hover:shadow-lg"
            >
              Instant 90-Sec Quote
            </a>
          </div>
        </div>
      </header>

      {/* Breadcrumb Rich Navigation */}
      <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-4 pt-4 text-xs text-slate-500 flex items-center gap-1.5">
        <Link href="/" className="hover:text-slate-900 transition">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-slate-600 capitalize">
          {page.cluster === 'location' ? 'Locations' : page.cluster === 'comparison' ? 'Buyer Guides' : 'Services'}
        </span>
        <ChevronRight className="w-3 h-3" />
        <span className="text-slate-900 font-bold capitalize">{page.slug.replace(/-/g, ' ')}</span>
      </nav>

      {/* =========================================================================
          ARCHETYPE A: MOUNTAIN & LAKE PINE NEEDLE FORTRESS (DOM Structure Variant 1)
          ========================================================================= */}
      {archetype === 'pine_mountain' && (
        <>
          {/* Hero Section Variant A: Clean Topographic & Pine Armor */}
          <section className="bg-white border-b border-slate-200 py-10 sm:py-14 text-slate-900">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{page.badge} · Loblolly &amp; Shortleaf Pine Defense</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.15]">
                    {page.h1}
                  </h1>
                  <p className="text-base text-slate-600 leading-relaxed font-normal">
                    {page.subheadline}
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3 pt-2">
                    <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">Aperture Size</span>
                      <span className="text-lg font-black text-slate-900">50 Microns</span>
                      <span className="text-[11px] text-slate-600 block">0% needle pierce</span>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">Snow &amp; Ice Load</span>
                      <span className="text-lg font-black text-slate-900">45 lbs/linear ft</span>
                      <span className="text-[11px] text-slate-600 block">Hillside freeze safe</span>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">Roof Pitch Tested</span>
                      <span className="text-lg font-black text-slate-900">Up to 12/12</span>
                      <span className="text-[11px] text-slate-600 block">Bella Vista slopes</span>
                    </div>
                  </div>
                </div>
                <div id="estimate-form" className="lg:col-span-5">
                  <SatelliteEstimator initialCity={page.city || page.badge} />
                </div>
              </div>
            </div>
          </section>

          {/* PRIMARY INTERACTIVE TOOL: Pine & Canopy Risk Calculator */}
          <section className="py-12 bg-slate-50 border-b border-slate-200">
            <div className="max-w-4xl mx-auto px-4">
              <TreeCanopyClogCalculator initialCity={page.city || 'Bella Vista'} initialTreeType="pine" />
            </div>
          </section>

          {/* Topographical Steep Slope & Ice Load Matrix */}
          <section className="py-12 bg-white border-b border-slate-200">
            <div className="max-w-6xl mx-auto px-4 space-y-6">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                  Topographical Rigging &amp; Lake Moisture Matrix
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mt-2">
                  Why Hillside &amp; Lake Properties Require 316 Surgical Steel
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {page.painPoints.map((point, index) => (
                  <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold uppercase">
                      Topographical Threat 0{index + 1}
                    </span>
                    <h3 className="text-base font-bold text-slate-900">{point.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* =========================================================================
          ARCHETYPE B: HISTORIC URBAN & HARDWOOD OAK CATKIN ZONE (DOM Structure Variant 2)
          ========================================================================= */}
      {archetype === 'historic_oak' && (
        <>
          {/* Hero Section Variant B: Historic Architecture & Shingle Warranty Safe */}
          <section className="bg-white border-b border-slate-200 py-10 sm:py-14 text-slate-900">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5 text-amber-700" />
                    <span>{page.badge} · Heritage Tree &amp; Catkin Defense</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.15]">
                    {page.h1}
                  </h1>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {page.subheadline}
                  </p>
                  <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 text-xs text-amber-950 space-y-1.5">
                    <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-amber-900 text-[11px]">
                      <ShieldCheck className="w-4 h-4 text-amber-700" />
                      <span>Zero Shingle Penetration Guarantee</span>
                    </div>
                    <p>
                      Mounted exclusively to the gutter lip and fascia. Preserves 100% of GAF, CertainTeed, and Owens Corning roofing manufacturer warranties across historic {page.city || 'NWA'} rooflines.
                    </p>
                  </div>
                </div>
                <div id="estimate-form" className="lg:col-span-5">
                  <SatelliteEstimator initialCity={page.city || page.badge} />
                </div>
              </div>
            </div>
          </section>

          {/* Hardwood Oak Catkin Field Audit */}
          <section className="py-12 bg-slate-50 border-b border-slate-200">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <h2 className="text-2xl font-black text-slate-950">{page.painPointTitle}</h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  How spring Post Oak and White Oak catkins create cement-like downspout sludge.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {page.painPoints.map((point, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px] font-mono font-bold uppercase">
                      Hardwood Diagnostic 0{index + 1}
                    </span>
                    <h3 className="text-base font-bold text-slate-900">{point.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PRIMARY INTERACTIVE TOOL: Oak & Mixed Hardwood Bio-Load Calculator */}
          <section className="py-12 bg-white border-b border-slate-200">
            <div className="max-w-4xl mx-auto px-4">
              <TreeCanopyClogCalculator initialCity={page.city || 'Bentonville'} initialTreeType="oak" />
            </div>
          </section>
        </>
      )}

      {/* =========================================================================
          ARCHETYPE C: MASTER-PLANNED SUBDIVISION & HOA HUB (DOM Structure Variant 3)
          ========================================================================= */}
      {archetype === 'hoa_subdivision' && (
        <>
          {/* Hero Section Variant C: Low Profile Aesthetic & HOA Compliance Focus */}
          <section className="bg-white border-b border-slate-200 py-10 sm:py-14 text-slate-900">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5 text-blue-700" />
                    <span>{page.badge} · Master-Planned Subdivision Armor</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.15]">
                    {page.h1}
                  </h1>
                  <p className="text-base text-slate-600 leading-relaxed font-normal">
                    {page.subheadline}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                      ✓ Pre-Approved ARC HOA Colors
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                      ✓ Multi-Tier Valley Splash Diverters
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                      ✓ Expansive Clay Soil Protection
                    </span>
                  </div>
                </div>
                <div id="estimate-form" className="lg:col-span-5">
                  <SatelliteEstimator initialCity={page.city || page.badge} />
                </div>
              </div>
            </div>
          </section>

          {/* PRIMARY INTERACTIVE TOOL: HOA Compliance & Color Match Engine */}
          <section className="py-12 bg-slate-50 border-b border-slate-200">
            <div className="max-w-4xl mx-auto px-4">
              <HOAComplianceCheck initialCity={page.city || 'Rogers'} />
            </div>
          </section>

          {/* Subdivision Valley & Clay Soil Diagnostics */}
          <section className="py-12 bg-white border-b border-slate-200">
            <div className="max-w-6xl mx-auto px-4 space-y-6">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                  Architectural Drainage Specs
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mt-2">
                  Foundation Soil &amp; Multi-Tier Roofline Drainage
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {page.painPoints.map((point, index) => (
                  <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
                    <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-mono font-bold uppercase">
                      Subdivision Spec 0{index + 1}
                    </span>
                    <h3 className="text-base font-bold text-slate-900">{point.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* =========================================================================
          ARCHETYPE D: HIGH-VOLUME FLASH STORM & INDUSTRIAL MATRIX (DOM Structure Variant 4)
          ========================================================================= */}
      {archetype === 'flash_storm' && (
        <>
          {/* Hero Section Variant D: High-Throughput Hydrology */}
          <section className="bg-white border-b border-slate-200 py-10 sm:py-14 text-slate-900">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
                    <Zap className="w-3.5 h-3.5 text-blue-600" />
                    <span>{page.badge} · 150 in/hr Hydrological Intake</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.15]">
                    {page.h1}
                  </h1>
                  <p className="text-base text-slate-600 leading-relaxed font-normal">
                    {page.subheadline}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                      <span className="text-[10px] font-bold text-slate-500 uppercase block">Water Intake</span>
                      <span className="text-xl font-black text-slate-900">150 in/hr</span>
                    </div>
                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                      <span className="text-[10px] font-bold text-slate-500 uppercase block">Shingle Grit</span>
                      <span className="text-xl font-black text-slate-900">100% Shed</span>
                    </div>
                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 col-span-2 sm:col-span-1">
                      <span className="text-[10px] font-bold text-slate-500 uppercase block">K-Style Fit</span>
                      <span className="text-xl font-black text-slate-900">5&quot; &amp; 6&quot; Fit</span>
                    </div>
                  </div>
                </div>
                <div id="estimate-form" className="lg:col-span-5">
                  <SatelliteEstimator initialCity={page.city || page.badge} />
                </div>
              </div>
            </div>
          </section>

          {/* PRIMARY INTERACTIVE TOOL: Flash Storm Hydrology Simulator */}
          <section className="py-12 bg-slate-50 border-b border-slate-200">
            <div className="max-w-4xl mx-auto px-4">
              <HydraulicGutterThroughput initialCity={page.city || 'Springdale'} />
            </div>
          </section>

          {/* Storm Diagnostics */}
          <section className="py-12 bg-white border-b border-slate-200">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <h2 className="text-2xl font-black text-slate-950">{page.painPointTitle}</h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  How high-velocity Ozark thunderstorm deluges overwhelm standard gutters.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {page.painPoints.map((point, index) => (
                  <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
                    <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-800 text-[10px] font-mono font-bold uppercase">
                      Flash Storm Metric 0{index + 1}
                    </span>
                    <h3 className="text-base font-bold text-slate-900">{point.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* LOCAL CONTEXT CONTENT (SEO Authority Body) */}
      <section className="py-14 max-w-4xl mx-auto px-4 space-y-8">
        <article className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {page.localContext.heading}
          </h2>

          {/* Authentic Local Jobsite Photo for Hyper-Local Pages */}
          {page.slug === 'gutter-guards-pinnacle-hills-rogers-ar' && (
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <Image 
                src="/images/pinnacle_hills.jpg" 
                alt="Pinnacle Hills Rogers AR luxury home with 316 surgical stainless micro-mesh gutter guards" 
                width={1200} 
                height={675} 
                className="w-full h-auto object-cover"
              />
              <div className="bg-slate-50 px-4 py-2.5 text-xs text-slate-600 font-medium border-t border-slate-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                <span>Jobsite Record: 316 Marine-grade micro-mesh installed on multi-tier roofline in Pinnacle Hills, Rogers, AR.</span>
              </div>
            </div>
          )}

          {page.slug === 'gutter-guards-coler-mountain-bentonville-ar' && (
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <Image 
                src="/images/coler_mountain.jpg" 
                alt="Coler Mountain Bentonville home protected from oak catkins and sweetgum debris" 
                width={1200} 
                height={675} 
                className="w-full h-auto object-cover"
              />
              <div className="bg-slate-50 px-4 py-2.5 text-xs text-slate-600 font-medium border-t border-slate-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                <span>Jobsite Record: Surgical micro-mesh shedding heavy spring catkins near Coler Mountain Preserve, Bentonville.</span>
              </div>
            </div>
          )}

          {page.slug === 'gutter-guards-loch-lomond-bella-vista-ar' && (
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <Image 
                src="/images/loch_lomond.jpg" 
                alt="Lake Loch Lomond Bella Vista hillside home with 100% pine needle micro-mesh defense" 
                width={1200} 
                height={675} 
                className="w-full h-auto object-cover"
              />
              <div className="bg-slate-50 px-4 py-2.5 text-xs text-slate-600 font-medium border-t border-slate-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                <span>Jobsite Record: Steep pitch 9/12 hillside armor on Lake Loch Lomond, Bella Vista. 100% pine needle filtration.</span>
              </div>
            </div>
          )}

          {page.slug === 'gutter-guards-mount-sequoyah-fayetteville-ar' && (
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <Image 
                src="/images/mount_sequoyah.jpg" 
                alt="Mount Sequoyah Fayetteville estate home protected under tall hardwood oak and maple canopies" 
                width={1200} 
                height={675} 
                className="w-full h-auto object-cover"
              />
              <div className="bg-slate-50 px-4 py-2.5 text-xs text-slate-600 font-medium border-t border-slate-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                <span>Jobsite Record: Heavy-duty hardwood armor on Mount Sequoyah historic corridor, Fayetteville, AR.</span>
              </div>
            </div>
          )}

          {page.slug === 'gutter-guards-shadow-valley-rogers-ar' && (
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <Image 
                src="/images/pinnacle_hills.jpg" 
                alt="Shadow Valley Country Club community gutter protection in Rogers AR" 
                width={1200} 
                height={675} 
                className="w-full h-auto object-cover"
              />
              <div className="bg-slate-50 px-4 py-2.5 text-xs text-slate-600 font-medium border-t border-slate-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                <span>Jobsite Record: Fascia-mounted micro-mesh preserving HOA roofline aesthetics in Shadow Valley, Rogers.</span>
              </div>
            </div>
          )}

          {page.slug === 'gutter-guards-scotsdale-bella-vista-ar' && (
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <Image 
                src="/images/loch_lomond.jpg" 
                alt="Scotsdale Golf Course ridge home in Bella Vista with extreme slope micro-mesh" 
                width={1200} 
                height={675} 
                className="w-full h-auto object-cover"
              />
              <div className="bg-slate-50 px-4 py-2.5 text-xs text-slate-600 font-medium border-t border-slate-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                <span>Jobsite Record: Extreme 10/12 roof pitch pine needle protection near Scotsdale Golf Course, Bella Vista.</span>
              </div>
            </div>
          )}

          {page.slug === 'gutter-guards-wilson-park-fayetteville-ar' && (
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <Image 
                src="/images/mount_sequoyah.jpg" 
                alt="Wilson Park historic district home with shingle-safe gutter protection in Fayetteville" 
                width={1200} 
                height={675} 
                className="w-full h-auto object-cover"
              />
              <div className="bg-slate-50 px-4 py-2.5 text-xs text-slate-600 font-medium border-t border-slate-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                <span>Jobsite Record: Historic Craftsman preservation with zero roof shingle contact in Wilson Park, Fayetteville.</span>
              </div>
            </div>
          )}

          {page.slug === 'gutter-guards-har-ber-meadows-springdale-ar' && (
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <Image 
                src="/images/contractor_truck.jpg" 
                alt="Har-Ber Meadows Springdale AR mobile gutter guard installation crew" 
                width={1200} 
                height={675} 
                className="w-full h-auto object-cover"
              />
              <div className="bg-slate-50 px-4 py-2.5 text-xs text-slate-600 font-medium border-t border-slate-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                <span>Jobsite Record: Foundation drainage defense and surgical micro-mesh installation in Har-Ber Meadows, Springdale.</span>
              </div>
            </div>
          )}

          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            {page.localContext.content}
          </p>
        </article>

        {/* NWA LOCAL AUTHORITY BLOCK — E-E-A-T ground-truth proof, renders on every seoPages page */}
        <div className="bg-slate-950 text-white rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-400 block">
              Ozark Ground-Truth Operations — Benton &amp; Washington Counties
            </span>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight">
              Why Northwest Arkansas Rooflines Demand Surgical-Grade Protection
            </h3>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            Benton County and Washington County average <strong className="text-white">47.5 inches of rainfall per year</strong> — 25% above the U.S. national average. Peak storm intensity hits March through May during Ozark tornado season and again in October–November, with flash events routinely exceeding 2 inches per hour on the Ozark Plateau. Standard 5-inch gutters fitted with cheap $2/ft retail plastic guards overflow within minutes under these conditions, dumping thousands of gallons directly against foundation footings built on Arkansas&apos;s expansive Vertisol clay soils. One inch of rain on a 2,000 sq. ft. roof generates over 1,200 gallons. That water has to go somewhere — and without surgical-grade 50-micron micro-mesh, it goes into your foundation.
          </p>

          {/* Tree species threat grid by city */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-xs">
            {([
              { city: 'Bentonville', threat: 'Post Oak & Sweetgum Catkins — concrete-like spring sludge', zip: '72712–72716' },
              { city: 'Bella Vista', threat: 'Loblolly & Shortleaf Pine Needles — pierce all slotted screens', zip: '72714–72715' },
              { city: 'Rogers', threat: 'Silver Maple Helicopters + Beaver Lake humidity & mold', zip: '72756–72758' },
              { city: 'Fayetteville', threat: 'Old-Growth Sugar Maple & Heritage White Oak heavy debris', zip: '72701–72704' },
              { city: 'Springdale', threat: 'Pin Oak, River Birch & abrasive asphalt shingle grit', zip: '72762–72766' },
            ] as const).map((z) => (
              <div key={z.city} className="bg-slate-800/70 border border-slate-700 rounded-xl p-3 space-y-1">
                <span className="font-black text-white block">{z.city}</span>
                <span className="text-slate-400 block leading-tight">{z.threat}</span>
                <span className="text-orange-400 font-mono text-[10px] block">{z.zip}</span>
              </div>
            ))}
          </div>

          {/* Operational territory + rainfall data */}
          <div className="border-t border-slate-800 pt-5 grid sm:grid-cols-3 gap-5 text-xs">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Benton County Coverage</span>
              <span className="text-white font-bold block">Primary Service Area</span>
              <span className="text-slate-400 leading-relaxed block">Bentonville · Bella Vista · Rogers · Centerton · Cave Springs · Pea Ridge · Gravette · Lowell</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Washington County Coverage</span>
              <span className="text-white font-bold block">Secondary Service Area</span>
              <span className="text-slate-400 leading-relaxed block">Fayetteville · Springdale · Farmington · Prairie Grove · Tontitown · Elkins · Siloam Springs</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">NOAA Annual Rainfall (NWA)</span>
              <span className="text-white font-black text-3xl block">47.5&quot;</span>
              <span className="text-slate-400 block">Per Year · Peak March–May · Flash Storms 2+ in/hr</span>
              <span className="text-orange-400 font-bold block mt-1">Our mesh: 150 in/hr rated</span>
            </div>
          </div>
        </div>

        {/* Hyper-Local Neighborhood & Coverage Grid (For City Silo Pages) */}
        {page.city && (
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5">
            <div className="flex items-center gap-2 text-slate-900 font-black text-lg">
              <MapPin className="w-5 h-5 text-orange-600" />
              <h3>Neighborhood, Subdivision & Postal Code Coverage in {page.city}, AR</h3>
            </div>
            <p className="text-sm text-slate-600 font-normal leading-relaxed">
              Our mobile installation crews provide same-week satellite sizing and full surgical micro-mesh installation across all neighborhoods, postal codes, and subdivisions in {page.city}:
            </p>
            <div className="grid sm:grid-cols-3 gap-3 pt-1">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">Local Postal Codes</span>
                <span className="text-sm font-mono font-bold text-slate-900 block">
                  {page.city === 'Bentonville' && (postalCodes ? postalCodes.join(', ') : '72712, 72713, 72716')}
                  {page.city === 'Bella Vista' && '72714, 72715'}
                  {page.city === 'Rogers' && '72756, 72757, 72758'}
                  {page.city === 'Fayetteville' && '72701, 72702, 72703, 72704'}
                  {page.city === 'Springdale' && '72762, 72764, 72765, 72766'}
                  {page.city === 'Centerton' && '72719'}
                  {page.city === 'Lowell' && '72745'}
                  {page.city === 'Farmington' && '72730'}
                  {page.city === 'Siloam Springs' && '72761'}
                  {page.city === 'Cave Springs' && '72718'}
                  {page.city === 'Prairie Grove' && '72753'}
                  {page.city === 'Tontitown' && '72770'}
                  {page.city === 'Pea Ridge' && '72751'}
                  {page.city === 'Elkins' && '72727'}
                  {page.city === 'Gravette' && '72736'}
                  {!['Bentonville', 'Bella Vista', 'Rogers', 'Fayetteville', 'Springdale', 'Centerton', 'Lowell', 'Farmington', 'Siloam Springs', 'Cave Springs', 'Prairie Grove', 'Tontitown', 'Pea Ridge', 'Elkins', 'Gravette'].includes(page.city) && `${page.city} Metro & All NWA ZIP Codes`}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">Priority Subdivisions</span>
                <span className="text-xs font-bold text-slate-800 block leading-normal">
                  {page.city === 'Bentonville' && 'Coler MTB, Downtown Square, Slaughter Pen, Sugar Creek'}
                  {page.city === 'Bella Vista' && 'Lake Loch Lomond, Lake Norwood, Metfield, Highlands'}
                  {page.city === 'Rogers' && 'Pinnacle Hills, Shadow Valley, Prairie Creek, Beaver Lake'}
                  {page.city === 'Fayetteville' && 'Mount Sequoyah, Wilson Park, Gulley Park, Kessler Mountain'}
                  {page.city === 'Springdale' && 'Har-Ber Meadows, Lake Springdale, Shiloh Historic District'}
                  {page.city === 'Centerton' && 'Kimmel Road, Gambas, McKissic Springs, West Corridor'}
                  {page.city === 'Lowell' && 'Ward Nail Park, Hickory Creek, Goad Springs'}
                  {page.city === 'Farmington' && 'Valley View, Twin Falls, Creekside, Heights'}
                  {page.city === 'Siloam Springs' && 'Historic Downtown, Sager Creek, JBU Campus Corridor'}
                  {page.city === 'Cave Springs' && 'The Creeks Golf Estates, Healing Springs, Osage Creek'}
                  {page.city === 'Prairie Grove' && 'Battlefield State Park, Mockingbird Hill, South Mountain'}
                  {page.city === 'Tontitown' && 'Henri de Tonti District, Ardemagni, St. Joseph'}
                  {page.city === 'Pea Ridge' && 'National Military Park, Sugar Creek, North Ridge'}
                  {page.city === 'Elkins' && 'White River Valley, Round Mountain, Stokenbury'}
                  {page.city === 'Gravette' && 'Hiwasse, Spavinaw Creek, Western Benton County'}
                  {!['Bentonville', 'Bella Vista', 'Rogers', 'Fayetteville', 'Springdale', 'Centerton', 'Lowell', 'Farmington', 'Siloam Springs', 'Cave Springs', 'Prairie Grove', 'Tontitown', 'Pea Ridge', 'Elkins', 'Gravette'].includes(page.city) && `Residential neighborhoods across ${page.city}`}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">Dominant Tree Profile</span>
                <span className="text-xs font-semibold text-slate-700 block leading-normal">
                  {page.city === 'Bella Vista' && 'Loblolly & Shortleaf Pines (Needle Defense)'}
                  {page.city === 'Bentonville' && 'Post Oak, White Oak Catkins & Sweetgum'}
                  {page.city === 'Rogers' && 'Mature Silver Maples, Oaks & Lake Mildew'}
                  {page.city === 'Fayetteville' && 'Old-Growth Sugar Maples, Oaks & Hickory'}
                  {page.city === 'Springdale' && 'Pin Oak, Elm, River Birch & Dust Sludge'}
                  {!['Bella Vista', 'Bentonville', 'Rogers', 'Fayetteville', 'Springdale'].includes(page.city) && 'Ozark Hardwoods, Pines & Seasonal Catkins'}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* THE GUTTER CLEANING MONEY PIT ROI MATRIX (Conversion Psychology) */}
        <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Financial Analysis & Risk Audit
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-950">
              The Gutter Cleaning Money Pit vs. Permanent 316 Armor
            </h3>
            <p className="text-sm text-slate-600">
              Why renting seasonal franchise cleanings costs 70% more than installing lifetime surgical micro-mesh.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200 bg-slate-50">
                  <th className="py-3.5 px-4 font-bold text-slate-900 w-1/3">Comparison Parameter</th>
                  <th className="py-3.5 px-4 font-bold text-red-700 w-1/3 bg-red-50/50">Recurring Cleanings (Franchises / Handymen)</th>
                  <th className="py-3.5 px-4 font-bold text-emerald-800 w-1/3 bg-emerald-50">Ozark Gutter Guard (Permanent Armor)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-800">5-Year Out-of-Pocket Cost</td>
                  <td className="py-3.5 px-4 text-red-600 font-semibold bg-red-50/30">
                    <span className="font-mono text-base font-bold">$2,500 – $3,200+</span>
                    <span className="block text-xs text-slate-500 font-normal mt-0.5">($250 × 2 visits/yr + seasonal inflation)</span>
                  </td>
                  <td className="py-3.5 px-4 text-emerald-700 font-bold bg-emerald-50/50">
                    <span className="font-mono text-base">$1,250 – $1,450 Flat</span>
                    <span className="block text-xs text-emerald-800 font-normal mt-0.5">(One-time investment or $48/mo at 0% APR)</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-800">Ladder Damage to Roof & Fascia</td>
                  <td className="py-3.5 px-4 text-slate-700 bg-red-50/30">
                    <span className="font-bold text-red-600">10+ Ladder Visits:</span> Dents aluminum gutter lips, crushes delicate shingle drip edges, and scrapes fascia paint.
                  </td>
                  <td className="py-3.5 px-4 text-slate-800 bg-emerald-50/50 font-medium">
                    <span className="font-bold text-emerald-700">0 Future Visits:</span> Installed once. Zero shingle contact, preserving 100% of your roof warranty.
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-800">Systemic Drainage Restoration</td>
                  <td className="py-3.5 px-4 text-slate-700 bg-red-50/30">
                    <span className="font-bold text-red-600">None:</span> They only scoop surface sludge. Sagging gutters, loose spikes, and leaky corners remain broken.
                  </td>
                  <td className="py-3.5 px-4 text-slate-800 bg-emerald-50/50">
                    <span className="font-bold text-emerald-700">Full 5-Stage Restoration:</span> Laser slope realignment, heavy-duty hidden zinc brackets, and polyurethane corner seals.
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-800">Written Warranty & Guarantees</td>
                  <td className="py-3.5 px-4 text-slate-600 bg-red-50/30">
                    Expires the moment the next rainstorm or autumn leaf falls.
                  </td>
                  <td className="py-3.5 px-4 text-emerald-700 font-bold bg-emerald-50/50">
                    10-Year Transferable No-Clog Guarantee. If it ever clogs, we clean it free.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 text-white p-4 rounded-xl text-xs font-semibold">
            <span className="flex items-center gap-2 text-emerald-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Zero Shingle Contact Guarantee: 100% GAF, CertainTeed & Owens Corning Warranty Safe</span>
            </span>
            <span className="text-slate-300">
              Stop renting seasonal cleanings • Lock in lifetime defense
            </span>
          </div>
        </div>

        {/* Transparent Local Pricing Table with Micro-Payment Anchors */}
        <div className="bg-slate-950 text-white p-6 sm:p-8 rounded-2xl shadow-xl space-y-5">
          <div className="flex justify-between items-start flex-wrap gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400 block">Transparent Local Rates</span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {page.city ? `${page.city}, AR Gutter Guard Pricing Guide` : 'Arkansas Gutter Guard Investment Guide'}
              </h3>
            </div>
            <div className="flex flex-col sm:items-end">
              <span className="px-3 py-1 bg-emerald-950 border border-emerald-500/40 text-emerald-400 text-xs font-bold rounded-full">
                Financing: Starting at $48/Month (0% APR)
              </span>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl space-y-2">
              <span className="text-xs text-slate-400 font-semibold block">1-Story Home (120-150 LF)</span>
              <div className="text-2xl font-black text-white">$1,250 – $1,450</div>
              <div className="text-[11px] font-mono text-emerald-400 font-bold">Or $48/mo for 12 mos</div>
              <p className="text-xs text-slate-400 leading-normal pt-1">
                Includes full gutter cleaning, laser slope realignment, and 316 surgical stainless micro-mesh.
              </p>
            </div>
            <div className="bg-slate-900/90 border border-orange-500/50 p-4 rounded-xl space-y-2 relative">
              <span className="absolute -top-2.5 right-3 bg-orange-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-full">Most Common</span>
              <span className="text-xs text-slate-400 font-semibold block">2-Story / Complex (180-220 LF)</span>
              <div className="text-2xl font-black text-orange-400">$1,550 – $1,850</div>
              <div className="text-[11px] font-mono text-emerald-400 font-bold">Or $58/mo for 12 mos</div>
              <p className="text-xs text-slate-400 leading-normal pt-1">
                Includes corner miter sealing, zinc screw reinforcement every 24", and valley splash diverters.
              </p>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl space-y-2">
              <span className="text-xs text-slate-400 font-semibold block">Large Estate (250+ LF)</span>
              <div className="text-2xl font-black text-white">$1,950 – $2,350</div>
              <div className="text-[11px] font-mono text-emerald-400 font-bold">Or $75/mo for 12 mos</div>
              <p className="text-xs text-slate-400 leading-normal pt-1">
                Complete multi-level roofline armor. Save over $4,500 compared to corporate franchise quotes.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <span>📞 Prefer to talk directly with a technician? Call for immediate advice.</span>
            <a 
              href={phoneHref} 
              className="inline-flex items-center gap-2 font-black text-orange-400 hover:text-orange-300 text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>{phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* OZARK HYDROLOGICAL ENGINEERING SPECIFICATION MATRIX */}
      <section className="py-14 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-600/20 border border-orange-500/30 text-orange-400 text-xs font-bold mb-3">
              <Zap className="w-3.5 h-3.5" />
              Ozark Hydrological Specification Matrix
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
              Engineering Performance: How We Compare
            </h2>
            <p className="text-sm text-slate-400">
              National competitors use cheap marketing terms. Here are the hard engineering specifications that separate surgical micro-mesh from everything else on the market.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-3.5 px-4 font-bold text-slate-300 bg-slate-900/80 w-1/4">Engineering Metric</th>
                  <th className="py-3.5 px-4 font-bold text-orange-400 bg-orange-950/40 w-1/4">
                    Ozark Gutter Guard<br/><span className="text-orange-300 font-normal text-[11px]">316 Surgical Mesh</span>
                  </th>
                  <th className="py-3.5 px-4 font-bold text-slate-400 bg-slate-900/60 w-1/4">
                    National Franchise<br/><span className="font-normal text-[11px]">Plastic / Reverse Curve</span>
                  </th>
                  <th className="py-3.5 px-4 font-bold text-slate-500 bg-slate-900/40 w-1/4">
                    Hardware Store DIY<br/><span className="font-normal text-[11px]">Vinyl / Slotted Metal</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-300 bg-slate-900/50">Material Composition</td>
                  <td className="py-3.5 px-4 text-orange-300 font-semibold bg-orange-950/20">
                    316 Marine-Grade Stainless Steel + T6 Anodized Aluminum Frame
                  </td>
                  <td className="py-3.5 px-4 text-slate-400 bg-slate-900/30">PVC Plastic Base + 304 Standard Stainless Mesh</td>
                  <td className="py-3.5 px-4 text-slate-500">Molded Vinyl or Standard Stamped Aluminum</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-300 bg-slate-900/50">Aperture Micron Size</td>
                  <td className="py-3.5 px-4 bg-orange-950/20">
                    <span className="text-orange-400 font-black text-base">50 Microns</span>
                    <span className="block text-[11px] text-orange-300 font-normal mt-0.5">Blocks 100% shingle grit & oak pollen</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-400 bg-slate-900/30">
                    ~150–250 Microns
                    <span className="block text-[11px] text-slate-500 mt-0.5">Allows fine catkins to pass</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">
                    &gt;1,000 Microns / Large Slits
                    <span className="block text-[11px] mt-0.5">Clogs internally</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-300 bg-slate-900/50">Water Throughput Capacity</td>
                  <td className="py-3.5 px-4 bg-orange-950/20">
                    <span className="text-orange-400 font-black text-base">150 in/hr</span>
                    <span className="block text-[11px] text-orange-300 font-normal mt-0.5">Handles any Ozark storm</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-400 bg-slate-900/30">
                    40–60 in/hr
                    <span className="block text-[11px] text-slate-500 mt-0.5">Fails under Ozark downpours</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">
                    Overshoots gutters
                    <span className="block text-[11px] mt-0.5">During heavy rainfall</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-300 bg-slate-900/50">Shingle Warranty Impact</td>
                  <td className="py-3.5 px-4 bg-orange-950/20">
                    <span className="text-emerald-400 font-black">0% Contact</span>
                    <span className="block text-[11px] text-emerald-300 font-normal mt-0.5">Fascia &amp; gutter lip mounted only</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-400 bg-slate-900/30">
                    Brackets slid under shingles
                    <span className="block text-[11px] text-red-400 mt-0.5">Voids GAF/OC warranty</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">
                    Slid under shingles or clipped
                    <span className="block text-[11px] text-red-500 mt-0.5">Breaks adhesive seal</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-300 bg-slate-900/50">
                    <span className="flex items-center gap-1.5"><Snowflake className="w-3.5 h-3.5 text-blue-400" />Ice &amp; Snow Load Resistance</span>
                  </td>
                  <td className="py-3.5 px-4 bg-orange-950/20">
                    <span className="text-orange-400 font-black">45 lbs/linear ft</span>
                    <span className="block text-[11px] text-orange-300 font-normal mt-0.5">Structural rigidity</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-400 bg-slate-900/30">
                    Warps and sags
                    <span className="block text-[11px] text-slate-500 mt-0.5">Under frozen winter sleet</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">
                    Snaps under freezing
                    <span className="block text-[11px] mt-0.5">Expansion cycles</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-xs text-slate-500">
            All throughput figures measured at standard residential gutter pitch (1/4" per linear foot slope). Micron aperture sizes are manufacturer-specified values.
          </p>
        </div>
      </section>

      {/* LOCAL FIELD INSTALLATION LOGS (E-E-A-T Proof Engine) */}
      {installationLogs.length > 0 && (
        <section className="py-14 bg-white border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 space-y-6">
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-3">
                <ClipboardList className="w-3.5 h-3.5" />
                Recent Field Installation Reports
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
                {page.city} Installation Logs &amp; Engineering Reports
              </h2>
              <p className="text-sm text-slate-600 max-w-xl mx-auto">
                Documented field performance data from recent {page.city} residential installations — proving physical operational presence and engineering expertise.
              </p>
            </div>

            <div className="space-y-5">
              {installationLogs.map((log) => (
                <div key={log.id} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider block mb-1">
                        Install Log #{log.id.toUpperCase()}
                      </span>
                      <h3 className="font-black text-slate-900 text-base sm:text-lg">{log.location}</h3>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold">
                      ✓ Verified Install
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4 text-sm">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Roof Profile</span>
                      <p className="text-slate-700 font-medium leading-snug">{log.roofProfile}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 block">Problem Identified</span>
                      <p className="text-slate-700 leading-snug">{log.problem}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block">Execution</span>
                      <p className="text-slate-700 leading-snug">{log.execution}</p>
                    </div>
                  </div>

                  {log.flowRateTested && (
                    <div className="flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-xl px-4 py-2.5 text-sm">
                      <Zap className="w-4 h-4 text-orange-600 shrink-0" />
                      <span className="font-bold text-orange-900">Flow Rate Tested:</span>
                      <span className="text-orange-800 font-mono">{log.flowRateTested}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* VERIFIED LOCAL CASE STUDIES ENGINE */}
      {cityCaseStudies.length > 0 && (
        <section className="py-14 bg-slate-50 border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                Documented Field Case Studies
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
                Real {page.city} Gutter Guard Case Studies &amp; Audits
              </h2>
              <p className="text-sm text-slate-600">
                Detailed field documentation from residential installations across {page.city} neighborhoods — proving material specs, pitch leveling, and permanent tree debris defense.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {cityCaseStudies.map((cs) => (
                <LocalCaseStudyCard key={cs.id} caseStudy={cs} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* VERIFIED JOBSITE & SCHEMATIC PHOTO GALLERY WITH TAGS */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <ProjectGalleryWithTags 
            initialCity={page.city}
            title={`${page.city || 'Northwest Arkansas'} Jobsite Photo Records &amp; Engineering Schematics`}
            subtitle={`Geocoded field photographs, flow testing records, and surgical micro-mesh installation logs across ${page.city || 'NWA'}.`}
          />
        </div>
      </section>

      {/* INTERACTIVE NWA NOAA STORM DAMAGE & DRAINAGE VERIFIER */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          {/* Mobile Emergency Dispatch Action Strip (Anti-Pogo-Sticking) */}
          <div className="bg-orange-600 text-white rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-center sm:text-left">
              <span>Severe Weather Advisory: Active NWA Hail &amp; Flash Storm Drainage Response</span>
            </div>
            <a
              href={phoneHref}
              className="w-full sm:w-auto px-4 py-2 rounded-lg bg-slate-950 hover:bg-slate-900 text-white text-xs font-black flex items-center justify-center gap-1.5 transition shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              <span>Call Dispatch: {phoneDisplay}</span>
            </a>
          </div>

          <StormDamageVerifier 
            initialCity={authVector.resolvedCity} 
            initialZip={authVector.postalCode} 
            stormData={authVector.stormData} 
          />
        </div>
      </section>

      {/* MUNICIPAL BUILDING & DRAINAGE CODE COMPLIANCE */}
      {page.city && (
        <MunicipalPermitSection cityName={page.city} />
      )}

      {/* FREQUENTLY ASKED QUESTIONS ACCORDION (Max SEO Rich Snippets) */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Direct Expert Answers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS_DATA.slice(0, 5).map((faq, idx) => (
              <details key={idx} className="group bg-slate-50 border border-slate-200 rounded-xl p-5 open:bg-white open:shadow-sm transition">
                <summary className="font-bold text-slate-900 cursor-pointer list-none flex justify-between items-center gap-4 text-base">
                  <span>{faq.question}</span>
                  <span className="text-orange-600 font-black text-lg transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED BUYER GUIDES (Internal Linking Juice Flow) */}
      {relatedArticles.length > 0 && (
        <section className="py-12 bg-slate-100 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-lg font-black text-slate-900 mb-6 text-center">
              Explore More Gutter Protection & Cost Guides
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedArticles.map((art) => (
                <Link
                  key={art.slug}
                  href={`/${art.slug}`}
                  className="bg-white p-4 rounded-xl border border-slate-200 hover:border-orange-500 hover:shadow-md transition flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 block mb-1">
                      {art.badge}
                    </span>
                    <h4 className="font-bold text-sm text-slate-900 group-hover:text-orange-600 transition line-clamp-2">
                      {art.h1}
                    </h4>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 mt-3 inline-flex items-center gap-1">
                    Read Guide <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CITY CROSS-LINKING SILO FOOTER */}
      {uniqueLocationCities.length > 0 && (
        <section className="bg-white py-10 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 text-center">
              Licensed Gutter Guard Installation Across Northwest Arkansas:
            </h3>
            <div className="flex flex-wrap justify-center gap-2.5">
              {uniqueLocationCities.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/${loc.slug}`}
                  className="px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 hover:border-brand-green hover:text-brand-green transition shadow-2xs"
                >
                  {loc.city}, AR →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 pt-10 pb-24 sm:pb-10 px-4 text-center text-xs border-t border-slate-800">
        <div className="max-w-4xl mx-auto space-y-3">
          <p className="font-bold text-slate-200 text-sm">Ozark Gutter Guard Co. — Northwest Arkansas Direct Gutter Armor</p>
          <p>© {new Date().getFullYear()} Ozark Gutter Guard Co. All Rights Reserved. Fully Licensed &amp; Insured.</p>
          <p className="text-slate-500">
            Serving Bentonville (72712, 72713, 72716), Bella Vista (72714, 72715), Rogers (72756, 72757, 72758), Fayetteville (72701, 72702, 72703, 72704), and Springdale (72762, 72764, 72765, 72766), Arkansas.
          </p>
        </div>
      </footer>

      {/* MOBILE STICKY BOTTOM BAR */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 pt-2.5 shadow-2xl safe-area-pb flex gap-2">
        <a
          href={phoneHref}
          className="flex-1 min-h-[48px] py-3 px-3 rounded-lg bg-slate-950 text-white text-center font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition"
        >
          <Phone className="w-3.5 h-3.5 text-orange-400" />
          <span>CALL {phoneDisplay}</span>
        </a>
        <a
          href="#estimate-form"
          className="flex-1 min-h-[48px] py-3 px-3 rounded-lg bg-orange-600 text-white text-center font-black text-xs flex items-center justify-center shadow-md active:scale-95 transition"
        >
          90-SEC QUOTE
        </a>
      </div>
    </div>
  );
}

