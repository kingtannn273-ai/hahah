# Royale GameHub — PWA + Capacitor Android

Demo katalog game/entertainment non-judi dengan UI dark purple premium.

## Jalankan lokal

```bash
npm install
npm run dev
```

Build production:

```bash
npm run build
npm run preview
```

## Deploy ke Vercel

1. Push folder ini ke GitHub.
2. Import repository ke Vercel.
3. Framework: Vite (biasanya terdeteksi otomatis).
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

`vercel.json` sudah disiapkan untuk SPA routing.

## Install sebagai PWA

Buka domain Vercel di Chrome Android/Desktop. Pilih **Install app / Add to Home Screen**. Tombol INSTALL di navbar akan memakai `beforeinstallprompt` bila browser menyediakannya.

## Build APK Android

Prasyarat: Node.js, Android Studio, JDK yang kompatibel dengan versi Capacitor yang dipasang.

```bash
npm install
npm run build
npx cap add android
npx cap sync android
npx cap open android
```

Di Android Studio pilih emulator/device lalu Build APK.

## Catatan

Isi katalog pada `src/main.jsx` bersifat demo non-judi dan dapat diganti dengan game, portfolio, atau produk entertainment yang legal.
