const CACHE_NAME = 'fitlog-v44';
const CACHED_ASSETS = ['./manifest.json'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(CACHED_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Skip non-origin and test mode requests
  if (!event.request.url.startsWith(self.location.origin)) return;

  // Always fetch index.html fresh — ensures updates are instant
  if (event.request.url.includes('index.html') || event.request.url.endsWith('/fitness-tracker/') || event.request.url.endsWith('/fitness-tracker')) {
    event.respondWith(fetch(event.request).catch(() => caches.match('./index.html')));
    return;
  }

  // Cache-first for other assets
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});
