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
    "revision": "926af8189357c819b3577a11af59744b"
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
    "url": "assets/js/12.4a379e87.js",
    "revision": "f5ad3d3c59e848f4f766621d0ab5e827"
  },
  {
    "url": "assets/js/13.6ad55247.js",
    "revision": "3caa840ff49581721f9e2e9c843404f4"
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
    "url": "assets/js/17.d480dbab.js",
    "revision": "b0de40e26dc76b37a05ab0eaae4a3edd"
  },
  {
    "url": "assets/js/18.e857a728.js",
    "revision": "1ce81def74bbd4ea89ecb20a68462cbf"
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
    "url": "assets/js/33.6fbac5e2.js",
    "revision": "f2a181774a79360392bdfcf107a9ac5b"
  },
  {
    "url": "assets/js/34.21256fb2.js",
    "revision": "f4edce69cf1ce33e547412b022bfae72"
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
    "url": "assets/js/37.9fdb7c87.js",
    "revision": "fd5c012f727d5572562c9678be2c75fa"
  },
  {
    "url": "assets/js/38.47e74f71.js",
    "revision": "faa0133e96877a1c70e9d6dca452bd8e"
  },
  {
    "url": "assets/js/39.08d3f69c.js",
    "revision": "f56e274ee6e41c6c8e2df366650fc76b"
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
    "url": "assets/js/app.7da84f66.js",
    "revision": "966f40fbea46037ae0c7153ec8a5130c"
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
    "revision": "bec8f7bd28fff46371db06cff8857d9d"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "dc066cfc76cc41dff073f4ec150e2d0a"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "ad6f92855915dcd369bcdf2ec6e7940c"
  },
  {
    "url": "guide/contributors.html",
    "revision": "46e8af466c070f89a9ab9775db7962ad"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "d572f083f139bb0073eaab8dc6a39ed5"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "23450cb9008ef26c3abccfbc11d725aa"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "cb37b4619a724494f2d203dbecb8c70c"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "42d3115096855d79ea18141eec457849"
  },
  {
    "url": "guide/index.html",
    "revision": "e0a412469843905773d1caf22e0c15b0"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "73f11a70eec4869a2a4a75de39bcc133"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "acded1510559ac88e8717d340e3e0d46"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "cebb1b2c1114eadd75abcfce6ed82029"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "82d8d92f04f8c32a0335018cb183b739"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "2c0ae9a096303d71ae5944d16bf81860"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "12ce15992481a060775fb10451adc198"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "cfd3610ee6de23925c0abb22e84f14f8"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "9282ea75fe8ea963e426e4c3c693aee9"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "590c96acaa6935e7d402d8144586a5f3"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "bdbd8bfdb778b37b2630a957e90b7728"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "83808d1953813a369f4237e5ae1cf27a"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "a15fd882df2ce16428a053159c9ac36b"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "ad3e29f6fad1a99ce34c19ba3a741d8b"
  },
  {
    "url": "guide/snaps-exports.html",
    "revision": "b7d14f7ecdd73f4c45c55f415f171b8f"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "be9678a9995b2523c48208ee1462f206"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "7420556490d1fb3f0e59fed2e649e5c4"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "bd98a240cf64c45047b3ad3bd343ef49"
  },
  {
    "url": "guide/snaps.html",
    "revision": "042f1c8a8306345472a6d0c253c98184"
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
