const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const getApiUrl = (endpoint: string): string => {
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${API_BASE_URL}${cleanEndpoint}`;
};

export const apiFetch = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> => {
  const url = getApiUrl(endpoint);
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Request failed' }));
    throw new Error(error.message || `HTTP ${response.status}`);
  }

  return response.json();
};

export const apiPost = async <T, B = unknown>(
  endpoint: string,
  body: B,
  options: RequestInit = {}
): Promise<T> => {
  return apiFetch<T>(endpoint, {
    ...options,
    method: 'POST',
    body: JSON.stringify(body),
  });
};

export const apiGet = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> => {
  return apiFetch<T>(endpoint, {
    ...options,
    method: 'GET',
  });
};

export default {
  getApiUrl,
  fetch: apiFetch,
  post: apiPost,
  get: apiGet,
};
