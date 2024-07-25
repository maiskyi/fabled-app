import { createContext } from 'use-context-selector';
import { Auth, User } from 'firebase/auth';

interface AuthContextProps {
  auth: Auth;
  user: User;
}

export const AuthContext = createContext<AuthContextProps>({
  auth: null,
  user: null,
});
