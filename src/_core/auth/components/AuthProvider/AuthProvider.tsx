import { FC, PropsWithChildren, useState } from 'react';

import {
  getAuth,
  indexedDBLocalPersistence,
  initializeAuth,
  User,
} from 'firebase/auth';
import { getApp } from 'firebase/app';
import { useMount } from 'react-use';
import { isUndefined } from 'lodash';
import { Capacitor } from '@capacitor/core';

import { AuthContext } from '../../contexts/AuthContext';

export type AuthProviderProps = PropsWithChildren<{}>;

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>();

  useMount(() => {
    const auth = (() => {
      if (Capacitor.isNativePlatform()) {
        return initializeAuth(getApp(), {
          persistence: indexedDBLocalPersistence,
        });
      }
      return getAuth(getApp());
    })();
    auth.onAuthStateChanged((v) => setUser(v));
  });

  return (
    <AuthContext.Provider value={{ user }}>
      {isUndefined(user) ? null : children}
    </AuthContext.Provider>
  );
};
