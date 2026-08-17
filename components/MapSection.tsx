'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Eye, MapPin } from 'lucide-react';

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
    <section id="traffic" className="py-24 bg-slate-900/70 border-t border-cyan-900/30 relative z-0 isolate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 text-xs font-mono mb-3">
              <Eye className="w-3.5 h-3.5" />
              <span>PETA WEBGIS STASIUN VTS</span>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Lokasi Vessel traffic Service
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-2xl">
              Lokasi Stasiun VTS Panjang dan Pusat Pemantauan Radar Maritim di Perairan Teluk Lampung.
            </p>
          </div>

          <div className="flex items-center space-x-3 text-xs font-mono">
            <span className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-950 border border-cyan-800/40 text-cyan-400">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>STASIUN VTS PANJANG</span>
            </span>
          </div>
        </div>

        {/* Map Rendering Container */}
        <LeafletMap />

      </div>
    </section>
  );
}

