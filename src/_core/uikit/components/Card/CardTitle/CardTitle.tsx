import { FC, Fragment, PropsWithChildren } from 'react';

import { IonSkeletonText, IonCardTitle } from '@ionic/react';
import { useContextSelector } from 'use-context-selector';

import styles from './CardTitle.module.scss';

import { CardContext } from '../Card.context';

type CardTitleProps = PropsWithChildren<{}>;

export const CardTitle: FC<CardTitleProps> = ({ children }) => {
  const loading = useContextSelector(CardContext, ({ loading }) => loading);

  return (
    <IonCardTitle>
      {loading ? (
        <Fragment>
          <IonSkeletonText
            animated
            className={styles.skeleton}
            style={{ width: '100%' }}
          />
          <IonSkeletonText
            animated
            className={styles.skeleton}
            style={{ width: '80%' }}
          />
        </Fragment>
      ) : (
        children
      )}
    </IonCardTitle>
  );
};
