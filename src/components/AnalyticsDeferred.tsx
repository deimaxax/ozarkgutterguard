'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default function AnalyticsDeferred() {
  useEffect(() => {
    let initialized = false;

    const loadAnalytics = () => {
      if (initialized) return;
      initialized = true;

      // Clean up event listeners
      window.removeEventListener('scroll', loadAnalytics);
      window.removeEventListener('mousemove', loadAnalytics);
      window.removeEventListener('touchstart', loadAnalytics);
      window.removeEventListener('click', loadAnalytics);

      // Initialize dataLayer
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });

      // Load GTM script asynchronously
      const gtmScript = document.createElement('script');
      gtmScript.async = true;
      gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-N2ZFPF8X';
      document.head.appendChild(gtmScript);
    };

    // Load on user interaction (scroll, click, touch)
    window.addEventListener('scroll', loadAnalytics, { passive: true, once: true });
    window.addEventListener('mousemove', loadAnalytics, { passive: true, once: true });
    window.addEventListener('touchstart', loadAnalytics, { passive: true, once: true });
    window.addEventListener('click', loadAnalytics, { passive: true, once: true });

    // Fallback: Load after 3.5 seconds if no interaction
    const timer = setTimeout(loadAnalytics, 3500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', loadAnalytics);
      window.removeEventListener('mousemove', loadAnalytics);
      window.removeEventListener('touchstart', loadAnalytics);
      window.removeEventListener('click', loadAnalytics);
    };
  }, []);

  return null;
}
