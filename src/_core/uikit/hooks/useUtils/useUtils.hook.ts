import { useCallback, useState } from 'react';

import { useIonToast, useIonModal } from '@ionic/react';

import { Selector } from '../../constants/selector.const';

import { ToastParams, ConfirmParams } from './useUtils.types';
import { ICON_MAPPING, COLOR_MAPPING } from './useUtils.const';
import { ConfirmModal, ConfirmModalParams } from './_partitions/ConfirmModal';

import styles from './useUtils.module.scss';

export const useUtils = () => {
  const [showToast] = useIonToast();
  const [confirmParams, setConfirmParams] = useState<ConfirmModalParams>();

  const [showConfirm, dismissConfirm] = useIonModal(
    ConfirmModal,
    confirmParams
  );

  const toast = useCallback(
    ({ title, message, variant }: ToastParams) => {
      showToast({
        buttons: [
          {
            text: 'Ok',
          },
        ],
        color: COLOR_MAPPING[variant],
        header: title,
        icon: ICON_MAPPING[variant],
        message,
        position: 'top',
        positionAnchor: Selector.Header,
      });
    },
    [showToast]
  );

  const confirm = useCallback(
    (params: ConfirmParams) => {
      setConfirmParams({
        dismiss: dismissConfirm,
        ...params,
      });
      showConfirm({
        backdropDismiss: false,
        breakpoints: [0, 1],
        cssClass: styles.confirm,
        initialBreakpoint: 1,
        showBackdrop: true,
      });
    },
    [showConfirm, dismissConfirm]
  );

  return { confirm, toast };
};
