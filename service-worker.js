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
    "revision": "1f010c0ea31e8527edc4960f13b6d463"
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
    "url": "assets/js/12.d3159c1b.js",
    "revision": "a556cc7d0e22a196c33a4bc4ccadaaf9"
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
    "url": "assets/js/16.f7fe65a7.js",
    "revision": "05b8262b702704ccb408f464ecd849eb"
  },
  {
    "url": "assets/js/17.d480dbab.js",
    "revision": "b0de40e26dc76b37a05ab0eaae4a3edd"
  },
  {
    "url": "assets/js/18.721b460b.js",
    "revision": "d8d1d4bdfcb53fd7fabdcd454f1de9fa"
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
    "url": "assets/js/30.0e453ea1.js",
    "revision": "7c4dcc48b600e9cb6b58a6cecd0e5a13"
  },
  {
    "url": "assets/js/31.a4ba52f1.js",
    "revision": "a1cba283b59e54ce43bc70e60bcb2738"
  },
  {
    "url": "assets/js/32.f30d355b.js",
    "revision": "45ef8af44602e99799805d94344007e8"
  },
  {
    "url": "assets/js/33.a94bc7ae.js",
    "revision": "3a5b1af9079d6e64c86b0002de6aa0fc"
  },
  {
    "url": "assets/js/34.b074a91f.js",
    "revision": "df9ba2ef3a0d5ee44a774059469428c3"
  },
  {
    "url": "assets/js/35.0613a5a8.js",
    "revision": "07bbd09899f69440ccd6c7c53c07bbaf"
  },
  {
    "url": "assets/js/36.db35d5f2.js",
    "revision": "8be6393b5f2656f59943f87aff8819b8"
  },
  {
    "url": "assets/js/37.ffe66790.js",
    "revision": "81e72706faefc7e179a1c63b3cd5a7f1"
  },
  {
    "url": "assets/js/38.52d12d9a.js",
    "revision": "00cec1d81a9fad5943a62376c3566043"
  },
  {
    "url": "assets/js/39.dfdea477.js",
    "revision": "1f903fd7e1ced94a75fdf18eab106dd2"
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
    "url": "assets/js/app.fa044813.js",
    "revision": "7d1251c8c25d97ecfa729de1e232de17"
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
    "revision": "839ad1a0f7224f694963513084f78c02"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "933226a022f4b16ae85a6014f79161a5"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "b3b31b3331e3d126f264c317e6314594"
  },
  {
    "url": "guide/contributors.html",
    "revision": "5fdb4415b679aaabe4dc6d90ba643f88"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "6d34a0880cdd75a82c179e5b980f0e14"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "5f6d931b0a8f7ab84eb066a9898f521c"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "10184daf8756f3d37482a347e67b0a3a"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "719c959626a65eb08dcfe6be4a2a68cb"
  },
  {
    "url": "guide/index.html",
    "revision": "077ce0fe1a21b6cef79fa3cf2d2f21c2"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "7959fb53f84e20f19ad40913c2ed75ba"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "1f5b161950b896da025efc9e7e6ef8f8"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "87a50701864c10a38312d85ea70d8459"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "90c2cd6afe8b3097e2f458bd0a287d7c"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "205431e4b2a1787cf642ef4d36052fcf"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "aad2cb2704a75bfe845f65ca86798d52"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "833edc39858254b91f625638927745c5"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "035f2fa2252cf356a8fc24446a36f3ca"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "bf6e3d993b5b55b34e2f80aa7245975e"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "c91248de6eed8b9a8ecc6e5272d64712"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "70030add4b7b36a84bdb4f6c3ca7f4cb"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "0aeb19df546b6f1adfda681aa5dd0e3d"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "73e2920ada00505424f5616ab7fc87a7"
  },
  {
    "url": "guide/snaps-exports.html",
    "revision": "9ecf1747eae52e11cb254bbb5b77ed70"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "6ffee1828ce61ebd2514bf2d22aa932d"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "9a5fdc2fd7acbc600a7341133b6b8db3"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "cf9693cdceb1404d8525afb064bcfbd3"
  },
  {
    "url": "guide/snaps.html",
    "revision": "585475245c81a7bde36e8ac5fa11903a"
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
