/* eslint-disable no-console */
(function () {
  // GitHub Pages: scope is /app/, SW is emitted as /app/sw.js (because Vite base is /app/).
  if (!('serviceWorker' in navigator)) return;

  window.addEventListener('load', function () {
    navigator.serviceWorker
      .register('/app/sw.js', { scope: '/app/' })
      .catch(function (err) {
        console.warn('[PWA] service worker registration failed', err);
      });
  });
})();

