import { createContext } from 'use-context-selector';

import { PurchasesOffering } from '@revenuecat/purchases-capacitor';

export interface PurchasesContextProps {
  offering: PurchasesOffering;
  activeSubscriptions: string[];
  refetch: () => Promise<{
    offering: PurchasesOffering;
    ready: boolean;
  }>;
}

export const PurchasesContext = createContext<PurchasesContextProps>({
  activeSubscriptions: [],
  offering: null,
  refetch: () =>
    Promise.resolve({
      offering: null,
      ready: false,
    }),
});
