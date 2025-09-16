const CACHE_NAME = 'igt-website-v2.0.0';
const urlsToCache = [
  '/',
  '/images/precision-agriculture.webp',
  '/images/agriculture-drones.webp',
  '/images/ai-agriculture.webp',
  '/images/ai-robotics.webp',
  '/images/cybersecurity.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Always fetch from network first
        return response;
      })
      .catch(() => {
        // Fallback to cache only if network fails
        return caches.match(event.request);
      })
  );
});
