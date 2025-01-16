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
  shouldPromptedToSubscribe?: boolean;
}>;

export const PurchasesProvider: FC<PurchasesProviderProps> = ({
  children,
  apiKey,
  Loader = Fragment,
  shouldPromptedToSubscribe = true,
}) => {
  const [{ promptedToSubscribe }, setState] = useState({
    promptedToSubscribe: !shouldPromptedToSubscribe,
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
          const offeringsRequest = Purchases.getOfferings();
          const customerInfoRequest = Purchases.getCustomerInfo();

          const [offerings, { customerInfo }] = await Promise.all([
            offeringsRequest,
            customerInfoRequest,
          ]);

          const productIdentifiers = Object.values(offerings.all).reduce(
            (res, { availablePackages }) => {
              return [
                ...res,
                ...availablePackages.map((pkg) => pkg.product.identifier),
              ];
            },
            []
          );

          const productsRequest = Purchases.getProducts({
            productIdentifiers: customerInfo.activeSubscriptions,
          });

          const trialEligibilityRequest =
            Purchases.checkTrialOrIntroductoryPriceEligibility({
              productIdentifiers,
            });

          const [{ products: activeSubscriptions }, introEligibility] =
            await Promise.all([productsRequest, trialEligibilityRequest]);

          return {
            activeSubscriptions,
            introEligibility,
            offerings,
            ready: true,
          };
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(error);
        }
      }
      return {
        activeSubscriptions: [],
        introEligibility: {},
        offerings: DEFAULT_PURCHASES_OFFERINGS,
        ready: true,
      };
    },
    [],
    {
      loading: false,
      value: {
        activeSubscriptions: [],
        introEligibility: {},
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
        introEligibility: data.introEligibility,
        offerings: data.offerings,
        promptedToSubscribe,
        refetch: init,
      }}
    >
      {ready ? children : <Loader />}
    </PurchasesContext.Provider>
  );
};
