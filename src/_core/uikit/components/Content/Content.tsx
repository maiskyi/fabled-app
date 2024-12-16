import { forwardRef, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { useContext } from 'use-context-selector';

import { IonContent } from '@ionic/react';

import { Selector } from '../../constants';
import { CoverContext } from '../../contexts/CoverContext';

import { ContentInstance } from './Content.types';

import styles from './Content.module.scss';

export type ContentProps = PropsWithChildren<{
  inset?: boolean;
  className?: string;
  fullscreen?: boolean;
  scrollY?: boolean;
}>;

export const Content = forwardRef<ContentInstance, ContentProps>(
  function Content({ children, fullscreen, inset = false, ...props }, ref) {
    const { src, withCover } = useContext(CoverContext);

    return (
      <IonContent
        className={classNames(styles.root, {
          'ion-padding': inset,
          [styles.withCover]: withCover,
        })}
        fullscreen={fullscreen}
        id={Selector.Content}
        ref={ref}
        {...props}
      >
        {withCover && (
          <div
            className={styles.cover}
            style={{ backgroundImage: `url(${src})` }}
          />
        )}
        {children}
      </IonContent>
    );
  }
);
