'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, UserCheck, Shield, Radio, Wrench, FileText, ChevronDown, Award, Clock, Users, Building, Landmark, User } from 'lucide-react';

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
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          {/* Badge Hirarki */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
            <span>HIRARKI RESMI VTS</span>
          </div>

          {/* Judul H1 */}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Struktur Organisasi UPT VTS Panjang
          </h1>

          {/* Paragraf Deskripsi */}
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Bagan hierarki kepemimpinan mulai dari National Competence Authority (Ditjen Hubla), VTS Authority (Disnav Tanjung Priok), VTS Manager Panjang, hingga Supervisor & Operator pelaksana 24/7.
          </p>
        </div>

        {/* ORGANIZATIONAL CHART TREE (MATCHING GAMBAR 2 PDF HALAMAN 6) */}
        <div className="space-y-6 relative max-w-5xl mx-auto">

          {/* Level 1: National Competence Authority */}
          <div className="w-full max-w-xl p-6 rounded-3xl bg-gradient-to-r from-blue-950 to-slate-900 border-2 border-blue-500/60 shadow-2xl text-center relative z-10 mx-auto">
            <h2 className="text-xl font-bold text-white">VTS – National Competence Authority</h2>
            <p className="text-xs text-blue-300 font-mono mt-1">Direktur Jenderal Perhubungan Laut</p>
            <p className="text-xs text-slate-300 mt-2">
              Otoritas nasional tertinggi pemegang kebijakan dan regulasi VTS di Indonesia.
            </p>
          </div>

          {/* Penghubung: Garis Vertikal Tengah + Cabang Staf (Pembina Teknis) */}
          <div className="relative w-full flex justify-center items-center h-44 my-0">
            {/* Garis Vertikal Utama Pas di Tengah */}
            <div className="w-0.5 h-full bg-cyan-500/50"></div>

            {/* Cabang Horizontal: Start pas dari garis tengah ke kanan */}
            <div className="absolute left-1/2 flex items-center pointer-events-auto">
              {/* Garis Horizontal */}
              <div className="w-20 md:w-36 h-0.5 bg-cyan-500/50"></div>

              {/* Card Pembina Teknis (Sepenuhnya di sebelah kanan garis utama) */}
              <div className="w-64 sm:w-72 p-4 rounded-2xl bg-slate-900 border border-slate-800 text-left shadow-2xl shrink-0">
                <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider bg-slate-950 px-2 py-0.5 rounded border border-cyan-800/50">
                  PEMBINA TEKNIS
                </span>
                <h3 className="text-sm font-bold text-white mt-1.5">Direktur Kenavigasian</h3>
                <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                  Pembinaan teknis operasional & sarpras navigasi maritim.
                </p>
              </div>
            </div>
          </div>

          {/* Level 2: VTS Authority */}
          <div className="w-full max-w-xl p-6 rounded-3xl bg-slate-900/90 border-2 border-cyan-500/50 text-center shadow-xl relative z-10 mx-auto">
            <h2 className="text-lg font-bold text-white">VTS Authority</h2>
            <p className="text-xs text-cyan-300 font-mono mt-0.5">Kepala Distrik Navigasi Tanjung Priok</p>
            <p className="text-xs text-slate-300 mt-2">
              Pengawas langsung operasional UPT VTS di wilayah kerjanya, termasuk UPT VTS Panjang.
            </p>
          </div>

          {/* Vertical Connector Line */}
          <div className="w-0.5 h-8 bg-cyan-500/50 mx-auto"></div>

          {/* Level 2: VTS Authority */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl p-6 rounded-3xl bg-slate-900/90 border-2 border-cyan-500/50 text-center shadow-xl">
              <h2 className="text-lg font-bold text-white mt-2">VTS Authority</h2>
              <p className="text-xs text-cyan-300 font-mono mt-0.5">Kepala Distrik Navigasi Tanjung Priok</p>
              <p className="text-xs text-slate-300 mt-2">
                Pengawas langsung operasional UPT VTS di wilayah kerjanya, termasuk UPT VTS Panjang.
              </p>
            </div>
          </div>

          {/* Vertical Connector Line */}
          <div className="w-0.5 h-8 bg-cyan-500/50 mx-auto"></div>

          {/* Level 3: VTS Manager Panjang */}
          <div className="flex justify-center">
            <div className="w-full max-w-xl p-6 rounded-3xl bg-gradient-to-b from-cyan-950 to-slate-900 border-2 border-cyan-400 text-center shadow-2xl">
              <h2 className="text-xl font-bold text-white mt-2">VTS Manager Panjang</h2>
              <p className="text-xs text-slate-300 mt-2">
                Bertanggung jawab atas pengelolaan & pengendalian seluruh kegiatan VTS di wilayah kerja Panjang.
              </p>
            </div>
          </div>

          {/* Vertical Connector Line */}
          <div className="w-0.5 h-8 bg-cyan-500/50 mx-auto"></div>

          {/* Level 4: VTS Supervisor (3 Boxes di PDF) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-1">
              <span className="text-[13px] font-mono text-cyan-400 font-bold uppercase bg-slate-950 px-2 py-0.5 rounded border border-cyan-800">VTS Supervisor</span>
              <p className="text-[11px] text-slate-400">Pengawasan operasional jaga (Sertifikat IALA V-103/2)</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-1">
              <span className="text-[13px] font-mono text-cyan-400 font-bold uppercase bg-slate-950 px-2 py-0.5 rounded border border-cyan-800">VTS Supervisor</span>
              <p className="text-[11px] text-slate-400">Pengawasan operasional jaga (Sertifikat IALA V-103/2)</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-1">
              <span className="text-[13px] font-mono text-cyan-400 font-bold uppercase bg-slate-950 px-2 py-0.5 rounded border border-cyan-800">VTS Supervisor</span>
              <p className="text-[11px] text-slate-400">Pengawasan operasional jaga (Sertifikat IALA V-103/2)</p>
            </div>
          </div>

          {/* Vertical Connector Line */}
          <div className="w-0.5 h-6 bg-cyan-500/50 mx-auto"></div>

          {/* Level 5: VTS Operator (3 Boxes di PDF) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-950 border border-cyan-900/60 text-center space-y-1">
              <span className="text-[13px] font-mono text-emerald-400 font-bold uppercase bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">VTS Operator</span>
              <p className="text-[10px] text-slate-400">Pemantauan kapal & VHF radio (Sertifikat IALA V-103/1)</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-950 border border-cyan-900/60 text-center space-y-1">
              <span className="text-[13px] font-mono text-emerald-400 font-bold uppercase bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">VTS Operator</span>
              <p className="text-[10px] text-slate-400">Pemantauan kapal & VHF radio (Sertifikat IALA V-103/1)</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-950 border border-cyan-900/60 text-center space-y-1">
              <span className="text-[13px] font-mono text-emerald-400 font-bold uppercase bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">VTS Operator</span>
              <p className="text-[10px] text-slate-400">Pemantauan kapal & VHF radio (Sertifikat IALA V-103/1)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

