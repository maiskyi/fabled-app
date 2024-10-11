import { FC } from 'react';

import { Box, Content, Form, Header, Page, Text } from '@core/uikit';
import { RoutePath } from '@bootstrap/constants';
import { usePurchases } from '@core/purchases';
import { useTranslation } from '@core/localization';

import { PackageCard } from './_partitions/PackageCard';
import { SubscribeFrom, SubscribeFromField } from './Subscribe.types';

export const Subscribe: FC = () => {
  const { t } = useTranslation();
  const { offering } = usePurchases();

  const title = t('pages.subscribe');

  const handleOnSubmit = () => {};

  return (
    <Page>
      <Header translucent>
        <Header.Back pathname={RoutePath.Index} />
        <Header.Title>{title}</Header.Title>
      </Header>
      <Content>
        <Header collapse="condense">
          <Header.Title size="large" wrap>
            {title}
          </Header.Title>
        </Header>
        <Box padding={16} paddingInline={20}>
          <Text>{t('intro.subscribe')}</Text>
        </Box>
        <Form<SubscribeFrom>
          defaultValues={{
            [SubscribeFromField.Product]:
              offering.availablePackages[0].identifier,
          }}
          onSubmit={handleOnSubmit}
        >
          <Form.RadioGroup name={SubscribeFromField.Product}>
            {offering.availablePackages.map((item) => {
              return <PackageCard key={item.identifier} {...item} />;
            })}
          </Form.RadioGroup>
        </Form>
      </Content>
    </Page>
  );
};
