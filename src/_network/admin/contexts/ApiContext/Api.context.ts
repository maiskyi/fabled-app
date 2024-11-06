import { AxiosInstance } from 'axios';
import { createContext } from 'use-context-selector';

export interface ApiContextProps {
  instance: AxiosInstance;
}

export const ApiContext = createContext<ApiContextProps>({
  instance: null,
});
