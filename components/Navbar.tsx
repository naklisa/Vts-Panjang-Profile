'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Radio,
  Menu,
  X,
  ShieldAlert,
  ChevronDown,
  Building2,
  Users,
  Zap,
  Info,
  Shield,
  HelpCircle,
  RadioTower,
  Compass,
} from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active Dropdown state for Desktop ('profil' | 'layanan' | null)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Mobile accordion state
  const [mobileAccordion, setMobileAccordion] = useState<{ [key: string]: boolean }>({
    profil: false,
    layanan: false,
  });

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Mouse Enter with delay cancel
  const handleMouseEnter = (key: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(key);
  };

  // Handle Mouse Leave with smooth delay so user can move cursor to dropdown box
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  // Toggle Dropdown on Click (for touch/desktop click)
  const toggleDropdown = (key: string) => {
    setActiveDropdown((prev) => (prev === key ? null : key));
  };

  const toggleMobileAccordion = (key: string) => {
    setMobileAccordion((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${isScrolled
        ? 'bg-slate-950/90 backdrop-blur-md border-b border-cyan-900/40 shadow-lg shadow-cyan-950/20 py-3'
        : 'bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Brand Logo */}
          <Link href="/#hero" className="flex items-center space-x-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-slate-900 border border-cyan-800/60 p-1 shadow-lg shadow-cyan-950/50 group-hover:border-cyan-400 transition-all overflow-hidden shrink-0">
              <img
                src="/logo.png"
                alt="Logo VTS Panjang"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5">
                <span className="font-bold text-lg tracking-wider text-white group-hover:text-cyan-400 transition-colors">
                  VTS PANJANG
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/50">
                  HUB LAUT
                </span>
              </div>
              <span className="text-xs text-slate-400 tracking-tight font-light hidden sm:inline-block">
                Distrik Navigasi Kelas I Panjang
              </span>
            </div>
          </Link>

          {/* Condensed Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm relative">

            {/* 1. Beranda */}
            <Link
              href="/#hero"
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-cyan-400 rounded-full hover:bg-slate-800/80 transition-all"
            >
              Beranda
            </Link>

            {/* 2. Profil & Stasiun Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('profil')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => toggleDropdown('profil')}
                className={`px-4 py-2 text-xs font-medium rounded-full transition-all flex items-center space-x-1.5 ${activeDropdown === 'profil'
                  ? 'text-cyan-400 bg-slate-800/90'
                  : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/80'
                  }`}
              >
                <span>Profil & Stasiun</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'profil' ? 'rotate-180 text-cyan-400' : 'text-slate-400'
                    }`}
                />
              </button>

              {/* Dropdown Menu Panel: Profil */}
              {activeDropdown === 'profil' && (
                <div
                  className="absolute top-full left-0 mt-3 w-72 rounded-2xl bg-slate-950/95 border border-cyan-900/50 shadow-2xl backdrop-blur-xl p-3 space-y-1 animate-fadeIn z-50"
                  onMouseEnter={() => handleMouseEnter('profil')}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href="/#about"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-slate-900/90 hover:border-slate-800 border border-transparent transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800/50 group-hover:scale-105 transition-transform shrink-0">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-cyan-300">Tentang Stasiun VTS</div>
                      <div className="text-[11px] text-slate-400">Visi, misi & alur Teluk Lampung</div>
                    </div>
                  </Link>

                  <Link
                    href="/struktur-organisasi"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-slate-900/90 hover:border-slate-800 border border-transparent transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800/50 group-hover:scale-105 transition-transform shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-cyan-300">Struktur Organisasi</div>
                      <div className="text-[11px] text-slate-400">Hirarki & regu jaga 24/7</div>
                    </div>
                  </Link>

                  <Link
                    href="/fasilitas"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-slate-900/90 hover:border-slate-800 border border-transparent transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800/50 group-hover:scale-105 transition-transform shrink-0">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-cyan-300">Fasilitas & Sarpras</div>
                      <div className="text-[11px] text-slate-400">Control Room, Menara & Server</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* 3. Layanan & WebGIS Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('layanan')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => toggleDropdown('layanan')}
                className={`px-4 py-2 text-xs font-medium rounded-full transition-all flex items-center space-x-1.5 ${activeDropdown === 'layanan'
                  ? 'text-cyan-400 bg-slate-800/90'
                  : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/80'
                  }`}
              >
                <span>Layanan & WebGIS</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'layanan' ? 'rotate-180 text-cyan-400' : 'text-slate-400'
                    }`}
                />
              </button>

              {/* Dropdown Menu Panel: Layanan */}
              {activeDropdown === 'layanan' && (
                <div
                  className="absolute top-full left-0 mt-3 w-80 rounded-2xl bg-slate-950/95 border border-cyan-900/50 shadow-2xl backdrop-blur-xl p-3 space-y-1 animate-fadeIn z-50"
                  onMouseEnter={() => handleMouseEnter('layanan')}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href="/#layanan"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-slate-900/90 border border-transparent hover:border-slate-800 transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800/50 group-hover:scale-105 transition-transform shrink-0">
                      <Info className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-cyan-300">Layanan Standar Internasional IALA</div>
                      <div className="text-[11px] text-slate-400">Pilar Layanan INS, TOS & NAS VTS</div>
                    </div>
                  </Link>

                  <Link
                    href="/#traffic"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-cyan-950/40 border border-cyan-900/40 transition-all group bg-slate-900/50"
                  >
                    <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 group-hover:scale-105 transition-transform shrink-0">
                      <RadioTower className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-cyan-300 group-hover:text-cyan-200">Peta Perairan WebGIS</div>
                      <div className="text-[11px] text-slate-400">Peta & Lokasi Stasiun Sensor Radar</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* 4. Kontak */}
            <Link
              href="/#kontak"
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-cyan-400 rounded-full hover:bg-slate-800/80 transition-all"
            >
              Kontak
            </Link>

          </nav>

          {/* Emergency Alert Indicator & Mobile Toggle */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-full bg-red-950/40 border border-red-800/50 text-red-400 text-xs font-mono">
              <ShieldAlert className="w-3.5 h-3.5 animate-pulse text-red-500" />
              <span>VHF CH 16 / 12</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Accordion Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-cyan-900/40 px-4 pt-3 pb-6 mt-3 space-y-2 animate-fadeIn max-h-[80vh] overflow-y-auto">

          <Link
            href="/#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900/80"
          >
            Beranda
          </Link>

          {/* Accordion: Profil & Stasiun */}
          <div className="border-t border-slate-900 pt-2">
            <button
              onClick={() => toggleMobileAccordion('profil')}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900/80"
            >
              <span>Profil & Stasiun</span>
              <ChevronDown className={`w-4 h-4 text-cyan-400 transition-transform ${mobileAccordion.profil ? 'rotate-180' : ''}`} />
            </button>
            {mobileAccordion.profil && (
              <div className="pl-6 space-y-1.5 pt-1">
                <Link
                  href="/#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900"
                >
                  Tentang Stasiun VTS
                </Link>
                <Link
                  href="/struktur-organisasi"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900"
                >
                  Struktur Organisasi & Regu Jaga
                </Link>
                <Link
                  href="/fasilitas"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900"
                >
                  Fasilitas & Sarpras
                </Link>
              </div>
            )}
          </div>

          {/* Accordion: Layanan & WebGIS */}
          <div className="border-t border-slate-900 pt-2">
            <button
              onClick={() => toggleMobileAccordion('layanan')}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900/80"
            >
              <span>Layanan & WebGIS</span>
              <ChevronDown className={`w-4 h-4 text-cyan-400 transition-transform ${mobileAccordion.layanan ? 'rotate-180' : ''}`} />
            </button>
            {mobileAccordion.layanan && (
              <div className="pl-6 space-y-1.5 pt-1">
                <Link
                  href="/#layanan"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900"
                >
                  Layanan Standar Internasional IALA
                </Link>
                <Link
                  href="/#traffic"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900"
                >
                  Peta Perairan WebGIS
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/#kontak"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900/80 border-t border-slate-900 pt-2"
          >
            Kontak
          </Link>

          <div className="pt-3">
            <div className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-red-950/60 border border-red-800/60 text-red-300 text-xs font-mono">
              <ShieldAlert className="w-4 h-4 animate-pulse text-red-500" />
              <span>EMERGENCY VHF CH 16 (156.800 MHz)</span>
            </div>
          </div>

        </div>
      )}
    </header>
  );
}
