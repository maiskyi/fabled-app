import { FC, PropsWithChildren } from 'react';

import { IonCardHeader } from '@ionic/react';

import styles from './TileHeader.module.scss';

type TileHeaderProps = PropsWithChildren<{}>;

export const TileHeader: FC<TileHeaderProps> = ({ children }) => {
  return <IonCardHeader className={styles.root}>{children}</IonCardHeader>;
};
