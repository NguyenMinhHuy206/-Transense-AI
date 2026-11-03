(() => {
  const page = location.pathname.split('/').pop() || 'index.html';
  const wrap = document.querySelector('.nav-user-wrap');
  const trigger = wrap?.querySelector('.nav-user-trigger');
  const dropdown = wrap?.querySelector('.user-dropdown');
  const navbar = document.querySelector('.navbar');
  const logged = localStorage.getItem('isLoggedIn') === 'true';
  const storedUserName = localStorage.getItem('userName') || 'Người dùng';

  const themeVersionKey = 'transenseThemeVersion';
  const themeVersionValue = 'v13-landing-default-light';
  if (localStorage.getItem(themeVersionKey) !== themeVersionValue) {
    localStorage.setItem('transenseTheme', 'light');
    localStorage.setItem(themeVersionKey, themeVersionValue);
  }

  const savedTheme = localStorage.getItem('transenseTheme');
  const theme = (savedTheme === 'light' || savedTheme === 'dark') ? savedTheme : 'light';

  const themeIcons = {
    light: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>',
    dark: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 15.2A8.3 8.3 0 0 1 8.8 4 8.6 8.6 0 1 0 20 15.2Z"/></svg>'
  };

  const applyTheme = (value) => {
    document.documentElement.dataset.theme = value;
    document.querySelectorAll('.menu-theme-icon, .header-theme-btn').forEach(icon => {
      icon.innerHTML = themeIcons[value] || themeIcons.light;
    });
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.setAttribute('aria-checked', String(value === 'light'));
      btn.setAttribute('aria-label', value === 'light'
        ? 'Đang bật chế độ sáng. Nhấn để chuyển sang tối'
        : 'Đang bật chế độ tối. Nhấn để chuyển sang sáng');
    });
    document.querySelectorAll('.theme-mode-name').forEach(el => {
      el.textContent = value === 'light' ? 'Sáng' : 'Tối';
    });
  };

  applyTheme(theme);

  document.querySelectorAll('.nav-page').forEach(a => {
    const navTarget = a.dataset.nav;
    const current = page || 'index.html';
    a.classList.toggle('active', navTarget === current || (!page && navTarget === 'index.html'));
  });

  document.querySelectorAll('.demo-badge').forEach(el => { el.style.display = 'none'; });

  if (navbar) navbar.classList.toggle('guest-mode', !logged);
  if (document.body) document.body.classList.toggle('guest-mode', !logged);

  document.querySelectorAll('.header-theme-btn, .theme-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('transenseTheme', next);
      applyTheme(next);
    });
  });

  // Public hero remains visible. Translation workspace and profile/history require login.
  const authActions = document.querySelectorAll('[data-auth-action="translate"]');
  authActions.forEach(link => {
    if (logged) {
      link.setAttribute('href', '#translationWorkspace');
      if (link.classList.contains('primary') || link.classList.contains('ts13-button-main')) {
        link.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg><span>Mở công cụ dịch</span><span aria-hidden="true">→</span>';
      } else {
        link.innerHTML = 'Dịch ngay <span aria-hidden="true">→</span>';
      }
    } else {
      link.setAttribute('href', 'login.html');
    }
  });

  const profileLinks = document.querySelectorAll('a[href="profile.html"]');
  if (!logged) {
    if (page === 'history.html' || page === 'profile.html') {
      window.location.href = 'login.html';
      return;
    }

    if (page === 'index.html') {
      const translator = document.querySelector('.translation-app');
      const context = document.querySelector('.context-pro');
      if (translator) {
        translator.classList.add('guest-locked');
        for (const child of [...translator.children]) {
          child.setAttribute('inert', '');
          child.setAttribute('aria-hidden', 'true');
        }
        const overlay = document.createElement('div');
        overlay.className = 'guest-lock-overlay';
        overlay.innerHTML = `<div class="guest-lock-card">
          <div class="guest-lock-symbol" aria-hidden="true">🔒</div>
          <div class="guest-lock-title">Đăng nhập để sử dụng Transense AI</div>
          <p>Đăng nhập để dịch văn bản, xem giải thích ngữ cảnh, phát âm và quản lý lịch sử bản dịch.</p>
          <a href="login.html" class="guest-lock-button">Đăng nhập để bắt đầu</a>
        </div>`;
        translator.appendChild(overlay);
      }
      if (context) {
        context.classList.add('guest-locked-context');
        context.setAttribute('inert', '');
      }
      document.addEventListener('click', (event) => {
        const target = event.target.closest('#translateButton, #analyzeContextBtn, [data-auth-action="translate"]');
        if (!target) return;
        if (target.matches('[data-auth-action="translate"]')) return;
        event.preventDefault();
        event.stopImmediatePropagation();
        window.location.assign('login.html');
      }, true);
    }

    profileLinks.forEach(link => {
      if (!link.closest('.nav-user-wrap')) return;
      link.setAttribute('href', 'login.html');
    });

    return;
  }

  const nameEl = wrap?.querySelector('#accountName, #navAccountName');
  if (nameEl) nameEl.textContent = storedUserName;
  wrap?.querySelectorAll('.account-dropdown-name').forEach(el => el.textContent = storedUserName);
  wrap?.querySelectorAll('.account-dropdown-avatar').forEach(el => el.textContent = (storedUserName.trim()[0] || 'T').toUpperCase());

  if (trigger) {
    trigger.setAttribute('href', '#');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-label', 'Mở menu tài khoản');
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const open = !wrap.classList.contains('menu-open');
      wrap.classList.toggle('menu-open', open);
      trigger.setAttribute('aria-expanded', String(open));
    });
  }

  wrap?.querySelector('.menu-logout')?.addEventListener('click', () => {
    if (confirm('Bạn có muốn đăng xuất khỏi Transense AI?')) {
      localStorage.setItem('isLoggedIn', 'false');
      window.location.href = 'index.html';
    }
  });

  document.addEventListener('click', (e) => {
    if (wrap && !wrap.contains(e.target)) {
      wrap.classList.remove('menu-open');
      trigger?.setAttribute('aria-expanded', 'false');
    }
  });

  trigger?.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      wrap?.classList.add('menu-open');
      dropdown?.querySelector('a')?.focus();
    }
    if (e.key === 'Escape') {
      wrap?.classList.remove('menu-open');
      trigger?.setAttribute('aria-expanded', 'false');
    }
  });
})();
