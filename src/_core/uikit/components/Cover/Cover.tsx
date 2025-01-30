import { CSSProperties, FC, PropsWithChildren } from 'react';

import { CoverContext } from '../../contexts/CoverContext';

export type CoverProps = PropsWithChildren<{
  src: string;
  size?: CSSProperties['backgroundSize'];
  position?: CSSProperties['backgroundPosition'];
}>;

export const Cover: FC<CoverProps> = ({ children, src, size, position }) => {
  return (
    <CoverContext.Provider value={{ position, size, src, withCover: !!src }}>
      {children}
    </CoverContext.Provider>
  );
};
