import { FC } from 'react';

import { PurchasesProvider, PurchasesProviderProps } from '@core/purchases';
import { useDevice } from '@core/uikit';

export type PurchasesProps = PurchasesProviderProps;

export const Purchases: FC<PurchasesProps> = ({ children, ...props }) => {
  const { isNativePlatform } = useDevice();

  return (
    <PurchasesProvider {...props} shouldPromptedToSubscribe={isNativePlatform}>
      {children}
    </PurchasesProvider>
  );
};
