import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, Mail, Phone } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import SchemaJsonLd from '@/components/SchemaJsonLd';

export const metadata: Metadata = {
  title: 'Privacy Policy | Ozark Gutter Guard Co.',
  description: 'Privacy Policy for Ozark Gutter Guard Co. Learn how we collect, protect, and handle homeowner contact and satellite estimating information.',
  alternates: { canonical: 'https://ozarkgutterguard.com/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy | Ozark Gutter Guard Co.',
    description: 'Learn how Ozark Gutter Guard Co. protects homeowner information.',
    url: 'https://ozarkgutterguard.com/privacy-policy',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <SchemaJsonLd type="business" title="Privacy Policy - Ozark Gutter Guard Co." description="Privacy Policy for Ozark Gutter Guard Co. operations in Arkansas." />

      <TopBar />
      <Header />

      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="border-b border-slate-200 pb-6 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              <Lock className="w-3.5 h-3.5" />
              <span>Official Privacy Policy</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-sm text-slate-500">
              Last Updated: August 2026 • Ozark Gutter Guard Co.
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-6 text-sm text-slate-700 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-black text-slate-900">1. Information We Collect</h2>
              <p>
                Ozark Gutter Guard Co. ("we," "our," or "us") collects homeowner contact information when you request an estimate, satellite quote, gutter cleaning appointment, or inspection through our website. This includes:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Your name, email address, telephone number, and physical property address in Northwest Arkansas.</li>
                <li>Roofline, gutter condition details, and satellite imagery measurement data required for estimate calculations.</li>
                <li>Communication records including email messages, SMS notifications, and estimate inquiries.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-black text-slate-900">2. How We Use Your Information</h2>
              <p>
                We use collected information solely for genuine contracting and service operations:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Calculating and delivering accurate satellite linear footage estimates.</li>
                <li>Scheduling on-site evaluations, gutter cleaning, or micro-mesh installations.</li>
                <li>Sending installation confirmations, warranty documentation, and customer support updates.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-black text-slate-900">3. No Sale of Personal Data</h2>
              <p>
                <strong>We never sell, rent, trade, or lease your personal information or phone number to third-party marketing firms, lead aggregators, or brokers.</strong> Your data is used exclusively by Ozark Gutter Guard Co. staff and our verified installation technicians.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-black text-slate-900">4. SMS &amp; Communications Policy</h2>
              <p>
                If you provide a phone number for an estimate or appointment dispatch, we may send transactional SMS notifications regarding your quote status or technician arrival window. You may opt out of SMS messages at any time by replying "STOP".
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-black text-slate-900">5. Data Security</h2>
              <p>
                We implement industry-standard SSL/TLS encryption across our entire digital infrastructure to ensure all personal information transmitted via forms is securely protected against unauthorized access.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-black text-slate-900">6. Contact Us Regarding Your Privacy</h2>
              <p>
                If you have questions about this Privacy Policy or wish to request data removal, please contact our dispatch office:
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs">
                <p><strong>Ozark Gutter Guard Co.</strong></p>
                <p>Bentonville, AR 72712</p>
                <p>Email: <a href="mailto:info@ozarkgutterguard.com" className="text-[#D92626] hover:underline">info@ozarkgutterguard.com</a></p>
                <p>Phone: <a href="tel:+14799292516" className="text-orange-600 hover:underline">(479) 929-2516</a></p>
              </div>
            </section>
          </div>

        </div>
      </main>

      <Footer />
      <StickyMobileBar />
    </div>
  );
}
