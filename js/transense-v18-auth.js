/* Transense AI V18 — demo-only registration/login, compatible with V17 storage.
   This is intentionally NOT production authentication. */
(() => {
  'use strict';
  const byId = id => document.getElementById(id);
  const emailIsValid = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const fingerprint = value => {
    let h = 2166136261;
    for (const c of value) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); }
    return (h >>> 0).toString(16);
  };
  const toast = (message, isSuccess = false) => {
    const el = byId('authToast');
    if (!el) return;
    const icon = document.createElement('span');
    icon.className = 'auth-toast-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = isSuccess ? '✓' : 'i';
    const label = document.createElement('span');
    label.className = 'auth-toast-text';
    label.textContent = message;
    el.replaceChildren(icon, label);
    el.className = `auth-toast show${isSuccess ? ' success' : ''}`;
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => { el.className = 'auth-toast'; }, 4600);
  };
  function setError(field, message) {
    const el = byId(field + 'Error');
    if (el) el.textContent = message || '';
    const input = byId(field);
    if (input) input.setAttribute('aria-invalid', message ? 'true' : 'false');
  }
  function clearErrorOnInput(fields) {
    fields.forEach(key => byId(key)?.addEventListener('input', () => setError(key, '')));
  }
  document.querySelectorAll('[data-toggle]').forEach(button => {
    button.addEventListener('click', () => {
      const field = byId(button.dataset.toggle);
      if (!field) return;
      const visible = field.type === 'password';
      field.type = visible ? 'text' : 'password';
      button.setAttribute('aria-label', visible ? 'Ẩn mật khẩu' : 'Hiện mật khẩu');
      button.style.color = visible ? '#0d65ee' : '';
    });
  });

  if (byId('registerForm')) {
    const form = byId('registerForm');
    clearErrorOnInput(['fullName', 'email', 'password', 'confirmPassword']);
    byId('agreeTerms')?.addEventListener('change', () => setError('agreeTerms', ''));
    byId('termsLink')?.addEventListener('click', event => {
      event.preventDefault();
      toast('Đây là bản thử nghiệm phục vụ đồ án. Chức năng tài khoản demo sử dụng bộ nhớ cục bộ trên trình duyệt, không cung cấp xác thực trực tuyến.');
    });
    byId('password').addEventListener('input', event => {
      const pwd = event.target.value;
      const strength = byId('passwordStrength');
      let level = 0;
      if (pwd.length) level = pwd.length < 8 ? 1 : 2;
      if (pwd.length >= 8 && /[a-z]/.test(pwd) && /[A-Z]/.test(pwd) && /\d/.test(pwd)) level = 3;
      if (pwd.length >= 12 && /[^\w]/.test(pwd) && level >= 3) level = 4;
      strength.dataset.strength = String(level);
      byId('strengthText').textContent = ['Chưa nhập mật khẩu', 'Mật khẩu còn yếu', 'Đạt tối thiểu 8 ký tự', 'Mật khẩu khá mạnh', 'Mật khẩu mạnh'][level];
    });
    form.addEventListener('submit', event => {
      event.preventDefault();
      const name = byId('fullName').value.trim().replace(/\s+/g, ' ');
      const email = byId('email').value.trim().toLowerCase();
      const pwd = byId('password').value;
      const confirmation = byId('confirmPassword').value;
      const agreed = byId('agreeTerms').checked;
      let valid = true;
      for (const key of ['fullName','email','password','confirmPassword','agreeTerms']) setError(key, '');
      if (name.length < 2) { setError('fullName', 'Vui lòng nhập họ và tên ít nhất 2 ký tự.'); valid = false; }
      if (!emailIsValid(email)) { setError('email', 'Vui lòng nhập địa chỉ email hợp lệ.'); valid = false; }
      if (pwd.length < 8) { setError('password', 'Mật khẩu phải có ít nhất 8 ký tự.'); valid = false; }
      if (confirmation !== pwd || !confirmation) { setError('confirmPassword', 'Xác nhận mật khẩu chưa khớp.'); valid = false; }
      if (!agreed) { setError('agreeTerms', 'Vui lòng đồng ý với điều khoản trước khi tiếp tục.'); valid = false; }
      if (!valid) return;
      const btn = byId('registerSubmit');
      btn.disabled = true;
      btn.textContent = 'Đang tạo tài khoản...';
      try {
        const account = { fullName: name, email, passwordFingerprint: fingerprint(pwd) };
        localStorage.setItem('transenseRegisteredDemoAccount', JSON.stringify(account));
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.setItem('loginProvider', 'local-demo');
        localStorage.setItem('accountStatus', 'active');
        localStorage.setItem('accountCreatedAt', new Date().toISOString());
        byId('registerFeedback').textContent = ''; // Toast provides the confirmation without duplicating the message inside the card.
        toast('Đăng ký thành công — vui lòng đăng nhập để sử dụng.', true);
        setTimeout(() => { window.location.assign('login.html'); }, 1200);
      } catch (error) {
        byId('registerFeedback').textContent = 'Không thể lưu tài khoản trên trình duyệt. Vui lòng kiểm tra quyền lưu dữ liệu và thử lại.';
        btn.textContent = 'Tạo tài khoản'; btn.disabled = false;
      }
    });
  }

  if (byId('loginForm')) {
    clearErrorOnInput(['loginEmail', 'loginPassword']);
    const savedEmail = localStorage.getItem('transenseRememberEmail');
    if (savedEmail) { byId('loginEmail').value = savedEmail; byId('rememberLogin').checked = true; }
    byId('forgotPassword')?.addEventListener('click', event => {
      event.preventDefault();
      toast('Phiên bản demo chưa hỗ trợ gửi email đặt lại mật khẩu. Bạn có thể đăng ký lại tài khoản demo hoặc dùng tài khoản thử nghiệm.');
    });
    byId('appleSoon')?.addEventListener('click', () => toast('Đăng nhập với Apple sẽ được tích hợp trong phiên bản sau. Hiện tại vui lòng dùng email và mật khẩu demo.'));
    byId('googleDemo')?.addEventListener('click', () => {
      toast('Google OAuth chưa được kết nối. Trong bản demo, hãy nhập địa chỉ Gmail và mật khẩu tài khoản đã đăng ký để tiếp tục.');
      byId('loginEmail').focus();
    });
    byId('loginForm').addEventListener('submit', event => {
      event.preventDefault();
      const email = byId('loginEmail').value.trim().toLowerCase();
      const pwd = byId('loginPassword').value;
      setError('loginEmail', ''); setError('loginPassword', '');
      byId('loginFeedback').textContent = '';
      if (!emailIsValid(email)) { setError('loginEmail', 'Vui lòng nhập email hợp lệ.'); return; }
      if (pwd.length < 8) { setError('loginPassword', 'Vui lòng nhập mật khẩu có ít nhất 8 ký tự.'); return; }
      let account = null;
      try { account = JSON.parse(localStorage.getItem('transenseRegisteredDemoAccount') || 'null'); } catch (_) {}
      const registered = !!(account && email === account.email && fingerprint(pwd) === account.passwordFingerprint);
      const builtIn = email === 'example@gmail.com' && pwd === '12345678';
      if (!registered && !builtIn) {
        byId('loginFeedback').textContent = 'Email hoặc mật khẩu demo chưa chính xác.';
        return;
      }
      const btn = byId('loginSubmit'); btn.disabled = true; btn.textContent = 'Đang đăng nhập...';
      const name = registered ? account.fullName : 'Nguyễn Minh Huy';
      try {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('loginProvider', 'local-demo');
        localStorage.setItem('lastLogin', new Date().toISOString());
        if (byId('rememberLogin').checked) localStorage.setItem('transenseRememberEmail', email);
        else localStorage.removeItem('transenseRememberEmail');
        toast('Đăng nhập thành công! Đang mở Transense AI...', true);
        byId('loginFeedback').textContent = ''; // Keep one compact success notification above the form.
        setTimeout(() => { window.location.assign('index.html'); }, 950);
      } catch (error) {
        byId('loginFeedback').textContent = 'Trình duyệt không cho phép lưu phiên đăng nhập. Vui lòng kiểm tra cài đặt và thử lại.';
        btn.disabled = false; btn.textContent = 'Đăng nhập';
      }
    });
  }
})();
