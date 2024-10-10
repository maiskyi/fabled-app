import { FC } from 'react';

import { Content, Header, Page } from '@core/uikit';
import { RoutePath } from '@bootstrap/constants';
import { useGetProducts, useGetOfferings } from '@core/purchases';
import { useConfig } from '@bootstrap/providers';

export const Subscribe: FC = () => {
  const { subscriptions } = useConfig();

  const { data } = useGetProducts({
    productIdentifiers: subscriptions.map(
      ({ appleProductId }) => appleProductId
    ),
  });

  const { data: q, error } = useGetOfferings();

  console.log(error);

  return (
    <Page>
      <Header>
        <Header.Back pathname={RoutePath.Index} />
      </Header>
      <Content>{JSON.stringify(data)}</Content>
    </Page>
  );
};
