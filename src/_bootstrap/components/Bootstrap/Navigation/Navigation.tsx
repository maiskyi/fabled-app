import { FC, PropsWithChildren } from 'react';
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

  const roles = (() => {
    if (isAuthenticated && emailVerified) {
      return USER;
    }
    if (isAuthenticated && emailVerified) {
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
