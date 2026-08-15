# 🚢 Web Profile Stasiun VTS Panjang

Aplikasi Web Profile resmi dan futuristik untuk **Stasiun Vessel Traffic Services (VTS) Panjang** di bawah Kantor Distrik Navigasi Kelas I Panjang, Direktorat Jenderal Perhubungan Laut, Kementerian Perhubungan Republik Indonesia.

Aplikasi ini dirancang menggunakan **Next.js 14+ (App Router)**, **TypeScript**, **Tailwind CSS (Dark Mode Maritime Theme)**, **Lucide React**, dan **Leaflet WebGIS** untuk pemantauan pergerakan kapal real-time di perairan Teluk Lampung dan Selat Sunda.

---

## 🌟 Fitur Utama

1. **Halaman Utama (Hybrid Single-Page Scroll)**:
   - **`#hero`**: Banner utama dengan animasi pemindaian radar maritim (HUD Radar Scanner), indikator status siaga *"SYSTEM ONLINE 24/7"*, statistik cepat (Jangkauan Radar 24 NM, koordinat stasiun, VHF Channels), serta tombol aksi cepat.
   - **`#about`**: Profil lengkap Stasiun VTS Panjang, visi & misi keselamatan pelayaran, serta cakupan wilayah pelayaran Teluk Lampung & Selat Sunda.
   - **`#layanan`**: 3 Layanan utama VTS berstandar internasional IALA:
     - **INS (*Information Service*)**: Layanan Informasi Pelayaran & Bahaya Navigasi.
     - **TOS (*Traffic Organization Service*)**: Layanan Pengaturan Lalu Lintas Kapal & Labuh Jangkar.
     - **NAS (*Navigational Assistance Service*)**: Layanan Bantuan Navigasi Kapal Cuaca Buruk / Alur Sempit.
     *Dilengkapi dialog modal rincian prosedur.*
   - **`#traffic`**: Peta WebGIS interaktif berbasis Leaflet yang menampilkan koordinat Stasiun VTS Panjang (`-5.455007552545647, 105.31086450790356`) dan radius jangkauan radar 24 NM.
    - **`#kontak`**: Akses cepat informasi kontak darurat maritim pada Footer.

2. **Sub-Halaman Khusus (Dedicated Sub-Pages)**:
   - **`/fasilitas`**: Galeri grid interaktif 6 fasilitas operasional utama (*Control Room 24/7*, *Server Room Data Center*, *Menara Radar & Sensor Array*, *Gedung Kantor Administrasi*, *Ruang Briefing*, dan *Crew Rest Lounge*).
   - **`/struktur-organisasi`**: Bagan alur hierarki visual kepemimpinan dan unit operasional (Kepala Stasiun VTS -> Unit Operasional 24/7, Unit Teknik & Maintenance, Unit Administrasi Data), serta rincian rotasi regu jaga 24 jam (*Shift Roster A, B, C, D*).

3. **Bilah Navigasi & Footer Global**:
   - Header *sticky glassmorphism* dengan navigasi responsif (perangkat mobile, tablet, desktop).
   - Informasi Kontak Darurat Radio Maritim: **VHF Channel 16 (156.800 MHz)** & **VHF Channel 12 (156.600 MHz)**.

---

## 🛠️ Teknologi Yang Digunakan (Tech Stack)

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router directory structure)
- **Bahasa Pemrograman**: [TypeScript](https://www.typescriptlang.org/)
- **Styling & Tema**: [Tailwind CSS](https://tailwindcss.com/) (*Dark Mode Maritime: slate-950, deep ocean blues, cyan glowing accents*)
- **Ikon**: [Lucide React](https://lucide.dev/)
- **Peta WebGIS**: [Leaflet.js](https://leafletjs.com/) & [React-Leaflet](https://react-leaflet.js.org/) (Client-side dynamic import `{ ssr: false }`)

---

## 📁 Struktur Direktori Proyek

```
d:/S7/PJK/
├── app/
│   ├── layout.tsx                # Layout utama (Navbar & Footer global, smooth scroll)
│   ├── page.tsx                  # Halaman Utama / Beranda (#hero, #about, #layanan, #traffic, #kontak)
│   ├── globals.css               # CSS Global, Leaflet styles, custom scrollbar
│   ├── fasilitas/
│   │   └── page.tsx              # Halaman Rute Khusus Fasilitas VTS (6 fasilitas utama)
│   └── struktur-organisasi/
│       └── page.tsx              # Halaman Rute Khusus Struktur Organisasi & Shift Roster
├── components/
│   ├── Navbar.tsx                # Bilah Navigasi Sticky Responsive
│   ├── Footer.tsx                # Footer Global dengan Kontak Darurat VHF (Ch. 16/12)
│   ├── Hero.tsx                  # Banner Hero dengan animasi radar HUD & indikator status 24/7
│   ├── About.tsx                 # Profil Stasiun VTS Panjang & Wilayah Cakupan Teluk Lampung
│   ├── Services.tsx              # Kartu Layanan Utama VTS (INS, TOS, NAS) dengan Modal
│   ├── MapSection.tsx            # Pembungkus Peta WebGIS (Dynamic Import Client-Side)
│   └── LeafletMap.tsx            # Komponen Client Peta WebGIS (-5.455007552545647, 105.31086450790356)
├── tailwind.config.ts            # Konfigurasi Tema Warna Maritime & Animasi Radar
├── package.json                  # Manajemen Dependensi Proyek
└── tsconfig.json                 # Konfigurasi TypeScript
```

---

## 🚀 Prasyarat & Cara Menjalankan Proyek

### 1. Prasyarat Sistem
Pastikan perangkat Anda sudah terinstal:
- **Node.js**: Versi 18.17.0 atau lebih baru (Disarankan versi LTS).
- **npm** (atau yarn / pnpm / bun).

---

### 2. Langkah Instalasi Dependensi
Buka terminal / PowerShell di direktori proyek ini, lalu jalankan:

```bash
npm install
```

---

### 3. Menjalankan Server Pengembang (Development Server)
Untuk menjalankan aplikasi dalam mode pengembangan lokal:

```bash
npm run dev
```
atau jika di Windows PowerShell:
```bash
npx next dev -p 3000
```

Buka peramban (browser) dan akses URL:
👉 **[http://localhost:3000](http://localhost:3000)**

---

### 4. Membangun Proyek untuk Production (Production Build)
Untuk melakukan kompilasi dan optimasi produksi:

```bash
npx next build
```

Setelah kompilasi selesai tanpa error, jalankan server produksi:

```bash
npm start
```

---

## 📻 Frekuensi Radio & Kontak Operasional Stasiun VTS Panjang

- **VHF Channel 16 (156.800 MHz)**: Panggilan Darurat Maritim, Distress & Keselamatan.
- **VHF Channel 12 (156.600 MHz)**: Panggilan Operasional VTS & Pelabuhan Panjang.
- **Telepon / Hotline**: +62 (0721) 31234 / +62 811-721-VTS
- **Email Resmi**: `vts.panjang@dephub.go.id`
- **Alamat**: Jl. Yos Sudarso No. 104, Pelabuhan Panjang, Kota Bandar Lampung, Lampung 35241, Indonesia.

---

## 📜 Lisensi & Hak Cipta
© **Distrik Navigasi Kelas I Panjang** — Direktorat Jenderal Perhubungan Laut, Kementerian Perhubungan Republik Indonesia. Hak Cipta Dilindungi Undang-Undang.
