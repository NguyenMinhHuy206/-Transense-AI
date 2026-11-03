/* Transense AI V8 - quick entry bridge and subtle presentation motion. */
(() => {
  const quick = document.getElementById('v7QuickText');
  const count = document.getElementById('v7Count');
  const go = document.getElementById('v7Translate');
  const from = document.getElementById('v7QuickLang');
  const to = document.getElementById('v8QuickTarget');
  const swap = document.getElementById('v8QuickSwap');
  const note = document.getElementById('v8QuickNote');
  const workspace = document.getElementById('translationWorkspace');
  if (!quick || !count || !go || !from || !to || !workspace) return;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const motion = () => prefersReducedMotion.matches ? 'auto' : 'smooth';

  // Mirror a previously selected workspace provider in the quick-entry panel.
  const savedModel = document.querySelector('.ai-model-option.active')?.dataset.model;
  const preferredRadio = document.querySelector(`input[name="v7Provider"][value="${savedModel === 'Google Translate' ? 'google_translate' : 'gemini'}"]`);
  if (preferredRadio) preferredRadio.checked = true;
  document.querySelectorAll('.ai-model-option').forEach(option => {
    option.addEventListener('click', () => {
      const value = option.dataset.model === 'Google Translate' ? 'google_translate' : 'gemini';
      const radio = document.querySelector(`input[name="v7Provider"][value="${value}"]`);
      if (radio) radio.checked = true;
    });
  });

  // Treat these as a single English–Vietnamese pair, never two identical languages.
  function reconcile(changed) {
    if (from.value === to.value) {
      if (changed === 'from') to.value = from.value === 'en' ? 'vi' : 'en';
      else from.value = to.value === 'en' ? 'vi' : 'en';
    }
  }
  from.addEventListener('change', () => reconcile('from'));
  to.addEventListener('change', () => reconcile('to'));
  swap?.addEventListener('click', () => {
    const current = from.value; from.value = to.value; to.value = current;
  });

  function feedback(message, kind = '') {
    if (!note) return;
    note.textContent = message;
    note.classList.toggle('is-error', kind === 'error');
    note.classList.toggle('is-success', kind === 'success');
  }
  quick.addEventListener('input', () => {
    count.textContent = `${quick.value.length}/5000`;
    quick.removeAttribute('aria-invalid');
    if (note?.classList.contains('is-error')) feedback('Bạn chỉ nhập một lần; nội dung sẽ được chuyển đến workspace để dịch.');
  });

  // The full workspace retains the original authentication, API calling and result handling.
  go.addEventListener('click', () => {
    const source = document.getElementById('sourceLanguage');
    const target = document.getElementById('targetLanguage');
    const input = document.getElementById('inputText');
    if (!input || !source || !target) {
      feedback('Không tìm thấy khung dịch gốc. Hãy kiểm tra các file của website.', 'error');
      return;
    }
    if (!quick.value.trim()) {
      feedback('Hãy nhập nội dung cần dịch trước khi tiếp tục.', 'error');
      quick.setAttribute('aria-invalid', 'true'); quick.focus();
      return;
    }
    // Existing language onchange handlers clear the editor; update languages BEFORE setting text.
    if (source.value !== from.value) {
      source.value = from.value;
      source.dispatchEvent(new Event('change', { bubbles: true }));
    }
    if (target.value !== to.value) {
      target.value = to.value;
      target.dispatchEvent(new Event('change', { bubbles: true }));
    }
    input.value = quick.value;
    input.dispatchEvent(new Event('input', { bubbles: true }));
    const provider = document.querySelector('input[name="v7Provider"]:checked')?.value || 'gemini';
    const modelName = provider === 'google_translate' ? 'Google Translate' : 'Gemini';
    const option = [...document.querySelectorAll('.ai-model-option')]
      .find(button => button.dataset.model === modelName);
    if (option && !option.classList.contains('active')) option.click();
    feedback('Đã chuyển nội dung. Kiểm tra lại rồi bấm “Dịch văn bản” ở workspace.', 'success');
    workspace.classList.add('v8-focus-target');
    workspace.scrollIntoView({ behavior: motion(), block: 'start' });
    window.setTimeout(() => workspace.classList.remove('v8-focus-target'), 1400);
    input.focus({ preventScroll: true });
  });

  // The primary Hero CTA is input-focused; other links can lead directly to the main workspace.
  document.querySelector('.v8-hero-primary')?.addEventListener('click', event => {
    event.preventDefault(); quick.focus({ preventScroll: true });
    quick.scrollIntoView({ behavior: motion(), block: 'center' });
  });

  // Opt-in motion only for sections about to enter the viewport; never conceal content if JS fails.
  const revealItems = [...document.querySelectorAll('.v8-reveal')];
  if (!prefersReducedMotion.matches && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('v8-motion-ready');
    const observer = new IntersectionObserver((entries, instance) => {
      for (const entry of entries) if (entry.isIntersecting) {
        entry.target.classList.add('v8-visible'); instance.unobserve(entry.target);
      }
    }, { threshold: 0.07, rootMargin: '0px 0px 35px 0px' });
    revealItems.forEach(el => observer.observe(el));
  } else revealItems.forEach(el => el.classList.add('v8-visible'));
})();
