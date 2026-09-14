import React, { useState } from "react";
import { PageId } from "../types/navigation";
import {
  Shield,
  BookOpen,
  AlertTriangle,
  CheckCircle2,
  FileText,
  Download,
  ArrowRight,
  Smartphone,
  Utensils,
  Scissors,
  Coffee,
  ChevronRight,
  ShieldCheck,
  AlertOctagon
} from "lucide-react";

interface LandingPageProps {
  onNavigate: (page: PageId) => void;
  onOpenPdfModal: () => void;
  onOpenSearch: () => void;
}

interface CadetScenario {
  id: string;
  code: string;
  title: string;
  category: string;
  icon: React.ElementType;
  verdict: "WAJIB" | "DIBATASI" | "DILARANG";
  stampClass: string;
  pasal: string;
  ruleSummary: string;
  detail: string;
  sanctionIfViolated: string;
  targetPage: PageId;
}

const CADET_SCENARIOS: CadetScenario[] = [
  {
    id: "rambut",
    code: "DIR-01",
    title: "Standar Rambut & Kerapian",
    category: "Penampilan Diri",
    icon: Scissors,
    verdict: "WAJIB",
    stampClass: "stamp-wajib",
    pasal: "Pasal 14 ayat (1) - (3)",
    ruleSummary: "Potongan rambut militer presisi 0-1-2 cm untuk Serdik putra, rapi tanpa jenggot & kumis.",
    detail: "Serdik putra wajib mencukur rambut dengan pola 0 mm (bawah), 1 mm (tengah), dan maksimal 2 mm (atas). Wajah bersih licin setiap pagi sebelum apel. Serdik putri berambut pendek rapi di atas kerah atau dicepol jaring hitam standar dinas.",
    sanctionIfViolated: "Teguran lisan & pencukuran ulang seketika di tempat oleh provos/pelatih, pemotongan nilai kondite sikap.",
    targetPage: "faq"
  },
  {
    id: "gawai",
    code: "DIR-02",
    title: "Penggunaan HP & Laptop",
    category: "Elektronik & Siber",
    icon: Smartphone,
    verdict: "DIBATASI",
    stampClass: "stamp-dibatasi",
    pasal: "Pasal 16 ayat (1) - (4)",
    ruleSummary: "Gawai hanya diizinkan di ruang belajar pada jam KBM/mandiri terawasi.",
    detail: "Dilarang keras mengoperasikan ponsel di barak setelah jam 22.00 WIB (jam padam), saat apel, di ruang makan, atau selama materi kelas berlangsung. Kamera dan rekaman kegiatan internal tunduk pada etika kerahasiaan kesatrian.",
    sanctionIfViolated: "Pelanggaran Sedang: Penyitaan gawai selama 2 pekan, piket pengawasan malam, dan pembatalan hak pesiar.",
    targetPage: "faq"
  },
  {
    id: "kantin",
    code: "DIR-03",
    title: "Jam Belanja & Kantin",
    category: "Fasilitas & Logistik",
    icon: Coffee,
    verdict: "DIBATASI",
    stampClass: "stamp-dibatasi",
    pasal: "Pasal 21 ayat (2)",
    ruleSummary: "Akses kantin hanya dibuka hari Rabu & Jumat sore pukul 16.30 - 17.30 WIB.",
    detail: "Serdik dilarang jajan di luar jam yang telah ditentukan atau memesan kurir makanan online dari luar kesatrian tanpa izin tertulis perwira jaga. Seluruh konsumsi nutrisi harian telah dijamin penuh di ruang makan resmi.",
    sanctionIfViolated: "Pelanggaran Ringan akumulatif: Tindakan pembinaan fisik dan pencatatan dalam buku saku pelanggaran disiplin.",
    targetPage: "jadwal"
  },
  {
    id: "makan",
    code: "DIR-04",
    title: "Etika Ruang Makan Senyap",
    category: "Tradisi Kesatrian",
    icon: Utensils,
    verdict: "WAJIB",
    stampClass: "stamp-wajib",
    pasal: "Pasal 22 ayat (1) - (5)",
    ruleSummary: "Makan bersama dalam keheningan total, tanpa denting sendok, posisi duduk tegak lurus.",
    detail: "Makan dimulai dan diakhiri serempak dipimpin oleh Danmen/Piket ruang makan. Tidak diperkenankan berbicara, bersuara saat mengunyah, atau menyisakan makanan. Piring dan alat makan dibersihkan mandiri (kurve mandiri).",
    sanctionIfViolated: "Teguran komando seketika dan penugasan kurve dapur/ruang makan ekstra bersama regu piket.",
    targetPage: "naskah"
  },
  {
    id: "hazing",
    code: "DIR-05",
    title: "Wewenang Komando Antar-Siswa",
    category: "Rantai Komando",
    icon: ShieldCheck,
    verdict: "DILARANG",
    stampClass: "stamp-dilarang",
    pasal: "Pasal 13 & Pasal 40",
    ruleSummary: "DILARANG KERAS: Siswa senior/pejabat korps menghukum fisik sesama serdik.",
    detail: "Kepemimpinan Korps Siswa (Danmen s.d. Danton) bersifat koordinatif dan teladan kepemimpinan. Hak penjatuhan sanksi fisik atau tindakan disipliner berada 100% pada Pelatih, Pengasuh, dan Komandan Lemdik resmi. Segala bentuk perpeloncoan/bullying diancam pidana & drop-out.",
    sanctionIfViolated: "Pelanggaran BERAT Mutlak: Sidang Dewan Kehormatan, pencopotan jabatan korps, dan rekomendasi Drop Out (PTDH).",
    targetPage: "organisasi"
  },
  {
    id: "sanksi-do",
    code: "DIR-06",
    title: "Eskalasi 3x Pelanggaran = D.O.",
    category: "Penegakan Disiplin",
    icon: AlertOctagon,
    verdict: "DILARANG",
    stampClass: "stamp-dilarang",
    pasal: "Pasal 38 ayat (8)",
    ruleSummary: "1x Ringan -> 2x Sedang -> 3x Berat (Pemberhentian Tidak Dengan Hormat).",
    detail: "Sistem disiplin P3MD menggunakan mekanisme akumulasi ketat. Mengulang pelanggaran ringan yang sama 2 kali otomatis dinaikkan menjadi Sanksi Sedang (cabut pesiar/IB). Pengulangan ke-3 langsung diekskalasi ke Sanksi Berat berujung pemecatan dari program kepresidenan.",
    sanctionIfViolated: "Sidang Dewan Kehormatan Serdik, pemberhentian dari P3MD, dan surat tembusan resmi ke Direktur Utama BUMN asal.",
    targetPage: "disiplin"
  }
];

