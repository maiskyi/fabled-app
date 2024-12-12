import { FC, PropsWithChildren } from 'react';

import { IonChip, IonLabel } from '@ionic/react';
import { Color } from '@ionic/core';

import styles from './Chip.module.scss';

export type ChipProps = PropsWithChildren<{
  color?: Color;
}>;

export const Chip: FC<ChipProps> = ({ children, color = 'dark' }) => {
  return (
    <IonChip className={styles.root} color={color}>
      <IonLabel className={styles.label}>{children}</IonLabel>
    </IonChip>
  );
};
