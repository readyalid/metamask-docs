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
    "revision": "2ec39a5f045de7add72e20ff9edfd27d"
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
    "url": "assets/js/10.931ea624.js",
    "revision": "66bcaed0c581c74d456f62434db7fb1c"
  },
  {
    "url": "assets/js/11.f4837159.js",
    "revision": "910fca16c06dcfae7a9bd6e33b915423"
  },
  {
    "url": "assets/js/12.5d33d526.js",
    "revision": "8f5f722e4f49a57a9f14cd9532d7b1d8"
  },
  {
    "url": "assets/js/13.6a5e4ebc.js",
    "revision": "592743f9288fc5be739bf2cd042ed897"
  },
  {
    "url": "assets/js/14.60991efe.js",
    "revision": "551424eb268c52544160b32ba75443a9"
  },
  {
    "url": "assets/js/15.bb808957.js",
    "revision": "6f2ab264d5067affce65fa1a2a071b4f"
  },
  {
    "url": "assets/js/16.f7fe65a7.js",
    "revision": "05b8262b702704ccb408f464ecd849eb"
  },
  {
    "url": "assets/js/17.0d8fb8d1.js",
    "revision": "88ac4c6fa797b584d5a7b5b6776a0643"
  },
  {
    "url": "assets/js/18.62065d5f.js",
    "revision": "6d58a29813d389d8de7773823515ac3b"
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
    "url": "assets/js/22.03bc098f.js",
    "revision": "30e79a5e04df4d67f8b2821a3ac3e50e"
  },
  {
    "url": "assets/js/23.6e482097.js",
    "revision": "866b94d8958dfacab835a73fcde78847"
  },
  {
    "url": "assets/js/24.52d95107.js",
    "revision": "be099918a6f21e6d24313ae99f6a49d1"
  },
  {
    "url": "assets/js/25.aaf6d8d8.js",
    "revision": "2dafd4cd7a4f410d9441ddf89fb8c38a"
  },
  {
    "url": "assets/js/26.14fb36bb.js",
    "revision": "f25fb3b699e6cc4596a56b5b772dd3bc"
  },
  {
    "url": "assets/js/27.8be8533d.js",
    "revision": "2b283fdc3134d038b93caa23dd9ad789"
  },
  {
    "url": "assets/js/28.ba915612.js",
    "revision": "3b2fd7639857dc9cc83cd4f02e29d0fa"
  },
  {
    "url": "assets/js/29.a7b9153e.js",
    "revision": "8962d4b710ca9fd09809e8c15e1593b6"
  },
  {
    "url": "assets/js/30.b54b88d7.js",
    "revision": "89ba308e6898b3e4f478ef7b3ac66d64"
  },
  {
    "url": "assets/js/31.a4ba52f1.js",
    "revision": "a1cba283b59e54ce43bc70e60bcb2738"
  },
  {
    "url": "assets/js/32.06188479.js",
    "revision": "6c8bf4ae55efa29120d06581f2a6074d"
  },
  {
    "url": "assets/js/33.2e39f5e8.js",
    "revision": "c7e861f06d519ef6881ff470ef238ff0"
  },
  {
    "url": "assets/js/34.b074a91f.js",
    "revision": "df9ba2ef3a0d5ee44a774059469428c3"
  },
  {
    "url": "assets/js/35.ccc7ab26.js",
    "revision": "401312ff53e20d92c919bd8a48d65ec6"
  },
  {
    "url": "assets/js/36.dcf1d75c.js",
    "revision": "65626fa24a43d9ee6607f54c58681f57"
  },
  {
    "url": "assets/js/37.d0f9d2d5.js",
    "revision": "8e5e9ce1094951257ed8b01194105c2b"
  },
  {
    "url": "assets/js/38.bc59aa30.js",
    "revision": "68e0cc9c4a4a34c626c6e35bcebcdbfa"
  },
  {
    "url": "assets/js/39.2eeec95f.js",
    "revision": "9f2556eb42399f1f9a47744b5bc1062c"
  },
  {
    "url": "assets/js/4.da077af0.js",
    "revision": "9a49351623281df26ca8c972cc338bf3"
  },
  {
    "url": "assets/js/40.09cfdbdc.js",
    "revision": "3e8cf7117d07e49fb34909ece1e37bee"
  },
  {
    "url": "assets/js/41.84dfac92.js",
    "revision": "e1faada2b765aac9a8943fefe198a23c"
  },
  {
    "url": "assets/js/5.25a3c5c3.js",
    "revision": "903f45a6c33108526f4491ef0d6932ec"
  },
  {
    "url": "assets/js/6.83c305ad.js",
    "revision": "8daa6e692a934de403a2f83fb79cb44a"
  },
  {
    "url": "assets/js/7.1de43fb3.js",
    "revision": "dca8f99f240a9a96934e9baa34e41374"
  },
  {
    "url": "assets/js/8.5b856ab8.js",
    "revision": "9d6587df579005c10edc76f71c4c3de6"
  },
  {
    "url": "assets/js/9.1df3fa70.js",
    "revision": "cf48cf48cfb5822fed2ff17ca00a539f"
  },
  {
    "url": "assets/js/app.3d5003cc.js",
    "revision": "83995acb6cd31f84f0b6688568d779f2"
  },
  {
    "url": "assets/js/vendors~docsearch.d5583204.js",
    "revision": "f17c04b1a1bf5bb9d33ef04fc7ce56cf"
  },
  {
    "url": "assets/js/vendors~notification.7830c261.js",
    "revision": "7bc22d6fb5ada409e6b49d6c2a9ca2fe"
  },
  {
    "url": "faq/index.html",
    "revision": "d892f255216e7da9b82ffe1e3f87f9bb"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "9ed443ceaae706ad1456fa3012ddc5e1"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "851a57950be0f6251b03de4e9ac267bd"
  },
  {
    "url": "guide/contributors.html",
    "revision": "6952c60743bc2dcdc0bc38c7446dbe36"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "2ebc973eea351f9f7faf022cfb7ee7b5"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "49c21307a7fa5ab000c6c61e05eecc35"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "735ddc3e3ab1c0ab33b876816cf33756"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "3e873bf93b13b2246e13babf8af15428"
  },
  {
    "url": "guide/index.html",
    "revision": "ae22057b283c6211b440aa4080d9cb7b"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "90b9474319f9706dd2cdf796bcf07e0b"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "063f79fd6422d419f1b775ae2282fa80"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "83eca6bec1f9058e25693a813e1a13e9"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "ddd731fbcb8760d6bfba4810240d39f6"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "7fa00fa35e6d6c5c411cdc31bf1ea165"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "580b61fab52e53b444855a9f84db5073"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "4329b1d149133e9ec6fe5e1385e35728"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "4a4419f841748af3dba29188ede5317f"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "907b2de72dc80506b9a3741fbf2cc2d7"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "e9c0957d1002ba7b2c95be32d03870ff"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "148833ff60e29bc70f91e07a3062afaf"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "1a2cddabcba9a8b185dcd32f9fde8778"
  },
  {
    "url": "guide/snaps-concepts.html",
    "revision": "12d5104855a5403c679c98fa54349d80"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "7749e24fc167b78a8fbac9ac23527f81"
  },
  {
    "url": "guide/snaps-exports.html",
    "revision": "75cff8cdfe6b8b6779a72f4f94250c97"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "29f3e65dd4e82b11c1176729b15993a6"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "2e720138b53b135db8d17f37f52b3030"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "e09a98353cdd8580e6acff60977b61af"
  },
  {
    "url": "guide/snaps.html",
    "revision": "09b0b5e0b6a0e28d5a3fd82c46f840a7"
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
