# PERSUSDIK — Portal Interaktif Peraturan Khusus Serdik P3MD Batch 1 Soedirman (TA 2026)

Portal edukasi interaktif resmi berbasis web untuk membantu seluruh Peserta Didik (Serdik) **Program Presiden untuk Pemimpin Masa Depan (P3MD) Batch 1 / Soedirman** memahami dan menaati setiap butir **Peraturan Khusus Peserta Didik (Perkhusserdik)**.

---

## ??? Fitur Utama Portal

1. **Tanya Jawab Aturan Serdik (FAQ Interaktif)**:
   - Kompilasi jawaban resmi atas skenario kehidupan harian Serdik (standar cukur rambut 0-1-2 cm, larangan rokok/vape, etika ruang makan senyap, jam kantin hari Rabu & Jumat, aturan gawai & medsos, prosedur berobat, dan batasan wewenang anti-bullying).
   - Dilengkapi rujukan pasal resmi dan pencarian kata kunci instan.
2. **Tabel Jadwal Harian Acuan (Pasal 18)**:
   - Jadwal terstruktur tanpa widget pengingat jam untuk: Senin–Kamis (Reguler), Rabu (Olahraga & Kantin), Jumat (Ibadah, Kurve & Kantin), dan Sabtu–Minggu (Mandiri & Hak Pesiar/IB).
3. **Naskah Resmi & Penampil PDF Terintegrasi**:
   - Teks naskah berlandaskan `PERSUSDIK.md` dengan navigasi per Bab (BAB I s.d. BAB VIII).
   - Tombol unduh langsung berkas resmi `PERATURAN KHUSUS SERDIK P3MD BATCH 1 2026.pdf` (443 KB).
   - Penampil dokumen PDF tersemat (in-app modal viewer) serta opsi **Mode Split Screen** berdampingan di layar laptop/desktop.
4. **Matriks Disiplin & Simulator Eskalasi Pelanggaran (Pasal 38)**:
   - Klasifikasi Pelanggaran Ringan, Sedang, dan Berat.
   - Simulator interaktif pengulangan sanksi ($1\times \text{ Ringan} \rightarrow 2\times \text{ Sedang} \rightarrow 3\times \text{ Berat/Drop Out}$).
5. **Struktur Korps Siswa (44 Jabatan)**:
   - Rantai komando fungsional Serdik dan penegasan batasan kewenangan (dilarang menghukum fisik rekan sesama serdik).
6. **Uji Kesiapan Mandiri (Kuis 10 Skenario)**:
   - Uji pemahaman mandiri dengan umpan balik dan pembahasan pasal seketika.
7. **Pencarian Kilat (`Ctrl+K` / `?K`)**:
   - Menelusuri pasal, FAQ, dan matriks sanksi dalam hitungan detik.

---

## ?? Panduan Menjalankan Secara Lokal

```bash
# 1. Pasang dependensi
npm install

# 2. Jalankan server lokal (development)
npm run dev

# 3. Bangun paket produksi (static build)
npm run build

# 4. Pratinjau hasil build
npm run preview
```

---

## ?? Panduan Deployment

### 1. Deployment ke GitHub Pages (Otomatis)
Proyek ini sudah dilengkapi dengan alur kerja otomatis GitHub Actions (`.github/workflows/deploy.yml`):
1. Dorong (*push*) seluruh kode ke repositori GitHub Anda di cabang `main`.
2. Buka repositori di GitHub ? **Settings** ? **Pages**.
3. Pada bagian **Build and deployment** ? **Source**, pilih **GitHub Actions**.
4. GitHub Actions akan otomatis membangun dan merilis website ke alamat `https://<username>.github.io/<nama-repo>/`.

### 2. Deployment ke Vercel (1-Click)
1. Buka [Vercel](https://vercel.com) dan pilih **Add New Project**.
2. Impor repositori GitHub `persusdik`.
3. Vercel akan otomatis mengenali Vite dari berkas `vercel.json` dan menjalankan `npm run build`.
4. Klik **Deploy** dan website akan langsung aktif dalam beberapa detik.
