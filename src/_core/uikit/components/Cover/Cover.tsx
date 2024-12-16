import { FC, PropsWithChildren } from 'react';

import { CoverContext } from '../../contexts/CoverContext';

export type CoverProps = PropsWithChildren<{
  src: string;
}>;

export const Cover: FC<CoverProps> = ({ children, src }) => {
  return (
    <CoverContext.Provider value={{ src, withCover: !!src }}>
      {children}
    </CoverContext.Provider>
  );
};
