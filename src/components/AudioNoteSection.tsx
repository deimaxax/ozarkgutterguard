'use client';

import React, { useState, useRef } from 'react';
import { Volume2, Play, Pause, ShieldCheck, MapPin, Mic } from 'lucide-react';

export default function AudioNoteSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      // Simulate playback progress
      let p = 0;
      const interval = setInterval(() => {
        p += 5;
        if (p > 100) {
          clearInterval(interval);
          setIsPlaying(false);
          setProgress(0);
        } else {
          setProgress(p);
        }
      }, 750); // 15 seconds total
    } else {
      setIsPlaying(false);
      setProgress(0);
    }
  };

  return (
    <section className="py-10 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-800 flex flex-col md:flex-row items-center gap-6 justify-between">
          
          {/* Left: Speaker & Bio */}
          <div className="flex items-center gap-4 text-left w-full md:w-auto">
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-slate-800 border-2 border-orange-500 flex items-center justify-center text-orange-400 shrink-0 font-bold text-base">
                <Mic className="w-6 h-6 text-orange-500" />
              </div>
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-slate-900 rounded-full" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-white text-base">Jake Miller</h4>
                <span className="text-[10px] font-mono font-bold uppercase bg-slate-800 text-emerald-400 px-2 py-0.5 rounded border border-slate-700">
                  Lead Drainage Engineer
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-orange-500" />
                <span>Bentonville Depot (1102 S Walton Blvd)</span>
              </p>
            </div>
          </div>

          {/* Center/Right: Interactive Voice Note Waveform Player */}
          <div className="w-full md:max-w-md space-y-2">
            <div className="flex items-center gap-3 bg-slate-800/90 p-2.5 rounded-xl border border-slate-700/80">
              <button
                type="button"
                onClick={togglePlay}
                className="w-10 h-10 rounded-lg bg-orange-600 hover:bg-orange-500 text-white flex items-center justify-center shrink-0 transition shadow-sm active:scale-95"
                aria-label={isPlaying ? "Pause voice note" : "Play 15-sec voice note"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
              </button>

              {/* Animated / Interactive Audio Waveform */}
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>15-Sec Voice Note from David</span>
                  <span>{isPlaying ? `${Math.round((progress / 100) * 15)}s / 15s` : '0:15'}</span>
                </div>
                <div className="h-4 flex items-center gap-0.5 overflow-hidden">
                  {[20, 45, 75, 30, 90, 60, 100, 40, 80, 50, 95, 35, 70, 85, 40, 65, 90, 55, 30, 80, 60, 45, 90, 70, 35, 50, 85, 60].map((h, idx) => {
                    const active = (idx / 28) * 100 <= progress;
                    return (
                      <div
                        key={idx}
                        className={`flex-1 rounded-full transition-all duration-150 ${active ? 'bg-orange-400' : 'bg-slate-700'}`}
                        style={{ height: `${isPlaying ? Math.max(20, (h * (progress % 20 + 80)) / 100) : h}%` }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Transcript Preview */}
            <p className="text-[11px] text-slate-400 italic">
              &quot;If you have Loblolly pines in Bella Vista or Coler oaks in Bentonville, plastic guards turn into sludge. Run your address through our satellite tool above—no salesmen, guaranteed.&quot;
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
