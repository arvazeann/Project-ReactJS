# Profil Tim Project

README ini dibuat supaya anggota kelompok paham alur project, tahu flow kode yang ada di folder `src`, dan tahu bagian mana yang cukup diisi kontennya saja.

## Tujuan Project

Project ini adalah website profil anggota kelompok.

Flow umumnya seperti ini:

1. Halaman utama menampilkan daftar anggota tim.
2. Saat nama anggota dipilih, user masuk ke halaman detail profil anggota.
3. Semua data anggota diambil dari 1 file pusat, jadi teman-teman cukup isi data di sana.

## Flow Kode Di `src`

Urutan alur project dari awal sampai tampil di browser:

1. `src/main.tsx`
   File entry point React. Di sini app dijalankan dan dibungkus dengan `BrowserRouter` supaya routing bisa dipakai.

2. `src/App.tsx`
   File utama untuk route dan halaman home.
   Di sini ada:
   - route `/` untuk halaman utama
   - route `/anggota/:name` untuk halaman detail anggota
   - tampilan daftar anggota yang dibuat dari data `members`

3. `src/data/members.ts`
   Ini sumber data utama semua anggota.
   Data di file ini dipakai untuk:
   - card anggota di halaman home
   - halaman detail profil masing-masing anggota

4. `src/pages/Anggota.tsx`
   File ini membaca parameter URL `:name`, lalu mencocokkan dengan data anggota dari `memberMap`.
   Setelah cocok, halaman ini menampilkan:
   - foto
   - nama
   - NIM
   - kelas
   - jurusan
   - domisili
   - tagline
   - deskripsi diri

5. `src/index.css`
   File ini memanggil Tailwind CSS supaya styling project aktif.

## Hubungan Antar File

Supaya gampang dipahami, alurnya begini:

`main.tsx` -> menjalankan app

`App.tsx` -> menampilkan halaman utama + route ke detail anggota

`members.ts` -> menyimpan data semua anggota

`Anggota.tsx` -> mengambil data anggota berdasarkan `slug` dari URL lalu menampilkannya

Jadi pusat isi kontennya ada di `src/data/members.ts`.

## File Yang Perlu Diisi Teman Kelompok

Kalau teman-teman kelompok hanya mau isi konten, fokus ke dua tempat ini saja:

- `src/data/members.ts`
- `src/assets/`

Artinya:

- foto anggota ditaruh di `src/assets/`
- data profil anggota diisi di `src/data/members.ts`

## Cara Pakai Untuk Kelompok

### 1. Jalankan project

```bash
npm install
npm run dev
```

### 2. Tambah foto anggota

Simpan foto anggota ke folder:

```bash
src/assets/
```

### 3. Import foto di `src/data/members.ts`

Contoh:

```ts
import fotoBudi from "../assets/budi.jpg";
```

### 4. Isi object anggota di array `members`

Contoh bentuk data:

```ts
{
  slug: "budi-santoso",
  nama: "Budi Santoso",
  nim: "123456789",
  kelas: "T2D",
  jurusan: "Teknologi Informasi",
  domisili: "Malang",
  tagline: "Suka belajar hal baru di dunia teknologi.",
  about: "Isi deskripsi lengkap tentang anggota di sini.",
  image: fotoBudi,
}
```

## Arti Tiap Bagian Data

- `slug`: id unik untuk URL, pakai huruf kecil dan tanda `-`
- `nama`: nama lengkap anggota
- `nim`: NIM anggota
- `kelas`: kelas anggota
- `jurusan`: jurusan atau prodi
- `domisili`: asal / tempat tinggal
- `tagline`: kalimat singkat profil
- `about`: deskripsi lengkap anggota
- `image`: foto yang sudah di-import

## Cara Kerja Saat Menambah Anggota

Kalau kalian menambah 1 object baru di `members`, maka:

1. nama anggota otomatis muncul di halaman home
2. link ke halaman detail anggota otomatis ikut dibuat
3. halaman detail akan mengambil data berdasarkan `slug`

Jadi tidak perlu membuat halaman baru satu per satu.

## Catatan Penting

- `slug` setiap anggota harus berbeda
- nama file foto lebih baik dibuat singkat dan rapi
- kalau hanya isi konten, tidak perlu ubah file config
- kalau ingin aman, cukup edit `src/data/members.ts` dan tambahkan foto di `src/assets/`

## Singkatnya

Kalau teman kelompokmu bingung, kasih tahu seperti ini:

1. jalanin project pakai `npm run dev`
2. taruh foto di `src/assets`
3. buka `src/data/members.ts`
4. copy data anggota yang sudah ada
5. ganti isinya dengan data masing-masing

Sisanya akan mengikuti flow project yang sudah ada.
