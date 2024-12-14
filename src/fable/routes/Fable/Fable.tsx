import { useAsyncFn } from 'react-use';

import { Page, useDevice, useViewDidEnter } from '@core/uikit';
import { Route, RouterOutlet, useRoute } from '@core/navigation';
import { RoutePath } from '@bootstrap/constants';
import { useGetStory } from '@network/api';
import { withLoad } from '@core/analytics';

import { Index } from './Index/Index';
import { Read } from './Read/Read';
import { FableContext } from './Fable.context';

export const Fable = withLoad({
  category: 'Fable',
  name: 'Fable Details',
})(() => {
  const [
    {
      params: { id },
    },
  ] = useRoute<{ id: string }>();

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
    <Page>
      <FableContext.Provider value={{ isReady, story }}>
        <RouterOutlet>
          <Route exact path={RoutePath.Fable}>
            <Index />
          </Route>
          <Route path={RoutePath.FableRead}>
            <Read />
          </Route>
        </RouterOutlet>
      </FableContext.Provider>
    </Page>
  );
});
