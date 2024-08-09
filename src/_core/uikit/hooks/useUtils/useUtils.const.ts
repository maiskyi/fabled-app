import { checkmarkCircleOutline, alertCircleOutline } from 'ionicons/icons';
import { Color } from '@ionic/core';

import { ToastVariant } from './useUtils.types';

export const ICON_MAPPING: Record<ToastVariant, string> = {
  success: checkmarkCircleOutline,
  error: alertCircleOutline,
};

export const COLOR_MAPPING: Record<ToastVariant, Color> = {
  success: 'success',
  error: 'danger',
};
