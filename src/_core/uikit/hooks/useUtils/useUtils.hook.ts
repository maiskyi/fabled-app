import { useCallback, useState } from 'react';
import classNames from 'classnames';

import { useIonToast, useIonModal } from '@ionic/react';

import { Selector } from '../../constants/selector.const';
import { useMediaSwitch } from '../useMediaSwitch';

import {
  ToastParams,
  ConfirmParams,
  ConfirmBreakpoints,
  ConfirmInitialBreakpoint,
} from './useUtils.types';
import { ICON_MAPPING, COLOR_MAPPING } from './useUtils.const';
import { ConfirmModal, ConfirmModalParams } from './_partitions/ConfirmModal';

import styles from './useUtils.module.scss';

const useConfirmVariables = () => {
  const { value: breakpoints } = useMediaSwitch<ConfirmBreakpoints>({
    lg: undefined,
    md: undefined,
    sm: undefined,
    xl: undefined,
    xs: [0, 1],
  });

  const { value: initialBreakpoint } = useMediaSwitch<ConfirmInitialBreakpoint>(
    {
      lg: undefined,
      md: undefined,
      sm: undefined,
      xl: undefined,
      xs: 1,
    }
  );

  const { value: className } = useMediaSwitch<string | undefined>({
    lg: styles.fixed,
    md: styles.fixed,
    sm: styles.fixed,
    xl: styles.fixed,
    xs: undefined,
  });

  return { breakpoints, className, initialBreakpoint };
};

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
        cssClass: styles.toast,
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
