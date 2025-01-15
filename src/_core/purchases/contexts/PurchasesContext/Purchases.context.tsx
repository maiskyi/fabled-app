import { createContext } from 'use-context-selector';
import { noop } from 'lodash';

import {
  PurchasesOfferings,
  PurchasesStoreProduct,
} from '@revenuecat/purchases-capacitor';

import { DEFAULT_PURCHASES_OFFERINGS } from './Purchases.const';

export interface PurchasesContextProps {
  offerings: PurchasesOfferings;
  promptedToSubscribe: boolean;
  activeSubscriptions: PurchasesStoreProduct[];
  dissmissPromptToSubscribe: () => void;
  refetch: () => Promise<{
    offerings: PurchasesOfferings;
    ready: boolean;
    activeSubscriptions: PurchasesStoreProduct[];
  }>;
}

export const PurchasesContext = createContext<PurchasesContextProps>({
  activeSubscriptions: [],
  dissmissPromptToSubscribe: noop,
  offerings: DEFAULT_PURCHASES_OFFERINGS,
  promptedToSubscribe: false,
  refetch: () =>
    Promise.resolve({
      activeSubscriptions: [],
      offerings: DEFAULT_PURCHASES_OFFERINGS,
      ready: false,
    }),
});
