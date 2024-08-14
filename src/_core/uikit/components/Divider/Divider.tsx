import { FC, PropsWithChildren } from 'react';

import { IonCardSubtitle } from '@ionic/react';

import styles from './Divider.module.scss';

export type DividerProps = PropsWithChildren<{}>;

export const Divider: FC<DividerProps> = ({ children }) => {
  if (children) {
    return (
      <div className={styles.root}>
        <span className={styles.line} />
        <IonCardSubtitle className={styles.middle}>{children}</IonCardSubtitle>
        <span className={styles.line} />
      </div>
    );
  }

  return <div className={styles.line} />;
};
