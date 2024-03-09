'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fb5afce4c2bc0d86719a386d125ec734",
"assets/AssetManifest.bin.json": "d5b6ba7fd9786c45cfc40cb5ae7be325",
"assets/AssetManifest.json": "28acd63de0bdac773d492e3ec67eb60b",
"assets/assets/android-30.png": "ae2598323d00b3bc0feb2dada5b709ef",
"assets/assets/apple-30.png": "3640a6c568996e83103de893fba93c48",
"assets/assets/css3-48.png": "9d089bd0b10be9772b151c76fabe85ca",
"assets/assets/dart-48.png": "918e7c35823c7ad268ba831c6e7eaa64",
"assets/assets/datastructure-48.png": "4ffc74b88b45e1e984805f96edfe7946",
"assets/assets/design.png": "6aaec412d8837ac9a83f03f453877606",
"assets/assets/develop.png": "471c2c94d5d04112086eba9fd78c6809",
"assets/assets/express-js-48.png": "3235f541bd97656a5579f11436274553",
"assets/assets/express-js-482.png": "9df9504ea828fdf26e5dff04d7a963af",
"assets/assets/flutter-48.png": "8efb797d33c586ef3cb71d4083dd1fdb",
"assets/assets/github-30.png": "4d55bd74fca11908acb8196e565d5ad7",
"assets/assets/github-48.png": "ea29123fff67fb1a7214700054b5567f",
"assets/assets/github.png": "96becda6b561aa689d0e5e064d735a62",
"assets/assets/html5-48.png": "27b0afc8d7069fad77a6ece74eeb7e83",
"assets/assets/instagram-48.png": "1ac2f5606a4467a8b1c6aae0932d8c54",
"assets/assets/java-48.png": "7013d3cd840b6bed9697daf954c4c3e2",
"assets/assets/js-48.png": "d8b359bb45cbe32632e8fc7901b27615",
"assets/assets/leetcode-48.png": "867384c90ec50e8ddc92495cbca25210",
"assets/assets/linkedin-48.png": "feb95d16f213445a0b9ea75360d3180b",
"assets/assets/linkedin.png": "f293b6067f8440ed527a56495e83ed20",
"assets/assets/logo.png": "f0d46c757af152a7feb7fd1ae7d25568",
"assets/assets/logo1.png": "26c572a447af0ff225c357ca27026983",
"assets/assets/mongodb-48.png": "25b283948545fd5296ec1465a4b2fd7a",
"assets/assets/nodejs-48.png": "25578617761bc5f6a1f8d5fe69ae3889",
"assets/assets/person.png": "ab02407310f7ce33858f8f73077ce0cb",
"assets/assets/postgresql-48.png": "52231567c0fbe562894dc4e2d1c41fb5",
"assets/assets/promote.png": "2bd8adcad79a4ebb80888d1a0583b3c4",
"assets/assets/python-48.png": "6841951dd3623f17a3f6a880c3f4f0a0",
"assets/assets/react-48.png": "3f13950f5b423b82a435afeb633a9e95",
"assets/assets/resume.pdf": "a1773fa9e9996aa039c500a8a5e9a876",
"assets/assets/splash.json": "cf1ce17af85d355cfb536c102764b2c6",
"assets/assets/sql.png": "41cc30ec821c7eb3d133c2412d7d8e81",
"assets/assets/website-30.png": "57855b334994321f11941a2c589cc922",
"assets/assets/work-1.png": "3452e13c6af899dd967b9fdc88cdc3cf",
"assets/assets/work-2.png": "c57eab29e3373002e46733eb6c97046b",
"assets/assets/work-3.png": "0b94979a3fd7e6b9b934a5d4d019c9b8",
"assets/assets/work-4.jpg": "6175a0135adf2326f58795703ad9509a",
"assets/assets/work-5.png": "4e59b5f200f0abcf8e3ebdeca5a19ccd",
"assets/assets/work-6.jpg": "9a329b80c6dfaea5fd73becbe61d1a90",
"assets/assets/work-7.png": "b0b2a4be9c24cf7a36c51f29f6709eb5",
"assets/assets/work-8.png": "e48dce7b669836e1e977f69c5dd15a89",
"assets/assets/work-9.jpg": "9906f305d03bc0db9b22e8b5da79b128",
"assets/assets/write.png": "dc4f0d3df06d5fc9b13b9168b88e2560",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "525181429ba9dbce43bf899f88337a87",
"assets/NOTICES": "c08bc947726675862ff789d1e1cc2633",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "adcab57fdaab89c933ac9e75e67c8bef",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "59744c6c24134bab2f71e47507646b81",
"icons/Icon-512.png": "6aafa67ed16b71d19e8c19ab6681b68e",
"icons/Icon-maskable-192.png": "59744c6c24134bab2f71e47507646b81",
"icons/Icon-maskable-512.png": "6aafa67ed16b71d19e8c19ab6681b68e",
"index.html": "877b53def48baa13c1ed9db605a8ffba",
"/": "877b53def48baa13c1ed9db605a8ffba",
"main.dart.js": "d2c1c55960c78232ce3a0c1f05e7dfab",
"manifest.json": "6c2921dd496bac31a6f652f8ced600e9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
