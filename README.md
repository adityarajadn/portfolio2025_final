# Portfolio Website - React + TypeScript

Website portfolio yang dibuat dengan React dan TypeScript, menampilkan projects, skills, dan gallery.

## Struktur Folder

```
portofoliolagi/
├── public/
│   └── assets/
│       ├── images/          # Folder untuk semua gambar (project dan gallery)
│       └── icons/           # Folder untuk icon skills
├── src/
│   ├── components/          # Semua komponen React
│   │   ├── Hero.tsx         # Komponen hero section dengan gradient purple
│   │   ├── Hero.css
│   │   ├── Navigation.tsx   # Komponen navigation menu
│   │   ├── Navigation.css
│   │   ├── Projects.tsx     # Komponen untuk menampilkan projects
│   │   ├── Projects.css
│   │   ├── Skills.tsx       # Komponen untuk menampilkan skills
│   │   ├── Skills.css
│   │   ├── Gallery.tsx      # Komponen untuk menampilkan gallery
│   │   └── Gallery.css
│   ├── data/
│   │   └── portfolioData.ts # File berisi semua data portfolio
│   ├── types/
│   │   └── types.ts         # File berisi semua TypeScript interfaces
│   ├── App.tsx              # Komponen utama aplikasi
│   ├── App.css
│   ├── main.tsx             # Entry point aplikasi
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Cara Menjalankan

1. Install dependencies:
```bash
npm install
```

2. Jalankan development server:
```bash
npm run dev
```

3. Build untuk production:
```bash
npm run build
```

## Fitur

- ✅ Hero section dengan gradient purple
- ✅ Navigation menu (Projects, Skills, Contact)
- ✅ Game Projects section dengan card SteamHunt
- ✅ Skills section (Programming & Tools)
- ✅ Gallery section dengan grid layout
- ✅ Responsive design
- ✅ Smooth scrolling
- ✅ TypeScript untuk type safety

## Catatan Asset

Semua asset (gambar dan icon) saat ini menggunakan placeholder path. 
Silakan tambahkan gambar dan icon yang sesuai ke folder:
- `public/assets/images/` - untuk gambar project dan gallery
- `public/assets/icons/` - untuk icon skills
