import { FC, PropsWithChildren, useCallback } from 'react';
import { merge } from 'lodash';

import {
  DTO,
  ApiProvider as AdminProvider,
  ApiProviderProps as AdminProviderProps,
  OnResponseFulfilledCallback,
  OnRequestFulfilledCallback,
} from '@network/admin';
import { useAuth } from '@core/auth';
import { useGetAppUserId } from '@core/purchases';
import { ApiProvider, ApiProviderProps } from '@network/api';

export type NetworkProps = PropsWithChildren<{
  admin: AdminProviderProps;
  api: ApiProviderProps;
}>;

export const Network: FC<NetworkProps> = ({ children, admin, api }) => {
  const { getIdToken } = useAuth();
  const { refetch: getUserId } = useGetAppUserId();

  const handleOnRequestFulfilled: OnRequestFulfilledCallback = useCallback(
    async (config) => {
      const { token } = await getIdToken();
      const {
        data: { appUserId },
      } = await getUserId();

      return merge({}, config, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Rc-User-Id': appUserId,
        },
      });
    },
    [getIdToken, getUserId]
  );

  const handleOnResponseFulfilled: OnResponseFulfilledCallback<{
    errors: DTO.AccessError[];
  }> = useCallback((response) => {
    if (response.data?.errors?.length) {
      return Promise.reject(response.data?.errors);
    }
    return Promise.resolve(response);
  }, []);

  return (
    <AdminProvider
      {...admin}
      onRequestFulfilled={handleOnRequestFulfilled}
      onResponseFulfilled={handleOnResponseFulfilled}
    >
      <ApiProvider
        {...api}
        onRequestFulfilled={handleOnRequestFulfilled}
        onResponseFulfilled={handleOnResponseFulfilled}
      >
        {children}
      </ApiProvider>
    </AdminProvider>
  );
};
