async function apiFetch(url, options = {}) {
  const token = localStorage.getItem('access_token');

  const headers = {
    ...(options.headers || {}),
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  };

  const response = await fetch(url, {
    ...options,
    headers
  });

  // если backend вернул 401 — разлогиниваем
  if (response.status === 401) {
    localStorage.removeItem('access_token');
    window.location.replace('/login.html');
    throw new Error('Unauthorized');
  }

  return response;
}
