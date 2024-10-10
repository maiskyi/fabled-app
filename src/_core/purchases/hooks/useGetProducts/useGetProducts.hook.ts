import { useQuery } from '@tanstack/react-query';
import { Purchases } from '@revenuecat/purchases-capacitor';

import {
  UseGetProductsKey,
  UseGetProductsResponse,
} from './useGetProducts.types';

interface UseGetProductsParams {
  productIdentifiers: string[];
}

export const useGetProducts = ({
  productIdentifiers,
}: UseGetProductsParams) => {
  return useQuery<
    UseGetProductsResponse,
    Error,
    UseGetProductsResponse,
    UseGetProductsKey
  >({
    queryFn: async ({ queryKey: [, productIdentifiers] }) => {
      const { products } = await Purchases.getProducts({
        productIdentifiers,
      });

      return products;
    },
    queryKey: ['useGetProducts', productIdentifiers],
  });
};
