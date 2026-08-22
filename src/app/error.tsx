'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { RefreshCw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App Router Error:', error);
  }, [error]);

  const phoneHref = "tel:+14799292516";
  const phoneDisplay = "(479) 929-2516";

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 bg-[#F8F9FA]">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
        <div className="w-14 h-14 bg-red-50 text-[#D92626] rounded-full flex items-center justify-center mx-auto">
          <RefreshCw className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold text-[#0F1E36]">Something went wrong</h2>
          <p className="text-xs text-slate-600">
            An unexpected error occurred while loading this page. You can reload or return home.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full btn-contractor-primary py-3 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="w-full btn-contractor-navy py-2.5 text-sm font-bold flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Back to Homepage</span>
          </Link>

          <a
            href={phoneHref}
            className="block text-xs font-bold text-slate-600 hover:text-[#D92626] pt-1"
          >
            Call Dispatch: {phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
