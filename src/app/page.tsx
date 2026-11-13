"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  AlertTriangle, 
  Trash2, 
  Lightbulb, 
  Waves, 
  HelpCircle, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Search, 
  MapPin, 
  ShieldCheck, 
  Building2, 
  Users, 
  TrendingUp,
  Sparkles,
  Smartphone
} from "lucide-react";

export default function HomePage() {
  const [searchNoTiket, setSearchNoTiket] = useState("");

  const kategoriLayanan = [
    {
      nama: "Jalan Rusak & Jembatan",
      icon: AlertTriangle,
      color: "bg-red-50 text-red-600 border-red-200",
      count: "1.240 laporan",
      opd: "Dinas Bina Marga & Bina Konstruksi",
      deskripsi: "Jalan berlubang, aspal amblas, trotoar rusak di wilayah Kota Bandar Lampung."
    },
    {
      nama: "Sampah & Lingkungan Hidup",
      icon: Trash2,
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
      count: "980 laporan",
      opd: "Dinas Lingkungan Hidup (DLH)",
      deskripsi: "Tumpukan sampah liar, keterlambatan armada truk sampah, pencemaran sungai."
    },
    {
      nama: "Lampu Jalan (PJU) Padam",
      icon: Lightbulb,
      color: "bg-amber-50 text-amber-600 border-amber-200",
      count: "840 laporan",
      opd: "Dinas Perhubungan & PJU",
      deskripsi: "Lampu penerangan jalan padam, kabel terkelupas, tiang roboh/miring."
    },
    {
      nama: "Saluran Air & Banjir",
      icon: Waves,
      color: "bg-blue-50 text-blue-600 border-blue-200",
      count: "612 laporan",
      opd: "Dinas PU Sumber Daya Air",
      deskripsi: "Drainase tersumbat, tanggul jebol, genangan air jalanan saat hujan lebat."
    },
    {
      nama: "Pelayanan Publik & Perizinan",
      icon: HelpCircle,
      color: "bg-purple-50 text-purple-600 border-purple-200",
      count: "450 laporan",
      opd: "Disdukcapil & PTSP Bandar Lampung",
      deskripsi: "Kendala pengurusan KTP/KK, lambatnya antrean perizinan, atau pungli."
    },
    {
      nama: "Ketertiban & Fasilitas Umum",
      icon: Building2,
      color: "bg-indigo-50 text-indigo-600 border-indigo-200",
      count: "320 laporan",
      opd: "Satuan Polisi Pamong Praja (Satpol PP)",
      deskripsi: "Pelanggaran trotoar pedagang kaki lima, vandalisme taman kota."
    }
  ];

  const laporanTerbaru = [
    {
      noTiket: "BL-2026-00412",
      judul: "Aspal Amblas Parah dekat Flyover Mall Boemi Kedaton",
      kategori: "Jalan Rusak",
      lokasi: "Jl. Teuku Umar, Kedaton",
      status: "DIPROSES",
      statusLabel: "Dalam Pengerjaan",
      statusColor: "bg-amber-100 text-amber-800 border-amber-300",
      waktu: "12 menit yang lalu",
      opd: "Dinas PU",
      foto: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=500&auto=format&fit=crop&q=60"
    },
    {
      noTiket: "BL-2026-00409",
      judul: "Tumpukan Sampah Menumpuk di Bahu Jalan Pasar Pasir Gintung",
      kategori: "Sampah",
      lokasi: "Tanjung Karang Pusat",
      status: "SELESAI",
      statusLabel: "Selesai Ditangani",
      statusColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      waktu: "1 jam yang lalu",
      opd: "Dinas Lingkungan Hidup",
      foto: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=500&auto=format&fit=crop&q=60"
    },
    {
      noTiket: "BL-2026-00398",
      judul: "Lampu PJU Padam 4 Titik Menuju Pantai Mutun",
      kategori: "Lampu Jalan",
      lokasi: "Teluk Betung Timur",
      status: "BARU",
      statusLabel: "Verifikasi OPD",
      statusColor: "bg-blue-100 text-blue-800 border-blue-300",
      waktu: "2 jam yang lalu",
      opd: "Dinas Perhubungan",
      foto: "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?w=500&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white overflow-hidden py-20 lg:py-28 border-b border-slate-800">
        {/* Dekorasi Ornamen Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            
            {/* Tag Kolaborasi Smart City */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-semibold text-amber-400 shadow-inner">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Inisiatif Smart City Bandar Lampung • Universitas Teknokrat Indonesia</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Laporkan Masalah Kota. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
                Pantau Penanganannya.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Jembatan digital resmi antara masyarakat dan Pemerintah Kota Bandar Lampung. Laporkan jalan berlubang, sampah liar, lampu PJU mati lengkap dengan foto dan lokasi GPS real-time.
            </p>

            {/* Quick Track Input Bar */}
            <div className="pt-2 max-w-xl mx-auto">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  if (searchNoTiket) {
                    window.location.href = `/warga/lacak?tiket=${searchNoTiket}`;
                  }
                }}
                className="flex items-center bg-white rounded-2xl p-1.5 shadow-2xl border border-slate-200"
              >
                <div className="pl-3 text-slate-400">
                  <Search className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  placeholder="Masukkan Nomor Tiket (cth: BL-2026-00412)..."
                  value={searchNoTiket}
                  onChange={(e) => setSearchNoTiket(e.target.value)}
                  className="w-full px-3 py-2.5 text-slate-900 text-sm focus:outline-none rounded-lg"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shrink-0 flex items-center gap-1.5"
                >
                  <span>Lacak Tiket</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Tombol Utama */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/warga/buat"
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center gap-2"
              >
                <AlertTriangle className="w-4 h-4" />
                <span>Buat Pengaduan Sekarang</span>
              </Link>
              <Link
                href="/pimpinan"
                className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all flex items-center gap-2"
              >
                <TrendingUp className="w-4 h-4 text-amber-400" />
                <span>Lihat Dashboard Pimpinan</span>
              </Link>
            </div>

          </div>

          {/* Stat Counter Strip */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-slate-800">
            <div className="text-center p-3">
              <p className="text-2xl sm:text-3xl font-extrabold text-white">4.442</p>
              <p className="text-xs text-slate-400 mt-1 font-medium">Total Laporan Masuk</p>
            </div>
            <div className="text-center p-3 border-l border-slate-800">
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400">92,4%</p>
              <p className="text-xs text-slate-400 mt-1 font-medium">Tingkat Penyelesaian</p>
            </div>
            <div className="text-center p-3 border-l border-slate-800">
              <p className="text-2xl sm:text-3xl font-extrabold text-amber-400">24 Jam</p>
              <p className="text-xs text-slate-400 mt-1 font-medium">Rata-rata Respon OPD</p>
            </div>
            <div className="text-center p-3 border-l border-slate-800">
              <p className="text-2xl sm:text-3xl font-extrabold text-blue-400">20 Kec.</p>
              <p className="text-xs text-slate-400 mt-1 font-medium">Cakupan Wilayah Kota</p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. KATEGORI ADUAN POPULER */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-bold text-amber-600 uppercase tracking-widest">
              Ruang Lingkup Masalah Kota
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Kategori Pengaduan Terpadu
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Laporan langsung diteruskan ke Organisasi Perangkat Daerah (OPD) yang berwenang di Kota Bandar Lampung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kategoriLayanan.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={index}
                  className="rounded-2xl border border-slate-200 p-6 hover:shadow-xl hover:border-amber-300 transition-all bg-white group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-xl border ${item.color}`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                        {item.count}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                        {item.nama}
                      </h4>
                      <p className="text-xs text-amber-700 font-medium mt-0.5">
                        {item.opd}
                      </p>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                        {item.deskripsi}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/warga/buat?kategori=${encodeURIComponent(item.nama)}`}
                      className="text-xs font-bold text-slate-900 group-hover:text-amber-600 flex items-center gap-1 transition-colors"
                    >
                      <span>Laporkan Masalah Ini</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ALUR KERJA PENANGANAN ADUAN (TRANSPARANSI TIKET) */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              Tata Kelola Transparan
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Bagaimana Laporan Anda Ditindaklanjuti?
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Siklus penanganan aduan berbasis SLA (Service Level Agreement) yang dapat diawasi publik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative">
              <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center text-sm mb-4">
                1
              </div>
              <h4 className="text-base font-bold text-slate-900">1. Lapor & Unggah</h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Warga mengisi form, melampirkan foto kejadian, dan koordinat peta otomatis dari smartphone.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative">
              <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-black flex items-center justify-center text-sm mb-4">
                2
              </div>
              <h4 className="text-base font-bold text-slate-900">2. Verifikasi & Disposisi</h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Admin Pemkot / AI melakukan verifikasi validitas lalu mendisposisikan tiket ke OPD berwenang.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative">
              <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-black flex items-center justify-center text-sm mb-4">
                3
              </div>
              <h4 className="text-base font-bold text-slate-900">3. Aksi di Lapangan</h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Tim teknis dinas meluncur ke lokasi kejadian, melakukan perbaikan, dan mencatat progres pekerjaan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative">
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-white font-black flex items-center justify-center text-sm mb-4">
                4
              </div>
              <h4 className="text-base font-bold text-slate-900">4. Selesai & Terverifikasi</h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Foto perbaikan diunggah ke sistem. Warga pelapor menerima notifikasi dan memberikan ulasan kepuasan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEED ADUAN TERKINI (PUBLIC FEED) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-xs font-bold text-amber-600 uppercase tracking-widest">
                Feed Publik Real-Time
              </h2>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Laporan Terbaru di Bandar Lampung
              </h3>
            </div>
            <Link
              href="/warga/lacak"
              className="text-xs font-bold text-slate-700 hover:text-amber-600 flex items-center gap-1 self-start"
            >
              <span>Lihat Semua Arsip Pengaduan</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {laporanTerbaru.map((lapor, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                {/* Foto Preview */}
                <div className="h-44 w-full bg-slate-100 relative overflow-hidden">
                  <img
                    src={lapor.foto}
                    alt={lapor.judul}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border shadow-sm ${lapor.statusColor}`}>
                      {lapor.statusLabel}
                    </span>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-mono px-2 py-0.5 rounded">
                    {lapor.noTiket}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="font-semibold text-amber-700">{lapor.kategori}</span>
                      <span>{lapor.waktu}</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 line-clamp-2 leading-snug">
                      {lapor.judul}
                    </h4>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-1 truncate max-w-[180px]">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{lapor.lokasi}</span>
                    </div>
                    <Link
                      href={`/warga/lacak?tiket=${lapor.noTiket}`}
                      className="font-bold text-slate-900 hover:text-amber-600 shrink-0"
                    >
                      Pantau Progres →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BANNER CALL TO ACTION */}
      <section className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 py-12 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-2xl font-black tracking-tight">
              Menemukan Masalah di Sekitar Anda?
            </h3>
            <p className="text-sm font-medium text-slate-800">
              Jangan diamkan! Foto dan laporkan sekarang untuk Bandar Lampung yang lebih nyaman dan maju.
            </p>
          </div>
          <Link
            href="/warga/buat"
            className="px-8 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm shadow-xl transition-all shrink-0 flex items-center gap-2"
          >
            <span>Kirim Pengaduan Cepat</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </section>
    </div>
  );
}
