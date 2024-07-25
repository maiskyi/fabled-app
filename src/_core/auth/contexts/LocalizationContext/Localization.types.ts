import { AuthErrorCode } from '../../constants/authErrorCode.const';

export interface LocalizationContextProps {
  authError: Record<AuthErrorCode, string>;
}
