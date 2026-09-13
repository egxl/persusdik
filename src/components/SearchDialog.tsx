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
    <div className="fixed inset-0 z-50 bg-ink-950/70 backdrop-blur-sm flex items-start justify-center p-4 pt-20 animate-fadeIn">
      <div className="bg-white border border-parchment-300 rounded-xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        <div className="p-4 border-b border-parchment-200 flex items-center space-x-3 bg-parchment-50">
          <Search className="w-5 h-5 text-bronze-700 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ketik kata kunci pencarian (misal: 'cukur', 'kantin', 'gawai', 'pesiar', 'bullying')..."
            className="flex-1 bg-transparent text-ink-900 placeholder-ink-600 text-sm focus:outline-none font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-ink-600 hover:text-ink-900 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="text-[10px] font-mono bg-white border border-parchment-300 px-2 py-0.5 rounded text-ink-600">
            ESC
          </kbd>
        </div>

        <div className="overflow-y-auto p-4 space-y-5 divide-y divide-parchment-200">
          {!q ? (
            <div className="py-8 text-center text-xs text-ink-600 font-sans space-y-2">
              <div className="font-cinzel text-bronze-800 font-bold text-sm">
                Pencarian Kilat Regulasi Perkhusserdik
              </div>
              <p>Mulai ketik untuk menelusuri seluruh pasal, tanya-jawab (FAQ), dan aturan sanksi.</p>
              <div className="pt-2 flex justify-center gap-1.5 flex-wrap">
                {["rambut", "rokok", "gawai", "pesiar", "makan", "kantin"].map((kw) => (
                  <button
                    key={kw}
                    onClick={() => setQuery(kw)}
                    className="px-2 py-1 bg-parchment-100 hover:bg-parchment-200 border border-parchment-300 rounded text-[11px] text-ink-800"
                  >
                    #{kw}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-8 text-center text-xs text-ink-700 font-sans">
              Tidak ada hasil yang cocok dengan kata kunci "{query}". Coba sinonim atau istilah resmi.
            </div>
          ) : (
            <>
              {matchedFaqs.length > 0 && (
                <div className="space-y-2 pt-2 first:pt-0">
                  <div className="flex items-center space-x-1.5 text-[11px] font-cinzel font-bold text-bronze-800 uppercase tracking-wider">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>Tanya Jawab (FAQ)</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedFaqs.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => {
                          onNavigateTab("faq");
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-lg bg-parchment-50 hover:bg-parchment-100 border border-parchment-200 transition space-y-1"
                      >
                        <div className="font-bold text-xs text-ink-900">{f.question}</div>
                        <p className="text-[11px] text-ink-700 line-clamp-1">{f.answer}</p>
                        <div className="text-[10px] text-bronze-700 font-serif italic">{f.pasalCitation}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {matchedPasals.length > 0 && (
                <div className="space-y-2 pt-3">
                  <div className="flex items-center space-x-1.5 text-[11px] font-cinzel font-bold text-bronze-800 uppercase tracking-wider">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Pasal & Bab Resmi</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedPasals.map((p, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          onNavigateTab("naskah");
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-lg bg-parchment-50 hover:bg-parchment-100 border border-parchment-200 transition space-y-1"
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-ink-900 font-cinzel">
                            {p.pasalNum}: {p.title}
                          </span>
                          <span className="text-[10px] font-mono text-bronze-700">{p.chapterNum}</span>
                        </div>
                        <p className="text-[11px] text-ink-700 line-clamp-1">{p.summary}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {matchedViolations.length > 0 && (
                <div className="space-y-2 pt-3">
                  <div className="flex items-center space-x-1.5 text-[11px] font-cinzel font-bold text-rose-800 uppercase tracking-wider">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Matriks Disiplin & Pelanggaran</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedViolations.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => {
                          onNavigateTab("disiplin");
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-lg bg-parchment-50 hover:bg-parchment-100 border border-parchment-200 transition space-y-1"
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-ink-900">{v.title}</span>
                          <span className="text-[10px] font-mono uppercase font-bold text-rose-700">
                            {v.category}
                          </span>
                        </div>
                        <p className="text-[11px] text-ink-700 line-clamp-1">{v.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        <div className="p-3 bg-parchment-100 border-t border-parchment-200 text-center text-[11px] text-ink-600 font-sans">
          Tekan tombol ESC atau klik di luar untuk menutup pencarian.
        </div>
      </div>
    </div>
  );
};
