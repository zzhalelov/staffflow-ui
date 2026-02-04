const API_BASE_URL =
  location.hostname === 'localhost'
    ? 'http://localhost:8081'
    : 'https://staffflow.kz';

window.apiFetch = async function (path, options = {}) {
  const token = localStorage.getItem('token');

  const headers = {
    ...(options.headers || {}),
    'Content-Type': 'application/json',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers,
  });

  const contentType = response.headers.get('content-type');
  if (contentType && !contentType.includes('application/json')) {
    console.error('Non-JSON response', {
      url: `${API_BASE_URL}${path}`,
      status: response.status,
      contentType,
      response,
    });
  }

  if (response.status === 401 || response.status === 403) {
    localStorage.removeItem('token');
    window.location.replace('/login.html');
    throw new Error('Unauthorized');
  }

  return response;
};
