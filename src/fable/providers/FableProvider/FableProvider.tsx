import { FC, ReactElement } from 'react';
import { useAsyncFn } from 'react-use';

import { useDevice, useViewDidEnter } from '@core/uikit';
import { useGetStory } from '@network/api';

import { FableContext, FableContextProps } from './FableProvider.context';

interface FableProviderProps {
  id: string;
  children: (props: FableContextProps) => ReactElement;
}

export const FableProvider: FC<FableProviderProps> = ({ id, children }) => {
  const { width, height } = useDevice();

  const [{ value: isImageSuccess }, load] = useAsyncFn(
    async (src: string): Promise<boolean> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.addEventListener('load', () => {
          resolve(true);
        });
      });
    }
  );

  const {
    isSuccess: isStorySuccess,
    data: story,
    refetch,
  } = useGetStory(
    id,
    {
      image: {
        crop: 'thumb',
        height,
        width,
      },
    },
    {
      query: {
        enabled: false,
      },
    }
  );

  const isReady = isStorySuccess && isImageSuccess;

  useViewDidEnter(() => {
    refetch().then(({ data }) => {
      load(data?.image);
    });
  });

  return (
    <FableContext.Provider value={{ isReady, story }}>
      {children({ isReady, story })}
    </FableContext.Provider>
  );
};
