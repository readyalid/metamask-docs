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
    "revision": "16ab8b00848047a782d35fd9c06df553"
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
    "url": "assets/js/16.f7fe65a7.js",
    "revision": "05b8262b702704ccb408f464ecd849eb"
  },
  {
    "url": "assets/js/17.d480dbab.js",
    "revision": "b0de40e26dc76b37a05ab0eaae4a3edd"
  },
  {
    "url": "assets/js/18.50bfe472.js",
    "revision": "4f6a9dd5b62d3df36d5733795809238a"
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
    "url": "assets/js/27.e168dddb.js",
    "revision": "11eba3ffd1489aa77585a5db77d55d7b"
  },
  {
    "url": "assets/js/28.372a6ee4.js",
    "revision": "32eb5fde41283c6d2aea953059474a3a"
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
    "url": "assets/js/33.98b384d8.js",
    "revision": "a9b776c0601aaf84d007512795dc4669"
  },
  {
    "url": "assets/js/34.b074a91f.js",
    "revision": "df9ba2ef3a0d5ee44a774059469428c3"
  },
  {
    "url": "assets/js/35.a1b7f684.js",
    "revision": "911a313eb7e6d25632bd1d3b36db1cc1"
  },
  {
    "url": "assets/js/36.c71088c6.js",
    "revision": "96d7720bf828e5bf49f55a08dd468270"
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
    "url": "assets/js/app.cf853a17.js",
    "revision": "8a8d8368ea53573685e50a45e0967ae1"
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
    "revision": "e1d4e3b9e2b3cee609547c282d379320"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "02807fb703756da4616eafa55933e1e8"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "de2b8385f03a1a8401521256e9c2fede"
  },
  {
    "url": "guide/contributors.html",
    "revision": "c53a9635b6e674a36330933dbde437f4"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "b70445c5f3c9c5181bab396a12dac50f"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "5d4c72fe79b090c2f983077696ded95a"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "b2aab056e3db376011aee8228ae5500c"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "b5a1663cb9b946e07dcfda66c1b87eec"
  },
  {
    "url": "guide/index.html",
    "revision": "6244580b4460fc939ce4a7b9de6dfc1f"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "f78a66bd6d2a0d586bc264a9a635ff7a"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "18765d5ce33d28381595645443eaa70e"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "09958829d090624ab8adf155a97512da"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "346712a7652012389fc8d4ac1320d5bd"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "663f5db2687dcbf5da88d22bbe3fbcd0"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "ee0f08047fcca5f22d4440c7225cf346"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "ba91043128d2ab116aa2b74049671c66"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "0bc2d013d4607c0f9a1a2039b6110ac5"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "48e8be7c8e70e36dde961f2054bdece6"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "ed0a99c9cedae681fb48555fb05a8378"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "a1894e7541ee79a9d0cf51bfdb48d9aa"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "fb0487cb4b8e9e95c95abed9ebb625bf"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "0f957aba8b0cb5074921d97c3b2fdb0b"
  },
  {
    "url": "guide/snaps-exports.html",
    "revision": "35c8ea3ec419982da0fd3c1f3d98af25"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "8f5d1803bdc8711601ebbec4a3e8d2f7"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "6b472f2ca40edd327da2edcbe93961d8"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "8a714408875906fb4f1aadca277f755c"
  },
  {
    "url": "guide/snaps.html",
    "revision": "d67c9a0deea5456d3c0dfcf61468c746"
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
