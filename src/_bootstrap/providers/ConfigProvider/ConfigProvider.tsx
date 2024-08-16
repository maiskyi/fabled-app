import { FC, PropsWithChildren } from 'react';

import { ConfigContext, ConfigContextProps } from './ConfigProvider.context';

export type ConfigProviderProps = PropsWithChildren<ConfigContextProps>;

export const ConfigProvider: FC<ConfigProviderProps> = ({
  children,
  ...value
}) => {
  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
};
