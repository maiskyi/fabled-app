import {
  FC,
  Fragment,
  PropsWithChildren,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useAsyncFn, useMount } from 'react-use';
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

export type AuthProviderProps = PropsWithChildren<{
  Loader?: FC;
}>;

export const AuthProvider: FC<AuthProviderProps> = ({
  children,
  Loader = Fragment,
}) => {
  const [user, setUser] = useState<User>();

  useRef(
    (() => {
      if (Capacitor.isNativePlatform()) {
        return initializeAuth(getApp(), {
          persistence: indexedDBLocalPersistence,
        });
      }
      return getAuth(getApp());
    })()
  );

  const [, getIdToken] = useAsyncFn(() => {
    return FirebaseAuthentication.getIdToken();
  });

  const isAuthenticated = !!user;

  const reload = useCallback(async () => {
    if (isAuthenticated) {
      await FirebaseAuthentication.reload();
      const { user } = await FirebaseAuthentication.getCurrentUser();
      return setUser(() => ({ ...user }));
    }
    return Promise.resolve();
  }, [isAuthenticated]);

  const contextValue = useMemo(
    () => ({ getIdToken, isAuthenticated, reload, user }),
    [user, reload, isAuthenticated, getIdToken]
  );

  useMount(() => {
    FirebaseAuthentication.addListener('authStateChange', ({ user }) => {
      setUser(user);
    });
  });

  return (
    <AuthContext.Provider value={contextValue}>
      {isUndefined(user) ? <Loader /> : children}
    </AuthContext.Provider>
  );
};
