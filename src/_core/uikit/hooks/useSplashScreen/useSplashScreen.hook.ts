import { useAsyncFn } from 'react-use';
import { useMemo } from 'react';

import { SplashScreen } from '@capacitor/splash-screen';

interface UseSplashScreenState {
  isLoading: boolean;
}

interface UseSplashScreenStateDispatch {
  show: () => Promise<void>;
  hide: () => Promise<void>;
}

type UseSplashScreenReturnType = [
  UseSplashScreenState,
  UseSplashScreenStateDispatch,
];

export const useSplashScreen = (): UseSplashScreenReturnType => {
  const [{ loading: isHiding }, hide] = useAsyncFn(async () => {
    await SplashScreen.hide();
  });

  const [{ loading: isShowing }, show] = useAsyncFn(async () => {
    await SplashScreen.show({
      autoHide: false,
    });
  });

  const isLoading = isHiding || isShowing;

  return useMemo(
    (): UseSplashScreenReturnType => [{ isLoading }, { hide, show }],
    [isLoading, show, hide]
  );
};
