import { getJwtToken } from '../utils';

function getAbsoluteURI(uri) {
  const schema = process.env.NODE_ENV === 'production'? 'https://': 'http://';
  const absoluteURI = `${schema}${process.env.NEXT_PUBLIC_BACKEND_HOST}${uri}`;

  return absoluteURI;
}

async function fetchWrapper(uri, options = {}) {
  const absoluteURI = getAbsoluteURI(uri);

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
  return fetchWrapper('/api/tiers');
}

export function addTier(data) {
  return fetchWrapper('/api/tiers', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}

export function addRepo({ tierId, ...data }) {
  return fetchWrapper(`/api/tiers/${tierId}/repositories`, {
    method: 'POST',
    body: JSON.stringify(data)
  });
}

export function updateRepo({ tierId, ...data }) {
  return fetchWrapper(`/api/tiers/${tierId}/repositories`, {
    method: 'PATCH',
    body: JSON.stringify(data)
  });
}

export function updateTier({ id, ...data }) {
  return fetchWrapper(`/api/tiers/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  });
}

export function deleteTier(id) {
  return fetchWrapper(`/api/tiers/${id}`, {
    method: 'DELETE'
  });
}

export function deleteRepo({ tierId, ownerOrOrg, name }) {
  return fetchWrapper(`/api/tiers/${tierId}/repositories`, {
    method: 'DELETE',
    body: JSON.stringify({ name, ownerOrOrg })
  });
}

export async function getProfileDetails(username) {
  const absoluteURI = getAbsoluteURI(`/profile/${username}`);
  const response = await fetch(absoluteURI);

  if (!response.ok) throw { statusCode: response.status };
  
  return response.json();
}
