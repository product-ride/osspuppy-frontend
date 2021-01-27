import {
  createContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import jwtDecode from "jwt-decode";

const TOKEN_KEY = 'oss_puppy_jwt';

function isUserLoggedIn() {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem(TOKEN_KEY);

    return token && token.length > 0;
  } else {
    return false;
  }
}

function logoutUser() {
  localStorage.removeItem(TOKEN_KEY);
}

function getLoggedInUser() {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem(TOKEN_KEY);

    return jwtDecode(token);
  } else {
    return {};
  }
}

function setJwtToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export const authContext = createContext(null);

export default function AuthProvider({
  children,
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(isUserLoggedIn());
  const [user, setUser] = useState(null);
  const logout = useCallback(() => {
    logoutUser();
    setIsLoggedIn(false);
    setUser(null);
  }, []);
  const setToken = useCallback((token) => {
    setJwtToken(token);
    setIsLoggedIn(true);
    setUser(getLoggedInUser());
  }, []);

  useEffect(() => {
    const isAuthenticated = isUserLoggedIn();

    setIsLoggedIn(isAuthenticated);
    
    if (isAuthenticated) {
      setUser(getLoggedInUser());
    }
  }, []);

  return (
    <authContext.Provider value={{ user, isLoggedIn, logout, setToken }}>
      {children}
    </authContext.Provider>
  );
}
