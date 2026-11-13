"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Camera, 
  MapPin, 
  AlertTriangle, 
  Send, 
  CheckCircle2, 
  Info, 
  ShieldAlert,
  ArrowLeft
} from "lucide-react";

export default function BuatPengaduanPage() {
  const [judul, setJudul] = useState("");
  const [kategori, setKategori] = useState("Jalan Rusak");
  const [prioritas, setPrioritas] = useState("SEDANG");
  const [alamat, setAlamat] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [isAnonim, setIsAnonim] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate nomor tiket demo khas Bandar Lampung
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newTiket = `BL-2026-${randomNum}`;
    setTicketId(newTiket);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="bg-white rounded-3xl p-8 border border-emerald-200 shadow-xl text-center space-y-6">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-black text-slate-900">
              Laporan Berhasil Diajukan!
            </h2>
            <p className="text-sm text-slate-600">
              Terima kasih atas partisipasi Anda dalam membangun Kota Bandar Lampung yang lebih baik.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 max-w-sm mx-auto">
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
              Nomor Tiket Anda
            </p>
            <p className="text-2xl font-mono font-black text-slate-900 mt-1">
              {ticketId}
            </p>
            <p className="text-[11px] text-amber-600 font-medium mt-1">
              Simpan nomor ini untuk melacak status penanganan
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link
              href={`/warga/lacak?tiket=${ticketId}`}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all"
            >
              Lacak Pengaduan Ini
            </Link>
            <button
              onClick={() => {
                setSubmitted(false);
                setJudul("");
                setDeskripsi("");
                setAlamat("");
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-all"
            >
              Buat Laporan Lain
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Tombol Kembali & Judul */}
      <div className="mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 mb-3 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </Link>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Formulir Pengaduan Warga
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          Sampaikan keluhan infrastruktur, fasilitas publik, atau pelayanan di Kota Bandar Lampung.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
        
        {/* Banner Edukasi Smart Complaint */}
        <div className="bg-gradient-to-r from-slate-900 to-indigo-950 p-6 text-white flex items-start gap-4">
          <div className="p-2.5 rounded-xl bg-white/10 text-amber-400 shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">Panduan Pengaduan Cepat & Akurat</h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Pastikan menyertakan foto yang jelas dan detail titik lokasi patokan (nama jalan/gedung terdekat) agar petugas dinas teknis dapat langsung melakukan peninjauan ke lapangan.
            </p>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
          
          {/* Judul Laporan */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Judul Masalah / Pengaduan <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Contoh: Aspal Amblas dan Berlubang di Depan Puskesmas Kedaton"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-slate-900"
            />
          </div>

          {/* Kategori & Tingkat Urgensi */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Kategori Masalah <span className="text-red-500">*</span>
              </label>
              <select
                value={kategori}
                onChange={(e) => setKategori(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-slate-900 bg-white"
              >
                <option value="Jalan Rusak">Jalan Rusak & Jembatan (Dinas PU)</option>
                <option value="Sampah">Sampah & Kebersihan Lingkungan (DLH)</option>
                <option value="Lampu Jalan">Lampu Jalan PJU Mati (Dishub)</option>
                <option value="Saluran Air">Saluran Air & Banjir (Dinas SDA)</option>
                <option value="Pelayanan Publik">Pelayanan Publik & Kependudukan (Disdukcapil)</option>
                <option value="Ketertiban">Ketertiban Umum (Satpol PP)</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Tingkat Prioritas
              </label>
              <select
                value={prioritas}
                onChange={(e) => setPrioritas(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-slate-900 bg-white"
              >
                <option value="RENDAH">Rendah (Dampak minor / estetika)</option>
                <option value="SEDANG">Sedang (Mengganggu kenyamanan umum)</option>
                <option value="TINGGI">Tinggi (Berpotensi kecelakaan)</option>
                <option value="DARURAT">Darurat (Mengancam keselamatan jiwa / bencana)</option>
              </select>
            </div>
          </div>

          {/* Lokasi Kejadian */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Lokasi Kejadian Lengkap <span className="text-red-500">*</span>
              </label>
              <button
                type="button"
                onClick={() => setAlamat("Jl. ZA Pagar Alam No. 9, Labuhan Ratu, Kedaton, Bandar Lampung (Lat: -5.3789, Lng: 105.2514)")}
                className="text-xs text-amber-600 hover:text-amber-700 font-semibold flex items-center gap-1"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Gunakan GPS Otomatis</span>
              </button>
            </div>
            <input
              type="text"
              required
              placeholder="Sebutkan nama jalan, kelurahan, kecamatan dan patokan penting..."
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-slate-900"
            />
          </div>

          {/* Upload Foto Bukti */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Foto Bukti Kejadian
            </label>
            <div className="border-2 border-dashed border-slate-300 hover:border-amber-400 rounded-2xl p-6 text-center cursor-pointer transition-colors bg-slate-50/50">
              <Camera className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p className="text-xs font-semibold text-slate-700">
                Klik untuk unggah foto atau tarik file ke sini
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                Format didukung: JPG, PNG, WEBP (Maksimal 5MB)
              </p>
            </div>
          </div>

          {/* Deskripsi Kronologi */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Deskripsi Masalah <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={4}
              placeholder="Ceritakan detail kendala yang dialami, sejak kapan masalah terjadi, dan dampak yang ditimbulkan..."
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-slate-900"
            />
          </div>

          {/* Checkbox Privasi Anonim */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <input
              type="checkbox"
              id="anonim"
              checked={isAnonim}
              onChange={(e) => setIsAnonim(e.target.checked)}
              className="w-4 h-4 text-amber-500 rounded border-slate-300 focus:ring-amber-500"
            />
            <label htmlFor="anonim" className="text-xs text-slate-700 select-none">
              <span className="font-bold">Laporkan Secara Anonim:</span> Identitas nama dan nomor telepon Anda akan disembunyikan dari publik demi perlindungan privasi.
            </label>
          </div>

          {/* Tombol Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Kirimkan Pengaduan Saya</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
