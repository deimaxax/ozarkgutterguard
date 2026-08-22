'use client';

import React from 'react';
import { X } from 'lucide-react';
import SatelliteEstimator from './SatelliteEstimator';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  cityName?: string;
}

export default function QuoteModal({ isOpen, onClose, cityName }: QuoteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80">
      <div
        className="relative w-full max-w-xl bg-white border-2 border-slate-900 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center transition-colors border border-slate-700 font-bold"
          aria-label="Close quote modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Body */}
        <div>
          <SatelliteEstimator initialCity={cityName} />
        </div>
      </div>
    </div>
  );
}
