import { useAsyncFn } from 'react-use';

import {
  Box,
  Content,
  Cover,
  Header,
  Loading,
  Page,
  SafeArea,
  useDevice,
  useViewDidEnter,
} from '@core/uikit';
import { Route, useRoute } from '@core/navigation';
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
    <Cover src={isReady ? story.image : undefined}>
      <Page>
        <Header collapse="condense">
          <Header.Back color="dark" pathname={RoutePath.Index} />
        </Header>
        <Content scrollY={false}>
          <Loading isOpen={!isReady} />
          {isReady && (
            <Box
              display="flex"
              flex="1 1 auto"
              flexDirection="column"
              height="100%"
              justifyContent="flex-end"
            >
              <SafeArea
                background="linear-gradient(to top, rgba(0, 0, 0, 1), transparent)"
                display="flex"
                flex="0 0 70%"
                flexDirection="column"
                justifyContent="flex-end"
                safe={['bottom']}
              >
                <FableContext.Provider value={{ isReady, story }}>
                  <Route exact path={RoutePath.Fable}>
                    <Index />
                  </Route>
                  <Route path={RoutePath.FableRead}>
                    <Read />
                  </Route>
                </FableContext.Provider>
              </SafeArea>
            </Box>
          )}
        </Content>
      </Page>
    </Cover>
  );
});

// export const Fable = withLoad({
//   category: 'Fable',
//   name: 'Fable Details',
// })(() => {

//   return (
//     <Page>
//       <FableContext.Provider value={{ isReady, story }}>
//         <RouterOutlet>
//           <Route exact path={RoutePath.Fable}>
//             <Index />
//           </Route>
//           <Route path={RoutePath.FableRead}>
//             <Read />
//           </Route>
//         </RouterOutlet>
//       </FableContext.Provider>
//     </Page>
//   );
// });
