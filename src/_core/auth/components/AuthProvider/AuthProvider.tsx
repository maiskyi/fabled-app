import {
  FC,
  PropsWithChildren,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useAsyncFn, useMount } from 'react-use';
import { isUndefined, noop } from 'lodash';

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

import { AuthStateChangeParams } from './AuthProvider.types';

export type AuthProviderProps = PropsWithChildren<{
  onAuthStateChange?: (state: AuthStateChangeParams) => void;
}>;

export const AuthProvider: FC<AuthProviderProps> = ({
  children,
  onAuthStateChange = noop,
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

  const isReady = !isUndefined(user);

  const reload = useCallback(async () => {
    if (isAuthenticated) {
      await FirebaseAuthentication.reload();
      const { user } = await FirebaseAuthentication.getCurrentUser();
      return setUser(() => ({ ...user }));
    }
    return Promise.resolve();
  }, [isAuthenticated]);

  const contextValue = useMemo(
    () => ({
      getIdToken,
      isAuthenticated,
      isReady,
      reload,
      user,
    }),
    [user, reload, isAuthenticated, getIdToken, isReady]
  );

  useMount(() => {
    FirebaseAuthentication.addListener('authStateChange', (state) => {
      setUser(state?.user);
      onAuthStateChange(state);
    });
  });

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
