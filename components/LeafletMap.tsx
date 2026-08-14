'use client';

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, Tooltip } from 'react-leaflet';
import L from 'leaflet';

// Explicit TS Interface for Vessels
export interface Vessel {
  id: string;
  name: string;
  type: 'cargo' | 'tanker' | 'passenger' | 'tugboat';
  mmsi: string;
  callSign: string;
  lat: number;
  lng: number;
  heading: number;
  speed: number; // knots
  status: 'Underway' | 'Anchored' | 'Moored' | 'Assisting';
  destination: string;
  flag: string;
}

const VTS_COORDINATES: [number, number] = [-5.4746, 105.3142];

// Simulated Live Vessels in Lampung Bay
const INITIAL_VESSELS: Vessel[] = [
  {
    id: 'v-1',
    name: 'KM. KIRANA VII',
    type: 'passenger',
    mmsi: '525001234',
    callSign: 'YBDA',
    lat: -5.5100,
    lng: 105.2950,
    heading: 45,
    speed: 14.5,
    status: 'Underway',
    destination: 'BAKAUHENI -> MERAK',
    flag: '🇮🇩 Indonesia',
  },
  {
    id: 'v-2',
    name: 'MT. LAMPUNG PERDANA',
    type: 'tanker',
    mmsi: '525009876',
    callSign: 'YBCX',
    lat: -5.4880,
    lng: 105.3350,
    heading: 135,
    speed: 10.2,
    status: 'Underway',
    destination: 'TERMINAL BBM PANJANG',
    flag: '🇮🇩 Indonesia',
  },
  {
    id: 'v-3',
    name: 'MV. OCEAN TRADER',
    type: 'cargo',
    mmsi: '636015555',
    callSign: 'A8XY9',
    lat: -5.4620,
    lng: 105.2800,
    heading: 0,
    speed: 0.0,
    status: 'Anchored',
    destination: 'LABUH TELUK LAMPUNG',
    flag: '🇱🇷 Liberia',
  },
  {
    id: 'v-4',
    name: 'TB. SAMUDRA PERKASA 08',
    type: 'tugboat',
    mmsi: '525003322',
    callSign: 'YBD2',
    lat: -5.4720,
    lng: 105.3190,
    heading: 210,
    speed: 6.8,
    status: 'Assisting',
    destination: 'DOCKING PELABUHAN PANJANG',
    flag: '🇮🇩 Indonesia',
  },
];

