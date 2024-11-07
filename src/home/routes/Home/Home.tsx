import { memo, useCallback } from 'react';

import { RoutePath } from '@bootstrap/constants';
import {
  Page,
  Content,
  InfiniteScroll,
  Header,
  Box,
  SafeArea,
  useViewDidEnter,
  Logo,
} from '@core/uikit';
import { useTranslation } from '@core/localization';
import { useRoute } from '@core/navigation';

import { useFablesContext } from '../../providers';

import { FablesSkeleton } from './_patitions/FablesSkeleton';
import { FablesEmpty } from './_patitions/FablesEmpty';
import { FablesList } from './_patitions/FablesList';
import { FablesCreate, FablesCreateOnClickFn } from './_patitions/FablesCreate';

export const Home = memo(function Home() {
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

  useViewDidEnter(() => {
    refetch();
  });

  return (
    <Page>
      <Header translucent>
        <Header.Actions slot="start">
          <Box paddingLeft={12}>
            <Logo height={20} />
          </Box>
        </Header.Actions>
        <Header.Title>{title}</Header.Title>
        <Header.Actions>
          <Header.Action icons="person-circle" onClick={handleOnProfileClick} />
        </Header.Actions>
      </Header>
      <Content fullscreen inset={false}>
        <InfiniteScroll disabled={!hasNextPage} onScroll={fetchNextPage}>
          <SafeArea
            display="flex"
            flexDirection="column"
            minHeight="100%"
            safe={['bottom']}
          >
            <Box flex={0}>
              <Header collapse="condense">
                <Header.Title size="large">{title}</Header.Title>
              </Header>
            </Box>
            <FablesCreate onClick={handleOnCreateClick} />
            {isLoading && <FablesSkeleton />}
            {!isLoading && !records?.length && <FablesEmpty />}
            {!isLoading && !!records?.length && (
              <FablesList data={records} onClick={handleOnFableClick} />
            )}
          </SafeArea>
        </InfiniteScroll>
      </Content>
    </Page>
  );
});
