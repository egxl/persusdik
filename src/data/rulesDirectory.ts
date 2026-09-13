export interface RuleChapter {
  id: string;
  number: string;
  title: string;
  pasals: {
    number: string;
    title: string;
    summary: string;
  }[];
}

export const CHAPTERS_DIRECTORY: RuleChapter[] = [
  {
    id: "bab-1",
    number: "BAB I",
    title: "PENDAHULUAN",
    pasals: [
      { number: "Pasal 1", title: "Umum", summary: "Pengertian P3MD sebagai program pembentukan calon pemimpin BUMN/nasional berkarakter, berintegritas, adaptif, dan berorientasi hasil." },
      { number: "Pasal 2", title: "Maksud dan Tujuan", summary: "Pedoman resmi bagi Tenaga Pendidik, Pengasuh, dan Peserta Didik (Serdik) agar pendidikan berjalan tertib, aman, dan lancar." },
      { number: "Pasal 3", title: "Dasar Hukum", summary: "Undang-Undang Nomor 16 Tahun 2025 tentang BUMN, Petunjuk Teknis Kasad, serta Protap Kodiklat tentang evaluasi dan sikap perilaku serdik." }
    ]
  },
  {
    id: "bab-2",
    number: "BAB II",
    title: "KETENTUAN UMUM",
    pasals: [
      { number: "Pasal 4", title: "Definisi", summary: "29 istilah baku: P3MD, BUMN, Perkhusserdik, Serdik, Tenaga Pendidik, Senat, Batch Korps, Polisi Serdik, Lemusdik, Kopelrim, Kesatrian, Pawas, Pesiar, Izin Bermalam." },
      { number: "Pasal 5", title: "Tahapan Pelaksanaan P3MD", summary: "Upacara Pembukaan, Masa Orientasi Kejuangan, Tahap 1 Core Character Self-Mastery, Tahap 2 Business & Leadership Class, Tahap 3 Leaders Apprentice Journey, Penutupan." },
      { number: "Pasal 6", title: "Ketentuan Fasilitas Pendidikan", summary: "Akomodasi barak Lemdik, pembagian tempat tidur dan sarana prasarana, serta tanggung jawab kebersihan lingkungan." }
    ]
  },
  {
    id: "bab-3",
    number: "BAB III",
    title: "TUGAS, KEDUDUKAN, KEWAJIBAN, DAN HAK SERDIK",
    pasals: [
      { number: "Pasal 7", title: "Tugas Serdik", summary: "Melaksanakan seluruh kurikulum, kegiatan belajar mengajar, latihan lapangan, dan pembinaan karakter dengan penuh kesungguhan." },
      { number: "Pasal 8", title: "Kedudukan Serdik", summary: "Kedudukan resmi Serdik sebagai insan terdidik yang dibina di bawah kesatrian lembaga pendidikan dan komando batch." },
      { number: "Pasal 9", title: "Kewajiban dan Hak Serdik", summary: "Kewajiban menjunjung tinggi kehormatan korps dan disiplin; hak memperoleh akomodasi, konsumsi higienis, layanan kesehatan, ibadah, dan perlakuan adil." }
    ]
  },
  {
    id: "bab-4",
    number: "BAB IV",
    title: "PENGORGANISASIAN",
    pasals: [
      { number: "Pasal 10", title: "Struktur Pengasuh, Pembina & Pendamping", summary: "Komandan Batch, Wadan Batch, Perwira Pengawas (Pawas), Kasi Pamops, Pengasuh, Pelatih, Tenaga Medis." },
      { number: "Pasal 11", title: "Struktur Organisasi Serdik", summary: "Senat Serdik, Lembaga Musyawarah Serdik (Lemusdik), Polisi Serdik (Poldik), Batch Korps, Grup Korps, Elemen Korps." },
      { number: "Pasal 12", title: "Struktur Organisasi Batch Korps Serdik", summary: "Daftar 44 jabatan fungsional dan struktural siswa (Dan Batch Korps s.d. Komandan Elemen Korps)." },
      { number: "Pasal 13", title: "Tugas & Tanggung Jawab Kesenatan Serdik", summary: "Rincian tugas dan BATASAN KEWENANGAN ke-44 jabatan; larangan keras menghukum fisik, mengintimidasi, atau merundung rekan sesama serdik." }
    ]
  },
  {
    id: "bab-5",
    number: "BAB V",
    title: "KETENTUAN KEGIATAN",
    pasals: [
      { number: "Pasal 18", title: "Kegiatan Sehari-hari", summary: "Rundown rutin harian: bangun pagi 04.00, ibadah, senam pagi, sarapan tertib, apel pagi, KBM sesi I, ishoma, KBM sesi II, olahraga, makan malam, belajar mandiri, apel malam, lampu padam 22.00." },
      { number: "Pasal 19", title: "Salam Serdik", summary: "Tata cara penghormatan militer/kesatrian, salam santun 'Best Heart, Best Mind', etika berpapasan dengan atasan dan pengasuh." },
      { number: "Pasal 20a", title: "Apel", summary: "Ketentuan apel pagi dan apel malam; jadwal pengambil apel bergilir (Dan Batch, Dan Grup, Dan Elemen, Pawas)." },
      { number: "Pasal 20b", title: "Dinas Dalam", summary: "Petunjuk piket Ketua Kelas (absensi & ketertiban kelas) dan Jaga Serambi (keamanan dan mutasi barak)." },
      { number: "Pasal 21", title: "Kegiatan Belajar di Kelas", summary: "Disiplin ruang kelas, larangan tertidur atau bermain gawai, adab interaksi terhadap pengajar dan narasumber." },
      { number: "Pasal 22", title: "Kegiatan Belajar di Lapangan", summary: "Kesiapan fisik, seragam PDL dan perlengkapan lapangan, keselamatan latihan, dan protokol darurat medis lapangan." },
      { number: "Pasal 23", title: "Kegiatan di Luar Jam Dinas", summary: "Belajar mandiri, kelompok studi, dan olahraga pengembangan minat bakat di bawah izin pengasuh." },
      { number: "Pasal 24", title: "Beribadah", summary: "Penjaminan hak dan kewajiban ibadah menurut agama/kepercayaan masing-masing secara tertib dan saling menghormati." },
      { number: "Pasal 25", title: "Hak Keluar Lingkungan & Kunjungan", summary: "Mekanisme pemberian izin Pesiar, Izin Bermalam (IB) akhir pekan, dan tata cara menerima kunjungan keluarga di pos tamu." }
    ]
  },
  {
    id: "bab-6",
    number: "BAB VI",
    title: "KETENTUAN KHUSUS",
    pasals: [
      { number: "Pasal 26", title: "Ketentuan Pakaian", summary: "Penggunaan seragam resmi: PDL kopelrim, PDH pantofel, Pakaian Olahraga resmi, Batik, dan atribut kepangkatan serdik." },
      { number: "Pasal 27", title: "Kesehatan dan Berobat", summary: "Alur pemeriksaan kesehatan via Kasi Kesehatan Serdik ke Pengasuh Medis dan Pos Kesehatan Lemdik." },
      { number: "Pasal 28", title: "Ketentuan Kerapihan", summary: "Standar cukur rambut 0-1-2 cm bagi serdik pria, kumis/jenggot dicukur bersih; serdik wanita rambut rapi/jilbab kedinasan; kerapihan sprei dan barak." },
      { number: "Pasal 29", title: "Ketentuan Perpindahan Pasukan", summary: "Tata cara pergerakan bersama: baris-berbaris, langkah tegap, menyanyikan lagu wajib/yel-yel penuh semangat." },
      { number: "Pasal 30", title: "Pelayanan Makan", summary: "Etika makan bersama: berbaris tertib, doa dipimpin ketua meja, sendok garpu senyap, tegak, dan makanan wajib dihabiskan bersih." },
      { number: "Pasal 31", title: "Pemesanan Paket, Makanan, Minuman", summary: "Larangan memesan makanan via GoFood/GrabFood tanpa izin khusus; tata cara penerimaan kiriman paket keluarga." },
      { number: "Pasal 32", title: "Penggunaan Alat Elektronik", summary: "Handphone/laptop hanya diizinkan pada jam belajar mandiri; dinonaktifkan saat KBM, apel, latihan, dan jam tidur." },
      { number: "Pasal 33", title: "Penggunaan Media Sosial", summary: "Larangan mempublikasikan konten rahasia, militer sensitif, atau berisiko mencemarkan reputasi institusi di media sosial." },
      { number: "Pasal 34", title: "Penghormatan dalam Keadaan Tertentu", summary: "Etika penghormatan saat membawa perlengkapan berat, saat hujan lebat, atau saat berada dalam kendaraan dinas." },
      { number: "Pasal 35a", title: "Jam Kantin", summary: "Fasilitas kantin dibuka hari Rabu dan Jumat malam setelah makan malam; DILARANG membawa makanan ke dalam barak." },
      { number: "Pasal 35b", title: "Izin Meninggalkan Kegiatan", summary: "Prosedur izin keluar dinas, urusan keluarga mendesak, atau rujukan medis atas persetujuan tertulis Pengasuh." }
    ]
  },
  {
    id: "bab-7",
    number: "BAB VII",
    title: "PELANGGARAN, PENGHARGAAN, DAN SANKSI",
    pasals: [
      { number: "Pasal 36", title: "Pelanggaran", summary: "Klasifikasi pelanggaran menjadi Ringan (kerapihan, ketidaktertiban barak), Sedang (gawai saat apel, rokok/vape, telat pesiar), dan Berat (asusila, bullying, miras/narkoba, pencemaran nama baik)." },
      { number: "Pasal 37", title: "Penghargaan", summary: "Apresiasi prestasi akademik, kepemimpinan, kepribadian, keteladanan; penambahan poin kondite pada nilai akhir." },
      { number: "Pasal 38", title: "Sanksi & Ketentuan Berulang", summary: "Tingkatan sanksi; aturan eskalasi akumulatif (2x ringan = sanksi sedang; 3x ringan = sanksi berat / Sidang Dewan Kehormatan / Drop Out)." }
    ]
  },
  {
    id: "bab-8",
    number: "BAB VIII",
    title: "PENUTUP",
    pasals: [
      { number: "Pasal 39", title: "Penutup", summary: "Ketentuan peralihan dan penandatanganan resmi oleh Komandan Batch 1 Angkatan Soedirman, Marsma TNI Dr. Anton Pallaguna." }
    ]
  }
];
