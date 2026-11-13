"use client";

import React from "react";
import Link from "next/link";
import { 
  BarChart3, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  Building2, 
  Award, 
  ArrowUpRight,
  Download,
  Filter,
  Users
} from "lucide-react";

export default function PimpinanDashboard() {
  const kpiData = [
    { label: "Total Laporan Tahun 2026", value: "4.442", delta: "+18%", icon: BarChart3, color: "text-blue-600 bg-blue-50" },
    { label: "Laporan Selesai Ditangani", value: "4.108", delta: "92,4%", icon: CheckCircle2, color: "text-emerald-600 bg-emerald-50" },
    { label: "Sedang Dalam Pengerjaan", value: "284", delta: "6,4%", icon: Clock, color: "text-amber-600 bg-amber-50" },
    { label: "Indeks Kepuasan Warga", value: "4.7 / 5.0", delta: "Sangat Baik", icon: Award, color: "text-purple-600 bg-purple-50" },
  ];

  const rankingOPD = [
    { nama: "Dinas Lingkungan Hidup (DLH)", masuk: 1240, selesai: 1198, sla: "18 Jam", skor: 96.6, status: "Sangat Responsif" },
    { nama: "Dinas Bina Marga & Bina Konstruksi", masuk: 1420, selesai: 1310, sla: "36 Jam", skor: 92.2, status: "Tepat Waktu" },
    { nama: "Dinas Perhubungan & PJU", masuk: 890, selesai: 820, sla: "24 Jam", skor: 92.1, status: "Tepat Waktu" },
    { nama: "Satpol PP Kota Bandar Lampung", masuk: 450, selesai: 432, sla: "12 Jam", skor: 96.0, status: "Sangat Responsif" },
    { nama: "Dinas Kependudukan & Catatan Sipil", masuk: 442, selesai: 348, sla: "42 Jam", skor: 78.7, status: "Perlu Evaluasi" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Executive Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 p-6 sm:p-8 rounded-3xl text-white shadow-xl">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-semibold border border-amber-500/30">
            <span>Executive Command Center</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Dashboard Pemantauan Walikota & Kepala Dinas
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Monitoring kinerja penanganan aduan masyarakat dan kepatuhan SLA antar-OPD di Kota Bandar Lampung.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start md:self-auto">
          <button 
            onClick={() => alert("Laporan Executive Summary Bandar Lampung berhasil diekspor ke PDF")}
            className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-lg shadow-amber-500/20"
          >
            <Download className="w-4 h-4" />
            <span>Unduh Laporan Eksekutif</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, idx) => {
          const IconComp = kpi.icon;
          return (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">{kpi.label}</span>
                <div className={`p-2.5 rounded-xl ${kpi.color}`}>
                  <IconComp className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-baseline justify-between">
                <p className="text-2xl font-black text-slate-900">{kpi.value}</p>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                  {kpi.delta}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tabel Kinerja OPD & Evaluasi Pimpinan */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-bold text-slate-900">
              Peringkat Kinerja & Kepatuhan SLA Perangkat Daerah (OPD)
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Evaluasi kecepatan tindak lanjut keluhan masyarakat se-Kota Bandar Lampung.
            </p>
          </div>
          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg self-start">
            Periode: Januari - November 2026
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase font-semibold">
              <tr>
                <th className="px-6 py-4">Nama Instansi / OPD</th>
                <th className="px-4 py-4 text-center">Aduan Masuk</th>
                <th className="px-4 py-4 text-center">Selesai</th>
                <th className="px-4 py-4 text-center">Rata-rata Respon</th>
                <th className="px-4 py-4 text-center">Skor Efektivitas</th>
                <th className="px-6 py-4 text-right">Status Evaluasi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
              {rankingOPD.map((opd, i) => (
                <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-900">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-slate-400" />
                      <span>{opd.nama}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center">{opd.masuk.toLocaleString()}</td>
                  <td className="px-4 py-4 text-center text-emerald-600 font-bold">{opd.selesai.toLocaleString()}</td>
                  <td className="px-4 py-4 text-center font-mono">{opd.sla}</td>
                  <td className="px-4 py-4 text-center">
                    <span className="font-extrabold text-slate-900">{opd.skor}%</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                      opd.skor > 90 
                        ? "bg-emerald-100 text-emerald-800" 
                        : "bg-red-100 text-red-800"
                    }`}>
                      {opd.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ringkasan Rekomendasi Pimpinan */}
      <div className="p-6 rounded-3xl bg-amber-50 border border-amber-200 flex items-start gap-4">
        <div className="p-3 bg-amber-500 text-slate-950 rounded-2xl shrink-0 font-black">
          i
        </div>
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-slate-900">Catatan Rekomendasi Walikota untuk Rapat Koordinasi</h4>
          <p className="text-xs text-slate-700 leading-relaxed">
            Perlu penambahan armada pemeliharaan jalan Dinas PU di Kecamatan Sukarame dan Kedaton karena tingginya intensitas laporan jalan rusak. Selain itu, Disdukcapil diminta mempersingkat durasi antrean antrian berkas perizinan agar skor efektivitas mencapai standar minimal 85%.
          </p>
        </div>
      </div>

    </div>
  );
}
