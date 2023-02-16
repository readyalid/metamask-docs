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
    "revision": "7c0b8956b6b77d0732a855eb07cd743e"
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
    "url": "assets/js/13.8dfa88da.js",
    "revision": "95c7ebb6153591b293cec7f0e86b5508"
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
    "url": "assets/js/35.844ca884.js",
    "revision": "b3288ba7b57b51b1cfe819194fd054b6"
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
    "url": "assets/js/38.f3d67bf1.js",
    "revision": "f76f0e266e80da74db21514a39fb5442"
  },
  {
    "url": "assets/js/39.e47d525a.js",
    "revision": "9d390f89b34393650e29913606214370"
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
    "url": "assets/js/app.9f6e8b97.js",
    "revision": "3eb56e151ccbf3d2f565e5397403d459"
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
    "revision": "6e2b738079edccf04255efb33a90478f"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "55a2e617b50ed46a66b9412ae5e532ab"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "7d8b2ea4ce67e28d78be10ca03af37a9"
  },
  {
    "url": "guide/contributors.html",
    "revision": "a16dab6811d85063d1be74a175e1ddb1"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "f5581629bc32e683cd7bf881304f81fe"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "2a1199f4d73046fa4a3790ce0c28dc33"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "a764c48518db67e5c28da5d0f60f1b35"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "8f85f71354f0f8e04025ff3718539414"
  },
  {
    "url": "guide/index.html",
    "revision": "11b03bc0ff47212ca1923ba45563a54a"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "ce5676d8a8d48620d4076818c6206ba2"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "ecc65e60a7f69b06823bfe846e7154e5"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "21f64d975697bf30688c0c9e5e4611f3"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "c70e70b8af5eb167b469c0566362924c"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "cfcb51653b5765b69a6ce5d112eae8c4"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "9f1124baaec94ebedc940dbab8b1a22c"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "14d42eb658c3195de5735ab3e1723fb8"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "e504171b5eaefc524ff240995430f54b"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "e5b9bb59a8258d713f901af729533b34"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "46d9ed317eb99d7716c2420fec1a6124"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "5da06cb1bc137e33f6a38950559cbad5"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "f8e78e3585c7cadefb35eece44f0dc99"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "89a1b50354a19dd8e78fdeea5c809d32"
  },
  {
    "url": "guide/snaps-exports.html",
    "revision": "2fdfb45c9aec35c3314840514e268625"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "9f60bc9d40295c7d16fffa2e39f9f0ae"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "994dfcc93185006ed2526e239f401de5"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "18b860363616dd05dc444e5cfed80fbd"
  },
  {
    "url": "guide/snaps.html",
    "revision": "330536a460c942877c67ad52549c8294"
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
