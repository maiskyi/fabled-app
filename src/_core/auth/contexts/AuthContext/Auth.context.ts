import { createContext } from 'react';

import {
  GetIdTokenOptions,
  GetIdTokenResult,
  User,
} from '@capacitor-firebase/authentication';

interface AuthContextProps {
  user: User;
  isReady: boolean;
  reload: () => Promise<void>;
  isAuthenticated: boolean;
  getIdToken(options?: GetIdTokenOptions): Promise<GetIdTokenResult>;
}

export const AuthContext = createContext<AuthContextProps>({
  getIdToken: () => Promise.resolve({ token: null }),
  isAuthenticated: false,
  isReady: false,
  reload: () => Promise.resolve(),
  user: null,
});
