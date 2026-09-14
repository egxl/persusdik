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
    { id: "naskah", label: "Naskah 8 Bab", icon: BookOpen },
    { id: "jadwal", label: "Jadwal Harian", icon: Calendar },
    { id: "disiplin", label: "Matriks Disiplin", icon: AlertTriangle },
    { id: "organisasi", label: "Korps Siswa", icon: Users },
    { id: "faq", label: "Tanya Jawab", icon: HelpCircle },
    { id: "kuis", label: "Uji Kesiapan", icon: CheckCircle2 },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-colors duration-200">
      {/* Top Institutional Status Ribbon */}
      <div className="bg-navy-950 text-slate-200 text-xs py-1.5 px-4 border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono tracking-wide text-[11px] sm:text-xs">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-bold tracking-wider uppercase text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>DOKUMEN RESMI</span>
            </span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-300 font-medium">
              Program Presiden untuk Pemimpin Masa Depan (P3MD) TA 2026
            </span>
          </div>
          <div className="flex items-center space-x-3 text-slate-300 font-medium">
            <span className="hidden md:inline text-slate-400">Lemdik Kesatrian Serpong</span>
            <span className="text-brass-400 font-semibold">Batch 1 / Soedirman</span>
          </div>
        </div>
      </div>

      {/* Main Command Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 gap-2 sm:gap-4">
          
          {/* Logo & Command Identity */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center space-x-3 text-left group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-command-600 rounded-lg p-1 transition cursor-pointer"
            aria-label="Kembali ke Beranda PERSUSDIK"
          >
            <div className="w-10 h-10 rounded-xl bg-navy-900 border border-slate-700 flex items-center justify-center shadow-xs group-hover:bg-command-900 group-hover:border-command-600 transition shrink-0">
              <Shield className="w-5 h-5 text-brass-400 group-hover:scale-105 transition-transform duration-200" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-sans font-extrabold text-lg sm:text-xl text-slate-950 tracking-tight group-hover:text-command-700 transition">
                  PERSUSDIK
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-command-50 text-command-700 font-bold border border-command-200">
                  B-1
                </span>
              </div>
              <div className="text-xs text-slate-500 font-medium tracking-normal line-clamp-1">
                Buku Saku Komando & Peraturan Serdik
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 bg-slate-100/90 p-1 rounded-xl border border-slate-200/90">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-150 cursor-pointer ${
                    isActive
                      ? "bg-navy-900 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-950 hover:bg-white"
                  } focus:outline-hidden focus-visible:ring-2 focus-visible:ring-command-600`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-brass-400" : "text-slate-400"}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Desktop Secondary Menu (Tablet & Mid Desktop) */}
          <nav className="hidden md:flex xl:hidden items-center space-x-1">
            {navItems.slice(0, 4).map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                    isActive
                      ? "bg-navy-900 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-brass-400" : "text-slate-400"}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Actions: Search & PDF Direct Access */}
          <div className="flex items-center space-x-2 shrink-0">
            {/* Quick Search Button */}
            <button
              onClick={onOpenSearch}
              className="inline-flex items-center space-x-2 px-2.5 sm:px-3 py-2 rounded-lg text-xs font-medium border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 hover:border-slate-400 transition shadow-2xs cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-command-600"
              title="Cari kata kunci aturan (Ctrl+K)"
              aria-label="Buka pencarian aturan"
            >
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden sm:inline font-medium">Cari</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] bg-slate-100 border border-slate-200 rounded text-slate-600 font-mono font-semibold">
                Ctrl K
              </kbd>
            </button>

            {/* In-App PDF Modal Trigger */}
            <button
              onClick={onOpenPdfModal}
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-semibold border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 transition shadow-2xs cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-command-600"
              title="Baca naskah asli PDF di browser"
            >
              <FileText className="w-3.5 h-3.5 text-command-600" />
              <span>Naskah PDF</span>
            </button>

            {/* Direct Download Button */}
            <a
              href="./PERATURAN%20KHUSUS%20SERDIK%20P3MD%20BATCH%201%202026.pdf"
              download
              className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-navy-900 hover:bg-command-800 text-white shadow-2xs transition cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-command-600"
              title="Unduh PDF Resmi (443 KB)"
            >
              <Download className="w-3.5 h-3.5 text-brass-400" />
              <span className="hidden md:inline">Unduh PDF</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-300 transition cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-command-600"
              aria-label={isMobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            <div className="text-[11px] font-mono font-bold text-slate-400 uppercase px-3 py-1.5 tracking-wider">
              Navigasi Halaman Portal
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-3 px-3.5 py-2.5 rounded-lg text-sm font-semibold transition cursor-pointer text-left ${
                    isActive
                      ? "bg-navy-900 text-white shadow-xs"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-brass-400" : "text-slate-400"}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}

            <div className="pt-3 border-t border-slate-200 mt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenPdfModal();
                }}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-semibold border border-slate-300 bg-slate-50 text-slate-800 hover:bg-slate-100 transition cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-command-700" />
                <span>Buka Penampil PDF (42 Halaman)</span>
              </button>

              <a
                href="./PERATURAN%20KHUSUS%20SERDIK%20P3MD%20BATCH%201%202026.pdf"
                download
                className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-navy-900 text-white hover:bg-command-800 transition cursor-pointer"
              >
                <Download className="w-4 h-4 text-brass-400" />
                <span>Unduh PDF Dokumen Resmi (443 KB)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

