import { FC, PropsWithChildren, ReactNode } from 'react';
import { useMount } from 'react-use';

import { useGetBootstrapQuery } from '@network/contentful';

import { ConfigContext } from './ConfigProvider.context';

export type ConfigProviderProps = PropsWithChildren<{
  fallback: ReactNode;
  version: string;
}>;

export const ConfigProvider: FC<ConfigProviderProps> = ({
  children,
  version,
  fallback = null,
}) => {
  const { data, isSuccess, refetch } = useGetBootstrapQuery(
    { version },
    {
      enabled: false,
    }
  );

  useMount(async () => {
    (await refetch()).data.characterCollection.items.forEach(
      ({ illustration: { url } }) => {
        new Image().src = url;
      }
    );
  });

  return isSuccess ? (
    <ConfigContext.Provider
      value={{
        characters: data.characterCollection.items,
        privacyPolicyUrl: data.configCollection.items[0]?.privacyPolicyUrl,
        prompts: data.promptCollection.items,
        termsAndConditionsUrl:
          data.configCollection.items[0]?.termsAndConditionsUrl,
        version,
      }}
    >
      {children}
    </ConfigContext.Provider>
  ) : (
    <>{fallback}</>
  );
};
