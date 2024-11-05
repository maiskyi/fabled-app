import { forwardRef, PropsWithChildren } from 'react';
import classNames from 'classnames';

import { IonContent } from '@ionic/react';

import { Selector } from '../../constants';

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
        id={Selector.Content}
        ref={ref}
      >
        {children}
      </IonContent>
    );
  }
);
