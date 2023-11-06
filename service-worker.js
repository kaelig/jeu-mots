const cacheName = 'french-words-v1';
const staticAssets = [
  './', // Cache the main HTML file
  './styles.css',
  './script.js',
  './win-sound.mp3',
  // Add other assets here
];

self.addEventListener('install', async event => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
  event.respondWith(cachedResources(event.request));
});

async function cachedResources(request) {
  const cached = await caches.match(request);
  return cached || fetch(request);
}
