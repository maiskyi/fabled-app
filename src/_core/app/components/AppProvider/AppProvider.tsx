import { FC, PropsWithChildren, useRef } from 'react';

import { initializeApp, FirebaseOptions } from 'firebase/app';

export type AppProviderProps = PropsWithChildren<FirebaseOptions>;

export const AppProvider: FC<AppProviderProps> = ({ children, ...options }) => {
  useRef(initializeApp(options));

  return <>{children}</>;
};
