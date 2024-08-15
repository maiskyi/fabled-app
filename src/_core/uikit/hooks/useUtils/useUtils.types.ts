import { Color } from '@ionic/core';

import { ConfirmModalParams } from './_partitions/ConfirmModal';

export type ToastVariant = 'success' | 'error';

export type ConfirmVariant = Color;

export interface ToastParams {
  title?: string;
  message: string;
  variant: ToastVariant;
}

export type ConfirmParams = Omit<ConfirmModalParams, 'dismiss'>;
