import { FC, PropsWithChildren } from 'react';

import { LullabyContext } from './LullabyProvider.context';

type LullabyProviderProps = PropsWithChildren<{}>;

export const LullabyProvider: FC<LullabyProviderProps> = ({ children }) => {
  return (
    <LullabyContext.Provider value={{}}>{children}</LullabyContext.Provider>
  );
};
