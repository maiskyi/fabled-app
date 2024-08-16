import { createContext } from 'react';

import { User } from '@capacitor-firebase/authentication';

interface AuthContextProps {
  user: User;
  reload: () => Promise<void>;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  reload: () => Promise.resolve(),
  user: null,
});
