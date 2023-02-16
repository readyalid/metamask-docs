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
    "revision": "9eaa11c72dcd85fdb7092c56a24aedf1"
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
    "url": "assets/js/13.6cda30bd.js",
    "revision": "c803b329aa32e655b4bb3c3ce4a5f666"
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
    "url": "assets/js/18.46428c68.js",
    "revision": "a29de5327194ae15d6c010b6e5c986a8"
  },
  {
    "url": "assets/js/19.4744b75b.js",
    "revision": "8efdae217dc93f029a62c7e51e40b077"
  },
  {
    "url": "assets/js/20.3b820be5.js",
    "revision": "04b62c8fb71fac2eac09983cba91f3a3"
  },
  {
    "url": "assets/js/21.2d507880.js",
    "revision": "b3c2f5aaa86e80092e8c1e2a2299d172"
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
    "url": "assets/js/34.acf2cac3.js",
    "revision": "ca568ef8a88d8dd333bca74d70ae6944"
  },
  {
    "url": "assets/js/35.bb243a04.js",
    "revision": "b65a587e34335ee5b7233b21a5b428b6"
  },
  {
    "url": "assets/js/36.14224ceb.js",
    "revision": "3d5c8349468a63f17ee27924246ac020"
  },
  {
    "url": "assets/js/37.ffe66790.js",
    "revision": "81e72706faefc7e179a1c63b3cd5a7f1"
  },
  {
    "url": "assets/js/38.73e68251.js",
    "revision": "2becfb05d3312ee632bd19defd1fdff6"
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
    "url": "assets/js/app.8fd6e6c5.js",
    "revision": "73804b05e142049cbf513f3e2e36d199"
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
    "revision": "293c2b5eda52acea41d1ee833738c6fe"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "886c29322ca9b71e398664108e2505e3"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "4acd019ff49adedc72614bcb5242c45b"
  },
  {
    "url": "guide/contributors.html",
    "revision": "2c385baf6dcde18464bd902bc658708f"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "d164b43af25327bc6db6dbdf0360cf5c"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "c98ff489ccf58fc8eac4b7f72f740833"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "170d384aeb3ad21803b41300298ffd09"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "984a634417ec03308a03d41ead13205e"
  },
  {
    "url": "guide/index.html",
    "revision": "52dd9ef90d85fdbea81686252133330f"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "d1ecbac759fae0124d4ba876e7412e84"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "dc6bf02944d9762e833f92297a066fd7"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "bf2261e30c00d94c159b30ed9bb84c6e"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "8cc0b22fa80a39eb7412d492ae4a7f21"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "f7499f92b6777db0fa0f3d2e21a878ca"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "fa0800c8d2c7565d6ac932fa4d0de63e"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "ac74a4f5566900ab46f1cbb2cfbc2574"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "51c5fcb084ac66aee39cfb31c22de630"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "ee3c63a5926471d639555d9256917653"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "ccd0d2d4ea398f00bbfe3dfeadc69ab8"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "6f0af5526aaa6eb51b78b156c431b3f0"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "2a5176694b01f549d089996cc567a762"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "fc9cc9fcff581b8cdda2902f66d2d87c"
  },
  {
    "url": "guide/snaps-exports.html",
    "revision": "3b95260e0e9d310bbed39e390eca0b2c"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "8909daf558e926bd8f2898897ba1cda9"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "4ab4e43c4964cdbb6029f5179835bfe4"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "2eafa039020c1aaa601f0d18a1839438"
  },
  {
    "url": "guide/snaps.html",
    "revision": "0723fe97f08a72048e32db73b5e2e6d6"
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
