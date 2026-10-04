// Service worker minimal — cukup untuk memenuhi syarat "installable" PWA.
// Tidak melakukan caching agresif supaya data presensi selalu fresh dari server.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Pass-through sederhana: selalu ambil dari network, tidak ada offline cache.
  // Ini aplikasi yang butuh data real-time (presensi), jadi caching offline sengaja dihindari.
  event.respondWith(fetch(event.request));
});
