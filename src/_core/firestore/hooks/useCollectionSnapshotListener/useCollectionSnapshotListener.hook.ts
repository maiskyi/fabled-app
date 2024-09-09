import { useEffect, useRef, useState } from 'react';
import { noop } from 'lodash';

import {
  FirebaseFirestore,
  DocumentSnapshot,
  QueryNonFilterConstraint,
  QueryCompositeFilterConstraint,
} from '@capacitor-firebase/firestore';

import {
  UseCollectionSnapshotListenerState,
  UseCollectionSnapshotListenerCallback,
  UseCollectionSnapshotListenerParams,
} from './useCollectionSnapshotListener.types';

export const useCollectionSnapshotListener = <T extends object>(
  { doc, order, every }: UseCollectionSnapshotListenerParams<T>,
  callback: UseCollectionSnapshotListenerCallback<DocumentSnapshot<T>> = noop
) => {
  const ref = useRef<string>();

  const [state, setState] = useState<
    UseCollectionSnapshotListenerState<DocumentSnapshot<T>>
  >({});

  useEffect(() => {
    const queryOrderBy: QueryNonFilterConstraint[] = order
      ? [
          {
            directionStr: order.direction,
            fieldPath: order.field,
            type: 'orderBy',
          },
        ]
      : [];

    const compositeFilter: QueryCompositeFilterConstraint = every
      ? {
          queryConstraints: every,
          type: 'and',
        }
      : undefined;

    FirebaseFirestore.addCollectionSnapshotListener<T>(
      {
        compositeFilter,
        queryConstraints: [...queryOrderBy],
        reference: doc,
      },
      (event, error) => {
        if (error) return setState(() => ({ error }));
        const { snapshots } = event;
        setState(() => ({ data: snapshots }));
        callback({ data: snapshots });
      }
    ).then((id) => {
      ref.current = id;
    });
    return () => {
      if (ref.current)
        FirebaseFirestore.removeSnapshotListener({ callbackId: ref.current });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doc, order, every]);

  return state;
};
