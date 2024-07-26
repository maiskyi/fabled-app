import { FC, PropsWithChildren, useRef, useState } from 'react';

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
  const { current: auth } = useRef(
    (() => {
      if (Capacitor.isNativePlatform()) {
        return initializeAuth(getApp(), {
          persistence: indexedDBLocalPersistence,
        });
      }
      return getAuth(getApp());
    })()
  );
  const [user, setUser] = useState<User>();

  useMount(() => {
    auth.onAuthStateChanged((v) => setUser(v));
  });

  return (
    <AuthContext.Provider value={{ auth, user }}>
      {isUndefined(user) ? null : children}
    </AuthContext.Provider>
  );
};
