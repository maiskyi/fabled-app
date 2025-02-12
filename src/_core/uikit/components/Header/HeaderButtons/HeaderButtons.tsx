import { FC, PropsWithChildren } from 'react';

import { IonButtons } from '@ionic/react';

type HeaderButtonsProps = PropsWithChildren<{
  slot?: 'start' | 'end';
}>;

export const HeaderButtons: FC<HeaderButtonsProps> = ({
  children,
  slot = 'end',
}) => {
  return <IonButtons slot={slot}>{children}</IonButtons>;
};
