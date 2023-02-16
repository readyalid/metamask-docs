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
    "revision": "3fddbf23ea2c6ec1258779c75beb09eb"
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
    "url": "assets/js/21.e7785674.js",
    "revision": "529150aa264aaebf616e33e108b742be"
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
    "url": "assets/js/25.91556ce9.js",
    "revision": "0d4c22d67c045910cd44b8f045493ff3"
  },
  {
    "url": "assets/js/26.018a386c.js",
    "revision": "8655ddfad509d3c3bb23f472412ecf46"
  },
  {
    "url": "assets/js/27.b2fb7746.js",
    "revision": "ae865ed06839dbd9dbcc5e34f5836783"
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
    "url": "assets/js/36.01eb3487.js",
    "revision": "350fb4742d2d49e22e8948579eb15e0b"
  },
  {
    "url": "assets/js/37.99bd2b1f.js",
    "revision": "cbceb172b247b7a53db6c261d25aa9d6"
  },
  {
    "url": "assets/js/38.49971e54.js",
    "revision": "b101389564dd7a243608c89ae85b2f74"
  },
  {
    "url": "assets/js/39.c7166ad7.js",
    "revision": "4557f759a0c99d7d066a8bc92b89cc87"
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
    "url": "assets/js/app.b313c3a1.js",
    "revision": "bde239be830252b531e1ecfc1e77e0ee"
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
    "revision": "509cce25860231771cf5a6bee3673618"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "c9d5deba4e7c44cfc321aa74af00114f"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "ff9457d64f9924a107dc17b346d433b5"
  },
  {
    "url": "guide/contributors.html",
    "revision": "809a5053221a8005758b90655f3eee0c"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "0d700a7e638a7380c421420b055c3b80"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "56b3d18cacaf061c904d3af395326643"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "8ebb0ee09f782a3617f07646f096d6a6"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "2b0c529ae94853fc42ba223b777bae95"
  },
  {
    "url": "guide/index.html",
    "revision": "3541fcd71ee0f228e5b0b3f160bd6475"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "ed173f809af3e606b65c7d4268783d3b"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "ab08aacf7a1b907ec34b9dab299df09a"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "648a8e47c515774e1f7687a0d173b7e0"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "acaf62835f2f98f9c8ea1fabfff0a044"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "a7af3392f2be2a246474c85cc30836d2"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "108b55980f2eb4a7414b81b9ca3b821e"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "87732c52a750a0de1906ba327a098c61"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "1ee0a06c036d06420527dc6e26e5efe6"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "da26706f5ef9bc77be2a0baf3896a30a"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "860c857d5851f026f5514ecdb511ee21"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "839448df3975fdb1b1e3ec8860fef839"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "386938db8516a1076031a986b51d4453"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "cc332306b547da1dde014e82d4cbdbc3"
  },
  {
    "url": "guide/snaps-exports.html",
    "revision": "03aafd5a86b6fdcaa85fd3a0362285f4"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "07d39f2a6978ab0a10f6759e044560ac"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "fdff87b2d886b42eba8c1709e6021db2"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "5b6c0a8bee775f686ff4a2c59dd022a0"
  },
  {
    "url": "guide/snaps.html",
    "revision": "ecde6b46d19ef8ad1498ab8c9fad1743"
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
