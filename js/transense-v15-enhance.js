// V15: read-only supplemental statistics; never overwrites translation history or profiles.
(() => {
  const page = location.pathname.split('/').pop() || 'index.html';
  if (page === 'profile.html') {
    const count = document.getElementById('v15LanguagesUsed');
    if (count) {
      try {
        const history = JSON.parse(localStorage.getItem('translationHistory') || '[]');
        const set = new Set();
        if (Array.isArray(history)) history.forEach(item => {
          if (item.sourceLanguage) set.add(item.sourceLanguage);
          if (item.targetLanguage) set.add(item.targetLanguage);
        });
        count.textContent = String(set.size);
      } catch (error) { count.textContent = '0'; }
    }
  }
  // Help callers discover sign-in state immediately when moving between pages.
  document.documentElement.classList.toggle('v15-guest', localStorage.getItem('isLoggedIn') !== 'true');
})();
