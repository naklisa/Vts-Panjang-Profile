'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';

// 1. SROP-VTS PANJANG: 05°27'19.0" LS / 105°18'38.0" BT (-5.455278, 105.310556)
const SROP_VTS_PANJANG_COORDINATES: [number, number] = [-5.455278, 105.310556];

// 2. GUNUNG KUNYIT SENSOR (RADAR SYSTEM): 05°26'49.0" LS / 105°16'54.4" BT (-5.446944, 105.281778)
const GUNUNG_KUNYIT_RADAR_COORDINATES: [number, number] = [-5.446944, 105.281778];

// Helper to generate futuristic Leaflet divIcons for Master VTS
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

// Helper for Radar Station Icon (Gunung Kunyit)
function createRadarStationIcon() {
  if (typeof window === 'undefined' || !L || !L.divIcon) return undefined as any;
  return L.divIcon({
    className: 'custom-radar-marker',
    html: `
      <div class="relative flex items-center justify-center w-11 h-11">
        <div class="absolute inset-0 bg-amber-500/30 rounded-full animate-ping"></div>
        <div class="w-8 h-8 rounded-full bg-slate-950 border-2 border-amber-400 flex items-center justify-center text-amber-400 shadow-lg shadow-amber-500/50">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/></svg>
        </div>
      </div>
    `,
    iconSize: [44, 44],
    iconAnchor: [22, 22],
  });
}

export default function LeafletMap() {
  return (
    <div className="relative w-full h-[600px] rounded-3xl overflow-hidden border border-cyan-900/40 shadow-2xl bg-slate-950">

      {/* Station Location Info Badge Header */}
      <div className="absolute top-4 left-4 z-[1000] flex flex-col sm:flex-row items-start sm:items-center gap-2 bg-slate-950/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-cyan-900/60 shadow-xl">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
          <span className="text-xs font-mono font-bold text-cyan-400">STASIUN SENSOR VTS PANJANG</span>
        </div>
      </div>

      {/* Live Radar Telemetry Status HUD */}
      <div className="absolute bottom-4 left-4 z-[1000] hidden sm:block bg-slate-950/90 backdrop-blur-md p-4 rounded-2xl border border-slate-800 text-xs font-mono space-y-2 shadow-xl max-w-md">
        <div className="text-[10px] text-cyan-400 font-bold tracking-wider uppercase mb-1 flex items-center justify-between">
          <span>STASIUN SENSOR SENSOR VTS (PDF HAL. 2)</span>
          <span className="text-emerald-400">2 STASIUN ONLINE</span>
        </div>

        <div className="p-2 rounded-xl bg-slate-900/90 border border-cyan-900/40 space-y-1">
          <div className="flex items-center justify-between text-cyan-300 font-bold">
            <span>1. SROP-VTS PANJANG</span>
            <span className="text-[10px] text-slate-400">05°27'19.0"S 105°18'38.0"E</span>
          </div>
          <p className="text-[11px] text-slate-400">Perangkat: AIS, Radio VHF, CCTV Long Range, AWS, VTS Data & Replay</p>
        </div>

        <div className="p-2 rounded-xl bg-slate-900/90 border border-amber-900/40 space-y-1">
          <div className="flex items-center justify-between text-amber-300 font-bold">
            <span>2. GUNUNG KUNYIT SENSOR</span>
            <span className="text-[10px] text-slate-400">05°26'49.0"S 105°16'54.4"E</span>
          </div>
          <p className="text-[11px] text-slate-400">Perangkat Utama: <strong>Radar System (Band-X & Band-S)</strong></p>
        </div>
      </div>

      {/* Actual React-Leaflet Map */}
      <MapContainer
        center={[-5.451, 105.296]}
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        {/* Dark Mode CartoDB Tile Layer */}
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a> &amp; Distrik Navigasi Panjang'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {/* VTS Station 24 NM Radius Coverage Circle around SROP Panjang */}
        <Circle
          center={SROP_VTS_PANJANG_COORDINATES}
          radius={24000} // 24 km
          pathOptions={{
            color: '#06b6d4',
            fillColor: '#06b6d4',
            fillOpacity: 0.04,
            weight: 1,
            dashArray: '4, 8',
          }}
        />

        {/* Radar Coverage Circle around Gunung Kunyit Sensor */}
        <Circle
          center={GUNUNG_KUNYIT_RADAR_COORDINATES}
          radius={22000} // 22 km
          pathOptions={{
            color: '#f59e0b',
            fillColor: '#f59e0b',
            fillOpacity: 0.04,
            weight: 1,
            dashArray: '4, 8',
          }}
        />

        {/* 1. SROP-VTS Master Station Marker */}
        <Marker position={SROP_VTS_PANJANG_COORDINATES} icon={createVTSStationIcon()}>
          <Popup>
            <div className="p-1 space-y-1 text-slate-900">
              <div className="text-xs font-bold text-cyan-600 font-mono">1. STASIUN VTS PANJANG</div>
              <div className="text-[11px]">Pusat Data VTS, AIS Base Station, CCTV & Weather Station</div>
              <div className="text-[10px] text-slate-500 font-mono">05°27'19.0" LS / 105°18'38.0" BT</div>
            </div>
          </Popup>
        </Marker>

        {/* 2. Gunung Kunyit Radar Station Marker */}
        <Marker position={GUNUNG_KUNYIT_RADAR_COORDINATES} icon={createRadarStationIcon()}>
          <Popup>
            <div className="p-1 space-y-1 text-slate-900">
              <div className="text-xs font-bold text-amber-600 font-mono">2. STASIUN SENSOR GUNUNG KUNYIT</div>
              <div className="text-[11px]">Stasiun Radar System Utama VTS Panjang</div>
              <div className="text-[10px] text-slate-500 font-mono">05°26'49.0" LS / 105°16'54.4" BT</div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}


