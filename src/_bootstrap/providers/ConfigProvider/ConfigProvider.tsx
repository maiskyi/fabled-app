import { FC, PropsWithChildren, ReactNode } from 'react';

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
  const { data, isSuccess } = useGetBootstrapQuery(
    { version },
    {
      initialData: {
        characterCollection: {
          items: [],
        },
        configCollection: {
          items: [],
        },
      },
    }
  );

  return (
    <ConfigContext.Provider
      value={{
        characters: data.characterCollection.items,
        privacyPolicyUrl: data.configCollection.items[0]?.privacyPolicyUrl,
        termsAndConditionsUrl:
          data.configCollection.items[0]?.termsAndConditionsUrl,
        version,
      }}
    >
      {isSuccess ? children : fallback}
    </ConfigContext.Provider>
  );
};
