import React, { useState } from "react";
import { VIOLATIONS_DATA, SANCTION_LEVELS } from "../data/disciplinaryData";
import { ShieldAlert, Scale, AlertOctagon } from "lucide-react";

export const DisciplinaryMatrix: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<"semua" | "ringan" | "sedang" | "berat">("semua");
  const [simulationCount, setSimulationCount] = useState<1 | 2 | 3>(1);

  const filteredViolations = VIOLATIONS_DATA.filter((v) => {
    if (selectedLevel === "semua") return true;
    return v.category === selectedLevel;
  });

  const getEscalationOutcome = (count: 1 | 2 | 3) => {
    switch (count) {
      case 1:
        return {
          stamp: "stamp-dibatasi",
          badgeText: "STATUS: PELANGGARAN TINGKAT I (RINGAN)",
          title: "Sanksi Pembinaan Ringan & Catatan Buku Saku",
          desc: "Teguran lisan atau peringatan tertulis tingkat I, tindakan pembinaan fisik terukur terpantau medis (push up/sit up terpantau), dan pemotongan poin kondite sikap.",
          article: "Pasal 38 ayat (1) s.d. (6)",
          authority: "Pelatih / Pengasuh Piket",
        };
      case 2:
        return {
          stamp: "stamp-dibatasi",
          badgeText: "STATUS: ESKALASI AKUMULATIF TINGKAT II (SEDANG)",
          title: "Eskalasi Akumulatif: Sanksi Sedang Otomatis",
          desc: "Pengulangan pelanggaran ringan yang sama untuk kedua kalinya otomatis diekskalasi menjadi SANKSI SEDANG: Pencabutan hak Pesiar/Izin Bermalam (IB), piket pengawasan malam ekstra, dan evaluasi pengasuh.",
          article: "Pasal 38 ayat (8) huruf a",
          authority: "Perwira Pengasuh / Danlat",
        };
      case 3:
        return {
          stamp: "stamp-dilarang",
          badgeText: "STATUS KRITIS: DROP OUT (PTDH REKOMENDASI)",
          title: "Eskalasi Maksimal: Sidang Dewan Kehormatan Serdik",
          desc: "Pengulangan pelanggaran yang sama untuk ketiga kalinya langsung diklasifikasikan sebagai SANKSI BERAT: Sidang Dewan Kehormatan Serdik, pemberitahuan resmi ke Direktur Utama BUMN pengirim, dan rekomendasi PEMBERHENTIAN TIDAK DENGAN HORMAT (DROP OUT).",
          article: "Pasal 38 ayat (8) huruf b",
          authority: "Komandan Lemdik Kesatrian Serpong",
        };
    }
  };

  const outcome = getEscalationOutcome(simulationCount);

  return (
    <section className="space-y-6">
      {/* Header & Escalation Simulator */}
      <div className="command-panel-brass p-6 sm:p-8 bg-white shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-canvas-300 pb-5 mb-6">
          <div>
            <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-brass-700">
              PENEGAKAN DISIPLIN &amp; DEWAN KEHORMATAN • BAB VII
            </div>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-navy-950 mt-1">
              Matriks Disiplin, Pelanggaran &amp; Eskalasi Sanksi
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl leading-relaxed font-sans">
              Klasifikasi pelanggaran, batas toleransi sikap perilaku, dan mekanisme eskalasi penumpukan sanksi pengulangan sesuai Perkhusserdik 2026.
            </p>
          </div>

          <div className="bg-canvas-100 border border-canvas-300 px-5 py-3 rounded-xs text-center shrink-0">
            <Scale className="w-5 h-5 text-brass-700 mx-auto mb-1" />
            <div className="text-[10px] font-mono text-navy-950 uppercase font-bold tracking-widest">
              KEADILAN EDUKATIF
            </div>
          </div>
        </div>

        {/* Escalation Simulator */}
        <div className="bg-canvas-50 border border-canvas-300 rounded-xs p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-navy-950">
            <span className="flex items-center space-x-2">
              <ShieldAlert className="w-4 h-4 text-brass-700" />
              <span className="font-cinzel tracking-wide text-sm font-bold">Simulator Akumulasi Pengulangan Sanksi (Pasal 38 ayat 8)</span>
            </span>
            <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">
              SIMULASI HUKUM RESMI
            </span>
          </div>
          
          <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
            Perkhusserdik menerapkan aturan eskalasi berantai: Mengulang pelanggaran ringan sebanyak 2x otomatis naik ke sanksi sedang, dan 3x langsung diajukan ke sidang Dewan Kehormatan untuk Drop Out:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {([1, 2, 3] as const).map((num) => (
              <button
                key={num}
                onClick={() => setSimulationCount(num)}
                className={`py-3 px-3.5 rounded-xs text-xs font-mono font-bold transition cursor-pointer border flex items-center justify-between ${
                  simulationCount === num
                    ? num === 3
                      ? "bg-crimson-800 text-white border-crimson-900 shadow-xs"
                      : "bg-navy-950 text-brass-400 border-navy-950 shadow-xs"
                    : "bg-white text-slate-700 border-canvas-300 hover:bg-canvas-100"
                }`}
              >
                <span>Tahap #{num}: {num}x Pelanggaran</span>
                <span className="text-[10px] opacity-80">
                  {num === 1 ? "Ringan" : num === 2 ? "Sedang" : "PTDH / D.O."}
                </span>
              </button>
            ))}
          </div>

          <div className="p-4 sm:p-5 rounded-xs bg-white border border-canvas-300 space-y-2">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className={outcome.stamp}>
                {outcome.badgeText}
              </span>
              <span className="text-xs font-mono text-slate-500 font-semibold">{outcome.article}</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-navy-950 pt-1 flex items-center space-x-2">
              {simulationCount === 3 && <AlertOctagon className="w-4 h-4 text-crimson-700" />}
              <span>{outcome.title}</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">{outcome.desc}</p>
            <div className="pt-2 text-[11px] font-mono text-slate-500 border-t border-canvas-200">
              Pejabat Pemutus: <strong className="text-navy-950">{outcome.authority}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 flex-wrap">
        {(["semua", "ringan", "sedang", "berat"] as const).map((lvl) => (
          <button
            key={lvl}
            onClick={() => setSelectedLevel(lvl)}
            className={`px-4 py-2 rounded-xs text-xs uppercase font-mono font-bold transition cursor-pointer border ${
              selectedLevel === lvl
                ? "bg-navy-950 text-brass-400 border-navy-950 shadow-xs"
                : "bg-white text-slate-700 border-canvas-300 hover:bg-canvas-100"
            }`}
          >
            {lvl === "semua" ? "Seluruh Klasifikasi Pelanggaran" : `Pelanggaran ${lvl}`}
          </button>
        ))}
      </div>

      {/* Violations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredViolations.map((v) => (
          <div
            key={v.id}
            className="command-panel p-5 sm:p-6 bg-white shadow-2xs flex flex-col justify-between hover:border-navy-900 transition-colors space-y-3.5"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span
                  className={
                    v.category === "ringan"
                      ? "stamp-dibatasi"
                      : v.category === "sedang"
                      ? "stamp-dibatasi"
                      : "stamp-dilarang"
                  }
                >
                  {v.category}
                </span>
                <span className="text-xs font-mono text-slate-500 font-semibold">
                  {v.pasal}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-navy-950 leading-snug">
                {v.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-sans">
                {v.description}
              </p>
            </div>

            <div className="pt-3 border-t border-canvas-200 space-y-1">
              <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Konsekuensi &amp; Tindakan Disiplin:
              </span>
              <span className="text-slate-900 text-xs sm:text-sm leading-relaxed block font-medium font-sans">
                {v.consequences}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Sanction Levels Authority Card */}
      <div className="command-panel p-6 sm:p-8 bg-white shadow-xs">
        <h3 className="font-cinzel text-base sm:text-lg font-bold text-navy-950 mb-4 pb-2 border-b border-canvas-300">
          Tingkatan Sanksi &amp; Pejabat yang Berwenang Menjatuhkan (Pasal 38)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SANCTION_LEVELS.map((s, idx) => (
            <div key={idx} className="p-5 rounded-xs bg-canvas-50 border border-canvas-300 space-y-2.5">
              <div className="font-bold text-sm sm:text-base text-navy-950 font-cinzel">{s.level}</div>
              <div className="text-xs text-brass-700 font-mono font-bold">
                Otoritas: {s.authority}
              </div>
              <ul className="text-xs text-slate-600 space-y-2 list-disc list-inside pt-2.5 border-t border-canvas-200 font-sans">
                {s.measures.map((m, mIdx) => (
                  <li key={mIdx} className="leading-snug">{m}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
