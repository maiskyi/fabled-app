export enum SubscribeFromField {
  Product = 'product',
}

export interface SubscribeFrom {
  [SubscribeFromField.Product]: string;
}
