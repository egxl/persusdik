import React, { useState, useRef, useEffect } from "react";
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
  FileText,
  ChevronDown
} from "lucide-react";

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenPdfModal: () => void;
  onOpenSearch: () => void;
}

interface NavItem {
  id: PageId;
  label: string;
  shortLabel: string;
  code: string;
  icon: React.ElementType;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenPdfModal,
  onOpenSearch,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement>(null);

  const navItems: NavItem[] = [
    { id: "home", label: "Beranda", shortLabel: "Beranda", code: "00", icon: Home },
    { id: "naskah", label: "Naskah 8 Bab", shortLabel: "Naskah", code: "01", icon: BookOpen },
    { id: "jadwal", label: "Jadwal Harian", shortLabel: "Jadwal", code: "02", icon: Calendar },
    { id: "disiplin", label: "Matriks Disiplin", shortLabel: "Disiplin", code: "03", icon: AlertTriangle },
    { id: "organisasi", label: "Korps Siswa", shortLabel: "Korps", code: "04", icon: Users },
    { id: "faq", label: "Tanya Jawab", shortLabel: "FAQ", code: "05", icon: HelpCircle },
    { id: "kuis", label: "Uji Kesiapan", shortLabel: "Kuis", code: "06", icon: CheckCircle2 },
  ];

