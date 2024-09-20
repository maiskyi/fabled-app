import { FC, PropsWithChildren, useMemo } from 'react';
import { useMount } from 'react-use';

import { NavigationProvider } from '@core/navigation';
import { useAuth } from '@core/auth';
import { useSplashScreen } from '@core/uikit';

import { RoutePath } from '../../../constants';

import { NONE, UNVERIFIED, USER } from './Navigation.const';

export type NavigationProps = PropsWithChildren<{}>;

export const Navigation: FC<NavigationProps> = ({ children }) => {
  const { isAuthenticated, user } = useAuth();
  const [, { hide }] = useSplashScreen();

  const emailVerified = user?.emailVerified;

  const roles = useMemo(() => {
    if (isAuthenticated && emailVerified) {
      return USER;
    }
    if (isAuthenticated && emailVerified) {
      return UNVERIFIED;
    }
    return NONE;
  }, [isAuthenticated, emailVerified]);

  const defaultProtectedRedirect = (() => {
    if (isAuthenticated && user?.emailVerified) {
      return RoutePath.Index;
    }
    if (isAuthenticated && !user?.emailVerified) {
      return RoutePath.VerifyEmail;
    }
    return RoutePath.Auth;
  })();

  useMount(() => hide());

  return (
    <NavigationProvider
      defaultProtectedRedirect={defaultProtectedRedirect}
      roles={roles}
    >
      {children}
    </NavigationProvider>
  );
};
