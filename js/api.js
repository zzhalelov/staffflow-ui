const API_BASE_URL =
  location.hostname === 'localhost'
    ? 'http://localhost:8081'
    : 'https://staffflow.kz';

async function apiFetch(path, options = {}) {
  const token = localStorage.getItem('token');

  const headers = {
    ...(options.headers || {}),
    'Content-Type': 'application/json',
    ...(token ? {Authorization: `Bearer ${token}`} : {})
  };

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers
  });

  //backend может вернуть 401 даже в prod
  if (response.status === 401 || response.status === 403) {
    localStorage.removeItem('token');
    window.location.replace('/login.html');
    throw new Error('Unauthorized');
  }

  return response;
}
