'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, UserCheck, Shield, Radio, Wrench, FileText, ChevronDown, Award, Clock, Users } from 'lucide-react';

export default function StrukturOrganisasiPage() {
  const shifts = [
    { name: 'Regu A Operasional', status: 'ON DUTY SHIFT PAGI', hours: '08.00 - 16.00 WIB', leader: 'Supervisor Jaga A' },
    { name: 'Regu B Operasional', status: 'ON DUTY SHIFT SORE', hours: '16.00 - 00.00 WIB', leader: 'Supervisor Jaga B' },
    { name: 'Regu C Operasional', status: 'ON DUTY SHIFT MALAM', hours: '00.00 - 08.00 WIB', leader: 'Supervisor Jaga C' },
    { name: 'Regu D Cadangan', status: 'STANDBY / OFF DUTY', hours: 'Rotasi Istirahat', leader: 'Supervisor Jaga D' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-28 pb-20 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          href="/#hero"
          className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </Link>

        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 text-xs font-mono mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>HIERARKI & TATA KELOLA OPERASIONAL</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Struktur Organisasi Stasiun VTS Panjang
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Bagan hirarki kepemimpinan, unit kerja operasional 24/7, tim pemeliharaan teknik, dan unit administrasi di bawah Distrik Navigasi Kelas I Panjang.
          </p>
        </div>

        {/* ORGANIZATIONAL CHART (Visual Cards Tree) */}
        <div className="space-y-8 relative">
          
          {/* Level 1: Head of Station / Head of Disnav */}
          <div className="flex justify-center">
            <div className="w-full max-w-lg p-6 rounded-3xl bg-gradient-to-b from-cyan-950 to-slate-900 border-2 border-cyan-500/60 shadow-2xl shadow-cyan-950/60 text-center relative group">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-400 mx-auto flex items-center justify-center text-cyan-300 mb-3 shadow-lg shadow-cyan-500/30">
                <Shield className="w-8 h-8" />
              </div>
              <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-widest bg-slate-950 px-3 py-1 rounded-full border border-cyan-800">
                TOP MANAGEMENT
              </span>
              <h2 className="text-xl font-bold text-white mt-3">Kepala Stasiun VTS Panjang</h2>
              <p className="text-xs text-cyan-300 font-mono mt-1">Distrik Navigasi Kelas I Panjang</p>
              <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                Penanggung jawab tertinggi atas kebijakan operasional VTS, ketaatan standar IALA, serta koordinasi keselamatan pelayaran internasional.
              </p>
            </div>
          </div>

          {/* Vertical Connector Line */}
          <div className="w-0.5 h-10 bg-cyan-500/50 mx-auto"></div>

          {/* Level 2: Three Main Operational Units */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            
            {/* Unit 1: Operasional & Telekomunikasi 24/7 */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 transition-all space-y-4 text-left relative">
              <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-cyan-800 flex items-center justify-center text-cyan-400">
                <Radio className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider bg-cyan-950 px-2.5 py-0.5 rounded border border-cyan-800">
                UNIT UTAMA 24/7
              </span>
              <h3 className="text-lg font-bold text-white">Unit Operasional & Telekomunikasi Pelayaran</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Bertanggung jawab langsung atas pengawasan gerak kapal, komunikasi VHF maritim, pemberian clearance pelayaran, serta pengoperasian konsol VTS 24 jam nonstop.
              </p>
              <div className="pt-2 border-t border-slate-800 space-y-1 text-xs text-slate-400">
                <div className="flex items-center space-x-2">
                  <Award className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Kualifikasi: Sertifikat IALA V-103/1 Operator</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Supervisor: Sertifikat IALA V-103/2 Supervisor</span>
                </div>
              </div>
            </div>

            {/* Unit 2: Pemeliharaan Sarana & Prasarana Teknik */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 transition-all space-y-4 text-left relative">
              <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-cyan-800 flex items-center justify-center text-cyan-400">
                <Wrench className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider bg-emerald-950 px-2.5 py-0.5 rounded border border-emerald-800">
                UNIT TEKNIK & MAINTENANCE
              </span>
              <h3 className="text-lg font-bold text-white">Unit Pemeliharaan Sarana & Prasarana</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Menjamin keandalan perangkat keras radar maritim, sistem antena VHF, sensor AIS, catu daya UPS/Genset, dan infrastruktur IT server stasiun.
              </p>
              <div className="pt-2 border-t border-slate-800 space-y-1 text-xs text-slate-400">
                <div className="flex items-center space-x-2">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Teknisi Radar Maritim & AIS Master</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Teknisi Radio Komunikasi & Network System</span>
                </div>
              </div>
            </div>

            {/* Unit 3: Administrasi & Pengolahan Data Maritim */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 transition-all space-y-4 text-left relative">
              <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-cyan-800 flex items-center justify-center text-cyan-400">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider bg-amber-950 px-2.5 py-0.5 rounded border border-amber-800">
                UNIT DATA & ADMIN
              </span>
              <h3 className="text-lg font-bold text-white">Unit Administrasi & Pengolahan Data</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Mengelola log historis pelayaran, arsip rekaman suara VHF, statistik arus kapal bulanan, surat izin masuk pelabuhan, serta laporan berkala ke Ditjen Hubla.
              </p>
              <div className="pt-2 border-t border-slate-800 space-y-1 text-xs text-slate-400">
                <div className="flex items-center space-x-2">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Analis Data Pelayaran & Statistik Maritim</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Pengelola Pelaporan & Dokumentasi Resmi</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* SHIFT ROSTER SECTION (Regu Jaga 24/7) */}
        <div className="mt-20">
          <div className="flex items-center space-x-3 mb-6">
            <Clock className="w-6 h-6 text-cyan-400" />
            <h2 className="text-2xl font-bold text-white">Sistem Rotasi Regu Jaga Operasional (24/7 Shift Roster)</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {shifts.map((shift, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all space-y-2">
                <div className="flex justify-between items-center text-xs font-mono text-cyan-400 font-bold">
                  <span>REGU 0{idx + 1}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                    {shift.status}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white">{shift.name}</h4>
                <p className="text-xs text-slate-400 font-mono">JAM OPERASI: {shift.hours}</p>
                <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-300 flex items-center justify-between">
                  <span>PJ SHIFT:</span>
                  <span className="font-semibold text-cyan-300">{shift.leader}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
