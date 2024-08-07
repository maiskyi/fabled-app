import { memo } from 'react';
import { useHistory } from 'react-router-dom';

import { useGetCollectionInfinite } from '@core/firestore';
import { Document, RoutePath } from '@bootstrap/constants';
import { DTO } from '@bootstrap/dto';
import { Page, Content, InfiniteScroll, Fab, Header } from '@core/uikit';

import { FableCard } from './_patitions/FableCard';

export const Home = memo(function Home() {
  const { push } = useHistory();

  const { data, hasNextPage, fetchNextPage } =
    useGetCollectionInfinite<DTO.Fable>({
      doc: Document.Fable,
    });

  const handleOnCreate = async () => {
    push({ pathname: RoutePath.Create });
  };

  return (
    <Page>
      <Header translucent>
        <Header.Title>My Fables</Header.Title>
      </Header>
      <Content fullscreen inset={false}>
        <Header collapse="condense">
          <Header.Title size="large">My Fables</Header.Title>
        </Header>
        <Fab slot="fixed" placement={['end', 'bottom']}>
          <Fab.Button icon="add" onClick={handleOnCreate} />
        </Fab>
        <InfiniteScroll disabled={!hasNextPage} onScroll={fetchNextPage}>
          {data?.pages
            .flatMap((item) => item)
            .map((item) => {
              return <FableCard key={item.id} item={item} />;
            })}
        </InfiniteScroll>
      </Content>
    </Page>
  );
});
