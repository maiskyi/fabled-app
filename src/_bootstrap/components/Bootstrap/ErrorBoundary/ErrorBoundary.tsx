import { FC } from 'react';

import {
  ErrorBoundaryProvider,
  ErrorBoundaryProviderProps,
} from '@core/analytics';

import { ErrorBoundaryFallback } from './ErrorBoundaryFallback';

export type ErrorBoundaryProps = ErrorBoundaryProviderProps;

export const ErrorBoundary: FC<ErrorBoundaryProps> = (props) => {
  return (
    <ErrorBoundaryProvider
      {...props}
      fallback={<ErrorBoundaryFallback />}
    ></ErrorBoundaryProvider>
  );
};
