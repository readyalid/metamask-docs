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
    "revision": "02b1afcd540c76a618d1c8c4d2d7ce3b"
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
    "url": "assets/js/12.d2acdaf6.js",
    "revision": "40fe0cbc1f9449ddd794f53c46d46b56"
  },
  {
    "url": "assets/js/13.703b4ae2.js",
    "revision": "976a40de449ac08c661a256e1009715d"
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
    "url": "assets/js/19.b7fe3368.js",
    "revision": "6bd7b543efc614809afebac98770e5c4"
  },
  {
    "url": "assets/js/20.6812acd5.js",
    "revision": "949a9cd276ba9f9c2ef9311adb563c76"
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
    "url": "assets/js/30.c1aee093.js",
    "revision": "f85798ca4b05d7c773940ffb3db6e8f3"
  },
  {
    "url": "assets/js/31.9583b568.js",
    "revision": "b1069ab2c84327cb5bfcfd65104a4499"
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
    "url": "assets/js/34.21256fb2.js",
    "revision": "f4edce69cf1ce33e547412b022bfae72"
  },
  {
    "url": "assets/js/35.1c9777ed.js",
    "revision": "53e987d12fba4937477a8ec25530c41f"
  },
  {
    "url": "assets/js/36.61e31b46.js",
    "revision": "01ecfeef6e2b3434e98c0bd19611af9c"
  },
  {
    "url": "assets/js/37.16e91cd0.js",
    "revision": "104b568e2bdb7ab5d6bff4d6f1eb7a51"
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
    "url": "assets/js/40.55890522.js",
    "revision": "75ef867fdf8abfdc8ebb2e54d605b2c0"
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
    "url": "assets/js/app.7cf16251.js",
    "revision": "24be25ff615737a0c8ff592094be453e"
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
    "revision": "caf93e335c642a54ded54cf8be92a9d4"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "2ea3eacef3464cf7e7016776803a61f9"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "7e70089494b5d2153076a19de0e410b3"
  },
  {
    "url": "guide/contributors.html",
    "revision": "bc27bcee70c6d2cbf3179d20a4c3c4d9"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "4267d595b08537918e14a3f5b9f3e295"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "ae105526eacf8829de510e6eaed787c4"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "5f49f043d771ae4af82e418f9fc2fe5a"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "eb2d4d499fd962906019a890e6be9e1f"
  },
  {
    "url": "guide/index.html",
    "revision": "14d1cad800a9dda03082895b0bbc528c"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "f41c95b716dec65ac4589ce39a9767a7"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "116f5d0171909f1bedbf38b57aedbf2e"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "d29462d16c114bfd3c5063fe15ef06b7"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "a6678a254de6f5f7b8689996deb3ffec"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "cc8646d2f44fa7e5f3012c4c12a2e7c0"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "0ed8887c3ef1ecb3b9a61670eaeda863"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "9123df666beef8d943de6be3f2945b40"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "026ed3c79e7bd2d9f6f12525e4d07c91"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "59987a626038975067e2948dbb19c2f6"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "d59f1e5d74ec843c220166dc5a65014c"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "078d1e59b6bbfadb565f09c47dfcd081"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "ac6c8045f08a73bba1ccc0c60d38d106"
  },
  {
    "url": "guide/snaps-concepts.html",
    "revision": "a8a50b8f93096085b8e04464f27a3cef"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "08de01a317d782f7dde25319d4afaa72"
  },
  {
    "url": "guide/snaps-exports.html",
    "revision": "ae807ecc7f880d653cfa6a9daa072bf9"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "37771c331bffdecffb65bdb09251ab3c"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "1066dfaa3825f959e4867f95018bacab"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "f3db8e2757ee042badba918872635d34"
  },
  {
    "url": "guide/snaps.html",
    "revision": "2d88da7f50e5457bd60fd34666bb818b"
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
