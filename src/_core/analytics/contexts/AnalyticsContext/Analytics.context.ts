import { createContext } from 'use-context-selector';

interface AnalyticsContextProps {
  version: string;
  environment: string;
}

export const AnalyticsContext = createContext<AnalyticsContextProps>({
  environment: 'local',
  version: '1.0.0',
});
