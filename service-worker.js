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
    "revision": "a4f726b7e7b1a9cc2b40f3fe8d635908"
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
    "url": "assets/js/13.512037de.js",
    "revision": "098bb9d7d6d73907503bfd2dc22466bd"
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
    "url": "assets/js/16.0be866ba.js",
    "revision": "36a1bfbccac73259bc64c01afa4ccefa"
  },
  {
    "url": "assets/js/17.0d8fb8d1.js",
    "revision": "88ac4c6fa797b584d5a7b5b6776a0643"
  },
  {
    "url": "assets/js/18.62065d5f.js",
    "revision": "6d58a29813d389d8de7773823515ac3b"
  },
  {
    "url": "assets/js/19.66024b71.js",
    "revision": "bd1461dcbe61c7876b13ed957d730da4"
  },
  {
    "url": "assets/js/20.6812acd5.js",
    "revision": "949a9cd276ba9f9c2ef9311adb563c76"
  },
  {
    "url": "assets/js/21.65a9ba9f.js",
    "revision": "e393e327fa1a69691c28161281f4628e"
  },
  {
    "url": "assets/js/22.03bc098f.js",
    "revision": "30e79a5e04df4d67f8b2821a3ac3e50e"
  },
  {
    "url": "assets/js/23.183a4108.js",
    "revision": "dd86a38e7d5f3ead73c552e25fe89225"
  },
  {
    "url": "assets/js/24.815e02e3.js",
    "revision": "e20ddf8453c5ac6fad0296ede65097cc"
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
    "url": "assets/js/31.59de6f6a.js",
    "revision": "d2d996f7d689b1920cf403c2c7c8d90f"
  },
  {
    "url": "assets/js/32.04778e9d.js",
    "revision": "be467b5dc8467a3c8232db7dca071d9e"
  },
  {
    "url": "assets/js/33.cfeb8eed.js",
    "revision": "69a1999356003b5f1373ca48c2e6b16f"
  },
  {
    "url": "assets/js/34.21256fb2.js",
    "revision": "f4edce69cf1ce33e547412b022bfae72"
  },
  {
    "url": "assets/js/35.7d7364a5.js",
    "revision": "b50c2e3a89a0b525babc130be3f45d49"
  },
  {
    "url": "assets/js/36.71f439b5.js",
    "revision": "9ab0655caaa3d21925abb1e2a37135e1"
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
    "url": "assets/js/app.9b502efd.js",
    "revision": "5af82e4868dc9be515ce7287cc691ef7"
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
    "revision": "a6d1c462c95dc999a639a42af636bc9e"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "b825a36fe358278af1a73ce714e38ab2"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "27cedbc8127af1ad520f8bf9d49ccb5e"
  },
  {
    "url": "guide/contributors.html",
    "revision": "eb2183e8d63eea94b75084eb773bc210"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "51e5fe40616afb9dce6fdaa9af234f1c"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "d6bfd570b80065ca3e5e73d129e26a26"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "804238ec37c567cf4978051a648c38ba"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "3531156abed85d8ca67189173f588b0f"
  },
  {
    "url": "guide/index.html",
    "revision": "a75673f6c7e9cd1bfb45a4f62665ed95"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "7bb2b79fb625a01b2bac53cc0b57e772"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "ec813786dbcfb12987bc00b9073fa352"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "d6122290f79d779a2c08959ced16afb8"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "90a48c503fe212c4bfba432755870e25"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "5c6c2b709e53f737c077e07b70808189"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "9b5ffeba0b22fe14ac5121962f623bc9"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "097bec5c43548ac25a8fb10a745583db"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "f45770f8fbe8b37485a55d3ae433cebd"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "85fceff14aa9b47cd70700e248d00f86"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "df483d5657a2e76038a8294ef7810b93"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "2292b19ef650339e2e992559bf1ed9b2"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "526f031a0765ba304d797e0742f9c053"
  },
  {
    "url": "guide/snaps-concepts.html",
    "revision": "d861e6110c86db453d8e8ef197ef7b1d"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "7fe51386740222611eac21460d786d27"
  },
  {
    "url": "guide/snaps-exports.html",
    "revision": "1f2c74cd4c6be720e40dbf9b1b4fc1e3"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "e7311a22566fa28e34c8249de75fbeb2"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "ec1dd0b982b320e42e8718a4160c39aa"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "0c6bacba6c780a8065c2628545ca9def"
  },
  {
    "url": "guide/snaps.html",
    "revision": "bfaf9f1cb0759923cba698db1ea6d963"
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
