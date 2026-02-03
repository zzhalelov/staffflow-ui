(function () {
  const isLocalhost =
    location.hostname === 'localhost' ||
    location.hostname === '127.0.0.1';

  if (isLocalhost) {
    console.log('auth.js: localhost detected, auth disabled');
    return;
  }

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
