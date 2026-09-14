import React, { useState, useMemo } from "react";
import { FAQ_ITEMS, FAQ_CATEGORIES } from "../data/faqData";
import { ChevronDown, ChevronUp, Search, BookOpen, Tag } from "lucide-react";

export const FaqSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    "grooming-hair": true,
    "command-limits": true,
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
      <div className="command-panel-brass p-6 sm:p-8 bg-white shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-canvas-300 pb-5 mb-5">
          <div>
            <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-brass-700">
              PANDUAN OPERASIONAL &amp; FATWA KEDINASAN
            </div>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-navy-950 mt-1">
              Direktori Tanya Jawab Regulasi Serdik (FAQ)
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl leading-relaxed font-sans">
              Jawaban resmi atas skenario sehari-hari yang paling sering dihadapi Serdik di Kesatrian Serpong, lengkap dengan rujukan pasal resmi Perkhusserdik 2026.
            </p>
          </div>

          <div className="bg-navy-950 border border-navy-800 px-5 py-3 rounded-xs text-center shrink-0">
            <div className="font-mono text-xl sm:text-2xl font-black text-brass-400">
              {FAQ_ITEMS.length} Topik
            </div>
            <div className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-widest mt-0.5">
              PASAL KUNCI TERSEDIA
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
              placeholder="Cari skenario aturan (misal: 'rambut', 'vape', 'kantin', 'pesiar', 'bullying', 'makan senyap')..."
              className="w-full pl-10 pr-4 py-2.5 bg-canvas-50 border border-canvas-300 rounded-xs text-xs sm:text-sm text-navy-950 placeholder-slate-400 font-sans focus:outline-hidden focus:border-navy-900 focus:bg-white transition"
            />
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-2 flex-wrap">
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xs text-xs font-mono font-bold uppercase transition cursor-pointer border ${
                  selectedCategory === cat
                    ? "bg-navy-950 text-brass-400 border-navy-950 shadow-xs"
                    : "bg-canvas-100 text-slate-700 hover:bg-canvas-200 border-canvas-300"
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
          <div className="command-panel p-8 text-center text-slate-600 text-sm font-sans">
            Tidak ditemukan panduan untuk kata kunci "{searchQuery}". Coba kata kunci lain atau pilih kategori "Semua".
          </div>
        ) : (
          filteredItems.map((item) => {
            const isExpanded = !!expandedIds[item.id];
            return (
              <div
                key={item.id}
                className="command-panel overflow-hidden transition-colors hover:border-navy-900 bg-white"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-5 sm:px-6 py-4 text-left flex items-start justify-between gap-4 transition hover:bg-canvas-50 cursor-pointer"
                >
                  <div className="space-y-1 text-left flex-1">
                    <span className="text-[10px] font-mono font-bold text-brass-700 uppercase tracking-widest">
                      [ {item.category} ]
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-navy-950 leading-snug">
                      {item.question}
                    </h3>
                  </div>
                  <div className="mt-1 p-1 rounded-xs bg-canvas-100 text-slate-600 shrink-0 border border-canvas-300">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-5 pt-2 border-t border-canvas-200 bg-canvas-50 space-y-3">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans pt-1 max-w-4xl">
                      {item.answer}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-canvas-200 text-xs">
                      <div className="inline-flex items-center space-x-1.5 bg-white border border-canvas-300 text-navy-950 px-2.5 py-1 rounded-xs font-mono text-[11px] font-bold">
                        <BookOpen className="w-3.5 h-3.5 text-brass-700" />
                        <span>Rujukan Resmi: {item.pasalCitation}</span>
                      </div>

                      <div className="flex items-center space-x-1.5 flex-wrap gap-1">
                        <Tag className="w-3 h-3 text-slate-400" />
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2 py-0.5 bg-white border border-canvas-300 rounded-xs text-slate-600 font-mono"
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
