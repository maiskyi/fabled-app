import { FC, PropsWithChildren, CSSProperties } from 'react';

type CardThumbProps = PropsWithChildren<{
  aspectRatio?: CSSProperties['aspectRatio'];
}>;

export const CardThumb: FC<CardThumbProps> = ({
  children,
  aspectRatio = '16 / 9',
}) => {
  return <div style={{ aspectRatio }}>{children}</div>;
};
