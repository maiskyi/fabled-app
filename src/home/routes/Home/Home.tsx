import { memo } from 'react';
import { useHistory } from 'react-router-dom';

import { useGetCollectionInfinite } from '@core/firestore';
import { Document, RoutePath } from '@bootstrap/constants';
import { DTO } from '@bootstrap/dto';
import { Page, Content, InfiniteScroll, Fab, Header } from '@core/uikit';
import { useTranslation } from '@core/localization';

import { FableCard } from './_patitions/FableCard';
import { HOME_INITIAL_DATA } from './Home.const';

export const Home = memo(function Home() {
  const { push } = useHistory();
  const { t } = useTranslation();

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
        type: 'and',
        queryConstraints: [
          {
            type: 'where',
            fieldPath: 'status',
            opStr: '==',
            value: DTO.FableStatus.Success,
          },
        ],
      },
    }
  );

  const handleOnCreate = () => {
    push({ pathname: RoutePath.Create });
  };

  const handleOnProfile = () => {
    push({ pathname: RoutePath.Profile });
  };

  return (
    <Page>
      <Header translucent>
        <Header.Title>{title}</Header.Title>
        <Header.Actions>
          <Header.Action icons="person-circle" onClick={handleOnProfile} />
        </Header.Actions>
      </Header>
      <Content fullscreen inset={false}>
        <Header collapse="condense">
          <Header.Title size="large">{title}</Header.Title>
        </Header>
        <Fab slot="fixed" placement={['end', 'bottom']}>
          <Fab.Button icon="add" onClick={handleOnCreate} />
        </Fab>
        <InfiniteScroll disabled={!hasNextPage} onScroll={fetchNextPage}>
          {data?.pages
            .flatMap((item) => item)
            .map((item) => {
              return (
                <FableCard loading={isLoading} key={item.id} item={item} />
              );
            })}
        </InfiniteScroll>
      </Content>
    </Page>
  );
});
