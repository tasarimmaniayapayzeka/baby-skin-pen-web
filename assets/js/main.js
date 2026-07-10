// Baby Skin Pen — etkileşimler
(function () {
  // Mobil menü
  var hamburger = document.getElementById('hamburger');
  var nav = document.getElementById('nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }

  // Scroll reveal
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { observer.observe(el); });

  // Dokunmatik cihazlarda kapsül kartı çevirme (hover yerine tık)
  document.querySelectorAll('.cap-card').forEach(function (card) {
    card.addEventListener('touchstart', function () {
      card.classList.toggle('hover');
    }, { passive: true });
  });
})();
