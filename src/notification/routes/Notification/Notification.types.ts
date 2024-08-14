import { NotificationType } from '@bootstrap/constants';

export interface NotificationRouteSearch {
  back?: string;
}

export interface NotificationRouteParams {
  type: NotificationType;
}
