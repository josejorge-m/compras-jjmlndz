// Service worker: guarda la app para que funcione sin conexión.
const VERSION = "compras-obra-v1";
const ARCHIVOS = [
  "./", "./index.html", "./app.js", "./base.js", "./manifest.webmanifest",
  "./icons/icon-192.png", "./icons/icon-512.png",
  "./vendor/xlsx.full.min.js", "./vendor/pdf.min.js", "./vendor/pdf.worker.min.js",
  "./vendor/mammoth.browser.min.js", "./vendor/jspdf.umd.min.js", "./vendor/jspdf.plugin.autotable.min.js"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((claves) =>
    Promise.all(claves.filter((c) => c !== VERSION).map((c) => caches.delete(c)))
  ).then(() => self.clients.claim()));
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then((resp) => resp || fetch(e.request).then((r) => {
      const copia = r.clone();
      caches.open(VERSION).then((c) => c.put(e.request, copia));
      return r;
    }).catch(() => caches.match("./index.html")))
  );
});
