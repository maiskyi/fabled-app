import { useContext } from 'use-context-selector';

import {
  PurchasesContext,
  PurchasesContextProps,
} from '../../contexts/PurchasesContext';

type UsePurchasesReturnType = Omit<
  PurchasesContextProps,
  'promptedToSubscribe'
>;

export const usePurchases = (): UsePurchasesReturnType =>
  useContext(PurchasesContext);
