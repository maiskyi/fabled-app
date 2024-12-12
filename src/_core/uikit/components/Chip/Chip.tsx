import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import { IonChip, IonLabel } from '@ionic/react';
import { Color } from '@ionic/core';

import styles from './Chip.module.scss';

export type ChipProps = PropsWithChildren<{
  color?: Color;
  emoji?: string;
}>;

export const Chip: FC<ChipProps> = ({ children, emoji, color = 'dark' }) => {
  return (
    <IonChip className={styles.root} color={color}>
      <IonLabel
        className={classNames(styles.label, {
          [styles.withEmoji]: !!emoji,
        })}
      >
        {!!emoji && <span>{emoji}</span>}
        <span>{children}</span>
      </IonLabel>
    </IonChip>
  );
};
