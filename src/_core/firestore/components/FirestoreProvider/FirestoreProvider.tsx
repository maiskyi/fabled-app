import { FC, Fragment, PropsWithChildren, useRef } from 'react';
import { useMount } from 'react-use';

import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getApp } from 'firebase/app';

export type FirestoreProviderProps = PropsWithChildren<{
  emulator?: {
    host: string;
    port: number;
  };
}>;

export const FirestoreProvider: FC<FirestoreProviderProps> = ({
  children,
  emulator,
}) => {
  const { current: database } = useRef(getFirestore(getApp()));

  useMount(() => {
    const host = emulator?.host;
    const port = emulator?.port;
    if (host && port) {
      connectFirestoreEmulator(database, host, port);
    }
  });

  return <Fragment>{children}</Fragment>;
};
