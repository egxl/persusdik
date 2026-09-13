import React, { useState } from "react";
import { CHAPTERS_DIRECTORY } from "../data/rulesDirectory";
import { BookOpen, ChevronRight, ArrowUpRight } from "lucide-react";

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
      <aside className="lg:col-span-4 bg-white border border-parchment-300 rounded-xl p-5 shadow-sm sticky top-24">
        <div className="flex items-center space-x-2 border-b border-parchment-200 pb-3 mb-4">
          <BookOpen className="w-4 h-4 text-bronze-700" />
          <h3 className="font-cinzel text-xs font-bold text-ink-900 uppercase tracking-wider">
            Daftar Bab & Regulasi (8 BAB)
          </h3>
        </div>

        <nav className="space-y-1 text-xs">
          {CHAPTERS_DIRECTORY.map((chap) => {
            const isSelected = activeChapterId === chap.id;
            return (
              <button
                key={chap.id}
                onClick={() => setActiveChapterId(chap.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg transition flex items-center justify-between ${
                  isSelected
                    ? "bg-parchment-100 text-bronze-800 font-bold border border-parchment-300"
                    : "text-ink-700 hover:bg-parchment-50 hover:text-ink-900"
                }`}
              >
                <div className="space-y-0.5">
                  <div className="font-mono text-[10px] text-bronze-700 uppercase">
                    {chap.number}
                  </div>
                  <div className="leading-snug truncate max-w-[200px]">
                    {chap.title}
                  </div>
                </div>
                {isSelected && <ChevronRight className="w-3.5 h-3.5 text-bronze-700 shrink-0" />}
              </button>
            );
          })}
        </nav>

        <div className="mt-6 pt-4 border-t border-parchment-200 space-y-2">
          <button
            onClick={onOpenPdf}
            className="w-full text-center py-2 px-3 bg-parchment-100 hover:bg-parchment-200 border border-parchment-300 text-xs font-semibold text-ink-900 rounded-lg transition flex items-center justify-center space-x-1.5"
          >
            <span>Bandingkan dengan PDF Asli</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-bronze-700" />
          </button>
        </div>
      </aside>

      <main className="lg:col-span-8 bg-white border border-parchment-300 rounded-xl p-8 sm:p-12 shadow-sm space-y-8">
        <div className="border-b border-parchment-200 pb-6">
          <div className="font-cinzel text-xs uppercase tracking-widest text-bronze-700 font-bold mb-1">
            Naskah Resmi Perkhusserdik P3MD 2026
          </div>
          <h1 className="font-cinzel text-2xl sm:text-3xl font-bold text-ink-900 leading-tight">
            {activeChapter.number} — {activeChapter.title}
          </h1>
          <p className="text-xs text-ink-600 font-serif italic mt-1">
            Program Presiden untuk Pemimpin Masa Depan • Angkatan Soedirman (Serpong, TA 2026)
          </p>
        </div>

        {activeChapter.id === "bab-1" && (
          <div className="space-y-4">
            <h3 className="font-serif italic font-bold text-base text-bronze-800">
              Pasal 1: Umum
            </h3>
            <p className="drop-cap text-justify leading-relaxed text-ink-800 text-sm sm:text-base font-serif max-w-[70ch]">
              Program Presiden untuk Pemimpin Masa Depan (P3MD) adalah program pengembangan dan pembentukan pemimpin masa depan yang bertujuan menghasilkan pemimpin Badan Usaha Milik Negara (BUMN) dan nasional yang berkarakter, berintegritas, adaptif, dan berorientasi pada hasil, melalui penguatan kompetensi kepemimpinan, manajerial, serta nilai-nilai kebangsaan untuk menghadapi tantangan organisasi dan pembangunan nasional.
            </p>
            <p className="text-justify leading-relaxed text-ink-800 text-sm sm:text-base font-serif max-w-[70ch]">
              Untuk menjamin kelancaran dan tercapainya sasaran penyelenggaraan P3MD, maka dibutuhkan perangkat pendukung yang disusun dalam bentuk Peraturan Khusus Peserta Didik (Perkhusserdik) yang berisi tentang hak, kewajiban, kegiatan, dan tindakan disiplin Peserta Didik (Serdik) selama mengikuti tahapan pelaksanaan P3MD.
            </p>
          </div>
        )}

        <div className="space-y-6 pt-2">
          {activeChapter.pasals.map((p, idx) => (
            <article
              key={idx}
              className="p-5 rounded-lg bg-parchment-50 border border-parchment-200 space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-cinzel text-xs font-bold text-bronze-800">
                  {p.number}
                </span>
                <span className="text-[10px] font-mono text-ink-600 uppercase bg-white px-2 py-0.5 rounded border border-parchment-200">
                  {activeChapter.number}
                </span>
              </div>
              <h3 className="font-bold text-base text-ink-900 font-cinzel">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-ink-800 leading-relaxed font-serif max-w-[70ch]">
                {p.summary}
              </p>
            </article>
          ))}
        </div>

        <div className="pt-6 border-t border-parchment-200 flex flex-col sm:flex-row items-center justify-between text-xs text-ink-600 gap-3 font-serif italic">
          <div>Ditetapkan di Lemdik Kesatrian Serpong • Komandan: Marsma TNI Dr. Anton Pallaguna</div>
          <button
            onClick={onOpenPdf}
            className="text-bronze-800 underline font-semibold font-sans hover:text-ink-900"
          >
            Lihat Naskah Lengkap PDF ?
          </button>
        </div>
      </main>
    </div>
  );
};

