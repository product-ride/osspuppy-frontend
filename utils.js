import jwtDecode from "jwt-decode";

const TOKEN_KEY = 'oss_puppy_jwt';

export function isUserLoggedIn() {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem(TOKEN_KEY);

    return token && token.length > 0;
  } else {
    return false;
  }
}

export function logout() {
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
