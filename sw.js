const cacheName = "restaurant-v1";
// Files to cache:
const cacheAssets = [
  "./",
  "./index.html",
  "./restaurant.html",
  "./css/styles.css",
  "./js/main.js",
  "./data/restaurants.json",
  "./js/dbhelper.js",
  "./js/restaurant_info.js",
  "./img/Offline.jpg"
];

/**
 * Install Event Listener
 * Open a cache and cache needed assets
 */
self.addEventListener("install", function(evt) {
  evt.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log("Service Worker: Caching Assets");
      return cache.addAll(cacheAssets).catch(error => {
        console.log("Caches open failed: " + error);
      });
    })
  );
});

/**
 * Removing outdated caches
 */
self.addEventListener("activate", function(evt) {
  evt.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(function(thisCacheName) {
            return (
              cacheName.startsWith("restaurant-") && thisCacheName != cacheName
            );
            console.log(
              "Service Working: Removing Outdated Caches from",
              thisCacheName
            );
          })
          .map(function(cacheName) {
            return caches.delete(cacheName);
          })
      );
    })
  );
});

/**
 * Respond to requests
 */
self.addEventListener("fetch", evt => {
  evt.respondWith(
    caches
      .match(evt.request)
      .then(response => {
        // Return cached version or fetch
        return response || fetch(evt.request);
      })
      .catch(error => {
        if (event.request.url.includes(".jpg")) {
          // <-- new
          return caches.match("/img/Offline.jpg"); // <-- new
        } // <-- new
        return new Response("Not connected to the internet", {
          status: 404,
          statusText: "Not connected to the internet"
        });
      })
  );
});
