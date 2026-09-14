import React, { useState } from "react";
import { ORG_DIVISIONS } from "../data/orgRolesData";
import { Shield, AlertCircle } from "lucide-react";

export const OrgCommandTree: React.FC = () => {
  const [activeDivisionIdx, setActiveDivisionIdx] = useState<number>(0);
  const activeDivision = ORG_DIVISIONS[activeDivisionIdx];

  return (
    <section className="space-y-6">
      {/* Header & Warning Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-5">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-command-700">
              Kepemimpinan Siswa & Rantai Komando (BAB IV)
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1">
              Struktur Organisasi Korps Siswa
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1.5 max-w-2xl leading-relaxed font-sans">
              Memuat 44 posisi fungsional dan struktural siswa P3MD Batch 1 Soedirman sebagai media pembelajaran kepemimpinan, kepengurusan, dan koordinasi kesatrian.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 px-5 py-3 rounded-xl text-center shrink-0">
            <div className="font-mono text-xl sm:text-2xl font-extrabold text-slate-900">
              44 Jabatan
            </div>
            <div className="text-[11px] font-sans text-slate-500 uppercase font-bold tracking-wider mt-0.5">
              Struktur Korps Lengkap
            </div>
          </div>
        </div>

        {/* Anti-Hazing Legal Mandate */}
        <div className="p-4 sm:p-5 rounded-xl bg-crimson-50 border border-crimson-200 text-xs sm:text-sm text-crimson-950 flex items-start space-x-3.5">
          <AlertCircle className="w-5 h-5 text-crimson-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="font-bold text-crimson-900">Batasan Kewenangan Tegas (Pasal 13):</strong> Seluruh perangkat organisasi Serdik 
            <span className="font-extrabold text-crimson-700"> TIDAK BERWENANG </span> 
            menjatuhkan sanksi fisik, melakukan tindakan intimidasi, atau perundungan (bullying) kepada rekan sesama Serdik. Kewenangan penegakan sanksi fisik sepenuhnya berada di tangan Pengasuh resmi Lemdik.
          </div>
        </div>
      </div>

      {/* Division Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {ORG_DIVISIONS.map((div, idx) => (
          <button
            key={idx}
            onClick={() => setActiveDivisionIdx(idx)}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-sans whitespace-nowrap transition border cursor-pointer ${
              activeDivisionIdx === idx
                ? "bg-navy-900 text-white border-navy-950 font-bold shadow-xs"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
            }`}
          >
            {div.division}
          </button>
        ))}
      </div>

      {/* Active Division Roles */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-2">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950">
              {activeDivision.division}
            </h3>
            <p className="text-xs sm:text-sm text-command-700 font-mono font-semibold mt-0.5">
              Koordinator / Pimpinan: {activeDivision.leader}
            </p>
          </div>
          <span className="text-xs font-mono text-slate-500 font-semibold">
            {activeDivision.roles.length} Posisi
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          {activeDivision.roles.map((role, rIdx) => (
            <div
              key={rIdx}
              className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition space-y-2"
            >
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-command-700 shrink-0" />
                <h4 className="font-bold text-sm sm:text-base text-slate-950 font-sans">
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

