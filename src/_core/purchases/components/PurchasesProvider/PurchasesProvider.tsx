import { FC, Fragment, PropsWithChildren, useCallback, useState } from 'react';
import { useAsyncFn, useMount } from 'react-use';

import { Purchases, LOG_LEVEL } from '@revenuecat/purchases-capacitor';
import { Capacitor } from '@capacitor/core';

import {
  PurchasesContext,
  DEFAULT_PURCHASES_OFFERINGS,
} from '../../contexts/PurchasesContext';

export type PurchasesProviderProps = PropsWithChildren<{
  apiKey: string;
  Loader?: FC;
}>;

export const PurchasesProvider: FC<PurchasesProviderProps> = ({
  children,
  apiKey,
  Loader = Fragment,
}) => {
  const [{ promptedToSubscribe }, setState] = useState({
    promptedToSubscribe: false,
  });

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
        try {
          const offerings = await Purchases.getOfferings();

          const { customerInfo } = await Purchases.getCustomerInfo();

          const { products: activeSubscriptions } = await Purchases.getProducts(
            {
              productIdentifiers: customerInfo.activeSubscriptions,
            }
          );

          return { activeSubscriptions, offerings, ready: true };
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(error);
        }
      }
      return {
        activeSubscriptions: [],
        offerings: DEFAULT_PURCHASES_OFFERINGS,
        ready: true,
      };
    },
    [],
    {
      loading: false,
      value: {
        activeSubscriptions: [],
        offerings: DEFAULT_PURCHASES_OFFERINGS,
        ready: false,
      },
    }
  );

  const ready = config?.ready && data?.ready;

  const dissmissPromptToSubscribe = useCallback(() => {
    setState((prev) => ({
      ...prev,
      promptedToSubscribe: true,
    }));
  }, []);

  useMount(async () => {
    await configure();
    await init();
  });

  return (
    <PurchasesContext.Provider
      value={{
        activeSubscriptions: data.activeSubscriptions,
        dissmissPromptToSubscribe,
        offerings: data.offerings,
        promptedToSubscribe,
        refetch: init,
      }}
    >
      {ready ? children : <Loader />}
    </PurchasesContext.Provider>
  );
};
