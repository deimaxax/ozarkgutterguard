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

        {/* 4. $149 Diagnostic Cleanout & 21-Point Roofline Audit Banner */}
        <GutterCleaningBanner />

        {/* 5. 3 Core System Pillars + 0% Financing */}
        <SystemicScopeSection />

        {/* 5. Clean Specifications Comparison Table */}
        <ComparisonMatrix />

        {/* 6. Field Case Studies & Physical Workmanship Proof */}
        <BeforeAfterGallery />

        {/* 7. Verified NWA Homeowner Reviews */}
        <TestimonialsSection />

        {/* 8. Regional Coverage Strip */}
        <CitySilosSection />

        {/* 9. FAQ Accordion */}
        <FaqSection />
      </main>

      {/* 10. Local Contractor Footer */}
      <Footer />

      {/* 11. Sticky Mobile Utility Bar */}
      <StickyMobileBar />
    </div>
  );
}
