let cacheName = 'canada-arrival';
let filesToCache = ['/', '/index.html', '/style.css', '/main.js'];

// Starting Service worker and cache all the app's content
self.addEventListener('install', (e) => {
	e.waitUntil(
		caches.open(cacheName).then((cache) => {
			return cache.addAll(filesToCache);
		}),
	);
});

// Serve cache content when offline
self.addEventListener('fetch', (e) => {
	e.respondWith(
		caches.match(e.request).then((response) => {
			return response || fetch(e.request);
		}),
	);
});
