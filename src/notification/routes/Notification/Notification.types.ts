import { NotificationType, RoutePath } from '@bootstrap/constants';

export interface NotificationRouteSearch {
  back: string;
  next: RoutePath;
  code?: string;
}

export interface NotificationRouteParams {
  type: NotificationType;
}

export type NotificationByCodeMap = Partial<
  Record<NotificationType, Record<string, string>>
>;
