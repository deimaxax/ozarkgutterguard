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
            <div>
              <Link href="/" className="inline-flex items-center bg-white px-3 py-1.5 rounded-xl shadow-xs hover:opacity-95 transition">
                <Image
                  src="/logo.png"
                  alt="Ozark Gutter Guard Co."
                  width={220}
                  height={70}
                  sizes="180px"
                  className="h-9 w-auto object-contain"
                />
              </Link>
              <p className="text-[11px] text-slate-400 mt-2">
                Northwest Arkansas Local Gutter &amp; Protection Specialists
              </p>
            </div>

            <div className="space-y-2 text-slate-300 text-xs pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Bentonville, AR 72712 • Serving all Northwest Arkansas</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Call Us: <a href={phoneHref} className="inline-block py-1 text-white hover:text-red-400 font-bold">{phoneDisplay}</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a href="mailto:info@ozarkgutterguard.com" className="inline-block py-1 text-slate-300 hover:text-white transition">
                  info@ozarkgutterguard.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-[11px] pt-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>AR Lic. #039182 • Fully Insured</span>
              </div>
            </div>

            {/* Verified Profiles & Directory Badges */}
            <div className="pt-3">
              <span className="text-[11px] font-semibold text-slate-400 block mb-2 uppercase tracking-wider">
                Find Us &amp; Verified Profiles
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { name: "Yelp", href: "https://yelp.com/biz/ozark-gutter-guard-fayetteville" },
                  { name: "Nextdoor", href: "https://nextdoor.com/page/ozark-gutter-guard-fayetteville-ar" },
                  { name: "Houzz", href: "https://www.houzz.com/professionals/roofing-and-gutters/ozark-gutter-guard-pfvwus-pf~2052376562" },
                  { name: "Thumbtack", href: "https://www.thumbtack.com/ar/bentonville/pro/ozark-gutter-guards/service/588283928151015428" },
                  { name: "Facebook", href: "https://www.facebook.com/OzarkGutterGuard" },
                  { name: "YouTube", href: "https://www.youtube.com/@OzarkGutterGuard" },
                  { name: "LinkedIn", href: "https://www.linkedin.com/company/ozark-gutter-guard/" },
                  { name: "Instagram", href: "https://www.instagram.com/ozarkgutterguard/" },
                  { name: "X (Twitter)", href: "https://x.com/OzarkGutterGuar" },
                  { name: "Pinterest", href: "https://www.pinterest.com/ozarkgutterguard/" },
                  { name: "EZLocal", href: "https://ezlocal.com/ar/bentonville/gutter-cleaning-service/0919817979" },
                  { name: "Manta", href: "https://www.manta.com/c/m1hft21/ozark-gutter-guard" },
                  { name: "MerchantCircle", href: "https://www.merchantcircle.com/ozark-gutter-guard-fayetteville-ar" }
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-2.5 py-1 min-h-[28px] rounded bg-[#183059] hover:bg-red-600 text-[10px] text-slate-300 hover:text-white transition font-medium border border-slate-700/50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Services (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-0.5 text-slate-300">
              <li>
                <Link href="/micro-mesh-vs-screen-guards" className="inline-block py-1.5 hover:text-white transition">
                  Gutter Guards
                </Link>
              </li>
              <li>
                <Link href="/gutter-cleaning" className="inline-block py-1.5 hover:text-white transition">
                  $149 Cleanout
                </Link>
              </li>
              <li>
                <Link href="/seamless-gutter-installation-nwa" className="inline-block py-1.5 hover:text-white transition">
                  Seamless Gutters
                </Link>
              </li>
              <li>
                <Link href="/satellite-quote" className="inline-block py-1.5 hover:text-white transition">
                  Satellite Estimate
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Service Areas
            </h3>
            <ul className="space-y-0.5 text-slate-300">
              <li>
                <Link href="/gutter-guards-bentonville-ar" className="inline-block py-1.5 hover:text-white transition">
                  Bentonville, AR
                </Link>
              </li>
              <li>
                <Link href="/gutter-guards-rogers-ar" className="inline-block py-1.5 hover:text-white transition">
                  Rogers, AR
                </Link>
              </li>
              <li>
                <Link href="/gutter-guards-bella-vista-ar" className="inline-block py-1.5 hover:text-white transition">
                  Bella Vista, AR
                </Link>
              </li>
              <li>
                <Link href="/gutter-guards-fayetteville-ar" className="inline-block py-1.5 hover:text-white transition">
                  Fayetteville, AR
                </Link>
              </li>
              <li>
                <Link href="/gutter-guards-springdale-ar" className="inline-block py-1.5 hover:text-white transition">
                  Springdale, AR
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/site-directory" className="inline-block py-1.5 text-slate-200 hover:text-white font-semibold">
                  All Locations Directory &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Info (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Company &amp; Trust
            </h3>
            <ul className="space-y-0.5 text-slate-300">
              <li>
                <Link href="/about" className="inline-block py-1.5 hover:text-white transition">
                  About Us (AR #039182)
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="inline-block py-1.5 text-slate-200 hover:text-white font-semibold transition">
                  Lifetime Warranty
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="inline-block py-1.5 hover:text-white transition">
                  4.9 Google Reviews (187)
                </Link>
              </li>
              <li>
                <Link href="/before-after-photos" className="inline-block py-1.5 hover:text-white transition">
                  Before &amp; Afters
                </Link>
              </li>
              <li>
                <Link href="/guides" className="inline-block py-1.5 hover:text-white transition">
                  Homeowner Guides
                </Link>
              </li>
              <li>
                <Link href="/site-directory" className="inline-block py-1.5 hover:text-white transition">
                  Site Directory
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Clean Copyright & Legal Line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-300 text-xs">
          <p>© {new Date().getFullYear()} Ozark Gutter Guard Co. All Rights Reserved. AR Lic. #039182</p>
          <div className="flex items-center gap-4 text-slate-300">
            <Link href="/privacy-policy" className="py-2 hover:text-white transition">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="py-2 hover:text-white transition">Terms of Service</Link>
            <span>•</span>
            <Link href="/warranty" className="py-2 hover:text-white transition">Warranty</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
