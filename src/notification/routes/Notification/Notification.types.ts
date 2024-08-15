import { NotificationType } from '@bootstrap/constants';

export interface NotificationRouteSearch {
  code?: string;
}

export interface NotificationRouteParams {
  type: NotificationType;
}

export type NotificationByCodeMap = Partial<
  Record<NotificationType, Record<string, string>>
>;
