import { ComponentProps, FC, PropsWithChildren } from 'react';

import { IonHeader, IonToolbar } from '@ionic/react';

export type HeaderProps = PropsWithChildren<{
  className?: string;
  translucent?: boolean;
  collapse?: ComponentProps<typeof IonHeader>['collapse'];
}>;

export const Header: FC<HeaderProps> = ({
  children,
  className,
  translucent,
}) => {
  return (
    <IonHeader className={className} translucent={translucent}>
      <IonToolbar>{children}</IonToolbar>
    </IonHeader>
  );
};
