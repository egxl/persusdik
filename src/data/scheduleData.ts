export interface ScheduleSlot {
  time: string;
  activity: string;
  location: string;
  uniform: string;
  notes?: string;
  category: "ibadah" | "fisik" | "makan" | "apel" | "kbm" | "istirahat" | "mandiri";
}

export interface DaySchedule {
  dayName: string;
  description: string;
  specialNote?: string;
  slots: ScheduleSlot[];
}

export const REGULAR_SCHEDULE: ScheduleSlot[] = [
  { time: "04.00 - 04.20", activity: "Bangun Pagi & Persiapan Mandiri", location: "Barak", uniform: "Pakaian Olahraga / Santai", category: "istirahat", notes: "Merapikan tempat tidur & sprei tegang" },
  { time: "04.20 - 05.15", activity: "Ibadah Subuh / Pagi", location: "Tempat Ibadah", uniform: "Pakaian Ibadah Rapi", category: "ibadah", notes: "Tertib dan khidmat" },
  { time: "05.15 - 05.45", activity: "Senam Pagi / Olahraga Kebugaran", location: "Lapangan Apel", uniform: "Pakaian Olahraga P3MD", category: "fisik", notes: "Lari terpimpin & peregangan" },
  { time: "05.45 - 06.30", activity: "Mandi Pagi & Persiapan Seragam KBM", location: "Barak", uniform: "PDH / Seragam Terjadwal", category: "istirahat", notes: "Cukur kumis & jenggot bersih" },
  { time: "06.30 - 07.00", activity: "Makan Pagi Bersama", location: "Ruang Makan", uniform: "PDH / Terjadwal", category: "makan", notes: "Masuk berbaris, duduk tegak, senyap" },
  { time: "07.00 - 07.30", activity: "Apel Pagi", location: "Lapangan Utama", uniform: "PDH / Terjadwal", category: "apel", notes: "Pemeriksaan kehadiran & kerapihan barisan" },
  { time: "07.30 - 12.00", activity: "Kegiatan Belajar Mengajar (KBM) Sesi I", location: "Ruang Kelas", uniform: "PDH", category: "kbm", notes: "Dosen tamu / Kuliah Kepemimpinan" },
  { time: "12.00 - 13.30", activity: "Ishoma Siang (Ibadah & Makan Siang)", location: "Tempat Ibadah / Ruang Makan", uniform: "PDH", category: "makan", notes: "Makan siang senyap dan istirahat sejenak" },
  { time: "13.30 - 17.00", activity: "Kegiatan Belajar Mengajar (KBM) Sesi II", location: "Ruang Kelas / Lapangan", uniform: "PDH / PDL", category: "kbm", notes: "Studi kasus, simulasi & workshop" },
  { time: "17.00 - 18.00", activity: "Olahraga Sore / Pembersihan Lingkungan", location: "Area Kesatrian", uniform: "Pakaian Olahraga", category: "fisik", notes: "Kebugaran fisik dan kerapihan barak" },
  { time: "18.00 - 19.30", activity: "Ishoma Malam (Ibadah & Makan Malam)", location: "Tempat Ibadah / Ruang Makan", uniform: "PDH / Batik", category: "makan", notes: "Makan malam bersama seluruh serdik" },
  { time: "19.30 - 21.00", activity: "Jam Belajar Mandiri / Jam Pengasuhan", location: "Ruang Belajar / Aula", uniform: "PDH / Batik Rapi", category: "mandiri", notes: "Waktu izin penggunaan laptop/gawai tugas" },
  { time: "21.00 - 21.30", activity: "Apel Malam (Pengambil Apel: Pawas)", location: "Lapangan / Selasar Barak", uniform: "PDH / Pakaian Terjadwal", category: "apel", notes: "Pengecekan personel & materiil lengkap" },
  { time: "21.30 - 22.00", activity: "Pembersihan Diri & Persiapan Istirahat", location: "Barak", uniform: "Pakaian Tidur Rapi", category: "istirahat", notes: "Pengecekan pintu, jendela & kerapihan" },
  { time: "22.00 - 04.00", activity: "Lampu Padam & Istirahat Malam Total", location: "Barak", uniform: "Pakaian Tidur", category: "istirahat", notes: "Wajib tidur, dilarang berisik/menyalakan HP" },
];

