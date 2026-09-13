export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  pasalCitation: string;
  tags: string[];
}

export const FAQ_CATEGORIES = [
  "Semua",
  "Kerapihan & Seragam",
  "Ruang Makan & Kantin",
  "Gawai & Medsos",
  "Hak Pesiar & IB",
  "Kesehatan & Berobat",
  "Disiplin & Sanksi",
] as const;

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "grooming-hair",
    category: "Kerapihan & Seragam",
    question: "Berapa standar panjang potongan rambut untuk Serdik pria dan wanita?",
    answer: "Untuk Serdik pria, rambut wajib dipotong dengan standar 0-1-2 cm rapi militer/kesatrian, serta kumis dan jenggot wajib dicukur bersih setiap hari sebelum apel pagi. Bagi Serdik wanita, rambut wajib terikat rapi ke belakang atau mengenakan jilbab standar kedinasan resmi tanpa riasan berlebihan.",
    pasalCitation: "Pasal 28 (Ketentuan Kerapihan)",
    tags: ["rambut", "cukur", "kumis", "jenggot", "wanita", "kerapihan"]
  },
  {
    id: "uniform-schedule",
    category: "Kerapihan & Seragam",
    question: "Kapan Serdik mengenakan PDL, PDH, Pakaian Olahraga, dan Batik?",
    answer: "Penggunaan seragam diatur secara ketat sesuai jadwal harian: PDL (Pakaian Dinas Lapangan) lengkap kopelrim dikenakan saat latihan lapangan dan kegiatan tertentu; PDH (Pakaian Dinas Harian) kemeja rapi bersepatu pantofel untuk kelas KBM; Pakaian Olahraga resmi P3MD untuk senam pagi dan olahraga sore; serta Pakaian Batik resmi untuk jamuan atau acara seremonial khusus yang ditentukan Pengasuh.",
    pasalCitation: "Pasal 26 (Ketentuan Pakaian)",
    tags: ["pdl", "pdh", "seragam", "batik", "olahraga", "kopelrim"]
  },
  {
    id: "dining-etiquette",
    category: "Ruang Makan & Kantin",
    question: "Bagaimana tata krama dan etika saat makan bersama di Ruang Makan?",
    answer: "Serdik wajib memasuki ruang makan secara berbaris tertib. Doa makan dipimpin oleh ketua meja/Danton. Posisi duduk tegak lurus, sendok dan garpu tidak boleh berdenting/beradu suara, dilarang berbicara saat makanan ada di mulut, dan seluruh porsi makanan yang disediakan wajib dihabiskan bersih (zero food waste).",
    pasalCitation: "Pasal 30 (Pelayanan Makan)",
    tags: ["makan", "ruang makan", "adab", "sendok", "etika"]
  },
  {
    id: "canteen-hours",
    category: "Ruang Makan & Kantin",
    question: "Kapan saja jam operasional kantin dan apakah makanan kantin boleh dibawa ke barak?",
    answer: "Fasilitas kantin hanya dapat dimanfaatkan pada hari Rabu dan Jumat setelah pelaksanaan kegiatan makan malam. Serdik TEGAS DILARANG membawa makanan atau minuman dari kantin ke dalam barak demi menjaga kebersihan dan higienitas kesatrian.",
    pasalCitation: "Pasal 35 (Jam Kantin)",
    tags: ["kantin", "makanan", "rabu", "jumat", "barak"]
  },
  {
    id: "online-food",
    category: "Ruang Makan & Kantin",
    question: "Apakah Serdik diperbolehkan memesan makanan atau minuman online (GoFood, GrabFood, ShopeeFood)?",
    answer: "Serdik dilarang keras memesan makanan atau minuman secara mandiri melalui layanan pesan antar online tanpa persetujuan khusus dari Komandan Batch/Pengasuh. Makanan dan gizi Serdik telah dipenuhi secara higienis oleh pengelola konsumsi Lemdik.",
    pasalCitation: "Pasal 31 (Pemesanan Paket, Makanan, dan Minuman)",
    tags: ["gofood", "grabfood", "pesan online", "makanan luar", "paket"]
  },
  {
    id: "gadget-curfew",
    category: "Gawai & Medsos",
    question: "Kapan gawai, telepon genggam (HP), dan laptop diizinkan untuk digunakan?",
    answer: "Gawai hanya boleh dinyalakan dan digunakan pada jam belajar mandiri malam hari untuk penyelesaian tugas akademik. Pada saat KBM sesi kelas, apel, latihan lapangan, dan jam istirahat malam (lampu padam), gawai wajib dinonaktifkan atau disimpan di tempat penyimpanan resmi.",
    pasalCitation: "Pasal 32 (Penggunaan Alat Elektronik)",
    tags: ["hp", "gawai", "laptop", "elektronik", "jam belajar"]
  },
  {
    id: "social-media-rules",
    category: "Gawai & Medsos",
    question: "Apa saja batasan dan larangan dalam penggunaan media sosial selama pendidikan?",
    answer: "Serdik dilarang mengunggah materi yang bersifat rahasia kedinasan, fasilitas militer terbatas, atau konten yang berpotensi merusak reputasi P3MD, institusi BUMN, dan negara. Segala aktivitas publikasi resmi dikelola terpusat oleh Seksi Publikasi dan Penerangan Korps Serdik.",
    pasalCitation: "Pasal 33 (Penggunaan Media Sosial)",
    tags: ["medsos", "instagram", "tiktok", "rahasia", "reputasi"]
  },
  {
    id: "leave-pesiar-ib",
    category: "Hak Pesiar & IB",
    question: "Apa perbedaan antara Pesiar dan Izin Bermalam (IB), serta apa persyaratannya?",
    answer: "Pesiar adalah izin keluar lingkungan pendidikan tanpa menginap pada hari libur yang ditentukan oleh Komandan Batch. Izin Bermalam (IB) adalah izin keluar dengan menginap di luar kesatrian untuk akhir pekan. Keduanya hanya diberikan kepada Serdik yang memenuhi standar evaluasi kepribadian baik dan bebas dari catatan pelanggaran disiplin.",
    pasalCitation: "Pasal 4 ayat 27-28 & Pasal 25 (Hak Keluar)",
    tags: ["pesiar", "ib", "izin bermalam", "weekend", "libur"]
  },
  {
    id: "late-pesiar-penalty",
    category: "Hak Pesiar & IB",
    question: "Apa sanksi jika Serdik terlambat kembali dari Pesiar atau Izin Bermalam?",
    answer: "Keterlambatan kembali dari Pesiar atau IB diklasifikasikan langsung sebagai PELANGGARAN SEDANG. Pelanggar dapat dikenakan sanksi berupa pencabutan hak pesiar/IB pada periode berikutnya, penambahan tugas piket jaga serambi, dan penurunan nilai kepribadian (kondite).",
    pasalCitation: "Pasal 36 ayat 6(l) & Pasal 38 (Sanksi)",
    tags: ["terlambat", "pesiar", "sanksi sedang", "piket"]
  },
  {
    id: "medical-care",
    category: "Kesehatan & Berobat",
    question: "Bagaimana prosedur yang benar jika seorang Serdik merasa sakit atau butuh berobat?",
    answer: "Serdik yang sakit wajib segera melapor kepada Kepala Seksi Kesehatan Serdik di elemennya. Selanjutnya, Kasi Kesehatan mendampingi melapor kepada Pengasuh dan Perwira Pengawas (Pawas) untuk dirujuk ke pos kesehatan Lemdik atau fasilitas pelayanan kesehatan rujukan.",
    pasalCitation: "Pasal 27 (Kesehatan dan Berobat)",
    tags: ["sakit", "berobat", "dokter", "klinik", "kesehatan"]
  },
  {
    id: "command-limits",
    category: "Disiplin & Sanksi",
    question: "Apakah Serdik yang memegang jabatan Korps berhak menghukum fisik atau membina rekan sesama Serdik?",
    answer: "TEGAS TIDAK BERWENANG. Struktur Korps Serdik dibentuk murni sebagai sarana pembelajaran kepemimpinan dan koordinasi. Seluruh perangkat organisasi Serdik (termasuk Komandan Batch Korps dan Polisi Serdik) DILARANG KERAS menjatuhkan sanksi fisik, melakukan tindakan intimidasi, atau perundungan (bullying). Wewenang penegakan disiplin dan sanksi sepenuhnya berada di tangan Pengasuh resmi Lemdik.",
    pasalCitation: "Pasal 13 (Tugas dan Tanggung Jawab Kesenatan)",
    tags: ["hukuman fisik", "perundungan", "bullying", "pengasuh", "jabatan"]
  },
  {
    id: "escalation-rule",
    category: "Disiplin & Sanksi",
    question: "Bagaimana mekanisme akumulasi dan eskalasi sanksi jika pelanggaran diulang?",
    answer: "Sesuai Pasal 38 ayat (8) dan (9): Jika Serdik mengulang pelanggaran ringan yang sama sebanyak 2 kali, statusnya dinaikkan menjadi Sanksi Pelanggaran Sedang. Jika diulang sebanyak 3 kali, otomatis dinaikkan menjadi Sanksi Pelanggaran Berat yang berkonsekuensi pada Sidang Dewan Kehormatan Serdik hingga rekomendasi pengeluaran (Drop Out).",
    pasalCitation: "Pasal 38 ayat 8-9 (Ketentuan Pelanggaran Berulang)",
    tags: ["eskalasi", "sanksi", "akumulasi", "dewan kehormatan", "drop out"]
  },
  {
    id: "vape-smoking",
    category: "Disiplin & Sanksi",
    question: "Apakah membawa atau mengonsumsi rokok / rokok elektrik (vape) diperbolehkan di kesatrian?",
    answer: "DILARANG KERAS. Membawa, menyimpan, atau mengonsumsi rokok, rokok elektrik (vape), pod, maupun produk tembakau lainnya di lingkungan pendidikan dikategorikan secara eksplisit sebagai PELANGGARAN SEDANG.",
    pasalCitation: "Pasal 36 ayat 6(n)",
    tags: ["rokok", "vape", "pod", "larangan", "pelanggaran sedang"]
  }
];
