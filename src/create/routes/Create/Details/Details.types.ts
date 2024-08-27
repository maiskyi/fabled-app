import { MessageProps } from '@core/uikit';
import { DTO } from '@bootstrap/dto';

interface ThreadMessageItem extends MessageProps {
  id: string;
  type: 'message';
  status: DTO.FableStatus;
}

interface ThreadActionsItem {
  id: string;
  type: 'actions';
}

export type ThreadItem = ThreadMessageItem | ThreadActionsItem;

export interface RouteParams {
  id: string;
}
