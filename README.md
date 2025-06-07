# 📚 Bookshelf App

Aplikasi web sederhana untuk mengelola koleksi buku pribadi. User dapat menambahkan buku baru, menandai buku sebagai sudah dibaca atau belum dibaca, serta menghapus buku dari koleksi. Project ini dibuat sebagai submission dari kelas Dicoding "Belajar Membuat Front-End Web untuk Pemula".

## 🌟 Fitur

- **Tambah Buku Baru**: Form untuk menambahkan buku dengan judul, penulis, dan tahun
- **Kategorisasi Buku**: Pisahkan buku yang sudah dibaca dan belum dibaca
- **Pindah Status**: Pindahkan buku antar kategori (sudah dibaca ↔ belum dibaca)
- **Hapus Buku**: Hapus buku dari koleksi dengan konfirmasi
- **Pencarian**: Cari buku berdasarkan judul
- **Local Storage**: Data tersimpan di browser secara otomatis
- **Responsive Design**: Tampilan optimal di berbagai ukuran layar

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Struktur aplikasi
- **CSS3**: Styling dan layout responsif
- **JavaScript (ES6+)**: Logika aplikasi dan DOM manipulation
- **Web Storage API**: Penyimpanan data lokal

## 🚀 Demo

🔗 **Live Demo**: [https://khoerunnisasy.github.io/bookshelf-app/](https://khoerunnisasy.github.io/bookshelf-app/)

## 📁 Struktur Project

```
bookshelf-app/
├── index.html          # Halaman utama aplikasi
├── src/
   ├── styles/
      └──  style.css    # File CSS utama
   ├── main.js          # JavaScript utama
└── README.md           # Dokumentasi project
```

## 💻 Cara Menjalankan

1. **Clone repository:**
   ```bash
   git clone https://github.com/khoerunnisasy/bookshelf-app.git
   ```

2. **Masuk ke folder project:**
   ```bash
   cd bookshelf-app
   ```

3. **Buka file `index.html` di browser**
   - Double-click file `index.html`, atau
   - Gunakan Live Server di VS Code untuk development

## 📖 Cara Menggunakan

1. **Menambah Buku:**
   - Isi form dengan judul, penulis, dan tahun terbit
   - Centang "Selesai dibaca" jika buku sudah selesai dibaca
   - Klik tombol "Masukkan Buku ke rak"

2. **Mengelola Buku:**
   - Klik "Selesai dibaca" untuk memindah buku ke rak "Selesai dibaca"
   - Klik "Belum selesai dibaca" untuk memindah ke rak "Belum selesai dibaca"
   - Klik "Hapus buku" untuk menghapus buku dari koleksi

3. **Mencari Buku:**
   - Gunakan kolom pencarian untuk mencari buku berdasarkan judul
   - Hasil pencarian akan ditampilkan secara real-time

## 🎯 Konsep yang Dipelajari

Project ini mengimplementasikan konsep-konsep dari kelas Dicoding:
- **DOM Manipulation**: Menambah, mengubah, dan menghapus elemen HTML
- **Event Handling**: Menangani event click, submit, dan input
- **Web Storage**: Menggunakan localStorage untuk persistensi data
- **ES6 Features**: Arrow functions, template literals, destructuring
- **JSON**: Serialisasi dan deserialisasi data
- **Responsive Web Design**: CSS Flexbox dan Media Queries

## 📱 Responsivitas

Aplikasi ini dioptimalkan untuk berbagai ukuran layar:
- **Desktop** (> 1024px): Layout 2 kolom
- **Tablet** (768px - 1024px): Layout adaptif
- **Mobile** (< 768px): Layout 1 kolom, optimasi touch

## 🎨 Design Decisions

- **Color Scheme**: Menggunakan palet warna yang eye-friendly
- **Typography**: Font yang mudah dibaca untuk pengalaman membaca yang nyaman
- **UX/UI**: Interface yang intuitif dan mudah digunakan
- **Accessibility**: Kontras warna yang baik dan semantic HTML

## 📧 Kontak

**Khoerunnisa** - [@khoerunnisasy](https://github.com/khoerunnisasy)

Project Link: [https://github.com/khoerunnisasy/bookshelf-app](https://github.com/khoerunnisay/bookshelf-app)

## 🙏 Acknowledgments

- **Dicoding Indonesia** untuk materi pembelajaran yang komprehensif
- **MDN Web Docs** untuk referensi JavaScript dan Web APIs
- **Community** yang selalu memberikan feedback dan support

## 📈 Future Improvements

- [ ] Export/Import data buku ke file JSON
- [ ] Kategori buku berdasarkan genre
- [ ] Rating dan review untuk setiap buku
- [ ] Statistik reading progress
- [ ] Dark mode theme
- [ ] Integrasi dengan Google Books API

---

⭐ **Star this repository if you find it useful!**

> *"Setiap buku yang dibaca adalah jendela menuju dunia baru - mari kelola koleksi buku kita dengan lebih baik!"*
