import { FC, PropsWithChildren } from 'react';

import { IonItem } from '@ionic/react';

type ListItemProps = PropsWithChildren<{
  button?: boolean;
  onClick?: () => void;
}>;

export const ListItem: FC<ListItemProps> = ({ button, children, onClick }) => {
  return (
    <IonItem button={button} onClick={onClick}>
      {children}
    </IonItem>
  );
};
