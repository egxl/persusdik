import React from "react";
import { PageId } from "../types/navigation";
import { ChevronRight, Home, ArrowLeft } from "lucide-react";

interface PageHeaderProps {
  badge: string;
  title: string;
  description: string;
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  actions?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  description,
  onNavigate,
  actions,
}) => {
  return (
    <div className="bg-white border-b border-slate-200 py-6 sm:py-8 mb-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between gap-4 mb-4 text-xs sm:text-sm">
          <nav className="flex items-center space-x-2 text-slate-500 font-sans min-w-0" aria-label="Breadcrumb">
            <button
              onClick={() => onNavigate("home")}
              className="hover:text-command-700 transition flex items-center space-x-1.5 cursor-pointer font-medium shrink-0"
            >
              <Home className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="hidden sm:inline">Beranda</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
            <span className="text-slate-900 font-semibold truncate">{title}</span>
          </nav>

          <button
            onClick={() => onNavigate("home")}
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-600 hover:text-command-700 cursor-pointer group transition shrink-0 whitespace-nowrap"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform shrink-0" />
            <span className="hidden sm:inline">Kembali ke Beranda</span>
            <span className="sm:hidden">Beranda</span>
          </button>
        </div>

        {/* Content Title & Description */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 pt-1">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase bg-command-50 text-command-800 border border-command-200">
              {badge}
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed pt-0.5">
              {description}
            </p>
          </div>

          {actions && (
            <div className="flex items-center space-x-2 shrink-0 self-start lg:self-auto pt-2 lg:pt-0">
              {actions}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

