import { useCallback } from 'react';

import { useIonToast, useIonAlert } from '@ionic/react';

import { Selector } from '../../constants/selector.const';

import { ToastParams, ConfirmParams } from './useUtils.types';
import { ICON_MAPPING, COLOR_MAPPING } from './useUtils.const';

export const useUtils = () => {
  const [showToast] = useIonToast();
  const [showAlert] = useIonAlert();

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
    ({
      title,
      message,
      variant,
      onConfirm,
      confirmBtn = 'Ok',
      cancelBtn = 'Cancel',
    }: ConfirmParams) => {
      showAlert({
        buttons: [
          {
            role: 'cancel',
            text: cancelBtn,
          },
          {
            handler: async () => {
              await onConfirm();
            },
            role: variant === 'error' ? 'destructive' : 'cancel',
            text: confirmBtn,
          },
        ],
        header: title,
        message,
      });
    },
    [showAlert]
  );

  return { confirm, toast };
};
