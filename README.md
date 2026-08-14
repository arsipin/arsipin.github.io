# E-Portfolio — Muhammad Arifin

E-portfolio statis berbasis HTML, CSS, dan JavaScript murni (tanpa framework/build tool) untuk Muhammad Arifin, mahasiswa Sistem Informasi dengan minat di **UI/UX Design** dan **Database Administration**.

## Struktur Folder

```
e-portfolio/
│
├── index.html              # Halaman utama / Beranda
├── about.html               # Tentang Saya
├── portfolio.html           # Daftar proyek
├── experience.html          # Pengalaman kerja / organisasi
├── contact.html              # Kontak (form tervalidasi via JS)
│
├── assets/
│   ├── css/
│   │   ├── style.css         # CSS utama (tokens, komponen, layout)
│   │   └── responsive.css    # Override tampilan mobile/tablet
│   ├── js/
│   │   └── script.js         # Nav toggle, scroll reveal, validasi form, dll
│   ├── images/
│   │   ├── profile.jpg.svg   # PLACEHOLDER — ganti dengan profile.jpg asli
│   │   ├── project1.jpg.svg  # PLACEHOLDER
│   │   ├── project2.jpg.svg  # PLACEHOLDER
│   │   ├── project3.jpg.svg  # PLACEHOLDER
│   │   └── background.jpg.svg# PLACEHOLDER (belum dipakai di markup)
│   └── documents/
│       ├── CV.pdf            # BELUM ADA — tambahkan file aslimu
│       └── sertifikat.pdf    # BELUM ADA — tambahkan file aslimu
│
├── pages/
│   ├── project-detail1.html  # Detail proyek 1 (contoh: UI/UX)
│   ├── project-detail2.html  # Detail proyek 2 (contoh: Database)
│   └── project-detail3.html  # Detail proyek 3 (contoh: Mobile UX)
│
└── README.md
```

## Cara Mengganti Placeholder

### 1. Foto & Gambar
File gambar saat ini adalah **SVG placeholder** dengan ekstensi `.jpg.svg` (misal `profile.jpg.svg`) supaya tetap bisa dibuka sebagai gambar valid sebelum kamu upload foto asli.

Untuk mengganti:
1. Siapkan foto asli, beri nama persis: `profile.jpg`, `project1.jpg`, `project2.jpg`, `project3.jpg`.
2. Taruh di folder `assets/images/`.
3. Cari-ganti (find & replace) semua teks `profile.jpg.svg` → `profile.jpg`, `project1.jpg.svg` → `project1.jpg`, dst, di semua file HTML (index.html, about.html, portfolio.html, pages/*.html).
4. Hapus file `.svg` placeholder yang sudah tidak dipakai.

### 2. Dokumen (CV & Sertifikat)
Tambahkan file `CV.pdf` dan `sertifikat.pdf` ke folder `assets/documents/`. Link unduh di tombol "Unduh CV" dan halaman Pengalaman sudah mengarah ke path tersebut.

### 3. Konten Proyek
Buka `portfolio.html` dan `pages/project-detail1.html` (dst). Ganti:
- Judul proyek
- Deskripsi singkat
- Tag teknologi (`<span class="tag">...</span>`)
- Isi studi kasus: Latar Belakang, Proses, Hasil

Untuk menambah proyek baru, salin satu blok `<article class="project-card">...</article>` di `portfolio.html`, lalu buat file detail baru di `pages/` mengikuti pola `project-detail1.html`.

### 4. Data Pribadi
Data yang sudah dipakai di seluruh halaman:
- Nama: Muhammad Arifin
- IPK: 3.60
- Semester: 6
- Program Studi: Sistem Informasi, Universitas Bina Sarana Informatika
- Instagram: [@arsip.in_9](https://instagram.com/arsip.in_9)

Ganti alamat email di `contact.html` (saat ini `arifin@email.com`) dengan email aktif.

### 5. Form Kontak
Form di `contact.html` saat ini **hanya tervalidasi di sisi client (JavaScript)** dan belum terhubung ke backend/email service apa pun — submit hanya menampilkan pesan sukses simulasi. Untuk membuatnya benar-benar mengirim pesan, hubungkan ke layanan seperti Formspree, EmailJS, atau backend sendiri.

## Fitur JavaScript (`assets/js/script.js`)
- **Navigasi mobile**: tombol hamburger untuk membuka/menutup menu di layar kecil.
- **Active link**: menyorot menu sesuai halaman yang sedang dibuka.
- **Scroll reveal**: elemen muncul dengan animasi halus saat di-scroll ke pandangan.
- **Back to top**: tombol muncul setelah scroll, klik untuk kembali ke atas.
- **Skill bar animation**: bar kemampuan di halaman About terisi otomatis saat terlihat.
- **Validasi form kontak**: memeriksa nama, format email, dan pesan sebelum "terkirim".

## Palet Warna

| Token | Hex | Penggunaan |
|---|---|---|
| `--color-white` | `#FFFFFF` | Background utama |
| `--color-bg-soft` | `#F4F9FF` | Background section selang-seling |
| `--color-blue-primary` | `#5BA3D9` | Aksen utama, tombol, link aktif |
| `--color-blue-secondary` | `#7FC4E8` | Aksen sekunder, gradient |
| `--color-blue-deep` | `#1B3A5C` | Heading, teks penting, footer |
| `--color-border` | `#E1EDF9` | Garis pembatas, border card |

## Tipografi
- **Space Grotesk** — heading/display
- **Inter** — body text
- **JetBrains Mono** — label kecil, angka, eyebrow text (kesan teknis/data)

Font dimuat dari Google Fonts via `<link>` di setiap halaman.

## Menjalankan Secara Lokal
Tidak perlu instalasi apa pun. Buka `index.html` langsung di browser, atau jalankan local server sederhana (disarankan agar path relatif berjalan konsisten):

```bash
# Python
python3 -m http.server 8000

# atau Node.js
npx serve .
```

Lalu buka `http://localhost:8000`.
