import { FC, PropsWithChildren, useEffect } from 'react';

import { Loading, useDevice, useSplashScreen } from '@core/uikit';
import { useAuth } from '@core/auth';
import { useLocale } from '@core/localization';
import { usePurchases } from '@core/purchases';

type InitProps = PropsWithChildren<{}>;

export const Init: FC<InitProps> = ({ children }) => {
  const { isReady: isDeviceReady } = useDevice();
  const { isReady: isAuthReady } = useAuth();
  const [{ isReady: isLocaleReady }] = useLocale();
  const { isReady: isPurchasesReady } = usePurchases();

  const [, { hide }] = useSplashScreen();

  const isReady = [
    isDeviceReady,
    isAuthReady,
    isLocaleReady,
    isPurchasesReady,
  ].every((v) => v);

  useEffect(() => {
    if (isReady) hide();
  }, [isReady, hide]);

  return <>{isReady ? children : <Loading isOpen />}</>;
};
