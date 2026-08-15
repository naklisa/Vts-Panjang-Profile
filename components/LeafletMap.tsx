'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';

const VTS_COORDINATES: [number, number] = [-5.455007552545647, 105.31086450790356];

// Helper to generate futuristic Leaflet divIcons
function createVTSStationIcon() {
  if (typeof window === 'undefined' || !L || !L.divIcon) return undefined as any;
  return L.divIcon({
    className: 'custom-vts-marker',
    html: `
      <div class="relative flex items-center justify-center w-12 h-12">
        <div class="absolute inset-0 bg-cyan-500/30 rounded-full animate-ping"></div>
        <div class="w-9 h-9 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/50">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9c3.9 3.9 3.9 10.2 0 14.1"/></svg>
        </div>
      </div>
    `,
    iconSize: [48, 48],
    iconAnchor: [24, 24],
  });
}

export default function LeafletMap() {
  return (
    <div className="relative w-full h-[600px] rounded-3xl overflow-hidden border border-cyan-900/40 shadow-2xl bg-slate-950">
      
      {/* Station Location Info Badge Header */}
      <div className="absolute top-4 left-4 z-[1000] flex items-center gap-2 bg-slate-950/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-cyan-900/60 shadow-xl">
        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
        <div className="text-xs font-mono">
          <span className="text-cyan-400 font-bold">STASIUN VTS PANJANG: </span>
          <span className="text-slate-300">-5.455008, 105.310865</span>
        </div>
      </div>

      {/* Live Radar Telemetry Status HUD */}
      <div className="absolute bottom-4 left-4 z-[1000] hidden sm:block bg-slate-950/90 backdrop-blur-md p-3.5 rounded-2xl border border-slate-800 text-xs font-mono space-y-1.5 shadow-xl">
        <div className="text-[10px] text-cyan-400 font-bold tracking-wider uppercase mb-1">POSISI STASIUN & RADAR</div>
        <div className="flex items-center space-x-2 text-slate-300">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>STASIUN VTS PANJANG (RADAR MASTER CENTER)</span>
        </div>
        <div className="flex items-center space-x-2 text-slate-400 text-[11px]">
          <span>KOORDINAT: -5.455007552545647, 105.31086450790356</span>
        </div>
        <div className="flex items-center space-x-2 text-slate-400 text-[11px]">
          <span>COVERAGE RADIUS: 24 NM (NAUTICAL MILES)</span>
        </div>
      </div>

      {/* Actual React-Leaflet Map */}
      <MapContainer
        center={VTS_COORDINATES}
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        {/* Dark Mode CartoDB Tile Layer */}
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a> &amp; Distrik Navigasi Panjang'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {/* VTS Station 24 NM Radius Coverage Circle */}
        <Circle
          center={VTS_COORDINATES}
          radius={24000} // 24 km ~ 13 NM display
          pathOptions={{
            color: '#06b6d4',
            fillColor: '#06b6d4',
            fillOpacity: 0.05,
            weight: 1,
            dashArray: '4, 8',
          }}
        />

        {/* VTS Master Station Marker */}
        <Marker position={VTS_COORDINATES} icon={createVTSStationIcon()}>
          <Popup>
            <div className="p-1 space-y-1">
              <div className="text-xs font-bold text-cyan-400 font-mono">STASIUN VTS PANJANG</div>
              <div className="text-[11px] text-slate-300">Pusat Komando & Pemantauan VTS</div>
              <div className="text-[10px] text-slate-400 font-mono">LAT: -5.45500755 | LNG: 105.31086451</div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

