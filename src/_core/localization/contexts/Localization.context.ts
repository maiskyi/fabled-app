import { createContext } from 'use-context-selector';

interface LocalizationContextProps {
  lng: string;
  isReady: boolean;
}

export const LocalizationContext = createContext<LocalizationContextProps>({
  isReady: false,
  lng: 'en-US',
});
