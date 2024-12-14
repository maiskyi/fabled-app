import { createContext } from 'use-context-selector';

interface AnalyticsContextProps {
  enabled: boolean;
  version: string;
  environment: string;
}

export const AnalyticsContext = createContext<AnalyticsContextProps>({
  enabled: false,
  environment: 'local',
  version: '1.0.0',
});
