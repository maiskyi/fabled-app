import { FC, forwardRef, PropsWithChildren } from 'react';
import classNames from 'classnames';

import { IonContent } from '@ionic/react';

export type ContentProps = PropsWithChildren<{
  inset?: boolean;
  className?: string;
  fullscreen?: boolean;
}>;

export const Content: FC<ContentProps> = forwardRef<any, ContentProps>(
  function Content({ children, fullscreen, inset = false }, ref) {
    return (
      <IonContent
        className={classNames({
          'ion-padding': inset,
        })}
        fullscreen={fullscreen}
        ref={ref}
      >
        {children}
      </IonContent>
    );
  }
);
