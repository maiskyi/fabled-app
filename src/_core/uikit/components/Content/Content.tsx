import { forwardRef, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { useContextSelector } from 'use-context-selector';

import { IonContent } from '@ionic/react';

import { Selector } from '../../constants';
import { PageContext } from '../../contexts/PageContext';

import { ContentInstance } from './Content.types';

import styles from './Content.module.scss';

export type ContentProps = PropsWithChildren<{
  inset?: boolean;
  className?: string;
  fullscreen?: boolean;
}>;

export const Content = forwardRef<ContentInstance, ContentProps>(
  function Content({ children, fullscreen, inset = false }, ref) {
    const withCover = useContextSelector(
      PageContext,
      ({ withCover }) => withCover
    );

    return (
      <IonContent
        className={classNames(styles.root, {
          'ion-padding': inset,
          [styles.transparent]: withCover,
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
