import { FC, PropsWithChildren, ReactNode } from 'react';
import { useAsync } from 'react-use';

import { Purchases, LOG_LEVEL } from '@revenuecat/purchases-capacitor';

import { PurchasesContext } from '../../contexts/PurchasesContext';

export type PurchasesProviderProps = PropsWithChildren<{
  apiKey: string;
  fallback?: ReactNode;
}>;

export const PurchasesProvider: FC<PurchasesProviderProps> = ({
  children,
  apiKey,
  fallback = null,
}) => {
  const { value } = useAsync(async () => {
    await Purchases.setLogLevel({
      level: LOG_LEVEL.DEBUG,
    });

    await Purchases.configure({
      apiKey,
    });

    return { ready: true };
  });

  return (
    <PurchasesContext.Provider value={{}}>
      {value?.ready ? children : fallback}
    </PurchasesContext.Provider>
  );
};
