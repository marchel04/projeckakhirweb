const cacheName = 'portfolio-v1';
const assets = [
  './index.html',
  './project.html',
  './manifest.json',
  './images/saya.jpg',
  './images/aws.png',
  './images/Pemrograman_Komputer.png',
  './images/html.jpg',
  './images/css.jpg',
  './images/java.jpg'
];


self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(assets);
      })
      .catch(error => {
        console.error('Gagal cache:', error);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request);
    })
  );
});
