import { forwardRef, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { useContext, useContextSelector } from 'use-context-selector';

import { IonContent } from '@ionic/react';

import { Selector } from '../../constants';
import { CoverContext } from '../../contexts/CoverContext';
import { ModalContext } from '../../contexts/ModalContext';

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
    const { src, withCover, size, position } = useContext(CoverContext);

    const isModal = useContextSelector(ModalContext, ({ exists }) => exists);

    return (
      <IonContent
        className={classNames(styles.root, {
          'ion-padding': inset,
          [styles.withCover]: withCover && !isModal,
        })}
        fullscreen={fullscreen}
        id={Selector.Content}
        ref={ref}
        {...props}
      >
        {withCover && !isModal && (
          <div
            className={styles.cover}
            style={{
              backgroundImage: `url(${src})`,
              backgroundPosition: position,
              backgroundSize: size,
            }}
          />
        )}
        {children}
      </IonContent>
    );
  }
);
