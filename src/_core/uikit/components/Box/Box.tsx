import { CSSProperties, FC, PropsWithChildren } from 'react';

export type BoxProps = PropsWithChildren<CSSProperties>;

export const Box: FC<BoxProps> = ({ children, ...style }) => {
  return <div style={style}>{children}</div>;
};
