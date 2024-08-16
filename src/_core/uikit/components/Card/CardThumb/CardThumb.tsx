import { FC, PropsWithChildren, CSSProperties } from 'react';
import { useContextSelector } from 'use-context-selector';

import { IonSkeletonText } from '@ionic/react';

import styles from './CardThumb.module.scss';

import { CardContext } from '../Card.context';

type CardThumbProps = PropsWithChildren<{
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
