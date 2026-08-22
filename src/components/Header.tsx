'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenQuote?: () => void;
}

export default function Header({ onOpenQuote }: HeaderProps = {}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  const phoneHref = "tel:+14799292516";
  const phoneDisplay = "(479) 929-2516";

  const guardCities = [
    { name: "Bentonville", slug: "/gutter-guards-bentonville-ar" },
    { name: "Bella Vista", slug: "/gutter-guards-bella-vista-ar" },
    { name: "Rogers", slug: "/gutter-guards-rogers-ar" },
    { name: "Fayetteville", slug: "/gutter-guards-fayetteville-ar" },
    { name: "Springdale", slug: "/gutter-guards-springdale-ar" },
    { name: "Centerton", slug: "/gutter-guards-centerton-ar" },
    { name: "Cave Springs", slug: "/gutter-guards-cave-springs-ar" },
    { name: "Lowell", slug: "/gutter-guards-lowell-ar" },
  ];

  const cleaningCities = [
    { name: "Bentonville", slug: "/gutter-cleaning-bentonville-ar" },
    { name: "Bella Vista", slug: "/gutter-cleaning-bella-vista-ar" },
    { name: "Rogers", slug: "/gutter-cleaning-rogers-ar" },
    { name: "Fayetteville", slug: "/gutter-cleaning-fayetteville-ar" },
    { name: "Springdale", slug: "/gutter-cleaning-springdale-ar" },
    { name: "Centerton", slug: "/gutter-cleaning-centerton-ar" },
    { name: "Cave Springs", slug: "/gutter-cleaning-cave-springs-ar" },
    { name: "Lowell", slug: "/gutter-cleaning-lowell-ar" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group py-2">
            <div className="w-10 h-10 sm:w-11 sm:h-11 bg-slate-50 border border-slate-200 rounded-lg p-1.5 flex items-center justify-center shrink-0">
              <Image
                src="/logo.png"
                alt="Ozark Gutter Guard Co."
                width={36}
                height={36}
                className="w-auto h-auto max-h-8 max-w-8 object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg xl:text-xl font-black text-slate-900 tracking-tight leading-none whitespace-nowrap">
                OZARK <span className="text-emerald-700">GUTTER GUARD</span>
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium whitespace-nowrap mt-0.5">
                Local NWA Contractor • Bentonville, AR
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-semibold text-slate-700 shrink-0">
            <Link href="/#specs" className="hover:text-emerald-700 transition-colors whitespace-nowrap">
              Gutter Guards
            </Link>
            <Link href="/gutter-cleaning" className="hover:text-emerald-700 transition-colors whitespace-nowrap">
              Gutter Cleaning ($149)
            </Link>
            <Link href="/#process" className="hover:text-emerald-700 transition-colors whitespace-nowrap">
              How It Works
            </Link>
            <Link href="/#evidence" className="hover:text-emerald-700 transition-colors whitespace-nowrap">
              Before &amp; After
            </Link>
            <Link href="/#reviews" className="hover:text-emerald-700 transition-colors whitespace-nowrap">
              Reviews
            </Link>

            {/* Service Areas Dropdown */}
            <div className="relative" onMouseLeave={() => setLocationsOpen(false)}>
              <button
                type="button"
                onClick={() => setLocationsOpen(!locationsOpen)}
                onMouseEnter={() => setLocationsOpen(true)}
                className="flex items-center gap-1 hover:text-emerald-700 transition-colors py-2 cursor-pointer font-semibold whitespace-nowrap"
              >
                <span>Service Areas</span>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${locationsOpen ? 'rotate-180 text-emerald-700' : ''}`} />
              </button>

              {locationsOpen && (
                <div className="absolute top-full -left-10 w-80 bg-white rounded-xl shadow-xl border border-slate-200 p-4 z-50">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider pb-2 mb-2 border-b border-slate-100">
                    Cities Served in NWA
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    {guardCities.map((item) => (
                      <Link
                        key={item.slug}
                        href={item.slug}
                        onClick={() => setLocationsOpen(false)}
                        className="px-2.5 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-50 hover:text-emerald-700 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-slate-100 text-xs text-slate-500 flex justify-between">
                    <Link href="/pine-needle-gutter-protection" onClick={() => setLocationsOpen(false)} className="hover:text-emerald-700 font-medium">
                      Pine Needle Protection
                    </Link>
                    <Link href="/seamless-gutter-installation-nwa" onClick={() => setLocationsOpen(false)} className="hover:text-emerald-700 font-medium">
                      Seamless Gutters
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Medium Screens (lg) Compact Navigation */}
          <nav className="hidden lg:flex xl:hidden items-center gap-4 text-xs font-semibold text-slate-700 shrink-0">
            <Link href="/#specs" className="hover:text-emerald-700 transition-colors whitespace-nowrap">
              Guards
            </Link>
            <Link href="/gutter-cleaning" className="hover:text-emerald-700 transition-colors whitespace-nowrap">
              Cleaning
            </Link>
            <Link href="/#process" className="hover:text-emerald-700 transition-colors whitespace-nowrap">
              Process
            </Link>
            <Link href="/#evidence" className="hover:text-emerald-700 transition-colors whitespace-nowrap">
              Photos
            </Link>
            <Link href="/#reviews" className="hover:text-emerald-700 transition-colors whitespace-nowrap">
              Reviews
            </Link>
          </nav>

          {/* Right Phone Call + CTA Button */}
          <div className="hidden sm:flex items-center gap-3 sm:gap-4 shrink-0">
            <a
              href={phoneHref}
              className="flex items-center gap-1.5 sm:gap-2 text-slate-800 hover:text-emerald-700 transition-colors font-bold text-xs sm:text-sm whitespace-nowrap"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <span className="hidden md:inline">{phoneDisplay}</span>
            </a>

            <a
              href="/quote"
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold shadow-xs transition-colors whitespace-nowrap shrink-0"
            >
              Get Free Quote
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={phoneHref}
              className="p-2 text-emerald-700 bg-emerald-50 rounded-lg sm:hidden font-bold"
              aria-label={`Call directly at ${phoneDisplay}`}
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-lg border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="space-y-1 text-sm font-bold text-slate-800">
            <Link
              href="/#specs"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-3 py-2.5 rounded-lg active:bg-slate-100 transition-colors"
            >
              Gutter Guards
            </Link>
            <Link
              href="/gutter-cleaning"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-3 py-2.5 rounded-lg bg-emerald-50 text-brand-green font-bold border border-emerald-200 active:bg-emerald-100 transition-colors"
            >
              🧹 $149 Diagnostic Cleanout &amp; 21-Point Audit
            </Link>
            <Link
              href="/#process"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-3 py-2.5 rounded-lg active:bg-slate-100 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/#evidence"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-3 py-2.5 rounded-lg active:bg-slate-100 transition-colors"
            >
              Before &amp; After
            </Link>
            <Link
              href="/#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-3 py-2.5 rounded-lg active:bg-slate-100 transition-colors"
            >
              Reviews
            </Link>
          </div>

          {/* Mobile Service Areas Accordion / Grouped Links */}
          <div className="pt-3 border-t border-slate-200 space-y-3">
            <div>
              <span className="text-xs font-black text-brand-navy uppercase tracking-wider block px-3 mb-2">
                🛡️ Gutter Guards by City:
              </span>
              <div className="grid grid-cols-2 gap-1.5 px-2">
                {guardCities.map((item) => (
                  <Link
                    key={item.slug}
                    href={item.slug}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-2.5 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 active:bg-emerald-50 active:text-brand-green transition-colors text-center"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-black text-brand-green uppercase tracking-wider block px-3 mb-2">
                🧹 $149 Cleanout by City:
              </span>
              <div className="grid grid-cols-2 gap-1.5 px-2">
                {cleaningCities.map((item) => (
                  <Link
                    key={item.slug}
                    href={item.slug}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-2.5 py-2 rounded-lg bg-emerald-50/60 border border-emerald-200 text-xs font-bold text-brand-green active:bg-emerald-100 transition-colors text-center"
                  >
                    {item.name} Clean
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href="/quote"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-contractor-green min-h-[48px] py-3 text-center text-sm font-bold flex items-center justify-center active:scale-[0.98] transition-transform"
            >
              Get Free Quote
            </a>
            <a
              href={phoneHref}
              className="btn-contractor-navy min-h-[48px] py-3 text-center text-sm font-bold flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Shop: {phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
