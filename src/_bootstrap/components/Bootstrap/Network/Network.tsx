import { FC, PropsWithChildren, useCallback } from 'react';
import { merge } from 'lodash';

import {
  DTO,
  ApiProvider,
  ApiProviderProps,
  OnResponseFulfilledCallback,
  OnRequestFulfilledCallback,
} from '@network/api';
import { useAuth } from '@core/auth';

export type NetworkProps = PropsWithChildren<{
  api: ApiProviderProps;
}>;

export const Network: FC<NetworkProps> = ({ children, api }) => {
  const { getIdToken } = useAuth();

  const handleOnRequestFulfilled: OnRequestFulfilledCallback = useCallback(
    async (config) => {
      const { token } = await getIdToken();

      return merge({}, config, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    [getIdToken]
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
    <ApiProvider
      {...api}
      onRequestFulfilled={handleOnRequestFulfilled}
      onResponseFulfilled={handleOnResponseFulfilled}
    >
      {children}
    </ApiProvider>
  );
};
