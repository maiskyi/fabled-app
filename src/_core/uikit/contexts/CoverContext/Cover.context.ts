import { CSSProperties } from 'react';
import { createContext } from 'use-context-selector';

interface CoverContextProps {
  withCover: boolean;
  src?: string;
  size?: CSSProperties['backgroundSize'];
  position?: CSSProperties['backgroundPosition'];
}

export const CoverContext = createContext<CoverContextProps>({
  withCover: false,
});
