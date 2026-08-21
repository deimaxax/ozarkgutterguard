import Link from 'next/link';
import { Home, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  const phoneHref = "tel:+14799292516";
  const phoneDisplay = "(479) 929-2516";

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <TopBar />
      <Header />

      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-lg">
          <div className="w-16 h-16 bg-emerald-50 text-brand-green rounded-full flex items-center justify-center mx-auto">
            <ShieldCheck className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl font-black text-brand-navy">404</h1>
            <h2 className="text-xl font-bold text-slate-800">Page Not Found</h2>
            <p className="text-sm text-slate-600">
              The page you requested could not be found, or has been moved to our Northwest Arkansas service directory.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <Link
              href="/"
              className="w-full btn-contractor-green py-3 text-sm font-bold flex items-center justify-center gap-2 shadow-xs"
            >
              <Home className="w-4 h-4" />
              <span>Back to Homepage</span>
            </Link>

            <Link
              href="/gutter-cleaning"
              className="w-full btn-contractor-navy py-2.5 text-sm font-bold flex items-center justify-center gap-2 border border-slate-700"
            >
              <span>$149 Diagnostic Cleanout</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={phoneHref}
              className="block text-xs font-bold text-slate-600 hover:text-brand-green pt-1"
            >
              Call Dispatch Direct: {phoneDisplay}
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
