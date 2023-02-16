/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2218ac00e86cf7b9c9ef9fea6139dc3e"
  },
  {
    "url": "assets/css/0.styles.1dc86ded.css",
    "revision": "f3a4ddc7c9ff72e8a778ed719aefcc31"
  },
  {
    "url": "assets/img/712.ced7bf03.png",
    "revision": "ced7bf0352bb81c54ab4accc55f36706"
  },
  {
    "url": "assets/img/personal_sign.8f1f0392.png",
    "revision": "8f1f03925fc785ae1e4e3bf2d2901994"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.dd0d4d1d.js",
    "revision": "426fbeb2e991cadd4f8bc39836155a22"
  },
  {
    "url": "assets/js/11.189030ba.js",
    "revision": "48e9c028be1bb7eab6ff712fab960563"
  },
  {
    "url": "assets/js/12.81cc6e9f.js",
    "revision": "6f38be26e19e883390c06aa395b6c8b5"
  },
  {
    "url": "assets/js/13.edeb9a62.js",
    "revision": "243ff460a9f4465772fe8b18907aaaf8"
  },
  {
    "url": "assets/js/14.8cd4eb4b.js",
    "revision": "258b39a4e6c59d73bd4ae5e7d326378b"
  },
  {
    "url": "assets/js/15.0f57fcfe.js",
    "revision": "9c436de06b590b8cdd026edee12c0ae2"
  },
  {
    "url": "assets/js/16.f7fe65a7.js",
    "revision": "05b8262b702704ccb408f464ecd849eb"
  },
  {
    "url": "assets/js/17.d480dbab.js",
    "revision": "b0de40e26dc76b37a05ab0eaae4a3edd"
  },
  {
    "url": "assets/js/18.07650999.js",
    "revision": "38e1539ea56879158141198297ce36e3"
  },
  {
    "url": "assets/js/19.b7fe3368.js",
    "revision": "6bd7b543efc614809afebac98770e5c4"
  },
  {
    "url": "assets/js/20.63208406.js",
    "revision": "b9ff0137fac13e10256759639406b624"
  },
  {
    "url": "assets/js/21.3b81a026.js",
    "revision": "b7b3da6fbbaa45705d8e2b4f6c1b25bd"
  },
  {
    "url": "assets/js/22.bc948ef8.js",
    "revision": "94afb5778a35edc1de9c540ce7dfa6db"
  },
  {
    "url": "assets/js/23.22a6d98a.js",
    "revision": "504d0fe96d8122d096dbee004373eab9"
  },
  {
    "url": "assets/js/24.715ff8b6.js",
    "revision": "b2bb20491c8f35d5662194312b4874c0"
  },
  {
    "url": "assets/js/25.91556ce9.js",
    "revision": "0d4c22d67c045910cd44b8f045493ff3"
  },
  {
    "url": "assets/js/26.851366da.js",
    "revision": "8ebf0e4a3a780cf661afd5cd4bea8219"
  },
  {
    "url": "assets/js/27.7e604d7f.js",
    "revision": "0525ccf929ed1bc1962ff8b471aa8d91"
  },
  {
    "url": "assets/js/28.ba915612.js",
    "revision": "3b2fd7639857dc9cc83cd4f02e29d0fa"
  },
  {
    "url": "assets/js/29.9177a762.js",
    "revision": "50791fb2f16aaeac186edd52ff4d115f"
  },
  {
    "url": "assets/js/30.c1aee093.js",
    "revision": "f85798ca4b05d7c773940ffb3db6e8f3"
  },
  {
    "url": "assets/js/31.4abd6822.js",
    "revision": "d34cec67d05ea8a661b5c593fae33fed"
  },
  {
    "url": "assets/js/32.138156fc.js",
    "revision": "9dacdbd9b517cd0f8357b22068e7e989"
  },
  {
    "url": "assets/js/33.9b30a58c.js",
    "revision": "6672c2d5e4a71f7fa9eb5562ac2dc457"
  },
  {
    "url": "assets/js/34.21256fb2.js",
    "revision": "f4edce69cf1ce33e547412b022bfae72"
  },
  {
    "url": "assets/js/35.40ddff76.js",
    "revision": "a064bd0f4e049f68fedf63aada9314d1"
  },
  {
    "url": "assets/js/36.4d85f210.js",
    "revision": "823bdbfe1e5f37bb280740d4f48ab010"
  },
  {
    "url": "assets/js/37.99bd2b1f.js",
    "revision": "cbceb172b247b7a53db6c261d25aa9d6"
  },
  {
    "url": "assets/js/38.ec8ad328.js",
    "revision": "1679c265b322812f9553f5077488e9ba"
  },
  {
    "url": "assets/js/39.cb7fc1b7.js",
    "revision": "81264063fbe68e27df393fd89753a1bd"
  },
  {
    "url": "assets/js/4.f9b1ec66.js",
    "revision": "3bfa6b48a378f8bf9f502cb7512a1afb"
  },
  {
    "url": "assets/js/40.644d4e43.js",
    "revision": "de858e63fa873ba17d4115d72b0f4b6f"
  },
  {
    "url": "assets/js/5.6f893a69.js",
    "revision": "75b57d6f2f19c7493c4caf94a9b3ffe2"
  },
  {
    "url": "assets/js/6.2faaeed2.js",
    "revision": "59f4b5e6a68c340c28124a43a048b379"
  },
  {
    "url": "assets/js/7.f06cad66.js",
    "revision": "e20ffae0802b795714a8aa83c5177ee3"
  },
  {
    "url": "assets/js/8.2cc5fbbd.js",
    "revision": "fc0b5baa1c91f592ec79d12ec05a3788"
  },
  {
    "url": "assets/js/9.abf059bb.js",
    "revision": "b0a3e5f56b9fd175f4041b7ca8bbab15"
  },
  {
    "url": "assets/js/app.197d6ab0.js",
    "revision": "e0d4183043bbb11cb76c62ffde3771c5"
  },
  {
    "url": "assets/js/vendors~docsearch.51ef31dd.js",
    "revision": "4c4a62c4c54cc44221838d6d8e089b3b"
  },
  {
    "url": "assets/js/vendors~notification.d58bddaf.js",
    "revision": "463b8c94243fc4f81e2df30d1006a357"
  },
  {
    "url": "faq/index.html",
    "revision": "1005435cfd45259ec706c784fe8629b9"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "299663f4a74d71545627fecc40d68e24"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "95e52b9c6a2adade78d45bedc16dec99"
  },
  {
    "url": "guide/contributors.html",
    "revision": "1e07023d964b61058faa37b150434dc3"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "bb59f37182c1b2eda8c7cf071fa7fdec"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "5534b1d82cd0b30a6a800b1c3bbb985b"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "390f03d4da53985c6205ddf64130df5b"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "bc559c40459951f4aec77f52b2e0e76e"
  },
  {
    "url": "guide/index.html",
    "revision": "6f06aa6fbd40e37c2d9329988db5d5cd"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "419d184d9318c3a3cd0935ec43e96df1"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "af5446c3b18bef44417de18c554aabb9"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "d5977124467b3078d71394f474e941dc"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "023c69f6c2b0da450d873c68f01a4c0f"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "47f6e1dc00871d1b0a06fe5999258be1"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "0683bf9f056c7530fb89bd220671ae38"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "6cbf2bc2c7ed748e061b484e1dfeb6e6"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "48f2ff1af96e949df8be729dc32f0523"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "994e3bd17f026cedeede764ae6454e89"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "554f6abf68ca44541c2b70ff7a22e63a"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "5d9d5a7e220c9c88af87bc8f5b415a51"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "75ae1b57d5ff64719fed6f22557f4dc0"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "725e43f79458005dc45e7e7633e86806"
  },
  {
    "url": "guide/snaps-exports.html",
    "revision": "bb1885c5f9ea692a2679d7ca2e216973"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "9b2b0fededad854b568dc32325d362c6"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "ef85c3bf7cfa06c3c828d9a204bd1ce5"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "7b9a2bfa6747cabe35b32cae6a4281b0"
  },
  {
    "url": "guide/snaps.html",
    "revision": "e4a404dd58405df36bd6f22949596151"
  },
  {
    "url": "metamask-fox.svg",
    "revision": "c06f3a3e804ebc7343949fdca3fdd7f8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
