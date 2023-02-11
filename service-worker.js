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
    "revision": "00ff8357131a40cfa1d5d49fac969f0e"
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
    "url": "assets/js/17.50f7171f.js",
    "revision": "aab7e70484cb6899609503f548328134"
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
    "url": "assets/js/20.63208406.js",
    "revision": "b9ff0137fac13e10256759639406b624"
  },
  {
    "url": "assets/js/21.3b81a026.js",
    "revision": "b7b3da6fbbaa45705d8e2b4f6c1b25bd"
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
    "url": "assets/js/30.0e453ea1.js",
    "revision": "7c4dcc48b600e9cb6b58a6cecd0e5a13"
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
    "url": "assets/js/33.9b30a58c.js",
    "revision": "6672c2d5e4a71f7fa9eb5562ac2dc457"
  },
  {
    "url": "assets/js/34.21256fb2.js",
    "revision": "f4edce69cf1ce33e547412b022bfae72"
  },
  {
    "url": "assets/js/35.fcf1e5ae.js",
    "revision": "ae83f1e997a3a3520d8856f7dc2b129d"
  },
  {
    "url": "assets/js/36.db35d5f2.js",
    "revision": "8be6393b5f2656f59943f87aff8819b8"
  },
  {
    "url": "assets/js/37.99bd2b1f.js",
    "revision": "cbceb172b247b7a53db6c261d25aa9d6"
  },
  {
    "url": "assets/js/38.52d12d9a.js",
    "revision": "00cec1d81a9fad5943a62376c3566043"
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
    "url": "assets/js/app.4ea85e35.js",
    "revision": "daab3702c0042849ca6fd73dfff103f7"
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
    "revision": "f2ff39ce67b0420aa0087ffa1a969ff4"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "6a25fbd6fa7ea19bd2141e213cabe945"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "339f57c3723ad884e2b96b5c4d800532"
  },
  {
    "url": "guide/contributors.html",
    "revision": "263cb964d988ef5ab8e1c2b62a5d7667"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "566db0847797c6338ae1d3b26fa64578"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "52eb7a5f3e574d071df0f35054d4d406"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "173d8419712fece7144c2a9b7ceadcdb"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "d6715f085b96162157cc45a8a9c5b623"
  },
  {
    "url": "guide/index.html",
    "revision": "c47bc0259d85105ddca5adf5e2a0eb7f"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "3669f7f8621835c797d84ad8ffc9a857"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "921a096c557ae54e41b0940d8624ac8f"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "3f9de437dc479fbbc84b9755f1f03817"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "b2a98150107bd7ef5c2b9acb4aa1ee2b"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "777ddfe772ae06129f4108230b0d854e"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "b249cb5c3e020ff0c30cabe49b68ad3c"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "27d92b27a65030fb5e229d8a3effc85e"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "746e495cda3ff08cfe6d563f0468d4a1"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "eae0a53087505eff67fedb238095c022"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "3e1e2f0a0d784ba092ca823a128dca49"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "bb03359761b619e5e69b52fcb054ad02"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "628a549f0a095be30587441d3a8eca10"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "94697ce82c811e626b30ce3219c2a806"
  },
  {
    "url": "guide/snaps-exports.html",
    "revision": "60ea1bbd14aa19cbe8a1373e562a8b68"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "18c5712b1b3865ccebbed1a9df521bc4"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "5b4765ac6467488f9a6f9982b533a349"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "09d12ec309797c1dcdb7a1fb3ed74f3a"
  },
  {
    "url": "guide/snaps.html",
    "revision": "c95e360dbff7a76e2640b555f956f7e5"
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
