import { useCallback, useRef, useContext } from 'react';

import { getAuth } from 'firebase/auth';

import { AuthContext } from '../../contexts/AuthContext';

export const useAuth = () => {
  const { current: auth } = useRef(getAuth());

  const { user } = useContext(AuthContext);

  const isAuthenticated = !!user;

  const signOut = useCallback(() => {
    return auth.signOut();
  }, [auth]);

  return {
    user,
    auth,
    signOut,
    isAuthenticated,
  };
};
