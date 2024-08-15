import { ComponentProps, FC, PropsWithChildren } from 'react';

import { IonTitle } from '@ionic/react';

type HeaderTitleProps = PropsWithChildren<{
  wrap?: boolean;
  size?: ComponentProps<typeof IonTitle>['size'];
}>;

export const HeaderTitle: FC<HeaderTitleProps> = ({ wrap, size, children }) => {
  return (
    <IonTitle size={size}>
      {wrap ? <span className="ion-text-wrap">{children}</span> : children}
    </IonTitle>
  );
};
