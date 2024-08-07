import { FC, PropsWithChildren, useRef } from 'react';

import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import { getApp } from 'firebase/app';
import { useMount } from 'react-use';

export type FunctionsProviderProps = PropsWithChildren<{
  emulator?: {
    host: string;
    port: number;
  };
}>;

export const FunctionsProvider: FC<FunctionsProviderProps> = ({
  children,
  emulator,
}) => {
  const { current: functions } = useRef(getFunctions(getApp()));

  useMount(() => {
    if (emulator) {
      const { host, port } = emulator;
      connectFunctionsEmulator(functions, host, port);
    }
  });

  return <>{children}</>;
};