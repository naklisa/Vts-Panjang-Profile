import Link from 'next/link';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 pt-32 pb-20 flex items-center justify-center text-center px-4">
      <div className="max-w-md w-full p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-red-950/80 border border-red-800/60 mx-auto flex items-center justify-center text-red-400">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold text-white">404</h1>
        <h2 className="text-lg font-bold text-cyan-400">Halaman Tidak Ditemukan</h2>
        <p className="text-xs text-slate-300">
          Mohon maaf, halaman yang Anda cari tidak ditemukan atau telah dipindahkan.
        </p>
        <Link
          href="/"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>
    </div>
  );
}
