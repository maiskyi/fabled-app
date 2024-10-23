import { FC } from 'react';

import { OpenAppStoreOptions } from '@capawesome/capacitor-app-update';

export interface AppUpdateProviderFallbackComponentProps {
  openAppStore(options?: OpenAppStoreOptions): Promise<void>;
}

export type AppUpdateProviderFallbackComponent =
  FC<AppUpdateProviderFallbackComponentProps>;

export type AppUpdateProviderLoaderComponent = FC;
