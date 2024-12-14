import { ApiObject } from '@rudderstack/analytics-js/*';

export interface UseAnalyticsIdentifyParams {
  id: string;
  traits?: ApiObject;
  properties?: ApiObject;
}
