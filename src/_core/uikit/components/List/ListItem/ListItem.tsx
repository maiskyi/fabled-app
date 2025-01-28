import { FC, PropsWithChildren } from 'react';

import { IonItem } from '@ionic/react';

import styles from '../List.module.scss';

type ListItemProps = PropsWithChildren<{
  button?: boolean;
  onClick?: () => void;
  lines?: 'full' | 'inset' | 'none';
}>;

export const ListItem: FC<ListItemProps> = ({
  button,
  children,
  onClick,
  lines,
}) => {
  return (
    <IonItem
      button={button}
      className={styles.item}
      lines={lines}
      onClick={onClick}
    >
      {children}
    </IonItem>
  );
};
