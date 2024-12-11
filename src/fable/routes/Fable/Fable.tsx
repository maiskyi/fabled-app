import { useAsyncFn, useMount } from 'react-use';

import { useDevice } from '@core/uikit';
import { Route, useRoute } from '@core/navigation';
import { RoutePath } from '@bootstrap/constants';
import { useGetStory } from '@network/api';
import { withLoad } from '@core/analytics';

import { Index } from './Index/Index';
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

  const [{ value: isReady }, load] = useAsyncFn(
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
    isLoading,
    data: story,
    refetch,
  } = useGetStory(
    id,
    {
      image: {
        aspectRatio: '1:1',
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

  useMount(() => {
    refetch().then(({ data }) => {
      load(data?.image);
    });
  });

  return (
    // <Page>
    <FableContext.Provider value={{ isLoading, isReady, story }}>
      <Route exact path={RoutePath.Fable}>
        <Index />
      </Route>
    </FableContext.Provider>
    // </Page>
  );

  // return (
  //   <Page>
  //     <Header collapse="fade" fixed>
  //       <Header.Back pathname={RoutePath.Index} />
  //     </Header>
  //     <Content fullscreen>
  //       <SafeArea safe={['bottom']}>
  //         <Grid fixed>
  //           <Grid.Row>
  //             <Grid.Cell>
  //               <Box
  //                 aspectRatio={1}
  //                 borderRadius={8}
  //                 marginInline={20}
  //                 overflow="hidden"
  //                 position="relative"
  //               >
  //                 <Image src={data?.image} />
  //               </Box>
  //               <Card.Header>
  //                 <Card.Title>{data?.title}</Card.Title>
  //               </Card.Header>
  //               <Box marginInline={20} whiteSpace="pre-wrap">
  //                 {data?.content}
  //               </Box>
  //             </Grid.Cell>
  //           </Grid.Row>
  //         </Grid>
  //       </SafeArea>
  //     </Content>
  //   </Page>
  // );
});
