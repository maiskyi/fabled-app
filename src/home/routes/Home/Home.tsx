import { memo } from 'react';

import { useGetCollectionInfinite } from '@core/firestore';
import { FireStoreDocument } from '@bootstrap/constants';
import { DTO } from '@bootstrap/dto';
import { Page, Content, InfiniteScroll } from '@core/uikit';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/react';

export const Home = memo(function Home() {
  const { data, hasNextPage, fetchNextPage } =
    useGetCollectionInfinite<DTO.Fable>({
      doc: FireStoreDocument.Fable,
    });

  return (
    <Page>
      <Content fullscreen inset={false}>
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
