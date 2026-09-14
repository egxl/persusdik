import React from "react";
import { Download, X, ExternalLink, FileText } from "lucide-react";

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PdfViewerModal: React.FC<PdfViewerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const pdfUrl = "./PERATURAN%20KHUSUS%20SERDIK%20P3MD%20BATCH%201%202026.pdf";

  return (
    <div className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden shadow-2xl">
        <div className="px-5 py-4 bg-white border-b border-slate-100 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-command-50 border border-command-100 flex items-center justify-center text-command-700">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-extrabold text-navy-950 leading-tight">
                Naskah Asli PDF — Perkhusserdik P3MD Batch 1 Soedirman
              </h3>
              <p className="text-xs text-slate-500 font-sans mt-0.5">
                Dokumen Resmi Tertanda Tangan • 42 Halaman Lengkap (TA 2026)
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-2.5">
            <a
              href={pdfUrl}
              download
              className="inline-flex items-center space-x-2 bg-command-600 hover:bg-command-700 text-white text-xs sm:text-sm px-3.5 py-2 rounded-xl font-bold transition shadow-xs cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Unduh PDF</span>
            </a>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm px-3.5 py-2 rounded-xl font-semibold transition cursor-pointer"
              title="Buka di tab baru"
            >
              <ExternalLink className="w-4 h-4 text-slate-500" />
              <span className="hidden sm:inline">Tab Baru</span>
            </a>

            <button
              onClick={onClose}
              className="text-slate-400 hover:text-navy-950 p-2 rounded-xl hover:bg-slate-100 transition cursor-pointer"
              aria-label="Tutup Pratinjau PDF"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-slate-100 p-2 sm:p-3 relative flex flex-col">
          <iframe
            src={pdfUrl}
            title="Pratinjau PDF Perkhusserdik"
            className="w-full h-full rounded-xl border border-slate-200 shadow-inner bg-white"
          />

          <div className="text-center py-2 text-xs text-slate-500 font-sans">
            Jika peramban Anda memblokir penampil PDF di atas, silakan klik tombol 
            <a href={pdfUrl} download className="text-command-700 underline font-semibold ml-1">
              Unduh Berkas Resmi
            </a> atau 
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="text-command-700 underline font-semibold ml-1">
              Buka di Tab Baru
            </a>.
          </div>
        </div>
      </div>
    </div>
  );
};

