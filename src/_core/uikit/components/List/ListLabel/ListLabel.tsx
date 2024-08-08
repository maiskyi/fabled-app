import { ComponentProps, FC, PropsWithChildren } from 'react';

import { IonLabel } from '@ionic/react';

type ListLabelProps = PropsWithChildren<{
  color?: ComponentProps<typeof IonLabel>['color'];
}>;

export const ListLabel: FC<ListLabelProps> = ({ children, color }) => {
  return <IonLabel color={color}>{children}</IonLabel>;
};
