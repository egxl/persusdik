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
    <div className="bg-gradient-to-b from-parchment-100 to-parchment-50 border-b border-parchment-200 py-6 sm:py-8 mb-6 sm:mb-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between gap-4 mb-3 text-xs">
          <nav className="flex items-center space-x-2 text-ink-600 font-sans" aria-label="Breadcrumb">
            <button
              onClick={() => onNavigate("home")}
              className="hover:text-bronze-700 transition flex items-center space-x-1 cursor-pointer font-medium"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Beranda</span>
            </button>
            <ChevronRight className="w-3 h-3 text-parchment-300" />
            <span className="text-ink-950 font-semibold">{title}</span>
          </nav>

          <button
            onClick={() => onNavigate("home")}
            className="inline-flex items-center space-x-1 text-xs text-bronze-700 hover:text-bronze-800 font-semibold cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>Kembali ke Beranda</span>
          </button>
        </div>

        {/* Content Title & Description */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pt-1">
          <div className="space-y-1.5 max-w-3xl">
            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-bronze-500/15 text-bronze-800 border border-bronze-500/30">
              {badge}
            </div>
            <h1 className="text-2xl sm:text-3xl font-cinzel font-bold text-ink-950 tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-xs sm:text-sm text-ink-700 font-sans leading-relaxed pt-0.5">
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
