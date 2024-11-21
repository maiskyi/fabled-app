import { ButtonProps, MessageProps } from '@core/uikit';

interface ThreadMessageItem {
  id: string;
  type: 'message';
  props: MessageProps;
}

interface ThreadActionsItem {
  id: string;
  type: 'actions';
  props: ButtonProps[];
}

export interface TypistState {
  inProgress: boolean;
  messages: {
    contentMessage: boolean;
    imageMessage: boolean;
    successMessage: boolean;
    errorMessage: boolean;
  };
}

export type ThreadItem = ThreadMessageItem | ThreadActionsItem;

export interface RouteParams {
  id: string;
}
