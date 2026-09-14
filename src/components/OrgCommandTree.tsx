import React, { useState } from "react";
import { ORG_DIVISIONS } from "../data/orgRolesData";
import { Shield, AlertTriangle } from "lucide-react";

export const OrgCommandTree: React.FC = () => {
  const [activeDivisionIdx, setActiveDivisionIdx] = useState<number>(0);
  const activeDivision = ORG_DIVISIONS[activeDivisionIdx];

  return (
    <section className="space-y-6">
      {/* Header & Anti-Hazing Warning Card */}
      <div className="command-panel-brass p-6 sm:p-8 bg-white shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-canvas-300 pb-5 mb-5">
          <div>
            <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-brass-700">
              RANTAI KOMANDO KEPEMIMPINAN SISWA • BAB V
            </div>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-navy-950 mt-1">
              Struktur Organisasi Korps Siswa (44 Jabatan)
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl leading-relaxed font-sans">
              Formasi fungsional dan struktural siswa P3MD Batch 1 Soedirman sebagai media pembelajaran kepemimpinan, kepengurusan, dan koordinasi harian kesatrian.
            </p>
          </div>

          <div className="bg-navy-950 border border-navy-800 px-5 py-3 rounded-xs text-center shrink-0">
            <div className="font-mono text-xl sm:text-2xl font-black text-brass-400">
              44 Formasi
            </div>
            <div className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-widest mt-0.5">
              RANTAI KOMANDO SISWA
            </div>
          </div>
        </div>

        {/* Anti-Hazing Legal Mandate */}
        <div className="p-4 sm:p-5 rounded-xs bg-crimson-50 border-l-4 border-crimson-700 border border-crimson-200 text-xs sm:text-sm text-crimson-950 flex items-start space-x-3.5">
          <AlertTriangle className="w-5 h-5 text-crimson-700 shrink-0 mt-0.5" />
          <div className="leading-relaxed font-sans">
            <strong className="font-bold font-mono text-crimson-900 uppercase tracking-wide mr-1.5">
              [MANDAT HUKUM PASAL 13 &amp; 40 - LARANGAN KEKERASAN FISIK]:
            </strong>
            Seluruh 44 perangkat organisasi Serdik (dari Danmen hingga Komandan Peleton) 
            <span className="font-bold underline decoration-crimson-800 underline-offset-2"> SAMA SEKALI TIDAK MEMILIKI WEWENANG </span> 
            menjatuhkan sanksi fisik, melakukan penindakan perundungan (bullying), atau intimidasi kepada rekan sesama Serdik. Kewenangan penindakan fisik pembinaan terukur berada 100% pada Pelatih dan Pengasuh resmi Lemdik. Pelanggaran atas ketentuan ini berakibat sanksi berat rekomendasi Drop Out (PTDH).
          </div>
        </div>
      </div>

      {/* Division Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {ORG_DIVISIONS.map((div, idx) => (
          <button
            key={idx}
            onClick={() => setActiveDivisionIdx(idx)}
            className={`px-4 py-2.5 rounded-xs text-xs font-mono font-bold whitespace-nowrap transition border cursor-pointer ${
              activeDivisionIdx === idx
                ? "bg-navy-950 text-brass-400 border-navy-950 shadow-xs"
                : "bg-white text-slate-700 border-canvas-300 hover:bg-canvas-100"
            }`}
          >
            <span className="opacity-70 mr-1.5">[{String(idx + 1).padStart(2, "0")}]</span>
            <span className="uppercase">{div.division}</span>
          </button>
        ))}
      </div>

      {/* Active Division Roles */}
      <div className="command-panel p-6 sm:p-8 bg-white shadow-xs space-y-5">
        <div className="flex items-center justify-between border-b border-canvas-300 pb-3 mb-2">
          <div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-navy-950">
              {activeDivision.division}
            </h3>
            <p className="text-xs font-mono text-brass-700 font-bold mt-0.5 uppercase tracking-wide">
              Penanggung Jawab / Koordinator: {activeDivision.leader}
            </p>
          </div>
          <span className="text-xs font-mono text-slate-500 font-bold uppercase">
            {activeDivision.roles.length} Formasi Posisi
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          {activeDivision.roles.map((role, rIdx) => (
            <div
              key={rIdx}
              className="p-4 sm:p-5 rounded-xs bg-canvas-50 border border-canvas-300 hover:border-navy-900 transition-colors space-y-2"
            >
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-brass-700 shrink-0" />
                <h4 className="font-bold text-sm sm:text-base text-navy-950 font-sans">
                  {role.title}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans pl-6">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
