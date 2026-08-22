import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, BookOpen, MapPin, Phone, ShieldCheck } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GUIDES_DATA } from '@/data/guides/_index';

export const metadata: Metadata = {
  title: 'Northwest Arkansas Homeowner Guides & Field Research | Ozark Gutter Guard',
  description: 'Field-tested gutter, leaf protection, and foundation drainage guides for Bentonville, Rogers, Fayetteville, Springdale, and Bella Vista homeowners.',
  alternates: { canonical: 'https://ozarkgutterguard.com/guides' },
};

const categoryLabels: Record<string, string> = {
  foundation: 'Foundation & Soil',
  trees: 'Tree Species & Foliage',
  weather: 'Ozark Storms & Hydrology',
  'diy-warning': 'DIY Safety & Flaws',
  homeowner: 'Cost & Buyer Guides',
};

export default function GuidesIndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <TopBar />
      <Header />

      <main className="flex-1">
        {/* Clean Hero Header */}
        <section className="bg-white border-b border-slate-200 py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-blue-600" />
              <span>NWA Field Research &amp; Technical Library</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
              Homeowner Guides: Gutters, Trees &amp; Storm Defense
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-3xl font-normal leading-relaxed">
              In-depth engineering analyses from local installers across Bentonville, Rogers, Bella Vista, Fayetteville, and Springdale. Honest comparisons, real linear-foot pricing, and zero sales hype.
            </p>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {GUIDES_DATA.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 flex-wrap text-xs">
                      <span className="font-bold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-800 border border-slate-200 text-[11px]">
                        {categoryLabels[guide.category] || 'Buyer Guide'}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {guide.readTime}
                      </span>
                    </div>

                    <h2 className="font-bold text-slate-950 text-base leading-snug group-hover:text-blue-600 transition-colors">
                      {guide.title}
                    </h2>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 font-normal">
                      {guide.intro}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    <span>Read Technical Guide</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
