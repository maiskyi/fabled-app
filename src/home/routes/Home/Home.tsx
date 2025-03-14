import { useCallback } from 'react';

import { RoutePath } from '@bootstrap/constants';
import {
  Page,
  Content,
  InfiniteScroll,
  Header,
  SafeArea,
  useViewWillEnter,
  Grid,
} from '@core/uikit';
import { useTranslation } from '@core/localization';
import { useRoute } from '@core/navigation';
import { withLoad } from '@core/analytics';
// import { usePromptToSubscribe } from '@core/purchases';
// import { PromptToSubscribe } from '@common/features';

import { useFablesContext } from '../../providers';

import { FablesSkeleton } from './_partitions/FablesSkeleton';
import { FablesEmpty } from './_partitions/FablesEmpty';
import { FablesList } from './_partitions/FablesList';
import {
  FablesCreate,
  FablesCreateOnClickFn,
} from './_partitions/FablesCreate';

export const Home = withLoad({
  category: 'Home',
  name: 'Home',
})(function Home() {
  const { t } = useTranslation();
  const [, navigate] = useRoute();

  const title = t('pages.home');

  const isLoading = useFablesContext(({ isLoading }) => isLoading);

  const hasNextPage = useFablesContext(({ hasNextPage }) => hasNextPage);

  const fetchNextPage = useFablesContext(({ fetchNextPage }) => fetchNextPage);

  const refetch = useFablesContext(({ refetch }) => refetch);

  const records = useFablesContext(({ stories }) => stories);

  const handleOnCreateClick: FablesCreateOnClickFn = useCallback(() => {
    navigate({ action: 'push', pathname: RoutePath.Create });
  }, [navigate]);

  const handleOnProfileClick = () => {
    navigate({ action: 'push', pathname: RoutePath.Profile });
  };

  const handleOnFableClick = (id: string) => {
    navigate({ action: 'push', params: { id }, pathname: RoutePath.Fable });
  };

  useViewWillEnter(() => {
    refetch();
  });

  // usePromptToSubscribe({
  //   auto: true,
  //   component: PromptToSubscribe,
  // });

  return (
    <Page>
      <Header translucent>
        <Header.Title>{title}</Header.Title>
        <Header.Buttons>
          <Header.Button icon="person-circle" onClick={handleOnProfileClick} />
        </Header.Buttons>
      </Header>
      <Content fullscreen inset={false}>
        <InfiniteScroll disabled={!hasNextPage} onScroll={fetchNextPage}>
          <SafeArea
            display="flex"
            flexDirection="column"
            minHeight="100%"
            safe={['bottom']}
          >
            <Grid>
              <Grid.Row flex="0 0 auto">
                <Grid.Cell>
                  <Header collapse="condense">
                    <Header.Title size="large">{title}</Header.Title>
                  </Header>
                </Grid.Cell>
              </Grid.Row>
              <Grid.Row flex="0 0 auto">
                <Grid.Cell>
                  <FablesCreate onClick={handleOnCreateClick} />
                </Grid.Cell>
              </Grid.Row>
              {isLoading && <FablesSkeleton />}
              {!isLoading && !records?.length && <FablesEmpty />}
              {!isLoading && !!records?.length && (
                <FablesList data={records} onClick={handleOnFableClick} />
              )}
            </Grid>
          </SafeArea>
        </InfiniteScroll>
      </Content>
    </Page>
  );
});
