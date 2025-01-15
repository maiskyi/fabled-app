import { FC } from 'react';

import { PurchasesOfferings } from '@revenuecat/purchases-capacitor';

export interface PromptToSubscribeComponentProps {
  dismiss: () => void;
  dissmissTimeout: number;
  offerings: PurchasesOfferings;
}

export type PromptToSubscribeComponent = FC<PromptToSubscribeComponentProps>;
