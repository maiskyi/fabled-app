import { FC, PropsWithChildren } from 'react';

import { IonHeader, IonToolbar } from '@ionic/react';

export type HeaderProps = PropsWithChildren<{
  className?: string;
}>;

export const Header: FC<HeaderProps> = ({ children, className }) => {
  return (
    <IonHeader className={className}>
      <IonToolbar>{children}</IonToolbar>
    </IonHeader>
  );
};
