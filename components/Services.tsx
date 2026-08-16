'use client';

import React, { useState, useEffect } from 'react';
import { Info, Shield, HelpCircle, ArrowRight, Check, Sparkles, X, Radio, AlertTriangle } from 'lucide-react';

export default function Services() {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  // Close modal handlers for ESC key, mobile back button, and body scroll lock
  useEffect(() => {
    if (activeModal === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModal(null);
    };

    const handlePopState = () => {
      setActiveModal(null);
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
  }, [activeModal]);

  const services = [
    {
      id: 1,
      code: 'INS',
      title: 'Information Service',
      indonesianTitle: 'Layanan Informasi Pelayaran',
      icon: Info,
      color: 'from-cyan-500 to-blue-600',
      badgeColor: 'bg-cyan-950 text-cyan-400 border-cyan-800/50',
      shortDesc:
        'Penyampaian informasi maritim esensial secara berkala dan tepat waktu kepada kapal yang berlayar di wilayah VTS Panjang.',
      details: [
        'Informasi kondisi cuaca pelayaran, kecepatan angin, gelombang, dan jarak pandang.',
        'Berita Pelaut (Notice to Mariners) mengenai perubahan Sarana Bantu Navigasi Pelayaran (SBNP).',
        'Peringatan dini bahaya navigasi, rintangan bawah air, atau perbaikan alur.',
        'Informasi posisi gerak kapal lain di alur lintasan yang sama.',
      ],
      ialadef: 'IALA Recommendation V-128: Provision of Information Services by VTS.',
    },
    {
      id: 2,
      code: 'TOS',
      title: 'Traffic Organization Service',
      indonesianTitle: 'Layanan Pengaturan Lalu Lintas Laut',
      icon: Shield,
      color: 'from-blue-600 to-indigo-600',
      badgeColor: 'bg-blue-950 text-blue-400 border-blue-800/50',
      shortDesc:
        'Pengelolaan dan perencanaan gerak kapal untuk mencegah kemacetan, persimpangan berbahaya, serta memprioritaskan alur laut sempit.',
      details: [
        'Pengaturan jadwal alur masuk dan keluar kapal di Pelabuhan Panjang.',
        'Penetapan zona dan batas area labuh jangkar (Anchorage Area Allocation).',
        'Pengawasan jarak aman antar kapal (clearance spacing) di alur sempit Teluk Lampung.',
        'Pemberian ijin olah gerak kapal (VTS Clearance) sebelum melintasi alur utama.',
      ],
      ialadef: 'IALA Guideline 1055: Operational Procedures for VTS Traffic Organization.',
    },
    {
      id: 3,
      code: 'NAS',
      title: 'Navigational Assistance Service',
      indonesianTitle: 'Layanan Bantuan Navigasi Kapal',
      icon: HelpCircle,
      color: 'from-teal-500 to-emerald-600',
      badgeColor: 'bg-teal-950 text-teal-400 border-teal-800/50',
      shortDesc:
        'Bantuan navigasi langsung secara real-time kepada nakhoda/pandu dalam situasi sulit, cuaca buruk, atau kegagalan peralatan kapal.',
      details: [
        'Panduan posisi & haluan kapal via VHF saat jarak pandang sangat terbatas (kabut/hujan lebat).',
        'Monitoring deviasi haluan kapal jika mendekati perairan dangkal atau bahaya terumbu.',
        'Bantuan navigasi khusus untuk kapal dengan pembatasan olah gerak (Constrained by Draught).',
        'Dukungan navigasi dalam kondisi darurat medis atau kendali kemudi kapal terganggu.',
      ],
      ialadef: 'IALA Guideline 1045: Navigational Assistance Service Provisions.',
    },
  ];

  return (
    <section id="layanan" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-800/40 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LAYANAN UTAMA VTS PANJANG</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            3 Layanan Standar Internasional IALA
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Stasiun VTS Panjang menyelenggarakan 3 pilar layanan VTS sesuai dengan standar dunia IALA <br /> <strong className="text-cyan-400"> (International Association of Marine Aids to Navigation and Lighthouse Authorities) </strong>.
          </p>
        </div>

        {/* 3 Grid Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.id}
                className="rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/40 group relative overflow-hidden"
              >
                {/* Top Glowing Gradient Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.color}`}></div>

                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${service.badgeColor}`}>
                      {service.code} SERVICE
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all">
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Titles */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400 mb-4 font-mono">
                    {service.indonesianTitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2.5 mb-8">
                    {service.details.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-slate-400">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Detail Action */}
                <button
                  onClick={() => setActiveModal(service.id)}
                  className="w-full py-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/60 text-slate-200 hover:text-cyan-300 text-xs font-semibold flex items-center justify-center space-x-2 transition-all group/btn"
                >
                  <span>Rincian Prosedur & Standar</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Modal Dialog */}
        {activeModal !== null && (
          <div
            onClick={() => setActiveModal(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn overflow-y-auto"
          >
            {services
              .filter((s) => s.id === activeModal)
              .map((srv) => {
                const IconComp = srv.icon;
                return (
                  <div
                    key={srv.id}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-slate-900 border border-cyan-500/40 rounded-3xl p-5 sm:p-7 max-w-xl w-full max-h-[85vh] flex flex-col shadow-2xl relative text-left my-auto overflow-hidden"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4 shrink-0 pr-8">
                      <div className="flex items-center space-x-3">
                        <div className="p-2.5 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                          <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div>
                          <span className="text-[11px] font-mono text-cyan-400 font-bold">{srv.code} SERVICE</span>
                          <h3 className="text-lg sm:text-xl font-bold text-white">{srv.title}</h3>
                        </div>
                      </div>
                      <button
                        onClick={() => setActiveModal(null)}
                        className="absolute top-5 right-5 p-2 rounded-xl bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Scrollable Body */}
                    <div className="overflow-y-auto flex-1 pr-1 space-y-4">
                      <p className="text-xs text-slate-400 font-mono border-b border-slate-800 pb-3">
                        {srv.ialadef}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {srv.shortDesc}
                      </p>

                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Cakupan Operasional & Prosedur Panggilan:
                      </h4>

                      <ul className="space-y-2.5">
                        {srv.details.map((item, i) => (
                          <li key={i} className="flex items-start space-x-2 text-xs text-slate-300 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                            <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer */}
                    <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between shrink-0">
                      <span className="text-[11px] font-mono text-slate-400">PANGGILAN VTS: "PANJANG VTS"</span>
                      <button
                        onClick={() => setActiveModal(null)}
                        className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs hover:opacity-90"
                      >
                        Tutup
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        )}

      </div>
    </section>
  );
}

