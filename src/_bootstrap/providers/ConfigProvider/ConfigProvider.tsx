import { FC, Fragment, PropsWithChildren } from 'react';
import { useMount } from 'react-use';

import { useGetBootstrap as useGet } from '@network/admin';
import { useDevice } from '@core/uikit';
import { useGetBootstrap } from '@network/api';

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

  const { data: bootstrap } = useGetBootstrap();

  console.log(bootstrap);

  const { isSuccess, data, refetch } = useGet(
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
        privacyPolicyUrl: bootstrap?.config.privacyPolicyUrl,
        prompts: bootstrap?.prompts,
        scenes: data.placeOfEvents,
        termsAndConditionsUrl: bootstrap?.config.termsAndConditionsUrl,
        themes: bootstrap?.moralLessons,
        version,
      }}
    >
      {children}
    </ConfigContext.Provider>
  ) : (
    <Loader />
  );
};
