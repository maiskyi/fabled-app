import { createContext } from 'react';

import { User } from 'firebase/auth';

interface AuthContextProps {
  user: User;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
});