export const LandingPage: React.FC<LandingPageProps> = ({
  onNavigate,
  onOpenPdfModal,
  onOpenSearch,
}) => {
  const [activeScenarioId, setActiveScenarioId] = useState<string>("rambut");

  const activeScenario =
    CADET_SCENARIOS.find((s) => s.id === activeScenarioId) || CADET_SCENARIOS[0];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 font-sans">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: KESATRIAN COMMAND FIELD DESK                             */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-8 sm:pt-14 pb-14 sm:pb-20 bg-white border-b border-canvas-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Authoritative Decree Masthead */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Sovereign State Seal Badge */}
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-xs bg-navy-950 border border-navy-800 text-slate-200">
                <Shield className="w-3.5 h-3.5 text-brass-400" />
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-brass-300">
                  LEMBAGA PENDIDIKAN KESATRIAN SERPONG • TA 2026
                </span>
              </div>

              {/* Monumental Headline */}
              <div className="space-y-3">
                <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 tracking-tight leading-[1.15]">
                  BUKU SAKU KOMANDO &amp; <br />
                  <span className="text-brass-700 underline decoration-brass-400/40 underline-offset-8">
                    PERATURAN KHUSUS SERDIK
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-semibold text-slate-700 tracking-normal font-sans">
                  Program Presiden untuk Pemimpin Masa Depan (P3MD) • Batch 1 / Soedirman
                </p>
              </div>

              {/* Sub-narrative */}
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
                Pedoman resmi tata tertib, etika kepemimpinan nasional, presisi jadwal harian, dan matriks penegakan disiplin berbasis keteladanan tanpa kekerasan fisik bagi 44 calon pemimpin masa depan Republik Indonesia.
              </p>

              {/* Primary Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate("naskah")}
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xs bg-navy-950 hover:bg-navy-900 text-white font-semibold text-xs font-mono uppercase tracking-wider shadow-sm transition cursor-pointer group"
                >
                  <span>Pelajari Naskah (8 BAB)</span>
                  <ArrowRight className="w-4 h-4 text-brass-400 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate("kuis")}
                  className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xs bg-white hover:bg-canvas-100 text-navy-950 font-semibold text-xs font-mono uppercase tracking-wider border border-canvas-300 transition cursor-pointer shadow-2xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-brass-600" />
                  <span>Uji Kesiapan (10 Kasus)</span>
                </button>

                <button
                  onClick={onOpenPdfModal}
                  className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xs border border-brass-600/40 bg-brass-50/60 hover:bg-brass-100/60 text-navy-950 font-semibold text-xs font-mono uppercase tracking-wider transition cursor-pointer shadow-2xs"
                >
                  <FileText className="w-4 h-4 text-brass-700" />
                  <span>Naskah PDF Asli</span>
                </button>
              </div>

              {/* Decree Metadata */}
              <div className="pt-2 border-t border-canvas-200">
                <span className="text-[11px] font-mono text-slate-500 tracking-wide">
                  LANDASAN HUKUM: SK KOMANDAN LEMDIK KESATRIAN SERPONG NOMOR SK/01/P3MD/VI/2026
                </span>
              </div>

            </div>

            {/* Right Column: Tactical Pocket Directive Dossier (Live Preview) */}
            <div className="lg:col-span-5">
              <div className="command-panel-brass p-5 sm:p-6 bg-white shadow-md space-y-4">
                
                {/* Dossier Header */}
                <div className="flex items-center justify-between pb-3 border-b border-canvas-200">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-xs bg-brass-500"></span>
                    <span className="font-mono text-xs font-bold text-navy-950 uppercase tracking-wider">
                      DIREKTIF HARIAN SERDIK
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-400 uppercase">
                    KESATRIAN SERPONG
                  </span>
                </div>

                {/* Quick Daily Directives Preview */}
                <div className="space-y-2.5">
                  <div className="p-3 bg-canvas-50 border border-canvas-200 rounded-xs flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[10px] font-mono font-bold text-slate-400 uppercase">STANDAR RAMBUT</div>
                      <div className="text-xs font-bold text-navy-950 mt-0.5">Pola Militer 0-1-2 cm Rapi Licin</div>
                    </div>
                    <span className="stamp-wajib">WAJIB</span>
                  </div>

                  <div className="p-3 bg-canvas-50 border border-canvas-200 rounded-xs flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[10px] font-mono font-bold text-slate-400 uppercase">GAWAI &amp; LAPTOP</div>
                      <div className="text-xs font-bold text-navy-950 mt-0.5">Ruang Belajar Terawasi (Padam 22:00)</div>
                    </div>
                    <span className="stamp-dibatasi">DIBATASI</span>
                  </div>

                  <div className="p-3 bg-canvas-50 border border-canvas-200 rounded-xs flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[10px] font-mono font-bold text-slate-400 uppercase">KEKERASAN FISIK</div>
                      <div className="text-xs font-bold text-navy-950 mt-0.5">Hukuman Fisik Sesama Serdik = DO</div>
                    </div>
                    <span className="stamp-dilarang">DILARANG</span>
                  </div>
                </div>

                {/* Quick Link to Pocket Reader */}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      const el = document.getElementById("komando-saku");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full py-2.5 px-3 rounded-xs bg-navy-900 hover:bg-navy-950 text-white font-mono text-xs font-bold tracking-wider uppercase flex items-center justify-center space-x-2 transition cursor-pointer"
                  >
                    <span>Buka Navigator Buku Saku</span>
                    <ChevronRight className="w-3.5 h-3.5 text-brass-400" />
                  </button>
                </div>

              </div>
            </div>

          </div>

          {/* Tactical Operational Metrics Ledger (5 Pilar Disiplin Kesatrian) */}
          <div className="mt-14 border border-canvas-300 bg-canvas-50 rounded-xs divide-y sm:divide-y-0 sm:divide-x divide-canvas-300 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5">
            
            <div className="p-4 text-center space-y-1 bg-white">
              <div className="text-xl sm:text-2xl font-mono font-black text-navy-950">04:30 WIB</div>
              <div className="text-xs font-bold text-slate-800">Bangun &amp; Apel Pagi</div>
              <div className="text-[11px] font-mono text-slate-500">Pasal 18 (Presisi Waktu)</div>
            </div>

            <div className="p-4 text-center space-y-1 bg-white">
              <div className="text-xl sm:text-2xl font-mono font-black text-navy-950">0-1-2 cm</div>
              <div className="text-xs font-bold text-slate-800">Standar Rambut Putra</div>
              <div className="text-[11px] font-mono text-slate-500">Pasal 14 (Licin &amp; Rapi)</div>
            </div>

            <div className="p-4 text-center space-y-1 bg-white">
              <div className="text-xl sm:text-2xl font-mono font-black text-crimson-800">0 Toleransi</div>
              <div className="text-xs font-bold text-slate-800">Anti Hukuman Fisik</div>
              <div className="text-[11px] font-mono text-crimson-700">Pasal 13 &amp; 40 (Anti-Bullying)</div>
            </div>

            <div className="p-4 text-center space-y-1 bg-white">
              <div className="text-xl sm:text-2xl font-mono font-black text-brass-700">44 Jabatan</div>
              <div className="text-xs font-bold text-slate-800">Struktur Korps Siswa</div>
              <div className="text-[11px] font-mono text-slate-500">Bab V (Danmen s.d. Danton)</div>
            </div>

            <div className="p-4 text-center space-y-1 bg-white">
              <div className="text-xl sm:text-2xl font-mono font-black text-navy-950">3x = D.O.</div>
              <div className="text-xs font-bold text-slate-800">Akumulasi Sanksi</div>
              <div className="text-[11px] font-mono text-slate-500">Pasal 38 (Sidang Kehormatan)</div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SIGNATURE FEATURE: KOMANDO SAKU (CADET FIELD DOSSIER)                  */}
      {/* ========================================================================= */}
      <section id="komando-saku" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="command-panel-brass p-6 sm:p-10 shadow-sm bg-white">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-canvas-300 pb-6 mb-8">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-brass-700 uppercase tracking-widest mb-1.5">
                <span className="w-1.5 h-1.5 bg-brass-500"></span>
                <span>INSTRUMEN POKOK LAPANGAN</span>
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
                Komando Saku: Navigator Situasi Serdik
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl font-sans">
                Verifikasi aturan resmi, batasan toleransi, dan konsekuensi yuridis atas skenario kehidupan harian di Kesatrian Serpong.
              </p>
            </div>

            <button
              onClick={onOpenSearch}
              className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold text-navy-950 hover:text-brass-700 transition cursor-pointer self-start md:self-auto bg-canvas-100 hover:bg-canvas-200 px-3 py-2 border border-canvas-300 rounded-xs"
            >
              <span>Cari Aturan Lainnya [ ⌘K ]</span>
              <ChevronRight className="w-4 h-4 text-brass-600" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Scenario Selector Tabs (5 cols) */}
            <div className="lg:col-span-5 space-y-2">
              <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest px-1 mb-2">
                DAFTAR SITUASI &amp; SKENARIO:
              </div>

              {CADET_SCENARIOS.map((scenario) => {
                const Icon = scenario.icon;
                const isSelected = activeScenarioId === scenario.id;
                return (
                  <button
                    key={scenario.id}
                    onClick={() => setActiveScenarioId(scenario.id)}
                    className={`w-full text-left p-3.5 rounded-xs border transition-colors flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? "bg-navy-950 border-navy-950 text-white shadow-xs"
                        : "bg-canvas-50 border-canvas-300 hover:bg-canvas-100 text-slate-800"
                    }`}
                  >
                    <div className="flex items-center space-x-3 min-w-0">
                      <div
                        className={`w-8 h-8 rounded-xs flex items-center justify-center shrink-0 border ${
                          isSelected
                            ? "bg-navy-900 border-brass-500/50 text-brass-400"
                            : "bg-white border-canvas-300 text-slate-700"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <div className="font-bold text-sm truncate flex items-center space-x-2">
                          <span className={`font-mono text-[10px] ${isSelected ? "text-brass-400" : "text-slate-500"}`}>
                            {scenario.code}
                          </span>
                          <span className="truncate">{scenario.title}</span>
                        </div>
                        <div
                          className={`text-xs truncate font-mono ${
                            isSelected ? "text-slate-300" : "text-slate-500"
                          }`}
                        >
                          {scenario.pasal.split("ayat")[0].trim()}
                        </div>
                      </div>
                    </div>

                    <span className={`${scenario.stampClass} ml-2 shrink-0`}>
                      {scenario.verdict}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Scenario Detail Inspector Card (7 cols) */}
            <div className="lg:col-span-7 bg-canvas-50 border border-canvas-300 rounded-xs p-6 sm:p-8 space-y-5">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-canvas-300 pb-4">
                <div>
                  <div className="text-[10px] font-mono font-bold text-brass-700 uppercase tracking-widest">
                    {activeScenario.code} • {activeScenario.category}
                  </div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-navy-950 mt-1">
                    {activeScenario.title}
                  </h3>
                </div>

                <div className="shrink-0">
                  <span className={activeScenario.stampClass}>
                    STATUS: {activeScenario.verdict}
                  </span>
                </div>
              </div>

              {/* Rujukan Pasal */}
              <div className="p-3 bg-white border border-canvas-300 rounded-xs flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-brass-700 shrink-0" />
                  <span className="text-xs font-mono font-bold text-navy-950">
                    Rujukan Resmi: {activeScenario.pasal}
                  </span>
                </div>
                <button
                  onClick={() => onNavigate(activeScenario.targetPage)}
                  className="text-xs font-mono font-bold text-navy-950 hover:text-brass-700 transition flex items-center space-x-1 cursor-pointer"
                >
                  <span>Buka Bab Terkait</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Aturan & Deskripsi */}
              <div className="space-y-2">
                <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                  Intisari Regulasi Kedinasan:
                </div>
                <p className="text-sm sm:text-base font-semibold text-navy-950 leading-relaxed font-sans bg-white p-3.5 border-l-2 border-l-brass-500 border border-canvas-200 rounded-xs">
                  "{activeScenario.ruleSummary}"
                </p>
                <p className="text-sm text-slate-600 leading-relaxed pt-1 font-sans">
                  {activeScenario.detail}
                </p>
              </div>

              {/* Konsekuensi Sanksi */}
              <div className="p-4 rounded-xs bg-crimson-50 border-l-4 border-crimson-700 border border-crimson-200 space-y-1">
                <div className="text-[10px] font-mono font-bold text-crimson-900 uppercase tracking-widest flex items-center space-x-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-crimson-700" />
                  <span>KONSEKUENSI YURIDIS / SANKSI JIKA DILANGGAR:</span>
                </div>
                <p className="text-xs sm:text-sm text-crimson-950 font-medium leading-relaxed font-sans">
                  {activeScenario.sanctionIfViolated}
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PUSAT MODUL TAKTIS (INDEKS REGISTRI 01 - 06)                          */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 border-b border-canvas-300 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-1">
              REGISTRI DOKUMEN &amp; TATA KEHIDUPAN SERDIK
            </div>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
              Pusat Modul Peraturan Khusus
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              Akses cepat 6 pilar instrumen tata tertib Kesatrian Serpong P3MD Batch 1 Soedirman.
            </p>
          </div>
          <div className="font-mono text-xs text-brass-700 font-bold uppercase">
            TAHUN ANGGARAN 2026
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Modul 01: Naskah 8 Bab */}
          <div
            onClick={() => onNavigate("naskah")}
            className="command-panel hover:border-navy-900 transition-colors p-6 rounded-xs flex flex-col justify-between cursor-pointer group bg-white shadow-2xs"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-brass-700 bg-brass-50 px-2 py-0.5 border border-brass-300 rounded-xs">
                  MODUL 01
                </span>
                <span className="font-mono text-[10px] text-slate-400 uppercase">DOKUMEN INDUK</span>
              </div>
              <div className="space-y-1.5">
                <h3 className="font-cinzel font-bold text-lg sm:text-xl text-navy-950 group-hover:text-brass-700 transition">
                  Naskah Resmi 8 Bab
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  Teks hukum lengkap 42 pasal memuat hak, kewajiban, tata tertib harian, etika berobat, izin pesiar, hingga sanksi pemecatan serdik.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-canvas-200 flex items-center justify-between text-xs font-mono font-bold text-navy-950 group-hover:text-brass-700">
              <span>Buka Naskah Lengkap</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Modul 02: Jadwal Rutinitas Harian */}
          <div
            onClick={() => onNavigate("jadwal")}
            className="command-panel hover:border-navy-900 transition-colors p-6 rounded-xs flex flex-col justify-between cursor-pointer group bg-white shadow-2xs"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-brass-700 bg-brass-50 px-2 py-0.5 border border-brass-300 rounded-xs">
                  MODUL 02
                </span>
                <span className="font-mono text-[10px] text-slate-400 uppercase">PASAL 18</span>
              </div>
              <div className="space-y-1.5">
                <h3 className="font-cinzel font-bold text-lg sm:text-xl text-navy-950 group-hover:text-brass-700 transition">
                  Jadwal Rutinitas Kesatrian
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  Rencana Operasi Harian (Ren Ops) 04.00 - 22.00 WIB, jadwal khusus olahraga (Rabu), ibadah &amp; kurve (Jumat), dan pesiar akhir pekan.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-canvas-200 flex items-center justify-between text-xs font-mono font-bold text-navy-950 group-hover:text-brass-700">
              <span>Buka Timetable Ledger</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Modul 03: Matriks Disiplin */}
          <div
            onClick={() => onNavigate("disiplin")}
            className="command-panel hover:border-crimson-800 transition-colors p-6 rounded-xs flex flex-col justify-between cursor-pointer group bg-white shadow-2xs"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-crimson-800 bg-crimson-50 px-2 py-0.5 border border-crimson-300 rounded-xs">
                  MODUL 03
                </span>
                <span className="font-mono text-[10px] text-crimson-600 uppercase">PASAL 38 • DEWAN KEHORMATAN</span>
              </div>
              <div className="space-y-1.5">
                <h3 className="font-cinzel font-bold text-lg sm:text-xl text-navy-950 group-hover:text-crimson-800 transition">
                  Matriks Disiplin &amp; Akumulasi
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  Klasifikasi pelanggaran Ringan, Sedang, Berat, serta simulator tangga eskalasi 3x pengulangan menuju Drop Out (PTDH).
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-canvas-200 flex items-center justify-between text-xs font-mono font-bold text-crimson-800">
              <span>Buka Matriks Disiplin</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Modul 04: Korps Siswa 44 Jabatan */}
          <div
            onClick={() => onNavigate("organisasi")}
            className="command-panel hover:border-navy-900 transition-colors p-6 rounded-xs flex flex-col justify-between cursor-pointer group bg-white shadow-2xs"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-brass-700 bg-brass-50 px-2 py-0.5 border border-brass-300 rounded-xs">
                  MODUL 04
                </span>
                <span className="font-mono text-[10px] text-slate-400 uppercase">BAB V • 44 PEJABAT</span>
              </div>
              <div className="space-y-1.5">
                <h3 className="font-cinzel font-bold text-lg sm:text-xl text-navy-950 group-hover:text-brass-700 transition">
                  Struktur Komando Korps Siswa
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  Hierarki kepemimpinan Serdik (Danmen, Danlat, Danpos, Danton) dan penegasan batas wewenang nir-kekerasan fisik.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-canvas-200 flex items-center justify-between text-xs font-mono font-bold text-navy-950 group-hover:text-brass-700">
              <span>Buka Bagan Rantai Komando</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Modul 05: Tanya Jawab (FAQ) */}
          <div
            onClick={() => onNavigate("faq")}
            className="command-panel hover:border-navy-900 transition-colors p-6 rounded-xs flex flex-col justify-between cursor-pointer group bg-white shadow-2xs"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-brass-700 bg-brass-50 px-2 py-0.5 border border-brass-300 rounded-xs">
                  MODUL 05
                </span>
                <span className="font-mono text-[10px] text-slate-400 uppercase">DIREKTORI SKENARIO</span>
              </div>
              <div className="space-y-1.5">
                <h3 className="font-cinzel font-bold text-lg sm:text-xl text-navy-950 group-hover:text-brass-700 transition">
                  Tanya Jawab Aturan (FAQ)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  Kompilasi fatwa kedinasan atas kasus nyata: cukur rambut, gawai, rokok/vape, uang saku, jam kantin, dan perizinan sakit.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-canvas-200 flex items-center justify-between text-xs font-mono font-bold text-navy-950 group-hover:text-brass-700">
              <span>Buka Tanya Jawab</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Modul 06: Uji Kesiapan Doktrin */}
          <div
            onClick={() => onNavigate("kuis")}
            className="command-panel hover:border-brass-600 transition-colors p-6 rounded-xs flex flex-col justify-between cursor-pointer group bg-white shadow-2xs border-t-2 border-t-brass-500"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-brass-700 bg-brass-50 px-2 py-0.5 border border-brass-300 rounded-xs">
                  MODUL 06
                </span>
                <span className="font-mono text-[10px] text-slate-400 uppercase">10 STUDI KASUS</span>
              </div>
              <div className="space-y-1.5">
                <h3 className="font-cinzel font-bold text-lg sm:text-xl text-navy-950 group-hover:text-brass-700 transition">
                  Uji Kesiapan &amp; Refleks Aturan
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  10 skenario dilema lapangan untuk menguji pemahaman Anda sebelum apel inspeksi dan jam komandan kesatrian.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-canvas-200 flex items-center justify-between text-xs font-mono font-bold text-brass-700">
              <span>Mulai Uji Kasus</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. PAKTA INTEGRITAS & NILAI DASAR KESATRIAN SOEDIRMAN                     */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="command-panel p-8 sm:p-12 bg-white border border-canvas-300">
          <div className="max-w-3xl mb-8">
            <div className="text-[10px] font-mono font-bold text-brass-700 uppercase tracking-widest mb-1">
              DOKTRIN MORAL &amp; KEPEMIMPINAN NASIONAL
            </div>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
              Empat Nilai Dasar Kesatrian Soedirman
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 font-sans">
              Prinsip moral yang wajib dihayati dan diamalkan oleh setiap Serdik selama menjalani masa pendidikan di Kesatrian Serpong.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-5 bg-canvas-50 border border-canvas-200 rounded-xs space-y-2.5">
              <div className="font-mono text-xs font-bold text-brass-700">01 // WAKTU</div>
              <h3 className="font-bold text-sm text-navy-950">
                Presisi Waktu Mutlak
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Ketaatan jadwal dalam hitungan detik. Disiplin lahir atas dasar kesadaran moral pribadi, bukan semata-mata takut pada pengawasan pelatih.
              </p>
              <div className="text-[10px] font-mono text-slate-400 pt-1">
                Rujukan: Pasal 18 &amp; 19
              </div>
            </div>

            <div className="p-5 bg-canvas-50 border border-canvas-200 rounded-xs space-y-2.5">
              <div className="font-mono text-xs font-bold text-brass-700">02 // KEHORMATAN</div>
              <h3 className="font-bold text-sm text-navy-950">
                Integritas Tanpa Kompromi
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Pantang berbohong, memanipulasi absensi apel, atau plagiarisme karya tulis. Menjaga wibawa korps Serdik di dalam maupun luar kesatrian.
              </p>
              <div className="text-[10px] font-mono text-slate-400 pt-1">
                Rujukan: Pasal 10 &amp; 39
              </div>
            </div>

            <div className="p-5 bg-canvas-50 border border-canvas-200 rounded-xs space-y-2.5">
              <div className="font-mono text-xs font-bold text-brass-700">03 // KEPEMIMPINAN</div>
              <h3 className="font-bold text-sm text-navy-950">
                Asah-Asih-Asuh Nir-Kekerasan
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Larangan keras kekerasan fisik, intimidasi, dan perpeloncoan antar-siswa. Kepemimpinan dijalankan melalui keteladanan dan bimbingan moral.
              </p>
              <div className="text-[10px] font-mono text-slate-400 pt-1">
                Rujukan: Pasal 13 &amp; 40
              </div>
            </div>

            <div className="p-5 bg-canvas-50 border border-canvas-200 rounded-xs space-y-2.5">
              <div className="font-mono text-xs font-bold text-brass-700">04 // KEMANDIRIAN</div>
              <h3 className="font-bold text-sm text-navy-950">
                Tanggung Jawab Mandiri
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Kurve barak dan lingkungan tanpa pelayan, etika ruang makan senyap, serta kesetaraan standar disiplin bagi Serdik putra dan putri.
              </p>
              <div className="text-[10px] font-mono text-slate-400 pt-1">
                Rujukan: Pasal 22 &amp; 27
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ARSIP RESMI NEGARA: AKSES NASKAH ASLI PDF                             */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-950 text-white rounded-xs p-8 sm:p-10 border border-navy-800 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono font-bold text-brass-400 uppercase tracking-widest">
              <Shield className="w-3.5 h-3.5 text-brass-400" />
              <span>DOKUMEN NEGARA RESMI • KESATRIAN SERPONG</span>
            </div>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold tracking-tight">
              Akses Berkas Lengkap Naskah Perkhusserdik 2026
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Naskah otentik format PDF setebal 42 halaman yang ditandatangani resmi oleh Komandan Lembaga Pendidikan Kesatrian Serpong. Tersedia untuk dibaca langsung di browser atau diunduh ke gawai.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto font-mono text-xs font-bold uppercase tracking-wider">
            <button
              onClick={onOpenPdfModal}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xs bg-white hover:bg-canvas-100 text-navy-950 transition cursor-pointer shadow-xs"
            >
              <FileText className="w-4 h-4 text-navy-950" />
              <span>Buka Penampil PDF</span>
            </button>

            <a
              href="./PERATURAN%20KHUSUS%20SERDIK%20P3MD%20BATCH%201%202026.pdf"
              download
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xs bg-brass-500 hover:bg-brass-400 text-navy-950 transition cursor-pointer shadow-xs"
            >
              <Download className="w-4 h-4 text-navy-950" />
              <span>Unduh Berkas (443 KB)</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
