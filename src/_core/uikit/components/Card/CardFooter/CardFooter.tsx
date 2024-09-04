import { FC, PropsWithChildren } from 'react';

import { IonCardContent } from '@ionic/react';

import styles from './CardFooter.module.scss';

type CardFooterProps = PropsWithChildren<{}>;

export const CardFooter: FC<CardFooterProps> = ({ children }) => {
  return <IonCardContent className={styles.root}>{children}</IonCardContent>;
};
