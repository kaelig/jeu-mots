const cacheName = 'french-words-v1';
const staticAssets = [
  './',
  './styles.css',
  './script.js',
  './win-sound.mp3',
  './Dancing_Script_Latin-700.woff2',
  './Dancing_Script_Latin-ext-700.woff2',
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
