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
    "revision": "26d82b00d6b7bdd09c3a77207ee55b07"
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
    "url": "assets/js/20.2182c694.js",
    "revision": "a376593533e4ab5c70d65959a5c6c1a2"
  },
  {
    "url": "assets/js/21.7f788a6b.js",
    "revision": "c31c84603934cec708bbf1874f64fafc"
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
    "url": "assets/js/36.c9a3793f.js",
    "revision": "b791e3b9ce7b5cad10820f6e5b31b8a3"
  },
  {
    "url": "assets/js/37.882e59bd.js",
    "revision": "652d7c37823c74719e3530feea25d128"
  },
  {
    "url": "assets/js/38.6a4919b5.js",
    "revision": "564b40974a6caec57a61f33a0b20d30b"
  },
  {
    "url": "assets/js/39.52dd8e8f.js",
    "revision": "e967fa52ee4c5b710f3cce7e3ee43034"
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
    "url": "assets/js/app.d215a0e7.js",
    "revision": "70d16cf4f654e64c95c1fb640a77a224"
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
    "revision": "a3bb896e75b549d0c7b46996d1902098"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "b8b5160f53852975bdaf8809da714a36"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "95bd7476a900132440b2bd2a65813e20"
  },
  {
    "url": "guide/contributors.html",
    "revision": "405622ded142d875713e5be61e869b00"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "c3ab091894ec0869eb5096907b6ca191"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "2f68d32b096c140503459e3d38582844"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "cc5a188f64373d6c5776648a3695da1d"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "58ab876b68ae0ebe80f865895f997755"
  },
  {
    "url": "guide/index.html",
    "revision": "05a5a47bce5d3058d86053b42fb93b69"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "94e408397aeba78f09092eec3463be33"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "e5738c72391cda773abe6351f98d5ca1"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "689757d88bc47e6f452c91abaed02ef6"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "4d2d8ff36e7c67c425fc6a301252b04c"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "4b90a8e8fe60bc468579217128ebb6d4"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "2a41a3a454abbdba488f43401eab8ac5"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "3fadb2f60755ab8532a4d1a92c45a18f"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "9a7394becac0f9d98738f8f27ed2f7ab"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "395cc6cc1743fea005e296cc7db25fe4"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "df3ae7a40bc58c6e1010ba25754c24fd"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "3fa53e3cb27c1cebe4e8f79e973c948b"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "af27403ba19d93226bfc0f3f2c6804c5"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "eac9fa50e97c7d891e60990976dae5b4"
  },
  {
    "url": "guide/snaps-exports.html",
    "revision": "0d37282e373a9467295f748a89d6c682"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "4d6f6a8864c4630df006745d3d5a7b77"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "360bc23b85701a1e325f0c876398b19c"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "5cddbb27e6deece9e07f153ab6898822"
  },
  {
    "url": "guide/snaps.html",
    "revision": "b255030a83cbd3fa8fa258aea24c8b09"
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
