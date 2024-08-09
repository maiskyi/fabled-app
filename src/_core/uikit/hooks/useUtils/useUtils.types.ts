export type ToastVariant = 'success' | 'error';

export interface ToastParams {
  title?: string;
  message: string;
  variant: ToastVariant;
}
