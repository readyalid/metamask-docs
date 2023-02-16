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
    "revision": "b2517d6318c604658a530835c01daa95"
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
    "url": "assets/js/12.d49fd902.js",
    "revision": "6e32b677ff274204e589f8b54696425a"
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
    "url": "assets/js/16.7e1da929.js",
    "revision": "94bff607550ffdc80357aa3aec2c1115"
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
    "url": "assets/js/23.c1811353.js",
    "revision": "76364388e370ff0e24f411c7210bd4ff"
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
    "url": "assets/js/34.b074a91f.js",
    "revision": "df9ba2ef3a0d5ee44a774059469428c3"
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
    "url": "assets/js/39.714bf012.js",
    "revision": "a880b1df41ade656f28546aad078e995"
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
    "url": "assets/js/app.1a8f1c67.js",
    "revision": "25d7a13b1843fcf11ee6f7f5fdd9cd36"
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
    "revision": "a82a805c492a9e188b3d6569b9662ea2"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "4258f48087abde34292211859d62b0d8"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "07f2e79cb881a14d1ab98a327573813f"
  },
  {
    "url": "guide/contributors.html",
    "revision": "cb9db85c25aa20742801a41409bba369"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "55e6aae603af2c49b21dd7c5c854052f"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "e203cf1d27bd795f8a7e7734a83f7fdd"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "b092b4321e202b075459566faae5fb13"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "aebdb717e87e9eba78f06a550279fb0b"
  },
  {
    "url": "guide/index.html",
    "revision": "0053df4e127e6d919d3cb765ec1669d5"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "08896666a44320cc4b17c250cddf728a"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "672e417d91e4f31d9cc22d03effcb2f3"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "a7da2090bd04eb406465d6d5f82ff48c"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "3a3e743dd22ba0f12d13c4c1da05290e"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "602b40ef2bfe73b3c0b7086a379fc607"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "8cb279ec4a4135ac6447301c024b7429"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "2861a2521571fcb5d8a30f660ac50398"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "06d9984d08efebdd5c030daaaa99587b"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "85fa0cdf781665c3ada4fd23f4cc9f9b"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "448183294ada1121e6fe58074345a5fd"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "b70576f648d27df077e46918426f0da1"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "158d0468d11eae27fc711ac979f328d6"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "aaac279e7f74208da6cdc2f04297e686"
  },
  {
    "url": "guide/snaps-exports.html",
    "revision": "510ca9f52808412c28ebc5ec66c4342d"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "f1eb002cd5f1426011a8d6c8382d52f8"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "445aeab10791184320fb3ad81c856eef"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "3a3b0937408e64eb44a32e83e1928fc9"
  },
  {
    "url": "guide/snaps.html",
    "revision": "bb4fe93f4ca1bef6cf904007d730534c"
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
