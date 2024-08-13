import { AuthErrorCode } from '../../types';

export interface LocalizationContextProps {
  authErrorTitle: string;
  authErrorMessage: Record<AuthErrorCode, string>;
}
