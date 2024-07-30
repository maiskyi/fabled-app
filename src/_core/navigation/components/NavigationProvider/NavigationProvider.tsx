import { FC, PropsWithChildren } from 'react';

import { NavigationContext } from '../../contexts/NavigationContext';

type NavigationProviderProps = PropsWithChildren<{
  roles?: string[];
  defaultProtectedRedirect?: string;
}>;

export const NavigationProvider: FC<NavigationProviderProps> = ({
  roles = [],
  children,
  defaultProtectedRedirect,
}) => {
  return (
    <NavigationContext.Provider value={{ roles, defaultProtectedRedirect }}>
      {children}
    </NavigationContext.Provider>
  );
};
