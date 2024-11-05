import { useQuery } from '@tanstack/react-query';
import { Purchases } from '@revenuecat/purchases-capacitor';
import { Capacitor } from '@capacitor/core';

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
      if (Capacitor.isNativePlatform()) {
        const { appUserID } = await Purchases.getAppUserID();
        return { appUserId: appUserID };
      }

      return { appUserId: null };
    },
    queryKey: ['useGetAppUserId'],
  });
};
