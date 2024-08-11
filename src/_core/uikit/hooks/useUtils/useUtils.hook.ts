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
        message,
        header: title,
        position: 'top',
        color: COLOR_MAPPING[variant],
        icon: ICON_MAPPING[variant],
        buttons: [
          {
            text: 'Ok',
          },
        ],
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
        message,
        header: title,
        buttons: [
          {
            text: cancelBtn,
            role: 'cancel',
          },
          {
            handler: async () => {
              await onConfirm();
            },
            text: confirmBtn,
            role: variant === 'error' ? 'destructive' : 'cancel',
          },
        ],
      });
    },
    [showAlert]
  );

  return { toast, confirm };
};
