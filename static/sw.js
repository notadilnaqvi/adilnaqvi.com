self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("static-v1").then((cache) => {
      cache.addAll(["index.html", "sip.webp", "favicon.ico"]);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => response)
      .catch(() => {
        if (new URL(event.request.url).pathname === "/") {
          return caches.match("index.html").then((cacheHit) => cacheHit);
        }
        return caches.match(event.request).then((cacheHit) => cacheHit);
      }),
  );
});
