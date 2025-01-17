import { PropsWithChildren, ReactElement } from 'react';

import { IonFab } from '@ionic/react';

import { FabButton } from './FabButton/FabButton';
import { FabPlacement } from './Fab.types';

export type FabProps = PropsWithChildren<{
  slot?: string;
  placement?: FabPlacement;
}>;

interface FabComponent {
  (props: FabProps): ReactElement;
  Button: typeof FabButton;
}

export const Fab: FabComponent = ({ children, slot, placement }: FabProps) => {
  const [horizontal, vertical] = placement || [];

  return (
    <IonFab horizontal={horizontal} slot={slot} vertical={vertical}>
      {children}
    </IonFab>
  );
};

Fab.Button = FabButton;
