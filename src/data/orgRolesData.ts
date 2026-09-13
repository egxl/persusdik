export interface OrgDivision {
  division: string;
  leader: string;
  roles: {
    title: string;
    description: string;
  }[];
}

export const ORG_DIVISIONS: OrgDivision[] = [
  {
    division: "Pucuk Pimpinan Korps & Kesekretariatan",
    leader: "Komandan Batch Korps",
    roles: [
      { title: "Komandan Batch Korps", description: "Memimpin seluruh organisasi Serdik, mewakili aspirasi serdik ke Pengasuh, mengoordinasikan bidang, dan bertanggung jawab atas ketertiban korps tanpa mengambil alih wewenang pengasuh." },
      { title: "Wakil Komandan Batch Korps", description: "Membantu Komandan Batch Korps dalam pengendalian operasional organisasi serdik dan mewakili Dan Batch Korps bila berhalangan." },
      { title: "Sekretaris I & II", description: "Mengelola administrasi persuratan, notulensi rapat korps, arsip kegiatan, dan pelaporan berkala organisasi serdik." },
      { title: "Bendahara & Wakil Bendahara", description: "Mengelola administrasi keuangan iuran sukarela kegiatan serdik secara transparan dan akuntabel atas izin pengasuh." }
    ]
  },
  {
    division: "Lembaga Musyawarah & Penegakan Disiplin",
    leader: "Ketua Lemusdik & Komandan Polisi Serdik",
    roles: [
      { title: "Ketua & Anggota Lemusdik", description: "Lembaga Musyawarah Serdik berfungsi menghimpun aspirasi konstruktif, merumuskan musyawarah mufakat serdik, dan memberikan pertimbangan kepada Dan Batch Korps." },
      { title: "Komandan & Anggota Polisi Serdik (Poldik)", description: "Membantu pengawasan ketertiban, kedisiplinan barak, kepatuhan kerapihan seragam, dan tata tertib harian. Wajib mengingatkan secara santun dan DILARANG melakukan tindakan fisik atau kekerasan." }
    ]
  },
  {
    division: "Bidang Pembinaan Karakter (10 Seksi Nilai Soedirman)",
    leader: "Kepala Bidang Pembinaan Karakter",
    roles: [
      { title: "Kasi Nilai Integritas", description: "Menanamkan kejujuran, komitmen moral, anti-plagiasi akademik, dan keterbukaan." },
      { title: "Kasi Nilai Kepemimpinan", description: "Menumbuhkan self-mastery, team command, dan kepemimpinan strategis nasional." },
      { title: "Kasi Nilai Patriotisme", description: "Menguatkan wawasan kebangsaan, bela negara, dan jiwa korsa pengabdian BUMN." },
      { title: "Kasi Nilai Ketangguhan", description: "Membangun resiliensi mental, pantang menyerah dalam tekanan fisik dan intelektual." },
      { title: "Kasi Nilai Analytical Thinking", description: "Mendorong budaya berpikir kritis, berbasis data valid, dan penyusunan solusi masalah nyata." },
      { title: "Kasi Nilai Continuous Learning", description: "Menginisiasi kelompok belajar mandiri, bedah buku, dan peningkatan kompetensi." },
      { title: "Kasi Nilai Kerjasama Tim", description: "Memperkuat soliditas korps, sinergi lintas latar belakang instansi, dan saling peduli." },
      { title: "Kasi Nilai Keberanian", description: "Mendorong keberanian moral mengemukakan kebenaran dan mengambil tanggung jawab." },
      { title: "Kasi Nilai Kolaborasi Stakeholder", description: "Menumbuhkan kemampuan komunikasi diplomatis dan kemitraan strategis." }
    ]
  },
  {
    division: "Bidang Pengamanan & Operasional",
    leader: "Kabid Pengamanan & Kabid Operasional",
    roles: [
      { title: "Seksi Pengamanan Personel, Materiil & Informasi", description: "Membantu menjaga keamanan fisik rekan serdik, inventaris perlengkapan barak, dan keamanan informasi digital." },
      { title: "Seksi Renlakgiat & Operasional Pendidikan", description: "Mengoordinasikan kesiapan ruang kelas, kelengkapan narasumber, dan jadwal kegiatan internal serdik." },
      { title: "Seksi Tradisi, Kejuangan & Olahraga", description: "Memelihara tradisi korps Soedirman, memimpin yel-yel kebangsaan, dan mengorganisasi jadwal olahraga serdik." }
    ]
  },
  {
    division: "Bidang SDM, Logistik & Penerangan",
    leader: "Kabid SDM, Kabid Logistik, Kabid Penerangan",
    roles: [
      { title: "Seksi Personel, Rohbintal & Kesehatan", description: "Pencatatan data kehadiran, fasilitasi ibadah keagamaan, dan pendampingan serdik yang memerlukan pemeriksaan medis ke klinik." },
      { title: "Seksi Kesejahteraan, Perlengkapan & Kebersihan", description: "Pengelolaan distribusi konsumsi, perlengkapan barak, dan sanitasi kesatrian." },
      { title: "Seksi IT, Dokumentasi & Publikasi", description: "Dukungan perangkat presentasi kelas, dokumentasi arsip kegiatan, dan media publikasi resmi korps." }
    ]
  },
  {
    division: "Komando Taktis Pasukan Korps",
    leader: "Komandan Grup & Komandan Elemen",
    roles: [
      { title: "Komandan Grup Korps", description: "Memimpin pergerakan pasukan tingkat Grup dalam apel, makan, dan perpindahan pasukan." },
      { title: "Komandan Elemen Korps", description: "Pimpinan terkecil serdik di barak; menghimpun absensi elemen, memastikan kerapihan barisan, dan menjadi jembatan awal aspirasi serdik." }
    ]
  }
];
