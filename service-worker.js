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
    "revision": "f10c6a47c6f1a9cee9c046278cdf495b"
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
    "url": "assets/js/10.931ea624.js",
    "revision": "66bcaed0c581c74d456f62434db7fb1c"
  },
  {
    "url": "assets/js/11.f4837159.js",
    "revision": "910fca16c06dcfae7a9bd6e33b915423"
  },
  {
    "url": "assets/js/12.5d33d526.js",
    "revision": "8f5f722e4f49a57a9f14cd9532d7b1d8"
  },
  {
    "url": "assets/js/13.25eb35e2.js",
    "revision": "fd739197375c5f29fb50078fe4970340"
  },
  {
    "url": "assets/js/14.60991efe.js",
    "revision": "551424eb268c52544160b32ba75443a9"
  },
  {
    "url": "assets/js/15.bb808957.js",
    "revision": "6f2ab264d5067affce65fa1a2a071b4f"
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
    "url": "assets/js/18.07650999.js",
    "revision": "38e1539ea56879158141198297ce36e3"
  },
  {
    "url": "assets/js/19.a7fbe757.js",
    "revision": "1a7285d68bf91c342d62fb40d54670cc"
  },
  {
    "url": "assets/js/20.3b820be5.js",
    "revision": "04b62c8fb71fac2eac09983cba91f3a3"
  },
  {
    "url": "assets/js/21.3b81a026.js",
    "revision": "b7b3da6fbbaa45705d8e2b4f6c1b25bd"
  },
  {
    "url": "assets/js/22.8bb1aa9a.js",
    "revision": "ae4d7419f64f9a7695632655d9ff70a7"
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
    "url": "assets/js/25.aaf6d8d8.js",
    "revision": "2dafd4cd7a4f410d9441ddf89fb8c38a"
  },
  {
    "url": "assets/js/26.14fb36bb.js",
    "revision": "f25fb3b699e6cc4596a56b5b772dd3bc"
  },
  {
    "url": "assets/js/27.8be8533d.js",
    "revision": "2b283fdc3134d038b93caa23dd9ad789"
  },
  {
    "url": "assets/js/28.ba915612.js",
    "revision": "3b2fd7639857dc9cc83cd4f02e29d0fa"
  },
  {
    "url": "assets/js/29.a7b9153e.js",
    "revision": "8962d4b710ca9fd09809e8c15e1593b6"
  },
  {
    "url": "assets/js/30.b54b88d7.js",
    "revision": "89ba308e6898b3e4f478ef7b3ac66d64"
  },
  {
    "url": "assets/js/31.a4ba52f1.js",
    "revision": "a1cba283b59e54ce43bc70e60bcb2738"
  },
  {
    "url": "assets/js/32.06188479.js",
    "revision": "6c8bf4ae55efa29120d06581f2a6074d"
  },
  {
    "url": "assets/js/33.2e39f5e8.js",
    "revision": "c7e861f06d519ef6881ff470ef238ff0"
  },
  {
    "url": "assets/js/34.b074a91f.js",
    "revision": "df9ba2ef3a0d5ee44a774059469428c3"
  },
  {
    "url": "assets/js/35.ccc7ab26.js",
    "revision": "401312ff53e20d92c919bd8a48d65ec6"
  },
  {
    "url": "assets/js/36.dcf1d75c.js",
    "revision": "65626fa24a43d9ee6607f54c58681f57"
  },
  {
    "url": "assets/js/37.c343127d.js",
    "revision": "b1a1595ccb6d6bef6f40a8745a1dc2d3"
  },
  {
    "url": "assets/js/38.bc59aa30.js",
    "revision": "68e0cc9c4a4a34c626c6e35bcebcdbfa"
  },
  {
    "url": "assets/js/39.2eeec95f.js",
    "revision": "9f2556eb42399f1f9a47744b5bc1062c"
  },
  {
    "url": "assets/js/4.da077af0.js",
    "revision": "9a49351623281df26ca8c972cc338bf3"
  },
  {
    "url": "assets/js/40.74baabe5.js",
    "revision": "43c3f6c9ae53e854f546cf27ab6a2b84"
  },
  {
    "url": "assets/js/41.84dfac92.js",
    "revision": "e1faada2b765aac9a8943fefe198a23c"
  },
  {
    "url": "assets/js/5.25a3c5c3.js",
    "revision": "903f45a6c33108526f4491ef0d6932ec"
  },
  {
    "url": "assets/js/6.83c305ad.js",
    "revision": "8daa6e692a934de403a2f83fb79cb44a"
  },
  {
    "url": "assets/js/7.1de43fb3.js",
    "revision": "dca8f99f240a9a96934e9baa34e41374"
  },
  {
    "url": "assets/js/8.5b856ab8.js",
    "revision": "9d6587df579005c10edc76f71c4c3de6"
  },
  {
    "url": "assets/js/9.1df3fa70.js",
    "revision": "cf48cf48cfb5822fed2ff17ca00a539f"
  },
  {
    "url": "assets/js/app.ffa92417.js",
    "revision": "ac102cb39239a6b1d6ca915a5a9de85d"
  },
  {
    "url": "assets/js/vendors~docsearch.d5583204.js",
    "revision": "f17c04b1a1bf5bb9d33ef04fc7ce56cf"
  },
  {
    "url": "assets/js/vendors~notification.7830c261.js",
    "revision": "7bc22d6fb5ada409e6b49d6c2a9ca2fe"
  },
  {
    "url": "faq/index.html",
    "revision": "9ee67c5764889cbc8cbb174932c8638a"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "68b0695ef3a2683a85061e5abb738577"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "7be210228ab63b7e545f6fac84c0b564"
  },
  {
    "url": "guide/contributors.html",
    "revision": "299f26152b67045e8bf634dc9c83dbd1"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "2babb1af2a337ef0de996f472ea9df95"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "d49b1a7ddbae286cb9ed9633a9e1f2cd"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "2def11e68ffb854c0a64a2df0b93bbe6"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "238290bbbe86ef3adb7c9d6fe4c688e1"
  },
  {
    "url": "guide/index.html",
    "revision": "7ec9f9fda0274823d3eef1501bbad0c4"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "1b34996af8bea7fe2cc4221a91155640"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "32eda285d0f55f5174de37ddc9e0c0a4"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "3a5015d3d86db6ace89fda934263003c"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "4d09d261c824062c42d78f4ac6a9f11b"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "f7da2531c0c34dd7304d40541f495ffa"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "cb1eb12a58efc15b5200d69cea8e9a7f"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "c9b77a4c9a647a2b1b6e8c74bb4701af"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "6551a12defdb70440a39670cdd3d43dd"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "69e07ee528c86fca78116c252d69751b"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "4a7c8edd8598f246a4879768bfbae83e"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "09f8605db4a347359d274d6825008a79"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "dcf5006cd8fea6cbdd4fd26a2ec966ce"
  },
  {
    "url": "guide/snaps-concepts.html",
    "revision": "8bad20981720f632a63b6f51c0232d21"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "644afa79cfb1253679426d4960a53a70"
  },
  {
    "url": "guide/snaps-exports.html",
    "revision": "58904c59df13d91d460a9d5217c264da"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "c085800faa2cf6d30a1ef3f29deeb166"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "7fe3dbb662ad1aae46c5b850d7a96ce3"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "7201568df54b7933c5b0d0922627d5ce"
  },
  {
    "url": "guide/snaps.html",
    "revision": "ba6cdd376af327a7768911472ee11f8d"
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
