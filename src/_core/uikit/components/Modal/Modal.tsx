import {
  forwardRef,
  PropsWithChildren,
  useImperativeHandle,
  useRef,
} from 'react';
import classNames from 'classnames';

import { IonModal } from '@ionic/react';

import { ModalContext } from '../../contexts/ModalContext';

import { ModalElement } from './Modal.types';

import styles from './Modal.module.scss';

export type ModalProps = PropsWithChildren<{
  height?: 'auto';
  trigger?: string;
}>;

export const Modal = forwardRef<ModalElement, ModalProps>(function Modal(
  { children, height, trigger },
  ref
) {
  // eslint-disable-next-line no-undef
  const modal = useRef<HTMLIonModalElement>();

  useImperativeHandle(ref, () => ({
    dismiss: () => modal.current.dismiss(),
  }));

  return (
    <IonModal
      breakpoints={[0, 1]}
      className={classNames(styles.root, {
        [styles.autoheight]: height === 'auto',
      })}
      initialBreakpoint={1}
      ref={modal}
      trigger={trigger}
    >
      <ModalContext.Provider value={{ exists: true }}>
        {children}
      </ModalContext.Provider>
    </IonModal>
  );
});
