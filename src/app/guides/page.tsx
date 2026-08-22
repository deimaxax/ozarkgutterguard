import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, BookOpen, MapPin, Phone } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GUIDES_DATA } from '@/data/guides/_index';

export const metadata: Metadata = {
  title: 'NWA Homeowner Guides | Foundation, Gutters & Ozark Weather | Ozark Gutter Guard',
  description: 'Field-tested gutter, leaf protection, and foundation drainage guides for Bentonville, Rogers, Fayetteville, Springdale, and Bella Vista homeowners.',
  alternates: { canonical: 'https://ozarkgutterguard.com/guides' },
};

const categoryLabels: Record<string, string> = {
  foundation: 'Foundation & Soil Damage',
  trees: 'Tree Foliage & Pine Needles',
  weather: 'Ozark Storms & Weather',
  'diy-warning': 'DIY Safety & Comparisons',
  homeowner: 'Cost & Buyer Guides',
};

const categoryColors: Record<string, string> = {
  foundation: 'bg-slate-100 text-slate-900 border-slate-300',
  trees: 'bg-amber-50 text-amber-900 border-amber-300',
  weather: 'bg-slate-100 text-slate-900 border-slate-300',
  'diy-warning': 'bg-amber-50 text-amber-900 border-amber-300',
  homeowner: 'bg-slate-100 text-slate-900 border-slate-300',
};

export default function GuidesIndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-1">
        <section className="bg-slate-950 text-white py-12 sm:py-16 border-b-2 border-slate-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Northwest Arkansas Technical Field Guides</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight uppercase font-heading">
              Field Knowledge: Gutters, Trees &amp; Ozark Storms
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
              Practical contractor advice from local installers across Bentonville, Rogers, Bella Vista, Fayetteville, and Springdale. Clear comparisons, real costs, and zero franchise sales tactics.
            </p>

            <div className="flex items-center gap-4 pt-2 text-xs font-mono text-slate-400 flex-wrap">
              <span className="flex items-center gap-1.5 text-white">
                <span className="text-amber-400 font-bold">●</span>
                <span>Written by Local In-House Crew</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Benton &amp; Washington County, AR</span>
              </span>
              <a href="tel:+14799292516" className="flex items-center gap-1.5 text-amber-400 hover:underline font-bold">
                <Phone className="w-3.5 h-3.5" />
                <span>(479) 929-2516</span>
              </a>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-slate-50 border-b-2 border-slate-300">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {GUIDES_DATA.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="group bg-white border-2 border-slate-300 p-6 hover:border-slate-900 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 flex-wrap font-mono">
                      <span className={`text-[10px] font-bold uppercase px-2 py-0.5 border ${categoryColors[guide.category]}`}>
                        {categoryLabels[guide.category]}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-slate-500 font-bold">
                        <Clock className="w-3 h-3" />
                        {guide.readTime}
                      </span>
                    </div>
                    <h2 className="font-black text-slate-950 text-base leading-snug font-heading uppercase group-hover:text-amber-600 transition-colors">
                      {guide.title}
                    </h2>
                    <p className="text-xs text-slate-700 leading-relaxed line-clamp-3 font-normal">
                      {guide.intro}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-1 text-xs font-mono font-bold text-amber-700 uppercase">
                    <span>Read guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
