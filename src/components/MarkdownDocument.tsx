import React, { useState } from "react";
import { CHAPTERS_DIRECTORY } from "../data/rulesDirectory";
import { BookOpen, ChevronRight, ArrowUpRight, FileText } from "lucide-react";

interface MarkdownDocumentProps {
  onOpenPdf: () => void;
}

export const MarkdownDocument: React.FC<MarkdownDocumentProps> = ({ onOpenPdf }) => {
  const [activeChapterId, setActiveChapterId] = useState<string>("bab-1");

  const activeChapter =
    CHAPTERS_DIRECTORY.find((c) => c.id === activeChapterId) ||
    CHAPTERS_DIRECTORY[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Sidebar Navigation */}
      <aside className="lg:col-span-4 command-panel-brass p-5 sm:p-6 bg-white shadow-xs sticky top-24">
        <div className="flex items-center space-x-2 border-b border-canvas-300 pb-3.5 mb-4">
          <BookOpen className="w-4 h-4 text-brass-700" />
          <h3 className="font-cinzel text-xs font-bold text-navy-950 uppercase tracking-widest">
            Daftar Bab Regulasi (8 BAB)
          </h3>
        </div>

        <nav className="space-y-1 text-sm font-sans">
          {CHAPTERS_DIRECTORY.map((chap) => {
            const isSelected = activeChapterId === chap.id;
            return (
              <button
                key={chap.id}
                onClick={() => setActiveChapterId(chap.id)}
                className={`w-full text-left px-3 py-2.5 rounded-xs transition-colors flex items-center justify-between cursor-pointer ${
                  isSelected
                    ? "bg-navy-950 text-white font-bold shadow-xs"
                    : "text-slate-700 hover:bg-canvas-100 hover:text-navy-950"
                }`}
              >
                <div className="space-y-0.5 min-w-0 pr-2">
                  <div
                    className={`font-mono text-[10px] font-bold uppercase ${
                      isSelected ? "text-brass-400" : "text-brass-700"
                    }`}
                  >
                    {chap.number}
                  </div>
                  <div className="leading-snug truncate text-xs font-bold">
                    {chap.title}
                  </div>
                </div>
                {isSelected && <ChevronRight className="w-4 h-4 text-brass-400 shrink-0" />}
              </button>
            );
          })}
        </nav>

        <div className="mt-6 pt-4 border-t border-canvas-300 space-y-2">
          <button
            onClick={onOpenPdf}
            className="w-full text-center py-2.5 px-3 bg-brass-50 hover:bg-brass-100/60 border border-brass-600/40 text-xs font-mono font-bold text-navy-950 rounded-xs transition flex items-center justify-center space-x-1.5 cursor-pointer uppercase tracking-wider"
          >
            <FileText className="w-3.5 h-3.5 text-brass-700" />
            <span>Bandingkan dengan PDF Asli</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-brass-700" />
          </button>
        </div>
      </aside>

      {/* Main Chapter Content */}
      <main className="lg:col-span-8 command-panel p-6 sm:p-10 bg-white shadow-xs space-y-8">
        <div className="border-b border-canvas-300 pb-6">
          <div className="font-mono text-[10px] uppercase tracking-widest text-brass-700 font-bold mb-1.5">
            DOKUMEN RESMI PERKHUSSERDIK P3MD 2026
          </div>
          <h1 className="font-cinzel text-2xl sm:text-3xl font-bold text-navy-950 leading-tight">
            {activeChapter.number} — {activeChapter.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 font-sans">
            Program Presiden untuk Pemimpin Masa Depan • Batch 1 / Soedirman (Kesatrian Serpong)
          </p>
        </div>

        {activeChapter.id === "bab-1" && (
          <div className="space-y-4 p-5 sm:p-6 rounded-xs bg-canvas-50 border border-canvas-300">
            <h3 className="font-cinzel font-bold text-sm sm:text-base text-navy-950 flex items-center space-x-2">
              <span className="w-2 h-2 bg-brass-500" />
              <span>Pasal 1: Ketentuan Umum</span>
            </h3>
            <p className="text-justify leading-relaxed text-slate-700 text-xs sm:text-sm prose-legal">
              Program Presiden untuk Pemimpin Masa Depan (P3MD) adalah program pengembangan dan pembentukan pemimpin masa depan yang bertujuan menghasilkan pemimpin Badan Usaha Milik Negara (BUMN) dan nasional yang berkarakter, berintegritas, adaptif, dan berorientasi pada hasil, melalui penguatan kompetensi kepemimpinan, manajerial, serta nilai-nilai kebangsaan untuk menghadapi tantangan organisasi dan pembangunan nasional.
            </p>
            <p className="text-justify leading-relaxed text-slate-700 text-xs sm:text-sm prose-legal">
              Untuk menjamin kelancaran dan tercapainya sasaran penyelenggaraan P3MD, maka dibutuhkan perangkat pendukung yang disusun dalam bentuk Peraturan Khusus Peserta Didik (Perkhusserdik) yang berisi tentang hak, kewajiban, kegiatan, dan tindakan disiplin Peserta Didik (Serdik) selama mengikuti tahapan pelaksanaan P3MD.
            </p>
          </div>
        )}

        <div className="space-y-4 pt-1">
          {activeChapter.pasals.map((p, idx) => (
            <article
              key={idx}
              className="p-5 sm:p-6 rounded-xs bg-white border border-canvas-300 hover:border-navy-900 transition-colors shadow-2xs space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-navy-950 tracking-wider uppercase bg-canvas-100 px-2 py-0.5 rounded-xs border border-canvas-300">
                  {p.number}
                </span>
                <span className="text-[10px] font-mono font-semibold text-slate-400 uppercase">
                  {activeChapter.number}
                </span>
              </div>
              <h3 className="font-bold text-sm sm:text-base text-navy-950 tracking-tight font-sans">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans max-w-[78ch]">
                {p.summary}
              </p>
            </article>
          ))}
        </div>

        <div className="pt-6 border-t border-canvas-300 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3 font-mono">
          <div>Ditetapkan di Kesatrian Serpong • Komandan: Marsma TNI Dr. Anton Pallaguna</div>
          <button
            onClick={onOpenPdf}
            className="text-navy-950 hover:text-brass-700 font-bold flex items-center space-x-1 cursor-pointer"
          >
            <span>Naskah Lengkap PDF</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-brass-700" />
          </button>
        </div>
      </main>
    </div>
  );
};
