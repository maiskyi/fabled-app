import { FC, PropsWithChildren } from 'react';

import { IonCardSubtitle } from '@ionic/react';

import styles from './TileSubtitle.module.scss';

type TileSubtitleProps = PropsWithChildren<{}>;

export const TileSubtitle: FC<TileSubtitleProps> = ({ children }) => {
  return <IonCardSubtitle className={styles.root}>{children}</IonCardSubtitle>;
};
