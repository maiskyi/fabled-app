import { memo } from 'react';

import { useGetCollectionInfinite } from '@core/firestore';
import { Document, RoutePath } from '@bootstrap/constants';
import { DTO } from '@bootstrap/dto';
import { Page, Content, InfiniteScroll, Fab, Header } from '@core/uikit';
import { useTranslation } from '@core/localization';
import { useRoute } from '@core/navigation';

import { FableCard } from './_patitions/FableCard';
import { HOME_INITIAL_DATA } from './Home.const';

export const Home = memo(function Home() {
  const { t } = useTranslation();
  const [, navigate] = useRoute();

  const title = t('pages.home');

  const {
    isLoading,
    hasNextPage,
    fetchNextPage,
    data = HOME_INITIAL_DATA,
  } = useGetCollectionInfinite<DTO.Fable>(
    {
      doc: Document.Fable,
    },
    {
      filter: {
        queryConstraints: [
          {
            fieldPath: 'status',
            opStr: '==',
            type: 'where',
            value: DTO.FableStatus.Success,
          },
        ],
        type: 'and',
      },
    }
  );

  const handleOnCreateClick = () => {
    navigate({ action: 'push', pathname: RoutePath.Create });
  };

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
        <Header collapse="condense">
          <Header.Title size="large">{title}</Header.Title>
        </Header>
        <Fab slot="fixed" placement={['end', 'bottom']}>
          <Fab.Button icon="add" onClick={handleOnCreateClick} />
        </Fab>
        <InfiniteScroll disabled={!hasNextPage} onScroll={fetchNextPage}>
          {data?.pages
            .flatMap((item) => item)
            .map((item) => {
              return (
                <FableCard
                  item={item}
                  key={item.id}
                  loading={isLoading}
                  onClick={() => handleOnFableClick(item.id)}
                />
              );
            })}
        </InfiniteScroll>
      </Content>
    </Page>
  );
});
