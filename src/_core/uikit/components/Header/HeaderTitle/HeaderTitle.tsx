import { ComponentProps, FC, PropsWithChildren } from 'react';

import { IonTitle } from '@ionic/react';

type HeaderTitleProps = PropsWithChildren<{
  size?: ComponentProps<typeof IonTitle>['size'];
}>;

export const HeaderTitle: FC<HeaderTitleProps> = ({ size, children }) => {
  return <IonTitle size={size}>{children}</IonTitle>;
};
