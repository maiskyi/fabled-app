import { ComponentType, FC } from 'react';
import { useMount } from 'react-use';
import { useContextSelector } from 'use-context-selector';

import { Analytics } from '../../services/Analytics';
import { AnalyticsContext } from '../../contexts/AnalyticsContext';

interface WithLoadParams {
  category: string;
  name?: string;
  properties?: Record<string, any>;
}

export const withLoad = ({
  category,
  name,
  properties = {},
}: WithLoadParams) => {
  return <P extends object>(Component: ComponentType<P>) => {
    const Wrapper: FC<P> = (props) => {
      const config = useContextSelector(AnalyticsContext, (config) => config);

      useMount(() => {
        Analytics.page(category, name, {
          ...config,
          ...properties,
        });
      });

      return <Component {...props} />;
    };

    return Wrapper;
  };
};
