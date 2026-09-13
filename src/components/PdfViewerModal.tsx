import React from "react";
import { Download, X, ExternalLink } from "lucide-react";

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PdfViewerModal: React.FC<PdfViewerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const pdfUrl = "./PERATURAN%20KHUSUS%20SERDIK%20P3MD%20BATCH%201%202026.pdf";

  return (
    <div className="fixed inset-0 z-50 bg-ink-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-parchment-50 border border-parchment-300 rounded-xl w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden shadow-2xl">
        <div className="px-5 py-3.5 bg-white border-b border-parchment-200 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-bronze-600/10 border border-bronze-600/30 flex items-center justify-center font-cinzel font-bold text-bronze-700 text-xs">
              ?
            </div>
            <div>
              <h3 className="font-cinzel text-sm font-bold text-ink-900 leading-tight">
                Naskah Asli PDF — Perkhusserdik P3MD Batch 1 Soedirman
              </h3>
              <p className="text-[11px] text-ink-600 font-serif italic">
                Dokumen Resmi Tertanda Tangan • 42 Halaman Lengkap (TA 2026)
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href={pdfUrl}
              download
              className="inline-flex items-center space-x-1.5 bg-bronze-600 hover:bg-bronze-700 text-white text-xs px-3 py-1.5 rounded-lg font-medium transition shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh Berkas</span>
            </a>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 border border-parchment-300 bg-white hover:bg-parchment-100 text-ink-800 text-xs px-3 py-1.5 rounded-lg font-medium transition"
              title="Buka di tab baru"
            >
              <ExternalLink className="w-3.5 h-3.5 text-bronze-700" />
              <span className="hidden sm:inline">Tab Baru</span>
            </a>

            <button
              onClick={onClose}
              className="text-ink-600 hover:text-ink-900 p-1.5 rounded-lg hover:bg-parchment-200 transition"
              aria-label="Tutup Pratinjau PDF"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-parchment-100 p-2 relative flex flex-col">
          <iframe
            src={pdfUrl}
            title="Pratinjau PDF Perkhusserdik"
            className="w-full h-full rounded border border-parchment-300 shadow-inner bg-white"
            frameBorder="0"
          />

          <div className="text-center py-1.5 text-[11px] text-ink-600 font-sans">
            Jika peramban Anda memblokir penampil PDF di atas, silakan klik tombol 
            <a href={pdfUrl} download className="text-bronze-800 underline font-semibold ml-1">
              Unduh Berkas Resmi
            </a> atau 
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="text-bronze-800 underline font-semibold ml-1">
              Buka di Tab Baru
            </a>.
          </div>
        </div>
      </div>
    </div>
  );
};
