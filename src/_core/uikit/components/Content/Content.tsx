import { forwardRef, PropsWithChildren } from 'react';
import classNames from 'classnames';

import { IonContent } from '@ionic/react';

import { ContentInstance } from './Content.types';

export type ContentProps = PropsWithChildren<{
  inset?: boolean;
  className?: string;
  fullscreen?: boolean;
}>;

export const Content = forwardRef<ContentInstance, ContentProps>(
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
