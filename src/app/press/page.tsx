import { Metadata } from 'next';
import Link from 'next/link';
import { Newspaper, Calendar, MapPin, ArrowRight, ShieldCheck, Mail, Phone, Building2 } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import SchemaJsonLd from '@/components/SchemaJsonLd';
import { PRESS_RELEASES_DATA } from '@/data/pressReleases';

export const metadata: Metadata = {
  title: 'Press Room & Newsroom | Ozark Gutter Guard Co. NWA',
  description: 'Official press releases, severe storm initiatives, satellite sizing announcements, and media newsroom for Ozark Gutter Guard Co. in Northwest Arkansas.',
  alternates: { canonical: 'https://ozarkgutterguard.com/press' },
  openGraph: {
    title: 'Press Room & Newsroom | Ozark Gutter Guard Co.',
    description: 'Official press releases and digital PR announcements from Ozark Gutter Guard Co. covering storm preparedness, engineering research, and local NWA news.',
    url: 'https://ozarkgutterguard.com/press',
    type: 'website',
  },
};

export default function PressRoomPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <SchemaJsonLd type="business" />

      <TopBar />
      <Header />

      <main className="flex-1">
        {/* Newsroom Hero */}
        <section className="bg-white border-b border-slate-200 py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
              <Newspaper className="w-3.5 h-3.5 text-blue-600" />
              <span>Official Press &amp; Media Room</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Ozark Gutter Guard Newsroom &amp; Press Releases
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal">
              Official press announcements, meteorological research reports, technology launches, and severe storm defense initiatives across Benton and Washington Counties.
            </p>
          </div>
        </section>

        {/* Media Contact Card & Fast Facts */}
        <section className="py-8 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2 space-y-2">
                <span className="text-xs font-black uppercase tracking-wider text-orange-600 block">Media Kit &amp; Inquiries</span>
                <h2 className="text-xl font-black text-slate-950">Journalist &amp; Broadcaster Resources</h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our field engineering directors and meteorological drainage analysts are available for interviews regarding Northwest Arkansas seasonal storm preparedness, spring oak catkin hazards, foundation clay soil displacement, and residential drainage code compliance.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2 text-xs">
                <span className="font-bold text-slate-900 block uppercase tracking-wider text-[11px]">Media Desk Contact</span>
                <div className="flex items-center gap-2 text-slate-700">
                  <Mail className="w-3.5 h-3.5 text-orange-600" />
                  <span>dispatch@ozarkgutterguard.com</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Phone className="w-3.5 h-3.5 text-orange-600" />
                  <span>(479) 929-2516</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Building2 className="w-3.5 h-3.5 text-orange-600" />
                  <span>1102 S Walton Blvd, Bentonville, AR</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Press Releases Feed */}
        <section className="py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-black text-slate-950">Recent Press Announcements</h2>
              <span className="text-xs font-mono font-bold text-slate-500">{PRESS_RELEASES_DATA.length} Releases</span>
            </div>

            <div className="space-y-6">
              {PRESS_RELEASES_DATA.map((pr) => (
                <article
                  key={pr.id}
                  className="bg-white border-2 border-slate-200 hover:border-orange-500 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 font-bold text-[10px] uppercase">
                        {pr.category}
                      </span>
                      <span className="text-slate-400 font-mono font-bold">{pr.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{pr.publishDate}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-black text-slate-950 hover:text-orange-600 transition">
                      <Link href={`/press/${pr.slug}`}>
                        {pr.title}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {pr.summary}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-2 pt-2 text-xs text-slate-700">
                    {pr.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span className="leading-tight font-medium">{takeaway}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/press/${pr.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 transition"
                    >
                      <span>Read Full Syndication Release</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-[11px] font-mono text-slate-400">Release #{pr.id.toUpperCase()}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
