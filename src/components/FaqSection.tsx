import React, { useState, useMemo } from "react";
import { FAQ_ITEMS, FAQ_CATEGORIES } from "../data/faqData";
import { ChevronDown, ChevronUp, Search, BookOpen, Tag } from "lucide-react";

export const FaqSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    "grooming-hair": true, // open first by default
    "command-limits": true, // open anti-hazing rule by default
  });

  const toggleItem = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredItems = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchCat =
        selectedCategory === "Semua" || item.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchSearch =
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.pasalCitation.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="space-y-6">
      {/* Category Masthead */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-5">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-command-700">
              Panduan Praktis Kehidupan Kesatrian
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1">
              Tanya Jawab Aturan Serdik (FAQ)
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1.5 max-w-2xl leading-relaxed font-sans">
              Jawaban resmi atas pertanyaan-pertanyaan yang paling sering dihadapi Serdik sehari-hari, lengkap dengan rujukan pasal resmi Perkhusserdik 2026.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 px-5 py-3 rounded-xl text-center shrink-0">
            <div className="font-mono text-xl sm:text-2xl font-extrabold text-slate-900">
              {FAQ_ITEMS.length} Topik
            </div>
            <div className="text-[11px] font-sans text-slate-500 uppercase font-bold tracking-wider mt-0.5">
              Kompilasi Pasal Kunci
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari pertanyaan atau kata kunci (misal: 'rambut', 'vape', 'kantin', 'pesiar', 'bullying', 'makan')..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-command-600 focus:bg-white transition"
            />
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-2 flex-wrap">
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer border ${
                  selectedCategory === cat
                    ? "bg-navy-900 text-white border-navy-950 shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredItems.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center text-slate-600 text-sm">
            Tidak ditemukan jawaban untuk kata kunci "{searchQuery}". Coba kata kunci lain atau pilih kategori "Semua".
          </div>
        ) : (
          filteredItems.map((item) => {
            const isExpanded = !!expandedIds[item.id];
            return (
              <div
                key={item.id}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden transition shadow-2xs hover:border-slate-300"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-5 sm:px-6 py-4 text-left flex items-start justify-between gap-4 transition hover:bg-slate-50 cursor-pointer"
                >
                  <div className="space-y-1 text-left flex-1">
                    <span className="text-[11px] font-mono font-bold text-command-700 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-950 leading-snug">
                      {item.question}
                    </h3>
                  </div>
                  <div className="mt-1 p-1 rounded-lg bg-slate-100 text-slate-600 shrink-0">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-5 pt-2 border-t border-slate-100 bg-slate-50/70 space-y-3">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans pt-1 max-w-4xl">
                      {item.answer}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200/80 text-xs">
                      <div className="inline-flex items-center space-x-1.5 bg-command-50 border border-command-200 text-command-800 px-2.5 py-1 rounded-md font-mono text-[11px] font-bold">
                        <BookOpen className="w-3.5 h-3.5 text-command-700" />
                        <span>Rujukan: {item.pasalCitation}</span>
                      </div>

                      <div className="flex items-center space-x-1.5 flex-wrap gap-1">
                        <Tag className="w-3 h-3 text-slate-400" />
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-600 font-mono"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

