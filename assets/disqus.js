(function () {
  var settings = document.currentScript.dataset;
  window.disqus_config = function () {
    this.page.url = settings.disqusUrl;
    this.page.identifier = settings.disqusUrl;
  };

  var script = document.createElement('script');
  script.src = 'https://' + settings.disqusShortname + '.disqus.com/embed.js';
  script.setAttribute('data-timestamp', Date.now());
  document.head.appendChild(script);
}());
