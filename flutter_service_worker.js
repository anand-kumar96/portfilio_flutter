'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "83d043db4fdfe6882fb7f01a09d92b11",
".git/config": "82674c5a19dcd543bc1f083a4687c4e1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "64b4cb8cca3e86f2a4eda2cd6a46aa71",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e8c5ed81a77dd5c853e72ae6642dbf51",
".git/logs/refs/heads/main": "e8c5ed81a77dd5c853e72ae6642dbf51",
".git/logs/refs/remotes/origin/main": "5abd9417efdc9835398aaf1b02ef5a87",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/20d1240ceb0fd763c7a9f7dec834e943995624": "00f3d2f00ce88d3728c0fcc4967c3746",
".git/objects/07/737fc16049e23d8261e83493131705c380eb6f": "7d7180868899c93ac301deecc5a13df2",
".git/objects/08/d3099ce96f4d93cc9f65c4764b5cd4e3144b08": "9a5dfe4c00fe61950e8549b82a079c15",
".git/objects/09/5a1a9f0506fa670f7102c98161d90ed9e24bff": "c310fb349bee0eb53b8e92d10aab2354",
".git/objects/0a/13e7f94ea039860f4f2c12caa558fa14ae3add": "27ae8213facbfd630201fd827cc2319e",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/52223465c5d5b93c4891acec5aff81a2f7909b": "9b4e88b9b3a4b4ff25d074255a311118",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/15/6075b402b57db5c1b057ffd56b624ac817e8f2": "47d9ddf66f691687c1e02217fee6bb4d",
".git/objects/1a/b7bc1d1984ef5878e3b137b781da26602b3a97": "1e564ff98c22d4b3df82148a700650c0",
".git/objects/1b/93e9eba7badfe24113b2df4ce44056f0fe0a0a": "f9c09aa0c1d7c5d57d6aacf76da5f2db",
".git/objects/1b/eaa418d249bff241fd3b3b3a1cbbb6de48c32f": "f1b7e79346b986953b32b892a5b956aa",
".git/objects/1f/5d200d19a1df6edad537da6874f83df31755f5": "a47bbc45f30b69e5c3fe4901cae6a6cb",
".git/objects/20/10b748f0da980fc0d28b5d69ba710c97548c57": "c54d12985cced45638347a4d0dba9298",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/27/ccce5860ac0a2ac3c49ea907abd1347421f9ec": "a4a40521b2c34b9f7052dc114941cc0b",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2f/0998370c984cd7369585fa2d6688cf081f62ee": "f8bcbc1f00cb544f10ac21437acc658a",
".git/objects/30/d57d411d8fb4a097b06d28712593bd364ed9c1": "27ffd6af65d2685563f1027d9e39ed1e",
".git/objects/32/9f240612cd60e4f529fda72cbd316cb6d9b9e1": "9b39fd00c0ef7ae9ddad57dce7853fda",
".git/objects/34/76bd3185d850c2be2f2f7ffb86861c5f0525f4": "e2bc10912a1901cc02af086e7e2c12eb",
".git/objects/35/824f7bbb400461371a7fa83108d426b0dbc8d0": "b9b5def9c7e550656968f21e782005a5",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3a/8067dd9edb52e40bfeec0477d724008c1b0a46": "7931879cd3791400b76a8488dbeec622",
".git/objects/3e/524969df6849f551e0be45af92f47e7426a9fb": "4812bd41adbbe8608459189b04389442",
".git/objects/3e/db5d4cba99d0ca194bcf0200d47f2964446f50": "7f2c5d2141a32006df49c0afe2746447",
".git/objects/3f/8bba346ef7fffc338983658cfbbecc01e2c652": "353fa52975f69bd626185b857f86c2aa",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/50/c9dc7e704fa74e6462e37387d12dd827241750": "b10fa1763a40a0a0a04b69667dc3d78d",
".git/objects/50/d3a9ab68acefda2e03ca0109aeb17ad6a12096": "8411abee8ad12dac83bbbedecaf78389",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/57/a08bac34a8acdfe15f422ed03e8b2bd68b007d": "6c0bd716563294aff89a0deb68910c7d",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5d/d4229be00119058b40a3d3068995564ad1f149": "c9c47bb1feb885af67ecb44b479edea7",
".git/objects/5e/0ffcbd01c278419a43254186cdc18a8b81b2d0": "fc28f63f9e27dbbefe7aaa193005fbb3",
".git/objects/64/ec4822aa03ffedaebdb5899fd347513b2fc9be": "a78505267f7d8ee2f573cccbb9f6490a",
".git/objects/66/10a1dc262bcfb89c2e365d29e42d847f46ff39": "54bb247ce50d4d10f3d319074f0413f3",
".git/objects/67/da574075038b1415a99a093d7048522157337b": "20e09819fe2a698b07d4714cbe9b9f25",
".git/objects/71/810d61331d201aa1e2899ca66375653d671c66": "fa0ccdefbb68e4de5355969b9cb701bc",
".git/objects/75/b8267e5b5a8460ddc5cd347cb7c6be5fc17f87": "1f0b437de7f9bee03e356f8f06c3dee0",
".git/objects/75/c7a420ee1cabe0dbd234c1dec47dd0fb050b9e": "7a4b46c72f0663ed58c94ad0cc521436",
".git/objects/79/41946ddc22d4281448b0fdcb5399e7e6680716": "48a24ae63a26c2a44c60e58360dad369",
".git/objects/79/4fdd577482fc4f28b7f544564f314f21d47e92": "daa445883a911f603ee31713f11dd508",
".git/objects/79/763d9f67bf1c1a91194369705911d4cbdecebd": "17e5f13fd0a0bdc1b32ece28dc5dafd4",
".git/objects/7f/335fcdb5543404d1278977bea8438ea877642d": "ca4c3d0a4d3644ea80f171eb4c42797e",
".git/objects/80/fb1ed942f06b87b67a090c27ed84d1d5b5775d": "5e4b1f137673b341daa4826c9f38f658",
".git/objects/81/7dc21384cc6935bd6edbfb1fa9672d2d0e6f37": "c50867e2c8acfc84a97581d5d87444b9",
".git/objects/82/e0a17af67df57d17846a1207edee26fa2838a9": "316ee2535035ed28084714134d0352aa",
".git/objects/8a/cf755d969fc0ba4d914300bc77aa14623fbee7": "f30ca41b0088cf4f5a57924ce1af128a",
".git/objects/8f/020d983ef0c2aa94f4b63d3f244fa960c5a070": "f53a5bb3872ceae02fefa0857b69f71b",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/95/c22dd7f9beae9aeb237d942de716078a615dda": "1526332a5326271c54d03334fbf92967",
".git/objects/97/9ceb6926ee5d12bd096498a4c079771c1b7b47": "a5426be03264ac547c18f61983237803",
".git/objects/97/a3bfffdc6265e5d954c927cc40061cb7c58397": "10f66e7bc445b7926c6da0fced0e0c06",
".git/objects/9c/e93dc6ce7d2bf5b83e7ca8826b51d9424a080e": "1cd22f63559ce0f591b801d929b13734",
".git/objects/a2/8fcd1c10b0c4e5a9d023fb03512dd5b5dedaa4": "1c81ee5b141ddd7a5db836e87dbd71dd",
".git/objects/a5/8348d3e0cd2c0468c0227d2b7aa67b5d4a948f": "444ea0fae3a5e5e1f59fcde880a3359d",
".git/objects/aa/9613de20eaa84f27cb2f074c0a9c80739ddd32": "1b5d6e29c840bf392bc3dc47be18f8de",
".git/objects/ac/7a64567be4a41993ee0a78f9ca3c2592a9fdc0": "6ee5e6acc18048a782f7005d4a8e072f",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c0/acca11e329bfa58d91f26ef4bbbe0f96abe801": "44cc249d6d3bffdf686a7a6e1a81de22",
".git/objects/c1/d95a8e541b07fd1eb7f4f64f96e40625cfa23b": "bbe2ddffd33544a518cba955f6e3c380",
".git/objects/c6/1c53174c8aa4b066cdb1d9a053630ad83e488b": "467cfaafbb9b2d0f6c925a7d0be5d194",
".git/objects/c8/1636c8ead005d63809332c34d87df926471e4c": "39262557d21d38b0806d173486150ebb",
".git/objects/c8/17f1fbc5182e87d031e5dde9f708b70576f1d7": "0cb527cf5d4650b1b44106927926868b",
".git/objects/cb/787ea9a0aa128c5ae8f3ff1d97013e0b3a00ca": "29d8ed8b74d44926b4d1dd5331c33c68",
".git/objects/cd/2c13edbd48155ddac84766e3fb03f23a446257": "d5dd06de6266580dee1adac50d7c9f43",
".git/objects/cd/b7b724048be1a939fedf06b15a146bf514178d": "3d1bee1c704a457f9cb510d693add525",
".git/objects/d0/72c2f0a7a2bff26dd10ce7211ffd650fd76b43": "a7b5b10a92418f3d02240e82aa723611",
".git/objects/d1/41aec260f38e4a036d9c5d467d97060a940d64": "9eeb82cb86ce2550787dcd76db232a30",
".git/objects/d1/a02f6cfd113310bf0bab154dc61d947a5dbbc7": "60e2daa83b8e5ef0e2729373fdf80109",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/cb835549321c14e9a5f74ad57704d09fc33070": "1a707ab444480631bb10d24712ed82d9",
".git/objects/d8/81911d474844f9a53f44d0de688f2375ffaf53": "9418359efd40166bca135fc82e5eaa00",
".git/objects/dc/c61406f5630c1b2c0b7024462a0e2375470288": "b981ebe0037b45d6a1f4978626a38127",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/1600af165463278d6952d98027bae43b86c27a": "2cdcd8891fa7a55adb4801f25ebdb8a3",
".git/objects/e4/a94c1465195ed6abd04fc4b56e3a5048b56175": "5683bd7c70cc500c0869c76a86634f10",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f2/8c953037f941125d0b6327df5ff7d4779476c7": "8778a7d33201475953dbfb33214c07a7",
".git/refs/heads/main": "619bf43e2b1dcaf1f8b3a5566f1d7ed5",
".git/refs/remotes/origin/main": "619bf43e2b1dcaf1f8b3a5566f1d7ed5",
"assets/AssetManifest.bin": "fb5afce4c2bc0d86719a386d125ec734",
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
"index.html": "3375b6bec996e680f47410db86672bcd",
"/": "3375b6bec996e680f47410db86672bcd",
"main.dart.js": "eaa341489ef7c42384f2168b69257187",
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
