import { FC, PropsWithChildren } from 'react';

import { IonFooter, IonToolbar } from '@ionic/react';

import styles from './Footer.module.scss';

export type FooterProps = PropsWithChildren<{}>;

export const Footer: FC<FooterProps> = ({ children }) => {
  return (
    <IonFooter collapse="fade">
      <IonToolbar className={styles.toolbar}>{children}</IonToolbar>
    </IonFooter>
  );
};

// padding-right: calc(var(--ion-safe-area-right) + 8px);
// padding-left: calc(var(--ion-safe-area-left) + 8px);
