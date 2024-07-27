import { FC, PropsWithChildren } from 'react';

import { IonFooter, IonToolbar } from '@ionic/react';

export type FooterProps = PropsWithChildren<{}>;

export const Footer: FC<FooterProps> = ({ children }) => {
  return (
    <IonFooter>
      <IonToolbar>{children}</IonToolbar>
    </IonFooter>
  );
};
