import { FC, PropsWithChildren, useRef, useState } from 'react';

import { getAuth, User } from 'firebase/auth';
import { FirebaseApp } from 'firebase/app';
import { useMount } from 'react-use';

import { AuthContext } from '../../contexts/AuthContext';

export type AuthProviderProps = PropsWithChildren<{
  app: FirebaseApp;
}>;

export const AuthProvider: FC<AuthProviderProps> = ({ children, app }) => {
  const { current: auth } = useRef(getAuth(app));
  const [user, setUser] = useState<User>(null);

  useMount(() => {
    auth.onAuthStateChanged((v) => setUser(v));
  });

  return (
    <AuthContext.Provider value={{ auth, user }}>
      {children}
    </AuthContext.Provider>
  );
};
