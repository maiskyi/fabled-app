import {
  FC,
  PropsWithChildren,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useMount } from 'react-use';
import { isUndefined } from 'lodash';

import {
  getAuth,
  indexedDBLocalPersistence,
  initializeAuth,
  User,
} from 'firebase/auth';
import { getApp } from 'firebase/app';
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

  const isAuthenticated = !!user;

  const signOut = useCallback(async () => {
    return auth.signOut();
  }, [auth]);

  const reload = useCallback(async () => {
    if (auth.currentUser) {
      await auth.currentUser.reload();
      return setUser(() => ({ ...auth.currentUser }));
    }
    return Promise.resolve();
  }, [auth]);

  const contextValue = useMemo(
    () => ({ isAuthenticated, reload, signOut, user }),
    [user, reload, signOut, isAuthenticated]
  );

  useMount(() => {
    auth.onAuthStateChanged((v) => setUser(v));
  });

  return (
    <AuthContext.Provider value={contextValue}>
      {isUndefined(user) ? null : children}
    </AuthContext.Provider>
  );
};
