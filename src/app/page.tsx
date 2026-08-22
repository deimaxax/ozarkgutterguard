import React from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SystemicScopeSection from '@/components/SystemicScopeSection';
import GutterCleaningBanner from '@/components/GutterCleaningBanner';
import ComparisonMatrix from '@/components/ComparisonMatrix';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import TestimonialsSection from '@/components/TestimonialsSection';
import CitySilosSection from '@/components/CitySilosSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import NwaStormLookup from '@/components/NwaStormLookup';
import MunicipalPermitSection from '@/components/MunicipalPermitSection';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      {/* 1. Top Registry & Star Rating Strip */}
      <TopBar />

      {/* 2. Direct Contractor Navigation Header */}
      <Header />

      <main className="flex-1">
        {/* 3. Hero & Instant Sizing / Quote Estimator */}
        <HeroSection />

        {/* 4. Complete Cleanout Banner */}
        <GutterCleaningBanner />

        {/* 5. 3 Core System Pillars */}
        <SystemicScopeSection />

        {/* 6. Clean Specifications Comparison Table */}
        <ComparisonMatrix />

        {/* 7. Field Case Studies & Physical Workmanship Proof */}
        <BeforeAfterGallery />

        {/* 8. Verified NWA Homeowner Reviews */}
        <TestimonialsSection />

        {/* 9. Regional Coverage Strip */}
        <CitySilosSection />

        {/* 10. Municipal Building Department & Stormwater Drainage Compliance */}
        <MunicipalPermitSection cityName="Bentonville" />

        {/* 11. FAQ Accordion */}
        <FaqSection />
      </main>

      {/* 13. Local Contractor Footer */}
      <Footer />

      {/* 14. Sticky Mobile Utility Bar */}
      <StickyMobileBar />
    </div>
  );
}
