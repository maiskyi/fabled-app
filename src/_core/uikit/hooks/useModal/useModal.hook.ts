import { useCallback, useState } from 'react';
import classNames from 'classnames';

import { useIonModal } from '@ionic/react';

import { ModalComponent } from './useModal.types';

import styles from '../../components/Modal/Modal.module.scss';

interface UseModalReturnState {}

type UseModalReturnDispatch<T extends object> = (params: T) => void;

type UseModalReturnType<T extends object> = [
  UseModalReturnState,
  UseModalReturnDispatch<T>,
];

interface UseModalParams<T extends object> {
  component: ModalComponent<T>;
  height?: 'auto';
}

export const useModal = <T extends object = {}>({
  component,
  height,
}: UseModalParams<T>): UseModalReturnType<T> => {
  const [params, setParams] = useState<T>({} as T);

  const [openModal, dismiss] = useIonModal(component, {
    ...params,
    dismiss: () => dismiss(),
  });

  const dispatch = useCallback(
    (params: T) => {
      setParams((prev) => ({ ...prev, ...params }));
      openModal({
        breakpoints: [0, 1],
        cssClass: classNames(styles.root, {
          [styles.autoheight]: height === 'auto',
        }),
        initialBreakpoint: 1,
      });
    },
    [openModal, height]
  );

  return [{}, dispatch];
};
