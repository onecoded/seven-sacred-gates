// Offline-first service worker for the single-file app.
const CACHE = "seven-gates-v2";
const CORE = ["./", "./index.html", "./chakra-destiny.html", "./admin.html", "./manifest.json", "./icon.svg"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) =>
    Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
  ).then(() => self.clients.claim()));
});
// Network-first for same-origin pages (fresh when online), cache fallback offline.
// cache:"no-store" bypasses the browser's HTTP heuristic cache — without it,
// python http.server's missing Cache-Control headers let a stale app be served
// as "fresh" for days (bit us 2026-08-09).
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || !e.request.url.startsWith(self.location.origin)) return;
  e.respondWith(
    fetch(e.request, { cache: "no-store" }).then((res) => {
      const copy = res.clone();
      caches.open(CACHE).then((c) => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match(e.request).then((hit) => hit || caches.match("./chakra-destiny.html")))
  );
});
