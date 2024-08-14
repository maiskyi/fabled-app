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
    <NavigationContext.Provider value={{ defaultProtectedRedirect, roles }}>
      {children}
    </NavigationContext.Provider>
  );
};
