export enum PlanFromField {
  Product = 'product',
}

export interface PlanFrom {
  [PlanFromField.Product]: string;
}
