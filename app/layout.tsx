import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Stasiun VTS Panjang | Distrik Navigasi Kelas I Panjang',
  description: 'Profil Web Resmi Stasiun Vessel Traffic Services (VTS) Panjang - Distrik Navigasi Kelas I Panjang, Direktorat Jenderal Perhubungan Laut. Pelayanan Informasi (INS), Pengaturan Lalu Lintas Laut (TOS), dan Bantuan Navigasi (NAS) 24/7 di Teluk Lampung.',
  keywords: ['VTS Panjang', 'Vessel Traffic Services', 'Distrik Navigasi Panjang', 'Pelabuhan Panjang', 'Teluk Lampung', 'Keselamatan Pelayaran', 'Hubla', 'Dephub'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col antialiased selection:bg-cyan-500 selection:text-slate-950">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
