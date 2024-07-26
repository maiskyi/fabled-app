import { memo } from 'react';

import { useGetCollectionInfinite } from '@core/firestore';
import { FireStoreDocument } from '@bootstrap/constants';
import { DTO } from '@bootstrap/dto';
import { Page, Content } from '@core/uikit';

export const Home = memo(function Home() {
  const { data } = useGetCollectionInfinite<DTO.Fable>({
    doc: FireStoreDocument.Fable,
  });

  return (
    <Page>
      <Content>
        {data?.pages
          .flatMap((item) => item)
          .map(({ id, data: { title } }) => {
            return (
              <h1 key={id}>
                {title}: {id}
              </h1>
            );
          })}
      </Content>
    </Page>
  );
});
