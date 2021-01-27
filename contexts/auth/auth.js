import {
  createContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import {
  isUserLoggedIn,
  getLoggedInUser,
  logoutUser,
  setJwtToken
} from '../../utils';

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
