import { createContext } from 'use-context-selector';

export interface PurchasesContextProps {}

export const PurchasesContext = createContext<PurchasesContextProps>({});
