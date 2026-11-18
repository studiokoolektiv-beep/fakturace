// Service worker obalové stránky Fakturace KOOLEKTIV. Díky němu jde stránku nainstalovat jako aplikaci.
// Nic neukládá do mezipaměti: appka potřebuje vždy aktuální data, takže všechno jde rovnou na síť.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  // Jen stránky této appky. Rám s Google appkou je jiný původ a service worker ho neřeší.
  if (e.request.mode === 'navigate') e.respondWith(fetch(e.request, { cache: 'no-store' }));
});
