import { memo } from 'react';

import { useGetCollection } from '@core/firestore';
import { FireStoreDocument } from '@bootstrap/constants';
import { DTO } from '@bootstrap/dto';
import { Page, Content } from '@core/uikit';

export const Home = memo(function Home() {
  const { data } = useGetCollection<DTO.Fable>({
    doc: FireStoreDocument.Fable,
  });

  return (
    <Page>
      <Content>
        {data?.map(({ id, data: { title } }) => {
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
