import { PurchasesStoreProduct } from '@revenuecat/purchases-capacitor';

export interface UsePurchaseStoreProductResponse {
  activeSubscriptions: PurchasesStoreProduct[];
}

export interface UsePurchaseStoreProductRequest {
  product: PurchasesStoreProduct;
}
