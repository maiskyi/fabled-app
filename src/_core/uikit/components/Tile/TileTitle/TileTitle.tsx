import { FC, PropsWithChildren } from 'react';

import { IonCardTitle } from '@ionic/react';

import styles from './TileTitle.module.scss';

type TileTitleProps = PropsWithChildren<{}>;

export const TileTitle: FC<TileTitleProps> = ({ children }) => {
  return <IonCardTitle className={styles.root}>{children}</IonCardTitle>;
};
