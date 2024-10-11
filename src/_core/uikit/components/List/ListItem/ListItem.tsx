import { FC, PropsWithChildren } from 'react';

import { IonItem } from '@ionic/react';

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
    <IonItem button={button} lines={lines} onClick={onClick}>
      {children}
    </IonItem>
  );
};
