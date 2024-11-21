import { FC, PropsWithChildren } from 'react';
import { useMount } from 'react-use';

import { Analytics } from '../../services/Analytics';
import { AnalyticsContext } from '../../contexts/AnalyticsContext';

export type AnalyticsProviderProps = PropsWithChildren<{
  writeKey: string;
  dataUrl: string;
  version: string;
  environment: 'local' | 'development' | 'production';
}>;

export const AnalyticsProvider: FC<AnalyticsProviderProps> = ({
  children,
  writeKey,
  dataUrl,
  environment,
  version,
}) => {
  useMount(() => {
    Analytics.load(writeKey, dataUrl, {
      integrations: {
        All: environment === 'production',
      },
      onLoaded: () => {
        // eslint-disable-next-line no-console
        console.log('RudderStack JavaScript SDK loaded successfully');
      },
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
    <AnalyticsContext.Provider value={{ environment, version }}>
      {children}
    </AnalyticsContext.Provider>
  );
};
