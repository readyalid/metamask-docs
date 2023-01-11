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
    "revision": "e4c597a5cef08e747e2200490e1b234e"
  },
  {
    "url": "assets/css/0.styles.12c93c8c.css",
    "revision": "959aee458424e46d5c2f3906d8b5bfc9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7f2f57d3.js",
    "revision": "c83f2f4dff7aff81c3639bcb1275f25b"
  },
  {
    "url": "assets/js/11.e93ba376.js",
    "revision": "6332b1fdbf4da3098bc2a9f54807b6f8"
  },
  {
    "url": "assets/js/12.079805e1.js",
    "revision": "8b0f9237c3bb88c8bba9f824c0b3af7e"
  },
  {
    "url": "assets/js/13.4af98693.js",
    "revision": "dedb2ea0837cf02ccc3d35e79a964c99"
  },
  {
    "url": "assets/js/14.51dfb6aa.js",
    "revision": "132fa818b53c6b3c4ae99d389292384d"
  },
  {
    "url": "assets/js/15.7bd667ca.js",
    "revision": "a451607350e78e4da52e1f2a710d858c"
  },
  {
    "url": "assets/js/16.77ad9260.js",
    "revision": "8960d575d229a603a5779e21b91d5be4"
  },
  {
    "url": "assets/js/17.9f4102b3.js",
    "revision": "ab5802c321606f0eb24429bf1c5ef4ce"
  },
  {
    "url": "assets/js/18.b594a6b2.js",
    "revision": "e5b7d833e6675c8268b68c9515be61ea"
  },
  {
    "url": "assets/js/19.7b395b59.js",
    "revision": "2a951126b2e68ef00f1a5b6b47241b29"
  },
  {
    "url": "assets/js/20.464020aa.js",
    "revision": "7bb17b170f4ca25d040cbf88deb43bb4"
  },
  {
    "url": "assets/js/21.75bf6c9d.js",
    "revision": "44843b04b76ed1a06c08e65ca5bb8b6b"
  },
  {
    "url": "assets/js/22.307e825c.js",
    "revision": "ccc0d346aadcf518d99972dd75c311ab"
  },
  {
    "url": "assets/js/23.95faae54.js",
    "revision": "3c3d52c3e54459cb670c252f6b73f240"
  },
  {
    "url": "assets/js/24.1acfb38a.js",
    "revision": "e99c4637e9dd3b8f3ee92ca97d7d6de5"
  },
  {
    "url": "assets/js/25.89d81fd4.js",
    "revision": "6e811613991ebf26a973f517fe06f238"
  },
  {
    "url": "assets/js/26.f63ea45c.js",
    "revision": "64afad2f60f3017b528cf3566a15a457"
  },
  {
    "url": "assets/js/27.2b124053.js",
    "revision": "907364433cf39653a19c9899fe31b664"
  },
  {
    "url": "assets/js/28.37330ad5.js",
    "revision": "b96b4f1f8bc9ee6de0e16bb528c0e988"
  },
  {
    "url": "assets/js/29.90b47631.js",
    "revision": "132e93a27ee9072990539cf29d9574c7"
  },
  {
    "url": "assets/js/30.87bc84ac.js",
    "revision": "2afbc7e29f4bf07496e79ef3a01bae74"
  },
  {
    "url": "assets/js/31.74e728f7.js",
    "revision": "43971ed5e4b8821736b748d09955e2fa"
  },
  {
    "url": "assets/js/32.09ed5138.js",
    "revision": "e75eba0fa01f4dc597e70954133bf8b6"
  },
  {
    "url": "assets/js/33.35ec9cad.js",
    "revision": "f492aa08f3143f1b4aeaf193c72f3533"
  },
  {
    "url": "assets/js/34.a5791133.js",
    "revision": "fd7eba7d88c2ec83c6e4310fcb9d3ad0"
  },
  {
    "url": "assets/js/35.fa65f12b.js",
    "revision": "1527c025b1403dc48afa2eeadabcac4f"
  },
  {
    "url": "assets/js/36.db35d5f2.js",
    "revision": "8be6393b5f2656f59943f87aff8819b8"
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
    "url": "assets/js/39.dfdea477.js",
    "revision": "1f903fd7e1ced94a75fdf18eab106dd2"
  },
  {
    "url": "assets/js/4.bb006f44.js",
    "revision": "f4263c236dfaabc96645040d157b5303"
  },
  {
    "url": "assets/js/40.20ae22a0.js",
    "revision": "6abf884451b68cfbc169ecb7a7698299"
  },
  {
    "url": "assets/js/5.66d20001.js",
    "revision": "8837584cfd4649e03fb1a91127d416f4"
  },
  {
    "url": "assets/js/6.01620b08.js",
    "revision": "c1cb3ef1b4bc39bdf6dac6d658eceb4f"
  },
  {
    "url": "assets/js/7.89eac06a.js",
    "revision": "65ad5d3613e255fd1f72cd587370ce2a"
  },
  {
    "url": "assets/js/8.7860022d.js",
    "revision": "7866e5ec4b3bc5b29887c5b74d18d162"
  },
  {
    "url": "assets/js/9.7f8903d3.js",
    "revision": "fb8cb34ac3c9543fc4502f5f5a91e268"
  },
  {
    "url": "assets/js/app.647b54f5.js",
    "revision": "4581f45529dea37bf84a6ef72ea63b28"
  },
  {
    "url": "assets/js/vendors~docsearch.eb9067e8.js",
    "revision": "f5f3a74ff3aa6a503d72919490ac7a67"
  },
  {
    "url": "assets/js/vendors~notification.7822af06.js",
    "revision": "572675a5d71ac99ae57daae40bc30654"
  },
  {
    "url": "faq/index.html",
    "revision": "313ba9b926fc76098f0e488abd21e873"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "263ce1dfcbb9c00f3228061fd665e9a9"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "2440c1b1d6496b4e284bd99611507c9a"
  },
  {
    "url": "guide/contributors.html",
    "revision": "18b82c488e795e7457d6637b330fe0db"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "d03d6f53973e8e6d8d36bbd8021b9bbc"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "ed49b1e2de5155ad7affa1d6efceebca"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "9654d79805b56ede1283a471eb5ba636"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "825706d614fe5baac8544fe3174bb6a7"
  },
  {
    "url": "guide/index.html",
    "revision": "6daffc1493c0a53cf641b08fd84e7113"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "d0a3f863cdb93de8d84851180301abbc"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "d5456d6bf2dcbbe80e72a960d96f50f7"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "353b250e9f59ee1e33e31a8debce71b7"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "296209830d832d5ea211199536dd7570"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "a79a53c4e6802d67734616939145c236"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "b60ae7d2398f573af77bf80876b1ab44"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "cbe13aa869eb6ce9d3584eb579996a07"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "0aee01274b79d4fe0d2cfbfbb96f28cb"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "d4bf91eb8b9e75ffb59ee9f10b684b6f"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "213896c545cf1de447ad484fc6f4d2ed"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "18ed37910b7ffc77444760690d81d612"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "7bf9f706b73d894b82ba7b11e0dff3ca"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "b15c4d408a75ffaeba0bd1f8e15157bd"
  },
  {
    "url": "guide/snaps-exports.html",
    "revision": "b66a6ea51708e9456b25cb463426be7b"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "91d4bf9f32956fdecc39dae68db70621"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "06ef5640b0e392252997bd4d6a7ab626"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "94ffa474d96e072d39447e555df27a91"
  },
  {
    "url": "guide/snaps.html",
    "revision": "0078cc78d4e2a9ce1beeef71999c6b2f"
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
