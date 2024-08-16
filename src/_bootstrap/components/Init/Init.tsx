import { FC, PropsWithChildren } from 'react';

import {
  ConfigProvider,
  ConfigProviderProps,
} from '../../providers/ConfigProvider';
import { DataProvider, DataProviderProps } from '../../providers/DataProvider';

export type InitProps = PropsWithChildren<{
  config: ConfigProviderProps;
  data: DataProviderProps;
}>;

export const Init: FC<InitProps> = ({ children, data, config }) => {
  return (
    <ConfigProvider {...config}>
      <DataProvider {...data}>{children}</DataProvider>
    </ConfigProvider>
  );
};