export const SCHEDULE_DAYS: Record<string, DaySchedule> = {
  "senin-kamis": {
    dayName: "Senin, Selasa & Kamis",
    description: "Jadwal Pendidikan & Pelatihan Reguler Core Character Self-Mastery",
    specialNote: "Fokus pada KBM intensif sesi kelas pagi dan siang, diakhiri jam belajar mandiri terstruktur.",
    slots: REGULAR_SCHEDULE
  },
  "rabu": {
    dayName: "Rabu",
    description: "Jadwal Akademik & Olahraga Bersama Korps",
    specialNote: "Malam hari setelah makan malam tersedia Akses Kantin (Pasal 35 ayat 1). Makanan dilarang dibawa ke barak.",
    slots: REGULAR_SCHEDULE.map(s => {
      if (s.time === "17.00 - 18.00") return { ...s, activity: "Olahraga Bersama Korps & Games Kebugaran" };
      if (s.time === "19.30 - 21.00") return { ...s, activity: "Jam Belajar Mandiri & Jam Buka Kantin (s.d. 20.45)", notes: "Akses kantin santai resmi Rabu malam" };
      return s;
    })
  },
  "jumat": {
    dayName: "Jumat",
    description: "Jadwal Ibadah Jumat, Kurve Lingkungan & Jam Kantin",
    specialNote: "Sore dialokasikan untuk pembersihan umum (kurve akbar) kesatrian, malam tersedia akses kantin resmi.",
    slots: REGULAR_SCHEDULE.map(s => {
      if (s.time === "12.00 - 13.30") return { ...s, activity: "Ibadah Shalat Jumat / Kebaktian & Makan Siang" };
      if (s.time === "17.00 - 18.00") return { ...s, activity: "Kurve Akbar Pembersihan Kesatrian & Sanitasi Barak", notes: "Inspeksi kebersihan barak" };
      if (s.time === "19.30 - 21.00") return { ...s, activity: "Jam Pengasuhan, Evaluasi Mingguan & Jam Kantin", notes: "Akses kantin Jumat malam" };
      return s;
    })
  },
  "sabtu-minggu": {
    dayName: "Sabtu & Minggu",
    description: "Jadwal Pembinaan Tradisi, Kegiatan Mandiri & Hak Pesiar/IB",
    specialNote: "Pesiar dan Izin Bermalam (IB) hanya diberikan bagi Serdik yang berprestasi dan bebas pelanggaran disiplin.",
    slots: [
      { time: "04.30 - 05.30", activity: "Bangun Pagi & Ibadah Subuh / Pagi", location: "Barak / Tempat Ibadah", uniform: "Pakaian Ibadah Rapi", category: "ibadah" },
      { time: "05.30 - 06.30", activity: "Olahraga Pagi Ringan & Sanitasi Barak", location: "Area Barak", uniform: "Pakaian Olahraga", category: "fisik" },
      { time: "06.30 - 07.15", activity: "Mandi & Makan Pagi Bersama", location: "Ruang Makan", uniform: "Pakaian Dinas / Bebas Rapi", category: "makan" },
      { time: "07.30 - 08.00", activity: "Apel Pagi & Pengecekan Kesiapan Pesiar / IB", location: "Lapangan Utama", uniform: "PDH / Pakaian Pesiar", category: "apel", notes: "Pengambilan apel oleh Dan Batch / Pawas" },
      { time: "08.00 - 17.30", activity: "Pelaksanaan Pesiar / Kegiatan Mandiri Kesatrian", location: "Luar Lemdik (Bagi Berhak) / Kampus", uniform: "Pakaian Sipil Rapi / Dinas", category: "mandiri", notes: "Wajib kembali tepat waktu, larangan miras/pelanggaran" },
      { time: "18.00 - 19.30", activity: "Kembali Masuk Kesatrian & Makan Malam", location: "Ruang Makan", uniform: "Pakaian Rapi", category: "makan", notes: "Pemeriksaan di pos jaga gerbang" },
      { time: "19.30 - 21.00", activity: "Refleksi Diri & Persiapan Akademik Pekan Depan", location: "Barak", uniform: "Bebas Rapi", category: "mandiri" },
      { time: "21.00 - 21.30", activity: "Apel Malam Pengecekan Pesiar & Personel Lengkap", location: "Lapangan", uniform: "Pakaian Terjadwal", category: "apel", notes: "Pawas mengecek seluruh personel hadir" },
      { time: "22.00 - 04.00", activity: "Lampu Padam & Istirahat Malam", location: "Barak", uniform: "Pakaian Tidur", category: "istirahat" },
    ]
  }
};
