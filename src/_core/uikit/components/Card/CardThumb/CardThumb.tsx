import { FC, PropsWithChildren, CSSProperties, Fragment } from 'react';
import { useContextSelector } from 'use-context-selector';

import {
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonSkeletonText,
} from '@ionic/react';

import { CardContext } from '../Card.context';

import styles from './CardThumb.module.scss';

export type CardThumbProps = PropsWithChildren<{
  aspectRatio?: CSSProperties['aspectRatio'];
  title?: string;
  subtitle?: string;
}>;

export const CardThumb: FC<CardThumbProps> = ({
  children,
  title,
  subtitle,
  aspectRatio = '16 / 9',
}) => {
  const loading = useContextSelector(CardContext, ({ loading }) => loading);

  const hasHeader = !!title || !!subtitle;

  return (
    <div className={styles.root} style={{ aspectRatio }}>
      {loading ? (
        <IonSkeletonText animated className={styles.skeleton} />
      ) : (
        <Fragment>
          {children}
          {hasHeader && (
            <IonCardHeader className={styles.header}>
              {!!title && (
                <IonCardTitle className={styles.title}>{title}</IonCardTitle>
              )}
              {!!subtitle && (
                <IonCardSubtitle className={styles.subtitle}>
                  {subtitle}
                </IonCardSubtitle>
              )}
            </IonCardHeader>
          )}
        </Fragment>
      )}
    </div>
  );
};
