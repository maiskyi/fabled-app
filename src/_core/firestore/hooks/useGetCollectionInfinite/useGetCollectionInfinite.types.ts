import { Path } from 'react-hook-form';

import {
  DocumentSnapshot,
  QueryFieldFilterConstraint,
  OrderByDirection,
} from '@capacitor-firebase/firestore';
import { InfiniteData } from '@tanstack/react-query';

export interface UseGetCollectionInfiniteOrderParams<T extends object> {
  field: Path<T>;
  direction?: OrderByDirection;
}

export interface UseGetCollectionInfiniteEveryParams<T extends object>
  extends Omit<QueryFieldFilterConstraint, 'fieldPath'> {
  fieldPath: Path<T>;
}

export interface UseGetCollectionInfiniteParams<T extends object> {
  doc: string;
  limit?: number;
  startAfter?: string;
  order?: UseGetCollectionInfiniteOrderParams<T>;
  every?: UseGetCollectionInfiniteEveryParams<T>[];
}

export interface UseGetCollectionInfiniteQueryParams<T extends object> {
  initialData?: InfiniteData<DocumentSnapshot<T>[], string>;
}
