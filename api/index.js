import { getJwtToken } from '../utils';

async function authFetch(uri, options = {}) {
  const schema = process.env.NODE_ENV === 'production'? 'https://': 'http://';
  const absoluteURI = `${schema}${process.env.NEXT_PUBLIC_BACKEND_HOST}/api${uri}`;

  const response = await fetch(absoluteURI, {
    ...options,
    headers: {
      Authorization: `Bearer ${getJwtToken()}`,
      'Content-Type': 'application/json',
      ...options.headers
    }
  });

  return response.json();
}

export function fetchTiers() {
  return authFetch('/tiers');
}

export function addTier(data) {
  return authFetch('/tiers', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}
