"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  MapPin, 
  User, 
  Send, 
  FileText,
  Calendar,
  Building2,
  ArrowRight
} from "lucide-react";

export default function LacakPengaduanPage() {
  const [noTiket, setNoTiket] = useState("BL-2026-00412");
  const [komentarBaru, setKomentarBaru] = useState("");

  const detailAduan = {
    noTiket: "BL-2026-00412",
    judul: "Aspal Amblas Parah dekat Flyover Mall Boemi Kedaton",
    kategori: "Jalan Rusak & Jembatan",
    opd: "Dinas Bina Marga & Bina Konstruksi",
    pelapor: "Ahmad Fauzi (Warga)",
    waktuLapor: "13 November 2026, 08:30 WIB",
    lokasi: "Jl. Teuku Umar No. 12, Kedaton, Kota Bandar Lampung (Patokan depan Ruko MBK)",
    deskripsi: "Kedalaman amblas sekitar 20 cm dengan diameter 1,5 meter. Sudah ada 2 pengendara motor yang hampir terjatuh saat malam hari karena penerangan redup.",
    status: "DIPROSES",
    prioritas: "TINGGI",
    fotoUrl: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=800&auto=format&fit=crop&q=80",
    timeline: [
      {
        status: "SELESAI",
        judul: "Pekerjaan Selesai & Verifikasi Akhir",
        waktu: "Estimasi: 14 Nov 2026",
        deskripsi: "Pemeriksaan mutu pengaspalan oleh pengawas lapangan.",
        done: false,
        active: false
      },
      {
        status: "DIPROSES",
        judul: "Tim Lapangan Melakukan Perbaikan",
        waktu: "13 Nov 2026, 14:15 WIB",
        deskripsi: "Armada Unit Reaksi Cepat (URC) Dinas PU tiba di lokasi membawa aspal cold mix dan alat pemadat.",
        done: true,
        active: true
      },
      {
        status: "VERIFIKASI",
        judul: "Disposisi ke Dinas Teknis",
        waktu: "13 Nov 2026, 09:10 WIB",
        deskripsi: "Admin Pemkot memvalidasi data dan mendisposisikan tiket ke Kabid Jalan & Jembatan.",
        done: true,
        active: false
      },
      {
        status: "BARU",
        judul: "Laporan Diterima Sistem",
        waktu: "13 Nov 2026, 08:30 WIB",
        deskripsi: "Laporan masuk melalui portal web dengan kelengkapan foto dan koordinat GPS.",
        done: true,
        active: false
      }
    ],
    komentarList: [
      {
        nama: "Admin Diskominfo Pemkot",
        role: "Admin Pemda",
        waktu: "13 Nov 2026, 09:12 WIB",
        pesan: "Laporan telah kami terima dan diteruskan dengan prioritas TINGGI ke Dinas Bina Marga."
      },
      {
        nama: "Ir. Bambang S. (URC Dinas PU)",
        role: "Petugas Lapangan",
        waktu: "13 Nov 2026, 14:20 WIB",
        pesan: "Personel dan material pemadatan sudah di lokasi Jl. Teuku Umar. Pengerjaan diperkirakan memakan waktu 3 jam."
      }
    ]
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header Search Box */}
      <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl mb-8">
        <div className="max-w-xl">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            Live Tracking Tiket
          </span>
          <h1 className="text-2xl sm:text-3xl font-black mt-1">
            Pantau Penanganan Pengaduan
          </h1>
          <p className="text-xs text-slate-300 mt-2">
            Lacak secara transparan setiap tahapan kerja petugas di lapangan sampai masalah selesai.
          </p>
        </div>

        <div className="mt-6 flex items-center bg-white rounded-2xl p-1.5 max-w-lg shadow-lg">
          <div className="pl-3 text-slate-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={noTiket}
            onChange={(e) => setNoTiket(e.target.value)}
            placeholder="Ketik nomor tiket (cth: BL-2026-00412)..."
            className="w-full px-3 py-2 text-slate-900 text-sm focus:outline-none"
          />
          <button className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all shrink-0">
            Cari Tiket
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Kolom Kiri: Detail Laporan & Foto */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            
            {/* Header Status */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5">
              <div>
                <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                  {detailAduan.noTiket}
                </span>
                <h2 className="text-xl font-bold text-slate-900 mt-2">
                  {detailAduan.judul}
                </h2>
              </div>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
                ⚡ Status: SEDANG DIPROSES
              </span>
            </div>

            {/* Meta Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block font-medium">Kategori Masalah</span>
                <span className="text-slate-800 font-bold mt-0.5 block">{detailAduan.kategori}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block font-medium">OPD Penanggungjawab</span>
                <span className="text-slate-800 font-bold mt-0.5 block">{detailAduan.opd}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block font-medium">Waktu Pengaduan</span>
                <span className="text-slate-800 font-bold mt-0.5 block">{detailAduan.waktuLapor}</span>
              </div>
            </div>

            {/* Lokasi */}
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-amber-50/50 border border-amber-100 text-xs">
              <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block">Titik Lokasi Kejadian</span>
                <span className="text-slate-600 mt-0.5 block">{detailAduan.lokasi}</span>
              </div>
            </div>

            {/* Deskripsi */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Deskripsi Kronologi
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                {detailAduan.deskripsi}
              </p>
            </div>

            {/* Foto Bukti Kejadian */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Foto Bukti Lapangan
              </h4>
              <div className="rounded-2xl overflow-hidden border border-slate-200 h-64 bg-slate-100 relative">
                <img
                  src={detailAduan.fotoUrl}
                  alt={detailAduan.judul}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

          {/* Diskusi & Komentar */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              Riwayat Komunikasi Petugas & Pelapor
            </h3>

            <div className="space-y-3">
              {detailAduan.komentarList.map((k, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900">{k.nama} ({k.role})</span>
                    <span className="text-slate-400">{k.waktu}</span>
                  </div>
                  <p className="text-xs text-slate-700">{k.pesan}</p>
                </div>
              ))}
            </div>

            {/* Input Komentar */}
            <div className="pt-2 flex gap-2">
              <input
                type="text"
                placeholder="Tulis tanggapan atau informasi tambahan..."
                value={komentarBaru}
                onChange={(e) => setKomentarBaru(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              />
              <button className="px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-all">
                Kirim
              </button>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Timeline Progres */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-6">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-500" />
              <span>Timeline Penanganan (SLA)</span>
            </h3>

            <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
              {detailAduan.timeline.map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Bullet */}
                  <div className={`absolute -left-[27px] top-0 w-4 h-4 rounded-full border-2 ${
                    step.done 
                      ? "bg-emerald-500 border-white shadow-sm" 
                      : step.active 
                        ? "bg-amber-500 border-white ring-4 ring-amber-100" 
                        : "bg-slate-300 border-white"
                  }`} />
                  
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className={`text-xs font-bold ${step.active ? "text-amber-700 font-extrabold" : "text-slate-800"}`}>
                        {step.judul}
                      </h4>
                    </div>
                    <p className="text-[10px] text-slate-400 font-mono">{step.waktu}</p>
                    <p className="text-xs text-slate-500 leading-snug">{step.deskripsi}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs space-y-1">
              <span className="font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Target SLA: 48 Jam
              </span>
              <p className="text-[11px] text-emerald-700">
                Berdasarkan SOP Walikota Bandar Lampung untuk kerusakan jalan kategori sedang-tinggi.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
