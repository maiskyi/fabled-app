import { FunctionsErrorCodeCore } from 'firebase/functions';

export interface LocalizationContextProps {
  authError: Record<FunctionsErrorCodeCore | 'default', string>;
}
