/* Transense V11: presentation-only scroll reveal. No translation/API overrides. */
(() => {
  const items = [...document.querySelectorAll('.v8-reveal')];
  if (!items.length) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach(item => item.classList.add('v8-visible'));
    return;
  }
  document.documentElement.classList.add('v8-motion-ready');
  const observer = new IntersectionObserver((entries, ob) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('v8-visible');
        ob.unobserve(entry.target);
      }
    }
  }, {threshold:.07,rootMargin:'0px 0px 35px 0px'});
  items.forEach(item => observer.observe(item));
})();
