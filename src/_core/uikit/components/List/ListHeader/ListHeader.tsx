import { FC, PropsWithChildren } from 'react';

import { IonListHeader, IonLabel } from '@ionic/react';

type ListHeaderProps = PropsWithChildren<{}>;

export const ListHeader: FC<ListHeaderProps> = ({ children }) => {
  return (
    <IonListHeader>
      <IonLabel>{children}</IonLabel>
    </IonListHeader>
  );
};
