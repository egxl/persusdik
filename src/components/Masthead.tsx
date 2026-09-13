import React from "react";
import { Shield } from "lucide-react";

export const Masthead: React.FC = () => {
  return (
    <header className="border-b border-parchment-200 bg-parchment-50/95 sticky top-0 z-30 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-full border-2 border-bronze-600/60 bg-parchment-100 flex items-center justify-center font-cinzel font-bold text-bronze-700 text-lg shadow-sm shrink-0">
              ?
            </div>
            <div>
              <div className="text-[11px] font-cinzel tracking-widest text-bronze-700 font-bold uppercase">
                Republik Indonesia • Lemdik Kesatrian Serpong
              </div>
              <div className="text-base sm:text-lg font-cinzel font-bold text-ink-900 tracking-tight leading-tight">
                Program Presiden untuk Pemimpin Masa Depan
              </div>
              <div className="text-xs font-serif italic text-bronze-700">
                Batch 1 / Soedirman • Peraturan Khusus Peserta Didik (TA 2026)
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-white px-3.5 py-2 rounded-lg border border-parchment-300 shadow-sm shrink-0">
            <Shield className="w-5 h-5 text-bronze-600 shrink-0" />
            <div className="text-left text-xs">
              <div className="text-[10px] text-ink-600 uppercase font-sans font-semibold">Komandan Batch 1:</div>
              <div className="font-bold text-ink-900 leading-tight">Marsma TNI Dr. Anton Pallaguna</div>
              <div className="text-[9px] text-bronze-700 font-mono">M.Han., M.M.O.A.S., CHRA., CSBA.</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
