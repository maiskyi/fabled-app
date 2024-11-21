import { FC, PropsWithChildren } from 'react';
import { useMount } from 'react-use';

import { Analytics } from '../../services/Analytics';
import { AnalyticsContext } from '../../contexts/AnalyticsContext';

export type AnalyticsProviderProps = PropsWithChildren<{
  writeKey: string;
  dataUrl: string;
  version: string;
  environment: string;
}>;

export const AnalyticsProvider: FC<AnalyticsProviderProps> = ({
  children,
  writeKey,
  dataUrl,
}) => {
  useMount(() => {
    Analytics.load(writeKey, dataUrl, {
      integrations: { All: true },
      plugins: [
        'BeaconQueue',
        'CustomConsentManager',
        'DeviceModeDestinations',
        'DeviceModeTransformation',
        'ErrorReporting',
        'ExternalAnonymousId',
        'GoogleLinker',
        'KetchConsentManager',
        'NativeDestinationQueue',
        'OneTrustConsentManager',
        'StorageEncryption',
        'StorageEncryptionLegacy',
        'StorageMigrator',
        'XhrQueue',
      ],
    });
    window.rudderanalytics = Analytics;
  });

  return (
    <AnalyticsContext.Provider value={{}}>{children}</AnalyticsContext.Provider>
  );
};
