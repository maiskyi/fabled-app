import { FC, PropsWithChildren } from 'react';

import { IonFabList } from '@ionic/react';

type FabListProps = PropsWithChildren<{
  side: 'start' | 'end' | 'top' | 'bottom';
}>;

export const FabList: FC<FabListProps> = ({ children, side }) => {
  return <IonFabList side={side}>{children}</IonFabList>;
};
