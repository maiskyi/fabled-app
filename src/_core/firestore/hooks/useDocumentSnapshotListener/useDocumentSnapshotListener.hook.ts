import { useRef, useState } from 'react';
import { useMount, useUnmount } from 'react-use';

import { FirebaseFirestore } from '@capacitor-firebase/firestore';

import { UseDocumentSnapshotListenerState } from './useDocumentSnapshotListener.types';

interface UseAddDocumentSnapshotListenerParams {
  doc: string;
  id: string;
}

export const useDocumentSnapshotListener = <T extends object>({
  id,
  doc,
}: UseAddDocumentSnapshotListenerParams) => {
  const ref = useRef<string>();

  const [state, setState] = useState<UseDocumentSnapshotListenerState<T>>({});

  useMount(async () => {
    ref.current = await FirebaseFirestore.addDocumentSnapshotListener<T>(
      {
        reference: `${doc}/${id}`,
      },
      (event, error) => {
        if (error) return setState(() => ({ error }));
        const {
          snapshot: { data },
        } = event;
        setState(() => ({ data }));
      }
    );
  });

  useUnmount(() => {
    FirebaseFirestore.removeSnapshotListener({ callbackId: ref.current });
  });

  return state;
};
