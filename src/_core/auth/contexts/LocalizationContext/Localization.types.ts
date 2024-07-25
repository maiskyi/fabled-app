import { AuthErrorCodes } from 'firebase/auth';
import { ValueOf } from 'type-fest';

export interface LocalizationContextProps {
  authError: Record<ValueOf<typeof AuthErrorCodes>, string>;
}
