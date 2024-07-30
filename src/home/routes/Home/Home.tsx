import { memo } from 'react';
import { useHistory } from 'react-router-dom';

import { useGetCollectionInfinite } from '@core/firestore';
import { FireStoreDocument, RoutePath } from '@bootstrap/constants';
import { DTO } from '@bootstrap/dto';
import { Page, Content, InfiniteScroll, Fab } from '@core/uikit';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/react';

export const Home = memo(function Home() {
  const { push } = useHistory();

  const { data, hasNextPage, fetchNextPage } =
    useGetCollectionInfinite<DTO.Fable>({
      doc: FireStoreDocument.Fable,
    });

  const handleOnCreate = () => {
    push({ pathname: RoutePath.Create });
  };

  return (
    <Page>
      <Content fullscreen inset={false}>
        <Fab slot="fixed" placement={['end', 'bottom']}>
          <Fab.Button icon="add" onClick={handleOnCreate} />
        </Fab>
        <InfiniteScroll disabled={!hasNextPage} onScroll={fetchNextPage}>
          {data?.pages
            .flatMap((item) => item)
            .map(({ id, data: { title } }) => {
              return (
                <IonCard key={id}>
                  <IonCardHeader>
                    <IonCardSubtitle>{id}</IonCardSubtitle>
                    <IonCardTitle>{title}</IonCardTitle>
                  </IonCardHeader>
                </IonCard>
              );
            })}
        </InfiniteScroll>
      </Content>
    </Page>
  );
});
