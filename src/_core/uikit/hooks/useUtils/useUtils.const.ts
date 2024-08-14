import { checkmarkCircleOutline, alertCircleOutline } from 'ionicons/icons';
import { Color } from '@ionic/core';

import { ToastVariant } from './useUtils.types';

export const ICON_MAPPING: Record<ToastVariant, string> = {
  error: alertCircleOutline,
  success: checkmarkCircleOutline,
};

export const COLOR_MAPPING: Record<ToastVariant, Color> = {
  error: 'danger',
  success: 'success',
};
