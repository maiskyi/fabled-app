import { FC, PropsWithChildren } from 'react';

import { IonRow } from '@ionic/react';

type GridRowProps = PropsWithChildren<{}>;

export const GridRow: FC<GridRowProps> = ({ children }) => {
  return <IonRow>{children}</IonRow>;
};
