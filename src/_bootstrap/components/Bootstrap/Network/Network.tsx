import { FC, PropsWithChildren, useCallback } from 'react';

import {
  DTO,
  ApiProvider,
  ApiProviderProps,
  OnResponseFulfilledCallback,
} from '@network/api';

export type NetworkProps = PropsWithChildren<{
  api: ApiProviderProps;
}>;

export const Network: FC<NetworkProps> = ({ children, api }) => {
  const handleOnResponseFulfilled: OnResponseFulfilledCallback<{
    errors: DTO.AccessError[];
  }> = useCallback((response) => {
    if (response.data?.errors?.length) {
      return Promise.reject(response.data?.errors);
    }
    return Promise.resolve(response);
  }, []);

  return (
    <ApiProvider {...api} onResponseFulfilled={handleOnResponseFulfilled}>
      {children}
    </ApiProvider>
  );
};
