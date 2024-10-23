import { FC } from 'react';
import { useMount } from 'react-use';

import {
  ErrorBoundaryProvider,
  ErrorBoundaryProviderProps,
} from '@core/analytics';
import { useSplashScreen } from '@core/uikit';

import { ErrorBoundaryFallback } from './ErrorBoundaryFallback';

export type ErrorBoundaryProps = ErrorBoundaryProviderProps;

export const ErrorBoundary: FC<ErrorBoundaryProps> = (props) => {
  const [, { hide }] = useSplashScreen();

  useMount(hide);

  return (
    <ErrorBoundaryProvider
      {...props}
      fallback={<ErrorBoundaryFallback />}
    ></ErrorBoundaryProvider>
  );
};
