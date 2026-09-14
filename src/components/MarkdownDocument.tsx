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
      <aside className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-2xs sticky top-24">
        <div className="flex items-center space-x-2 border-b border-slate-200 pb-3.5 mb-4">
          <BookOpen className="w-4 h-4 text-command-700" />
          <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
            Daftar Bab Regulasi (8 BAB)
          </h3>
        </div>

        <nav className="space-y-1.5 text-sm">
          {CHAPTERS_DIRECTORY.map((chap) => {
            const isSelected = activeChapterId === chap.id;
            return (
              <button
                key={chap.id}
                onClick={() => setActiveChapterId(chap.id)}
                className={`w-full text-left px-3.5 py-3 rounded-xl transition-all duration-150 flex items-center justify-between cursor-pointer ${
                  isSelected
                    ? "bg-navy-900 text-white font-bold shadow-xs"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                <div className="space-y-0.5 min-w-0 pr-2">
                  <div
                    className={`font-mono text-[11px] font-bold uppercase ${
                      isSelected ? "text-brass-400" : "text-command-700"
                    }`}
                  >
                    {chap.number}
                  </div>
                  <div className="leading-snug truncate text-xs sm:text-sm font-semibold">
                    {chap.title}
                  </div>
                </div>
                {isSelected && <ChevronRight className="w-4 h-4 text-brass-400 shrink-0" />}
              </button>
            );
          })}
        </nav>

        <div className="mt-6 pt-4 border-t border-slate-200 space-y-2">
          <button
            onClick={onOpenPdf}
            className="w-full text-center py-2.5 px-3 bg-slate-50 hover:bg-slate-100 border border-slate-300 text-xs font-semibold text-slate-800 rounded-xl transition flex items-center justify-center space-x-1.5 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-command-600" />
            <span>Bandingkan dengan PDF Asli</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
          </button>
        </div>
      </aside>

      {/* Main Chapter Content */}
      <main className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-2xs space-y-8">
        <div className="border-b border-slate-200 pb-6">
          <div className="font-mono text-xs uppercase tracking-wider text-command-700 font-bold mb-1.5">
            Naskah Resmi Perkhusserdik P3MD 2026
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 leading-tight">
            {activeChapter.number} — {activeChapter.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 font-sans">
            Program Presiden untuk Pemimpin Masa Depan • Batch 1 / Soedirman (Kesatrian Serpong)
          </p>
        </div>

        {activeChapter.id === "bab-1" && (
          <div className="space-y-4 p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-base text-slate-900 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-command-600" />
              <span>Pasal 1: Ketentuan Umum</span>
            </h3>
            <p className="text-justify leading-relaxed text-slate-700 text-sm sm:text-base prose-legal">
              Program Presiden untuk Pemimpin Masa Depan (P3MD) adalah program pengembangan dan pembentukan pemimpin masa depan yang bertujuan menghasilkan pemimpin Badan Usaha Milik Negara (BUMN) dan nasional yang berkarakter, berintegritas, adaptif, dan berorientasi pada hasil, melalui penguatan kompetensi kepemimpinan, manajerial, serta nilai-nilai kebangsaan untuk menghadapi tantangan organisasi dan pembangunan nasional.
            </p>
            <p className="text-justify leading-relaxed text-slate-700 text-sm sm:text-base prose-legal">
              Untuk menjamin kelancaran dan tercapainya sasaran penyelenggaraan P3MD, maka dibutuhkan perangkat pendukung yang disusun dalam bentuk Peraturan Khusus Peserta Didik (Perkhusserdik) yang berisi tentang hak, kewajiban, kegiatan, dan tindakan disiplin Peserta Didik (Serdik) selama mengikuti tahapan pelaksanaan P3MD.
            </p>
          </div>
        )}

        <div className="space-y-4 pt-1">
          {activeChapter.pasals.map((p, idx) => (
            <article
              key={idx}
              className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 hover:border-slate-300 shadow-2xs space-y-2.5 transition"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-command-700 tracking-wider uppercase bg-command-50 px-2.5 py-1 rounded border border-command-100">
                  {p.number}
                </span>
                <span className="text-[11px] font-mono font-semibold text-slate-400 uppercase">
                  {activeChapter.number}
                </span>
              </div>
              <h3 className="font-bold text-base sm:text-lg text-slate-950 tracking-tight">
                {p.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-[76ch]">
                {p.summary}
              </p>
            </article>
          ))}
        </div>

        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3 font-sans">
          <div>Ditetapkan di Lemdik Kesatrian Serpong • Komandan: Marsma TNI Dr. Anton Pallaguna</div>
          <button
            onClick={onOpenPdf}
            className="text-command-700 hover:text-command-800 font-semibold flex items-center space-x-1 cursor-pointer"
          >
            <span>Lihat Naskah Lengkap PDF</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </main>
    </div>
  );
};


