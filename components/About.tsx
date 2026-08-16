import React from 'react';
import { Anchor, Shield, Radio, Navigation, CheckCircle2, Compass, Layers, Target, Scale, BookOpen } from 'lucide-react';

export default function About() {
  const specs = [
    { title: 'Radar Maritim Dual-Band', desc: 'Sistem Radar Band-X dan Band-S resolusi tinggi untuk deteksi target kapal hingga radius 24 NM.' },
    { title: 'Stasiun Basis AIS (Automatic Identification System)', desc: 'Penerima sinyal AIS Kelas A & B untuk lacak nama, tipe, posisi, kecepatan, dan haluan kapal.' },
    { title: 'VHF Direction Finder (VHF-DF)', desc: 'Penemu arah sinyal radio VHF kapal untuk menentukan lokasi pemancar panggilan radio maritim.' },
    { title: 'Sensor Meteorologi & Hidro-Oseanografi', desc: 'Pemantauan real-time kecepatan angin, tinggi gelombang, jarak pandang, dan pasang surut air laut.' },
  ];

  const regulations = [
    { code: 'UU No. 17 / 2008', title: 'Undang-Undang Pelayaran', desc: 'Regulasi utama keselamatan dan keamanan transportasi laut nasional.' },
    { code: 'PP No. 5 / 2010', title: 'Peraturan Pemerintah Kenavigasian', desc: 'Pengaturan penyelenggaraan kenavigasian & alur pelayaran.' },
    { code: 'SOLAS Ch. V & IMO A857(20)', title: 'Standar Internasional IMO', desc: 'Konvensi keselamatan jiwa di laut dan standar Vessel Traffic Services.' },
    { code: 'IALA V.103 & Manual', title: 'Standar Kompetensi IALA', desc: 'Sertifikasi & kurikulum pelatihan operator, supervisor & instruktur VTS.' },
    { code: 'KP DJPL 188-2022', title: 'Keputusan Dirjen Hubla', desc: 'Prosedur operasional dan pemeliharaan VTS Panjang.' },
    { code: 'KEPDIRJENLA KP.294/2020', title: 'Petunjuk Teknis VTS', desc: 'Pedoman teknis penataan dan tata kelola stasiun VTS di Indonesia.' },
  ];

  const missions = [
    'Menyediakan ruang dan alur pelayaran yang aman bagi navigasi.',
    'Meningkatkan keandalan serta kecukupan sarana dan prasarana kenavigasian.',
    'Mengembangkan sumber daya manusia yang profesional di bidang kenavigasian.',
    'Mendukung penggunaan teknologi yang tepat guna dalam navigasi maritim.',
  ];

  return (
    <section id="about" className="py-24 bg-slate-900/60 border-t border-b border-cyan-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 text-xs font-mono mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>TENTANG STASIUN VTS PANJANG</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Penjaga Keselamatan & Kelancaran Pelayaran di Perairan Teluk Lampung
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Vessel Traffic Services (VTS) Panjang didirikan sebagai bagian dari upaya meningkatkan keselamatan dan efisiensi navigasi di perairan strategis Indonesia, khususnya wilayah Selat Sunda dan Teluk Lampung.
          </p>
        </div>

        {/* VISI & MISI PERUSAHAAN (Sub-Bab 2.2 BAB 2.pdf) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/60 border border-cyan-800/50 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visi Block */}
            <div className="lg:col-span-5 space-y-4 border-b lg:border-b-0 lg:border-r border-slate-800 pb-6 lg:pb-0 lg:pr-8">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800/60 text-xs font-mono">
                <Target className="w-3.5 h-3.5 text-cyan-400" />
                <span>VISI VTS PANJANG</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug italic">
                "Mewujudkan keselamatan navigasi di perairan Indonesia."
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Direktorat Jenderal Perhubungan Laut, Distrik Navigasi Panjang
              </p>
            </div>

            {/* Misi Block */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 text-cyan-400 border border-slate-800 text-xs font-mono mb-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>MISI VTS PANJANG</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {missions.map((misi, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start space-x-3 text-xs text-slate-300">
                    <span className="w-5 h-5 rounded-lg bg-cyan-950 border border-cyan-800/80 flex items-center justify-center text-cyan-400 font-mono font-bold text-[10px] shrink-0 mt-0.5">
                      0{i + 1}
                    </span>
                    <span className="leading-snug">{misi}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid 2-Columns Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Interactive Graphic Card */}
          <div className="relative rounded-3xl p-8 bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-900/40 shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all"></div>

            <div className="relative z-10 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  <Anchor className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Wilayah Operasional Utama</h3>
                  <p className="text-xs text-cyan-400 font-mono">TELUK LAMPUNG & PENDEKATAN SELAT SUNDA</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Perairan Teluk Lampung merupakan alur laut penting dengan intensitas gerak kapal tinggi yang menghubungkan Pelabuhan Panjang, Dermaga Tanker/LPG, Terminal Tugboat, Jalur Penyeberangan, serta menjadi pintu gerbang logistik nasional dari dan menuju Selat Sunda.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Pengawasan Alur Laut Sempit dan Area Labuh Jangkar (*Anchorage Area*).</span>
                </div>
                <div className="flex items-start space-x-3 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Pemberian Peringatan Dini Bahaya Navigasi, Dangkal, & Cuaca Buruk.</span>
                </div>
                <div className="flex items-start space-x-3 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Koordinasi SAR Maritim & Tanggap Darurat Pencemaran Laut.</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-cyan-300">
                <span>IALA COMPLIANT STACK</span>
                <span>VTS CATEGORY: FULL SERVICE</span>
              </div>
            </div>
          </div>

          {/* Right: Technical Sensor Array Specs Grid */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              <span>Infrastruktur Sensor & Sistem Pemantauan</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specs.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 transition-all space-y-2 hover:shadow-lg hover:shadow-cyan-950/30"
                >
                  <div className="w-7 h-7 rounded-lg bg-slate-900 border border-cyan-800/40 flex items-center justify-center text-cyan-400 font-mono text-xs font-bold">
                    0{idx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* REGULASI & DASAR HUKUM (Sub-Bab 2.1 BAB 2.pdf) */}
        <div className="pt-6 border-t border-slate-800">
          <div className="flex items-center space-x-3 mb-6">
            <Scale className="w-6 h-6 text-cyan-400" />
            <div>
              <h3 className="text-xl font-bold text-white">Landasan Hukum & Regulasi Operasional</h3>
              <p className="text-xs text-slate-400">Pedoman regulasi nasional dan standar internasional VTS Panjang (Sub-Bab 2.1 PDF)</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {regulations.map((reg, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-cyan-500/40 transition-all space-y-1.5">
                <span className="text-[11px] font-mono font-bold text-cyan-400 px-2 py-0.5 bg-cyan-950 rounded border border-cyan-800/50 inline-block">
                  {reg.code}
                </span>
                <h4 className="text-sm font-bold text-white pt-1">{reg.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{reg.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

