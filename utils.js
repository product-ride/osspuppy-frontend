import jwtDecode from "jwt-decode";

const TOKEN_KEY = 'OSS_PUPPY_TOKEN';

export function isUserLoggedIn() {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem(TOKEN_KEY);

    return token && token.length > 0;
  } else {
    return false;
  }
}

export function logoutUser() {
  localStorage.removeItem(TOKEN_KEY);
}

export function getLoggedInUser() {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem(TOKEN_KEY);

    return jwtDecode(token);
  } else {
    return {};
  }
}

export function setJwtToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function getJwtToken() {
  return localStorage.getItem(TOKEN_KEY);
}
