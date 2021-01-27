import { useContext } from 'react';
import { authContext } from '../../contexts/auth/auth';

export function useAuth() {
  const auth = useContext(authContext);

  if (auth === null) {
    throw new Error('ERROR: you need to wrap your component in AuthProvider to use this hook');
  }

  return auth;
}