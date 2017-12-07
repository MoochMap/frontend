var API_URL;
if ('../../start.sh') {
  API_URL =  'http://localhost:5000';
}
else {
  API_URL = 'https://moochmap.herokuapp.com';
}

export function apiGet(endpoint) {
  const HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'token': sessionStorage.getItem('token')
  }

  return fetch(`${API_URL}${endpoint}/`, {headers: HEADERS}).then((res) => res.json());
}

export function apiPost(endpoint, data = {}) {
  var token = sessionStorage.getItem('token');
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token
    },
    body: JSON.stringify(data)
  }


  return fetch(`${API_URL}${endpoint}/`, options).then((res) => res.json());
}
