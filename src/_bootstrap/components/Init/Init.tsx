import { FC, PropsWithChildren } from 'react';

import { ConfigProvider } from '../../providers/ConfigProvider';
import { DataProvider, DataProviderProps } from '../../providers/DataProvider';

export type InitProps = PropsWithChildren<{
  data: DataProviderProps;
}>;

export const Init: FC<InitProps> = ({ children, data }) => {
  return (
    <ConfigProvider>
      <DataProvider {...data}>{children}</DataProvider>{' '}
    </ConfigProvider>
  );
};
