import { useContextSelector } from 'use-context-selector';

import { useMutation } from '@tanstack/react-query';
import { Purchases } from '@revenuecat/purchases-capacitor';

import { PurchasesContext } from '../../contexts/PurchasesContext';

import {
  UsePurchaseStoreProductRequest,
  UsePurchaseStoreProductResponse,
} from './usePurchaseStoreProduct.types';

export const usePurchaseStoreProduct = () => {
  const refetch = useContextSelector(
    PurchasesContext,
    ({ refetch }) => refetch
  );

  return useMutation<
    UsePurchaseStoreProductResponse,
    Error,
    UsePurchaseStoreProductRequest
  >({
    mutationFn: async ({ product }) => {
      await Purchases.purchaseStoreProduct({
        product,
      });

      const { activeSubscriptions } = await refetch();

      return { activeSubscriptions };
    },
    mutationKey: ['usePurchaseStoreProduct'],
  });
};
