import { FC, PropsWithChildren, useCallback } from 'react';
import { merge } from 'lodash';

import { useAuth } from '@core/auth';
import { useGetAppUserId } from '@core/purchases';
import {
  ApiProvider,
  ApiProviderProps,
  OnRequestFulfilledCallback,
} from '@network/api';
import { useDevice } from '@core/uikit';

export type NetworkProps = PropsWithChildren<{
  api: ApiProviderProps;
}>;

export const Network: FC<NetworkProps> = ({ children, api }) => {
  const { getIdToken } = useAuth();
  const { refetch: getUserId } = useGetAppUserId();
  const { identifier } = useDevice();

  const handleOnRequestFulfilled: OnRequestFulfilledCallback = useCallback(
    async (config) => {
      const { token } = await getIdToken();
      const {
        data: { appUserId },
      } = await getUserId();

      return merge({}, config, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Device-Id': identifier,
          'Rc-User-Id': appUserId,
        },
      });
    },
    [getIdToken, getUserId, identifier]
  );

  return (
    <ApiProvider {...api} onRequestFulfilled={handleOnRequestFulfilled}>
      {children}
    </ApiProvider>
  );
};
