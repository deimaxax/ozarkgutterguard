import React from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SystemicScopeSection from '@/components/SystemicScopeSection';
import ComparisonMatrix from '@/components/ComparisonMatrix';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import FounderTrustSection from '@/components/FounderTrustSection';
import GutterCleaningBanner from '@/components/GutterCleaningBanner';
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
        {/* 3. Hero & Instant 90-Sec Satellite Quote Estimator */}
        <HeroSection />

        {/* 4. Core 3-Pillar System (Pitch Correction, 316 Mesh, Fascia Mount) */}
        <SystemicScopeSection />

        {/* 5. Detailed Specifications Comparison Matrix (Us vs Franchise vs DIY) */}
        <ComparisonMatrix />

        {/* 6. Photographic Field Proof Across Northwest Arkansas */}
        <BeforeAfterGallery />

        {/* 7. Local Founder Accountability & Clean Yard Promise */}
        <FounderTrustSection />

        {/* 8. Seasonal Maintenance & $149 Cleanout Gateway */}
        <GutterCleaningBanner />

        {/* 9. Verified 5.0 Star Google Reviews */}
        <TestimonialsSection />

        {/* 10. Regional Hubs & NWA Service Directory */}
        <CitySilosSection />

        {/* 11. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* 12. Complete Local Contractor Footer */}
      <Footer />

      {/* 13. Mobile Utility Action Strip */}
      <StickyMobileBar />
    </div>
  );
}
