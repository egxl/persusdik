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
    <footer className="bg-ink-950 text-parchment-200 border-t-2 border-bronze-600/40 relative">
      {/* Decorative top accent line */}
      <div className="h-1 bg-gradient-to-r from-bronze-600 via-bronze-400 to-bronze-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Institution & Brand Context (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-parchment-100/10 border border-bronze-500/40 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-bronze-400" />
              </div>
              <div>
                <div className="font-cinzel text-xs uppercase tracking-widest text-bronze-400 font-semibold">
                  Republik Indonesia
                </div>
                <div className="font-cinzel font-bold text-lg text-parchment-50 tracking-tight">
                  PERSUSDIK • P3MD BATCH 1
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-parchment-200/80 leading-relaxed font-sans">
              Portal Peraturan Khusus Peserta Didik (PERKHUSSERDIK) merupakan rujukan tunggal tata tertib, etika kepemimpinan, disiplin militer-sipil, dan komando operasional bagi 44 calon pemimpin masa depan bangsa di Lembaga Pendidikan Kesatrian Serpong.
            </p>

            <div className="p-3.5 rounded-xl bg-ink-900/90 border border-bronze-500/20 text-xs space-y-1">
              <div className="text-bronze-400 font-cinzel font-bold text-[11px] tracking-wide">
                KOMANDAN BATCH 1 SOEDIRMAN
              </div>
              <div className="font-semibold text-parchment-100">Marsma TNI Dr. Anton Pallaguna</div>
              <div className="text-[10px] font-mono text-parchment-300/70">
                M.Han., M.M.O.A.S., CHRA., CSBA.
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-cinzel text-xs font-bold text-parchment-50 tracking-wider uppercase border-b border-parchment-300/20 pb-2">
              Modul Peraturan
            </div>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <button
                  onClick={() => onNavigate("naskah")}
                  className="text-parchment-200/80 hover:text-bronze-400 transition flex items-center space-x-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-bronze-500 shrink-0" />
                  <span>Naskah Lengkap (8 BAB)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("jadwal")}
                  className="text-parchment-200/80 hover:text-bronze-400 transition flex items-center space-x-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-bronze-500 shrink-0" />
                  <span>Jadwal Harian Serdik (Pasal 18)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("disiplin")}
                  className="text-parchment-200/80 hover:text-bronze-400 transition flex items-center space-x-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-bronze-500 shrink-0" />
                  <span>Matriks Disiplin & Pelanggaran</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("organisasi")}
                  className="text-parchment-200/80 hover:text-bronze-400 transition flex items-center space-x-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-bronze-500 shrink-0" />
                  <span>Struktur Korps Siswa (44 Jabatan)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("faq")}
                  className="text-parchment-200/80 hover:text-bronze-400 transition flex items-center space-x-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-bronze-500 shrink-0" />
                  <span>Tanya Jawab Aturan (FAQ)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("kuis")}
                  className="text-parchment-200/80 hover:text-bronze-400 transition flex items-center space-x-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-bronze-500 shrink-0" />
                  <span>Uji Kesiapan Mandiri (10 Kasus)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal Basis & Document Direct Access (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="font-cinzel text-xs font-bold text-parchment-50 tracking-wider uppercase border-b border-parchment-300/20 pb-2">
              Landasan Hukum & Berkas Resmi
            </div>
            <div className="text-xs text-parchment-200/80 space-y-1.5 font-sans">
              <div>• UU No. 16 Tahun 2025 tentang Badan Usaha Milik Negara (BUMN)</div>
              <div>• Juknis Kasad tentang Pembinaan Kepribadian & Disiplin Serdik</div>
              <div>• Peraturan Tetap Kodiklat TNI AD tentang Standar Evaluasi Siswa</div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <button
                onClick={onOpenPdfModal}
                className="inline-flex items-center justify-center space-x-1.5 px-3 py-2 rounded-lg text-xs bg-ink-900 border border-bronze-500/40 text-parchment-100 hover:bg-bronze-600 hover:text-white transition font-medium cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-bronze-400" />
                <span>Buka PDF In-App</span>
              </button>

              <a
                href="./PERATURAN%20KHUSUS%20SERDIK%20P3MD%20BATCH%201%202026.pdf"
                download
                className="inline-flex items-center justify-center space-x-1.5 px-3 py-2 rounded-lg text-xs bg-bronze-600 hover:bg-bronze-700 text-white transition font-medium shadow-sm cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh PDF (443 KB)</span>
              </a>
            </div>

            <div className="pt-2 text-[10px] text-parchment-300/60 font-mono">
              Dokumen Terverifikasi • 42 Halaman • Edisi Perdana TA 2026
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-parchment-300/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-parchment-300/70 font-sans">
          <div>
            © 2026 Lembaga Pendidikan Kesatrian Serpong. Hak Cipta Dilindungi.
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => onNavigate("home")}
              className="hover:text-bronze-400 transition cursor-pointer"
            >
              Beranda
            </button>
            <span className="text-parchment-300/30">•</span>
            <button
              onClick={() => onNavigate("naskah")}
              className="hover:text-bronze-400 transition cursor-pointer"
            >
              Pedoman
            </button>
            <span className="text-parchment-300/30">•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1 text-bronze-400 hover:text-bronze-300 transition font-medium cursor-pointer ml-2"
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
