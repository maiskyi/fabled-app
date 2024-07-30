import { FC, forwardRef, PropsWithChildren } from 'react';

import classNames from 'classnames';
import { IonContent } from '@ionic/react';

export type ContentProps = PropsWithChildren<{
  inset?: boolean;
  className?: string;
  fullscreen?: boolean;
}>;

export const Content: FC<ContentProps> = forwardRef<
  HTMLIonContentElement,
  ContentProps
>(function Content({ children, fullscreen, inset = true }, ref) {
  return (
    <IonContent
      ref={ref}
      fullscreen={fullscreen}
      className={classNames({
        'ion-padding': inset,
      })}
    >
      {children}
    </IonContent>
  );
});
