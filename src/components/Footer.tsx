import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Mail, ShieldCheck, Star } from 'lucide-react';

export default function Footer() {
  const phoneHref = "tel:+14799292516";
  const phoneDisplay = "(479) 929-2516";
  const facebookUrl = "https://facebook.com/OzarkGutterGuard";

  return (
    <footer className="bg-brand-navyDark text-slate-400 pt-16 pb-24 lg:pb-16 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-white border border-slate-700 rounded-lg p-1.5 flex items-center justify-center">
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
                <span className="text-lg font-black text-white tracking-tight">
                  OZARK <span className="text-emerald-400">GUTTER GUARD CO.</span>
                </span>
                <span className="block text-[11px] text-slate-400">Northwest Arkansas Gutter Protection</span>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed font-normal text-xs pr-4">
              Direct-to-consumer 316 surgical stainless steel micro-mesh gutter protection. Installed by in-house local craftsmen across Benton and Washington counties. Zero high-pressure salespeople, 100% shingle-safe, and backed by our 10-Year No-Clog Guarantee.
            </p>

            <div className="space-y-2 text-slate-300 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>1102 S Walton Blvd, Bentonville, AR 72712</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct Line: <a href={phoneHref} className="text-white hover:text-emerald-400 font-bold underline">{phoneDisplay}</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>dispatch@ozarkgutterguard.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <svg className="w-4 h-4 text-emerald-400 shrink-0 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook: <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-400 font-bold underline">facebook.com/OzarkGutterGuard</a></span>
              </div>
              <div className="flex items-center gap-2 text-amber-400 font-bold pt-1">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>AR Lic. #OGG-479-NWA • $2,000,000 General Liability</span>
              </div>
            </div>
          </div>

          {/* Col 2: Service Areas (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase text-white tracking-wider border-b border-slate-800 pb-2">
              City Hubs
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/gutter-guards-bentonville-ar" className="hover:text-emerald-400 flex justify-between">
                  <span>Bentonville Gutter Guards</span>
                  <span className="text-slate-500">72712, 72713</span>
                </Link>
              </li>
              <li>
                <Link href="/gutter-guards-bella-vista-ar" className="hover:text-emerald-400 flex justify-between">
                  <span>Bella Vista Pine Shield</span>
                  <span className="text-slate-500">72714, 72715</span>
                </Link>
              </li>
              <li>
                <Link href="/gutter-guards-rogers-ar" className="hover:text-emerald-400 flex justify-between">
                  <span>Rogers &amp; Beaver Lake</span>
                  <span className="text-slate-500">72756, 72758</span>
                </Link>
              </li>
              <li>
                <Link href="/gutter-guards-fayetteville-ar" className="hover:text-emerald-400 flex justify-between">
                  <span>Fayetteville Overlooks</span>
                  <span className="text-slate-500">72701, 72703</span>
                </Link>
              </li>
              <li>
                <Link href="/gutter-guards-springdale-ar" className="hover:text-emerald-400 flex justify-between">
                  <span>Springdale Corridor</span>
                  <span className="text-slate-500">72762, 72764</span>
                </Link>
              </li>
              <li>
                <Link href="/seamless-gutter-installation-nwa" className="hover:text-emerald-400 flex justify-between">
                  <span>Seamless Gutter Install</span>
                  <span className="text-slate-500">NWA Metro</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services & Systems (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase text-white tracking-wider border-b border-slate-800 pb-2">
              Services
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/pine-needle-gutter-protection" className="hover:text-emerald-400">
                  Pine Needle Defense
                </Link>
              </li>
              <li>
                <Link href="/oak-tassel-gutter-protection" className="hover:text-emerald-400">
                  Oak Catkin Filtration
                </Link>
              </li>
              <li>
                <Link href="/foundation-water-damage-prevention" className="hover:text-emerald-400">
                  Foundation Protection
                </Link>
              </li>
              <li>
                <Link href="/gutter-cleaning" className="hover:text-emerald-400">
                  $149 Cleanout &amp; Audit
                </Link>
              </li>
              <li>
                <Link href="/micro-mesh-vs-screen-guards" className="hover:text-emerald-400">
                  Micro-Mesh vs Screens
                </Link>
              </li>
              <li>
                <Link href="/hoa-gutter-cleaning-nwa" className="hover:text-emerald-400">
                  HOA &amp; Commercial
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Sitemap & Crawl Index (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase text-white tracking-wider border-b border-slate-800 pb-2">
              Site Index
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/site-directory" className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1">
                  <span>★ Full Site Directory</span>
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-emerald-400">
                  Verified Reviews (5.0★)
                </Link>
              </li>
              <li>
                <Link href="/before-after-photos" className="hover:text-emerald-400">
                  Before &amp; After Logs
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-emerald-400">
                  Homeowner Guides
                </Link>
              </li>
              <li>
                <Link href="/satellite-quote" className="hover:text-emerald-400">
                  90-Sec Satellite Quote
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-emerald-400 font-semibold text-orange-400">
                  📰 Press Room &amp; PR
                </Link>
              </li>
              <li>
                <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-[11px] font-mono block pt-1">
                  [XML Sitemap]
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* NWA HYPER-LOCAL ZIP CODE & NEIGHBORHOOD DIRECTORY */}
        <div className="pt-10 border-t border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <h5 className="text-xs font-black uppercase tracking-wider text-slate-300">
              Northwest Arkansas Hyper-Local Coverage &amp; ZIP Codes:
            </h5>
            <span className="text-[11px] text-emerald-400 font-mono font-bold">Same-Week Satellite Dispatch Across Benton &amp; Washington Counties</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 text-xs">
            <Link href="/gutter-guards-72712-bentonville-ar" className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-white transition-colors">
              <span className="font-mono text-emerald-400 font-bold block">72712</span>
              <span className="text-slate-400 text-[10px] block">Downtown Bentonville</span>
            </Link>
            <Link href="/gutter-guards-72713-bentonville-ar" className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-white transition-colors">
              <span className="font-mono text-emerald-400 font-bold block">72713</span>
              <span className="text-slate-400 text-[10px] block">West Bentonville</span>
            </Link>
            <Link href="/gutter-guards-72714-bella-vista-ar" className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-white transition-colors">
              <span className="font-mono text-emerald-400 font-bold block">72714</span>
              <span className="text-slate-400 text-[10px] block">Bella Vista South</span>
            </Link>
            <Link href="/gutter-guards-72715-bella-vista-ar" className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-white transition-colors">
              <span className="font-mono text-emerald-400 font-bold block">72715</span>
              <span className="text-slate-400 text-[10px] block">Highlands / Scotsdale</span>
            </Link>
            <Link href="/gutter-guards-72758-rogers-ar" className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-white transition-colors">
              <span className="font-mono text-emerald-400 font-bold block">72758</span>
              <span className="text-slate-400 text-[10px] block">Pinnacle / Shadow Valley</span>
            </Link>
            <Link href="/gutter-guards-72756-rogers-ar" className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-white transition-colors">
              <span className="font-mono text-emerald-400 font-bold block">72756</span>
              <span className="text-slate-400 text-[10px] block">East Rogers / Beaver Lake</span>
            </Link>
            <Link href="/gutter-guards-72701-fayetteville-ar" className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-white transition-colors">
              <span className="font-mono text-emerald-400 font-bold block">72701</span>
              <span className="text-slate-400 text-[10px] block">Mount Sequoyah / Historic</span>
            </Link>
            <Link href="/gutter-guards-72703-fayetteville-ar" className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-white transition-colors">
              <span className="font-mono text-emerald-400 font-bold block">72703</span>
              <span className="text-slate-400 text-[10px] block">North Fayetteville</span>
            </Link>
            <Link href="/gutter-guards-72704-fayetteville-ar" className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-white transition-colors">
              <span className="font-mono text-emerald-400 font-bold block">72704</span>
              <span className="text-slate-400 text-[10px] block">West Fayetteville / Wedington</span>
            </Link>
            <Link href="/gutter-guards-72762-springdale-ar" className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-white transition-colors">
              <span className="font-mono text-emerald-400 font-bold block">72762</span>
              <span className="text-slate-400 text-[10px] block">Har-Ber Meadows</span>
            </Link>
            <Link href="/gutter-guards-72764-springdale-ar" className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-white transition-colors">
              <span className="font-mono text-emerald-400 font-bold block">72764</span>
              <span className="text-slate-400 text-[10px] block">East Springdale / Lake</span>
            </Link>
            <Link href="/gutter-guards-72718-cave-springs-ar" className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-white transition-colors">
              <span className="font-mono text-emerald-400 font-bold block">72718</span>
              <span className="text-slate-400 text-[10px] block">Cave Springs / The Creeks</span>
            </Link>
            <Link href="/gutter-guards-72719-centerton-ar" className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-white transition-colors">
              <span className="font-mono text-emerald-400 font-bold block">72719</span>
              <span className="text-slate-400 text-[10px] block">Centerton Subdivisions</span>
            </Link>
            <Link href="/gutter-guards-72745-lowell-ar" className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-white transition-colors">
              <span className="font-mono text-emerald-400 font-bold block">72745</span>
              <span className="text-slate-400 text-[10px] block">Lowell / Ward Nail</span>
            </Link>
            <Link href="/gutter-guards-72751-pea-ridge-ar" className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-white transition-colors">
              <span className="font-mono text-emerald-400 font-bold block">72751</span>
              <span className="text-slate-400 text-[10px] block">Pea Ridge / Military Park</span>
            </Link>
            <Link href="/gutter-guards-72770-tontitown-ar" className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-white transition-colors">
              <span className="font-mono text-emerald-400 font-bold block">72770</span>
              <span className="text-slate-400 text-[10px] block">Tontitown / Ardemagni</span>
            </Link>
            <Link href="/gutter-guards-72730-farmington-ar" className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-white transition-colors">
              <span className="font-mono text-emerald-400 font-bold block">72730</span>
              <span className="text-slate-400 text-[10px] block">Farmington / Valley View</span>
            </Link>
            <Link href="/gutter-guards-72761-siloam-springs-ar" className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-white transition-colors">
              <span className="font-mono text-emerald-400 font-bold block">72761</span>
              <span className="text-slate-400 text-[10px] block">Siloam Springs / Sager Creek</span>
            </Link>
            <Link href="/gutter-guards-72753-prairie-grove-ar" className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-white transition-colors">
              <span className="font-mono text-emerald-400 font-bold block">72753</span>
              <span className="text-slate-400 text-[10px] block">Prairie Grove / Battlefield</span>
            </Link>
            <Link href="/gutter-guards-72736-gravette-ar" className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-white transition-colors">
              <span className="font-mono text-emerald-400 font-bold block">72736</span>
              <span className="text-slate-400 text-[10px] block">Gravette &amp; Hiwasse</span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-xs">
          <div>
            © {new Date().getFullYear()} Ozark Gutter Guard Co. All Rights Reserved. Fully Licensed &amp; Insured in Arkansas.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 flex items-center gap-1 font-semibold"
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
