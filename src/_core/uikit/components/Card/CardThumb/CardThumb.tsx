import { FC, PropsWithChildren, CSSProperties, Fragment } from 'react';
import { useContextSelector } from 'use-context-selector';

import { IonCardTitle, IonSkeletonText } from '@ionic/react';

import { CardContext } from '../Card.context';

import styles from './CardThumb.module.scss';

export type CardThumbProps = PropsWithChildren<{
  aspectRatio?: CSSProperties['aspectRatio'];
  caption?: string;
}>;

export const CardThumb: FC<CardThumbProps> = ({
  caption,
  children,
  aspectRatio = '16 / 9',
}) => {
  const loading = useContextSelector(CardContext, ({ loading }) => loading);

  return (
    <div className={styles.root} style={{ aspectRatio }}>
      {loading ? (
        <IonSkeletonText animated className={styles.skeleton} />
      ) : (
        <Fragment>
          {children}
          {!!caption && (
            <div className={styles.caption}>
              <IonCardTitle className={styles.text}>{caption}</IonCardTitle>
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
};
