import { FC, PropsWithChildren } from 'react';

import { getFunctions } from 'firebase/functions';
import { getApp } from 'firebase/app';
import { useMount } from 'react-use';

export type FunctionsProviderProps = PropsWithChildren<{}>;

export const FunctionsProvider: FC<FunctionsProviderProps> = ({ children }) => {
  useMount(() => {
    getFunctions(getApp());
  });

  return <>{children}</>;
};
