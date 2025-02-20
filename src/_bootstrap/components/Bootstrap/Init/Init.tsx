import { FC, Fragment, PropsWithChildren, useEffect } from 'react';

import { useDevice, useSplashScreen } from '@core/uikit';
import { useAuth } from '@core/auth';
import { useLocale } from '@core/localization';
import { usePurchases } from '@core/purchases';

import { useConfig } from '../../../providers';

import { Splash } from './Splash';

type InitProps = PropsWithChildren<{}>;

export const Init: FC<InitProps> = ({ children }) => {
  const { isReady: isDeviceReady } = useDevice();
  const { isReady: isAuthReady } = useAuth();
  const [{ isReady: isLocaleReady }] = useLocale();
  const { isReady: isPurchasesReady } = usePurchases();
  const { isReady: isConfigReady } = useConfig();

  const [, { hide }] = useSplashScreen();

  const isReady = [
    isDeviceReady,
    isAuthReady,
    isLocaleReady,
    isPurchasesReady,
    isConfigReady,
  ].every((v) => v);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isReady) hide();
    }, 300);
    return () => clearTimeout(timeout);
  }, [isReady, hide]);

  return <Fragment>{isReady ? children : <Splash />}</Fragment>;
};
