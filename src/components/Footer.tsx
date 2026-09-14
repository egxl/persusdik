import React from "react";
import { PageId } from "../types/navigation";
import { Shield, ArrowUp, Download, FileText, ChevronRight } from "lucide-react";

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenPdfModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPdfModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Institution & Brand Context (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-navy-800 border border-slate-700 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-brass-400" />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-semibold">
                  Republik Indonesia
                </div>
                <div className="font-extrabold text-xl text-white tracking-tight">
                  PERSUSDIK • P3MD BATCH 1
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              Portal Peraturan Khusus Peserta Didik (PERKHUSSERDIK) merupakan rujukan tunggal tata tertib, etika kepemimpinan, kedisiplinan kesatrian, dan komando operasional bagi 44 calon pemimpin masa depan bangsa di Lembaga Pendidikan Kesatrian Serpong.
            </p>

            <div className="p-3.5 rounded-xl bg-navy-900 border border-navy-800 text-xs space-y-1">
              <div className="text-brass-400 font-mono font-bold text-[10px] tracking-wider uppercase">
                KOMANDAN BATCH 1 SOEDIRMAN
              </div>
              <div className="font-semibold text-sm text-white">Marsma TNI Dr. Anton Pallaguna</div>
              <div className="text-slate-400 font-mono text-[11px]">
                M.Han., M.M.O.A.S., CHRA., CSBA.
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold text-white tracking-wider uppercase border-b border-navy-800 pb-2">
              Modul Peraturan
            </div>
            <ul className="space-y-2 text-sm font-sans">
              <li>
                <button
                  onClick={() => onNavigate("naskah")}
                  className="text-slate-400 hover:text-white transition flex items-center space-x-2 cursor-pointer text-xs"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-command-500 shrink-0" />
                  <span>Naskah Lengkap (8 BAB & 42 Pasal)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("jadwal")}
                  className="text-slate-400 hover:text-white transition flex items-center space-x-2 cursor-pointer text-xs"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-command-500 shrink-0" />
                  <span>Jadwal Harian Serdik (Pasal 18)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("disiplin")}
                  className="text-slate-400 hover:text-white transition flex items-center space-x-2 cursor-pointer text-xs"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-command-500 shrink-0" />
                  <span>Matriks Disiplin & Pelanggaran</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("organisasi")}
                  className="text-slate-400 hover:text-white transition flex items-center space-x-2 cursor-pointer text-xs"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-command-500 shrink-0" />
                  <span>Struktur Korps Siswa (44 Jabatan)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("faq")}
                  className="text-slate-400 hover:text-white transition flex items-center space-x-2 cursor-pointer text-xs"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-command-500 shrink-0" />
                  <span>Tanya Jawab Aturan (FAQ)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("kuis")}
                  className="text-slate-400 hover:text-white transition flex items-center space-x-2 cursor-pointer text-xs"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-command-500 shrink-0" />
                  <span>Uji Kesiapan Mandiri (10 Kasus)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal Basis & Document Direct Access (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono font-bold text-white tracking-wider uppercase border-b border-navy-800 pb-2">
              Landasan Hukum & Berkas Resmi
            </div>
            <div className="text-xs text-slate-400 space-y-1.5 font-sans">
              <div className="flex items-start space-x-2">
                <span className="text-command-400">•</span>
                <span>UU No. 16 Tahun 2025 tentang Badan Usaha Milik Negara (BUMN)</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-command-400">•</span>
                <span>Juknis Pembinaan Kepribadian & Kedisiplinan Serdik</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-command-400">•</span>
                <span>Peraturan Tetap Lemdik tentang Standar Evaluasi Siswa</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <button
                onClick={onOpenPdfModal}
                className="inline-flex items-center justify-center space-x-2 px-3 py-2 rounded-lg text-xs bg-navy-900 border border-slate-700 text-slate-200 hover:bg-navy-800 hover:text-white transition font-semibold cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-command-400" />
                <span>Buka PDF In-App</span>
              </button>

              <a
                href="./PERATURAN%20KHUSUS%20SERDIK%20P3MD%20BATCH%201%202026.pdf"
                download
                className="inline-flex items-center justify-center space-x-2 px-3 py-2 rounded-lg text-xs bg-command-700 hover:bg-command-600 text-white transition font-semibold shadow-xs cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh PDF (443 KB)</span>
              </a>
            </div>

            <div className="pt-1 text-[11px] text-slate-500 font-mono">
              Dokumen Terverifikasi • 42 Halaman • Edisi TA 2026
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-navy-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-sans">
          <div>
            © 2026 Lembaga Pendidikan Kesatrian Serpong. Hak Cipta Dilindungi.
          </div>

          <div className="flex items-center space-x-4 text-xs">
            <button
              onClick={() => onNavigate("home")}
              className="hover:text-white transition cursor-pointer"
            >
              Beranda
            </button>
            <span className="text-slate-600">•</span>
            <button
              onClick={() => onNavigate("naskah")}
              className="hover:text-white transition cursor-pointer"
            >
              Pedoman
            </button>
            <span className="text-slate-600">•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1 text-brass-400 hover:text-brass-300 transition font-semibold cursor-pointer ml-2"
              aria-label="Kembali ke bagian atas halaman"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

