/* Transense AI — automatic visual intro, optional user-initiated sound. */
(function () {
  'use strict';
  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn, { once: true });
    else fn();
  }
  ready(function () {
    const intro = document.getElementById('siteIntro');
    if (!intro) return;
    // Show exactly once per browser-tab session; F5 keeps this sessionStorage flag.
    // If storage is unavailable, keep the original animation behavior.
    const onceKey = 'transense_intro_seen_v1';
    let seen = false;
    try { seen = sessionStorage.getItem(onceKey) === '1'; } catch (_) {}
    if (seen) {
      intro.remove();
      document.documentElement.classList.remove('intro-already-seen');
      document.body.classList.remove('intro-lock');
      return;
    }
    try { sessionStorage.setItem(onceKey, '1'); } catch (_) {}
    const soundButton = intro.querySelector('[data-intro-sound]');
    const skip = intro.querySelector('[data-intro-skip]');
    const music = document.getElementById('siteIntroAudio');
    const words = Array.from(intro.querySelectorAll('.site-intro__word'));
    const timers = [];
    const duration = 5000;
    let startedAt = performance.now();
    let finished = false;
    let soundEnabled = false;
    let activeIndex = -1;
    document.body.classList.add('intro-lock');

    // We intentionally do not request audible autoplay. Chrome and other browsers
    // generally block it before a user gesture; music is an optional enhancement.
    if (music) {
      music.autoplay = false;
      music.preload = 'auto';
      music.volume = 0.72;
      music.muted = true;
    }
    function queue(fn, delay) { timers.push(window.setTimeout(fn, delay)); }
    function updateSound() {
      if (!soundButton) return;
      soundButton.textContent = soundEnabled ? '🔊 Tắt âm thanh' : '🔇 Bật âm thanh';
      soundButton.setAttribute('aria-pressed', String(soundEnabled));
      soundButton.setAttribute('aria-label', soundEnabled ? 'Tắt âm thanh intro' : 'Bật âm thanh intro');
    }
    function showWord(index) {
      if (finished || activeIndex === index) return;
      const previous = words[activeIndex];
      if (previous) {
        previous.classList.remove('is-active');
        previous.classList.add('is-exit');
        queue(function () { previous.classList.remove('is-exit'); }, 590);
      }
      activeIndex = index;
      words.forEach(function (word, i) { if (i !== index) word.classList.remove('is-active'); });
      const current = words[index];
      if (current) current.classList.add('is-active');
      intro.classList.toggle('show-final', !!current && current.classList.contains('word-final'));
    }
    function showLogo() {
      if (finished) return;
      words.forEach(function (word) { word.classList.remove('is-active'); word.classList.add('is-exit'); });
      intro.classList.remove('show-final');
      intro.classList.add('show-logo');
    }
    function stopAudio() {
      if (!music) return;
      try { music.pause(); music.currentTime = 0; } catch (_) {}
    }
    function finish() {
      if (finished) return;
      finished = true;
      timers.forEach(clearTimeout);
      stopAudio();
      intro.classList.add('is-hidden');
      document.body.classList.remove('intro-lock');
      window.setTimeout(function () { intro.remove(); }, 650);
    }
    function onSoundToggle() {
      if (!music || finished) return;
      if (soundEnabled) {
        soundEnabled = false;
        music.pause();
        music.muted = true;
        updateSound();
        return;
      }
      const elapsedSeconds = Math.max(0, Math.min(4.9, (performance.now() - startedAt) / 1000));
      // Sound begins at the matching point in the intro, not from the beginning.
      try { music.currentTime = elapsedSeconds; } catch (_) {}
      music.muted = false;
      const result = music.play();
      if (result && typeof result.then === 'function') {
        result.then(function () {
          if (finished) { music.pause(); return; }
          soundEnabled = true;
          updateSound();
        }).catch(function () {
          soundEnabled = false;
          music.muted = true;
          updateSound();
        });
      } else {
        soundEnabled = true;
        updateSound();
      }
    }
    updateSound();
    if (soundButton) soundButton.addEventListener('click', onSoundToggle);
    if (skip) skip.addEventListener('click', finish);
    showWord(0);
    queue(function () { showWord(1); }, 1000);
    queue(function () { showWord(2); }, 2000);
    queue(function () { showWord(3); }, 3000);
    queue(showLogo, 4000);
    queue(finish, duration);
  });
})();
