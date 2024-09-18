import { FC, PropsWithChildren, ReactNode } from 'react';
import { useMount } from 'react-use';

import { useGetBootstrapQuery } from '@network/contentful';
import { useGetBootstrap } from '@network/api';
import { useDevice } from '@core/uikit';

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
  const { width } = useDevice();
  const config = useGetBootstrapQuery({ version });

  const { isSuccess, data, refetch } = useGetBootstrap(
    {
      image: {
        crop: 'thumb',
        height: `${width}`,
        width: `${width}`,
      },
    },
    {
      enabled: false,
    }
  );

  useMount(async () => {
    const {
      data: { characters, placeOfEvents },
    } = await refetch();

    characters.forEach(({ image: { publicUrlTransformed } }) => {
      new Image().src = publicUrlTransformed;
    });

    placeOfEvents.forEach(({ image: { publicUrlTransformed } }) => {
      new Image().src = publicUrlTransformed;
    });
  });

  return isSuccess ? (
    <ConfigContext.Provider
      value={{
        characters: data.characters,
        privacyPolicyUrl:
          config.data?.configCollection.items[0]?.privacyPolicyUrl,
        prompts: data.prompts,
        scenes: data.placeOfEvents,
        termsAndConditionsUrl:
          config.data?.configCollection.items[0]?.termsAndConditionsUrl,
        themes: data.moralLessons,
        version,
      }}
    >
      {children}
    </ConfigContext.Provider>
  ) : (
    <>{fallback}</>
  );
};
