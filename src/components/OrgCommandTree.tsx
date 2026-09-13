import React, { useState } from "react";
import { ORG_DIVISIONS } from "../data/orgRolesData";
import { Shield, AlertCircle } from "lucide-react";

export const OrgCommandTree: React.FC = () => {
  const [activeDivisionIdx, setActiveDivisionIdx] = useState<number>(0);
  const activeDivision = ORG_DIVISIONS[activeDivisionIdx];

  return (
    <section className="space-y-6">
      <div className="bg-white border border-parchment-300 rounded-xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-parchment-200 pb-5 mb-5">
          <div>
            <div className="font-cinzel text-xs uppercase tracking-widest text-bronze-700 font-bold">
              Kepemimpinan Siswa & Rantai Komando (BAB IV)
            </div>
            <h2 className="font-cinzel text-2xl font-bold text-ink-900 mt-1">
              Struktur Organisasi Batch Korps Serdik
            </h2>
            <p className="text-xs text-ink-700 font-serif italic mt-1 max-w-2xl">
              Memuat 44 posisi fungsional dan struktural siswa P3MD Batch 1 Soedirman sebagai media pembelajaran kepemimpinan, kepengurusan, dan koordinasi kesatrian.
            </p>
          </div>

          <div className="bg-parchment-100 border border-parchment-300 px-4 py-2.5 rounded-lg text-center shrink-0">
            <div className="font-cinzel text-xl font-bold text-bronze-800">
              44 Jabatan
            </div>
            <div className="text-[10px] font-sans text-ink-700 uppercase font-semibold">
              Struktur Korps Lengkap
            </div>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs text-ink-900 flex items-start space-x-3">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="font-bold text-amber-900">Batasan Kewenangan Tegas (Pasal 13):</strong> Seluruh perangkat organisasi Serdik 
            <span className="text-amber-950 font-bold"> TIDAK BERWENANG </span> 
            menjatuhkan sanksi fisik, melakukan tindakan intimidasi, atau perundungan (bullying) kepada rekan sesama Serdik. Kewenangan penegakan sanksi sepenuhnya berada di tangan Pengasuh resmi Lemdik.
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {ORG_DIVISIONS.map((div, idx) => (
          <button
            key={idx}
            onClick={() => setActiveDivisionIdx(idx)}
            className={`px-3.5 py-2 rounded-lg text-xs font-sans whitespace-nowrap transition border ${
              activeDivisionIdx === idx
                ? "bg-bronze-700 text-white border-bronze-800 font-semibold shadow-xs"
                : "bg-white text-ink-700 border-parchment-300 hover:bg-parchment-100"
            }`}
          >
            {div.division}
          </button>
        ))}
      </div>

      <div className="bg-white border border-parchment-300 rounded-xl p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-parchment-200 pb-3 mb-2">
          <div>
            <h3 className="font-cinzel text-lg font-bold text-ink-900">
              {activeDivision.division}
            </h3>
            <p className="text-xs text-bronze-700 font-serif italic">
              Koordinator / Pimpinan: {activeDivision.leader}
            </p>
          </div>
          <span className="text-xs font-mono text-ink-600">
            {activeDivision.roles.length} Posisi
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {activeDivision.roles.map((role, rIdx) => (
            <div
              key={rIdx}
              className="p-4 rounded-lg bg-parchment-50 border border-parchment-200 hover:border-bronze-500/50 transition space-y-1.5"
            >
              <div className="flex items-center space-x-2">
                <Shield className="w-3.5 h-3.5 text-bronze-700 shrink-0" />
                <h4 className="font-bold text-sm text-ink-900 font-sans">
                  {role.title}
                </h4>
              </div>
              <p className="text-xs text-ink-700 leading-relaxed font-sans pl-5.5">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
