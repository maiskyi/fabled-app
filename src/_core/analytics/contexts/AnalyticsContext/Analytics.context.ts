import { createContext } from 'use-context-selector';

interface AnalyticsContextProps {}

export const AnalyticsContext = createContext<AnalyticsContextProps>({});
