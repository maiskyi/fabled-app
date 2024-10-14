import { createContext } from 'use-context-selector';

import {
  PurchasesOffering,
  PurchasesStoreProduct,
} from '@revenuecat/purchases-capacitor';

export interface PurchasesContextProps {
  offering: PurchasesOffering;
  activeSubscriptions: PurchasesStoreProduct[];
  refetch: () => Promise<{
    offering: PurchasesOffering;
    ready: boolean;
    activeSubscriptions: PurchasesStoreProduct[];
  }>;
}

export const PurchasesContext = createContext<PurchasesContextProps>({
  activeSubscriptions: [],
  offering: null,
  refetch: () =>
    Promise.resolve({
      activeSubscriptions: [],
      offering: null,
      ready: false,
    }),
});
