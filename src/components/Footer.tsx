import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Mail, ShieldCheck, Star } from 'lucide-react';

export default function Footer() {
  const phoneHref = "tel:+14799292516";
  const phoneDisplay = "(479) 929-2516";
  const facebookUrl = "https://facebook.com/OzarkGutterGuard";

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-24 lg:pb-16 border-t-2 border-slate-900 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Col 1: Brand & Credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-white border-2 border-slate-800 rounded p-1 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Ozark Gutter Guard Co."
                  width={34}
                  height={34}
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <span className="text-lg font-black text-white tracking-tight font-heading uppercase">
                  OZARK <span className="text-amber-500">GUTTER GUARD CO.</span>
                </span>
                <span className="block text-[11px] text-slate-400 font-mono">Bentonville, Arkansas • 316 Surgical Micro-Mesh</span>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed font-normal text-xs pr-4">
              Direct-to-consumer 316 surgical stainless steel micro-mesh gutter protection. Installed by in-house local craftsmen across Benton and Washington counties. Zero high-pressure salespeople, 100% shingle-safe, and backed by our written 10-Year No-Clog Guarantee.
            </p>

            <div className="space-y-2 text-slate-300 pt-2 font-mono text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <span>1102 S Walton Blvd, Bentonville, AR 72712</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Dispatch: <a href={phoneHref} className="text-white hover:text-amber-400 font-bold underline">{phoneDisplay}</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>dispatch@ozarkgutterguard.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <svg className="w-4 h-4 text-amber-500 shrink-0 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook: <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-400 font-bold underline">facebook.com/OzarkGutterGuard</a></span>
              </div>
              <div className="flex items-center gap-2 text-amber-400 font-bold pt-1">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>AR Lic. #OGG-479-NWA • $2,000,000 General Liability</span>
              </div>
            </div>
          </div>

          {/* Col 2: Service Areas (3 cols) */}
          <div className="lg:col-span-3 space-y-3 font-mono">
            <h4 className="text-sm font-bold uppercase text-white tracking-wider border-b border-slate-900 pb-2">
              City Hubs
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/gutter-guards-bentonville-ar" className="hover:text-amber-400 flex justify-between">
                  <span>Bentonville Gutter Guards</span>
                  <span className="text-slate-500">72712, 72713</span>
                </Link>
              </li>
              <li>
                <Link href="/gutter-guards-bella-vista-ar" className="hover:text-amber-400 flex justify-between">
                  <span>Bella Vista Pine Shield</span>
                  <span className="text-slate-500">72714, 72715</span>
                </Link>
              </li>
              <li>
                <Link href="/gutter-guards-rogers-ar" className="hover:text-amber-400 flex justify-between">
                  <span>Rogers &amp; Beaver Lake</span>
                  <span className="text-slate-500">72756, 72758</span>
                </Link>
              </li>
              <li>
                <Link href="/gutter-guards-fayetteville-ar" className="hover:text-amber-400 flex justify-between">
                  <span>Fayetteville Overlooks</span>
                  <span className="text-slate-500">72701, 72703</span>
                </Link>
              </li>
              <li>
                <Link href="/gutter-guards-springdale-ar" className="hover:text-amber-400 flex justify-between">
                  <span>Springdale Corridor</span>
                  <span className="text-slate-500">72762, 72764</span>
                </Link>
              </li>
              <li>
                <Link href="/seamless-gutter-installation-nwa" className="hover:text-amber-400 flex justify-between">
                  <span>Seamless Gutter Install</span>
                  <span className="text-slate-500">NWA Metro</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services & Systems (2 cols) */}
          <div className="lg:col-span-2 space-y-3 font-mono">
            <h4 className="text-sm font-bold uppercase text-white tracking-wider border-b border-slate-900 pb-2">
              Services
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/pine-needle-gutter-protection" className="hover:text-amber-400">
                  Pine Needle Defense
                </Link>
              </li>
              <li>
                <Link href="/oak-tassel-gutter-protection" className="hover:text-amber-400">
                  Oak Catkin Filtration
                </Link>
              </li>
              <li>
                <Link href="/foundation-water-damage-prevention" className="hover:text-amber-400">
                  Foundation Protection
                </Link>
              </li>
              <li>
                <Link href="/gutter-cleaning" className="hover:text-amber-400 text-amber-500 font-bold">
                  $149 Cleanout &amp; Audit
                </Link>
              </li>
              <li>
                <Link href="/micro-mesh-vs-screen-guards" className="hover:text-amber-400">
                  Micro-Mesh vs Screens
                </Link>
              </li>
              <li>
                <Link href="/seamless-gutter-installation-nwa" className="hover:text-amber-400">
                  Seamless Gutters
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Sitemap & Crawl Index (2 cols) */}
          <div className="lg:col-span-2 space-y-3 font-mono">
            <h4 className="text-sm font-bold uppercase text-white tracking-wider border-b border-slate-900 pb-2">
              Site Index
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/site-directory" className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1">
                  <span>★ Full Site Directory</span>
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-amber-400">
                  Verified Reviews (5.0★)
                </Link>
              </li>
              <li>
                <Link href="/before-after-photos" className="hover:text-amber-400">
                  Before &amp; After Logs
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-amber-400">
                  Homeowner Guides
                </Link>
              </li>
              <li>
                <Link href="/satellite-quote" className="hover:text-amber-400">
                  Instant Satellite Quote
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-amber-400 font-semibold text-amber-500">
                  Press Room &amp; PR
                </Link>
              </li>
              <li>
                <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-[11px] block pt-1">
                  [XML Sitemap]
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* NWA HYPER-LOCAL ZIP CODE & NEIGHBORHOOD DIRECTORY */}
        <div className="pt-10 border-t border-slate-900 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <h5 className="text-xs font-black uppercase tracking-wider text-slate-300 font-mono">
              Northwest Arkansas Hyper-Local Coverage &amp; ZIP Codes:
            </h5>
            <span className="text-[11px] text-amber-400 font-mono font-bold">Same-Week Satellite Dispatch Across Benton &amp; Washington Counties</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 text-xs font-mono">
            <Link href="/gutter-guards-72712-bentonville-ar" className="p-2 bg-slate-900 border border-slate-800 hover:border-amber-500 hover:text-white transition-colors">
              <span className="text-amber-400 font-bold block">72712</span>
              <span className="text-slate-400 text-[10px] block font-sans">Downtown Bentonville</span>
            </Link>
            <Link href="/gutter-guards-72713-bentonville-ar" className="p-2 bg-slate-900 border border-slate-800 hover:border-amber-500 hover:text-white transition-colors">
              <span className="text-amber-400 font-bold block">72713</span>
              <span className="text-slate-400 text-[10px] block font-sans">West Bentonville</span>
            </Link>
            <Link href="/gutter-guards-72714-bella-vista-ar" className="p-2 bg-slate-900 border border-slate-800 hover:border-amber-500 hover:text-white transition-colors">
              <span className="text-amber-400 font-bold block">72714</span>
              <span className="text-slate-400 text-[10px] block font-sans">Bella Vista South</span>
            </Link>
            <Link href="/gutter-guards-72715-bella-vista-ar" className="p-2 bg-slate-900 border border-slate-800 hover:border-amber-500 hover:text-white transition-colors">
              <span className="text-amber-400 font-bold block">72715</span>
              <span className="text-slate-400 text-[10px] block font-sans">Highlands / Scotsdale</span>
            </Link>
            <Link href="/gutter-guards-72758-rogers-ar" className="p-2 bg-slate-900 border border-slate-800 hover:border-amber-500 hover:text-white transition-colors">
              <span className="text-amber-400 font-bold block">72758</span>
              <span className="text-slate-400 text-[10px] block font-sans">Pinnacle / Shadow Valley</span>
            </Link>
            <Link href="/gutter-guards-72756-rogers-ar" className="p-2 bg-slate-900 border border-slate-800 hover:border-amber-500 hover:text-white transition-colors">
              <span className="text-amber-400 font-bold block">72756</span>
              <span className="text-slate-400 text-[10px] block font-sans">East Rogers / Beaver Lake</span>
            </Link>
            <Link href="/gutter-guards-72701-fayetteville-ar" className="p-2 bg-slate-900 border border-slate-800 hover:border-amber-500 hover:text-white transition-colors">
              <span className="text-amber-400 font-bold block">72701</span>
              <span className="text-slate-400 text-[10px] block font-sans">Mount Sequoyah / Historic</span>
            </Link>
            <Link href="/gutter-guards-72703-fayetteville-ar" className="p-2 bg-slate-900 border border-slate-800 hover:border-amber-500 hover:text-white transition-colors">
              <span className="text-amber-400 font-bold block">72703</span>
              <span className="text-slate-400 text-[10px] block font-sans">North Fayetteville</span>
            </Link>
            <Link href="/gutter-guards-72704-fayetteville-ar" className="p-2 bg-slate-900 border border-slate-800 hover:border-amber-500 hover:text-white transition-colors">
              <span className="text-amber-400 font-bold block">72704</span>
              <span className="text-slate-400 text-[10px] block font-sans">West Fayetteville</span>
            </Link>
            <Link href="/gutter-guards-72762-springdale-ar" className="p-2 bg-slate-900 border border-slate-800 hover:border-amber-500 hover:text-white transition-colors">
              <span className="text-amber-400 font-bold block">72762</span>
              <span className="text-slate-400 text-[10px] block font-sans">Har-Ber Meadows</span>
            </Link>
            <Link href="/gutter-guards-72764-springdale-ar" className="p-2 bg-slate-900 border border-slate-800 hover:border-amber-500 hover:text-white transition-colors">
              <span className="text-amber-400 font-bold block">72764</span>
              <span className="text-slate-400 text-[10px] block font-sans">East Springdale</span>
            </Link>
            <Link href="/gutter-guards-72718-cave-springs-ar" className="p-2 bg-slate-900 border border-slate-800 hover:border-amber-500 hover:text-white transition-colors">
              <span className="text-amber-400 font-bold block">72718</span>
              <span className="text-slate-400 text-[10px] block font-sans">Cave Springs</span>
            </Link>
            <Link href="/gutter-guards-72719-centerton-ar" className="p-2 bg-slate-900 border border-slate-800 hover:border-amber-500 hover:text-white transition-colors">
              <span className="text-amber-400 font-bold block">72719</span>
              <span className="text-slate-400 text-[10px] block font-sans">Centerton</span>
            </Link>
            <Link href="/gutter-guards-72745-lowell-ar" className="p-2 bg-slate-900 border border-slate-800 hover:border-amber-500 hover:text-white transition-colors">
              <span className="text-amber-400 font-bold block">72745</span>
              <span className="text-slate-400 text-[10px] block font-sans">Lowell</span>
            </Link>
            <Link href="/gutter-guards-72751-pea-ridge-ar" className="p-2 bg-slate-900 border border-slate-800 hover:border-amber-500 hover:text-white transition-colors">
              <span className="text-amber-400 font-bold block">72751</span>
              <span className="text-slate-400 text-[10px] block font-sans">Pea Ridge</span>
            </Link>
            <Link href="/gutter-guards-72770-tontitown-ar" className="p-2 bg-slate-900 border border-slate-800 hover:border-amber-500 hover:text-white transition-colors">
              <span className="text-amber-400 font-bold block">72770</span>
              <span className="text-slate-400 text-[10px] block font-sans">Tontitown</span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-xs font-mono">
          <div>
            © {new Date().getFullYear()} Ozark Gutter Guard Co. All Rights Reserved. Fully Licensed &amp; Insured in Arkansas.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-amber-400 flex items-center gap-1 font-bold"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Follow on Facebook</span>
            </a>
            <span>•</span>
            <span>Bentonville</span>
            <span>•</span>
            <span>Bella Vista</span>
            <span>•</span>
            <span>Rogers</span>
            <span>•</span>
            <span>Fayetteville</span>
            <span>•</span>
            <span>Springdale</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
