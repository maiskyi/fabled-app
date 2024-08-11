import { createContext } from 'use-context-selector';

interface CardContextProps {
  loading: boolean;
}

export const CardContext = createContext<CardContextProps>({
  loading: false,
});
