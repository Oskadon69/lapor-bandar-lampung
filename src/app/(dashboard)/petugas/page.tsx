"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Building2, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  MapPin, 
  Camera, 
  MessageSquare,
  FileCheck,
  Filter
} from "lucide-react";

export default function PetugasOPDDashboard() {
  const [filterKategori, setFilterKategori] = useState("Semua");

  const [tugasList, setTugasList] = useState([
    {
      id: "BL-2026-00412",
      judul: "Aspal Amblas Parah dekat Flyover Mall Boemi Kedaton",
      kategori: "Jalan Rusak",
      lokasi: "Jl. Teuku Umar, Kedaton",
      prioritas: "TINGGI",
      status: "DIPROSES",
      deadline: "14 Nov 2026",
      foto: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=400&auto=format&fit=crop&q=60"
    },
    {
      id: "BL-2026-00415",
      judul: "Lubang Jalan Menganga Sedalam 15cm di Depan Radar Lampung",
      kategori: "Jalan Rusak",
      lokasi: "Jl. Sultan Agung, Way Halim",
      prioritas: "DARURAT",
      status: "BARU",
      deadline: "13 Nov 2026",
      foto: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&auto=format&fit=crop&q=60"
    },
    {
      id: "BL-2026-00388",
      judul: "Pelebaran Tikungan dan Perbaikan Bahu Jalan Amblas",
      kategori: "Jalan Rusak",
      lokasi: "Jl. Raden Intan, Enggal",
      prioritas: "SEDANG",
      status: "SELESAI",
      deadline: "12 Nov 2026",
      foto: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=400&auto=format&fit=crop&q=60"
    }
  ]);

  const updateStatus = (id: string, newStatus: string) => {
    setTugasList(prev => prev.map(item => item.id === id ? { ...item, status: newStatus } : item));
    alert(`Status pengaduan ${id} berhasil diperbarui menjadi ${newStatus}! Catatan teknis disimpan.`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header OPD */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            Portal Penanganan Lapangan
          </span>
          <h1 className="text-2xl sm:text-3xl font-black mt-1">
            Dinas Bina Marga & Bina Konstruksi
          </h1>
          <p className="text-xs text-slate-300 mt-1">
            Unit Reaksi Cepat (URC) Wilayah Kerja Kota Bandar Lampung
          </p>
        </div>
        <div className="flex gap-2">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
            2 Tugas Menunggu Tindakan
          </span>
        </div>
      </div>

      {/* Task List */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-slate-900">
          Daftar Disposisi Masalah yang Harus Ditangani
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tugasList.map((tugas) => (
            <div key={tugas.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between">
              
              <div className="h-40 bg-slate-100 relative">
                <img src={tugas.foto} alt={tugas.judul} className="w-full h-full object-cover" />
                <span className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  tugas.prioritas === "DARURAT" ? "bg-red-600 text-white" : "bg-amber-500 text-slate-950"
                }`}>
                  Prioritas: {tugas.prioritas}
                </span>
                <span className="absolute bottom-2 right-2 font-mono text-[10px] bg-black/70 text-white px-2 py-0.5 rounded">
                  {tugas.id}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {tugas.judul}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span className="truncate">{tugas.lokasi}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Status Saat Ini:</span>
                    <span className={`font-bold px-2.5 py-0.5 rounded-full text-[11px] ${
                      tugas.status === "SELESAI" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
                    }`}>
                      {tugas.status}
                    </span>
                  </div>

                  {/* Tombol Aksi Lapangan */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      onClick={() => updateStatus(tugas.id, "DIPROSES")}
                      className="px-3 py-2 bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-bold rounded-xl transition-all"
                    >
                      Mulai Tangani
                    </button>
                    <button
                      onClick={() => updateStatus(tugas.id, "SELESAI")}
                      className="px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold rounded-xl transition-all"
                    >
                      Tandai Selesai
                    </button>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
