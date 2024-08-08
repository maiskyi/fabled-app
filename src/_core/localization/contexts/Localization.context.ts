import { createContext } from 'use-context-selector';

interface LocalizationContextProps {
  lng: string;
}

export const LocalizationContext = createContext<LocalizationContextProps>({
  lng: 'en-US',
});
