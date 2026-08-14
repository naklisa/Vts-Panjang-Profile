'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Monitor,
  Server,
  Radio,
  Building2,
  Users,
  Coffee,
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
      title: 'Control Room 24/7 (Ruang Operasi VTS)',
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
          url: '/images/fasilitas/control-room-1.svg',
          caption: 'Konsol Multi-Monitor 4K Operator VTS Panjang',
          tag: 'CAM 01 - MAIN CONSOLE',
        },
        {
          url: '/images/fasilitas/control-room-2.svg',
          caption: 'Video Wall Display 55" Real-Time AIS & Radar',
          tag: 'CAM 02 - VIDEO WALL',
        },
        {
          url: '/images/fasilitas/control-room-3.svg',
          caption: 'Stasiun Kerja Radio Komunikasi VHF Maritim',
          tag: 'CAM 03 - VHF DISPATCH',
        },
      ],
    },
    {
      id: 2,
      title: 'Server Room & Data Center',
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
          url: '/images/fasilitas/server-room-1.svg',
          caption: 'Rak Peladen & Data Storage AIS Telemetri',
          tag: 'CAM 01 - SERVER RACKS',
        },
        {
          url: '/images/fasilitas/server-room-2.svg',
          caption: 'Sistem Pendingin Presisi PAC & FM200 Gas',
          tag: 'CAM 02 - PAC COOLING',
        },
        {
          url: '/images/fasilitas/server-room-3.svg',
          caption: 'Catu Daya Redundan Dual UPS 20 KVA',
          tag: 'CAM 03 - DUAL UPS',
        },
      ],
    },
    {
      id: 3,
      title: 'Menara Radar & Sensor Array Substation',
      category: 'Sensor & Transmitter',
      icon: Radio,
      status: 'ONLINE 24/7',
      desc: 'Menara struktur baja setinggi 45 meter yang menopang pemancar Radar Maritim Dual Band (X & S Band), antena VHF Direction Finder, sensor cuaca otomatis, dan kamera CCTV HD Long-Range.',
      specs: [
        'Height: 45 Meters Lattice Tower',
        'X-Band & S-Band Marine Radar Antennas',
        'Automatic Weather Station (AWS)',
        'Pan-Tilt-Zoom Thermal & Night Vision CCTV',
      ],
      location: 'Area Substation Bukit Stasiun Panjang',
      photos: [
        {
          url: '/images/fasilitas/radar-tower-1.svg',
          caption: 'Menara Lattice 45 Meter & Radar Dual Band',
          tag: 'CAM 01 - RADAR TOWER',
        },
        {
          url: '/images/fasilitas/radar-tower-2.svg',
          caption: 'Antena Radar Maritim Band X & Band S',
          tag: 'CAM 02 - RADAR ANTENNA',
        },
        {
          url: '/images/fasilitas/radar-tower-3.svg',
          caption: 'Sensor Meteorologi AWS & Kamera Thermal CCTV',
          tag: 'CAM 03 - AWS & CCTV',
        },
      ],
    },
    {
      id: 4,
      title: 'Gedung Kantor Utama Administrasi',
      category: 'Administrasi',
      icon: Building2,
      status: 'ACTIVE WORK HOURS',
      desc: 'Pusat pelayanan administrasi publik maritim, pengelolaan sertifikasi operator, koordinasi dengan Kantor Distrik Navigasi Kelas I Panjang, serta penerimaan tamu kedinasan.',
      specs: [
        'Ruang Kerja Pejabat Operasional',
        'Layanan Informasi Publik Maritim',
        'Akses Jaringan Terenkripsi',
        'Pusat Dokumentasi & Logbook VTS',
      ],
      location: 'Gedung Depan Stasiun VTS',
      photos: [
        {
          url: '/images/fasilitas/gedung-utama-1.svg',
          caption: 'Fasad Depan Gedung Stasiun VTS Panjang',
          tag: 'CAM 01 - MAIN FACADE',
        },
        {
          url: '/images/fasilitas/gedung-utama-2.svg',
          caption: 'Layanan Informasi Publik & Pelayanan Maritim',
          tag: 'CAM 02 - SERVICE DESK',
        },
        {
          url: '/images/fasilitas/gedung-utama-3.svg',
          caption: 'Pusat Dokumentasi & Logbook Resmi VTS',
          tag: 'CAM 03 - ARCHIVE ROOM',
        },
      ],
    },
    {
      id: 5,
      title: 'Ruang Rapat & Briefing Operasional',
      category: 'Koordinasi',
      icon: Users,
      status: 'AVAILABLE',
      desc: 'Fasilitas rapat interaktif yang digunakan untuk koordinasi SAR Maritim, briefing pergantian shift regu jaga, simulasi keadaan darurat, dan rapat evaluasi alur pelayaran.',
      specs: [
        'Interactive Smart Board 86"',
        'Video Conference Polycom System',
        'Kapasitas 30 Personel',
        'Akses Data GIS Pelayaran Real-Time',
      ],
      location: 'Lantai 2 Gedung VTS Utama',
      photos: [
        {
          url: '/images/fasilitas/ruang-rapat-1.svg',
          caption: 'Smart Board Interaktif 86" Briefing VTS',
          tag: 'CAM 01 - SMARTBOARD',
        },
        {
          url: '/images/fasilitas/ruang-rapat-2.svg',
          caption: 'Ruang Rapat Koordinasi SAR Maritim & Instansi',
          tag: 'CAM 02 - CONFERENCE',
        },
        {
          url: '/images/fasilitas/ruang-rapat-3.svg',
          caption: 'Konsul Evaluasi Pergantian Shift Regu Jaga',
          tag: 'CAM 03 - HANDOVER DESK',
        },
      ],
    },
    {
      id: 6,
      title: 'Ruang Istirahat Operator & Lounge Crew',
      category: 'Fasilitas Personel',
      icon: Coffee,
      status: '24/7 COMFORT',
      desc: 'Fasilitas rehat khusus bagi operator dan teknisi selama menjalankan tugas jaga siaga 24 jam berturut-turut demi menjaga fokus dan kebugaran staf operasional.',
      specs: [
        'Kamar Tidur Petugas Jaga Malam',
        'Pantry & Coffee Station',
        'Locker Room & Kamar Mandi',
        'Ruang Santai & TV Monitoring',
      ],
      location: 'Lantai 1 Gedung VTS Sayap Timur',
      photos: [
        {
          url: '/images/fasilitas/lounge-crew-1.svg',
          caption: 'Kamar Rehat & Tidur Petugas Jaga Malam',
          tag: 'CAM 01 - REST QUARTERS',
        },
        {
          url: '/images/fasilitas/lounge-crew-2.svg',
          caption: 'Pantry Stasiun & Automatic Coffee Station',
          tag: 'CAM 02 - PANTRY AREA',
        },
        {
          url: '/images/fasilitas/lounge-crew-3.svg',
          caption: 'Ruang Santai Lounge & TV Stream CCTV Security',
          tag: 'CAM 03 - CREW LOUNGE',
        },
      ],
    },
  ];

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

        <div className="text-left max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 text-xs font-mono mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>SARANA & PRASARANA CANGGIH (DOKUMENTASI FOTO REGULER)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Fasilitas Operasional Stasiun VTS Panjang
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Dokumentasi foto lengkap sarana dan prasarana canggih Stasiun VTS Panjang. Setiap fasilitas dilengkapi 3 foto dokumentasi operasional 24/7.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                          className={`relative w-12 h-8 rounded-lg overflow-hidden border transition-all ${
                            currentPhotoIdx === pIdx
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-fadeIn">
            <div className="relative max-w-4xl w-full bg-slate-900 border border-cyan-500/40 rounded-3xl overflow-hidden shadow-2xl">
              {/* Header Modal */}
              <div className="flex items-center justify-between p-4 sm:p-6 bg-slate-950 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-bold">DOKUMENTASI FOTO FASILITAS</span>
                  <h3 className="text-lg font-bold text-white">{lightbox.facilityTitle}</h3>
                </div>
                <button
                  onClick={() => setLightbox(null)}
                  className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Main Image Display */}
              <div className="relative aspect-video w-full bg-black flex items-center justify-center">
                <img
                  src={lightbox.photos[lightbox.currentIndex].url}
                  alt={lightbox.photos[lightbox.currentIndex].caption}
                  className="max-h-[60vh] w-full object-contain"
                />

                {/* Prev & Next Buttons */}
                <button
                  onClick={prevLightboxPhoto}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-2xl bg-slate-950/80 border border-cyan-800/60 text-white hover:text-cyan-400 hover:bg-slate-900 transition-all shadow-xl"
                  title="Foto Sebelumnya"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextLightboxPhoto}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-2xl bg-slate-950/80 border border-cyan-800/60 text-white hover:text-cyan-400 hover:bg-slate-900 transition-all shadow-xl"
                  title="Foto Selanjutnya"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Camera Badge Overlay */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-slate-950/80 border border-cyan-800/60 text-xs font-mono text-cyan-400 font-bold">
                  {lightbox.photos[lightbox.currentIndex].tag}
                </div>
              </div>

              {/* Footer Caption & Thumbnail Strip */}
              <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left space-y-1">
                  <p className="text-sm font-bold text-white">
                    {lightbox.photos[lightbox.currentIndex].caption}
                  </p>
                  <p className="text-xs font-mono text-slate-400">
                    Foto {lightbox.currentIndex + 1} dari {lightbox.photos.length}
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  {lightbox.photos.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => setLightbox({ ...lightbox, currentIndex: idx })}
                      className={`relative w-16 h-10 rounded-lg overflow-hidden border transition-all ${
                        lightbox.currentIndex === idx
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

        {/* Bottom CTA Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950 border border-cyan-900/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Butuh Informasi Kunjungan Kedinasan?</h3>
            <p className="text-xs text-slate-300 mt-1">
              Kontak Kantor Distrik Navigasi Kelas I Panjang untuk prosedur studi banding atau kunjungan operasional.
            </p>
          </div>
          <Link
            href="/#kontak"
            className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors shrink-0"
          >
            Hubungi Kontak Resmi
          </Link>
        </div>
      </div>
    </div>
  );
}

