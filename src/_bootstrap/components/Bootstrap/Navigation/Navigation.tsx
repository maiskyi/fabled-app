import { FC, PropsWithChildren } from 'react';

import { NavigationProvider } from '@core/navigation';
import { useAuth } from '@core/auth';

import { RoutePath } from '../../../constants';

import { NONE, UNVERIFIED, USER, ANONYMOUS } from './Navigation.const';

export type NavigationProps = PropsWithChildren<{}>;

export const Navigation: FC<NavigationProps> = ({ children }) => {
  const { isAuthenticated, user } = useAuth();

  const roles = (() => {
    if (isAuthenticated && user?.isAnonymous) {
      return ANONYMOUS;
    }
    if (isAuthenticated && user?.emailVerified) {
      return USER;
    }
    if (isAuthenticated && !user?.emailVerified) {
      return UNVERIFIED;
    }
    return NONE;
  })();

  const defaultProtectedRedirect = (() => {
    if (isAuthenticated) {
      return RoutePath.Index;
    }
    return RoutePath.Onbording;
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
