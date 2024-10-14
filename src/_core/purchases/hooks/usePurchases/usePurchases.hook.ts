import { useContext } from 'use-context-selector';

import { PurchasesContext } from '../../contexts/PurchasesContext';

export const usePurchases = () => useContext(PurchasesContext);
