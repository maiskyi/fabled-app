import { MessageProps } from '@core/uikit';
import { DTO } from '@bootstrap/dto';

interface ThreadMessageItem {
  id: string;
  type: 'message';
  status: DTO.FableStatus[];
  props: MessageProps;
}

interface ThreadActionsItem {
  id: string;
  type: 'actions';
  status: DTO.FableStatus[];
}

export type ThreadItem = ThreadMessageItem | ThreadActionsItem;

export interface RouteParams {
  id: string;
}
