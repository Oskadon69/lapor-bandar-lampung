import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  GraduationCap
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-200 border-t border-slate-800">
      {/* Bagian Utama Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Kolom 1: Profil & Logo Bersama */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="bg-slate-800/80 px-3 py-2 rounded-2xl border border-slate-700/60 shadow-inner flex items-center gap-3">
                <div className="h-11 w-11 relative flex items-center justify-center">
                  <Image
                    src="/images/pemkot_trans.png"
                    alt="Logo Pemkot Bandar Lampung"
                    width={44}
                    height={44}
                    className="object-contain h-11 w-auto drop-shadow"
                  />
                </div>
                <div className="w-[1px] h-7 bg-slate-700/60" />
                <div className="h-11 w-11 relative flex items-center justify-center">
                  <Image
                    src="/images/teknokrat_trans.png"
                    alt="Logo Universitas Teknokrat Indonesia"
                    width={44}
                    height={44}
                    className="object-contain h-11 w-auto drop-shadow"
                  />
                </div>
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-white tracking-tight">
              LAPOR! Bandar Lampung
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Portal Pengaduan Masyarakat Terpadu berbasis Smart City untuk Pemerintah Kota Bandar Lampung. Mempercepat responsivitas penanganan masalah perkotaan: infrastruktur jalan, sanitasi sampah, lampu penerangan jalan (PJU), dan pelayanan publik.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
              <GraduationCap className="w-4 h-4" />
              <span>Kolaborasi Akademik & Implementasi Smart City — Universitas Teknokrat Indonesia</span>
            </div>
          </div>

          {/* Kolom 2: Layanan & Tautan Cepat */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-100">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/warga/buat" className="hover:text-amber-400 transition-colors">
                  Buat Pengaduan Baru
                </Link>
              </li>
              <li>
                <Link href="/warga/lacak" className="hover:text-amber-400 transition-colors">
                  Lacak Status Aduan
                </Link>
              </li>
              <li>
                <Link href="/pimpinan" className="hover:text-amber-400 transition-colors">
                  Executive Dashboard (Pimpinan)
                </Link>
              </li>
              <li>
                <Link href="/petugas" className="hover:text-amber-400 transition-colors">
                  Portal Petugas OPD
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-amber-400 transition-colors">
                  Admin Konsol Pemda
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak & Alamat Kantor */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-100">
              Kontak Layanan
            </h4>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Jl. Dr. Susilo No. 2, Sumur Batu, Telukbetung Utara, Kota Bandar Lampung, Lampung 35214</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Call Center 112 / (0721) 481234</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>pengaduan@bandarlampungkota.go.id</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-300">Enkripsi Data & Perlindungan Pelapor</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bagian Copyright Footer — Wajib Memuat Logo & Nama Dosen + Mahasiswa */}
      <div className="border-t border-slate-800 bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-slate-900 px-2.5 py-1.5 rounded-xl border border-slate-800 flex items-center gap-2">
              <div className="h-6 w-6 relative flex items-center justify-center">
                <Image
                  src="/images/pemkot_trans.png"
                  alt="Pemkot Bandar Lampung"
                  width={24}
                  height={24}
                  className="object-contain h-6 w-auto"
                />
              </div>
              <div className="w-[1px] h-4 bg-slate-700" />
              <div className="h-6 w-6 relative flex items-center justify-center">
                <Image
                  src="/images/teknokrat_trans.png"
                  alt="Universitas Teknokrat Indonesia"
                  width={24}
                  height={24}
                  className="object-contain h-6 w-auto"
                />
              </div>
            </div>
            <span className="text-slate-600 hidden md:inline">|</span>
            <p className="text-xs sm:text-sm font-medium text-slate-300 text-center md:text-left">
              Copyright © 2026 by Ridho Kurniawan dan Dr. Erliyan Redy Susanto, M.Kom
            </p>
          </div>

          <div className="text-xs text-slate-400 flex items-center gap-4">
            <span>Tugas UTS Smart City</span>
            <span>•</span>
            <span>Kota Bandar Lampung</span>
            <span>•</span>
            <span className="text-amber-400 font-semibold">Teknokrat Juara</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