// Helper to generate futuristic Leaflet divIcons
function createVTSStationIcon() {
  if (typeof window === 'undefined' || !L || !L.divIcon) return undefined as any;
  return L.divIcon({
    className: 'custom-vts-marker',
    html: `
      <div class="relative flex items-center justify-center w-10 h-10">
        <div class="absolute inset-0 bg-cyan-500/30 rounded-full animate-ping"></div>
        <div class="w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/50">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9c3.9 3.9 3.9 10.2 0 14.1"/></svg>
        </div>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });
}

function createVesselIcon(vessel: Vessel) {
  if (typeof window === 'undefined' || !L || !L.divIcon) return undefined as any;
  let colorClass = 'text-amber-400 border-amber-400/80 bg-amber-950/80';
  if (vessel.type === 'tanker') colorClass = 'text-red-400 border-red-400/80 bg-red-950/80';
  if (vessel.type === 'passenger') colorClass = 'text-emerald-400 border-emerald-400/80 bg-emerald-950/80';
  if (vessel.type === 'tugboat') colorClass = 'text-cyan-400 border-cyan-400/80 bg-cyan-950/80';

  return L.divIcon({
    className: 'custom-ship-marker',
    html: `
      <div class="relative group" style="transform: rotate(${vessel.heading}deg);">
        <div class="w-7 h-7 rounded-lg ${colorClass} border flex items-center justify-center shadow-md shadow-black/80 font-mono text-[10px] font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 19 21 12 17 5 21 12 2"/></svg>
        </div>
      </div>
    `,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  });
}

export default function LeafletMap() {
  const [vessels, setVessels] = useState<Vessel[]>(INITIAL_VESSELS);
  const [selectedVessel, setSelectedVessel] = useState<Vessel | null>(null);
  const [filterType, setFilterType] = useState<string>('all');

  // Simulation: Move vessels slightly to simulate live AIS movement
  useEffect(() => {
    const interval = setInterval(() => {
      setVessels((prev) =>
        prev.map((v) => {
          if (v.status === 'Anchored' || v.status === 'Moored') return v;
          const deltaLat = (Math.cos((v.heading * Math.PI) / 180) * 0.0003 * v.speed) / 10;
          const deltaLng = (Math.sin((v.heading * Math.PI) / 180) * 0.0003 * v.speed) / 10;
          return {
            ...v,
            lat: v.lat + deltaLat,
            lng: v.lng + deltaLng,
          };
        })
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const filteredVessels = filterType === 'all' ? vessels : vessels.filter((v) => v.type === filterType);

  return (
    <div className="relative w-full h-[600px] rounded-3xl overflow-hidden border border-cyan-900/40 shadow-2xl bg-slate-950">
      
      {/* Map Controls Filter Header */}
      <div className="absolute top-4 left-4 z-[1000] flex flex-wrap items-center gap-2 bg-slate-950/90 backdrop-blur-md p-2 rounded-2xl border border-slate-800 shadow-xl">
        <span className="text-xs font-mono text-cyan-400 px-2 font-semibold">AIS FILTER:</span>
        <button
          onClick={() => setFilterType('all')}
          className={`px-3 py-1 rounded-xl text-xs font-mono transition-all ${
            filterType === 'all'
              ? 'bg-cyan-500 text-slate-950 font-bold'
              : 'bg-slate-900 text-slate-300 hover:text-white'
          }`}
        >
          SEMUA ({vessels.length})
        </button>
        <button
          onClick={() => setFilterType('cargo')}
          className={`px-3 py-1 rounded-xl text-xs font-mono transition-all ${
            filterType === 'cargo'
              ? 'bg-amber-500 text-slate-950 font-bold'
              : 'bg-slate-900 text-amber-400 hover:bg-slate-800'
          }`}
        >
          CARGO
        </button>
        <button
          onClick={() => setFilterType('tanker')}
          className={`px-3 py-1 rounded-xl text-xs font-mono transition-all ${
            filterType === 'tanker'
              ? 'bg-red-500 text-slate-950 font-bold'
              : 'bg-slate-900 text-red-400 hover:bg-slate-800'
          }`}
        >
          TANKER
        </button>
        <button
          onClick={() => setFilterType('passenger')}
          className={`px-3 py-1 rounded-xl text-xs font-mono transition-all ${
            filterType === 'passenger'
              ? 'bg-emerald-500 text-slate-950 font-bold'
              : 'bg-slate-900 text-emerald-400 hover:bg-slate-800'
          }`}
        >
          FERRY
        </button>
      </div>

      {/* Live AIS Radar Legend HUD */}
      <div className="absolute bottom-4 left-4 z-[1000] hidden sm:block bg-slate-950/90 backdrop-blur-md p-3.5 rounded-2xl border border-slate-800 text-xs font-mono space-y-1.5 shadow-xl">
        <div className="text-[10px] text-cyan-400 font-bold tracking-wider uppercase mb-1">RADAR TELEMETRY STATUS</div>
        <div className="flex items-center space-x-2 text-slate-300">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
          <span>STASIUN VTS PANJANG (RADAR CENTER)</span>
        </div>
        <div className="flex items-center space-x-2 text-slate-400 text-[11px]">
          <span>COVERAGE RADIUS: 24 NM (NAUTICAL MILES)</span>
        </div>
      </div>

      {/* Actual React-Leaflet Map */}
      <MapContainer
        center={VTS_COORDINATES}
        zoom={11}
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
              <div className="text-[10px] text-slate-400 font-mono">LAT: -5.4746 | LNG: 105.3142</div>
            </div>
          </Popup>
        </Marker>

        {/* Vessel Markers */}
        {filteredVessels.map((vessel) => (
          <Marker
            key={vessel.id}
            position={[vessel.lat, vessel.lng]}
            icon={createVesselIcon(vessel)}
            eventHandlers={{
              click: () => setSelectedVessel(vessel),
            }}
          >
            <Tooltip direction="top" offset={[0, -10]} opacity={0.9} permanent={false}>
              <span className="font-mono text-xs font-bold text-white">{vessel.name} ({vessel.speed} kn)</span>
            </Tooltip>

            <Popup>
              <div className="p-2 space-y-2 text-xs font-mono">
                <div className="flex justify-between items-center border-b border-cyan-900/60 pb-1.5">
                  <span className="font-bold text-white text-sm">{vessel.name}</span>
                  <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/50 text-[10px]">
                    {vessel.type.toUpperCase()}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px] text-slate-300">
                  <div>MMSI: <span className="text-cyan-300">{vessel.mmsi}</span></div>
                  <div>CALLSIGN: <span className="text-cyan-300">{vessel.callSign}</span></div>
                  <div>SPEED: <span className="text-emerald-400">{vessel.speed} KTS</span></div>
                  <div>HEADING: <span className="text-emerald-400">{vessel.heading}°</span></div>
                  <div>STATUS: <span className="text-amber-400">{vessel.status}</span></div>
                  <div>BENDERA: <span>{vessel.flag}</span></div>
                </div>

                <div className="pt-1.5 border-t border-slate-800 text-[10px] text-slate-400">
                  TUJUAN: <span className="text-cyan-300 font-bold">{vessel.destination}</span>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
