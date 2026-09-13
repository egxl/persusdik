export interface QuizQuestion {
  id: number;
  scenario: string;
  question: string;
  options: {
    letter: string;
    text: string;
    isCorrect: boolean;
  }[];
  explanation: string;
  pasalRef: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    scenario: "Seorang Serdik pria bangun pagi pukul 04.00 dan menyadari kumis serta jenggot tipisnya mulai tumbuh. Jadwal apel pagi akan dimulai pada pukul 07.00.",
    question: "Tindakan apa yang paling tepat sesuai Pasal 28 Perkhusserdik?",
    options: [
      { letter: "A", text: "Membiarkannya karena masih tipis dan berencana mencukurnya saat pesiar akhir pekan.", isCorrect: false },
      { letter: "B", text: "Wajib mencukur bersih kumis dan jenggot sebelum apel pagi dimulai agar memenuhi standar kerapihan kesatrian.", isCorrect: true },
      { letter: "C", text: "Meminta dispensasi tertulis kepada Komandan Elemen Korps.", isCorrect: false },
      { letter: "D", text: "Menutupi area jenggot dengan masker tanpa alasan medis sah.", isCorrect: false }
    ],
    explanation: "Pasal 28 mengatur bahwa Serdik pria wajib menjaga kerapihan dengan mencukur bersih kumis dan jenggot serta memotong rambut 0-1-2 cm rapi militer. Memelihara kumis/jenggot merupakan Pelanggaran Ringan (Pasal 36 ayat 4a).",
    pasalRef: "Pasal 28 & Pasal 36 ayat (4) huruf a"
  },
  {
    id: 2,
    scenario: "Pada hari Kamis malam pukul 20.00 setelah makan malam, seorang Serdik merasa lapar dan ingin jajan ke kantin Lemdik.",
    question: "Apakah Serdik tersebut diperkenankan memanfaatkan fasilitas kantin pada hari Kamis malam?",
    options: [
      { letter: "A", text: "Boleh, selama kantin masih buka dan mendapat izin dari teman sekamar.", isCorrect: false },
      { letter: "B", text: "Tidak boleh, karena fasilitas kantin hanya diizinkan untuk dimanfaatkan pada hari Rabu dan Jumat setelah makan malam.", isCorrect: true },
      { letter: "C", text: "Boleh, asalkan makanan dibungkus dan dimakan di dalam barak.", isCorrect: false },
      { letter: "D", text: "Boleh, jika Serdik tersebut memiliki jabatan di Korps Serdik.", isCorrect: false }
    ],
    explanation: "Pasal 35 ayat (1) menyatakan secara tegas bahwa Serdik hanya dapat memanfaatkan fasilitas kantin pada hari Rabu dan Jumat setelah melaksanakan kegiatan makan malam.",
    pasalRef: "Pasal 35 (Jam Kantin)"
  },
  {
    id: 3,
    scenario: "Saat berada di kantin pada hari Rabu malam, seorang Serdik membeli beberapa bungkus makanan ringan dan berniat menyimpannya di lemari barak untuk persediaan tengah malam.",
    question: "Bagaimana aturan Perkhusserdik mengenai membawa makanan kantin ke barak?",
    options: [
      { letter: "A", text: "Diperbolehkan asal disimpan di dalam lemari tertutup rapat.", isCorrect: false },
      { letter: "B", text: "Diperbolehkan maksimal 2 bungkus makanan ringan.", isCorrect: false },
      { letter: "C", text: "Tegas dilarang; serdik tidak diizinkan membawa makanan dan minuman dari kantin ke dalam barak.", isCorrect: true },
      { letter: "D", text: "Hanya boleh dibawa jika disetujui oleh piket Jaga Serambi.", isCorrect: false }
    ],
    explanation: "Pasal 35 ayat (4) menegaskan: 'Serdik tidak diizinkan membawa makanan dan minuman dari kantin ke barak' guna menjaga higienitas dan sanitasi lingkungan tempat tinggal.",
    pasalRef: "Pasal 35 ayat (4)"
  },
  {
    id: 4,
    scenario: "Merasa jenuh dengan menu makanan Lemdik, beberapa Serdik bersepakat memesan makanan cepat saji melalui aplikasi ojek online (GoFood/GrabFood) dan meminta dikirim ke gerbang pos belakang kesatrian.",
    question: "Bagaimana status perbuatan pemesanan makanan online mandiri ini dalam Perkhusserdik?",
    options: [
      { letter: "A", text: "Merupakan pelanggaran tata tertib karena pemesanan makanan/minuman online secara mandiri dilarang keras tanpa persetujuan Pengasuh.", isCorrect: true },
      { letter: "B", text: "Boleh dilakukan pada saat hari libur atau akhir pekan.", isCorrect: false },
      { letter: "C", text: "Boleh asalkan Serdik membagi makanan tersebut kepada rekan satu barak.", isCorrect: false },
      { letter: "D", text: "Diizinkan selama pembayaran dilakukan secara cashless (non-tunai).", isCorrect: false }
    ],
    explanation: "Pasal 31 melarang pemesanan makanan dan minuman dari luar secara mandiri demi pertimbangan standar gizi, higienitas, dan disiplin kesatrian.",
    pasalRef: "Pasal 31 (Pemesanan Paket, Makanan, dan Minuman)"
  },
  {
    id: 5,
    scenario: "Saat kelas KBM berlangsung, seorang Serdik meletakkan handphone di atas meja dengan posisi layar menyala dan sesekali membalas pesan WhatsApp dari kerabat.",
    question: "Berdasarkan Pasal 36, pelanggaran kategori apakah tindakan Serdik tersebut?",
    options: [
      { letter: "A", text: "Bukan pelanggaran jika handphone dalam mode hening (silent).", isCorrect: false },
      { letter: "B", text: "Pelanggaran Ringan yang hanya dikenakan teguran senyum.", isCorrect: false },
      { letter: "C", text: "Pelanggaran Sedang (menggunakan gawai saat pembelajaran/apel resmi tanpa izin).", isCorrect: true },
      { letter: "D", text: "Pelanggaran Berat yang langsung mengakibatkan Drop Out seketika.", isCorrect: false }
    ],
    explanation: "Pasal 36 ayat (6) huruf j mengklasifikasikan penggunaan atau pembunyian gawai/alat elektronik pada saat pembelajaran, apel, atau latihan resmi tanpa izin sebagai PELANGGARAN SEDANG.",
    pasalRef: "Pasal 36 ayat (6) huruf j"
  },
  {
    id: 6,
    scenario: "Seorang Serdik kedapatan membawa dan mengisap rokok elektrik (pod/vape) di selasar kamar mandi barak saat malam hari.",
    question: "Bagaimana regulasi Perkhusserdik mengenai rokok dan rokok elektrik?",
    options: [
      { letter: "A", text: "Diizinkan asal tidak meninggalkan asap pekat di barak.", isCorrect: false },
      { letter: "B", text: "Merupakan Pelanggaran Sedang (Pasal 36 ayat 6 huruf n), barang bukti disita dan pelaku dikenai sanksi sedang.", isCorrect: true },
      { letter: "C", text: "Hanya pelanggaran etika ringan tanpa sanksi kedinasan.", isCorrect: false },
      { letter: "D", text: "Boleh dikonsumsi jika Serdik berusia di atas 21 tahun.", isCorrect: false }
    ],
    explanation: "Pasal 36 ayat (6) huruf n menyatakan bahwa membawa dan mengonsumsi rokok, vape, atau rokok elektrik lainnya adalah PELANGGARAN SEDANG yang dapat berujung pencabutan pesiar/IB.",
    pasalRef: "Pasal 36 ayat (6) huruf n"
  },
  {
    id: 7,
    scenario: "Seorang Serdik terlambat kembali ke lingkungan Lemdik selama 45 menit dari jadwal izin Pesiar hari Minggu karena alasan kemacetan lalu lintas.",
    question: "Apa konsekuensi regulasi terhadap keterlambatan kembali dari pesiar?",
    options: [
      { letter: "A", text: "Keterlambatan diabaikan jika dapat menunjukkan bukti tangkapan layar peta macet.", isCorrect: false },
      { letter: "B", text: "Termasuk Pelanggaran Sedang (Pasal 36 ayat 6 huruf l) dan dikenai sanksi seperti pencabutan pesiar pada pekan berikutnya.", isCorrect: true },
      { letter: "C", text: "Hanya membayar denda kas senat serdik.", isCorrect: false },
      { letter: "D", text: "Langsung dikeluarkan dari pendidikan tanpa pemeriksaan.", isCorrect: false }
    ],
    explanation: "Pasal 36 ayat (6) huruf l menetapkan bahwa tidak kembali tepat waktu dari Pesiar atau Izin Bermalam adalah PELANGGARAN SEDANG. Tanggung jawab manajemen waktu sepenuhnya ada pada Serdik.",
    pasalRef: "Pasal 36 ayat (6) huruf l"
  },
  {
    id: 8,
    scenario: "Seorang pejabat Korps Serdik mendapati rekannya satu elemen tidak rapi dalam berbaris. Karena kesal, ia memerintahkan rekannya push-up 50 kali dan membentak rekannya.",
    question: "Bagaimana keabsahan tindakan pejabat Korps Serdik tersebut berdasarkan Pasal 13?",
    options: [
      { letter: "A", text: "Sah, karena pejabat Korps memiliki wewenang menegakkan disiplin penuh militer.", isCorrect: false },
      { letter: "B", text: "Tidak sah dan dilarang keras; perangkat organisasi Serdik TIDAK BERWENANG menjatuhkan sanksi fisik atau intimidasi.", isCorrect: true },
      { letter: "C", text: "Sah, asalkan push-up dilakukan di luar barak.", isCorrect: false },
      { letter: "D", text: "Sah, jika pejabat tersebut adalah Komandan Polisi Serdik.", isCorrect: false }
    ],
    explanation: "Pasal 13 di setiap butir jabatan Korps secara tegas menyatakan: 'Tidak berwenang menjatuhkan sanksi, melakukan tindakan fisik, intimidasi, perundungan (bullying), atau tindakan pembinaan di luar arahan Pengasuh.' Wewenang hukuman murni berada di tangan Pengasuh resmi.",
    pasalRef: "Pasal 13 (Ketentuan Batasan Kewenangan Serdik)"
  },
  {
    id: 9,
    scenario: "Seorang Serdik telah 2 kali ditegur secara resmi karena tidak merapikan tempat tidur baraknya. Pada minggu ketiga, tempat tidurnya kembali ditemukan berantakan untuk yang ketiga kalinya.",
    question: "Berdasarkan aturan eskalasi pelanggaran berulang (Pasal 38 ayat 8), apakah status sanksi serdik tersebut saat ini?",
    options: [
      { letter: "A", text: "Tetap dinilai sebagai Pelanggaran Ringan ketiga kalinya.", isCorrect: false },
      { letter: "B", text: "Diberikan sanksi Pelanggaran Sedang.", isCorrect: false },
      { letter: "C", text: "Statusnya otomatis dinaikkan dan diberikan SANKSI PELANGGARAN BERAT (Pasal 38 ayat 8 huruf b).", isCorrect: true },
      { letter: "D", text: "Diberikan pemutihan karena telah berganti minggu.", isCorrect: false }
    ],
    explanation: "Pasal 38 ayat (8) huruf b menyatakan: 'Apabila Serdik melakukan pelanggaran berulang atas pelanggaran ringan yang sama sebanyak 3 kali, akan diberikan sanksi pelanggaran berat'.",
    pasalRef: "Pasal 38 ayat (8) huruf b"
  },
  {
    id: 10,
    scenario: "Saat makan bersama di ruang makan, seorang Serdik berbicara lantang dan sendok garpunya terus berdenting memukul piring.",
    question: "Bagaimana etika ruang makan yang dilanggar sesuai Pasal 30?",
    options: [
      { letter: "A", text: "Di ruang makan Serdik wajib tertib senyap, sendok garpu tidak berdenting, duduk tegak lurus, dan menghabiskan porsi makanan.", isCorrect: true },
      { letter: "B", text: "Boleh bersuara asalkan membicarakan materi pelajaran kelas.", isCorrect: false },
      { letter: "C", text: "Sendok berdenting diperbolehkan jika sendok berbahan logam aluminium.", isCorrect: false },
      { letter: "D", text: "Etika makan hanya berlaku saat dihadiri oleh Komandan Batch.", isCorrect: false }
    ],
    explanation: "Pasal 30 mengatur tata tertib pelayanan makan militer/kesatrian: antrean tertib, doa terpimpin, adab makan senyap tanpa dentingan alat makan, dan mengonsumsi seluruh porsi tanpa tersisa.",
    pasalRef: "Pasal 30 (Pelayanan Makan)"
  }
];
