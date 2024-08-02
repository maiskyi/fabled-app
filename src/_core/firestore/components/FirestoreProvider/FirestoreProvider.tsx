import { FC, Fragment, PropsWithChildren, useRef } from 'react';

import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getApp } from 'firebase/app';
import { useMount } from 'react-use';

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
    if (emulator) {
      const { host, port } = emulator;
      connectFirestoreEmulator(database, host, port);
    }
  });

  return <Fragment>{children}</Fragment>;
};
