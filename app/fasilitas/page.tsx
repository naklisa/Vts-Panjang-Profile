'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Monitor,
  Server,
  Building2,
  Users,
  ArrowLeft,
  ShieldCheck,
  Zap,
  Eye,
  X,
  Maximize2,
  Camera,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface PhotoItem {
  url: string;
  caption: string;
  tag: string;
}

interface Facility {
  id: number;
  title: string;
  category: string;
  icon: React.ElementType;
  status: string;
  desc: string;
  specs: string[];
  location: string;
  photos: PhotoItem[];
}

export default function FasilitasPage() {
  // State for active photo per facility card (default index 0)
  const [activePhotoIndexes, setActivePhotoIndexes] = useState<{ [key: number]: number }>({});

  // State for Fullscreen Lightbox Modal
  const [lightbox, setLightbox] = useState<{
    facilityTitle: string;
    photos: PhotoItem[];
    currentIndex: number;
  } | null>(null);

  const facilities: Facility[] = [
    {
      id: 1,
      title: 'Ruang Admin',
      category: 'Administrasi',
      icon: Building2,
      status: 'ACTIVE WORK HOURS',
      desc: 'Pusat pelayanan administrasi publik maritim, pengelolaan dokumen operasional, koordinasi instalasi, serta penerimaan tamu kedinasan.',
      specs: [
        'Ruang Kerja Pejabat & Staff Administrasi',
        'Layanan Informasi & Arsip Maritim',
        'Pusat Rekonsiliasi PNBP VTS',
        'Pusat Dokumentasi & Logbook VTS',
      ],
      location: 'Gedung VTS Utama',
      photos: [
        {
          url: '/images/fasilitas/Admin1.jpg',
          caption: 'Ruang Kerja & Pelayanan Administrasi VTS',
          tag: 'CAM 01 - ADMIN DESK',
        },
        {
          url: '/images/fasilitas/Admin2.jpg',
          caption: 'Fasilitas Layanan & Dokumentasi Surat VTS',
          tag: 'CAM 02 - ADMIN OFFICE',
        },
        {
          url: '/images/fasilitas/Admin3.jpg',
          caption: 'Area Kerja Staf & Arsip Logbook Maritim',
          tag: 'CAM 03 - ARCHIVE & WORKSPACE',
        },
      ],
    },
    {
      id: 2,
      title: 'Ruang Operator VTS',
      category: 'Operasional Utama',
      icon: Monitor,
      status: 'OPERATIONAL 24/7',
      desc: 'Pusat komando pemantauan lalu lintas pelayaran yang dilengkapi konsol operator multi-monitor 4K, integrasi peta GIS maritim, radar display, serta perangkat radio VHF komunikasi maritim.',
      specs: [
        '3 Console Operator Workstation',
        'Multi-Display Video Wall 55"',
        'Dual Redundant VHF Transceiver',
        'Integrated AIS Base Station Display',
      ],
      location: 'Lantai 2 Gedung VTS Utama',
      photos: [
        {
          url: '/images/fasilitas/Operator_Room1.jpg',
          caption: 'Konsol Multi-Monitor 4K Operator VTS Panjang',
          tag: 'CAM 01 - MAIN CONSOLE',
        },
        {
          url: '/images/fasilitas/Operator_Room2.jpg',
          caption: 'Video Wall Display Real-Time AIS & Radar',
          tag: 'CAM 02 - VIDEO WALL',
        },
        {
          url: '/images/fasilitas/Operator_Room3.jpg',
          caption: 'Stasiun Kerja Radio Komunikasi VHF Maritim',
          tag: 'CAM 03 - VHF DISPATCH',
        },
      ],
    },
    {
      id: 3,
      title: 'Ruang Server',
      category: 'Infrastruktur IT',
      icon: Server,
      status: 'HIGH SECURITY',
      desc: 'Ruang peladen berpendingin presisi yang memproses rekaman data AIS, log historis pergerakan kapal, pemrosesan sinyal radar, serta penyimpan data log komunikasi radio maritim.',
      specs: [
        'Tier-2 Data Center Standard',
        'Precision Air Conditioning (PAC)',
        'Automated FM200 Gas Suppression',
        '20 KVA Dual Redundant UPS System',
      ],
      location: 'Lantai 1 Gedung VTS Utama',
      photos: [
        {
          url: '/images/fasilitas/Server_Room.jpg',
          caption: 'Rak Peladen & Data Storage AIS Telemetri',
          tag: 'CAM 01 - SERVER RACKS',
        },
        {
          url: '/images/fasilitas/Server_Room2.jpg',
          caption: 'Sistem Pendingin Presisi PAC & FM200 Gas',
          tag: 'CAM 02 - PAC COOLING',
        },
        {
          url: '/images/fasilitas/Server_Room3.jpg',
          caption: 'Catu Daya Redundan Dual UPS 20 KVA',
          tag: 'CAM 03 - DUAL UPS',
        },
      ],
    },
    {
      id: 4,
      title: 'Ruang Rapat',
      category: 'Koordinasi',
      icon: Users,
      status: 'Meeting Room',
      desc: 'Fasilitas rapat interaktif yang digunakan untuk koordinasi SAR Maritim, briefing pergantian shift regu jaga, simulasi keadaan darurat, dan rapat evaluasi alur pelayaran.',
      specs: [
        'Interactive Smart Board 86"',
        'Video Conference Polycom System',
        'Kapasitas 15-20 Orang',
        'Akses Data GIS Pelayaran Real-Time',
      ],
      location: 'Lantai 2 Gedung VTS Utama',
      photos: [
        {
          url: '/images/fasilitas/Meeting_Room.jpg',
          caption: 'Smart Board Interaktif & Briefing VTS',
          tag: 'CAM 01 - SMARTBOARD',
        },
        {
          url: '/images/fasilitas/Meeting_Room2.jpg',
          caption: 'Ruang Rapat Koordinasi SAR Maritim & Instansi',
          tag: 'CAM 02 - CONFERENCE',
        },
        {
          url: '/images/fasilitas/Meeting_Room3.jpg',
          caption: 'Konsul Evaluasi Pergantian Shift Regu Jaga',
          tag: 'CAM 03 - HANDOVER DESK',
        },
      ],
    },
  ];

  // Close lightbox modal handlers for ESC key, mobile back button, and body scroll lock
  useEffect(() => {
    if (!lightbox) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') nextLightboxPhoto();
      if (e.key === 'ArrowLeft') prevLightboxPhoto();
    };

    const handlePopState = () => {
      setLightbox(null);
    };

    window.history.pushState({ modalOpen: true }, '');
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('popstate', handlePopState);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('popstate', handlePopState);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  const handleSelectPhoto = (facilityId: number, index: number) => {
    setActivePhotoIndexes((prev) => ({ ...prev, [facilityId]: index }));
  };

  const openLightbox = (facilityTitle: string, photos: PhotoItem[], startIndex: number) => {
    setLightbox({
      facilityTitle,
      photos,
      currentIndex: startIndex,
    });
  };

  const nextLightboxPhoto = () => {
    if (!lightbox) return;
    setLightbox({
      ...lightbox,
      currentIndex: (lightbox.currentIndex + 1) % lightbox.photos.length,
    });
  };

  const prevLightboxPhoto = () => {
    if (!lightbox) return;
    setLightbox({
      ...lightbox,
      currentIndex: (lightbox.currentIndex - 1 + lightbox.photos.length) % lightbox.photos.length,
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-28 pb-20 text-slate-100">
      {/* Top Banner Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/#hero"
          className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Kembali ke Beranda</span>
        </Link>

        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Fasilitas Operasional Stasiun VTS Panjang
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Dokumentasi foto lengkap sarana dan prasarana canggih Stasiun VTS Panjang. Setiap fasilitas dilengkapi 3 foto dokumentasi operasional 24/7.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((facility) => {
            const IconComp = facility.icon;
            const currentPhotoIdx = activePhotoIndexes[facility.id] ?? 0;
            const activePhoto = facility.photos[currentPhotoIdx];

            return (
              <div
                key={facility.id}
                className="rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/40 group relative overflow-hidden"
              >
                <div>
                  {/* Photo Display Card Header */}
                  <div className="relative aspect-video w-full bg-slate-950 overflow-hidden group/img">
                    <img
                      src={activePhoto.url}
                      alt={activePhoto.caption}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/40 pointer-events-none"></div>

                    {/* Camera Tag Badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-cyan-800/60 text-[10px] font-mono text-cyan-400 font-bold flex items-center space-x-1.5">
                      <Camera className="w-3 h-3 text-cyan-400" />
                      <span>{activePhoto.tag}</span>
                    </div>

                    {/* Fullscreen Expand Button */}
                    <button
                      onClick={() => openLightbox(facility.title, facility.photos, currentPhotoIdx)}
                      className="absolute top-3 right-3 p-2 rounded-xl bg-slate-950/80 backdrop-blur-md border border-cyan-800/60 text-slate-300 hover:text-cyan-300 hover:bg-slate-900 transition-all opacity-80 group-hover/img:opacity-100"
                      title="Perbesar Foto (Lightbox)"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>

                    {/* Caption Overlay at bottom of image */}
                    <div className="absolute bottom-2 left-3 right-3 text-[11px] font-mono text-slate-200 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-800 truncate">
                      {activePhoto.caption}
                    </div>
                  </div>

                  {/* 3 Photo Thumbnails Switcher */}
                  <div className="p-4 bg-slate-950/60 border-b border-slate-800 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center space-x-1">
                      <Eye className="w-3 h-3 text-cyan-400" />
                      <span>FOTO ({currentPhotoIdx + 1}/3):</span>
                    </span>

                    <div className="flex items-center space-x-2">
                      {facility.photos.map((photo, pIdx) => (
                        <button
                          key={pIdx}
                          onClick={() => handleSelectPhoto(facility.id, pIdx)}
                          className={`relative w-12 h-8 rounded-lg overflow-hidden border transition-all ${currentPhotoIdx === pIdx
                            ? 'border-cyan-400 ring-2 ring-cyan-500/30 scale-105'
                            : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600'
                            }`}
                        >
                          <img
                            src={photo.url}
                            alt={photo.caption}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    {/* Top Status & Category */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800/50">
                        {facility.category}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 flex items-center space-x-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>{facility.status}</span>
                      </span>
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/40 group-hover:scale-105 transition-all shrink-0">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {facility.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-300 leading-relaxed mb-6">
                      {facility.desc}
                    </p>

                    {/* Tech Specs */}
                    <div className="space-y-2 mb-6">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                        Spesifikasi Peralatan:
                      </span>
                      {facility.specs.map((spec, i) => (
                        <div
                          key={i}
                          className="flex items-start space-x-2 text-xs text-slate-300 bg-slate-950/60 p-2 rounded-xl border border-slate-800/60"
                        >
                          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Info */}
                <div className="px-6 py-4 bg-slate-950/40 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>LOKASI: {facility.location}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {lightbox && (
          <div
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-4 bg-slate-950/90 backdrop-blur-xl animate-fadeIn overflow-y-auto"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[85vh] flex flex-col bg-slate-900 border border-cyan-500/40 rounded-3xl overflow-hidden shadow-2xl my-auto"
            >
              {/* Header Modal */}
              <div className="flex items-center justify-between p-4 sm:p-5 bg-slate-950 border-b border-slate-800 shrink-0">
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-bold">DOKUMENTASI FOTO FASILITAS</span>
                  <h3 className="text-base sm:text-lg font-bold text-white">{lightbox.facilityTitle}</h3>
                </div>
                <button
                  onClick={() => setLightbox(null)}
                  className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Main Image Display */}
              <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden flex-1 min-h-0">
                <img
                  src={lightbox.photos[lightbox.currentIndex].url}
                  alt={lightbox.photos[lightbox.currentIndex].caption}
                  className="max-h-full max-w-full object-contain"
                />

                {/* Prev & Next Buttons */}
                <button
                  onClick={prevLightboxPhoto}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-2xl bg-slate-950/80 border border-cyan-800/60 text-white hover:text-cyan-400 hover:bg-slate-900 transition-all shadow-xl"
                  title="Foto Sebelumnya"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={nextLightboxPhoto}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-2xl bg-slate-950/80 border border-cyan-800/60 text-white hover:text-cyan-400 hover:bg-slate-900 transition-all shadow-xl"
                  title="Foto Selanjutnya"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* Camera Badge Overlay */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/80 border border-cyan-800/60 text-[11px] font-mono text-cyan-400 font-bold">
                  {lightbox.photos[lightbox.currentIndex].tag}
                </div>
              </div>

              {/* Footer Caption & Thumbnail Strip */}
              <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
                <div className="text-left space-y-0.5">
                  <p className="text-xs sm:text-sm font-bold text-white">
                    {lightbox.photos[lightbox.currentIndex].caption}
                  </p>
                  <p className="text-[11px] font-mono text-slate-400">
                    Foto {lightbox.currentIndex + 1} dari {lightbox.photos.length}
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  {lightbox.photos.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => setLightbox({ ...lightbox, currentIndex: idx })}
                      className={`relative w-14 h-9 sm:w-16 sm:h-10 rounded-lg overflow-hidden border transition-all ${lightbox.currentIndex === idx
                        ? 'border-cyan-400 ring-2 ring-cyan-500/40 scale-105'
                        : 'border-slate-800 opacity-50 hover:opacity-100'
                        }`}
                    >
                      <img src={p.url} alt={p.caption} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

