import { useRef } from 'react';

import { useContextSelector } from 'use-context-selector';
import { getAuth } from 'firebase/auth';

import { AuthContext } from '../../contexts/AuthContext';

export const useAuth = () => {
  const { current: auth } = useRef(getAuth());

  const user = useContextSelector(AuthContext, ({ user }) => user);

  const isAuthenticated = !!auth?.currentUser;

  return { isAuthenticated, auth, user };
};
