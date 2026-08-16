'use client';

import React from 'react';
import Link from 'next/link';
import { Radio, MapPin, ShieldCheck, Activity, Compass, ArrowRight, Eye, Satellite } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 bg-radar-grid bg-[size:40px_40px] opacity-20"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Radar HUD Scanner Graphic (Background Layer) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] sm:w-[650px] sm:h-[650px] rounded-full border border-cyan-500/10 pointer-events-none flex items-center justify-center">
        <div className="w-[80%] h-[80%] rounded-full border border-cyan-500/20 flex items-center justify-center">
          <div className="w-[60%] h-[60%] rounded-full border border-cyan-500/30 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping"></div>
          </div>
        </div>
        {/* Sweeping Line */}
        <div className="absolute inset-0 rounded-full animate-radar-sweep pointer-events-none">
          <div className="w-1/2 h-1/2 bg-gradient-to-br from-cyan-400/20 to-transparent origin-bottom-right rounded-tl-full"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        {/* Live System Online Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-mono mb-8 backdrop-blur-md shadow-lg shadow-cyan-950/50">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="font-semibold text-emerald-400">SYSTEM ONLINE 24/7</span>
          <span className="text-slate-600">|</span>
          <span className="flex items-center space-x-1">
            <Satellite className="w-3.5 h-3.5 text-cyan-400" />
            <span>AIS & RADAR INTEGRATED</span>
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          STASIUN VESSEL TRAFFIC SERVICES{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">
            PANJANG
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
          Distrik Navigasi Kelas I Panjang — Direktorat Jenderal Perhubungan Laut.
          Pusat pemantauan keselamatan navigasi, pengawasan alur pelayaran, dan manajemen arus lalu lintas kapal di perairan Teluk Lampung dan pendekatan Selat Sunda.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#traffic"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all flex items-center justify-center space-x-2 group"
          >
            <Eye className="w-4 h-4 text-slate-950 group-hover:scale-110 transition-transform" />
            <span>Lihat Peta Perairan</span>
            <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/#layanan"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-cyan-500/60 text-slate-200 hover:text-cyan-400 font-semibold text-sm backdrop-blur-md transition-all flex items-center justify-center space-x-2"
          >
            <Compass className="w-4 h-4 text-cyan-400" />
            <span>Layanan VTS</span>
          </Link>
        </div>

        {/* HUD Telemetry Quick Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="p-4 rounded-2xl bg-slate-900/70 border border-cyan-900/30 backdrop-blur-md text-left group hover:border-cyan-500/50 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">RADAR COVERAGE</span>
              <Radio className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
            </div>
            <div className="text-2xl font-bold text-white font-mono">24 NM</div>
            <p className="text-[11px] text-slate-400 mt-1">Jangkauan Sensor Radar</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/70 border border-cyan-900/30 backdrop-blur-md text-left group hover:border-cyan-500/50 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">VHF CHANNELS</span>
              <Activity className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-2xl font-bold text-white font-mono">CH 16 / 12</div>
            <p className="text-[11px] text-slate-400 mt-1">Saluran Siaga & Operasional</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/70 border border-cyan-900/30 backdrop-blur-md text-left group hover:border-cyan-500/50 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">VTS COORDINATE</span>
              <MapPin className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
            </div>
            <div className="text-[13px] sm:text-sm font-bold text-white font-mono">05°27'18.91"S 105°18'34.34"E</div>
            <p className="text-[11px] text-slate-400 mt-1">Stasiun VTS Panjang</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/70 border border-cyan-900/30 backdrop-blur-md text-left group hover:border-cyan-500/50 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">OPERATIONAL</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-2xl font-bold text-emerald-400 font-mono">24/7 SHIFT</div>
            <p className="text-[11px] text-slate-400 mt-1">Operator & Teknisi Siaga</p>
          </div>
        </div>

      </div>
    </section>
  );
}
