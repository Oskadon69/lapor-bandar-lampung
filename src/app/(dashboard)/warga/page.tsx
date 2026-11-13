"use client";

import React from "react";
import Link from "next/link";
import { 
  FileText, 
  Plus, 
  Clock, 
  CheckCircle2, 
  MapPin, 
  ArrowRight,
  User,
  ShieldCheck
} from "lucide-react";

export default function WargaDashboard() {
  const pengaduanSaya = [
    {
      id: "BL-2026-00412",
      judul: "Aspal Amblas Parah dekat Flyover Mall Boemi Kedaton",
      kategori: "Jalan Rusak",
      tanggal: "13 Nov 2026",
      status: "DIPROSES",
      lokasi: "Jl. Teuku Umar, Kedaton"
    },
    {
      id: "BL-2026-00350",
      judul: "Lampu Penerangan Jalan Umum Mati 3 Titik",
      kategori: "Lampu Jalan",
      tanggal: "02 Nov 2026",
      status: "SELESAI",
      lokasi: "Jl. Pangeran Antasari"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header Profile Warga */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-amber-500 text-slate-950 font-black text-xl flex items-center justify-center shrink-0">
            RK
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black">
              Selamat Datang, Ridho Kurniawan
            </h1>
            <p className="text-xs text-slate-300 mt-0.5">
              NIK Terverifikasi: 1871xxxxxxxx0001 • Warga Kota Bandar Lampung
            </p>
          </div>
        </div>

        <Link
          href="/warga/buat"
          className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all self-start sm:self-auto shadow-lg shadow-amber-500/20"
        >
          <Plus className="w-4 h-4" />
          <span>Buat Pengaduan Baru</span>
        </Link>
      </div>

      {/* Riwayat Laporan */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-slate-900">
          Riwayat Pengaduan Saya
        </h2>

        <div className="space-y-3">
          {pengaduanSaya.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:border-amber-400 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                    {item.id}
                  </span>
                  <span className="text-xs text-slate-400">• {item.tanggal}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900">
                  {item.judul}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{item.lokasi}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 self-end sm:self-auto">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                  item.status === "SELESAI" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
                }`}>
                  {item.status}
                </span>
                <Link
                  href={`/warga/lacak?tiket=${item.id}`}
                  className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-all flex items-center gap-1"
                >
                  <span>Detail</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
