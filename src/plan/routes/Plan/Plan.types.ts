import { PlanAction } from '@bootstrap/constants';

export enum PlanFromField {
  Product = 'product',
}

export interface PlanFrom {
  [PlanFromField.Product]: string;
}

export interface PlanRouteParams {
  action: PlanAction;
}
