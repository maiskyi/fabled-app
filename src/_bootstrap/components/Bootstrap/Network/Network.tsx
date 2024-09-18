import { FC, PropsWithChildren } from 'react';

import { ApiProvider, ApiProviderProps } from '@network/api';

export type NetworkProps = PropsWithChildren<{
  api: ApiProviderProps;
}>;

export const Network: FC<NetworkProps> = ({ children, api }) => {
  return <ApiProvider {...api}>{children}</ApiProvider>;
};
