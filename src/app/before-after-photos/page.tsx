import { Metadata } from 'next';
import Link from 'next/link';
import { ClipboardList, MapPin, ArrowRight, Phone, Zap, Camera, ShieldCheck } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import ProjectGalleryWithTags from '@/components/ProjectPhotoGallery';
import { INSTALLATION_LOGS } from '@/data/installationLogs';
import { TAGGED_PROJECT_PHOTOS } from '@/data/taggedProjectPhotos';

export const metadata: Metadata = {
  title: 'Before & After Gutter Guard Photos | NWA Real Job Documentation',
  description: 'Real before and after gutter guard installation photos from Bentonville, Rogers, Bella Vista, Fayetteville & Springdale AR. Verified field reports with flow rate data.',
  alternates: { canonical: 'https://ozarkgutterguard.com/before-after-photos' },
  openGraph: {
    title: 'Before & After Gutter Guard Installation Photos | Ozark Gutter Guard NWA',
    description: 'Real field documentation from 20+ Northwest Arkansas installations. Installation logs, flow rate testing data, and problem diagnosis photos.',
    url: 'https://ozarkgutterguard.com/before-after-photos',
    type: 'website',
  },
};

// Aggregate all logs into flat array with city label
const allLogs = Object.entries(INSTALLATION_LOGS).flatMap(([city, logs]) =>
  logs.map((log) => ({ ...log, cityKey: city }))
);

const cityDisplayName: Record<string, string> = {
  bentonville: 'Bentonville',
  'bella-vista': 'Bella Vista',
  rogers: 'Rogers',
  fayetteville: 'Fayetteville',
  springdale: 'Springdale',
  centerton: 'Centerton',
  lowell: 'Lowell',
  farmington: 'Farmington',
  'siloam-springs': 'Siloam Springs',
  'cave-springs': 'Cave Springs',
  'prairie-grove': 'Prairie Grove',
  tontitown: 'Tontitown',
  'pea-ridge': 'Pea Ridge',
  elkins: 'Elkins',
  gravette: 'Gravette',
};

export default function BeforeAfterPhotosPage() {
  const imageGallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Ozark Gutter Guard Co. Northwest Arkansas Jobsite Photo Gallery',
    description: 'Verified field installation photographs, technical schematics, and before-and-after documentation across Benton & Washington Counties.',
    url: 'https://ozarkgutterguard.com/before-after-photos',
    image: TAGGED_PROJECT_PHOTOS.map(p => ({
      '@type': 'ImageObject',
      name: p.title,
      caption: p.caption,
      contentUrl: `https://ozarkgutterguard.com${p.src}`,
      datePublished: '2026',
      contentLocation: {
        '@type': 'Place',
        name: `${p.neighborhood}, ${p.city}, AR`,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: p.geo.latitude,
          longitude: p.geo.longitude,
        }
      }
    }))
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }}
      />

      <TopBar />
      <Header />

      <main className="flex-1">
        <section className="bg-white border-b border-slate-200 py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5 text-blue-600" />
              <span>Verified Field Proof &amp; Workmanship Logs</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
              Real NWA Installation Photos &amp; Field Reports
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal">
              Every job completed across Benton &amp; Washington counties is documented with problem diagnostics, flow rate testing, and high-resolution photo proof.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-2 text-xs font-semibold text-slate-700">
              <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200">{TAGGED_PROJECT_PHOTOS.length} Geocoded Project Photos</span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200">{allLogs.length} Documented Jobs</span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200">150 in/hr Flow Tested</span>
            </div>
          </div>
        </section>

        {/* Interactive Tagged Photo Gallery with Lightbox & Category Filters */}
        <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectGalleryWithTags />
          </div>
        </section>

        {/* Photo gallery note */}
        <section className="py-8 bg-amber-50 border-b border-amber-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-amber-900 font-medium">
              <strong>Note for homeowners:</strong> Ask your technician to share your job's photo report via SMS after installation. Every Ozark Gutter Guard installation includes a 60-second video walkthrough documenting before/after flow, slope readings, and fascia condition sent directly to your phone.
            </p>
          </div>
        </section>

        {/* Installation log cards — every city */}
        {Object.entries(INSTALLATION_LOGS).map(([cityKey, logs]) => (
          <section key={cityKey} className="py-10 border-b border-slate-200">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-5 h-5 text-orange-600" />
                <h2 className="text-xl font-black text-slate-900">
                  {cityDisplayName[cityKey] ?? cityKey} Installation Reports
                </h2>
              </div>
              <div className="space-y-5">
                {logs.map((log) => (
                  <article key={log.id} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider block mb-1">
                          Field Report #{log.id.toUpperCase()}
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
                        <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 block">Problem Diagnosed</span>
                        <p className="text-slate-700 leading-snug">{log.problem}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block">Solution Executed</span>
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
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="py-12 bg-slate-900 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <ClipboardList className="w-10 h-10 text-orange-400 mx-auto" />
            <h2 className="text-2xl font-black">Your Home Gets the Same Documented Treatment</h2>
            <p className="text-sm text-slate-300">Satellite sizing in 15 minutes. Installation photos sent to your phone. Written 10-Year Guarantee.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link href="/satellite-quote" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-black text-sm">
                <span>Get Free Satellite Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+14799292516" className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-bold text-sm border border-slate-700">
                <Phone className="w-4 h-4 text-orange-400" />
                <span>(479) 929-2516</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
