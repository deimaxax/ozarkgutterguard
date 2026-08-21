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

  const cityLinks = [
    { name: "Bentonville", slug: "/gutter-guards-bentonville-ar" },
    { name: "Bella Vista", slug: "/gutter-guards-bella-vista-ar" },
    { name: "Rogers", slug: "/gutter-guards-rogers-ar" },
    { name: "Fayetteville", slug: "/gutter-guards-fayetteville-ar" },
    { name: "Springdale", slug: "/gutter-guards-springdale-ar" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 bg-white border border-slate-200 rounded-lg p-1.5 flex items-center justify-center shadow-xs">
              <Image
                src="/logo.png"
                alt="Ozark Gutter Guard Co."
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-black text-brand-navy tracking-tight block leading-tight">
                OZARK <span className="text-brand-green">GUTTER GUARD</span>
              </span>
              <span className="text-[11px] text-slate-500 font-medium block">
                Bentonville, AR • Licensed &amp; Insured
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-bold text-slate-700">
            <Link href="/#specs" className="hover:text-brand-green transition-colors">
              Gutter Guards
            </Link>
            <Link 
              href="/gutter-cleaning" 
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-50 text-brand-green border border-emerald-200 hover:bg-emerald-100 transition-colors"
            >
              <span>$149 Gutter Cleaning</span>
              <span className="text-[10px] bg-brand-green text-white px-1.5 py-0.2 rounded font-black uppercase tracking-wider">Audit</span>
            </Link>
            <Link href="/#process" className="hover:text-brand-green transition-colors">
              How It Works
            </Link>
            <Link href="/#evidence" className="hover:text-brand-green transition-colors">
              Before &amp; After
            </Link>
            <Link href="/#reviews" className="hover:text-brand-green transition-colors">
              Reviews
            </Link>

            {/* Service Areas Dropdown */}
            <div className="relative" onMouseLeave={() => setLocationsOpen(false)}>
              <button
                type="button"
                onClick={() => setLocationsOpen(!locationsOpen)}
                onMouseEnter={() => setLocationsOpen(true)}
                className="flex items-center gap-1 hover:text-brand-green transition-colors py-2 cursor-pointer"
              >
                <span>Service Areas</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${locationsOpen ? 'rotate-180 text-brand-green' : ''}`} />
              </button>

              {locationsOpen && (
                <div className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
                  {cityLinks.map((item) => (
                    <Link
                      key={item.slug}
                      href={item.slug}
                      onClick={() => setLocationsOpen(false)}
                      className="block px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-brand-green transition-colors"
                    >
                      {item.name} Gutter Guards
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Phone Call + CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={phoneHref}
              className="flex items-center gap-2 text-brand-navy hover:text-brand-green transition-colors font-bold text-sm"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-brand-green flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <span>{phoneDisplay}</span>
            </a>

            <a
              href="/quote"
              className="btn-contractor-green px-5 py-2.5 text-xs sm:text-sm font-bold shadow-xs"
            >
              Get Free Quote
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={phoneHref}
              className="p-2 text-brand-green bg-emerald-50 rounded-lg sm:hidden font-bold"
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
        <div className="lg:hidden bg-white/98 backdrop-blur-lg border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
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

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2.5">
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
