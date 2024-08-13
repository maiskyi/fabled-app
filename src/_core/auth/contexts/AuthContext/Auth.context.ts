import { createContext } from 'react';

import { User } from 'firebase/auth';

interface AuthContextProps {
  user: User;
  reload: () => Promise<void>;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  isAuthenticated: false,
  reload: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
});
