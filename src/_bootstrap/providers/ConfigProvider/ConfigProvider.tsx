import { FC, Fragment, PropsWithChildren } from 'react';
import { useMount } from 'react-use';

import { useGetBootstrap } from '@network/api';
import { useDevice } from '@core/uikit';

import { ConfigContext } from './ConfigProvider.context';

export type ConfigProviderProps = PropsWithChildren<{
  version: string;
  Loader: FC;
}>;

export const ConfigProvider: FC<ConfigProviderProps> = ({
  children,
  version,
  Loader = Fragment,
}) => {
  const { width } = useDevice();

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
        privacyPolicyUrl: data?.config.privacyPolicyUrl,
        prompts: data.prompts,
        scenes: data.placeOfEvents,
        termsAndConditionsUrl: data?.config.termsAndConditionsUrl,
        themes: data.moralLessons,
        version,
      }}
    >
      {children}
    </ConfigContext.Provider>
  ) : (
    <Loader />
  );
};
