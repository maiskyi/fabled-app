import { FC, PropsWithChildren } from 'react';

import { ConfigProvider } from '../../providers/ConfigProvider';

type InitProps = PropsWithChildren<{}>;

export const Init: FC<InitProps> = ({ children }) => {
  return <ConfigProvider>{children}</ConfigProvider>;
};
