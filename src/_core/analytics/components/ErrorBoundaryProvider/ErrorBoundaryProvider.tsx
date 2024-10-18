import { FC, PropsWithChildren, ReactNode } from 'react';
import { useMount } from 'react-use';

import * as Sentry from '@sentry/react';

export type ErrorBoundaryProviderProps = PropsWithChildren<{
  fallback?: ReactNode;
  dsn: string;
  release: string;
  environment: string;
  enabled?: boolean;
}>;

let instance: ReturnType<typeof Sentry.init>;

export const ErrorBoundaryProvider: FC<ErrorBoundaryProviderProps> = ({
  children,
  dsn,
  environment,
  release,
  fallback = null,
  enabled = true,
}) => {
  useMount(() => {
    if (!instance) {
      instance = Sentry.init({
        dsn,
        enabled,
        environment,
        integrations: [
          Sentry.browserTracingIntegration(),
          Sentry.replayIntegration(),
        ],
        release,
        replaysOnErrorSampleRate: 1.0,
        replaysSessionSampleRate: 0.1,
        tracesSampleRate: 1.0,
      });
    }
  });

  return <>{children}</>;
};
