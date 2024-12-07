import { createContext } from 'use-context-selector';

import {
  PurchasesOfferings,
  PurchasesStoreProduct,
} from '@revenuecat/purchases-capacitor';

import { DEFAULT_PURCHASES_OFFERINGS } from './Purchases.const';

export interface PurchasesContextProps {
  offerings: PurchasesOfferings;
  activeSubscriptions: PurchasesStoreProduct[];
  refetch: () => Promise<{
    offerings: PurchasesOfferings;
    ready: boolean;
    activeSubscriptions: PurchasesStoreProduct[];
  }>;
}

export const PurchasesContext = createContext<PurchasesContextProps>({
  activeSubscriptions: [],
  offerings: DEFAULT_PURCHASES_OFFERINGS,
  refetch: () =>
    Promise.resolve({
      activeSubscriptions: [],
      offerings: DEFAULT_PURCHASES_OFFERINGS,
      ready: false,
    }),
});
