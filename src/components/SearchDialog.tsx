import React, { useState, useEffect, useRef } from "react";
import { Search, X, BookOpen, HelpCircle, AlertTriangle } from "lucide-react";
import { FAQ_ITEMS } from "../data/faqData";
import { CHAPTERS_DIRECTORY } from "../data/rulesDirectory";
import { VIOLATIONS_DATA } from "../data/disciplinaryData";
import { PageId } from "../types/navigation";

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateTab: (tab: PageId) => void;
}

export const SearchDialog: React.FC<SearchDialogProps> = ({
  isOpen,
  onClose,
  onNavigateTab,
}) => {
  const [query, setQuery] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  const matchedFaqs = q
    ? FAQ_ITEMS.filter(
        (f) =>
          f.question.toLowerCase().includes(q) ||
          f.answer.toLowerCase().includes(q) ||
          f.tags.some((t) => t.toLowerCase().includes(q))
      ).slice(0, 4)
    : [];

  const matchedPasals: { chapterNum: string; pasalNum: string; title: string; summary: string }[] = [];
  if (q) {
    CHAPTERS_DIRECTORY.forEach((chap) => {
      chap.pasals.forEach((p) => {
        if (
          p.title.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.number.toLowerCase().includes(q)
        ) {
          if (matchedPasals.length < 4) {
            matchedPasals.push({
              chapterNum: chap.number,
              pasalNum: p.number,
              title: p.title,
              summary: p.summary,
            });
          }
        }
      });
    });
  }

  const matchedViolations = q
    ? VIOLATIONS_DATA.filter(
        (v) =>
          v.title.toLowerCase().includes(q) ||
          v.description.toLowerCase().includes(q) ||
          v.pasal.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  const totalResults =
    matchedFaqs.length + matchedPasals.length + matchedViolations.length;

  return (
    <div className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-sm flex items-start justify-center p-4 pt-16 sm:pt-20">
      <div className="command-panel-brass w-full max-w-2xl bg-white shadow-2xl overflow-hidden flex flex-col max-h-[82vh] rounded-xs">
        <div className="p-4 border-b border-canvas-300 flex items-center space-x-3 bg-canvas-50">
          <Search className="w-5 h-5 text-brass-700 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ketik kata kunci aturan (misal: 'cukur', 'kantin', 'gawai', 'pesiar', 'bullying')..."
            className="flex-1 bg-transparent text-navy-950 placeholder-slate-400 text-sm sm:text-base focus:outline-none font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-slate-400 hover:text-navy-950 p-1 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="text-[10px] font-mono bg-white border border-canvas-300 px-2 py-0.5 rounded-xs text-slate-500 font-bold shadow-2xs">
            ESC
          </kbd>
        </div>

        <div className="overflow-y-auto p-4 sm:p-5 space-y-5 divide-y divide-canvas-200">
          {!q ? (
            <div className="py-8 text-center text-sm text-slate-600 font-sans space-y-3">
              <div className="font-cinzel text-base font-bold text-navy-950">
                Pencarian Kilat Regulasi Perkhusserdik
              </div>
              <p className="max-w-md mx-auto text-xs text-slate-500">
                Telusuri seluruh 42 pasal, panduan tanya-jawab (FAQ), dan matriks sanksi disiplin dengan cepat.
              </p>
              <div className="pt-1 flex justify-center gap-2 flex-wrap">
                {["rambut", "rokok", "gawai", "pesiar", "makan", "kantin", "hazing"].map((kw) => (
                  <button
                    key={kw}
                    onClick={() => setQuery(kw)}
                    className="px-2.5 py-1 bg-canvas-100 hover:bg-navy-950 hover:text-brass-400 border border-canvas-300 rounded-xs text-xs font-mono font-bold text-navy-950 transition cursor-pointer"
                  >
                    #{kw}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-8 text-center text-xs sm:text-sm text-slate-500 font-sans">
              Tidak ada hasil yang cocok dengan kata kunci &ldquo;{query}&rdquo;. Coba gunakan istilah umum lainnya.
            </div>
          ) : (
            <>
              {matchedFaqs.length > 0 && (
                <div className="space-y-2 pt-2 first:pt-0">
                  <div className="flex items-center space-x-2 text-[10px] font-mono font-bold text-brass-700 uppercase tracking-widest">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>TANYA JAWAB HARIAN (FAQ)</span>
                  </div>
                  <div className="space-y-2">
                    {matchedFaqs.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => {
                          onNavigateTab("faq");
                          onClose();
                        }}
                        className="w-full text-left p-3.5 rounded-xs bg-canvas-50 hover:bg-canvas-100 border border-canvas-300 transition-colors space-y-1 cursor-pointer group"
                      >
                        <div className="font-bold text-sm text-navy-950 group-hover:text-brass-700 leading-snug">
                          {f.question}
                        </div>
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-sans">
                          {f.answer}
                        </p>
                        <div className="text-[11px] text-brass-700 font-mono font-bold">
                          {f.pasalCitation}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {matchedPasals.length > 0 && (
                <div className="space-y-2 pt-4">
                  <div className="flex items-center space-x-2 text-[10px] font-mono font-bold text-navy-950 uppercase tracking-widest">
                    <BookOpen className="w-3.5 h-3.5 text-brass-700" />
                    <span>PASAL &amp; BAB RESMI</span>
                  </div>
                  <div className="space-y-2">
                    {matchedPasals.map((p, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          onNavigateTab("naskah");
                          onClose();
                        }}
                        className="w-full text-left p-3.5 rounded-xs bg-canvas-50 hover:bg-canvas-100 border border-canvas-300 transition-colors space-y-1 cursor-pointer group"
                      >
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-bold text-sm text-navy-950 group-hover:text-brass-700">
                            {p.pasalNum}: {p.title}
                          </span>
                          <span className="text-[10px] font-mono text-navy-950 font-bold bg-canvas-200 px-2 py-0.5 rounded-xs border border-canvas-300">
                            {p.chapterNum}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-sans">
                          {p.summary}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {matchedViolations.length > 0 && (
                <div className="space-y-2 pt-4">
                  <div className="flex items-center space-x-2 text-[10px] font-mono font-bold text-crimson-800 uppercase tracking-widest">
                    <AlertTriangle className="w-3.5 h-3.5 text-crimson-700" />
                    <span>MATRIKS DISIPLIN &amp; PELANGGARAN</span>
                  </div>
                  <div className="space-y-2">
                    {matchedViolations.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => {
                          onNavigateTab("disiplin");
                          onClose();
                        }}
                        className="w-full text-left p-3.5 rounded-xs bg-canvas-50 hover:bg-rose-50/50 border border-canvas-300 hover:border-crimson-300 transition-colors space-y-1 cursor-pointer group"
                      >
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-bold text-sm text-navy-950 group-hover:text-crimson-900">
                            {v.title}
                          </span>
                          <span className="text-[10px] font-mono uppercase font-bold text-crimson-700 bg-rose-50 px-2 py-0.5 rounded-xs border border-rose-200">
                            {v.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-sans">
                          {v.description}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        <div className="p-3 bg-canvas-100 border-t border-canvas-300 text-center text-xs font-mono text-slate-500">
          Gunakan tombol <kbd className="px-1.5 py-0.5 bg-white border border-canvas-300 rounded-xs text-[10px] font-bold">ESC</kbd> untuk menutup jendela pencarian.
        </div>
      </div>
    </div>
  );
};
