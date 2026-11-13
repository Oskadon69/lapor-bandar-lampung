import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Generate nomor laporan format: BL-YYYY-XXXXX
 * e.g. BL-2026-00001
 */
export function generateNoLaporan(sequence: number): string {
  const year = new Date().getFullYear();
  const seq = String(sequence).padStart(5, "0");
  return `BL-${year}-${seq}`;
}

/**
 * Format tanggal ke locale Indonesia
 */
export function formatTanggal(date: Date | string): string {
  return new Date(date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Format tanggal + waktu
 */
export function formatTanggalWaktu(date: Date | string): string {
  return new Date(date).toLocaleString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/**
 * Map status to label Bahasa Indonesia
 */
export const statusLabel: Record<string, string> = {
  BARU: "Baru",
  DIVERIFIKASI: "Diverifikasi",
  DIPROSES: "Diproses",
  SELESAI: "Selesai",
  DITOLAK: "Ditolak",
};

/**
 * Map status to Tailwind color class
 */
export function formatStatus(status: string): string {
  return statusLabel[status] || status;
}

export function getStatusColor(status: string): string {
  return statusColor[status] || "bg-slate-100 text-slate-800 border-slate-200";
}

export function getStatusDotColor(status: string): string {
  const dotColors: Record<string, string> = {
    BARU: "bg-blue-500",
    VERIFIKASI: "bg-indigo-500",
    DIVERIFIKASI: "bg-yellow-500",
    DIPROSES: "bg-amber-500",
    SELESAI: "bg-emerald-500",
    DITOLAK: "bg-red-500",
  };
  return dotColors[status] || "bg-slate-400";
}

export const statusColor: Record<string, string> = {
  BARU: "bg-blue-100 text-blue-800",
  DIVERIFIKASI: "bg-yellow-100 text-yellow-800",
  DIPROSES: "bg-orange-100 text-orange-800",
  SELESAI: "bg-green-100 text-green-800",
  DITOLAK: "bg-red-100 text-red-800",
};

/**
 * Map prioritas to label
 */
export const prioritasLabel: Record<string, string> = {
  RENDAH: "Rendah",
  SEDANG: "Sedang",
  TINGGI: "Tinggi",
  DARURAT: "Darurat",
};

/**
 * Map prioritas to color class
 */
export const prioritasColor: Record<string, string> = {
  RENDAH: "bg-gray-100 text-gray-700",
  SEDANG: "bg-blue-100 text-blue-700",
  TINGGI: "bg-orange-100 text-orange-700",
  DARURAT: "bg-red-100 text-red-700",
};

/**
 * Map role to label
 */
export const roleLabel: Record<string, string> = {
  WARGA: "Warga",
  PETUGAS_OPD: "Petugas OPD",
  ADMIN_PEMDA: "Admin Pemda",
  PIMPINAN: "Pimpinan",
};

/**
 * Truncate string with ellipsis
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + "...";
}

/**
 * Build error response
 */
export function errorResponse(message: string, status = 400) {
  return Response.json({ success: false, error: message }, { status });
}

/**
 * Build success response
 */
export function successResponse(data: unknown, status = 200) {
  return Response.json({ success: true, data }, { status });
}
