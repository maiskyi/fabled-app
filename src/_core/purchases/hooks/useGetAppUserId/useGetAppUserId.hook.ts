import { useQuery } from '@tanstack/react-query';
import { Purchases } from '@revenuecat/purchases-capacitor';

import {
  UseGetAppUserIdKey,
  UseGetAppUserIdResponse,
} from './useGetAppUserId.types';

export const useGetAppUserId = () => {
  return useQuery<
    UseGetAppUserIdResponse,
    Error,
    UseGetAppUserIdResponse,
    UseGetAppUserIdKey
  >({
    enabled: false,
    queryFn: async () => {
      const { appUserID } = await Purchases.getAppUserID();

      return { appUserId: appUserID };
    },
    queryKey: ['useGetAppUserId'],
  });
};
