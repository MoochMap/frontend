const API_URL = process.env.API_URL || 'http://localhost:5000';

export function apiGet(endpoint) {
  const HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'token': sessionStorage.getItem('token')
  }

  return fetch(`${API_URL}${endpoint}/`, {headers: HEADERS}).then((res) => res.json());
}

export function apiPost(endpoint, data = {}) {
  const token = sessionStorage.getItem('token');
  if (token)
  data.push(token);
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': sessionStorage.getItem('token')
    },
    body: JSON.stringify(data)
  }

  return fetch(`${API_URL}${endpoint}/`, options).then((res) => res.json());
}
