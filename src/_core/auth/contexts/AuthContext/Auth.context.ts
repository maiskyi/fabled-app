import { createContext } from 'react';

import { User } from '@capacitor-firebase/authentication';

interface AuthContextProps {
  user: User;
  reload: () => Promise<void>;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  reload: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
  user: null,
});
