import { useQuery } from '@tanstack/react-query';
import { Purchases } from '@revenuecat/purchases-capacitor';

import {
  UseGetOfferingsKey,
  UseGetOfferingsResponse,
} from './useGetOfferings.types';

export const useGetOfferings = () => {
  return useQuery<
    UseGetOfferingsResponse,
    Error,
    UseGetOfferingsResponse,
    UseGetOfferingsKey
  >({
    queryFn: async () => {
      const { current } = await Purchases.getOfferings();

      return current;
    },
    queryKey: ['useGetOfferings'],
  });
};
