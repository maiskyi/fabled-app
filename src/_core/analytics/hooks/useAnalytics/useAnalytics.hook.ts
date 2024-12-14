import { useCallback } from 'react';
import { useContext } from 'use-context-selector';

import { Analytics } from '../../services/Analytics';
import { AnalyticsContext } from '../../contexts/AnalyticsContext';

import { UseAnalyticsIdentifyParams } from './useAnalytics.types';

export const useAnalytics = () => {
  const { version, environment, enabled } = useContext(AnalyticsContext);

  const identify = useCallback(
    async ({
      id,
      traits,
      properties = {},
    }: UseAnalyticsIdentifyParams): Promise<void> => {
      if (enabled) {
        return new Promise((resolve) => {
          Analytics.identify(
            id,
            traits,
            {
              environment,
              version,
              ...properties,
            },
            () => {
              resolve();
            }
          );
        });
      }
      return Promise.resolve();
    },
    [environment, version, enabled]
  );

  return { identify };
};
