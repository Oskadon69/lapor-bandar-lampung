"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Users, 
  Building2, 
  Layers, 
  Settings, 
  Plus, 
  Trash2, 
  Edit3,
  Search
} from "lucide-react";

export default function AdminPemdaDashboard() {
  const [activeTab, setActiveTab] = useState<"opd" | "kategori" | "users">("opd");

  const opdList = [
    { nama: "Dinas Bina Marga & Bina Konstruksi", kategori: "Jalan & Jembatan", kontak: "0721-482100", email: "pu@bandarlampungkota.go.id" },
    { nama: "Dinas Lingkungan Hidup (DLH)", kategori: "Sampah & Sanitasi", kontak: "0721-483200", email: "dlh@bandarlampungkota.go.id" },
    { nama: "Dinas Perhubungan & PJU", kategori: "Lampu Jalan & Rekayasa Lalin", kontak: "0721-484300", email: "dishub@bandarlampungkota.go.id" },
    { nama: "Satpol PP Kota Bandar Lampung", kategori: "Ketertiban Umum", kontak: "0721-485400", email: "satpolpp@bandarlampungkota.go.id" },
    { nama: "Disdukcapil Bandar Lampung", kategori: "Pelayanan Kependudukan", kontak: "0721-486500", email: "disdukcapil@bandarlampungkota.go.id" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            Master Data & Pengaturan Sistem
          </span>
          <h1 className="text-2xl sm:text-3xl font-black mt-1">
            Konsol Admin Pemerintah Kota Bandar Lampung
          </h1>
          <p className="text-xs text-slate-300 mt-1">
            Kelola data Organisasi Perangkat Daerah (OPD), Kategori Masalah Kota, dan Manajemen User Role.
          </p>
        </div>
        <button 
          onClick={() => alert("Tambah OPD baru dialog opened")}
          className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all self-start md:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Tambah OPD Baru</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 gap-4 text-xs font-bold">
        <button
          onClick={() => setActiveTab("opd")}
          className={`pb-3 border-b-2 transition-all ${activeTab === "opd" ? "border-amber-500 text-slate-950" : "border-transparent text-slate-400 hover:text-slate-700"}`}
        >
          Daftar OPD ({opdList.length})
        </button>
        <button
          onClick={() => setActiveTab("kategori")}
          className={`pb-3 border-b-2 transition-all ${activeTab === "kategori" ? "border-amber-500 text-slate-950" : "border-transparent text-slate-400 hover:text-slate-700"}`}
        >
          Klasifikasi Kategori Masalah
        </button>
        <button
          onClick={() => setActiveTab("users")}
          className={`pb-3 border-b-2 transition-all ${activeTab === "users" ? "border-amber-500 text-slate-950" : "border-transparent text-slate-400 hover:text-slate-700"}`}
        >
          Manajemen Pengguna & Kredensial
        </button>
      </div>

      {/* Tabel Konten OPD */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase font-semibold">
              <tr>
                <th className="px-6 py-4">Nama OPD / Instansi</th>
                <th className="px-6 py-4">Fokus Bidang Penanganan</th>
                <th className="px-6 py-4">Kontak Resmi</th>
                <th className="px-6 py-4">Email Dinas</th>
                <th className="px-6 py-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
              {opdList.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-900">{item.nama}</td>
                  <td className="px-6 py-4 text-amber-700 font-semibold">{item.kategori}</td>
                  <td className="px-6 py-4 font-mono">{item.kontak}</td>
                  <td className="px-6 py-4 text-slate-500">{item.email}</td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600">
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-1.5 rounded-lg hover:bg-red-50 text-red-600">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
