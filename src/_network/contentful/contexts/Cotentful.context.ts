import { AxiosInstance } from 'axios';
import { createContext } from 'use-context-selector';

export interface ContentfulContextProps {
  space: string;
  environment: string;
  instance: AxiosInstance;
}

export const ContentfulContext = createContext<ContentfulContextProps>({
  environment: null,
  instance: null,
  space: '',
});
