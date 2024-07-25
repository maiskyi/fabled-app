import { useContextSelector } from 'use-context-selector';

import { AuthContext } from '../../contexts/AuthContext';

export const useAuth = () => {
  const user = useContextSelector(AuthContext, ({ user }) => user);

  const auth = useContextSelector(AuthContext, ({ auth }) => auth);

  const isAuthenticated = !!user;

  return { isAuthenticated, auth, user };
};
