import React from "react";
import { Download, BookOpen, Columns, Search, HelpCircle, Calendar, AlertTriangle, Users, CheckCircle2 } from "lucide-react";

export type ActiveTab = "naskah" | "faq" | "jadwal" | "disiplin" | "organisasi" | "kuis";

interface ActionRibbonProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenPdfModal: () => void;
  isSplitView: boolean;
  onToggleSplitView: () => void;
  onOpenSearch: () => void;
}

export const ActionRibbon: React.FC<ActionRibbonProps> = ({
  activeTab,
  setActiveTab,
  onOpenPdfModal,
  isSplitView,
  onToggleSplitView,
  onOpenSearch,
}) => {
  const tabs = [
    { id: "naskah" as ActiveTab, label: "Naskah Resmi", icon: BookOpen },
    { id: "faq" as ActiveTab, label: "Tanya Jawab (FAQ)", icon: HelpCircle },
    { id: "jadwal" as ActiveTab, label: "Jadwal Harian", icon: Calendar },
    { id: "disiplin" as ActiveTab, label: "Matriks Disiplin", icon: AlertTriangle },
    { id: "organisasi" as ActiveTab, label: "Korps Serdik", icon: Users },
    { id: "kuis" as ActiveTab, label: "Uji Kesiapan", icon: CheckCircle2 },
  ];

  return (
    <div className="bg-white border-b border-parchment-200 sticky top-[77px] z-20 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Navigation Tabs */}
          <nav className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition whitespace-nowrap ${
                    isActive
                      ? "bg-ink-900 text-parchment-50 shadow-sm"
                      : "text-ink-700 hover:text-ink-900 hover:bg-parchment-100"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-bronze-400" : "text-ink-600"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Tools: PDF & Search */}
          <div className="flex items-center space-x-2 shrink-0 self-end md:self-auto w-full md:w-auto justify-end">
            
            {/* Quick Search */}
            <button
              onClick={onOpenSearch}
              className="inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg text-xs border border-parchment-300 bg-parchment-50 text-ink-700 hover:border-bronze-500 transition font-sans"
              title="Cari kata kunci (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-bronze-700" />
              <span className="hidden sm:inline">Cari Aturan</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] bg-white border border-parchment-300 rounded text-ink-600 font-mono">
                ?K
              </kbd>
            </button>

            {/* Split Screen Mode (Desktop only) */}
            <button
              onClick={onToggleSplitView}
              className={`hidden lg:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs border transition ${
                isSplitView
                  ? "bg-bronze-600 text-white border-bronze-700 shadow-sm"
                  : "border-parchment-300 bg-white text-ink-800 hover:bg-parchment-100"
              }`}
              title="Buka tampilan naskah berdampingan dengan PDF"
            >
              <Columns className="w-3.5 h-3.5" />
              <span>{isSplitView ? "Tutup Split" : "Split PDF"}</span>
            </button>

            {/* In-App PDF Viewer Button */}
            <button
              onClick={onOpenPdfModal}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs border border-bronze-600/40 bg-parchment-100 text-ink-900 hover:bg-bronze-600 hover:text-white transition font-medium shadow-xs"
            >
              <BookOpen className="w-3.5 h-3.5 text-bronze-700" />
              <span>Naskah PDF</span>
            </button>

            {/* Direct Download Button */}
            <a
              href="./PERATURAN%20KHUSUS%20SERDIK%20P3MD%20BATCH%201%202026.pdf"
              download
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs bg-bronze-600 hover:bg-bronze-700 text-white font-medium shadow-xs transition"
              title="Unduh PDF Resmi (443 KB)"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Unduh PDF</span>
              <span className="text-[10px] opacity-80 font-mono">(443 KB)</span>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};
