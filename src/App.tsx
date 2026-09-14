import { useState, useEffect } from "react";
import { PageId } from "./types/navigation";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { PageHeader } from "./components/PageHeader";
import { LandingPage } from "./components/LandingPage";
import { MarkdownDocument } from "./components/MarkdownDocument";
import { FaqSection } from "./components/FaqSection";
import { ScheduleReference } from "./components/ScheduleReference";
import { DisciplinaryMatrix } from "./components/DisciplinaryMatrix";
import { OrgCommandTree } from "./components/OrgCommandTree";
import { ReadinessQuiz } from "./components/ReadinessQuiz";
import { PdfViewerModal } from "./components/PdfViewerModal";
import { SearchDialog } from "./components/SearchDialog";
import { Columns, BookOpen, Download } from "lucide-react";

export function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.replace("#", "") as PageId;
      const validPages: PageId[] = ["home", "naskah", "faq", "jadwal", "disiplin", "organisasi", "kuis"];
      if (validPages.includes(hash)) return hash;
    }
    return "home";
  });
  const [isPdfModalOpen, setIsPdfModalOpen] = useState<boolean>(false);
  const [isSplitView, setIsSplitView] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Sync with URL hash on initial load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") as PageId;
      const validPages: PageId[] = ["home", "naskah", "faq", "jadwal", "disiplin", "organisasi", "kuis"];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === "home" ? "" : page;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-command-700 selection:text-white overflow-x-hidden">
      {/* Institutional Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenPdfModal={() => setIsPdfModalOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {currentPage === "home" && (
          <LandingPage
            onNavigate={handleNavigate}
            onOpenPdfModal={() => setIsPdfModalOpen(true)}
            onOpenSearch={() => setIsSearchOpen(true)}
          />
        )}

        {currentPage === "naskah" && (
          <div>
            <PageHeader
              badge="DOKUMEN INDUK PERKHUSSERDIK"
              title="Naskah Resmi Peraturan Khusus"
              description="Pedoman lengkap 8 BAB dan 42 Pasal yang disahkan oleh Komandan Lemdik Kesatrian Serpong TA 2026. Navigasi per Bab atau gunakan penampil PDF resmi."
              currentPage="naskah"
              onNavigate={handleNavigate}
              actions={
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsSplitView((prev) => !prev)}
                    className={`hidden lg:inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-semibold border transition cursor-pointer ${
                      isSplitView
                        ? "bg-navy-900 text-white border-navy-950 shadow-xs"
                        : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <Columns className="w-3.5 h-3.5" />
                    <span>{isSplitView ? "Tutup Split PDF" : "Mode Split PDF"}</span>
                  </button>

                  <button
                    onClick={() => setIsPdfModalOpen(true)}
                    className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-semibold border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 transition cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-command-600" />
                    <span>Naskah Asli PDF</span>
                  </button>

                  <a
                    href="./PERATURAN%20KHUSUS%20SERDIK%20P3MD%20BATCH%201%202026.pdf"
                    download
                    className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-navy-900 hover:bg-command-800 text-white transition shadow-2xs cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-brass-400" />
                    <span>Unduh PDF</span>
                  </a>
                </div>
              }
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
              {isSplitView ? (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[85vh]">
                  <div className="lg:col-span-6 overflow-y-auto pr-2 space-y-6">
                    <MarkdownDocument onOpenPdf={() => setIsPdfModalOpen(true)} />
                  </div>
                  <div className="hidden lg:flex lg:col-span-6 border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm flex-col">
                    <div className="px-4 py-2.5 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs font-bold text-slate-800">
                      <span>Naskah Asli PDF (42 Halaman)</span>
                      <span className="text-[10px] text-slate-500 font-mono">TA 2026 SERPONG</span>
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
                <div className="max-w-6xl mx-auto">
                  <MarkdownDocument onOpenPdf={() => setIsPdfModalOpen(true)} />
                </div>
              )}
            </div>
          </div>
        )}


        {currentPage === "jadwal" && (
          <div>
            <PageHeader
              badge="PASAL 18 • TATA TERTIB HARIAN"
              title="Jadwal Kehidupan Harian Serdik"
              description="Rutinitas terstruktur dari bangun pagi pukul 04.30 hingga apel malam 22.00 WIB, dilengkapi jadwal khusus hari olahraga (Rabu), ibadah (Jumat), dan pesiar akhir pekan."
              currentPage="jadwal"
              onNavigate={handleNavigate}
            />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
              <ScheduleReference />
            </div>
          </div>
        )}

        {currentPage === "disiplin" && (
          <div>
            <PageHeader
              badge="PASAL 38 & 39 • PENEGAKAN DISIPLIN"
              title="Matriks Disiplin & Akumulasi Sanksi"
              description="Klasifikasi pelanggaran Ringan, Sedang, Berat, dan simulasi penumpukan sanksi pengulangan menuju sidang Dewan Kehormatan dan Pemberhentian Tidak Hormat (PTDH)."
              currentPage="disiplin"
              onNavigate={handleNavigate}
            />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
              <DisciplinaryMatrix />
            </div>
          </div>
        )}

        {currentPage === "organisasi" && (
          <div>
            <PageHeader
              badge="BAB V • KORPS SISWA"
              title="Struktur Komando Korps Siswa"
              description="Rantai komando fungsional 44 formasi kepemimpinan Serdik (Danmen, Danlat, Danpos hingga Komandan Peleton) dan penegasan batas wewenang nir-kekerasan fisik."
              currentPage="organisasi"
              onNavigate={handleNavigate}
            />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
              <OrgCommandTree />
            </div>
          </div>
        )}

        {currentPage === "faq" && (
          <div>
            <PageHeader
              badge="PUSAT INFORMASI & TANYA JAWAB"
              title="Tanya Jawab Aturan Serdik (FAQ)"
              description="Kompilasi jawaban resmi atas skenario kehidupan harian Serdik mulai dari cukur rambut 0-1-2 cm, larangan rokok/vape, etika ruang makan senyap, hingga aturan gawai & medsos."
              currentPage="faq"
              onNavigate={handleNavigate}
            />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
              <FaqSection />
            </div>
          </div>
        )}

        {currentPage === "kuis" && (
          <div>
            <PageHeader
              badge="SIMULATOR EVALUASI MANDIRI"
              title="Uji Kesiapan & Refleks Aturan"
              description="10 skenario studi kasus dilema lapangan untuk menguji pemahaman, kesiapan mental, dan kepatuhan Anda terhadap Perkhusserdik P3MD Batch 1 Soedirman."
              currentPage="kuis"
              onNavigate={handleNavigate}
            />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
              <ReadinessQuiz />
            </div>
          </div>
        )}
      </main>

      {/* Institutional Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPdfModal={() => setIsPdfModalOpen(true)}
      />

      {/* Global In-App PDF Viewer Modal */}
      <PdfViewerModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
      />

      {/* Global Quick Search Modal (Ctrl+K) */}
      <SearchDialog
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigateTab={handleNavigate}
      />
    </div>
  );
}

export default App;
