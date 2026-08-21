import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, BookOpen, ShieldCheck, MapPin, Phone } from 'lucide-react';
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
  foundation: 'bg-red-50 text-red-700 border-red-200',
  trees: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  weather: 'bg-blue-50 text-blue-700 border-blue-200',
  'diy-warning': 'bg-amber-50 text-amber-700 border-amber-200',
  homeowner: 'bg-slate-100 text-slate-700 border-slate-200',
};

export default function GuidesIndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-1">
        <section className="bg-slate-950 text-white py-14 border-b border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="flex items-center gap-2 text-orange-400 text-xs font-black uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Northwest Arkansas Field Guides</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Honest Advice on Gutters, Trees & Ozark Weather
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl">
              Practical advice from local installers in Bentonville, Rogers, Bella Vista, Fayetteville, and Springdale. Clear comparisons, real costs, and zero high-pressure sales talk.
            </p>

            <div className="flex items-center gap-4 pt-2 text-xs text-slate-400 flex-wrap">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Written by Local Installers</span>
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span>Benton & Washington County, AR</span>
              </span>
              <a href="tel:+14799292516" className="flex items-center gap-1 text-orange-400 hover:underline font-bold">
                <Phone className="w-3.5 h-3.5" />
                <span>(479) 929-2516</span>
              </a>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {GUIDES_DATA.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-orange-500 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="text-4xl">{guide.heroEmoji}</div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${categoryColors[guide.category]}`}>
                        {categoryLabels[guide.category]}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                        <Clock className="w-3 h-3" />
                        {guide.readTime}
                      </span>
                    </div>
                    <h2 className="font-black text-slate-900 text-base leading-snug group-hover:text-orange-600 transition-colors">
                      {guide.title}
                    </h2>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {guide.intro}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-xs font-bold text-orange-600">
                    <span>Read guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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
