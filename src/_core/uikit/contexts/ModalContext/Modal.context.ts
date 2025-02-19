import { createContext } from 'use-context-selector';

interface ModalContextProps {
  exists: boolean;
}

export const ModalContext = createContext<ModalContextProps>({
  exists: false,
});
