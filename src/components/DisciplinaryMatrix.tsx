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
          badge: "Status Normal: Pelanggaran Ringan Ke-1",
          badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
          title: "Sanksi Pembinaan Ringan",
          desc: "Diberikan teguran lisan atau tertulis tingkat I, tindakan pembinaan fisik terukur terpantau medis, dan pemotongan poin kondite ringan.",
          article: "Pasal 38 ayat (1) s.d. (6)"
        };
      case 2:
        return {
          badge: "Status Naik: Eskalasi Sanksi Sedang",
          badgeColor: "bg-orange-50 text-orange-900 border-orange-200 font-bold",
          title: "Eskalasi Akumulatif Tingkat II",
          desc: "Apabila mengulang pelanggaran ringan yang sama sebanyak 2 kali, status sanksi otomatis dinaikkan menjadi SANKSI SEDANG (Pencabutan hak Pesiar/IB, piket ekstra, dan pengawasan khusus).",
          article: "Pasal 38 ayat (8) huruf a"
        };
      case 3:
        return {
          badge: "STATUS KRITIS: DROP OUT (PTDH)",
          badgeColor: "bg-crimson-50 text-crimson-700 border-crimson-200 font-extrabold",
          title: "Eskalasi Maksimal: Sidang Dewan Kehormatan",
          desc: "Apabila mengulang pelanggaran ringan yang sama sebanyak 3 kali, status dinaikkan menjadi SANKSI BERAT: Sidang Dewan Kehormatan Serdik, laporan ke Direktur Utama BUMN asal, hingga rekomendasi PEMBERHENTIAN TIDAK DENGAN HORMAT (DROP OUT).",
          article: "Pasal 38 ayat (8) huruf b"
        };
    }
  };

  const outcome = getEscalationOutcome(simulationCount);

  return (
    <section className="space-y-6">
      {/* Header & Simulator Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-5">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-command-700">
              Penegakan Disiplin & Tata Tertib (BAB VII)
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1">
              Matriks Pelanggaran, Penghargaan & Sanksi
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1.5 max-w-2xl leading-relaxed font-sans">
              Klasifikasi pelanggaran, batasan toleransi sikap perilaku, serta mekanisme penegakan sanksi berulang sesuai Perkhusserdik 2026.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 px-5 py-3 rounded-xl text-center shrink-0">
            <Scale className="w-5 h-5 text-command-700 mx-auto mb-1" />
            <div className="text-xs font-sans text-slate-600 uppercase font-bold tracking-wider">
              Prinsip Keadilan Edukatif
            </div>
          </div>
        </div>

        {/* Escalation Simulator */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6">
          <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900 mb-2">
            <span className="flex items-center space-x-2">
              <ShieldAlert className="w-4 h-4 text-command-700" />
              <span>Simulator Aturan Pengulangan Pelanggaran (Pasal 38 ayat 8)</span>
            </span>
            <span className="text-xs font-mono text-slate-500 font-medium">Simulasi Interaktif</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 font-sans mb-3.5 leading-relaxed">
            Klik jumlah pengulangan di bawah untuk melihat bagaimana pelanggaran ringan yang diulang berturut-turut otomatis diekskalasi sanksinya:
          </p>

          <div className="grid grid-cols-3 gap-2.5 mb-4">
            {([1, 2, 3] as const).map((num) => (
              <button
                key={num}
                onClick={() => setSimulationCount(num)}
                className={`py-2.5 px-3.5 rounded-xl text-xs sm:text-sm font-sans font-bold border transition cursor-pointer ${
                  simulationCount === num
                    ? num === 3
                      ? "bg-crimson-700 text-white border-crimson-800 shadow-xs"
                      : "bg-navy-900 text-white border-navy-950 shadow-xs"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {num}x Pelanggaran Sama
              </button>
            ))}
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 space-y-2">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className={`text-xs px-3 py-1 rounded-md border font-mono uppercase font-bold tracking-wide ${outcome.badgeColor}`}>
                {outcome.badge}
              </span>
              <span className="text-xs font-mono text-slate-500 font-semibold">{outcome.article}</span>
            </div>
            <h4 className="text-base sm:text-lg font-extrabold text-slate-950 pt-1 flex items-center space-x-2">
              {simulationCount === 3 && <AlertOctagon className="w-4 h-4 text-crimson-600" />}
              <span>{outcome.title}</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">{outcome.desc}</p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 flex-wrap">
        {(["semua", "ringan", "sedang", "berat"] as const).map((lvl) => (
          <button
            key={lvl}
            onClick={() => setSelectedLevel(lvl)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm uppercase font-mono font-bold transition cursor-pointer border ${
              selectedLevel === lvl
                ? "bg-navy-900 text-white border-navy-950 shadow-xs"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
            }`}
          >
            {lvl === "semua" ? "Seluruh Pelanggaran" : `Pelanggaran ${lvl}`}
          </button>
        ))}
      </div>

      {/* Violations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredViolations.map((v) => (
          <div
            key={v.id}
            className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-2xs flex flex-col justify-between hover:border-slate-300 transition space-y-3.5"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-[10px] font-mono px-2.5 py-0.5 rounded border uppercase font-bold tracking-wide ${
                    v.category === "ringan"
                      ? "bg-amber-50 text-amber-800 border-amber-200"
                      : v.category === "sedang"
                      ? "bg-orange-50 text-orange-800 border-orange-200"
                      : "bg-crimson-50 text-crimson-700 border-crimson-200 font-bold"
                  }`}
                >
                  {v.category}
                </span>
                <span className="text-xs font-mono text-slate-400 font-semibold">
                  {v.pasal}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-950 leading-snug">
                {v.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {v.description}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-1">
              <span className="font-mono text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Konsekuensi Tindakan:
              </span>
              <span className="text-slate-800 text-xs sm:text-sm leading-relaxed block font-medium">
                {v.consequences}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Sanction Levels Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
        <h3 className="text-base sm:text-lg font-extrabold text-slate-950 mb-4 pb-2 border-b border-slate-200">
          Tingkatan Sanksi & Pejabat yang Berwenang (Pasal 38)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SANCTION_LEVELS.map((s, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
              <div className="font-bold text-sm sm:text-base text-slate-950">{s.level}</div>
              <div className="text-xs text-command-700 font-mono font-semibold">
                Otoritas: {s.authority}
              </div>
              <ul className="text-xs text-slate-600 space-y-2 list-disc list-inside pt-2.5 border-t border-slate-200">
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

