import { FC, PropsWithChildren } from 'react';

import { NavigationProvider } from '@core/navigation';
import { useAuth } from '@core/auth';

import { RoutePath } from '../../../constants';
import { useSettings } from '../../../providers';

import { NEW, NONE, USER } from './Navigation.const';

export type NavigationProps = PropsWithChildren<{}>;

export const Navigation: FC<NavigationProps> = ({ children }) => {
  const { isAuthenticated, user } = useAuth();

  const [{ isOnboarded }] = useSettings();

  const roles = (() => {
    if (isAuthenticated && user?.emailVerified) return USER;

    if (!isOnboarded) return NEW;

    return NONE;
  })();

  const defaultProtectedRedirect = (() => {
    if (isAuthenticated) return RoutePath.Index;

    if (!isOnboarded) return RoutePath.SignIn;

    return RoutePath.Onboarding;
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
