// sw.js - Full Offline PWA
const CACHE_NAME = "i-sprint-cache-v3";

// كل الصفحات المهمة للموقع + الأصول
const ASSETS_TO_CACHE = [
  "/",
  "/about",
  "/services",
  "/pricing",
  "/projects",
  "/services",
  "/start",
  "/manifest.json",
  "/android/android-launchericon-192-192.png",
  "/android/android-launchericon-512-512.png",
  "/i.svg",
  "/preview.png",
  "/globals.css"
];

// Install - pre-cache
self.addEventListener("install", (_event) => {
  console.log("SW: Installed");
  self.skipWaiting();
  _event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

// Activate - clean old caches
self.addEventListener("activate", (_event) => {
  console.log("SW: Activated");
  _event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch - Offline-first
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(event.request)
        .then((networkResponse) => {
          // خزّن أي request جديد للمرات الجاية
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        })
        .catch(() => {
          // Offline fallback لأي صفحة مش موجودة في cache
          return caches.match("/");
        });
    })
  );
});
