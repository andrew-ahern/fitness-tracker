/* FitLog Service Worker
   Caches the app shell so it works offline after first load. */

const CACHE_NAME = 'fitlog-v20';

const SHELL = [
  './index.html',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(SHELL))
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

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', event => {
  // Pass through external requests (GitHub API, CDN etc.) and test mode
  if (!event.request.url.startsWith(self.location.origin) || event.request.url.includes('test=true')) {
    return; // let browser handle it normally
  }
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
