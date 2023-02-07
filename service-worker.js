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
    "revision": "5df150f3bd30ed355fd5a8d81b61d00f"
  },
  {
    "url": "assets/css/0.styles.12c93c8c.css",
    "revision": "959aee458424e46d5c2f3906d8b5bfc9"
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
    "url": "assets/js/10.5e73a6e8.js",
    "revision": "dd62d1af8c3712a030332e71591141d4"
  },
  {
    "url": "assets/js/11.189030ba.js",
    "revision": "48e9c028be1bb7eab6ff712fab960563"
  },
  {
    "url": "assets/js/12.e8d4079a.js",
    "revision": "1b64eab34e83b5fd48f39f2ff96cf369"
  },
  {
    "url": "assets/js/13.6cda30bd.js",
    "revision": "c803b329aa32e655b4bb3c3ce4a5f666"
  },
  {
    "url": "assets/js/14.8cd4eb4b.js",
    "revision": "258b39a4e6c59d73bd4ae5e7d326378b"
  },
  {
    "url": "assets/js/15.673232e4.js",
    "revision": "718be1fbdc31ed42bce64fefc1a21e9f"
  },
  {
    "url": "assets/js/16.156d4b17.js",
    "revision": "388c07a3e066e6c2a4cc68d72751e188"
  },
  {
    "url": "assets/js/17.61636da6.js",
    "revision": "a9e2e0eb92c8a7acdaa863e6aa0ce163"
  },
  {
    "url": "assets/js/18.62065d5f.js",
    "revision": "6d58a29813d389d8de7773823515ac3b"
  },
  {
    "url": "assets/js/19.4744b75b.js",
    "revision": "8efdae217dc93f029a62c7e51e40b077"
  },
  {
    "url": "assets/js/20.3b820be5.js",
    "revision": "04b62c8fb71fac2eac09983cba91f3a3"
  },
  {
    "url": "assets/js/21.7f788a6b.js",
    "revision": "c31c84603934cec708bbf1874f64fafc"
  },
  {
    "url": "assets/js/22.1a851cae.js",
    "revision": "db59880f74a6920eb0c2b04a33747184"
  },
  {
    "url": "assets/js/23.183a4108.js",
    "revision": "dd86a38e7d5f3ead73c552e25fe89225"
  },
  {
    "url": "assets/js/24.3b89b233.js",
    "revision": "72f03e046c96a4cf1764a9fed744cf3b"
  },
  {
    "url": "assets/js/25.91556ce9.js",
    "revision": "0d4c22d67c045910cd44b8f045493ff3"
  },
  {
    "url": "assets/js/26.e91d9ead.js",
    "revision": "f0030de01a971722178260f18e8fb769"
  },
  {
    "url": "assets/js/27.8be8533d.js",
    "revision": "2b283fdc3134d038b93caa23dd9ad789"
  },
  {
    "url": "assets/js/28.372a6ee4.js",
    "revision": "32eb5fde41283c6d2aea953059474a3a"
  },
  {
    "url": "assets/js/29.9177a762.js",
    "revision": "50791fb2f16aaeac186edd52ff4d115f"
  },
  {
    "url": "assets/js/30.dce808c1.js",
    "revision": "b3f653500f04368b8352c0025eba603e"
  },
  {
    "url": "assets/js/31.a4ba52f1.js",
    "revision": "a1cba283b59e54ce43bc70e60bcb2738"
  },
  {
    "url": "assets/js/32.138156fc.js",
    "revision": "9dacdbd9b517cd0f8357b22068e7e989"
  },
  {
    "url": "assets/js/33.4c860418.js",
    "revision": "ea4fceb7f4ae86c62c350b71412df36f"
  },
  {
    "url": "assets/js/34.a5791133.js",
    "revision": "fd7eba7d88c2ec83c6e4310fcb9d3ad0"
  },
  {
    "url": "assets/js/35.087ef91d.js",
    "revision": "7714e2f7239d80947232f5f212d47c36"
  },
  {
    "url": "assets/js/36.265ee268.js",
    "revision": "2b23ce9d4f8dd0a013e4445d83a75187"
  },
  {
    "url": "assets/js/37.be6cd788.js",
    "revision": "b9f228fafcdbacd4c89202a8f411a122"
  },
  {
    "url": "assets/js/38.086f98dc.js",
    "revision": "48a8bc069a25b77d42515026bbec9345"
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
    "url": "assets/js/9.b0819240.js",
    "revision": "b54ae68ccf24cb2eed9c06394b90afe8"
  },
  {
    "url": "assets/js/app.916fa386.js",
    "revision": "44a465cae422da8d52b5b2c5d9b8197a"
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
    "revision": "d944d8a68dd8d4d765a9b62d5a45ced9"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "1669e9a1077ec19cb2f81f544af3195f"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "914b0b464bc1c07760a508ef7c183227"
  },
  {
    "url": "guide/contributors.html",
    "revision": "f790ab2e8c6c1d6de8053ac05ec0b7e3"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "47db6c98e45ee802fff5edbd251eaf9c"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "a8abb2c0ce5cc8bf61c98d326fc12cfb"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "62f1d53cc5517931aac6088405a927ce"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "20928d702e4ba1dd554ede24a85c2bf1"
  },
  {
    "url": "guide/index.html",
    "revision": "03597716045f7559633a4b2f488098d8"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "8fde29198cc905252591377ed276f86c"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "701c87b5933020d0d320a9dc53e7261e"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "c19b44f146cdd50503d9404523fc4a3e"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "d097bc83fa6189262fd815dc50adea08"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "e99f46f05e655aec5d5b1ed3f3d6d423"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "af5c023f0fa619e578ea0cb083443e46"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "92eef55e2bf02a5397f2b90815c515ab"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "356519be77d8645adb1c5d1466653be6"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "65ef48d584f6a8b12004cda2ab207e51"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "31437785ea71db5b34ca8b02b5984be3"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "2f8cd1f21dfba136486a9988aed614f3"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "430725c4dc0b753b2114412de3b24be1"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "8b2b4a2fc310c7aa1fbf3ea18484d913"
  },
  {
    "url": "guide/snaps-exports.html",
    "revision": "fc1843e7ba80bf609ca8d25fbd9012f2"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "693a6eff0398301a9a896f58d732f158"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "1f951278491dee6b88dd2e8455ee581b"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "9493d5b80676a5285cd3197f0c94f238"
  },
  {
    "url": "guide/snaps.html",
    "revision": "846fb313d17e1e1e464cde3911cd5910"
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
