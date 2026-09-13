import React, { useState } from "react";
import { PageId } from "../types/navigation";
import {
  Shield,
  BookOpen,
  Calendar,
  AlertTriangle,
  Users,
  HelpCircle,
  CheckCircle2,
  Search,
  Download,
  Menu,
  X,
  Home,
  FileText
} from "lucide-react";

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenPdfModal: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenPdfModal,
  onOpenSearch,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string; icon: React.ElementType }[] = [
    { id: "home", label: "Beranda", icon: Home },
    { id: "naskah", label: "Naskah Resmi", icon: BookOpen },
    { id: "jadwal", label: "Jadwal Harian", icon: Calendar },
    { id: "disiplin", label: "Kode Disiplin", icon: AlertTriangle },
    { id: "organisasi", label: "Korps Siswa", icon: Users },
    { id: "faq", label: "Tanya Jawab", icon: HelpCircle },
    { id: "kuis", label: "Uji Kesiapan", icon: CheckCircle2 },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-parchment-50/95 backdrop-blur-md border-b border-parchment-200/90 shadow-xs transition-colors duration-200">
      {/* Top micro-bar for presidential authority context */}
      <div className="bg-ink-950 text-parchment-200 text-[11px] py-1 px-4 border-b border-bronze-600/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono tracking-wide">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-bronze-400 animate-pulse"></span>
            <span className="text-bronze-400 font-semibold uppercase tracking-widest text-[10px]">
              DOKUMEN RESMI
            </span>
            <span className="hidden sm:inline text-parchment-300/80">|</span>
            <span className="hidden sm:inline text-parchment-200 text-[10px]">
              Program Presiden untuk Pemimpin Masa Depan (P3MD) TA 2026
            </span>
          </div>
          <div className="flex items-center space-x-3 text-[10px] text-parchment-300/90">
            <span className="hidden md:inline">Lemdik Kesatrian Serpong</span>
            <span>Batch 1 / Soedirman</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
          
          {/* Logo & Brand Identity */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center space-x-3 text-left group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-bronze-500 rounded-lg p-1 transition cursor-pointer"
            aria-label="Kembali ke Beranda PERSUSDIK"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-ink-900 to-ink-950 border border-bronze-500/50 flex items-center justify-center shadow-sm group-hover:border-bronze-400 transition shrink-0">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-bronze-400 group-hover:scale-105 transition-transform duration-200" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-cinzel font-bold text-base sm:text-lg text-ink-950 tracking-wider group-hover:text-bronze-700 transition">
                  PERSUSDIK
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-bronze-500/15 text-bronze-800 font-bold border border-bronze-500/30">
                  B-1
                </span>
              </div>
              <div className="text-[10px] sm:text-[11px] font-sans text-ink-600 tracking-tight leading-none line-clamp-1">
                Peraturan Khusus Serdik • P3MD Soedirman
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 bg-parchment-100/70 p-1.5 rounded-xl border border-parchment-300/70 shadow-2xs">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-150 cursor-pointer ${
                    isActive
                      ? "bg-ink-900 text-parchment-50 shadow-sm"
                      : "text-ink-700 hover:text-ink-950 hover:bg-parchment-200/60"
                  } focus:outline-hidden focus-visible:ring-2 focus-visible:ring-bronze-500`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-bronze-400" : "text-ink-600"}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Desktop Secondary Menu (Tablet & Small Desktop) */}
          <nav className="hidden md:flex xl:hidden items-center space-x-1">
            {navItems.slice(0, 4).map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                    isActive
                      ? "bg-ink-900 text-parchment-50 shadow-sm"
                      : "text-ink-700 hover:text-ink-950 hover:bg-parchment-100"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-bronze-400" : "text-ink-600"}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Actions: Search & PDF Tools */}
          <div className="flex items-center space-x-2 shrink-0">
            {/* Quick Search Button */}
            <button
              onClick={onOpenSearch}
              className="inline-flex items-center space-x-1.5 px-2.5 sm:px-3 py-2 rounded-lg text-xs border border-parchment-300 bg-white hover:bg-parchment-50 text-ink-700 hover:border-bronze-500 transition shadow-2xs cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-bronze-500"
              title="Cari kata kunci (Ctrl+K)"
              aria-label="Buka pencarian aturan"
            >
              <Search className="w-3.5 h-3.5 text-bronze-700" />
              <span className="hidden sm:inline font-medium">Cari</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[9px] bg-parchment-100 border border-parchment-300 rounded text-ink-600 font-mono">
                Ctrl K
              </kbd>
            </button>

            {/* In-App PDF Reader Trigger */}
            <button
              onClick={onOpenPdfModal}
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs border border-bronze-500/40 bg-parchment-100/90 text-ink-900 hover:bg-bronze-600 hover:text-white transition font-medium shadow-2xs cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-bronze-500"
              title="Baca Naskah Asli PDF di browser"
            >
              <FileText className="w-3.5 h-3.5 text-bronze-700 group-hover:text-white" />
              <span>Naskah PDF</span>
            </button>

            {/* Direct Download Button */}
            <a
              href="./PERATURAN%20KHUSUS%20SERDIK%20P3MD%20BATCH%201%202026.pdf"
              download
              className="inline-flex items-center space-x-1 px-2.5 sm:px-3 py-2 rounded-lg text-xs bg-bronze-600 hover:bg-bronze-700 text-white font-medium shadow-sm transition hover:shadow cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-bronze-500"
              title="Unduh PDF Resmi (443 KB)"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Unduh</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden inline-flex items-center justify-center p-2 rounded-lg text-ink-700 hover:text-ink-950 hover:bg-parchment-200/70 border border-parchment-300 transition cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-bronze-500"
              aria-label={isMobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-parchment-50 border-b border-parchment-300 px-4 pt-3 pb-5 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            <div className="text-[11px] font-cinzel font-bold text-bronze-800 uppercase px-3 py-1 tracking-wider">
              Navigasi Halaman Portal
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition cursor-pointer text-left ${
                    isActive
                      ? "bg-ink-900 text-parchment-50 font-semibold shadow-xs"
                      : "text-ink-800 hover:bg-parchment-200/70"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-bronze-400" : "text-bronze-700"}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}

            <div className="pt-3 border-t border-parchment-200 mt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenPdfModal();
                }}
                className="w-full flex items-center justify-center space-x-2 px-3 py-2.5 rounded-lg text-xs font-semibold border border-bronze-600/40 bg-parchment-100 text-ink-900 hover:bg-bronze-600 hover:text-white transition cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-bronze-700" />
                <span>Buka Penampil PDF (42 Halaman)</span>
              </button>

              <a
                href="./PERATURAN%20KHUSUS%20SERDIK%20P3MD%20BATCH%201%202026.pdf"
                download
                className="w-full flex items-center justify-center space-x-2 px-3 py-2.5 rounded-lg text-xs font-semibold bg-bronze-600 hover:bg-bronze-700 text-white transition cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Unduh PDF Resmi (443 KB)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
