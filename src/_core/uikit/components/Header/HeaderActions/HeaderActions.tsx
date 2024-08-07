import { FC, PropsWithChildren } from 'react';

import { IonButtons } from '@ionic/react';

type HeaderActionsProps = PropsWithChildren<{
  slot?: 'start' | 'end';
}>;

export const HeaderActions: FC<HeaderActionsProps> = ({
  children,
  slot = 'end',
}) => {
  return <IonButtons slot={slot}>{children}</IonButtons>;
};
