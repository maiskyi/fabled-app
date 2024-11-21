import { FC, PropsWithChildren } from 'react';
import { useMount } from 'react-use';

import { Analytics } from '../../services/Analytics';
import { AnalyticsContext } from '../../contexts/AnalyticsContext';

export type AnalyticsProviderProps = PropsWithChildren<{
  writeKey: string;
  dataUrl: string;
  version: string;
  enabled: boolean;
  environment: 'local' | 'development' | 'production';
}>;

export const AnalyticsProvider: FC<AnalyticsProviderProps> = ({
  children,
  writeKey,
  dataUrl,
  enabled,
  ...config
}) => {
  useMount(() => {
    Analytics.load(writeKey, dataUrl, {
      integrations: {
        All: enabled,
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
    <AnalyticsContext.Provider value={config}>
      {children}
    </AnalyticsContext.Provider>
  );
};
