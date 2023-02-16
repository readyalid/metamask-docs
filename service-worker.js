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
    "revision": "36c4febc7b197f7ab92aa2f8687146da"
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
    "url": "assets/js/20.63208406.js",
    "revision": "b9ff0137fac13e10256759639406b624"
  },
  {
    "url": "assets/js/21.dc06a388.js",
    "revision": "e2d919394aca340c8a600e28192f2579"
  },
  {
    "url": "assets/js/22.1a851cae.js",
    "revision": "db59880f74a6920eb0c2b04a33747184"
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
    "url": "assets/js/35.b140bc0a.js",
    "revision": "d22664e68a3653725319d6f44f8e0626"
  },
  {
    "url": "assets/js/36.523f52d0.js",
    "revision": "a3e1938aa1c40d86748505cf0aa618ad"
  },
  {
    "url": "assets/js/37.99bd2b1f.js",
    "revision": "cbceb172b247b7a53db6c261d25aa9d6"
  },
  {
    "url": "assets/js/38.0766b382.js",
    "revision": "f4f305d2c5a53fd4b380c3f78db1f6c4"
  },
  {
    "url": "assets/js/39.67908df7.js",
    "revision": "599439a03dd087e83ab8ce1e6b2a7fab"
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
    "url": "assets/js/app.b1083b70.js",
    "revision": "ab33fb32066085eb51d3914c3cc8b6cc"
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
    "revision": "bfb4a2604710bbf41fcba3e0eec9c61d"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "7c202af3e6033694f5e1ab27c7f5d444"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "d6fbc3d9ebc31c05eb716336105b578c"
  },
  {
    "url": "guide/contributors.html",
    "revision": "516f02063e2a7a445e93cd9cab71e555"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "4861f75b373bfd5356870568778fd7b3"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "369f2ac01fa652b042bd47ee7fc92298"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "10728c87d466e57e45a587b6262ac567"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "158ab336699a3546363d39b1576c64c4"
  },
  {
    "url": "guide/index.html",
    "revision": "9ec6c63b478821771188f52381138401"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "5342fe9195ee3055c2679848eb94fa08"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "c162a34caefd05a51ad9adbfb4d25302"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "5fb015300d84bfbfef225df17096103f"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "285cdcec592a099601603037f87b5882"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "9a913d8b5f473fbd71a860dffdcd81b6"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "fc90957254f9060bb3fbccccc76119e6"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "b5a420d83c00e0f0d7552e7e141148c3"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "a07ff7fc22104eb1cdb2c664e6b614b8"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "7c5513be058a17af2d48f8ffa675d2f7"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "e6cffaa1984733b4448b02ec56bd5400"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "a202e4a3db4e182afb4f646ae80e2f3b"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "3140a4deea5f8043e8dd4ae2f46ac93a"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "e8046a184db79cfac0f298a02e5adff0"
  },
  {
    "url": "guide/snaps-exports.html",
    "revision": "645b06bb88953d8f70e7994190077da2"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "20febd1832a3a50a4adea15bee184037"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "85f1ba9e5e9ff65ef9a6779c2be4205a"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "b7f56fe7df6c2fa51b1f27a047b45a97"
  },
  {
    "url": "guide/snaps.html",
    "revision": "63b0485687c276d9c75c8ef8514215f5"
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
