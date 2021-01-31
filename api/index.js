import { getJwtToken } from '../utils';

async function fetchWrapper(uri, options = {}) {
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

  if (!response.ok) {
    throw {
      statusCode: response.status,
      message: response.body
    };
  }

  return response.json();
}

export function fetchTiers() {
  return fetchWrapper('/tiers');
}

export function addTier(data) {
  return fetchWrapper('/tiers', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}

export function addRepo({ tierId, ...data }) {
  return fetchWrapper(`/tiers/${tierId}/repositories`, {
    method: 'POST',
    body: JSON.stringify(data)
  });
}

export function updateTier({ id, ...data }) {
  return fetchWrapper(`/tiers/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  });
}

export function deleteTier(id) {
  return fetchWrapper(`/tiers/${id}`, {
    method: 'DELETE'
  });
}

export function deleteRepo({ tierId, ownerOrOrg, name }) {
  return fetchWrapper(`/tiers/${tierId}/repositories`, {
    method: 'DELETE',
    body: JSON.stringify({ name, ownerOrOrg })
  });
}
