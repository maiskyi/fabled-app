import { createContext } from 'use-context-selector';

interface CoverContextProps {
  withCover: boolean;
  src?: string;
}

export const CoverContext = createContext<CoverContextProps>({
  withCover: false,
});
