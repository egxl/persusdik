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
    { id: "home", label: "Beranda", shortLabel: "Beranda", icon: Home },
    { id: "naskah", label: "Naskah 8 Bab", shortLabel: "Naskah", icon: BookOpen },
    { id: "jadwal", label: "Jadwal Harian", shortLabel: "Jadwal", icon: Calendar },
    { id: "disiplin", label: "Matriks Disiplin", shortLabel: "Disiplin", icon: AlertTriangle },
    { id: "organisasi", label: "Korps Siswa", shortLabel: "Korps", icon: Users },
    { id: "faq", label: "Tanya Jawab", shortLabel: "Tanya Jawab", icon: HelpCircle },
    { id: "kuis", label: "Uji Kesiapan", shortLabel: "Uji Kesiapan", icon: CheckCircle2 },
  ];

  // Primary 4 items for intermediate tablet/compact laptop viewports
  const primaryNavItems = navItems.slice(0, 4);
  const secondaryNavItems = navItems.slice(4);
  const isSecondaryActive = secondaryNavItems.some((item) => item.id === currentPage);

  // Close dropdown on click outside
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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs transition-colors duration-200">
      {/* Top Institutional Status Ribbon */}
      <div className="bg-navy-950 text-slate-200 text-xs py-1.5 px-4 border-b border-navy-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono tracking-wide text-[11px] sm:text-xs">
          <div className="flex items-center space-x-2 shrink-0">
            <span className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-bold tracking-wider uppercase text-[10px] whitespace-nowrap shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>DOKUMEN RESMI</span>
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-300 font-medium whitespace-nowrap">
              Program Presiden untuk Pemimpin Masa Depan (P3MD) TA 2026
            </span>
          </div>
          <div className="flex items-center space-x-3 text-slate-300 font-medium shrink-0 whitespace-nowrap">
            <span className="hidden md:inline text-slate-400">Lemdik Kesatrian Serpong</span>
            <span className="text-brass-400 font-semibold">Batch 1 / Soedirman</span>
          </div>
        </div>
      </div>

      {/* Main Command Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          
          {/* Logo & Command Identity */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center space-x-3 text-left group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-command-600 rounded-xl p-1 transition cursor-pointer shrink-0"
            aria-label="Kembali ke Beranda PERSUSDIK"
          >
            <div className="w-10 h-10 rounded-xl bg-navy-950 border border-navy-800 flex items-center justify-center shadow-xs group-hover:bg-navy-900 group-hover:border-navy-700 transition shrink-0">
              <Shield className="w-5 h-5 text-brass-400 group-hover:scale-105 transition-transform duration-200" />
            </div>
            <div className="shrink-0">
              <div className="flex items-center space-x-2">
                <span className="font-sans font-black text-lg sm:text-xl text-slate-950 tracking-tight group-hover:text-command-700 transition whitespace-nowrap shrink-0">
                  PERSUSDIK
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-command-50 text-command-700 border border-command-200 shrink-0 whitespace-nowrap">
                  B-1
                </span>
              </div>
              <div className="text-[11px] text-slate-500 font-medium tracking-tight whitespace-nowrap hidden sm:block">
                Buku Saku Komando Serdik
              </div>
            </div>
          </button>

          {/* Full Navigation Links (Wide Desktop: xl and up) */}
          <nav className="hidden xl:flex items-center bg-slate-100/80 p-1 rounded-xl border border-slate-200/80 shadow-2xs shrink-0">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-1.5 px-2.5 2xl:px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all duration-150 cursor-pointer ${
                    isActive
                      ? "bg-navy-950 text-white shadow-xs ring-1 ring-navy-900/60"
                      : "text-slate-600 hover:text-slate-950 hover:bg-white/80"
                  } focus:outline-hidden focus-visible:ring-2 focus-visible:ring-command-600`}
                >
                  <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-brass-400" : "text-slate-400"}`} />
                  <span className="hidden 2xl:inline">{item.label}</span>
                  <span className="2xl:hidden">{item.shortLabel}</span>
                </button>
              );
            })}
          </nav>

          {/* Compact Navigation with "Lainnya" Dropdown (Tablets & Mid-Desktop: md to xl) */}
          <nav className="hidden md:flex xl:hidden items-center bg-slate-100/80 p-1 rounded-xl border border-slate-200/80 shadow-2xs shrink-0">
            {primaryNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition cursor-pointer ${
                    isActive
                      ? "bg-navy-950 text-white shadow-xs ring-1 ring-navy-900/60"
                      : "text-slate-600 hover:text-slate-950 hover:bg-white/80"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-brass-400" : "text-slate-400"}`} />
                  <span>{item.shortLabel}</span>
                </button>
              );
            })}

            {/* Dropdown for remaining 3 items */}
            <div className="relative" ref={moreMenuRef}>
              <button
                onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition cursor-pointer ${
                  isSecondaryActive
                    ? "bg-navy-950 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-950 hover:bg-white/80"
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
                <div className="absolute right-0 mt-1.5 w-48 bg-white rounded-xl shadow-lg border border-slate-200 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Modul Lainnya
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
                            : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
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
              className="inline-flex items-center space-x-2 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 hover:border-slate-400 transition shadow-2xs cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-command-600 whitespace-nowrap shrink-0"
              title="Cari kata kunci aturan (Ctrl+K)"
              aria-label="Buka pencarian aturan"
            >
              <Search className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span className="hidden sm:inline font-medium">Cari</span>
              <kbd className="hidden 2xl:inline-block px-1.5 py-0.5 text-[10px] bg-slate-100 border border-slate-200 rounded text-slate-600 font-mono font-semibold">
                Ctrl K
              </kbd>
            </button>

            {/* In-App PDF Modal Trigger */}
            <button
              onClick={onOpenPdfModal}
              className="hidden lg:inline-flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 transition shadow-2xs cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-command-600 whitespace-nowrap shrink-0"
              title="Baca naskah asli PDF di browser"
            >
              <FileText className="w-3.5 h-3.5 text-command-600 shrink-0" />
              <span>Naskah PDF</span>
            </button>

            {/* Direct Download Button */}
            <a
              href="./PERATURAN%20KHUSUS%20SERDIK%20P3MD%20BATCH%201%202026.pdf"
              download
              className="hidden sm:inline-flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold bg-navy-950 hover:bg-navy-900 text-white shadow-2xs transition cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-command-600 whitespace-nowrap shrink-0"
              title="Unduh PDF Resmi (443 KB)"
            >
              <Download className="w-3.5 h-3.5 text-brass-400 shrink-0" />
              <span className="hidden md:inline">Unduh PDF</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-300 transition cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-command-600 shrink-0"
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
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 shadow-lg animate-in slide-in-from-top duration-200">
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
                      ? "bg-navy-950 text-white shadow-xs"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-brass-400" : "text-slate-400"}`} />
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
                <BookOpen className="w-4 h-4 text-command-700 shrink-0" />
                <span>Buka Penampil PDF (42 Halaman)</span>
              </button>

              <a
                href="./PERATURAN%20KHUSUS%20SERDIK%20P3MD%20BATCH%201%202026.pdf"
                download
                className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-navy-950 text-white hover:bg-navy-900 transition cursor-pointer"
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

