import {
  Box,
  Content,
  Cover,
  Header,
  Loading,
  Page,
  SafeArea,
  Animation,
} from '@core/uikit';
import { Route, useRoute } from '@core/navigation';
import { RoutePath } from '@bootstrap/constants';
import { withLoad } from '@core/analytics';

import { FableProvider } from '../../providers/FableProvider';

import { Index } from './Index/Index';
import { Read } from './Read/Read';
import { Lullaby } from './_patitions/Lullaby';

export const Fable = withLoad({
  category: 'Fable',
  name: 'Fable Details',
})(() => {
  const [
    {
      params: { id },
    },
  ] = useRoute<{ id: string }>();

  return (
    <FableProvider id={id}>
      {({ isReady, story }) => (
        <Cover src={isReady ? story.image : undefined}>
          <Page>
            <Header transparent>
              <Header.Back color="dark" pathname={RoutePath.Index} />
            </Header>
            <Content fullscreen scrollY={false}>
              {isReady ? (
                <Box
                  display="flex"
                  flex="1 1 auto"
                  flexDirection="column"
                  height="100%"
                  justifyContent="flex-end"
                >
                  <Route path={RoutePath.FableRead}>
                    <Lullaby />
                  </Route>
                  <SafeArea
                    background="linear-gradient(to top, rgba(0, 0, 0, 1), transparent)"
                    display="flex"
                    flex="0 0 70%"
                    flexDirection="column"
                    justifyContent="flex-end"
                    safe={['bottom']}
                  >
                    <Route exact path={RoutePath.Fable}>
                      <Animation.Message>
                        <Index />
                      </Animation.Message>
                    </Route>
                    <Route path={RoutePath.FableRead}>
                      <Animation.Message>
                        <Read />
                      </Animation.Message>
                    </Route>
                  </SafeArea>
                </Box>
              ) : (
                <Loading isOpen={!isReady} />
              )}
            </Content>
          </Page>
        </Cover>
      )}
    </FableProvider>
  );
});
