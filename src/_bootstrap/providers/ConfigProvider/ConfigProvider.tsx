import { FC, PropsWithChildren } from 'react';

import { ConfigContext } from './ConfigProvider.context';

type ConfigProviderProps = PropsWithChildren<{}>;

export const ConfigProvider: FC<ConfigProviderProps> = ({ children }) => {
  return (
    <ConfigContext.Provider
      value={{ version: import.meta.env.PACKAGE_VERSION }}
    >
      {children}
    </ConfigContext.Provider>
  );
};
