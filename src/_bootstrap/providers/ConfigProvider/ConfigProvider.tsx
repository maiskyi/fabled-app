import { FC, Fragment, PropsWithChildren } from 'react';

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

  const { isSuccess, data: bootstrap } = useGetBootstrap({
    image: {
      crop: 'thumb',
      height: width,
      width: width,
    },
  });

  bootstrap?.characters.forEach(({ image }) => {
    new Image().src = image;
  });

  bootstrap?.placeOfEvents.forEach(({ image }) => {
    new Image().src = image;
  });

  return isSuccess ? (
    <ConfigContext.Provider
      value={{
        characters: bootstrap?.characters,
        privacyPolicyUrl: bootstrap?.config.privacyPolicyUrl,
        prompts: bootstrap?.prompts,
        scenes: bootstrap?.placeOfEvents,
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
