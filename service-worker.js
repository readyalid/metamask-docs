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
    "revision": "d718f4f4c4bb8d735769385a8fe7bf7a"
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
    "url": "assets/js/10.7eb86000.js",
    "revision": "8f0c8bfbcd9b4d1b2c4a8618d2ab7182"
  },
  {
    "url": "assets/js/11.f4837159.js",
    "revision": "910fca16c06dcfae7a9bd6e33b915423"
  },
  {
    "url": "assets/js/12.3e300ff8.js",
    "revision": "04a684300a35043cd97a4faa4d3ee316"
  },
  {
    "url": "assets/js/13.6a5e4ebc.js",
    "revision": "592743f9288fc5be739bf2cd042ed897"
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
    "url": "assets/js/19.4744b75b.js",
    "revision": "8efdae217dc93f029a62c7e51e40b077"
  },
  {
    "url": "assets/js/20.63208406.js",
    "revision": "b9ff0137fac13e10256759639406b624"
  },
  {
    "url": "assets/js/21.65a9ba9f.js",
    "revision": "e393e327fa1a69691c28161281f4628e"
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
    "url": "assets/js/29.96d43cc0.js",
    "revision": "2331a9d60bff9a40dbc6e9365ea7fb54"
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
    "url": "assets/js/33.9b30a58c.js",
    "revision": "6672c2d5e4a71f7fa9eb5562ac2dc457"
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
    "url": "assets/js/37.d0f9d2d5.js",
    "revision": "8e5e9ce1094951257ed8b01194105c2b"
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
    "url": "assets/js/9.98e1aa4e.js",
    "revision": "b0d467d7de3a6667cb4e07c55924c64f"
  },
  {
    "url": "assets/js/app.ed9e317f.js",
    "revision": "4de36ff9113e364cdc050b5b33711e91"
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
    "revision": "ade96abe2b54e682e31bbab814e42177"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "98ad25e35d31600ea92b6f9e6c37d2dc"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "5625fed539d2b9d93f7ed46237062788"
  },
  {
    "url": "guide/contributors.html",
    "revision": "a3f8ed60aada424c104186a2b72c911c"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "adbf04a60c0ab96b83eec09d4b3008be"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "724f2ff77cd512ed93cd920df7a9cee2"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "a63528ab801db1d92e1af00d68007e62"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "85bc2192cd217945714eaf50c7a5896a"
  },
  {
    "url": "guide/index.html",
    "revision": "3a9c95831bc4e8d4fb8263292a238387"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "b30235ba458754b12eb6387493052b10"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "2218fe79914797018b622aa9b4f91bc7"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "9db1e17b928961b5e1623b68c9f8d3ff"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "fc0df88e6bd76b8d712cbd600b299620"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "5f5d2ee331b5cde1d1e5dc690c475085"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "2711d70b8fed8722abbbd2b74fb7dca2"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "ac9769f8ce0866633413e06da2fa0c80"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "8e252d101cb9bf4dd81cc547bff8c804"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "2d2ec325383cdd04ea93218022558b47"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "0e021fbfa67f9024e69115f05123fcea"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "34de0d5686cc019a630201432523dfdc"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "77a2a44034d32e2b4a956f95187f9877"
  },
  {
    "url": "guide/snaps-concepts.html",
    "revision": "50a0b095b55d7d5b9f0ada567a510de9"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "c9bd751cf508c3290164181d729e0730"
  },
  {
    "url": "guide/snaps-exports.html",
    "revision": "90f99a528410f5ecbaa1914c58609481"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "b11f2903b4f2bee11e8ee94f79395acf"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "700f7ed0ce31a1185b5022f954f3063b"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "a427da44ad78dbeb5d2ad6d23cf6db60"
  },
  {
    "url": "guide/snaps.html",
    "revision": "f52665149ae671ac988c340226237706"
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
