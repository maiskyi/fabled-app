import { Path } from 'react-hook-form';

import {
  OrderByDirection,
  QueryFieldFilterConstraint,
} from '@capacitor-firebase/firestore';

interface UseCollectionSnapshotListenerCallbackParams<T extends object> {
  data: T[];
}

export interface UseCollectionSnapshotListenerState<T extends object> {
  data?: T[];
  error?: Error;
}

export type UseCollectionSnapshotListenerCallback<T extends object> = (
  params: UseCollectionSnapshotListenerCallbackParams<T>
) => void;

export interface UseCollectionSnapshotListenerOrderParams<T extends object> {
  field: Path<T>;
  direction?: OrderByDirection;
}

export interface UseCollectionSnapshotListenerEveryParams<T extends object>
  extends Omit<QueryFieldFilterConstraint, 'fieldPath'> {
  fieldPath: Path<T>;
}

export interface UseCollectionSnapshotListenerParams<T extends object> {
  doc: string;
  order?: UseCollectionSnapshotListenerOrderParams<T>;
  every?: UseCollectionSnapshotListenerEveryParams<T>[];
}
