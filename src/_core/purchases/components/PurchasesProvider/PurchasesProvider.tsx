import { FC, PropsWithChildren, ReactNode } from 'react';
import { useAsyncFn, useMount } from 'react-use';

import { Purchases, LOG_LEVEL } from '@revenuecat/purchases-capacitor';
import { Capacitor } from '@capacitor/core';

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
  const [{ value: config }, configure] = useAsyncFn(
    async () => {
      if (Capacitor.isNativePlatform()) {
        await Purchases.setLogLevel({
          level: LOG_LEVEL.DEBUG,
        });

        await Purchases.configure({
          apiKey,
        });
      }

      return { ready: true };
    },
    [],
    {
      loading: false,
      value: {
        ready: false,
      },
    }
  );

  const [{ value: data }, init] = useAsyncFn(
    async () => {
      if (Capacitor.isNativePlatform()) {
        const { current: offering } = await Purchases.getOfferings();

        const { customerInfo } = await Purchases.getCustomerInfo();

        const { products: activeSubscriptions } = await Purchases.getProducts({
          productIdentifiers: customerInfo.activeSubscriptions,
        });

        return { activeSubscriptions, offering, ready: true };
      }
      return { activeSubscriptions: [], offering: null, ready: true };
    },
    [],
    {
      loading: false,
      value: {
        activeSubscriptions: [],
        offering: null,
        ready: false,
      },
    }
  );

  const ready = config?.ready && data?.ready;

  useMount(async () => {
    await configure();
    await init();
  });

  return (
    <PurchasesContext.Provider
      value={{
        activeSubscriptions: data.activeSubscriptions,
        offering: data?.offering,
        refetch: init,
      }}
    >
      {ready ? children : fallback}
    </PurchasesContext.Provider>
  );
};
