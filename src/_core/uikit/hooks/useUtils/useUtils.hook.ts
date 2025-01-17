import { useCallback, useState } from 'react';
import classNames from 'classnames';

import { useIonToast, useIonModal } from '@ionic/react';

import { ToastParams, ConfirmParams } from './useUtils.types';
import { ICON_MAPPING, COLOR_MAPPING } from './useUtils.const';
import { ConfirmModal, ConfirmModalParams } from './_partitions/ConfirmModal';
import { useConfirmVariables } from './_hooks/useConfirmVariables';

import styles from './useUtils.module.scss';

export const useUtils = () => {
  const [showToast] = useIonToast();
  const [confirmParams, setConfirmParams] = useState<ConfirmModalParams>();
  const { breakpoints, initialBreakpoint, className } = useConfirmVariables();

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
        breakpoints,
        cssClass: classNames(styles.confirm, className),
        initialBreakpoint,
        showBackdrop: true,
      });
    },
    [showConfirm, dismissConfirm, breakpoints, initialBreakpoint, className]
  );

  return { confirm, toast };
};
