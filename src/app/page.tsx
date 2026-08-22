import React from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import GutterCleaningBanner from '@/components/GutterCleaningBanner';
import SystemicScopeSection from '@/components/SystemicScopeSection';
import ComparisonMatrix from '@/components/ComparisonMatrix';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import FounderTrustSection from '@/components/FounderTrustSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CitySilosSection from '@/components/CitySilosSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. Top Phone & Trust Bar */}
      <TopBar />

      {/* 2. Main Navigation Header */}
      <Header />

      <main className="flex-1">
        {/* 3. Hero Section (Home Services Proposition + Direct CTAs) */}
        <HeroSection />

        {/* 4. $149 Cleanout & Inspection Offer (High-Converting Gateway immediately visible on Mobile) */}
        <GutterCleaningBanner />

        {/* 5. The 3-Step Installation Done Right */}
        <SystemicScopeSection />

        {/* 6. Honest Comparison Table (Us vs Big Brand Franchises vs DIY) */}
        <ComparisonMatrix />

        {/* 7. Real Local Workmanship & Photos */}
        <BeforeAfterGallery />

        {/* 8. Local Founder Accountability & Clean Yard Promise */}
        <FounderTrustSection />

        {/* 9. Verified 5.0 Star Google Reviews */}
        <TestimonialsSection />

        {/* 10. Regional Hubs & NWA Service Directory */}
        <CitySilosSection />

        {/* 11. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* 12. Minimal Clean Contractor Footer */}
      <Footer />

      {/* 13. Mobile Sticky Bottom Action Strip */}
      <StickyMobileBar />
    </div>
  );
}
