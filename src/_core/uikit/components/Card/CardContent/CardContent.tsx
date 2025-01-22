import { FC, PropsWithChildren } from 'react';

import { IonCardContent } from '@ionic/react';

import styles from './CardContent.module.scss';

type CardContentProps = PropsWithChildren<{}>;

export const CardContent: FC<CardContentProps> = ({ children }) => {
  return <IonCardContent className={styles.root}>{children}</IonCardContent>;
};
