import { PlanAction } from '@bootstrap/constants';

export const PLAN_ACTION_MAPPING: Record<PlanAction, string> = {
  [PlanAction.Manage]: 'actions.changePlan',
  [PlanAction.Subscribe]: 'actions.subscribe',
};

export const PLAN_HEADER_MAPPING: Record<PlanAction, string> = {
  [PlanAction.Manage]: 'pages.manageYourPlan',
  [PlanAction.Subscribe]: 'pages.subscribe',
};

export const PLAN_INTRO_MAPPING: Record<PlanAction, string> = {
  [PlanAction.Manage]: 'intro.manageYourPlan',
  [PlanAction.Subscribe]: 'intro.subscribe',
};
