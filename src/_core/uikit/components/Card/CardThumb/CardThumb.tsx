import { FC, PropsWithChildren, CSSProperties } from 'react';
import { useContextSelector } from 'use-context-selector';

import { IonSkeletonText } from '@ionic/react';

import { CardContext } from '../Card.context';

import styles from './CardThumb.module.scss';

export type CardThumbProps = PropsWithChildren<{
  aspectRatio?: CSSProperties['aspectRatio'];
}>;

export const CardThumb: FC<CardThumbProps> = ({
  children,
  aspectRatio = '16 / 9',
}) => {
  const loading = useContextSelector(CardContext, ({ loading }) => loading);

  return (
    <div className={styles.root} style={{ aspectRatio }}>
      {loading ? (
        <IonSkeletonText animated className={styles.skeleton} />
      ) : (
        children
      )}
    </div>
  );
};
