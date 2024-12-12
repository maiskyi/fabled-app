import { createContext } from 'use-context-selector';

interface PageContextProps {
  withCover: boolean;
}

export const PageContext = createContext<PageContextProps>({
  withCover: false,
});
