import { FC } from 'react';

import {
  PurchasesOfferings,
  IntroEligibility,
} from '@revenuecat/purchases-capacitor';

export interface PromptToSubscribeComponentProps {
  dismiss: () => void;
  dissmissTimeout: number;
  offerings: PurchasesOfferings;
  introEligibility: Record<string, IntroEligibility>;
}

export type PromptToSubscribeComponent = FC<PromptToSubscribeComponentProps>;
