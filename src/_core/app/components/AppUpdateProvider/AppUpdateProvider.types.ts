import { FC } from 'react';

import { OpenAppStoreOptions } from '@capawesome/capacitor-app-update';

export interface AppUpdateProviderFallbackProps {
  openAppStore(options?: OpenAppStoreOptions): Promise<void>;
}

export type AppUpdateProviderFallbackComponent =
  FC<AppUpdateProviderFallbackProps>;

export type AppUpdateProviderLoaderComponent = FC;
