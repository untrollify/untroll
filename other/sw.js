// VERSION: 3
self.addEventListener('install', function(e) {
  console.log('install');

  e.waitUntil(
    caches.open('UnTroll').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches
      .match(e.request)
      .then(response => response || fetch(e.request))
  );
});
