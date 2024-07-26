import { FC, Fragment, PropsWithChildren } from 'react';

import { getFirestore } from 'firebase/firestore';
import { getApp } from 'firebase/app';
import { useMount } from 'react-use';

export type FirestoreProviderProps = PropsWithChildren<{}>;

export const FirestoreProvider: FC<FirestoreProviderProps> = ({ children }) => {
  useMount(() => getFirestore(getApp()));

  return <Fragment>{children}</Fragment>;
};
