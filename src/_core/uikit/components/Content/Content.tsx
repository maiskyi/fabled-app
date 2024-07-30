import { FC, PropsWithChildren } from 'react';

import classNames from 'classnames';
import { IonContent } from '@ionic/react';

export type ContentProps = PropsWithChildren<{
  inset?: boolean;
  className?: string;
  fullscreen?: boolean;
}>;

export const Content: FC<ContentProps> = ({
  children,
  fullscreen,
  inset = true,
}) => {
  return (
    <IonContent
      fullscreen={fullscreen}
      className={classNames({
        'ion-padding': inset,
      })}
    >
      {children}
    </IonContent>
  );
};
