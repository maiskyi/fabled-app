import { FC, PropsWithChildren } from 'react';

import {
  ConfigProvider,
  ConfigProviderProps,
} from '../../providers/ConfigProvider';

export type InitProps = PropsWithChildren<{
  config: ConfigProviderProps;
}>;

export const Init: FC<InitProps> = ({ children, config }) => {
  return <ConfigProvider {...config}>{children}</ConfigProvider>;
};
