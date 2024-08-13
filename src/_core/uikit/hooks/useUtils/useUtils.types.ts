export type ToastVariant = 'success' | 'error';

export type ConfirmVariant = 'success' | 'error';

export interface ToastParams {
  title?: string;
  message: string;
  variant: ToastVariant;
}

export interface ConfirmParams {
  title?: string;
  message: string;
  variant?: ToastVariant;
  confirmBtn?: string;
  cancelBtn?: string;
  onConfirm: () => Promise<unknown>;
}
