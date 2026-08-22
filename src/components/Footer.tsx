import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Mail, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const phoneHref = "tel:+14799292516";
  const phoneDisplay = "(479) 929-2516";

  return (
    <footer className="bg-[#0F1E36] text-slate-300 pt-12 pb-24 lg:pb-12 border-t border-[#183059] text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-[#183059]">
          
          {/* Col 1: Brand & Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg p-1.5 flex items-center justify-center shrink-0">
                <Image
                  src="/logo.png"
                  alt="Ozark Gutter Guard Co."
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-sm font-black text-white tracking-tight uppercase block">
                  OZARK <span className="text-red-400">GUTTER GUARD CO.</span>
                </span>
                <span className="text-[11px] text-slate-400">Northwest Arkansas Local Gutter Specialists</span>
              </div>
            </div>

            <div className="space-y-1.5 text-slate-300 text-xs pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>1102 S Walton Blvd, Bentonville, AR 72712</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Call Us: <a href={phoneHref} className="text-white hover:text-red-400 font-bold">{phoneDisplay}</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>dispatch@ozarkgutterguard.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-[11px] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>AR Lic. #039182 • Fully Insured</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <Link href="/micro-mesh-vs-screen-guards" className="hover:text-white transition">
                  Gutter Guards
                </Link>
              </li>
              <li>
                <Link href="/gutter-cleaning" className="hover:text-white transition">
                  $149 Cleanout
                </Link>
              </li>
              <li>
                <Link href="/seamless-gutter-installation-nwa" className="hover:text-white transition">
                  Seamless Gutters
                </Link>
              </li>
              <li>
                <Link href="/satellite-quote" className="hover:text-white transition">
                  Satellite Estimate
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Service Areas
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <Link href="/gutter-guards-bentonville-ar" className="hover:text-white transition">
                  Bentonville, AR
                </Link>
              </li>
              <li>
                <Link href="/gutter-guards-rogers-ar" className="hover:text-white transition">
                  Rogers, AR
                </Link>
              </li>
              <li>
                <Link href="/gutter-guards-bella-vista-ar" className="hover:text-white transition">
                  Bella Vista, AR
                </Link>
              </li>
              <li>
                <Link href="/gutter-guards-fayetteville-ar" className="hover:text-white transition">
                  Fayetteville, AR
                </Link>
              </li>
              <li>
                <Link href="/gutter-guards-springdale-ar" className="hover:text-white transition">
                  Springdale, AR
                </Link>
              </li>
              <li className="pt-0.5">
                <Link href="/site-directory" className="text-amber-400 hover:text-amber-300 font-semibold">
                  All Locations Directory &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Info (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <Link href="/reviews" className="hover:text-white transition">
                  5.0 Reviews (180+)
                </Link>
              </li>
              <li>
                <Link href="/before-after-photos" className="hover:text-white transition">
                  Before &amp; Afters
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-white transition">
                  Homeowner Guides
                </Link>
              </li>
              <li>
                <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-400">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Clean Copyright Line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} Ozark Gutter Guard Co. All Rights Reserved.</p>
          <p className="text-slate-600">Benton &amp; Washington Counties, Arkansas</p>
        </div>

      </div>
    </footer>
  );
}
