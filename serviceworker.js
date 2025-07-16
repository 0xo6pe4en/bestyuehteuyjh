const CACHE_NAME = 'melody-school-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './icon.png',
  './music-school.jpg',
  './ph1.jpg',
  './ph2.jpg',
  './ph3.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});