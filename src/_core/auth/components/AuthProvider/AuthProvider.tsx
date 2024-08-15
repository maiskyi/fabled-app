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
} from 'firebase/auth';
import { getApp } from 'firebase/app';
import { Capacitor } from '@capacitor/core';
import {
  User,
  FirebaseAuthentication,
} from '@capacitor-firebase/authentication';

import { AuthContext } from '../../contexts/AuthContext';

export type AuthProviderProps = PropsWithChildren<{}>;

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(null);

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

  const isAuthenticated = !!user;

  const signOut = useCallback(async () => {
    return FirebaseAuthentication.signOut();
  }, []);

  const reload = useCallback(async () => {
    if (auth.currentUser) {
      const { user } = await FirebaseAuthentication.getCurrentUser();
      return setUser(() => ({ ...user }));
    }
    return Promise.resolve();
  }, [auth]);

  const contextValue = useMemo(
    () => ({ isAuthenticated, reload, signOut, user }),
    [user, reload, signOut, isAuthenticated]
  );

  useMount(() => {
    FirebaseAuthentication.addListener('authStateChange', ({ user }) => {
      setUser(user);
    });
  });

  return (
    <AuthContext.Provider value={contextValue}>
      {isUndefined(user) ? null : children}
    </AuthContext.Provider>
  );
};
