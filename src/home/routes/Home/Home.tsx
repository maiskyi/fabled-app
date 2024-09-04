import { memo, useCallback, useMemo } from 'react';

import { useGetCollectionInfinite } from '@core/firestore';
import { Document, RoutePath } from '@bootstrap/constants';
import { DTO } from '@bootstrap/dto';
import { Page, Content, InfiniteScroll, Header, Box } from '@core/uikit';
import { useTranslation } from '@core/localization';
import { useRoute } from '@core/navigation';
import { useUser } from '@common/hooks';

import { FablesSkeleton } from './_patitions/FablesSkeleton';
import { FablesEmpty } from './_patitions/FablesEmpty';
import { FablesList } from './_patitions/FablesList';
import { FablesCreate, FablesCreateOnClickFn } from './_patitions/FablesCreate';
import { HOME_INITIAL_DATA } from './Home.const';

export const Home = memo(function Home() {
  const { t } = useTranslation();
  const [, navigate] = useRoute();
  const { uid } = useUser();

  const title = t('pages.home');

  const {
    isLoading,
    hasNextPage,
    fetchNextPage,
    data = HOME_INITIAL_DATA,
  } = useGetCollectionInfinite<DTO.Fable>(
    {
      doc: Document.Fable,
      orderBy: {
        direction: 'desc',
        fieldPath: 'createdAt',
      },
    },
    {
      filter: {
        queryConstraints: [
          {
            fieldPath: 'status',
            opStr: 'array-contains',
            type: 'where',
            value: DTO.FableStatus.Success,
          },
          {
            fieldPath: 'uid',
            opStr: '==',
            type: 'where',
            value: uid,
          },
        ],
        type: 'and',
      },
    }
  );

  const records = useMemo(() => {
    return data?.pages.flatMap((item) => item);
  }, [data]);

  const handleOnCreateClick: FablesCreateOnClickFn = useCallback(() => {
    navigate({ action: 'push', pathname: RoutePath.Create });
  }, [navigate]);

  const handleOnProfileClick = () => {
    navigate({ action: 'push', pathname: RoutePath.Profile });
  };

  const handleOnFableClick = (id: string) => {
    navigate({ action: 'push', params: { id }, pathname: RoutePath.Fable });
  };

  return (
    <Page>
      <Header translucent>
        <Header.Title>{title}</Header.Title>
        <Header.Actions>
          <Header.Action icons="person-circle" onClick={handleOnProfileClick} />
        </Header.Actions>
      </Header>
      <Content fullscreen inset={false}>
        <InfiniteScroll disabled={!hasNextPage} onScroll={fetchNextPage}>
          <Box display="flex" flexDirection="column" minHeight="100%">
            <Box flex={0}>
              <Header collapse="condense">
                <Header.Title size="large">{title}</Header.Title>
              </Header>
            </Box>
            <FablesCreate onClick={handleOnCreateClick} />
            {isLoading && <FablesSkeleton />}
            {!isLoading && !records.length && <FablesEmpty />}
            {!isLoading && !!records.length && (
              <FablesList data={records} onClick={handleOnFableClick} />
            )}
          </Box>
        </InfiniteScroll>
      </Content>
    </Page>
  );
});
