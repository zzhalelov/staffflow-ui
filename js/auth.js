<script>
  (function () {
  const token = localStorage.getItem('access_token');

  // если мы на странице логина
  const isLoginPage = window.location.pathname.includes('login.html');

  // нет токена → на логин
  if (!token && !isLoginPage) {
  window.location.replace('/login.html');
  return;
}

  // есть токен и мы на логине → в систему
  if (token && isLoginPage) {
  window.location.replace('/');
}
})();
</script>
