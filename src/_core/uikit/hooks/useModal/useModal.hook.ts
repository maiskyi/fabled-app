import { useCallback } from 'react';
import classNames from 'classnames';

import { useIonModal } from '@ionic/react';

import { ModalComponent } from './useModal.types';

import styles from './useModal.module.scss';

interface UseModalReturnState {}

type UseModalReturnDispatch = () => void;

type UseModalReturnType = [UseModalReturnState, UseModalReturnDispatch];

interface UseModalParams<T extends object> {
  component: ModalComponent<T>;
  height?: 'auto';
}

export const useModal = <T extends object = {}>({
  component,
  height,
}: UseModalParams<T>): UseModalReturnType => {
  const [openModal, dismiss] = useIonModal(component, {
    dismiss: () => dismiss(),
  });

  const dispatch = useCallback(() => {
    openModal({
      breakpoints: [0, 1],
      cssClass: classNames(styles.root, {
        [styles.autoheight]: height === 'auto',
      }),
      initialBreakpoint: 1,
    });
  }, [openModal, height]);

  return [{}, dispatch];
};
