import { FirestoreErrorCode } from 'firebase/firestore';

export interface LocalizationContextProps {
  authError: Record<FirestoreErrorCode, string>;
}
