import { Metadata } from 'next';
import Link from 'next/link';
import { Star, MapPin, ShieldCheck, Phone, ArrowRight } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import SchemaJsonLd from '@/components/SchemaJsonLd';
import { REVIEWS_DATA } from '@/data/reviews';

export const metadata: Metadata = {
  title: 'Customer Reviews | Ozark Gutter Guard Co. NWA — 5.0 Stars',
  description: 'Read verified customer reviews for Ozark Gutter Guard Co. in Bentonville, Rogers, Bella Vista, Fayetteville & Springdale AR. 180+ verified 5-star Google reviews.',
  alternates: { canonical: 'https://ozarkgutterguard.com/reviews' },
  openGraph: {
    title: 'Customer Reviews | Ozark Gutter Guard Co. — 5.0 Stars NWA',
    description: '180+ verified 5-star reviews from Northwest Arkansas homeowners. Read real results from Bentonville, Bella Vista, Rogers, Fayetteville & Springdale.',
    url: 'https://ozarkgutterguard.com/reviews',
    type: 'website',
  },
};

const cityStats = [
  { city: 'Bentonville', reviews: 54, avgSavings: '$3,800', landmark: 'Coler MTB & Downtown Square' },
  { city: 'Bella Vista', reviews: 41, avgSavings: '$1,200/yr', landmark: 'Lake Loch Lomond & Highlands' },
  { city: 'Rogers', reviews: 38, avgSavings: '$4,900', landmark: 'Pinnacle Hills & Shadow Valley' },
  { city: 'Fayetteville', reviews: 32, avgSavings: '$3,200', landmark: 'Mount Sequoyah & Wilson Park' },
  { city: 'Springdale', reviews: 17, avgSavings: '$2,700', landmark: 'Har-Ber Meadows & Shiloh District' },
];

export default function ReviewsPage() {
  const totalReviews = cityStats.reduce((s, c) => s + c.reviews, 0);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      {/* AggregateRating schema for rich snippet star display in SERPs */}
      <SchemaJsonLd type="business" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Ozark Gutter Guard Co.',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5.0',
              bestRating: '5',
              worstRating: '1',
              reviewCount: String(totalReviews),
            },
            review: REVIEWS_DATA.map((r) => ({
              '@type': 'Review',
              author: { '@type': 'Person', name: r.name },
              reviewRating: { '@type': 'Rating', ratingValue: String(r.rating) },
              reviewBody: r.text,
              datePublished: '2026',
              locationCreated: { '@type': 'Place', name: r.location },
            })),
          }),
        }}
      />

      <TopBar />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-slate-950 text-white py-14 border-b border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-7 h-7 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              {totalReviews}+ Verified 5-Star Reviews
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
              Real Northwest Arkansas homeowners. Real neighborhoods. Real savings documented.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3 text-xs font-bold">
              {cityStats.map((c) => (
                <span key={c.city} className="px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-200">
                  {c.city} — {c.reviews} reviews
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* City review stat cards */}
        <section className="py-12 bg-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 text-center">
              Review Breakdown by NWA City
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {cityStats.map((c) => (
                <div key={c.city} className="bg-white border border-slate-200 rounded-xl p-4 space-y-2 text-center shadow-xs">
                  <div className="font-black text-slate-900 text-base">{c.city}</div>
                  <div className="flex justify-center gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                  </div>
                  <div className="text-2xl font-black text-orange-600">{c.reviews}</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">verified reviews</div>
                  <div className="text-xs font-bold text-emerald-700">Avg savings: {c.avgSavings}</div>
                  <div className="text-[11px] text-slate-500 leading-tight">{c.landmark}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All reviews */}
        <section className="py-14 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-2xl font-black text-slate-900">All Verified Customer Reviews</h2>
            <div className="space-y-5">
              {REVIEWS_DATA.map((rev) => (
                <article key={rev.id} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="space-y-0.5">
                      <div className="font-black text-slate-900 text-base">{rev.name}</div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <MapPin className="w-3 h-3" />
                        <span>{rev.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex gap-0.5">
                        {[...Array(rev.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                      </div>
                      {rev.verified && (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          ✓ Verified
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed italic">"{rev.text}"</p>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-xs">
                    <span className="text-slate-400">{rev.date}</span>
                    {rev.savings && (
                      <span className="font-bold text-emerald-700">{rev.savings}</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Review velocity CTA */}
        <section className="py-12 bg-amber-50 border-b border-amber-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h2 className="text-2xl font-black text-slate-900">
              Recently Had Work Done?
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              Leave a Google review mentioning your city and service — <strong>gutter cleaning</strong>, <strong>gutter guards</strong>, or <strong>fascia repair</strong>. 
              It takes 60 seconds and helps your neighbors find us.
            </p>
            <a
              href="https://g.page/r/ozarkgutterguard/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-bold text-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span>Leave a Google Review</span>
            </a>
            <p className="text-xs text-slate-400">Tip: mention your city + service performed for maximum impact</p>
          </div>
        </section>

        {/* CTA to quote */}
        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <ShieldCheck className="w-10 h-10 text-emerald-600 mx-auto" />
            <h2 className="text-2xl font-black text-slate-900">Ready to Join 180+ Satisfied NWA Homeowners?</h2>
            <p className="text-sm text-slate-600">Get your satellite quote in 15 minutes. No salesman. No pressure.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link href="/satellite-quote" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-black text-sm">
                <span>Get Free Satellite Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+14799292516" className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 px-6 py-3 rounded-xl font-bold text-sm border border-slate-200">
                <Phone className="w-4 h-4 text-orange-600" />
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
