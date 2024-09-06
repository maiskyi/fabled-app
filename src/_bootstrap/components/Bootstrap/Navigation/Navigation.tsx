import { FC, PropsWithChildren, useMemo } from 'react';

import { NavigationProvider } from '@core/navigation';
import { useAuth } from '@core/auth';

import { RoutePath } from '../../../constants';

import { NONE, UNVERIFIED, USER } from './Navigation.const';

export type NavigationProps = PropsWithChildren<{}>;

export const Navigation: FC<NavigationProps> = ({ children }) => {
  const { isAuthenticated, user } = useAuth();

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

  return (
    <NavigationProvider
      defaultProtectedRedirect={defaultProtectedRedirect}
      roles={roles}
    >
      {children}
    </NavigationProvider>
  );
};
