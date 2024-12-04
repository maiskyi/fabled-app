import { FC, PropsWithChildren } from 'react';
import { useContextSelector } from 'use-context-selector';

import { IonCardSubtitle, IonSkeletonText } from '@ionic/react';

import { CardContext } from '../Card.context';

import styles from './CardSubtitle.module.css';

type CardSubtitleProps = PropsWithChildren<{
  className?: string;
}>;

export const CardSubtitle: FC<CardSubtitleProps> = ({ children }) => {
  const loading = useContextSelector(CardContext, ({ loading }) => loading);

  return (
    <IonCardSubtitle>
      {loading ? (
        <IonSkeletonText animated className={styles.skeleton} />
      ) : (
        children
      )}
    </IonCardSubtitle>
  );
};
