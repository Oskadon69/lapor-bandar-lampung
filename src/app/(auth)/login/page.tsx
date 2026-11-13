"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Lock, Mail, ArrowRight, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes("admin")) {
      window.location.href = "/admin";
    } else if (email.includes("opd") || email.includes("petugas")) {
      window.location.href = "/petugas";
    } else if (email.includes("walikota") || email.includes("pimpinan")) {
      window.location.href = "/pimpinan";
    } else {
      window.location.href = "/warga";
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-3xl border border-slate-200 shadow-2xl p-8 space-y-6">
        
        {/* Logo Pemkot & Teknokrat yang seimbang */}
        <div className="flex items-center justify-center gap-3">
          <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center">
            <div className="h-10 w-10 relative">
              <Image
                src="/images/pemkot.png"
                alt="Logo Pemkot"
                fill
                sizes="40px"
                className="object-contain"
              />
            </div>
          </div>
          <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center">
            <div className="h-10 w-28 relative">
              <Image
                src="/images/teknokrat.png"
                alt="Logo Teknokrat"
                fill
                sizes="112px"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="text-center space-y-1">
          <h2 className="text-xl font-black text-slate-900">
            Masuk ke LAPOR! Bandar Lampung
          </h2>
          <p className="text-xs text-slate-500">
            Akses portal pengaduan masyarakat & pemantauan Smart City
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 uppercase">
              Alamat Email / NIK
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              <input
                type="text"
                required
                placeholder="nama@email.com atau 16 digit NIK"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-amber-500 text-slate-900"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 uppercase">
              Kata Sandi
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-amber-500 text-slate-900"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Masuk ke Dashboard</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </form>

        {/* Demo Roles Shortcut Note */}
        <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-[11px] text-slate-600 space-y-1">
          <p className="font-bold text-slate-800">Petunjuk Akun Uji Coba (Demo UTS):</p>
          <p>• Ketik <span className="font-mono text-amber-700 font-semibold">warga@mail.com</span> → Masuk Dashboard Warga</p>
          <p>• Ketik <span className="font-mono text-amber-700 font-semibold">petugas@bandarlampung.go.id</span> → Masuk Petugas OPD</p>
          <p>• Ketik <span className="font-mono text-amber-700 font-semibold">walikota@bandarlampung.go.id</span> → Masuk Pimpinan</p>
          <p>• Ketik <span className="font-mono text-amber-700 font-semibold">admin@bandarlampung.go.id</span> → Masuk Admin Pemda</p>
        </div>

      </div>
    </div>
  );
}
