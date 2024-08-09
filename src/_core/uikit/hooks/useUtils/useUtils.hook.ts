import { useCallback } from 'react';

import { useIonToast } from '@ionic/react';

import { Selector } from '../../constants/selector.const';

import { ToastParams } from './useUtils.types';
import { ICON_MAPPING, COLOR_MAPPING } from './useUtils.const';

export const useUtils = () => {
  const [showToast] = useIonToast();

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

  return { toast };
};
