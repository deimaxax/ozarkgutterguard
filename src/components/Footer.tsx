import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Mail, ShieldCheck, Star } from 'lucide-react';

export default function Footer() {
  const phoneHref = "tel:+14799292516";
  const phoneDisplay = "(479) 929-2516";
  const facebookUrl = "https://facebook.com/OzarkGutterGuard";

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-24 lg:pb-14 border-t border-slate-900 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Col 1: Verified Brand & Physical NAP (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg p-1.5 flex items-center justify-center shrink-0 shadow-xs">
                <Image
                  src="/logo.png"
                  alt="Ozark Gutter Guard Co."
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-base font-black text-white tracking-tight uppercase block">
                  OZARK <span className="text-amber-400">GUTTER GUARD CO.</span>
                </span>
                <span className="text-[11px] text-slate-400">Northwest Arkansas Direct Gutter Armor</span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs max-w-sm font-normal">
              Direct-to-consumer 316 surgical stainless steel micro-mesh gutter protection. Installed exclusively by certified in-house craftsmen across Benton &amp; Washington counties. Zero high-pressure salespeople.
            </p>

            <div className="space-y-2 text-slate-300 text-xs pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>1102 S Walton Blvd, Bentonville, AR 72712</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Direct Dispatch: <a href={phoneHref} className="text-white hover:text-amber-400 font-bold">{phoneDisplay}</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>dispatch@ozarkgutterguard.com</span>
              </div>
              <div className="flex items-center gap-2 text-amber-400 font-semibold pt-1">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>AR Lic. #039182 • $2,000,000 General Liability</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/micro-mesh-vs-screen-guards" className="hover:text-white transition">
                  316 Surgical Micro-Mesh
                </Link>
              </li>
              <li>
                <Link href="/gutter-cleaning" className="hover:text-white transition">
                  $149 Cleanout &amp; Inspection
                </Link>
              </li>
              <li>
                <Link href="/seamless-gutter-installation-nwa" className="hover:text-white transition">
                  Seamless Gutters
                </Link>
              </li>
              <li>
                <Link href="/pine-needle-gutter-protection" className="hover:text-white transition">
                  Pine Needle Defense
                </Link>
              </li>
              <li>
                <Link href="/oak-tassel-gutter-protection" className="hover:text-white transition">
                  Oak Catkin Protection
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Primary Service Hubs
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/gutter-guards-bentonville-ar" className="hover:text-white transition flex justify-between">
                  <span>Bentonville, AR</span>
                  <span className="text-slate-600">72712, 72713</span>
                </Link>
              </li>
              <li>
                <Link href="/gutter-guards-rogers-ar" className="hover:text-white transition flex justify-between">
                  <span>Rogers &amp; Beaver Lake</span>
                  <span className="text-slate-600">72756, 72758</span>
                </Link>
              </li>
              <li>
                <Link href="/gutter-guards-bella-vista-ar" className="hover:text-white transition flex justify-between">
                  <span>Bella Vista, AR</span>
                  <span className="text-slate-600">72714, 72715</span>
                </Link>
              </li>
              <li>
                <Link href="/gutter-guards-fayetteville-ar" className="hover:text-white transition flex justify-between">
                  <span>Fayetteville, AR</span>
                  <span className="text-slate-600">72701, 72703</span>
                </Link>
              </li>
              <li>
                <Link href="/gutter-guards-springdale-ar" className="hover:text-white transition flex justify-between">
                  <span>Springdale, AR</span>
                  <span className="text-slate-600">72762, 72764</span>
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/site-directory" className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1">
                  <span>View All 20+ NWA Service ZIP Codes &rarr;</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Guides (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Trust &amp; Guides
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/reviews" className="hover:text-white transition flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span>5.0 Star Reviews (187+)</span>
                </Link>
              </li>
              <li>
                <Link href="/before-after-photos" className="hover:text-white transition">
                  Before &amp; After Photos
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-white transition">
                  Technical Buyer Guides
                </Link>
              </li>
              <li>
                <Link href="/satellite-quote" className="hover:text-white transition">
                  15-Min Satellite Quote
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-white transition">
                  Press Releases &amp; News
                </Link>
              </li>
              <li>
                <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-400">
                  XML Sitemap
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Clean Minimal Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-xs">
          <div>
            © {new Date().getFullYear()} Ozark Gutter Guard Co. All Rights Reserved. Fully Licensed &amp; Insured in Arkansas.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition"
            >
              Facebook Profile
            </a>
            <span>•</span>
            <span>Benton County</span>
            <span>•</span>
            <span>Washington County</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
