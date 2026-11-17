(function () {
  var id = document.currentScript.dataset.measurementId;
  var dnt = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
  if (!id || dnt === '1' || dnt === 'yes' || navigator.globalPrivacyControl === true) return;

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'granted'
  });
  gtag('js', new Date());
  gtag('config', id, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });

  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
  document.head.appendChild(script);
}());
