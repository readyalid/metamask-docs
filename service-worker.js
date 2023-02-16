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
    "revision": "795a044cf2d6265055d8fb7e3ceb7a64"
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
    "url": "assets/js/13.01e2504c.js",
    "revision": "8dc149195631bd5d64a5525598617dac"
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
    "url": "assets/js/19.e4f80371.js",
    "revision": "b541f6bc7a6549b86755ea20630dd6b5"
  },
  {
    "url": "assets/js/20.3b820be5.js",
    "revision": "04b62c8fb71fac2eac09983cba91f3a3"
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
    "url": "assets/js/27.143d51d6.js",
    "revision": "82cff53e93b7b6ff6f3b53fbad2d39a6"
  },
  {
    "url": "assets/js/28.cec23f06.js",
    "revision": "080b1c90f27f6f3e02255dda1bfd68cb"
  },
  {
    "url": "assets/js/29.a7b9153e.js",
    "revision": "8962d4b710ca9fd09809e8c15e1593b6"
  },
  {
    "url": "assets/js/30.dce808c1.js",
    "revision": "b3f653500f04368b8352c0025eba603e"
  },
  {
    "url": "assets/js/31.4abd6822.js",
    "revision": "d34cec67d05ea8a661b5c593fae33fed"
  },
  {
    "url": "assets/js/32.04778e9d.js",
    "revision": "be467b5dc8467a3c8232db7dca071d9e"
  },
  {
    "url": "assets/js/33.2e39f5e8.js",
    "revision": "c7e861f06d519ef6881ff470ef238ff0"
  },
  {
    "url": "assets/js/34.acf2cac3.js",
    "revision": "ca568ef8a88d8dd333bca74d70ae6944"
  },
  {
    "url": "assets/js/35.6ac0a0f5.js",
    "revision": "80f24bb5d9f14af781bbe98907fcfb0f"
  },
  {
    "url": "assets/js/36.523f52d0.js",
    "revision": "a3e1938aa1c40d86748505cf0aa618ad"
  },
  {
    "url": "assets/js/37.882e59bd.js",
    "revision": "652d7c37823c74719e3530feea25d128"
  },
  {
    "url": "assets/js/38.1beb5e57.js",
    "revision": "a6e134136d38eea1ab4ec029a04f8a80"
  },
  {
    "url": "assets/js/39.07474b83.js",
    "revision": "1f05556c5b25e92f1245fc6428e8aabc"
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
    "url": "assets/js/app.ec0b84c8.js",
    "revision": "555f377412b51160ec513d42f5cbf2da"
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
    "revision": "271da1d3dc3da42205e3edf56925d7c7"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "257a4c29e57ffdead5b58c748df1c099"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "88c7bbe86a33a6805b16b7b653ecd5e1"
  },
  {
    "url": "guide/contributors.html",
    "revision": "4bf83b8652a9dd14d83e46c9714c7d4c"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "34488aefff71bc49e9272ea0ba840d2e"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "7a8a5f87e216f08a9cc3082a6ff8aab4"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "c51ae7f6c60d670fe896e47e6ce4209b"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "a54c2d1ef0f39c8a578884379acee035"
  },
  {
    "url": "guide/index.html",
    "revision": "dba740de8649962ce9f1c2e6a511e8e7"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "e1458f7d3baddb3cb0ca7aac871d3423"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "774fc670c939b447c10038ce923c066d"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "96e00bc5820582de9a00201e4fa8f987"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "7afd5a82b6c5f6cae4fc9de8d496eea1"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "18e8a3a52c01e63eabfcd01be7d5796b"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "32464aba527b78d94d97a807bf30a65d"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "ccce2ec94c3c2b0af149af47851673c6"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "819e1133fb9ff114cc88c115e21dbd43"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "c5fbe486ce5c8b6d5540c13870022290"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "aa7cd2ddbab39534d0fd7b27fe6205a2"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "2d37152a587aa9f78ffda0400f9723f3"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "3cb502a3d3f40c8adaecd6e94fafcbe7"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "55b925696723db8c411aeb139c934166"
  },
  {
    "url": "guide/snaps-exports.html",
    "revision": "5aedf9bd9085d3f5005199e67cd2888c"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "5beed26a7672529daa47c8f120a3146f"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "5993433cdeab9029b1220399e1a7e261"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "14ace8c59b659d459de394eb911fd78d"
  },
  {
    "url": "guide/snaps.html",
    "revision": "99e0c74968837f9b87849e7b4a94898f"
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
