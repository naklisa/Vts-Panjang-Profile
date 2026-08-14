'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Eye, Radio, RefreshCw } from 'lucide-react';

// Dynamic import with SSR false for Leaflet
const LeafletMap = dynamic(() => import('./LeafletMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] rounded-3xl bg-slate-950 border border-cyan-900/40 flex flex-col items-center justify-center space-y-4">
      <div className="w-12 h-12 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin"></div>
      <p className="text-xs font-mono text-cyan-400">MEMUAT PETA WEBGIS STASIUN VTS PANJANG...</p>
    </div>
  ),
});

export default function MapSection() {
  return (
    <section id="traffic" className="py-24 bg-slate-900/70 border-t border-cyan-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 text-xs font-mono mb-3">
              <Eye className="w-3.5 h-3.5" />
              <span>PETA PERAIRAN WEBGIS SIMULASI</span>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Pemantauan Lalu Lintas Kapal Real-Time
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-2xl">
              Integrasi data AIS (*Automatic Identification System*) dan Sistem Radar Maritim Stasiun VTS Panjang di Perairan Teluk Lampung (`-5.4746, 105.3142`).
            </p>
          </div>

          <div className="flex items-center space-x-3 text-xs font-mono">
            <span className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-950 border border-cyan-800/40 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>LIVE AIS STREAM</span>
            </span>
          </div>
        </div>

        {/* Map Rendering Container */}
        <LeafletMap />

      </div>
    </section>
  );
}
