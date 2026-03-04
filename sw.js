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
