import { FC, PropsWithChildren } from 'react';

import {
  ConfigProvider,
  ConfigProviderProps,
} from '../../../providers/ConfigProvider';

export type ConfigProps = PropsWithChildren<ConfigProviderProps>;

export const Config: FC<ConfigProps> = ({ children, ...config }) => {
  return <ConfigProvider {...config}>{children}</ConfigProvider>;
};
