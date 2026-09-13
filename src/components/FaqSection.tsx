import React, { useState, useMemo } from "react";
import { FAQ_ITEMS, FAQ_CATEGORIES } from "../data/faqData";
import { ChevronDown, ChevronUp, Search, BookOpen, Tag } from "lucide-react";

export const FaqSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    "grooming-hair": true, // open the first by default
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
      <div className="bg-white border border-parchment-300 rounded-xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-parchment-200 pb-5 mb-5">
          <div>
            <div className="font-cinzel text-xs uppercase tracking-widest text-bronze-700 font-bold">
              Panduan Praktis Kehidupan Kesatrian
            </div>
            <h2 className="font-cinzel text-2xl font-bold text-ink-900 mt-1">
              Tanya Jawab Aturan Serdik (FAQ)
            </h2>
            <p className="text-xs text-ink-700 font-serif italic mt-1 max-w-2xl">
              Jawaban resmi atas pertanyaan-pertanyaan yang paling sering dihadapi Serdik sehari-hari, lengkap dengan rujukan pasal resmi Perkhusserdik 2026.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="bg-parchment-100 border border-parchment-300 px-4 py-2.5 rounded-lg text-center shrink-0">
            <div className="font-cinzel text-xl font-bold text-bronze-800">
              {FAQ_ITEMS.length} Topik
            </div>
            <div className="text-[10px] font-sans text-ink-700 uppercase font-semibold">
              Kompilasi Pasal Kunci
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-bronze-700 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari pertanyaan, kata kunci (misal: 'rambut', 'vape', 'kantin', 'pesiar', 'bullying', 'makan')..."
              className="w-full pl-10 pr-4 py-2.5 bg-parchment-50 border border-parchment-300 rounded-lg text-xs sm:text-sm text-ink-900 placeholder-ink-600 focus:outline-none focus:border-bronze-600 focus:ring-1 focus:ring-bronze-600 transition"
            />
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs transition font-sans ${
                  selectedCategory === cat
                    ? "bg-bronze-700 text-white font-semibold shadow-xs"
                    : "bg-parchment-100 text-ink-700 hover:bg-parchment-200 border border-parchment-300"
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
          <div className="bg-white border border-parchment-300 rounded-xl p-8 text-center text-ink-700 text-sm">
            Tidak ditemukan jawaban untuk kata kunci "{searchQuery}". Coba kata kunci lain atau pilih kategori "Semua".
          </div>
        ) : (
          filteredItems.map((item) => {
            const isExpanded = !!expandedIds[item.id];
            return (
              <div
                key={item.id}
                className="bg-white border border-parchment-300 rounded-xl overflow-hidden transition shadow-xs hover:border-bronze-500/60"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-5 sm:px-6 py-4 text-left flex items-start justify-between gap-4 transition hover:bg-parchment-50"
                >
                  <div className="space-y-1 text-left flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-cinzel font-bold text-bronze-700 uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-ink-900 leading-snug">
                      {item.question}
                    </h3>
                  </div>
                  <div className="mt-1 p-1 rounded-md bg-parchment-100 text-ink-700 shrink-0">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-parchment-200 bg-parchment-50/60 space-y-3">
                    <p className="text-xs sm:text-sm text-ink-800 leading-relaxed font-sans pt-2">
                      {item.answer}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-parchment-200 text-xs">
                      <div className="inline-flex items-center space-x-1.5 bg-bronze-600/10 border border-bronze-600/20 text-bronze-800 px-2.5 py-1 rounded-md font-serif italic text-xs">
                        <BookOpen className="w-3.5 h-3.5 text-bronze-700" />
                        <span>Rujukan: {item.pasalCitation}</span>
                      </div>

                      <div className="flex items-center space-x-1">
                        <Tag className="w-3 h-3 text-ink-600" />
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-1.5 py-0.5 bg-white border border-parchment-300 rounded text-ink-600 font-mono"
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
