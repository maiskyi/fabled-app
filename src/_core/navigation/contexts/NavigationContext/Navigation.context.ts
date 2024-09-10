import { createContext } from 'react';

export interface NavigationContextProps {
  roles: string[];
  defaultProtectedRedirect: string;
}

export const NavigationContext = createContext<NavigationContextProps>({
  defaultProtectedRedirect: '/',
  roles: [],
});
