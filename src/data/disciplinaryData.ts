export interface ViolationItem {
  id: string;
  category: "ringan" | "sedang" | "berat";
  title: string;
  description: string;
  consequences: string;
  pasal: string;
}

export const VIOLATIONS_DATA: ViolationItem[] = [
  // Ringan
  {
    id: "vr-1",
    category: "ringan",
    title: "Kerapihan Diri Tidak Sesuai Standar",
    description: "Memelihara kumis, jenggot, rambut tidak rapi (tidak 0-1-2 cm bagi pria), atau kuku panjang dan kotor.",
    consequences: "Teguran lisan / peringatan tertulis I, tindakan fisik pembinaan edukatif terukur, pemotongan nilai kondite ringan.",
    pasal: "Pasal 36 ayat (4) huruf a"
  },
  {
    id: "vr-2",
    category: "ringan",
    title: "Ketidaktertiban Barak & Tempat Tidur",
    description: "Tempat tidur, lemari, sprei, selimut, atau perlengkapan pribadi tidak tertata rapi sesuai standar inspeksi militer.",
    consequences: "Teguran lisan, merapikan ulang barak secara terpimpin, kurve tambahan.",
    pasal: "Pasal 36 ayat (4) huruf b"
  },
  {
    id: "vr-3",
    category: "ringan",
    title: "Keterlambatan Minor Tanpa Alasan Sah",
    description: "Terlambat mengikuti apel, kelas KBM, atau perpindahan pasukan di bawah batas toleransi waktu pengasuhan.",
    consequences: "Tindakan pembinaan fisik terukur (push-up/sit-up terpantau medis), peringatan lisan.",
    pasal: "Pasal 36 ayat (4) huruf c"
  },
  {
    id: "vr-4",
    category: "ringan",
    title: "Kelengkapan Seragam Tidak Sempurna",
    description: "Tidak mengenakan atribut tanda jabatan, tali kur, kopelrim, papan nama, atau alas kaki tidak sesuai ketentuan.",
    consequences: "Peringatan tertulis I, melengkapi atribut sebelum diizinkan memasuki barisan kegiatan.",
    pasal: "Pasal 36 ayat (4) huruf d"
  },
  {
    id: "vr-5",
    category: "ringan",
    title: "Sikap Tidak Bersemangat Saat Bergerak Pasukan",
    description: "Tidak bersuara, tidak menyanyikan lagu wajib/yel-yel dengan lantang saat perpindahan pasukan, atau langkah tidak serempak.",
    consequences: "Latihan pemantapan langkah tegap tambahan di bawah pembinaan Pelatih.",
    pasal: "Pasal 36 ayat (4) huruf e"
  },

  // Sedang
  {
    id: "vs-1",
    category: "sedang",
    title: "Membawa & Mengonsumsi Rokok / Rokok Elektrik (Vape)",
    description: "Membawa, menyimpan, atau mengonsumsi rokok konvensional, rokok elektrik (vape), pod, cerutu di seluruh area kesatrian Lemdik.",
    consequences: "Peringatan tertulis II/III, penyitaan barang bukti, pencabutan hak pesiar/IB, dan pemotongan nilai kepribadian signifikan.",
    pasal: "Pasal 36 ayat (6) huruf n"
  },
  {
    id: "vs-2",
    category: "sedang",
    title: "Penggunaan Gawai / Elektronik Saat Jam Dinas",
    description: "Menyalakan, menggunakan, atau membunyikan handphone, alarm, atau gawai saat pembelajaran, apel, atau latihan resmi tanpa izin Pengasuh.",
    consequences: "Penyitaan gawai oleh Pengasuh, peringatan tertulis II, piket jaga tambahan.",
    pasal: "Pasal 36 ayat (6) huruf j"
  },
  {
    id: "vs-3",
    category: "sedang",
    title: "Terlambat Kembali dari Pesiar atau Izin Bermalam (IB)",
    description: "Tidak kembali ke lingkungan Lemdik tepat waktu sesuai batas jam yang ditetapkan dalam surat jalan izin pesiar/IB.",
    consequences: "Pencabutan izin pesiar/IB untuk masa 2-4 pekan berikutnya, pengawasan khusus, tugas jaga serambi tambahan.",
    pasal: "Pasal 36 ayat (6) huruf l"
  },
  {
    id: "vs-4",
    category: "sedang",
    title: "Memasuki Area Privat / Barak Serdik Lain Tanpa Izin",
    description: "Memasuki kamar, barak lawan jenis, atau area terbatas Serdik lain tanpa pendampingan atau izin resmi Pengasuh.",
    consequences: "Peringatan keras tertulis, pencatatan dalam buku kondite negatif.",
    pasal: "Pasal 36 ayat (6) huruf k"
  },
  {
    id: "vs-5",
    category: "sedang",
    title: "Mengulangi Pelanggaran Ringan 2 Kali",
    description: "Mengulangi jenis pelanggaran ringan yang sama setelah diberikan teguran dan pembinaan.",
    consequences: "Status dinaikkan menjadi Sanksi Pelanggaran Sedang secara otomatis.",
    pasal: "Pasal 38 ayat (8) huruf a"
  },

  // Berat
  {
    id: "vb-1",
    category: "berat",
    title: "Tindakan Merusak Nama Baik P3MD, BUMN, dan Negara",
    description: "Melakukan perbuatan atau pernyataan publik/medsos yang secara sengaja mencemarkan kehormatan program, lembaga, instansi, atau negara.",
    consequences: "Sidang Dewan Kehormatan Serdik, laporan resmi ke unit SDM kementerian/BUMN asal, hingga rekomendasi pengeluaran (Drop Out).",
    pasal: "Pasal 36 ayat (7) huruf o"
  },
  {
    id: "vb-2",
    category: "berat",
    title: "Konten Pornografi & Tindakan Asusila / Pelecehan",
    description: "Mengakses, mengunduh, menyimpan, menyebarkan konten pornografi; melakukan pelecehan verbal/nonverbal atau perbuatan asusila.",
    consequences: "Sidang Dewan Kehormatan, rekomendasi TIDAK LULUS aspek integritas, dan PENGELUARAN TIDAK TERHORMAT serta proses hukum jika ada delik pidana.",
    pasal: "Pasal 36 ayat (7) huruf p & q"
  },
  {
    id: "vb-3",
    category: "berat",
    title: "Kekerasan Fisik, Intimidasi & Perundungan (Bullying)",
    description: "Melakukan kontak fisik kekerasan, pemukulan, penganiayaan, intimidasi verbal/mental, atau perpeloncoan terhadap sesama Serdik.",
    consequences: "Pemberhentian seketika, pemulangan ke instansi asal dengan catatan hitam pelanggaran berat integritas.",
    pasal: "Pasal 36 ayat (7) & Pasal 13"
  },
  {
    id: "vb-4",
    category: "berat",
    title: "Narkoba, Miras, Senjata Tajam / Api",
    description: "Menyalahgunakan zat narkotika, psikotropika, mengonsumsi minuman keras beralkohol, atau membawa senjata tajam/api tanpa hak.",
    consequences: "Penyerahan kepada aparat penegak hukum (Polisi/TNI) dan pemberhentian tetap dari P3MD.",
    pasal: "Pasal 36 ayat (7)"
  },
  {
    id: "vb-5",
    category: "berat",
    title: "Pengulangan Pelanggaran Ringan 3x atau Pelanggaran Sedang 2x",
    description: "Melakukan pengulangan pelanggaran ringan yang sama sebanyak 3 kali berturut-turut atau pelanggaran sedang 2 kali berturut-turut.",
    consequences: "Dikenakan sanksi tingkat berat (Dewan Kehormatan / Drop Out).",
    pasal: "Pasal 38 ayat (8)b & ayat (9)"
  }
];

