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
  Check,
  ChevronRight,
  ExternalLink
} from "lucide-react";

interface LandingPageProps {
  onNavigate: (page: PageId) => void;
  onOpenPdfModal: () => void;
  onOpenSearch: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onNavigate,
  onOpenPdfModal,
  onOpenSearch,
}) => {
  // Mini quiz dilemma interactive state
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);

  const handleSelectAnswer = (idx: number) => {
    setSelectedAnswer(idx);
    setIsAnswerSubmitted(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16 font-sans">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                          */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-8 sm:pt-14 pb-12 sm:pb-20 bg-gradient-to-b from-parchment-100 via-parchment-50 to-[#FAF8F5] border-b border-parchment-200">
        {/* Subtle geometric background accents */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-bronze-500/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-ink-900/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Presidential Academy Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-parchment-200/80 border border-bronze-500/40 text-ink-900 shadow-2xs">
              <Shield className="w-4 h-4 text-bronze-700" />
              <span className="text-[11px] sm:text-xs font-cinzel font-bold tracking-widest uppercase text-bronze-800">
                Lembaga Pendidikan Kesatrian Serpong • TA 2026
              </span>
            </div>

            {/* Monumental Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-cinzel font-black text-ink-950 tracking-tight leading-[1.15]">
                PERATURAN KHUSUS <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-bronze-700 via-bronze-600 to-bronze-800">
                  PESERTA DIDIK
                </span>
              </h1>
              <p className="text-base sm:text-xl font-cinzel font-semibold text-ink-800 tracking-wide">
                Program Presiden untuk Pemimpin Masa Depan (P3MD) • Batch 1 Soedirman
              </p>
            </div>

            {/* Sub-narrative */}
            <p className="text-sm sm:text-base text-ink-700 font-sans max-w-2xl mx-auto leading-relaxed">
              Buku pedoman resmi tata tertib, etika kesatrian, integritas kepemimpinan nasional, tata cara dinas dalam, dan penegakan disiplin berbasis keteladanan tanpa kekerasan fisik bagi 44 calon pemimpin masa depan Republik Indonesia.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => onNavigate("naskah")}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-ink-950 hover:bg-ink-900 text-parchment-50 font-cinzel font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition cursor-pointer group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-bronze-500"
              >
                <span>Pelajari Naskah Lengkap</span>
                <ArrowRight className="w-4 h-4 text-bronze-400 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate("kuis")}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-bronze-600 hover:bg-bronze-700 text-white font-cinzel font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-bronze-500"
              >
                <CheckCircle2 className="w-4 h-4 text-parchment-100" />
                <span>Uji Kesiapan Serdik</span>
              </button>

              <button
                onClick={onOpenPdfModal}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl bg-white hover:bg-parchment-100 border border-parchment-300 text-ink-900 font-sans font-semibold text-xs sm:text-sm shadow-2xs transition cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-bronze-500"
              >
                <FileText className="w-4 h-4 text-bronze-700" />
                <span>Lihat Naskah Asli PDF</span>
              </button>
            </div>

            {/* Trust Badges / Quick Stat Counter */}
            <div className="pt-8 border-t border-parchment-300/60 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="p-3 bg-white/80 rounded-xl border border-parchment-300/80 shadow-2xs">
                <div className="font-cinzel text-xl sm:text-2xl font-bold text-bronze-700">8 BAB</div>
                <div className="text-[11px] font-sans font-medium text-ink-600">Rujukan Hukum Lengkap</div>
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-parchment-300/80 shadow-2xs">
                <div className="font-cinzel text-xl sm:text-2xl font-bold text-bronze-700">42 HALAMAN</div>
                <div className="text-[11px] font-sans font-medium text-ink-600">Naskah Resmi Disahkan</div>
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-parchment-300/80 shadow-2xs">
                <div className="font-cinzel text-xl sm:text-2xl font-bold text-bronze-700">44 JABATAN</div>
                <div className="text-[11px] font-sans font-medium text-ink-600">Formasi Korps Siswa</div>
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-parchment-300/80 shadow-2xs">
                <div className="font-cinzel text-xl sm:text-2xl font-bold text-bronze-700">0 TOLERANSI</div>
                <div className="text-[11px] font-sans font-medium text-ink-600">Anti Kekerasan & Bullying</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PILAR NILAI KESATRIAN (CORE TENETS)                                    */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold text-bronze-800 bg-bronze-500/10 border border-bronze-500/30 uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-bronze-700" />
            <span>Pilar Kehormatan Calon Pemimpin</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-ink-950 tracking-tight">
            Sapta Etika & Nilai Dasar Kesatrian
          </h2>
          <p className="text-xs sm:text-sm text-ink-600 mt-2 font-sans">
            Empat pilar utama yang menjadi pondasi karakter kepemimpinan transformatif seluruh peserta didik di Kesatrian Serpong.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Pillar 1 */}
          <div className="bg-white p-6 rounded-2xl border border-parchment-300 shadow-2xs hover:shadow-md transition duration-200 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-bronze-500/10 border border-bronze-500/30 flex items-center justify-center group-hover:bg-bronze-600 group-hover:text-white transition text-bronze-700">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel font-bold text-base text-ink-950">
                Disiplin Keteladanan & Waktu Presisi
              </h3>
              <p className="text-xs text-ink-700 leading-relaxed font-sans">
                Ketaatan jadwal mutlak dalam hitungan detik. Dari bangun pagi pukul 04.30 hingga apel malam 22.00 WIB, disiplin tegak atas dasar kesadaran moral tertinggi, bukan karena pengawasan.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-parchment-200 text-[11px] font-mono text-bronze-700 font-semibold">
              Rujukan: Pasal 18 & 19
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-6 rounded-2xl border border-parchment-300 shadow-2xs hover:shadow-md transition duration-200 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-bronze-500/10 border border-bronze-500/30 flex items-center justify-center group-hover:bg-bronze-600 group-hover:text-white transition text-bronze-700">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel font-bold text-base text-ink-950">
                Integritas Luhur & Kejujuran Akademik
              </h3>
              <p className="text-xs text-ink-700 leading-relaxed font-sans">
                Pantang berbohong, memanipulasi pelaporan apel, mencuri waktu, atau plagiarisme karya tulis. Menjaga wibawa kehormatan seragam dan nama baik korps siswa di manapun berada.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-parchment-200 text-[11px] font-mono text-bronze-700 font-semibold">
              Rujukan: Pasal 10 & 39
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-6 rounded-2xl border border-parchment-300 shadow-2xs hover:shadow-md transition duration-200 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-bronze-500/10 border border-bronze-500/30 flex items-center justify-center group-hover:bg-bronze-600 group-hover:text-white transition text-bronze-700">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel font-bold text-base text-ink-950">
                Rantai Komando Nir-Kekerasan
              </h3>
              <p className="text-xs text-ink-700 leading-relaxed font-sans">
                Kepemimpinan dijalankan berbasis asah, asih, asuh. Larangan keras penindasan, perpeloncoan, atau hukuman fisik antar siswa. Penegakan sanksi fisik hanya wewenang Pelatih/Pengasuh resmi.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-parchment-200 text-[11px] font-mono text-bronze-700 font-semibold">
              Rujukan: Pasal 29 & 40
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white p-6 rounded-2xl border border-parchment-300 shadow-2xs hover:shadow-md transition duration-200 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-bronze-500/10 border border-bronze-500/30 flex items-center justify-center group-hover:bg-bronze-600 group-hover:text-white transition text-bronze-700">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel font-bold text-base text-ink-950">
                Kemandirian & Kesetaraan Gender
              </h3>
              <p className="text-xs text-ink-700 leading-relaxed font-sans">
                Pelaksanaan kurve mandiri tanpa pelayan, etika ruang makan senyap, serta kesetaraan hak dan kedisiplinan yang adil bagi Serdik putra dan putri dalam pembentukan kepemimpinan strategis bangsa.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-parchment-200 text-[11px] font-mono text-bronze-700 font-semibold">
              Rujukan: Pasal 22 & 27
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PETA NAVIGASI MODUL UTAMA (BENTO GRID FEATURE SHOWCASE)                 */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-mono font-bold text-bronze-800 uppercase tracking-widest">
              EKSPORASI LENGKAP
            </div>
            <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-ink-950 tracking-tight">
              Pusat Modul & Pedoman Interaktif
            </h2>
          </div>
          <button
            onClick={onOpenSearch}
            className="inline-flex items-center space-x-2 text-xs font-semibold text-bronze-700 hover:text-bronze-800 transition cursor-pointer self-start md:self-auto"
          >
            <span>Buka Pencarian Global (Ctrl+K)</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Naskah Resmi (Col-span-2 on large for prominence) */}
          <div className="lg:col-span-2 bg-gradient-to-br from-white to-parchment-100 p-6 sm:p-8 rounded-2xl border-2 border-bronze-600/30 shadow-xs hover:border-bronze-600/60 transition duration-200 flex flex-col justify-between">
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-ink-900 text-parchment-50 uppercase tracking-wider">
                      DOKUMEN UTAMA
                    </span>
                    <span className="text-xs font-mono text-bronze-700 font-bold">BAB I s.d. BAB VIII</span>
                  </div>
                  <BookOpen className="w-5 h-5 text-bronze-700" />
                </div>
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-ink-950">
                  Naskah Resmi Peraturan Khusus (PERKHUSSERDIK)
                </h3>
                <p className="text-xs sm:text-sm text-ink-700 leading-relaxed font-sans">
                  Pelajari kompilasi lengkap 8 Bab naskah resmi: Ketentuan Umum, Hak & Kewajiban, Kehidupan Sehari-hari, Kode Perilaku, Hirarki & Kepemimpinan Korps, Tata Cara Penegakan Disiplin, Dewan Kehormatan, dan Ketentuan Penutup. Dilengkapi penampil PDF resmi.
                </p>
              </div>

              {/* Chapter mini tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["BAB I Pendahuluan", "BAB II Hak & Kewajiban", "BAB III Jadwal", "BAB IV Perilaku", "BAB V Korps Siswa", "BAB VI Disiplin"].map((chap, i) => (
                  <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white border border-parchment-300 text-ink-800">
                    {chap}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-parchment-300/80 flex items-center justify-between">
              <button
                onClick={() => onNavigate("naskah")}
                className="inline-flex items-center space-x-2 text-xs sm:text-sm font-cinzel font-bold text-ink-950 hover:text-bronze-700 transition cursor-pointer"
              >
                <span>Buka Naskah Lengkap</span>
                <ArrowRight className="w-4 h-4 text-bronze-600" />
              </button>
              <button
                onClick={onOpenPdfModal}
                className="text-xs font-sans text-ink-600 hover:text-ink-900 underline transition cursor-pointer"
              >
                Tinjau PDF Asli
              </button>
            </div>
          </div>

          {/* Card 2: Jadwal Harian */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-parchment-300 shadow-2xs hover:shadow-md transition duration-200 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-bronze-500/15 text-bronze-800 border border-bronze-500/30">
                  PASAL 18
                </span>
                <Calendar className="w-4 h-4 text-bronze-600" />
              </div>
              <h3 className="font-cinzel font-bold text-lg text-ink-950">
                Jadwal Kehidupan Harian
              </h3>
              <p className="text-xs text-ink-700 leading-relaxed font-sans">
                Rincian jadwal terstruktur mulai dari bangun pagi 04.30, apel pagi, jam perkuliahan, olahraga, apel malam 22.00, hingga ketentuan jadwal khusus Rabu, Jumat, dan akhir pekan (Pesiar/IB).
              </p>
            </div>
            <div className="pt-5 mt-4 border-t border-parchment-200">
              <button
                onClick={() => onNavigate("jadwal")}
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-bronze-700 hover:text-bronze-900 transition cursor-pointer"
              >
                <span>Lihat Jadwal Harian</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Matriks Disiplin */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-parchment-300 shadow-2xs hover:shadow-md transition duration-200 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/15 text-amber-800 border border-amber-500/30">
                  PASAL 38 & 39
                </span>
                <AlertTriangle className="w-4 h-4 text-amber-600" />
              </div>
              <h3 className="font-cinzel font-bold text-lg text-ink-950">
                Matriks Disiplin & Sanksi
              </h3>
              <p className="text-xs text-ink-700 leading-relaxed font-sans">
                Klasifikasi Pelanggaran Ringan, Sedang, dan Berat. Dilengkapi simulator interaktif akumulasi sanksi (1x Ringan → 2x Sedang → 3x Berat / Drop Out) dan sidang Dewan Kehormatan.
              </p>
            </div>
            <div className="pt-5 mt-4 border-t border-parchment-200">
              <button
                onClick={() => onNavigate("disiplin")}
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-bronze-700 hover:text-bronze-900 transition cursor-pointer"
              >
                <span>Buka Matriks Disiplin</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 4: Korps Siswa */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-parchment-300 shadow-2xs hover:shadow-md transition duration-200 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-bronze-500/15 text-bronze-800 border border-bronze-500/30">
                  44 JABATAN
                </span>
                <Users className="w-4 h-4 text-bronze-600" />
              </div>
              <h3 className="font-cinzel font-bold text-lg text-ink-950">
                Struktur Korps Siswa
              </h3>
              <p className="text-xs text-ink-700 leading-relaxed font-sans">
                Rantai komando mandiri kepemimpinan Serdik: Danmen, Danlat, Danpos hingga Komandan Peleton dan seksi logistik, beserta penegasan larangan menghukum fisik rekan sesama serdik.
              </p>
            </div>
            <div className="pt-5 mt-4 border-t border-parchment-200">
              <button
                onClick={() => onNavigate("organisasi")}
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-bronze-700 hover:text-bronze-900 transition cursor-pointer"
              >
                <span>Jelajahi Pohon Organisasi</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 5: Tanya Jawab (FAQ) */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-parchment-300 shadow-2xs hover:shadow-md transition duration-200 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/15 text-blue-800 border border-blue-500/30">
                  KNOWLEDGE BASE
                </span>
                <HelpCircle className="w-4 h-4 text-blue-600" />
              </div>
              <h3 className="font-cinzel font-bold text-lg text-ink-950">
                Tanya Jawab Panduan (FAQ)
              </h3>
              <p className="text-xs text-ink-700 leading-relaxed font-sans">
                Jawaban resmi atas skenario kehidupan harian Serdik: standar cukur rambut 0-1-2 cm, larangan rokok/vape, jam buka kantin, etika makan senyap, dan batasan penggunaan smartphone/medsos.
              </p>
            </div>
            <div className="pt-5 mt-4 border-t border-parchment-200">
              <button
                onClick={() => onNavigate("faq")}
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-bronze-700 hover:text-bronze-900 transition cursor-pointer"
              >
                <span>Buka Tanya Jawab (FAQ)</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 6: Uji Kesiapan Mandiri (Kuis) */}
          <div className="bg-gradient-to-br from-ink-900 to-ink-950 text-parchment-50 p-6 sm:p-7 rounded-2xl border border-bronze-500/40 shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-bronze-500/20 text-bronze-300 border border-bronze-500/40">
                  SIMULATOR EVALUASI
                </span>
                <CheckCircle2 className="w-4 h-4 text-bronze-400" />
              </div>
              <h3 className="font-cinzel font-bold text-lg text-parchment-50">
                Uji Kesiapan Mandiri (10 Kasus)
              </h3>
              <p className="text-xs text-parchment-200/80 leading-relaxed font-sans">
                Uji seberapa dalam pemahaman Anda terhadap aturan kehidupan kesatrian melalui 10 skenario dilema nyata dengan umpan balik penilaian dan rujukan pasal seketika.
              </p>
            </div>
            <div className="pt-5 mt-4 border-t border-bronze-500/30">
              <button
                onClick={() => onNavigate("kuis")}
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-bronze-400 hover:text-bronze-300 transition cursor-pointer"
              >
                <span>Mulai Tes Kesiapan Sekarang</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SOROTAN ATURAN KRUSIAL LAPANGAN                                       */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-parchment-300 p-6 sm:p-10 shadow-xs">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="text-xs font-mono font-bold text-bronze-800 uppercase tracking-widest mb-1">
              DISIPLIN UTAMA
            </div>
            <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-ink-950">
              Aturan Krusial yang Wajib Ditaati Sejak Hari Pertama
            </h2>
            <p className="text-xs sm:text-sm text-ink-600 mt-2 font-sans">
              Ketentuan dengan intensitas pemeriksaan tertinggi oleh Pelatih dan Pengasuh di lingkungan Kesatrian Serpong.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Rule 1: Rambut & Kerapian */}
            <div className="p-5 rounded-2xl bg-parchment-50 border border-parchment-200 flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-bronze-500/10 border border-bronze-500/30 flex items-center justify-center shrink-0 text-bronze-700">
                <Shield className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-cinzel font-bold text-sm text-ink-950">Standar Rambut & Kerapian</h4>
                  <span className="text-[10px] font-mono text-bronze-700 font-bold">Pasal 24</span>
                </div>
                <p className="text-xs text-ink-700 leading-relaxed font-sans">
                  <strong>Putra:</strong> Potongan rambut standar militer 0-1-2 cm (gundul rapi di sisi samping dan belakang, atas maksimal 2 cm). Kumis, jenggot, dan jambang dicukur bersih.<br />
                  <strong>Putri:</strong> Rambut rapi dicepol atau menggunakan harnet hitam, tidak melebihi kerah pakaian, dan dilarang berponi terurai.
                </p>
              </div>
            </div>

            {/* Rule 2: Gawai & Media Sosial */}
            <div className="p-5 rounded-2xl bg-parchment-50 border border-parchment-200 flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-bronze-500/10 border border-bronze-500/30 flex items-center justify-center shrink-0 text-bronze-700">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-cinzel font-bold text-sm text-ink-950">Penggunaan Gawai & Medsos</h4>
                  <span className="text-[10px] font-mono text-bronze-700 font-bold">Pasal 28</span>
                </div>
                <p className="text-xs text-ink-700 leading-relaxed font-sans">
                  Smartphone disimpan dalam loker dinas terkunci. Penggunaan hanya diizinkan pada jam yang ditentukan (hari pesiar / waktu istirahat teratur). Dilarang keras mengunggah foto/video lingkungan dalam kesatrian dan barak ke media sosial tanpa izin.
                </p>
              </div>
            </div>

            {/* Rule 3: Etika Ruang Makan */}
            <div className="p-5 rounded-2xl bg-parchment-50 border border-parchment-200 flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-bronze-500/10 border border-bronze-500/30 flex items-center justify-center shrink-0 text-bronze-700">
                <Utensils className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-cinzel font-bold text-sm text-ink-950">Etika Ruang Makan Senyap</h4>
                  <span className="text-[10px] font-mono text-bronze-700 font-bold">Pasal 22</span>
                </div>
                <p className="text-xs text-ink-700 leading-relaxed font-sans">
                  Makan bersama diawali dan diakhiri dengan doa serentak. Posisi duduk tegak sikap sempurna 90 derajat. Makan dengan tenang tanpa menimbulkan bunyi denting sendok dengan piring. Seluruh porsi makanan wajib dihabiskan tuntas tanpa sisa.
                </p>
              </div>
            </div>

            {/* Rule 4: Larangan Mutlak Berujung Drop-Out */}
            <div className="p-5 rounded-2xl bg-red-50/70 border border-red-200 flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-red-100 border border-red-300 flex items-center justify-center shrink-0 text-red-700">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-cinzel font-bold text-sm text-red-950">Larangan Mutlak (Zero Tolerance)</h4>
                  <span className="text-[10px] font-mono text-red-700 font-bold">Pasal 39</span>
                </div>
                <p className="text-xs text-red-900 leading-relaxed font-sans">
                  Tindakan yang berakibat langsung pemanggilan Sidang Dewan Kehormatan dan Pemberhentian Tidak Hormat (Drop Out): Narkoba, miras, perjudian, kekerasan fisik / bullying, perbuatan asusila, dan plagiarisme karya tulis.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. PROFIL KOMANDO & PENGASUHAN LEMDIK                                     */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-ink-950 text-parchment-100 rounded-3xl border-2 border-bronze-600/40 p-8 sm:p-12 relative overflow-hidden shadow-xl">
          {/* Decorative watermark */}
          <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none translate-x-12 translate-y-12">
            <Shield className="w-96 h-96 text-bronze-400" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-bronze-500/20 text-bronze-400 border border-bronze-500/40 text-[11px] font-mono uppercase tracking-wider">
                <span>AMANAT KOMANDAN BATCH 1 SOEDIRMAN</span>
              </div>
              
              <blockquote className="text-base sm:text-xl font-serif italic text-parchment-50 leading-relaxed border-l-2 border-bronze-400 pl-4">
                "Di Lembaga Pendidikan Kesatrian Serpong, kami tidak hanya mengasah kecerdasan intelektual, tetapi menempa nyali integritas, kedisiplinan baja, dan kerendahan hati untuk melayani rakyat dan bangsa Indonesia."
              </blockquote>

              <div className="pt-2">
                <div className="font-cinzel font-bold text-lg text-parchment-50">
                  Marsma TNI Dr. Anton Pallaguna
                </div>
                <div className="text-xs font-mono text-bronze-400">
                  M.Han., M.M.O.A.S., CHRA., CSBA. — Komandan P3MD Batch 1
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-bronze-500/20 text-xs">
                <div>
                  <div className="font-cinzel font-bold text-bronze-400">ASAH</div>
                  <div className="text-parchment-200/80 text-[11px] mt-0.5">Menajamkan daya pikir analitis & kapabilitas strategis</div>
                </div>
                <div>
                  <div className="font-cinzel font-bold text-bronze-400">ASIH</div>
                  <div className="text-parchment-200/80 text-[11px] mt-0.5">Merawat jiwa korsa, kehormatan, & persaudaraan</div>
                </div>
                <div>
                  <div className="font-cinzel font-bold text-bronze-400">ASUH</div>
                  <div className="text-parchment-200/80 text-[11px] mt-0.5">Memberi keteladanan nyata melalui disiplin hidup</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-ink-900/90 rounded-2xl border border-bronze-500/30 p-6 space-y-4">
              <div className="text-xs font-cinzel font-bold text-bronze-400 uppercase tracking-wide">
                Identitas Kesatrian
              </div>
              <ul className="text-xs space-y-2.5 text-parchment-200 font-sans">
                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-bronze-400 shrink-0 mt-0.5" />
                  <span><strong>Nama Satuan:</strong> P3MD Batch 1 / Soedirman</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-bronze-400 shrink-0 mt-0.5" />
                  <span><strong>Lokasi:</strong> Kesatrian Serpong, Tangerang Selatan</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-bronze-400 shrink-0 mt-0.5" />
                  <span><strong>Jumlah Peserta:</strong> 44 Calon Pemimpin Terpilih</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-bronze-400 shrink-0 mt-0.5" />
                  <span><strong>Sistem Pengasuhan:</strong> Militer-Sipil Berjenjang</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. INTERACTIVE MINI QUIZ DILEMMA TEASER                                  */}
      {/* ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border-2 border-parchment-300 p-6 sm:p-8 shadow-sm">
          
          <div className="flex items-center space-x-2 mb-4">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-bronze-500/15 text-bronze-800 border border-bronze-500/30 uppercase">
              SIMULASI KILAT
            </span>
            <span className="text-xs text-ink-600 font-medium">Uji Refleks Aturan Kesatrian</span>
          </div>

          <h3 className="text-lg sm:text-xl font-cinzel font-bold text-ink-950 mb-2">
            Skenario Dilema Lapangan: Rekan Peleton Mengalami Demam Menjelang Apel Malam
          </h3>
          <p className="text-xs sm:text-sm text-ink-700 mb-6 font-sans">
            Pukul 21.30 WIB (30 menit sebelum Apel Malam), rekan satu kamar Anda mengeluh demam tinggi dan pusing. Apa langkah prosedur resmi yang harus Anda ambil sesuai Perkhusserdik?
          </p>

          <div className="space-y-2.5">
            {[
              {
                id: 0,
                text: "A. Membiarkan rekan beristirahat di kasur dan tidak melaporkannya ke instruktur agar tidak merepotkan peleton.",
                isCorrect: false,
                reason: "Salah. Tidak melaporkan serdik yang absen pada saat apel merupakan Pelanggaran Sedang (Pasal 38)."
              },
              {
                id: 1,
                text: "B. Segera melapor secara berjenjang ke Piket Barak / Komandan Regu untuk diteruskan ke Dokter / Tim Medis Lemdik.",
                isCorrect: true,
                reason: "Tepat! Berdasarkan Pasal 33 ayat (2), setiap kondisi medis wajib dilaporkan berjenjang ke Piket Barak untuk penanganan resmi tim kesehatan lemdik."
              },
              {
                id: 2,
                text: "C. Memberikan obat pribadi dari tas tanpa sepengetahuan pengasuh kesatrian.",
                isCorrect: false,
                reason: "Salah. Meminum dan membagikan obat tanpa rekomendasi dokter lemdik dilarang demi keselamatan medis serdik."
              },
            ].map((option) => {
              const isSelected = selectedAnswer === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => handleSelectAnswer(option.id)}
                  disabled={isAnswerSubmitted}
                  className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition cursor-pointer ${
                    isSelected
                      ? option.isCorrect
                        ? "bg-green-50 border-green-500 text-green-950 font-semibold"
                        : "bg-red-50 border-red-500 text-red-950 font-semibold"
                      : "bg-parchment-50/60 border-parchment-300 text-ink-900 hover:bg-parchment-100"
                  }`}
                >
                  {option.text}
                </button>
              );
            })}
          </div>

          {isAnswerSubmitted && selectedAnswer !== null && (
            <div className="mt-4 p-4 rounded-xl bg-parchment-100 border border-parchment-300 text-xs animate-in fade-in duration-200">
              <div className="font-cinzel font-bold text-ink-900 mb-1">
                {selectedAnswer === 1 ? "✓ JAWABAN BENAR" : "✕ JAWABAN BELUM TEPAT"}
              </div>
              <p className="text-ink-700">
                {selectedAnswer === 1
                  ? "Tepat! Berdasarkan Pasal 33 ayat (2), setiap kondisi sakit wajib dilaporkan berjenjang kepada Piket Barak agar dicatat dalam absensi apel dan segera dievaluasi oleh Tim Medis Lemdik Kesatrian Serpong."
                  : "Belum tepat. Prosedur baku mengharuskan setiap ketidakhadiran apel akibat medis dilaporkan resmi ke Piket Barak agar mendapat tindakan medis dokter lemdik."}
              </p>
              <div className="mt-3">
                <button
                  onClick={() => onNavigate("kuis")}
                  className="inline-flex items-center space-x-1.5 font-bold text-bronze-700 hover:text-bronze-900 transition cursor-pointer"
                >
                  <span>Coba 10 Skenario Lengkap di Modul Kuis</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SPESIFIKASI BERKAS RESMI & UNDUHAN                                     */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-parchment-100 via-white to-parchment-100 rounded-3xl border border-bronze-500/30 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono text-bronze-800 font-bold uppercase">
              <FileText className="w-3.5 h-3.5 text-bronze-700" />
              <span>DOKUMEN OTENTIK BERKAS RESMI</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-ink-950">
              Unduh Peraturan Khusus Serdik (443 KB)
            </h3>
            <p className="text-xs sm:text-sm text-ink-700 font-sans">
              Dokumen master PDF 42 halaman bertandatangan resmi Komandan Batch 1 Soedirman TA 2026. Dapat diunduh atau dibaca langsung di browser dengan penampil in-app.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={onOpenPdfModal}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-ink-900 hover:bg-ink-950 text-parchment-50 font-sans font-semibold text-xs transition cursor-pointer"
            >
              <ExternalLink className="w-4 h-4 text-bronze-400" />
              <span>Buka Penampil PDF</span>
            </button>

            <a
              href="./PERATURAN%20KHUSUS%20SERDIK%20P3MD%20BATCH%201%202026.pdf"
              download
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-bronze-600 hover:bg-bronze-700 text-white font-sans font-semibold text-xs shadow-sm transition cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Unduh Berkas Asli</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};
