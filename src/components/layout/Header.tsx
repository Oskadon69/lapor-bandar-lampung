"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Building2, 
  Menu, 
  X, 
  AlertCircle, 
  User, 
  Shield, 
  Layers, 
  BarChart3,
  ChevronDown
} from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setRoleDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900 border-b border-slate-800 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Identitas Sistem — Warna Latar Belakang Selaras dengan Header */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="flex items-center gap-3 bg-slate-800/80 px-3 py-1.5 rounded-2xl border border-slate-700/60 shadow-inner group-hover:border-amber-400/50 transition-all">
              {/* Logo Pemkot Bandar Lampung */}
              <div className="h-11 w-11 relative flex items-center justify-center">
                <Image
                  src="/images/pemkot_trans.png"
                  alt="Logo Pemkot Bandar Lampung"
                  width={44}
                  height={44}
                  className="object-contain h-11 w-auto drop-shadow"
                  priority
                />
              </div>

              <div className="w-[1px] h-7 bg-slate-700/60" />

              {/* Logo Universitas Teknokrat Indonesia (Ukuran Presisi Sama) */}
              <div className="h-11 w-11 relative flex items-center justify-center">
                <Image
                  src="/images/teknokrat_trans.png"
                  alt="Logo Universitas Teknokrat Indonesia"
                  width={44}
                  height={44}
                  className="object-contain h-11 w-auto drop-shadow"
                  priority
                />
              </div>
            </div>

            <div className="hidden sm:block">
              <span className="text-base font-black tracking-tight text-white flex items-center gap-1.5">
                LAPOR! <span className="text-amber-400 font-extrabold">Bandar Lampung</span>
              </span>
              <span className="text-[11px] block text-slate-300 font-medium">
                Portal Smart City & Tracking Pengaduan
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
            <Link 
              href="/" 
              className="px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-slate-800 transition-colors"
            >
              Beranda
            </Link>
            <Link 
              href="/warga/buat" 
              className="px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-slate-800 transition-colors"
            >
              Lapor Masalah
            </Link>
            <Link 
              href="/warga/lacak" 
              className="px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-slate-800 transition-colors"
            >
              Lacak Aduan
            </Link>
            
            {/* Click-based Dropdown untuk Simulasi Role User */}
            <div className="relative ml-2" ref={dropdownRef}>
              <button 
                type="button"
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-800 text-xs text-amber-400 font-bold border border-amber-400/40 hover:bg-slate-700 hover:border-amber-400 transition-all cursor-pointer shadow-sm"
              >
                <Layers className="w-4 h-4 text-amber-400" />
                <span>Simulasi Role User</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${roleDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {roleDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-60 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl py-2 z-50">
                  <div className="px-4 py-2 border-b border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Pilih Role Pengguna
                  </div>
                  <Link 
                    href="/warga" 
                    onClick={() => setRoleDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-xs text-slate-200 hover:bg-slate-800 hover:text-amber-400 transition-colors"
                  >
                    <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold">Dashboard Warga</div>
                      <div className="text-[10px] text-slate-400">Riwayat & status tiket pribadi</div>
                    </div>
                  </Link>

                  <Link 
                    href="/petugas" 
                    onClick={() => setRoleDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-xs text-slate-200 hover:bg-slate-800 hover:text-amber-400 transition-colors"
                  >
                    <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold">Portal Petugas OPD</div>
                      <div className="text-[10px] text-slate-400">Tindak lanjut & aksi lapangan</div>
                    </div>
                  </Link>

                  <Link 
                    href="/pimpinan" 
                    onClick={() => setRoleDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-xs text-slate-200 hover:bg-slate-800 hover:text-amber-400 transition-colors"
                  >
                    <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-400">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold">Dashboard Pimpinan</div>
                      <div className="text-[10px] text-slate-400">Monitoring Walikota & Kadis</div>
                    </div>
                  </Link>

                  <Link 
                    href="/admin" 
                    onClick={() => setRoleDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-xs text-slate-200 hover:bg-slate-800 hover:text-amber-400 transition-colors"
                  >
                    <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold">Admin Pemda</div>
                      <div className="text-[10px] text-slate-400">Master data OPD & kategori</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="text-xs font-semibold px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              Masuk
            </Link>
            <Link
              href="/warga/buat"
              className="text-xs font-bold px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center gap-1.5"
            >
              <AlertCircle className="w-4 h-4" />
              <span>Buat Laporan</span>
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            Beranda
          </Link>
          <Link
            href="/warga/buat"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-amber-400 hover:bg-slate-800"
          >
            + Buat Pengaduan
          </Link>
          <Link
            href="/warga/lacak"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            Lacak Status Laporan
          </Link>
          <div className="pt-2 border-t border-slate-800">
            <div className="text-xs uppercase font-bold text-slate-400 px-3 mb-1">
              Simulasi Role User
            </div>
            <Link href="/warga" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-1.5 text-sm text-slate-300 hover:text-amber-400">
              Dashboard Warga
            </Link>
            <Link href="/petugas" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-1.5 text-sm text-slate-300 hover:text-amber-400">
              Portal Petugas OPD
            </Link>
            <Link href="/pimpinan" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-1.5 text-sm text-slate-300 hover:text-amber-400">
              Dashboard Pimpinan
            </Link>
            <Link href="/admin" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-1.5 text-sm text-slate-300 hover:text-amber-400">
              Admin Pemda
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
