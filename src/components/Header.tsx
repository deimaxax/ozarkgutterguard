'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

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

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Contractor Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group py-2">
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
              <span className="text-base sm:text-lg xl:text-xl font-bold text-slate-900 tracking-tight leading-none whitespace-nowrap">
                OZARK <span className="text-[#1D4ED8]">GUTTER GUARD</span>
              </span>
              <span className="text-[11px] text-slate-500 font-medium whitespace-nowrap mt-1">
                Local NWA Contractor • Bentonville, AR
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-semibold text-slate-700 shrink-0">
            <Link href="/#specs" className="hover:text-[#1D4ED8] transition-colors whitespace-nowrap">
              Gutter Guards
            </Link>
            <Link href="/gutter-cleaning" className="hover:text-[#1D4ED8] transition-colors whitespace-nowrap">
              Cleanout ($149)
            </Link>
            <Link href="/#process" className="hover:text-[#1D4ED8] transition-colors whitespace-nowrap">
              How It Works
            </Link>
            <Link href="/#evidence" className="hover:text-[#1D4ED8] transition-colors whitespace-nowrap">
              Before &amp; After
            </Link>
            <Link href="/#reviews" className="hover:text-[#1D4ED8] transition-colors whitespace-nowrap">
              Reviews
            </Link>

            {/* Service Areas Dropdown */}
            <div className="relative" onMouseLeave={() => setLocationsOpen(false)}>
              <button
                type="button"
                onClick={() => setLocationsOpen(!locationsOpen)}
                onMouseEnter={() => setLocationsOpen(true)}
                className="flex items-center gap-1 hover:text-[#1D4ED8] transition-colors py-2 cursor-pointer font-semibold whitespace-nowrap"
              >
                <span>Service Areas</span>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${locationsOpen ? 'rotate-180 text-[#1D4ED8]' : ''}`} />
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
                        className="px-2.5 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-50 hover:text-[#1D4ED8] transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-slate-100 text-xs text-slate-500 flex justify-between">
                    <Link href="/pine-needle-gutter-protection" onClick={() => setLocationsOpen(false)} className="hover:text-[#1D4ED8] font-medium">
                      Pine Protection
                    </Link>
                    <Link href="/seamless-gutter-installation-nwa" onClick={() => setLocationsOpen(false)} className="hover:text-[#1D4ED8] font-medium">
                      Seamless Gutters
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Medium Screens (lg) Compact Navigation */}
          <nav className="hidden lg:flex xl:hidden items-center gap-4 text-xs font-semibold text-slate-700 shrink-0">
            <Link href="/#specs" className="hover:text-[#1D4ED8] transition-colors whitespace-nowrap">
              Guards
            </Link>
            <Link href="/gutter-cleaning" className="hover:text-[#1D4ED8] transition-colors whitespace-nowrap">
              Cleaning
            </Link>
            <Link href="/#process" className="hover:text-[#1D4ED8] transition-colors whitespace-nowrap">
              Process
            </Link>
            <Link href="/#evidence" className="hover:text-[#1D4ED8] transition-colors whitespace-nowrap">
              Photos
            </Link>
            <Link href="/#reviews" className="hover:text-[#1D4ED8] transition-colors whitespace-nowrap">
              Reviews
            </Link>
          </nav>

          {/* Right Phone Call + CTA Button */}
          <div className="hidden sm:flex items-center gap-3 sm:gap-4 shrink-0">
            <a
              href={phoneHref}
              className="flex items-center gap-2 text-slate-800 hover:text-[#1D4ED8] transition-colors font-bold text-xs sm:text-sm whitespace-nowrap"
            >
              <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <span className="hidden md:inline">{phoneDisplay}</span>
            </a>

            <a
              href="/quote"
              className="btn-contractor-primary px-4 py-2.5 text-xs sm:text-sm font-bold transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-sm"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Direct Action */}
          <div className="flex items-center gap-2 lg:hidden">
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
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1 text-sm font-semibold text-slate-800">
            <Link
              href="/#specs"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-3 py-2.5 border-b border-slate-100 active:bg-slate-50 transition-colors"
            >
              Gutter Guards (316 Mesh)
            </Link>
            <Link
              href="/gutter-cleaning"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-3 py-2.5 bg-blue-50 text-blue-900 font-bold border border-blue-200 transition-colors"
            >
              $149 Cleanout &amp; Inspection
            </Link>
            <Link
              href="/#process"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-3 py-2.5 border-b border-slate-100 active:bg-slate-50 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/#evidence"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-3 py-2.5 border-b border-slate-100 active:bg-slate-50 transition-colors"
            >
              Before &amp; After Proof
            </Link>
            <Link
              href="/#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-3 py-2.5 border-b border-slate-100 active:bg-slate-50 transition-colors"
            >
              Verified Reviews (187+)
            </Link>
            <Link
              href="/quote"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[48px] flex items-center justify-center px-3 py-3 bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-bold tracking-wide transition-colors mt-3 text-center rounded-lg"
            >
              Get Free Instant Quote →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
