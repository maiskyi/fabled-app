import { FC, PropsWithChildren, CSSProperties } from 'react';

import styles from './CardThumb.module.scss';

type CardThumbProps = PropsWithChildren<{
  aspectRatio?: CSSProperties['aspectRatio'];
}>;

export const CardThumb: FC<CardThumbProps> = ({
  children,
  aspectRatio = '16 / 9',
}) => {
  return (
    <div style={{ aspectRatio }} className={styles.root}>
      {children}
    </div>
  );
};
