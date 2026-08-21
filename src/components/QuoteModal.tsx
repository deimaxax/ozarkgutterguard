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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm">
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 bg-slate-800 hover:bg-slate-700 text-white rounded-full flex items-center justify-center transition-colors"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Body */}
        <div className="p-1">
          <SatelliteEstimator initialCity={cityName} />
        </div>
      </div>
    </div>
  );
}
