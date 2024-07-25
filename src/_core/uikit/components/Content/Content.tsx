import { FC, PropsWithChildren } from 'react';

import classNames from 'classnames';
import { IonContent } from '@ionic/react';

export type ContentProps = PropsWithChildren<{
  inset?: boolean;
  className?: string;
}>;

export const Content: FC<ContentProps> = ({ children, inset = true }) => {
  return (
    <IonContent
      className={classNames({
        'ion-padding': inset,
      })}
    >
      {children}
    </IonContent>
  );
};
