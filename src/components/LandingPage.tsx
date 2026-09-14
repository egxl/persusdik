import React, { useState } from "react";
import { PageId } from "../types/navigation";
import {
  Shield,
  BookOpen,
  Calendar,
  AlertTriangle,
  Users,
  HelpCircle,
  CheckCircle2,
  FileText,
  Download,
  ArrowRight,
  Sparkles,
  Scale,
  Award,
  HeartHandshake,
  Clock,
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
  title: string;
  category: string;
  icon: React.ElementType;
  verdict: "WAJIB" | "DIBATASI" | "DILARANG";
  verdictColor: string;
  pasal: string;
  ruleSummary: string;
  detail: string;
  sanctionIfViolated: string;
  targetPage: PageId;
}

const CADET_SCENARIOS: CadetScenario[] = [
  {
    id: "rambut",
    title: "Standar Rambut & Kerapian",
    category: "Penampilan Diri",
    icon: Scissors,
    verdict: "WAJIB",
    verdictColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    pasal: "Pasal 14 ayat (1) - (3)",
    ruleSummary: "Potongan rambut militer presisi 0-1-2 cm untuk Serdik putra, rapi tanpa jenggot & kumis.",
    detail: "Serdik putra wajib mencukur rambut dengan pola 0 mm (bawah), 1 mm (tengah), dan maksimal 2 mm (atas). Wajah bersih licin setiap pagi sebelum apel. Serdik putri berambut pendek rapi di atas kerah atau dicepol jaring hitam standar dinas.",
    sanctionIfViolated: "Teguran lisan & pencukuran ulang seketika di tempat oleh provos/pelatih, pemotongan nilai kondite sikap.",
    targetPage: "faq"
  },
  {
    id: "gawai",
    title: "Penggunaan HP & Laptop",
    category: "Elektronik & Siber",
    icon: Smartphone,
    verdict: "DIBATASI",
    verdictColor: "bg-amber-50 text-amber-800 border-amber-200",
    pasal: "Pasal 16 ayat (1) - (4)",
    ruleSummary: "Gawai hanya diizinkan di ruang belajar pada jam KBM/mandiri terawasi.",
    detail: "Dilarang keras mengoperasikan ponsel di barak setelah jam 22.00 WIB (jam padam), saat apel, di ruang makan, atau selama materi kelas berlangsung. Kamera dan rekaman kegiatan internal tunduk pada etika kerahasiaan kesatrian.",
    sanctionIfViolated: "Pelanggaran Sedang: Penyitaan gawai selama 2 pekan, piket pengawasan malam, dan pembatalan hak pesiar.",
    targetPage: "faq"
  },
  {
    id: "kantin",
    title: "Jam Belanja & Kantin",
    category: "Fasilitas & Logistik",
    icon: Coffee,
    verdict: "DIBATASI",
    verdictColor: "bg-amber-50 text-amber-800 border-amber-200",
    pasal: "Pasal 21 ayat (2)",
    ruleSummary: "Akses kantin hanya dibuka hari Rabu & Jumat sore pukul 16.30 - 17.30 WIB.",
    detail: "Serdik dilarang jajan di luar jam yang telah ditentukan atau memesan kurir makanan online dari luar kesatrian tanpa izin tertulis perwira jaga. Seluruh konsumsi nutrisi harian telah dijamin penuh di ruang makan resmi.",
    sanctionIfViolated: "Pelanggaran Ringan akumulatif: Tindakan pembinaan fisik dan pencatatan dalam buku saku pelanggaran disiplin.",
    targetPage: "jadwal"
  },
  {
    id: "makan",
    title: "Etika Ruang Makan Senyap",
    category: "Tradisi Kesatrian",
    icon: Utensils,
    verdict: "WAJIB",
    verdictColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    pasal: "Pasal 22 ayat (1) - (5)",
    ruleSummary: "Makan bersama dalam keheningan total, tanpa denting sendok, posisi duduk tegak lurus.",
    detail: "Makan dimulai dan diakhiri serempak dipimpin oleh Danmen/Piket ruang makan. Tidak diperkenankan berbicara, bersuara saat mengunyah, atau menyisakan makanan. Piring dan alat makan dibersihkan mandiri (kurve mandiri).",
    sanctionIfViolated: "Teguran komando seketika dan penugasan kurve dapur/ruang makan ekstra bersama regu piket.",
    targetPage: "naskah"
  },
  {
    id: "hazing",
    title: "Wewenang Komando Antar-Siswa",
    category: "Rantai Komando",
    icon: ShieldCheck,
    verdict: "DILARANG",
    verdictColor: "bg-crimson-50 text-crimson-700 border-crimson-200 font-bold",
    pasal: "Pasal 13 & Pasal 40",
    ruleSummary: "DILARANG KERAS: Siswa senior/pejabat korps menghukum fisik sesama serdik.",
    detail: "Kepemimpinan Korps Siswa (Danmen s.d. Danton) bersifat koordinatif dan teladan kepemimpinan. Hak penjatuhan sanksi fisik atau tindakan disipliner berada 100% pada Pelatih, Pengasuh, dan Komandan Lemdik resmi. Segala bentuk perpeloncoan/bullying diancam pidana & drop-out.",
    sanctionIfViolated: "Pelanggaran BERAT Mutlak: Sidang Dewan Kehormatan, pencopotan jabatan korps, dan rekomendasi Drop Out (PTDH).",
    targetPage: "organisasi"
  },
  {
    id: "sanksi-do",
    title: "Eskalasi 3x Pelanggaran = D.O.",
    category: "Penegakan Disiplin",
    icon: AlertOctagon,
    verdict: "DILARANG",
    verdictColor: "bg-crimson-50 text-crimson-700 border-crimson-200 font-bold",
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
      {/* 1. HERO SECTION: PRESIDENTIAL COMMAND THESIS                             */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-8 sm:pt-14 pb-14 sm:pb-20 bg-white border-b border-slate-200">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#F1F5F9_1px,transparent_1px),linear-gradient(to_bottom,#F1F5F9_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Presidential Academy Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-300/80 text-slate-800 shadow-2xs">
              <Shield className="w-4 h-4 text-command-700" />
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-700">
                Lembaga Pendidikan Kesatrian Serpong • TA 2026
              </span>
            </div>

            {/* Monumental Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
                BUKU SAKU KOMANDO & <br className="hidden sm:inline" />
                <span className="text-command-700">
                  PERATURAN KHUSUS SERDIK
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-slate-700 tracking-normal pt-1">
                Program Presiden untuk Pemimpin Masa Depan (P3MD) • Batch 1 / Soedirman
              </p>
            </div>

            {/* Sub-narrative */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Pedoman resmi tata tertib, etika kepemimpinan nasional, presisi jadwal harian, dan matriks penegakan disiplin berbasis keteladanan tanpa kekerasan fisik bagi 44 calon pemimpin masa depan Republik Indonesia.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => onNavigate("naskah")}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-navy-900 hover:bg-command-800 text-white font-semibold text-sm tracking-wide shadow-sm hover:shadow-md transition cursor-pointer group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-command-600"
              >
                <span>Pelajari Naskah (8 BAB)</span>
                <ArrowRight className="w-4 h-4 text-brass-400 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate("kuis")}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-command-700 hover:bg-command-800 text-white font-semibold text-sm tracking-wide shadow-sm hover:shadow-md transition cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-command-600"
              >
                <CheckCircle2 className="w-4 h-4 text-slate-100" />
                <span>Uji Kesiapan Aturan</span>
              </button>

              <button
                onClick={onOpenPdfModal}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm tracking-wide shadow-2xs transition cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-command-600"
              >
                <FileText className="w-4 h-4 text-command-600" />
                <span>Naskah PDF Asli</span>
              </button>
            </div>

            {/* Decree Metadata */}
            <div className="pt-2">
              <span className="inline-block text-xs font-mono text-slate-500">
                Landasan SK: Keputusan Komandan Lemdik Kesatrian Serpong No. SK/01/P3MD/VI/2026
              </span>
            </div>

          </div>

          {/* Tactical Operational Metrics HUD */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto">
            
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
              <div className="text-xl sm:text-2xl font-mono font-extrabold text-slate-900">04:30 WIB</div>
              <div className="text-xs font-semibold text-slate-700">Bangun & Apel Pagi</div>
              <div className="text-[11px] text-slate-500">Pasal 18 (Presisi Waktu)</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
              <div className="text-xl sm:text-2xl font-mono font-extrabold text-slate-900">0-1-2 cm</div>
              <div className="text-xs font-semibold text-slate-700">Standar Cukur Rambut</div>
              <div className="text-[11px] text-slate-500">Pasal 14 (Putra Rapi Licin)</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
              <div className="text-xl sm:text-2xl font-mono font-extrabold text-crimson-600">0 Toleransi</div>
              <div className="text-xs font-semibold text-slate-700">Anti Hukuman Fisik</div>
              <div className="text-[11px] text-slate-500">Pasal 13 & 40 (Anti-Hazing)</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
              <div className="text-xl sm:text-2xl font-mono font-extrabold text-command-700">44 Jabatan</div>
              <div className="text-xs font-semibold text-slate-700">Struktur Korps Siswa</div>
              <div className="text-[11px] text-slate-500">Bab V (Danmen s.d. Danton)</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1 col-span-2 sm:col-span-1">
              <div className="text-xl sm:text-2xl font-mono font-extrabold text-brass-700">3x = D.O.</div>
              <div className="text-xs font-semibold text-slate-700">Akumulasi Sanksi</div>
              <div className="text-[11px] text-slate-500">Pasal 38 (Dewan Kehormatan)</div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SIGNATURE FEATURE: KOMANDO SAKU (SITUATION NAVIGATOR)                  */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6 mb-8">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-command-700 uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Fitur Unggulan Lapangan</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Komando Saku: Navigator Situasi Serdik
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
                Cek seketika aturan resmi untuk situasi sehari-hari yang paling sering dihadapi di Kesatrian Serpong.
              </p>
            </div>

            <button
              onClick={onOpenSearch}
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-command-700 hover:text-command-800 transition cursor-pointer self-start md:self-auto"
            >
              <span>Cari Aturan Lainnya (Ctrl+K)</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Scenario Selector Tabs (5 cols) */}
            <div className="lg:col-span-5 space-y-2">
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider px-1 mb-2">
                Pilih Skenario Lapangan:
              </div>

              {CADET_SCENARIOS.map((scenario) => {
                const Icon = scenario.icon;
                const isSelected = activeScenarioId === scenario.id;
                return (
                  <button
                    key={scenario.id}
                    onClick={() => setActiveScenarioId(scenario.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all duration-150 flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? "bg-navy-900 border-navy-950 text-white shadow-xs"
                        : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800"
                    }`}
                  >
                    <div className="flex items-center space-x-3 min-w-0">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                          isSelected
                            ? "bg-navy-800 text-brass-400"
                            : "bg-white text-slate-700 border border-slate-200"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <div className="font-bold text-sm truncate">{scenario.title}</div>
                        <div
                          className={`text-xs truncate ${
                            isSelected ? "text-slate-300" : "text-slate-500"
                          }`}
                        >
                          {scenario.category} • {scenario.pasal.split("ayat")[0].trim()}
                        </div>
                      </div>
                    </div>

                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold shrink-0 ml-2 border ${
                        isSelected
                          ? "bg-white/10 text-white border-white/20"
                          : scenario.verdictColor
                      }`}
                    >
                      {scenario.verdict}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Scenario Detail Inspector Card (7 cols) */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 space-y-5">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
                <div>
                  <div className="text-xs font-mono font-bold text-command-700 uppercase tracking-wider">
                    {activeScenario.category}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 mt-0.5">
                    {activeScenario.title}
                  </h3>
                </div>

                <div className="flex items-center space-x-2 shrink-0">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-mono font-bold border ${activeScenario.verdictColor}`}
                  >
                    STATUS: {activeScenario.verdict}
                  </span>
                </div>
              </div>

              {/* Rujukan Pasal */}
              <div className="p-3.5 rounded-lg bg-white border border-slate-200 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-command-600 shrink-0" />
                  <span className="text-xs font-mono font-bold text-slate-900">
                    Rujukan: {activeScenario.pasal}
                  </span>
                </div>
                <button
                  onClick={() => onNavigate(activeScenario.targetPage)}
                  className="text-xs font-semibold text-command-700 hover:text-command-800 transition flex items-center space-x-1 cursor-pointer"
                >
                  <span>Buka Modul Terkait</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Aturan & Deskripsi */}
              <div className="space-y-2">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  Intisari Aturan Resmi:
                </div>
                <p className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                  "{activeScenario.ruleSummary}"
                </p>
                <p className="text-sm text-slate-600 leading-relaxed pt-1">
                  {activeScenario.detail}
                </p>
              </div>

              {/* Konsekuensi Sanksi */}
              <div className="p-4 rounded-xl bg-crimson-50 border border-crimson-200 space-y-1">
                <div className="text-xs font-mono font-bold text-crimson-800 uppercase tracking-wider flex items-center space-x-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-crimson-600" />
                  <span>Konsekuensi Jika Melanggar:</span>
                </div>
                <p className="text-xs sm:text-sm text-crimson-900 font-medium leading-relaxed">
                  {activeScenario.sanctionIfViolated}
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PUSAT MODUL & PEDOMAN INTERAKTIF                                      */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">
            Eksplorasi Lengkap
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Pusat Modul & Pedoman Interaktif
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-1">
            Akses cepat ke 6 modul esensial tata kehidupan kesatrian P3MD Batch 1 Soedirman.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          
          {/* Card 1: Naskah 8 Bab */}
          <div
            onClick={() => onNavigate("naskah")}
            className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-400 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-command-50 border border-command-100 text-command-700 flex items-center justify-center group-hover:bg-navy-900 group-hover:text-white transition">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase">
                  DOKUMEN INDUK
                </div>
                <h3 className="font-extrabold text-lg sm:text-xl text-slate-950 group-hover:text-command-700 transition">
                  Naskah Resmi 8 Bab
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Teks hukum lengkap 42 pasal memuat hak, kewajiban, tata cara dinas dalam, etika berobat, izin pesiar, hingga penegakan kehormatan serdik.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-command-700">
              <span>Buka Naskah Lengkap</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Jadwal Harian */}
          <div
            onClick={() => onNavigate("jadwal")}
            className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-400 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-command-50 border border-command-100 text-command-700 flex items-center justify-center group-hover:bg-navy-900 group-hover:text-white transition">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase">
                  PASAL 18 • RUNDOWN HARIAN
                </div>
                <h3 className="font-extrabold text-lg sm:text-xl text-slate-950 group-hover:text-command-700 transition">
                  Jadwal Rutinitas Kesatrian
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Timeline presisi dari bangun 04.00 hingga istirahat 22.00 WIB, dilengkapi jadwal khusus olahraga (Rabu), ibadah (Jumat), dan pesiar akhir pekan.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-command-700">
              <span>Lihat Jadwal Harian</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Matriks Disiplin */}
          <div
            onClick={() => onNavigate("disiplin")}
            className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-400 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-crimson-50 border border-crimson-100 text-crimson-600 flex items-center justify-center group-hover:bg-crimson-700 group-hover:text-white transition">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <div className="text-xs font-mono font-bold text-crimson-600 uppercase">
                  PASAL 38 • PENEGAKAN SANKSI
                </div>
                <h3 className="font-extrabold text-lg sm:text-xl text-slate-950 group-hover:text-crimson-700 transition">
                  Matriks Disiplin & Akumulasi
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Daftar pelanggaran Ringan, Sedang, Berat, dan simulator interaktif kenaikan status hukuman berulang menuju sidang Dewan Kehormatan (PTDH).
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-crimson-700">
              <span>Buka Matriks Disiplin</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Korps Siswa 44 Jabatan */}
          <div
            onClick={() => onNavigate("organisasi")}
            className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-400 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-command-50 border border-command-100 text-command-700 flex items-center justify-center group-hover:bg-navy-900 group-hover:text-white transition">
                <Users className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase">
                  BAB V • RANTAI KOMANDO
                </div>
                <h3 className="font-extrabold text-lg sm:text-xl text-slate-950 group-hover:text-command-700 transition">
                  Struktur Korps (44 Jabatan)
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Struktur fungsional kepemimpinan siswa dari Komandan Resimen hingga Komandan Peleton, dengan mandat tegas anti-hukuman fisik antar-siswa.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-command-700">
              <span>Jelajahi Struktur Korps</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 5: Tanya Jawab (FAQ) */}
          <div
            onClick={() => onNavigate("faq")}
            className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-400 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-command-50 border border-command-100 text-command-700 flex items-center justify-center group-hover:bg-navy-900 group-hover:text-white transition">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase">
                  PANDUAN PRAKTIS HARIAN
                </div>
                <h3 className="font-extrabold text-lg sm:text-xl text-slate-950 group-hover:text-command-700 transition">
                  Tanya Jawab Aturan (FAQ)
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Jawaban resmi atas skenario sehari-hari: aturan rokok/vape, etika pesiar, jam berobat di poliklinik, serta etika ruang makan bersama.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-command-700">
              <span>Buka Tanya Jawab</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 6: Uji Kesiapan Mandiri */}
          <div
            onClick={() => onNavigate("kuis")}
            className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-400 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brass-50 border border-brass-100 text-brass-700 flex items-center justify-center group-hover:bg-brass-600 group-hover:text-white transition">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <div className="text-xs font-mono font-bold text-brass-700 uppercase">
                  SIMULATOR SKENARIO KASUS
                </div>
                <h3 className="font-extrabold text-lg sm:text-xl text-slate-950 group-hover:text-brass-700 transition">
                  Uji Kesiapan & Refleks Aturan
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  10 skenario dilema lapangan untuk menguji pemahaman Anda sebelum apel inspeksi dan jam komandan kesatrian.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brass-700">
              <span>Mulai Uji Kesiapan</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. EMPAT PILAR KEHORMATAN KESATRIAN (CORE VALUES)                         */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">
            Fondasi Karakter Pemimpin
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Empat Nilai Dasar Kesatrian Soedirman
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-1">
            Prinsip utama yang menjadi pedoman moral seluruh peserta didik selama masa pendidikan di Kesatrian Serpong.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-command-700">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-base text-slate-950">
              Keteladanan Waktu Presisi
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Ketaatan jadwal mutlak dalam hitungan detik. Disiplin tegak atas dasar kesadaran moral, bukan karena takut pada pengawasan.
            </p>
            <div className="text-[11px] font-mono font-semibold text-slate-400 pt-1">
              Rujukan: Pasal 18 & 19
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-command-700">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-base text-slate-950">
              Integritas Luhur Tanpa Kompromi
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Pantang berbohong, memanipulasi pelaporan apel, atau plagiarisme karya tulis. Menjaga wibawa korps di manapun berada.
            </p>
            <div className="text-[11px] font-mono font-semibold text-slate-400 pt-1">
              Rujukan: Pasal 10 & 39
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-command-700">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-base text-slate-950">
              Komando Berbasis Asah-Asih-Asuh
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Larangan keras kekerasan fisik, intimidasi, dan perpeloncoan. Kepemimpinan dijalankan dengan membimbing dan memberi teladan nyata.
            </p>
            <div className="text-[11px] font-mono font-semibold text-slate-400 pt-1">
              Rujukan: Pasal 29 & 40
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-command-700">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-base text-slate-950">
              Kemandirian & Tanggung Jawab
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Pelaksanaan kurve mandiri tanpa pelayan, etika ruang makan senyap, serta kedisiplinan yang setara bagi Serdik putra dan putri.
            </p>
            <div className="text-[11px] font-mono font-semibold text-slate-400 pt-1">
              Rujukan: Pasal 22 & 27
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CALL TO ACTION: BACA DOKUMEN ASLI                                      */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-950 text-white rounded-2xl p-8 sm:p-12 border border-navy-800 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-brass-400 uppercase tracking-wider">
              <Shield className="w-4 h-4" />
              <span>Dokumen Negara Resmi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Akses Berkas Lengkap Naskah Perkhusserdik 2026
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Unduh atau baca langsung naskah PDF asli setebal 42 halaman yang ditandatangani resmi oleh Komandan Lembaga Pendidikan Kesatrian Serpong.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenPdfModal}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-semibold text-sm transition cursor-pointer shadow-xs"
            >
              <FileText className="w-4 h-4 text-command-700" />
              <span>Buka Penampil PDF</span>
            </button>

            <a
              href="./PERATURAN%20KHUSUS%20SERDIK%20P3MD%20BATCH%201%202026.pdf"
              download
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-command-700 hover:bg-command-600 text-white font-semibold text-sm transition cursor-pointer shadow-xs"
            >
              <Download className="w-4 h-4 text-brass-400" />
              <span>Unduh Berkas (443 KB)</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
