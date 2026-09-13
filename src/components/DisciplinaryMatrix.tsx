import React, { useState } from "react";
import { VIOLATIONS_DATA, SANCTION_LEVELS } from "../data/disciplinaryData";
import { ShieldAlert, Scale } from "lucide-react";

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
          badge: "Status Normal: Pelanggaran Ringan",
          badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
          title: "Sanksi Pembinaan Ringan",
          desc: "Diberikan teguran lisan atau tertulis tingkat I, tindakan pembinaan fisik terukur terpantau medis, dan pemotongan poin kondite ringan.",
          article: "Pasal 38 ayat (1) s.d. (6)"
        };
      case 2:
        return {
          badge: "Status Naik: Dikenakan Sanksi Sedang",
          badgeColor: "bg-orange-100 text-orange-900 border-orange-400 font-bold",
          title: "Eskalasi Akumulatif Tingkat II",
          desc: "Apabila mengulang pelanggaran ringan yang sama sebanyak 2 kali, status sanksi otomatis dinaikkan menjadi SANKSI SEDANG (Pencabutan hak Pesiar/IB, piket ekstra, dan pengawasan khusus).",
          article: "Pasal 38 ayat (8) huruf a"
        };
      case 3:
        return {
          badge: "Status Kritis: Dikenakan Sanksi Berat",
          badgeColor: "bg-rose-100 text-rose-900 border-rose-400 font-black",
          title: "Eskalasi Akumulatif Maksimal",
          desc: "Apabila mengulang pelanggaran ringan yang sama sebanyak 3 kali, status dinaikkan menjadi SANKSI BERAT: Sidang Dewan Kehormatan Serdik, laporan ke instansi asal BUMN, hingga rekomendasi PENGELUARAN (DROP OUT).",
          article: "Pasal 38 ayat (8) huruf b"
        };
    }
  };

  const outcome = getEscalationOutcome(simulationCount);

  return (
    <section className="space-y-6">
      <div className="bg-white border border-parchment-300 rounded-xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-parchment-200 pb-5 mb-5">
          <div>
            <div className="font-cinzel text-xs uppercase tracking-widest text-bronze-700 font-bold">
              Penegakan Disiplin & Tata Tertib (BAB VII)
            </div>
            <h2 className="font-cinzel text-2xl font-bold text-ink-900 mt-1">
              Matriks Pelanggaran, Penghargaan & Sanksi
            </h2>
            <p className="text-xs text-ink-700 font-serif italic mt-1 max-w-2xl">
              Klasifikasi pelanggaran, batasan toleransi sikap perilaku, serta mekanisme penegakan sanksi berulang sesuai Perkhusserdik 2026.
            </p>
          </div>

          <div className="bg-parchment-100 border border-parchment-300 px-4 py-2.5 rounded-lg text-center shrink-0">
            <Scale className="w-5 h-5 text-bronze-700 mx-auto mb-1" />
            <div className="text-[10px] font-sans text-ink-700 uppercase font-semibold">
              Prinsip Keadilan Edukatif
            </div>
          </div>
        </div>

        <div className="bg-parchment-50 border border-parchment-300 rounded-lg p-5">
          <div className="flex items-center justify-between font-cinzel text-xs font-bold text-ink-900 mb-2">
            <span className="flex items-center space-x-1.5 text-bronze-800">
              <ShieldAlert className="w-4 h-4 text-bronze-700" />
              <span>Simulator Aturan Pengulangan Pelanggaran (Pasal 38 ayat 8)</span>
            </span>
            <span className="text-[10px] font-mono text-ink-600">Simulasi Interaktif</span>
          </div>
          <p className="text-xs text-ink-700 font-sans mb-3 leading-relaxed">
            Klik jumlah pengulangan di bawah untuk melihat bagaimana pelanggaran ringan yang diulang berturut-turut diekskalasi statusnya:
          </p>

          <div className="grid grid-cols-3 gap-2 mb-4">
            {([1, 2, 3] as const).map((num) => (
              <button
                key={num}
                onClick={() => setSimulationCount(num)}
                className={`py-2 px-3 rounded-lg text-xs font-sans font-bold border transition ${
                  simulationCount === num
                    ? "bg-bronze-700 text-white border-bronze-800 shadow-sm"
                    : "bg-white text-ink-800 border-parchment-300 hover:bg-parchment-100"
                }`}
              >
                {num}x Pelanggaran Sama
              </button>
            ))}
          </div>

          <div className="p-4 rounded-lg bg-white border border-parchment-300 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className={`text-[10px] px-2.5 py-0.5 rounded border font-sans uppercase ${outcome.badgeColor}`}>
                {outcome.badge}
              </span>
              <span className="text-xs font-serif italic text-bronze-800">{outcome.article}</span>
            </div>
            <h4 className="text-sm font-bold text-ink-900 font-cinzel pt-1">{outcome.title}</h4>
            <p className="text-xs text-ink-800 leading-relaxed font-sans">{outcome.desc}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {(["semua", "ringan", "sedang", "berat"] as const).map((lvl) => (
          <button
            key={lvl}
            onClick={() => setSelectedLevel(lvl)}
            className={`px-4 py-2 rounded-lg text-xs uppercase font-sans font-semibold transition ${
              selectedLevel === lvl
                ? "bg-ink-900 text-white shadow-xs"
                : "bg-white text-ink-700 border border-parchment-300 hover:bg-parchment-100"
            }`}
          >
            {lvl === "semua" ? "Seluruh Pelanggaran" : `Pelanggaran ${lvl}`}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredViolations.map((v) => (
          <div
            key={v.id}
            className="bg-white border border-parchment-300 rounded-xl p-5 shadow-xs flex flex-col justify-between hover:border-bronze-500/60 transition space-y-3"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase font-bold ${
                    v.category === "ringan"
                      ? "bg-amber-100 text-amber-800 border-amber-300"
                      : v.category === "sedang"
                      ? "bg-orange-100 text-orange-800 border-orange-300"
                      : "bg-rose-100 text-rose-800 border-rose-300"
                  }`}
                >
                  {v.category}
                </span>
                <span className="text-[11px] font-serif italic text-bronze-800 font-medium">
                  {v.pasal}
                </span>
              </div>
              <h3 className="text-sm font-bold text-ink-900 leading-snug">
                {v.title}
              </h3>
              <p className="text-xs text-ink-700 mt-1.5 leading-relaxed">
                {v.description}
              </p>
            </div>

            <div className="pt-3 border-t border-parchment-200 text-xs">
              <span className="font-semibold text-ink-900 block text-[11px] uppercase tracking-wider mb-0.5">
                Konsekuensi Tindakan:
              </span>
              <span className="text-ink-700 text-xs leading-relaxed">
                {v.consequences}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-parchment-300 rounded-xl p-6 shadow-sm">
        <h3 className="font-cinzel text-base font-bold text-ink-900 mb-4 pb-2 border-b border-parchment-200">
          Tingkatan Sanksi & Pejabat yang Berwenang (Pasal 38)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SANCTION_LEVELS.map((s, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-parchment-50 border border-parchment-200 space-y-2">
              <div className="font-cinzel text-sm font-bold text-ink-900">{s.level}</div>
              <div className="text-[11px] text-bronze-800 font-sans font-semibold">
                Otoritas: {s.authority}
              </div>
              <ul className="text-xs text-ink-700 space-y-1.5 list-disc list-inside pt-2 border-t border-parchment-200">
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
