/* V27: one-time, scroll-triggered reveal for the four approved technology groups.
   No extra dependencies. Content remains visible if JS is unavailable. */
(function () {
  'use strict';
  function init() {
    const section = document.querySelector('.v22-technology-usage');
    if (!section) return;
    const groups = Array.from(section.querySelectorAll('.v22-tech-group-grid > .v22-tech-group'));
    if (groups.length !== 4) return;
    const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || !('IntersectionObserver' in window)) return;
    groups.forEach(function (group, index) {
      group.style.setProperty('--v27-delay', (index * 450) + 'ms');
    });
    const observer = new IntersectionObserver(function (entries) {
      if (!entries.some(function (entry) { return entry.isIntersecting; })) return;
      section.classList.add('v27-reveal-visible');
      observer.disconnect();
    }, {rootMargin: '0px 0px -45px 0px', threshold: 0.10});
    section.classList.add('v27-reveal-ready');
    observer.observe(section);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once:true});
  else init();
})();
