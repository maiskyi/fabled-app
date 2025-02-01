import { FC, PropsWithChildren } from 'react';

import { useGetBootstrap } from '@network/api';

import { ConfigContext } from './ConfigProvider.context';

export type ConfigProviderProps = PropsWithChildren<{
  version: string;
}>;

export const ConfigProvider: FC<ConfigProviderProps> = ({
  children,
  version,
}) => {
  const { isSuccess: isReady, data: bootstrap } = useGetBootstrap({
    image: {
      crop: 'thumb',
      height: 170 * window.devicePixelRatio,
      width: 170 * window.devicePixelRatio,
    },
  });

  bootstrap?.characters.forEach(({ image }) => {
    new Image().src = image;
  });

  bootstrap?.placeOfEvents.forEach(({ image }) => {
    new Image().src = image;
  });

  return (
    <ConfigContext.Provider
      value={{
        characters: bootstrap?.characters,
        isReady,
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
  );
};
