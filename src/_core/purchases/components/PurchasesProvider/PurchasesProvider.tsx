import { FC, Fragment, PropsWithChildren } from 'react';
import { useAsyncFn, useMount } from 'react-use';
import { get } from 'lodash';

import { Purchases, LOG_LEVEL } from '@revenuecat/purchases-capacitor';
import { Capacitor } from '@capacitor/core';

import { PurchasesContext } from '../../contexts/PurchasesContext';

import { ApiKey } from './PurchasesProvider.types';

export type PurchasesProviderProps = PropsWithChildren<{
  apiKeys: ApiKey;
  Loader?: FC;
}>;

export const PurchasesProvider: FC<PurchasesProviderProps> = ({
  children,
  apiKeys,
  Loader = Fragment,
}) => {
  const [{ value: config }, configure] = useAsyncFn(
    async () => {
      if (Capacitor.isNativePlatform()) {
        const apiKey = get(apiKeys, Capacitor.getPlatform());

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
          const { current: offering } = await Purchases.getOfferings();

          const { customerInfo } = await Purchases.getCustomerInfo();

          const { products: activeSubscriptions } = await Purchases.getProducts(
            {
              productIdentifiers: customerInfo.activeSubscriptions,
            }
          );

          return { activeSubscriptions, offering, ready: true };
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(error);
        }
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
      {ready ? children : <Loader />}
    </PurchasesContext.Provider>
  );
};
