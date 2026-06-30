# TimDev — Proyek Website Kelompok

Landing page sederhana yang dikembangkan secara **kolaboratif** menggunakan
**Git** dan **GitHub** sebagai latihan pengelolaan pengembangan sistem.

## 🚀 Fitur

- Struktur halaman semantik (HTML5)
- Desain responsif (CSS) — menyesuaikan desktop & ponsel
- Interaksi JavaScript: toggle menu mobile, smooth scroll, render anggota tim dinamis

## 📁 Struktur Proyek

```
website-tim/
├── index.html        # Struktur & konten halaman
├── css/
│   └── style.css     # Styling dan layout responsif
├── js/
│   └── script.js     # Fitur interaktif
├── .gitignore
└── README.md
```

## 👥 Anggota Tim

| Nama          | Peran                   |
| ------------- | ----------------------- |
| Andi Pratama  | HTML & Struktur         |
| Budi Santoso  | CSS & Tampilan          |
| Citra Dewi    | JavaScript & Interaksi  |

## ▶️ Cara Menjalankan

Tidak perlu instalasi. Cukup buka berkas `index.html` di peramban (browser),
atau jalankan server statis sederhana:

```bash
# dengan Python
python -m http.server 8000
# lalu buka http://localhost:8000
```

## 🛠️ Alur Kolaborasi Git

Setiap anggota mengerjakan bagiannya dan melakukan commit ke repository,
sehingga `git log` menampilkan riwayat perkembangan proyek secara berurutan.
