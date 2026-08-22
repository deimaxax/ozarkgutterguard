import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Award, MapPin, CheckCircle2, Phone, ArrowRight, Wrench, HardHat, FileCheck } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import SchemaJsonLd from '@/components/SchemaJsonLd';

export const metadata: Metadata = {
  title: 'About Ozark Gutter Guard Co. | Northwest Arkansas Local Specialists',
  description: 'Learn about Ozark Gutter Guard Co. — licensed Arkansas contractor (#039182) specializing in surgical micro-mesh gutter protection, foundation defense, and seamless drainage systems.',
  alternates: { canonical: 'https://ozarkgutterguard.com/about' },
  openGraph: {
    title: 'About Ozark Gutter Guard Co. | NWA Gutter & Drainage Experts',
    description: 'Local, licensed Arkansas contractor (#039182) protecting homes from foundation cracking, oak tassels, and pine needles across Benton & Washington counties.',
    url: 'https://ozarkgutterguard.com/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <SchemaJsonLd type="business" title="About Ozark Gutter Guard Co." description="Local Northwest Arkansas licensed contractor (#039182) dedicated to permanent micro-mesh gutter protection." />

      <TopBar />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#0F1E36] text-white py-14 sm:py-20 border-b border-[#183059]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>AR Contractor Lic. #039182 • Fully Insured</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto">
              Built Specifically for the Harsh Ozark Mountain Climate
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
              We founded Ozark Gutter Guard Co. to solve one specific regional problem: fragile plastic and foam filters failing under Northwest Arkansas pine needles, oak tassels, and heavy torrential downpours.
            </p>
          </div>
        </section>

        {/* Company Pillars / Trust Highlights */}
        <section className="py-12 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                  <HardHat className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-slate-900">Local Craftsmanship</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We are 100% locally owned and operated in Bentonville, AR. No fly-by-night crews or out-of-state subcontractors. Every install is inspected by a lead drainage specialist.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-slate-900">Marine-Grade 316 Stainless</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We refuse to install vinyl, foam, or standard aluminum mesh. Our 316 surgical stainless steel mesh filters down to 50 microns while handling up to 150 inches of rainfall per hour.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-slate-900">No-Gimmick Satellite Pricing</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We eliminated the 3-hour high-pressure in-home sales pitch. Using high-resolution LiDAR and satellite data, we deliver exact quotes in 15 minutes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive & Mission */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
                Our Mission: Foundation Defense First
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                In Northwest Arkansas, heavy precipitation meets dense vertisol clay soil. When gutters clog with spring oak tassels or autumn Loblolly pine needles, overflow pours directly against the foundation footing, resulting in hydrostatic pressure, basement moisture, and costly foundation settlement.
              </p>
              <p className="text-slate-700 text-base leading-relaxed">
                Our approach is engineered rather than cosmetic: we calculate hydraulic roof throughput, inspect fascia board integrity, pitch gutters for optimal velocity, and seal the entire envelope with permanent 316 surgical micro-mesh.
              </p>
            </div>

            {/* Licensure and Specs */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-lg font-black text-slate-900">Official Licensing &amp; Coverage</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Arkansas State Licensure:</strong>
                    <p className="text-slate-600">AR Contractor Lic. #039182</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Liability Coverage:</strong>
                    <p className="text-slate-600">$2,000,000 General Liability Policy</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Primary Hub:</strong>
                    <p className="text-slate-600">Bentonville, AR 72712</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Service Territory:</strong>
                    <p className="text-slate-600">Benton &amp; Washington Counties</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-[#0F1E36] text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Protect Your Home With True Local Specialists
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Get an instant satellite quote online or speak directly with our Bentonville dispatch team.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                href="/satellite-quote"
                className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-black text-sm"
              >
                <span>Get Free Satellite Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+14799292516"
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-bold text-sm border border-slate-700"
              >
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
