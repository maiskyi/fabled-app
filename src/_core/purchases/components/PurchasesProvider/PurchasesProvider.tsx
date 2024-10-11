import { FC, PropsWithChildren, ReactNode } from 'react';
import { useAsyncFn, useMount } from 'react-use';

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
  const [{ value: config }, configure] = useAsyncFn(
    async () => {
      await Purchases.setLogLevel({
        level: LOG_LEVEL.DEBUG,
      });

      await Purchases.configure({
        apiKey,
      });

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
      const { current: offering } = await Purchases.getOfferings();

      return { offering, ready: true };
    },
    [],
    {
      loading: false,
      value: {
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
      value={{ offering: data?.offering, refetch: init }}
    >
      {ready ? children : fallback}
    </PurchasesContext.Provider>
  );
};
