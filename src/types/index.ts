// ============================================================
// LAPOR! Bandar Lampung — TypeScript Interfaces
// Copyright © 2026 by Ridho Kurniawan dan Dr. Erliyan Redy Susanto, M.Kom
// ============================================================

export type UserRole = 'warga' | 'petugas_opd' | 'admin_pemda' | 'pimpinan';

export type StatusPengaduan =
  | 'BARU'
  | 'VERIFIKASI'
  | 'DIPROSES'
  | 'SELESAI'
  | 'DITOLAK';

export type PrioritasPengaduan = 'RENDAH' | 'SEDANG' | 'TINGGI' | 'KRITIS';

// ── User ─────────────────────────────────────────────────────
export interface User {
  id: string;
  nama: string;
  email: string;
  nik?: string;
  noHp?: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

// ── OPD ──────────────────────────────────────────────────────
export interface OPD {
  id: string;
  nama: string;
  singkatan: string;
  kepala?: string;
  email?: string;
  telepon?: string;
  createdAt: string;
}

// ── Kategori ─────────────────────────────────────────────────
export interface Kategori {
  id: string;
  nama: string;
  deskripsi?: string;
  opdId?: string;
  opd?: OPD;
  icon?: string;
}

// ── Foto Pengaduan ────────────────────────────────────────────
export interface FotoPengaduan {
  id: string;
  url: string;
  publicId?: string;
  pengaduanId: string;
  createdAt: string;
}

// ── Riwayat Status ────────────────────────────────────────────
export interface RiwayatStatus {
  id: string;
  pengaduanId: string;
  status: StatusPengaduan;
  catatan?: string;
  createdBy: string;
  user?: User;
  createdAt: string;
}

// ── Komentar ─────────────────────────────────────────────────
export interface Komentar {
  id: string;
  pengaduanId: string;
  userId: string;
  user?: User;
  isi: string;
  isInternal: boolean;
  createdAt: string;
}

// ── Pengaduan ─────────────────────────────────────────────────
export interface Pengaduan {
  id: string;
  judul: string;
  deskripsi: string;
  status: StatusPengaduan;
  prioritas: PrioritasPengaduan;
  kategoriId: string;
  kategori?: Kategori;
  pelaporId: string;
  pelapor?: User;
  petugasId?: string;
  petugas?: User;
  opdId?: string;
  opd?: OPD;
  alamat?: string;
  lat?: number;
  lng?: number;
  fotos?: FotoPengaduan[];
  riwayatStatus?: RiwayatStatus[];
  komentar?: Komentar[];
  createdAt: string;
  updatedAt: string;
}

// ── Statistik ─────────────────────────────────────────────────
export interface StatistikPengaduan {
  total: number;
  baru: number;
  verifikasi: number;
  diproses: number;
  selesai: number;
  ditolak: number;
}

export interface StatistikOPD {
  opdId: string;
  namaOpd: string;
  total: number;
  selesai: number;
  diproses: number;
  rataWaktuSelesai?: number; // hari
  persentaseSelesai: number;
}

export interface DataBulanan {
  bulan: string;
  total: number;
  selesai: number;
  diproses: number;
}

export interface DataKategori {
  kategori: string;
  jumlah: number;
  persentase: number;
}

// ── API Response ──────────────────────────────────────────────
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  pagination?: Pagination;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

// ── Form Types ────────────────────────────────────────────────
export interface FormPengaduan {
  judul: string;
  kategoriId: string;
  deskripsi: string;
  prioritas: PrioritasPengaduan;
  alamat: string;
  lat?: number;
  lng?: number;
  fotos?: File[];
}

export interface FormLogin {
  email: string;
  password: string;
}

export interface FormRegister {
  nama: string;
  email: string;
  nik: string;
  noHp: string;
  password: string;
  confirmPassword: string;
}

export interface FormUpdateStatus {
  status: StatusPengaduan;
  catatan: string;
}
