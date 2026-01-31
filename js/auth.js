// ===== apiFetch ДОЛЖЕН БЫТЬ ВНЕ IIFE =====
async function apiFetch(url, options = {}) {
  const token = localStorage.getItem('token');

  const headers = {
    ...(options.headers || {}),
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  };

  const response = await fetch(url, {
    ...options,
    headers
  });

  if (response.status === 401 || response.status === 403) {
    localStorage.removeItem('token');
    window.location.replace('/login.html');
    throw new Error('Unauthorized');
  }

  return response;
}

// ===== guard можно в IIFE =====
(function () {
  const token = localStorage.getItem('token');
  const path = window.location.pathname;
  const isLoginPage = path.endsWith('/login.html');

  console.log('auth.js', {token, path});

  if (!token && !isLoginPage) {
    window.location.replace('/login.html');
    return;
  }

  if (token && isLoginPage) {
    window.location.replace('/');
  }
})();
