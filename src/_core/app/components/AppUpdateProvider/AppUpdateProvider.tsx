import { FC, PropsWithChildren } from 'react';
import { useAsync } from 'react-use';

import { Capacitor } from '@capacitor/core';
import {
  AppUpdate,
  AppUpdateAvailability,
} from '@capawesome/capacitor-app-update';

import {
  AppUpdateProviderFallbackComponent,
  AppUpdateProviderLoaderComponent,
} from './AppUpdateProvider.types';

export type AppUpdateProviderProps = PropsWithChildren<{
  Fallback: AppUpdateProviderFallbackComponent;
  Loader: AppUpdateProviderLoaderComponent;
}>;

export const AppUpdateProvider: FC<AppUpdateProviderProps> = ({
  children,
  Fallback,
}) => {
  const { value } = useAsync(async () => {
    if (Capacitor.isNativePlatform()) {
      const { updateAvailability } = await AppUpdate.getAppUpdateInfo();

      return updateAvailability === AppUpdateAvailability.UPDATE_AVAILABLE;
    }
    return false;
  });

  if (value) return <Fallback openAppStore={AppUpdate.openAppStore} />;

  return <>{children}</>;
};
