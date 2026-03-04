**2. Buat file bernama `sw.js`**
File Service Worker ini memastikan aplikasi dianggap layak diinstal oleh Google Chrome/Safari. Isinya cukup ini saja:
```javascript
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Hanya Service Worker pass-through standar agar lolos syarat PWA
});

**Selesai!** Jika ketiga file (`index.html`, `manifest.json`, dan `sw.js`) sudah ada di dalam satu folder dan Anda unggah ke Vercel, maka saat dibuka melalui Chrome (di HP atau Laptop), akan muncul **tombol hijau "Install App"** di pojok kanan atas (serta di halaman depan saat Anda baru membuka aplikasi).
