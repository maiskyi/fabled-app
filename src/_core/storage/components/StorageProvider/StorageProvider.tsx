import { FC, PropsWithChildren, useRef } from 'react';

import { getStorage } from 'firebase/storage';
import { getApp } from 'firebase/app';

export type StorageProviderProps = PropsWithChildren<{}>;

export const StorageProvider: FC<StorageProviderProps> = ({ children }) => {
  useRef(getStorage(getApp()));

  return <>{children}</>;
};
