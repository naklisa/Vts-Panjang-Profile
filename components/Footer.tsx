'use client';

import React from 'react';
import Link from 'next/link';
import { Radio, Phone, Mail, MapPin, ShieldAlert, Compass, ExternalLink, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="kontak" className="bg-slate-950 border-t border-cyan-900/30 text-slate-400 relative overflow-hidden">
      {/* Glow Overlay Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1: VTS Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-xl bg-slate-900 border border-cyan-800/60 p-1 flex items-center justify-center shadow-lg shadow-cyan-950/50 shrink-0 overflow-hidden">
                <img
                  src="/logo.png"
                  alt="Logo VTS Panjang"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-base tracking-wider">STASIUN VTS PANJANG</h3>
                <p className="text-xs text-cyan-400 font-mono">DISTRIK NAVIGASI KELAS I PANJANG</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pusat Pelayanan Lalu Lintas Kapal (Vessel Traffic Services) Teluk Lampung. Menjamin keselamatan pelayaran, keamanan maritim, dan perlindungan lingkungan laut secara 24/7.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-800/40 text-[11px] font-mono text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>STATUS: OPERATIONAL 24/7</span>
              </span>
            </div>
          </div>

          {/* Col 2: Emergency Radio Channels */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider flex items-center space-x-2">
              <ShieldAlert className="w-4 h-4 text-red-500" />
              <span>Frekuensi Radio Darurat</span>
            </h4>
            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-red-900/40 hover:border-red-500/60 transition-colors">
                <div className="flex justify-between items-center text-red-400 font-bold mb-1">
                  <span>VHF CHANNEL 16</span>
                  <span className="px-2 py-0.5 rounded bg-red-950 text-[10px]">DISTRESS</span>
                </div>
                <p className="text-slate-300">156.800 MHz (Panggilan Darurat & Keselamatan)</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-cyan-900/40 hover:border-cyan-500/60 transition-colors">
                <div className="flex justify-between items-center text-cyan-400 font-bold mb-1">
                  <span>VHF CHANNEL 12</span>
                  <span className="px-2 py-0.5 rounded bg-cyan-950 text-[10px]">WORKING</span>
                </div>
                <p className="text-slate-300">156.600 MHz (Operasional VTS & Panduan)</p>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider flex items-center space-x-2">
              <Compass className="w-4 h-4 text-cyan-400" />
              <span>Tautan Cepat</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#hero" className="hover:text-cyan-400 transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Beranda</span>
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-cyan-400 transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Tentang Stasiun VTS</span>
                </Link>
              </li>
              <li>
                <Link href="/#layanan" className="hover:text-cyan-400 transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Layanan INS, TOS & NAS</span>
                </Link>
              </li>
              <li>
                <Link href="/fasilitas" className="hover:text-cyan-400 transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Fasilitas & Peralatan Operasional</span>
                </Link>
              </li>
              <li>
                <Link href="/struktur-organisasi" className="hover:text-cyan-400 transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Struktur Organisasi & Regu Jaga</span>
                </Link>
              </li>
              <li>
                <Link href="/#traffic" className="hover:text-cyan-400 transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Peta Perairan WebGIS</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>Kontak Resmi</span>
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  Jl. Yos Sudarso No. 64/10, Waylunik, Bandar Lampung, Lampung, Indonesia
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>+62 (123) 4567 / +62 123-456-789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-mono">panjang.vts@gmail.com</span>
              </div>
              <div className="pt-2">
                <a
                  href="https://hubla.dephub.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-cyan-400 hover:text-cyan-300 underline"
                >
                  <span>Direktorat Jenderal Perhubungan Laut</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Stasiun VTS Panjang - Distrik Navigasi Panjang. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center space-x-4 font-mono text-[11px]">
            <span>LAT: 05° 27' 18.91" S</span>
            <span>LONG: 105° 18' 34.34" E</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

