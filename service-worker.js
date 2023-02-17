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
    "revision": "63784955470dc981da9970b743182956"
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
    "url": "assets/js/12.4a379e87.js",
    "revision": "f5ad3d3c59e848f4f766621d0ab5e827"
  },
  {
    "url": "assets/js/13.054ad545.js",
    "revision": "2af6393e2ec9c8bb71473f74ed7bc0b9"
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
    "url": "assets/js/16.156d4b17.js",
    "revision": "388c07a3e066e6c2a4cc68d72751e188"
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
    "url": "assets/js/25.aaf6d8d8.js",
    "revision": "2dafd4cd7a4f410d9441ddf89fb8c38a"
  },
  {
    "url": "assets/js/26.851366da.js",
    "revision": "8ebf0e4a3a780cf661afd5cd4bea8219"
  },
  {
    "url": "assets/js/27.bd99d4d7.js",
    "revision": "88c0c8313e2a5eb11a98d21a7a70c379"
  },
  {
    "url": "assets/js/28.372a6ee4.js",
    "revision": "32eb5fde41283c6d2aea953059474a3a"
  },
  {
    "url": "assets/js/29.c4bbbb87.js",
    "revision": "c67606a743ccfdf2640e4a6ec2a13511"
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
    "url": "assets/js/35.1373bc31.js",
    "revision": "ae923e8789d8cbf0c896e340768f21b6"
  },
  {
    "url": "assets/js/36.7e175d0c.js",
    "revision": "281d52e57dfb5bc65b54eca037bc58b3"
  },
  {
    "url": "assets/js/37.c343127d.js",
    "revision": "b1a1595ccb6d6bef6f40a8745a1dc2d3"
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
    "url": "assets/js/app.b99f72c6.js",
    "revision": "40909792bbda09123a297ef6e24e0c2b"
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
    "revision": "6209899094fab535f0071fa461f7b25e"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "e68ccc57b78128089aad833e8f1ac563"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "932cc4abef33c5f8859f66e4ce6a747a"
  },
  {
    "url": "guide/contributors.html",
    "revision": "73c04a552d5ddb5431d118fde74ea106"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "8528089fdee308258b66d37231f27141"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "7778fe44d2bf21ab13005164131b439d"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "e0f21780baeee19acadf9d424d3fb56f"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "888a93ccf93ebce6604bc88aea8f98bd"
  },
  {
    "url": "guide/index.html",
    "revision": "972874d0da8416960f17e6ab9ee0f5b6"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "14538d6fa938b27b431db29d12142d07"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "3693f9f8f9ace81e24d4f6ad9c3c06c3"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "791013a230d29350becd6ee65a7316d7"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "c60532331182d29484e3954d8c2a835d"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "7800bbdce68dcfecf233f77cd5fd1948"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "321233bc08e2cf08a4953eae9a4372f3"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "515a01e1daea38ff5aa72d6c42016e92"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "23947f9bcf0f93fbb32e7b0f9836997f"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "6e83e37cd59a73be04985bd8e90d7359"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "729bf903efd8d777f69d04d273b6c182"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "de8234b92f23a3f5108902bc4f08bd12"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "6e96141f59a6c8b15147b412e89b129d"
  },
  {
    "url": "guide/snaps-concepts.html",
    "revision": "3b00d6d7eaee3b28c3d6ab2ab2269e91"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "b2844b21252c702300c6b2b29e1d3438"
  },
  {
    "url": "guide/snaps-exports.html",
    "revision": "7c666240ca9e77f20f5046f061613276"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "c70f9f8fbca11a2ea39d5f34d0a16ba7"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "0e900599c124518f5867da885f5a68fe"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "2839c06607458c7d9f4349acbd240898"
  },
  {
    "url": "guide/snaps.html",
    "revision": "7e745f14aaa54dded982a6e8945bffef"
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
