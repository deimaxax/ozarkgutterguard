import React from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SystemicScopeSection from '@/components/SystemicScopeSection';
import FounderTrustSection from '@/components/FounderTrustSection';
import GutterCleaningBanner from '@/components/GutterCleaningBanner';
import ComparisonMatrix from '@/components/ComparisonMatrix';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import TestimonialsSection from '@/components/TestimonialsSection';
import CitySilosSection from '@/components/CitySilosSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import MunicipalPermitSection from '@/components/MunicipalPermitSection';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-slate-900 font-sans">
      {/* 1. Top Metadata Strip */}
      <TopBar />

      {/* 2. Direct Contractor Navigation Header */}
      <Header />

      <main className="flex-1">
        {/* 3. Hero & Instant Satellite Quote Estimator */}
        <HeroSection />

        {/* 4. Complete Cleanout Banner */}
        <GutterCleaningBanner />

        {/* 5. 3 Core System Pillars */}
        <SystemicScopeSection />

        {/* 6. Founder Accountability & Clean Yard Promise */}
        <FounderTrustSection />

        {/* 7. Clean Specifications Comparison Table */}
        <ComparisonMatrix />

        {/* 8. Field Case Studies & Physical Workmanship Proof */}
        <BeforeAfterGallery />

        {/* 9. Verified NWA Homeowner Reviews */}
        <TestimonialsSection />

        {/* 10. Regional Coverage Strip */}
        <CitySilosSection />

        {/* 11. Municipal Building Department & Stormwater Drainage Compliance */}
        <MunicipalPermitSection cityName="Bentonville" />

        {/* 12. FAQ Accordion */}
        <FaqSection />
      </main>

      {/* 13. Clean Residential Footer */}
      <Footer />

      {/* 14. Sticky Mobile Utility Bar */}
      <StickyMobileBar />
    </div>
  );
}
