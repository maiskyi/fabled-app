import { FC } from 'react';

export interface PromptToSubscribeComponentProps {
  dismiss: () => void;
  dissmissTimeout: number;
}

export type PromptToSubscribeComponent = FC<PromptToSubscribeComponentProps>;
