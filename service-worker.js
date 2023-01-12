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
    "revision": "87fbf4b7d6c29a3132958da8e1dde56a"
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
    "url": "assets/js/33.98b384d8.js",
    "revision": "a9b776c0601aaf84d007512795dc4669"
  },
  {
    "url": "assets/js/34.21256fb2.js",
    "revision": "f4edce69cf1ce33e547412b022bfae72"
  },
  {
    "url": "assets/js/35.7df5af92.js",
    "revision": "bd94a08b5dffea37a046f830113ee6bf"
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
    "url": "assets/js/app.dac1bde4.js",
    "revision": "259ef007402e618059bbb9e5e5dde279"
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
    "revision": "f9a79e188eec1e85e042a2ecde265a07"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "674c653dd542151acd5607632660238a"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "c7d2e938157b36e55b2e6270f9d733bb"
  },
  {
    "url": "guide/contributors.html",
    "revision": "03cb8b396f8040dabfadd62657cffd64"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "3d78f12192e8834252c8f456a3a7d0ac"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "a78bd69def855f476107f5746224e5ed"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "cb0a1e7ffece0e9cae58694d1becd0bc"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "404c299ec1b747fa3b8d098873a84aef"
  },
  {
    "url": "guide/index.html",
    "revision": "5c412e8b11b2e48e21d5926a03b14bac"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "2fa77bee130ed36ba70b23c34162ee5b"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "97bbe9211abdb170fa35f97b1ce0732d"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "dadae6b0b8f530ad6b579935ac5fab89"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "b74442a0a45b6b91b4c6aebda0780091"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "6ed0e6aba6fd6b7ee43a2366a5b8eb4a"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "402829825a3291a6c097eede8a9af1ab"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "faa56a5969cbc21f0c73361184b65a08"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "ec827facc3a51162fd5bc01ec802f4e2"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "59dff8d7e685d832c83f8ce78f91e435"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "b77675abe5150c0800a82394ad4bbeea"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "536617b8bd538e19873861e6f634e86a"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "ca84715bb313a5e08b0f5e81e02f88b2"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "c166092ce03588b84ef08b4a1e035d5f"
  },
  {
    "url": "guide/snaps-exports.html",
    "revision": "1e4d8688af11889bcbf42e23d1743550"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "29b0870b235f307e596b574971d84bb5"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "c8c94e6cc15e9b65cac305e35e6afdf5"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "ac7bf9318333ec4efde29e18f61c8004"
  },
  {
    "url": "guide/snaps.html",
    "revision": "9d0b5deb86af053581c454fe9a695396"
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