  const primaryNavItems = navItems.slice(0, 4);
  const secondaryNavItems = navItems.slice(4);
  const isSecondaryActive = secondaryNavItems.some((item) => item.id === currentPage);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(e.target as Node)) {
        setIsMoreMenuOpen(false);
      }
    };
    if (isMoreMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMoreMenuOpen]);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    setIsMoreMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b border-canvas-300 transition-colors duration-200 shadow-[0_1px_3px_rgba(11,19,43,0.05)]">
      {/* Top Institutional Status Ribbon */}
      <div className="bg-navy-950 text-slate-300 text-xs py-1.5 px-4 border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono text-[11px] sm:text-xs">
          <div className="flex items-center space-x-2 shrink-0">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded-xs bg-navy-900 border border-brass-500/40 text-brass-400 font-bold tracking-wider uppercase text-[10px] whitespace-nowrap">
              DEKRIT RESMI
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 font-medium tracking-wide truncate max-w-[260px] sm:max-w-none">
              SK KOMANDAN LEMDIK KESATRIAN SERPONG • NO. SK/01/P3MD/VI/2026
            </span>
          </div>
          <div className="flex items-center space-x-3 shrink-0">
            <span className="hidden md:inline text-slate-400">P3MD REPUBLIK INDONESIA</span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-xs bg-brass-500/15 border border-brass-500/30 text-brass-400 font-mono font-bold text-[10px] tracking-wider uppercase">
              BATCH 1 / SOEDIRMAN (TA 2026)
            </span>
          </div>
        </div>
      </div>

      {/* Main Command Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          
          {/* Logo & Command Identity */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center space-x-3 text-left group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-navy-900 rounded p-1 transition cursor-pointer shrink-0"
            aria-label="Kembali ke Beranda PERSUSDIK"
          >
            <div className="w-10 h-10 rounded border border-brass-500/60 bg-navy-950 flex items-center justify-center shadow-xs group-hover:bg-navy-900 group-hover:border-brass-400 transition shrink-0">
              <Shield className="w-5 h-5 text-brass-400" />
            </div>
            <div className="shrink-0">
              <div className="flex items-center space-x-2">
                <span className="font-cinzel font-black text-xl text-navy-950 tracking-wider group-hover:text-brass-700 transition">
                  PERSUSDIK
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-canvas-200 text-navy-900 border border-canvas-300 rounded-xs">
                  B-1
                </span>
              </div>
              <div className="text-[10px] text-slate-500 font-mono tracking-wider uppercase font-semibold">
                Buku Saku Komando Serdik
              </div>
            </div>
          </button>

          {/* Full Navigation Links (Wide Desktop: xl and up) */}
          <nav className="hidden xl:flex items-center space-x-1 shrink-0">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative flex items-center space-x-1.5 px-3 py-2 text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    isActive
                      ? "text-navy-950 font-bold"
                      : "text-slate-600 hover:text-navy-900 hover:bg-canvas-100"
                  } rounded-xs`}
                >
                  <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-brass-600" : "text-slate-400"}`} />
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-brass-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Compact Navigation with "Lainnya" Dropdown (Tablets & Mid-Desktop: md to xl) */}
          <nav className="hidden md:flex xl:hidden items-center space-x-1 shrink-0">
            {primaryNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative flex items-center space-x-1.5 px-2.5 py-2 text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    isActive
                      ? "text-navy-950 font-bold"
                      : "text-slate-600 hover:text-navy-900 hover:bg-canvas-100"
                  } rounded-xs`}
                >
                  <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-brass-600" : "text-slate-400"}`} />
                  <span>{item.shortLabel}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-brass-500 rounded-full" />
                  )}
                </button>
              );
            })}

            {/* Dropdown for remaining items */}
            <div className="relative" ref={moreMenuRef}>
              <button
                onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                className={`flex items-center space-x-1 px-2.5 py-2 text-xs font-semibold whitespace-nowrap transition cursor-pointer rounded-xs ${
                  isSecondaryActive
                    ? "text-navy-950 font-bold bg-canvas-100"
                    : "text-slate-600 hover:text-navy-900 hover:bg-canvas-100"
                }`}
                aria-expanded={isMoreMenuOpen}
              >
                <span>
                  {isSecondaryActive
                    ? secondaryNavItems.find((i) => i.id === currentPage)?.shortLabel || "Lainnya"
                    : "Lainnya"}
                </span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isMoreMenuOpen ? "rotate-180" : ""}`} />
              </button>

              {isMoreMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded border border-canvas-300 py-1 z-50 shadow-md">
                  <div className="px-3 py-1 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider border-b border-canvas-200">
                    Modul Peraturan
                  </div>
                  {secondaryNavItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = currentPage === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full flex items-center space-x-2.5 px-3 py-2 text-xs font-semibold transition cursor-pointer text-left ${
                          isActive
                            ? "bg-navy-950 text-white"
                            : "text-slate-700 hover:bg-canvas-100 hover:text-navy-950"
                        }`}
                      >
                        <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-brass-400" : "text-slate-400"}`} />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Action Area: Search & PDF Tools */}
          <div className="flex items-center space-x-2 shrink-0">
            {/* Quick Search Button */}
            <button
              onClick={onOpenSearch}
              className="inline-flex items-center space-x-2 px-2.5 sm:px-3 py-1.5 rounded-xs text-xs font-mono font-medium border border-canvas-300 bg-white hover:bg-canvas-100 text-slate-700 hover:border-navy-800 transition cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-navy-900 whitespace-nowrap shrink-0"
              title="Cari kata kunci aturan (Ctrl+K)"
              aria-label="Buka pencarian aturan"
            >
              <Search className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span className="hidden sm:inline font-sans text-xs">Cari Aturan</span>
              <kbd className="hidden 2xl:inline-block px-1.5 py-0.2 text-[10px] bg-canvas-200 border border-canvas-300 rounded-xs text-slate-600 font-mono">
                ⌘K
              </kbd>
            </button>

            {/* In-App PDF Modal Trigger */}
            <button
              onClick={onOpenPdfModal}
              className="hidden lg:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xs text-xs font-semibold border border-brass-600/40 bg-brass-50/50 hover:bg-brass-100/60 text-navy-950 transition cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-navy-900 whitespace-nowrap shrink-0"
              title="Baca naskah asli PDF di browser"
            >
              <FileText className="w-3.5 h-3.5 text-brass-700 shrink-0" />
              <span>Naskah Asli PDF</span>
            </button>

            {/* Direct Download Button */}
            <a
              href="./PERATURAN%20KHUSUS%20SERDIK%20P3MD%20BATCH%201%202026.pdf"
              download
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xs text-xs font-semibold bg-navy-950 hover:bg-navy-900 text-white border border-navy-950 transition cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brass-400 whitespace-nowrap shrink-0"
              title="Unduh PDF Resmi (443 KB)"
            >
              <Download className="w-3.5 h-3.5 text-brass-400 shrink-0" />
              <span className="hidden md:inline">Unduh PDF</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded text-slate-700 hover:text-navy-950 hover:bg-canvas-100 border border-canvas-300 transition cursor-pointer"
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
        <div className="md:hidden bg-white border-b border-canvas-300 px-4 pt-3 pb-5 shadow-lg">
          <div className="flex flex-col space-y-1">
            <div className="text-[10px] font-mono font-bold text-slate-400 uppercase px-3 py-1.5 tracking-wider border-b border-canvas-200">
              Indeks Modul Komando
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-3 px-3.5 py-2.5 rounded text-sm font-semibold transition cursor-pointer text-left ${
                    isActive
                      ? "bg-navy-950 text-white"
                      : "text-slate-700 hover:bg-canvas-100"
                  }`}
                >
                  <span className="font-mono text-xs text-brass-500 w-5">{item.code}</span>
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-brass-400" : "text-slate-400"}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}

            <div className="pt-3 border-t border-canvas-200 mt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenPdfModal();
                }}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded text-xs font-semibold border border-brass-500/40 bg-brass-50/50 text-navy-950 hover:bg-brass-100/50 transition cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-brass-700 shrink-0" />
                <span>Buka Penampil PDF (42 Halaman)</span>
              </button>

              <a
                href="./PERATURAN%20KHUSUS%20SERDIK%20P3MD%20BATCH%201%202026.pdf"
                download
                className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded text-xs font-semibold bg-navy-950 text-white hover:bg-navy-900 transition cursor-pointer"
              >
                <Download className="w-4 h-4 text-brass-400 shrink-0" />
                <span>Unduh PDF Dokumen Resmi (443 KB)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
