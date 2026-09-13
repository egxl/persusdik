import { useState } from "react";
import { Masthead } from "./components/Masthead";
import { ActionRibbon, ActiveTab } from "./components/ActionRibbon";
import { MarkdownDocument } from "./components/MarkdownDocument";
import { FaqSection } from "./components/FaqSection";
import { ScheduleReference } from "./components/ScheduleReference";
import { DisciplinaryMatrix } from "./components/DisciplinaryMatrix";
import { OrgCommandTree } from "./components/OrgCommandTree";
import { ReadinessQuiz } from "./components/ReadinessQuiz";
import { PdfViewerModal } from "./components/PdfViewerModal";
import { SearchDialog } from "./components/SearchDialog";

export function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("faq");
  const [isPdfModalOpen, setIsPdfModalOpen] = useState<boolean>(false);
  const [isSplitView, setIsSplitView] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F172A] flex flex-col font-sans selection:bg-[#C5A059] selection:text-[#0F172A]">
      <Masthead />

      <ActionRibbon
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenPdfModal={() => setIsPdfModalOpen(true)}
        isSplitView={isSplitView}
        onToggleSplitView={() => setIsSplitView((prev) => !prev)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isSplitView ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[80vh]">
            <div className="lg:col-span-6 overflow-y-auto pr-2 space-y-6">
              {activeTab === "naskah" && <MarkdownDocument onOpenPdf={() => setIsPdfModalOpen(true)} />}
              {activeTab === "faq" && <FaqSection />}
              {activeTab === "jadwal" && <ScheduleReference />}
              {activeTab === "disiplin" && <DisciplinaryMatrix />}
              {activeTab === "organisasi" && <OrgCommandTree />}
              {activeTab === "kuis" && <ReadinessQuiz />}
            </div>
            <div className="hidden lg:flex lg:col-span-6 border border-parchment-300 rounded-xl overflow-hidden bg-white shadow-sm flex-col">
              <div className="px-4 py-2 bg-parchment-100 border-b border-parchment-200 flex items-center justify-between text-xs font-cinzel font-bold text-ink-900">
                <span>Naskah Asli PDF (42 Halaman)</span>
                <span className="text-[10px] text-bronze-800 font-mono">TA 2026 SERPONG</span>
              </div>
              <iframe
                src="./PERATURAN%20KHUSUS%20SERDIK%20P3MD%20BATCH%201%202026.pdf"
                className="w-full flex-1"
                frameBorder="0"
                title="Split PDF View"
              />
            </div>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">
            {activeTab === "naskah" && <MarkdownDocument onOpenPdf={() => setIsPdfModalOpen(true)} />}
            {activeTab === "faq" && <FaqSection />}
            {activeTab === "jadwal" && <ScheduleReference />}
            {activeTab === "disiplin" && <DisciplinaryMatrix />}
            {activeTab === "organisasi" && <OrgCommandTree />}
            {activeTab === "kuis" && <ReadinessQuiz />}
          </div>
        )}
      </div>

      <footer className="border-t border-parchment-200 bg-parchment-100/70 py-8 text-center text-xs text-ink-600 font-serif space-y-1">
        <div className="font-cinzel text-bronze-800 font-bold tracking-wider">
          PROGRAM PRESIDEN UNTUK PEMIMPIN MASA DEPAN (P3MD)
        </div>
        <div>Batch 1 / Soedirman • Lemdik Kesatrian Serpong • Tahun Anggaran 2026</div>
        <div className="text-[10px] font-mono text-ink-600 pt-2">
          Peraturan Khusus Peserta Didik (Perkhusserdik) • Dokumen Pedoman Resmi
        </div>
      </footer>

      <PdfViewerModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
      />

      <SearchDialog
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigateTab={(tab) => setActiveTab(tab)}
      />
    </div>
  );
}

export default App;
