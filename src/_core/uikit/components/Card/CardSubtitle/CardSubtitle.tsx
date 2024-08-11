import { FC, PropsWithChildren } from 'react';

import { useContextSelector } from 'use-context-selector';
import { IonCardSubtitle, IonSkeletonText } from '@ionic/react';

import styles from './CardSubtitle.module.css';

import { CardContext } from '../Card.context';

type CardSubtitleProps = PropsWithChildren<{}>;

export const CardSubtitle: FC<CardSubtitleProps> = ({ children }) => {
  const loading = useContextSelector(CardContext, ({ loading }) => loading);

  return (
    <IonCardSubtitle>
      {loading ? (
        <IonSkeletonText className={styles.skeleton} animated />
      ) : (
        children
      )}
    </IonCardSubtitle>
  );
};