export const SANCTION_LEVELS = [
  {
    level: "Sanksi Ringan",
    authority: "Pengasuh / Pawas",
    measures: [
      "Teguran lisan secara langsung dan edukatif",
      "Peringatan tertulis tingkat I",
      "Tindakan fisik pembinaan terukur (push up/sit up terpantau tim kesehatan)",
      "Tugas kebersihan ekstra (kurve barak)",
      "Pengurangan nilai kondite ringan"
    ]
  },
  {
    level: "Sanksi Sedang",
    authority: "Komandan Batch melalui Pawas / Kasi Pamops",
    measures: [
      "Peringatan tertulis tingkat II dan III",
      "Pencabutan hak Pesiar dan Izin Bermalam (IB) selama 2-4 pekan",
      "Penambahan giliran Dinas Dalam / Jaga Serambi ekstra",
      "Penempatan dalam pemantauan khusus Pengasuh",
      "Pengurangan nilai sikap perilaku secara signifikan"
    ]
  },
  {
    level: "Sanksi Berat",
    authority: "Sidang Dewan Kehormatan Serdik & Keputusan Komandan Batch",
    measures: [
      "Penempatan dalam isolasi / pengawasan khusus kesatrian",
      "Rekomendasi TIDAK LULUS pada komponen integritas dan sikap perilaku",
      "Pelaporan resmi kepada Pejabat Pembina Kepegawaian / Direksi BUMN asal",
      "Pelaporan kepada aparat penegak hukum bila mengandung unsur pidana",
      "PENGELUARAN (DROP OUT) dari P3MD dan dikembalikan ke instansi asal secara tidak terhormat"
    ]
  }
];
