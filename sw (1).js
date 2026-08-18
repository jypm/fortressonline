const CACHE_NAME = 'fortress-v2';
const FILES = [
  '/fortressonline/',
  '/fortressonline/index.html',
  '/fortressonline/manifest.json',
  '/fortressonline/icon-192.png',
  '/fortressonline/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
