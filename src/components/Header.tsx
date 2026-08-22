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

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 sm:h-28">
          
          {/* Left: Desktop Nav / Mobile Menu Trigger */}
          <div className="flex-1 flex items-center justify-start">
            <div className="lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 rounded-lg"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 text-xs xl:text-sm font-semibold text-slate-800">
              <Link href="/#specs" className="hover:text-[#D92626] transition-colors whitespace-nowrap">
                Gutter Guards
              </Link>
              <Link href="/gutter-cleaning" className="hover:text-[#D92626] transition-colors whitespace-nowrap">
                Cleanout ($149)
              </Link>
              <Link href="/#process" className="hover:text-[#D92626] transition-colors whitespace-nowrap">
                How It Works
              </Link>
              <Link href="/#reviews" className="hover:text-[#D92626] transition-colors whitespace-nowrap">
                Reviews
              </Link>

              {/* Service Areas Dropdown */}
              <div className="relative" onMouseLeave={() => setLocationsOpen(false)}>
                <button
                  type="button"
                  onClick={() => setLocationsOpen(!locationsOpen)}
                  onMouseEnter={() => setLocationsOpen(true)}
                  className="flex items-center gap-1 hover:text-[#D92626] transition-colors py-2 cursor-pointer font-semibold whitespace-nowrap"
                >
                  <span>Areas</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${locationsOpen ? 'rotate-180 text-[#D92626]' : ''}`} />
                </button>

                {locationsOpen && (
                  <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-200 p-4 z-50">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider pb-2 mb-2 border-b border-slate-100">
                      Cities Served in NWA
                    </div>
                    <div className="grid grid-cols-2 gap-1 text-xs">
                      {guardCities.map((item) => (
                        <Link
                          key={item.slug}
                          href={item.slug}
                          onClick={() => setLocationsOpen(false)}
                          className="px-2.5 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-50 hover:text-[#D92626] transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-slate-100 text-xs text-slate-500 flex justify-between">
                      <Link href="/pine-needle-gutter-protection" onClick={() => setLocationsOpen(false)} className="hover:text-[#D92626] font-medium">
                        Pine Protection
                      </Link>
                      <Link href="/seamless-gutter-installation-nwa" onClick={() => setLocationsOpen(false)} className="hover:text-[#D92626] font-medium">
                        Seamless Gutters
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Center: Brand Logo (Fine-Tuned Proportion) */}
          <div className="shrink-0 flex items-center justify-center px-2">
            <Link href="/" className="flex items-center shrink-0 group py-1" aria-label="Ozark Gutter Guard">
              <Image
                src="/logo.png"
                alt="Ozark Gutter Guard"
                width={280}
                height={88}
                sizes="(max-width: 640px) 180px, (max-width: 1024px) 220px, 260px"
                className="h-[76px] sm:h-[90px] md:h-[104px] w-auto object-contain transition-transform group-hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Right: Phone Icon Only */}
          <div className="flex-1 flex items-center justify-end">
            <a
              href={phoneHref}
              className="w-10 h-10 rounded-full bg-slate-100 hover:bg-red-50 text-slate-800 hover:text-[#D92626] flex items-center justify-center transition-colors shadow-sm border border-slate-200"
              aria-label={`Call us at ${phoneDisplay}`}
              title={`Call us: ${phoneDisplay}`}
            >
              <Phone className="w-4 h-4" />
            </a>
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
              className="min-h-[44px] flex items-center px-3 py-2.5 bg-red-50 text-red-900 font-bold border border-red-200 transition-colors"
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
              className="min-h-[48px] flex items-center justify-center px-3 py-3 bg-[#D92626] hover:bg-[#B91C1C] text-white font-bold tracking-wide transition-colors mt-3 text-center rounded-lg shadow-sm"
            >
              Get Free Instant Quote →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
