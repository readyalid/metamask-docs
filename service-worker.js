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
    "revision": "c7c7951b0c67feeac295fcb49932acdd"
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
    "url": "assets/js/12.4a379e87.js",
    "revision": "f5ad3d3c59e848f4f766621d0ab5e827"
  },
  {
    "url": "assets/js/13.054ad545.js",
    "revision": "2af6393e2ec9c8bb71473f74ed7bc0b9"
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
    "url": "assets/js/18.62065d5f.js",
    "revision": "6d58a29813d389d8de7773823515ac3b"
  },
  {
    "url": "assets/js/19.e4f80371.js",
    "revision": "b541f6bc7a6549b86755ea20630dd6b5"
  },
  {
    "url": "assets/js/20.6812acd5.js",
    "revision": "949a9cd276ba9f9c2ef9311adb563c76"
  },
  {
    "url": "assets/js/21.3b81a026.js",
    "revision": "b7b3da6fbbaa45705d8e2b4f6c1b25bd"
  },
  {
    "url": "assets/js/22.2dfc9555.js",
    "revision": "6b338e79c39b726cf04a5f00279e81fa"
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
    "url": "assets/js/28.372a6ee4.js",
    "revision": "32eb5fde41283c6d2aea953059474a3a"
  },
  {
    "url": "assets/js/29.c4bbbb87.js",
    "revision": "c67606a743ccfdf2640e4a6ec2a13511"
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
    "url": "assets/js/35.f81f456e.js",
    "revision": "f724285a227493ef794e219f31ffd976"
  },
  {
    "url": "assets/js/36.7e175d0c.js",
    "revision": "281d52e57dfb5bc65b54eca037bc58b3"
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
    "url": "assets/js/40.09cfdbdc.js",
    "revision": "3e8cf7117d07e49fb34909ece1e37bee"
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
    "url": "assets/js/app.ba795fb9.js",
    "revision": "11db5584d2ccc6392619ee373ab60a9c"
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
    "revision": "49f1715fe70ce01513587ec9d50e4d02"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "23b4a161ce2ba95b1abefd26b58dd4ba"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "79234800669d9e8b42da434711192854"
  },
  {
    "url": "guide/contributors.html",
    "revision": "c8b686d8a7ccc3845a27e7fe630e4f01"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "de1ac439b09e61760b35304b378e8e1f"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "b21f4ae516f7060d515540fc20d0b94e"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "ccba92d7bd46c30443600c352068e162"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "d1febf2f505cc8f5fcd27b25387ea085"
  },
  {
    "url": "guide/index.html",
    "revision": "0ae6bd050cdc900063035df768e9095f"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "aa4d6a6b5956f4add51716dfa10542f2"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "dc1d2ac591b2740fe3bcb9784fe76721"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "0d971de1ac42edaf90d46e7a839ce3fd"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "dce340f8d498fb21f90ec3a43c2d3e16"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "66d5f12004a56488e5499f52e08f8aad"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "279c7f27892535406a6c3f75de702b61"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "0b0dab851dc2a31cb351db11f6147a91"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "2796bf3f398191ecd0a46c736ed692a9"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "eeb634d9d98694581c734e20a887eb46"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "4144b013d9460e353ec1ec6a90738a89"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "978c4eafd2fbb545085e8c36fa400201"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "b114462a138d0b55e2c419d5f4ae2d94"
  },
  {
    "url": "guide/snaps-concepts.html",
    "revision": "69f88672e409e0f04616f8bb2fa75169"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "92acd22b869b4f64406a4bb613c3dc1b"
  },
  {
    "url": "guide/snaps-exports.html",
    "revision": "bef9575798b02a22829718fd10da2e12"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "4aec4288ed74ccbd67d2090875703482"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "624d9754fedcc44a253e919721f87dc7"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "be0c079209f3aa27e1c243714860cb93"
  },
  {
    "url": "guide/snaps.html",
    "revision": "36ee24fb24c90492e5ef90c7617a65ac"
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
